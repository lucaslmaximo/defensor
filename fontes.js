/* ============================================================
   Minhas Fontes — biblioteca pessoal de PDFs (Camada B)
   ------------------------------------------------------------
   Tudo acontece DENTRO do aparelho: o PDF é lido pelo próprio
   navegador (pdf.js), fatiado por dispositivo (Art./§/Súmula/
   Tema) e guardado em IndexedDB. Nada sobe para servidor nenhum.

   A busca do Caderno de Erros tem dois passos:
     1. chave exata  — "CC, art. 1.829" -> cc:art:1829
     2. BM25 local   — busca léxica clássica sobre o índice
   Se nenhum dos dois passar do limiar, o app responde
   "não localizei nas suas fontes" em vez de inventar.

   Expõe window.DPEFontes (ver API no fim do arquivo).
   ============================================================ */
(function () {
  "use strict";

  var DB_NAME = "dperj_fontes";
  var DB_VER = 1;
  var PDFJS_SRC = "vendor/pdf.min.js";
  var WORKER_SRC = "vendor/pdf.worker.min.js";

  var MAX_CHUNK = 1400;   // caracteres por trecho antes de partir
  var ALVO_CHUNK = 1000;  // tamanho alvo ao partir texto corrido
  var OVERLAP = 150;      // sobreposição entre trechos partidos
  var MIN_CHUNK = 40;     // abaixo disso é sobra de diagramação
  var K1 = 1.5, B = 0.75; // parâmetros do BM25
  var LIMIAR = 0.18;      // fração do score máximo teórico para aceitar

  var suportado = (function () {
    try { return !!window.indexedDB && !!window.Promise; } catch (e) { return false; }
  })();

  /* ================= IndexedDB ================= */

  var dbP = null;
  function abrir() {
    if (dbP) return dbP;
    dbP = new Promise(function (res, rej) {
      var r = indexedDB.open(DB_NAME, DB_VER);
      r.onupgradeneeded = function (e) {
        var db = e.target.result;
        if (!db.objectStoreNames.contains("docs")) db.createObjectStore("docs", { keyPath: "id" });
        if (!db.objectStoreNames.contains("chunks")) {
          var cs = db.createObjectStore("chunks", { keyPath: "id" });
          cs.createIndex("doc", "doc", { unique: false });
          cs.createIndex("chave", "chave", { unique: false });
        }
        if (!db.objectStoreNames.contains("idx")) {
          // chave composta [doc, token]: adicionar uma fonte vira só PUT
          // (sem ler-modificar-gravar) e remover vira delete por faixa
          var is = db.createObjectStore("idx", { keyPath: ["doc", "tok"] });
          is.createIndex("tok", "tok", { unique: false });
        }
        if (!db.objectStoreNames.contains("lens")) db.createObjectStore("lens", { keyPath: "doc" });
      };
      r.onsuccess = function () { res(r.result); };
      r.onerror = function () { rej(r.error); };
    });
    return dbP;
  }

  function req(r) {
    return new Promise(function (res, rej) {
      r.onsuccess = function () { res(r.result); };
      r.onerror = function () { rej(r.error); };
    });
  }

  /* fn recebe a transação e devolve uma promise; todos os requests
     precisam ser abertos de forma síncrona dentro de fn (senão o
     IndexedDB fecha a transação antes da hora) */
  function tx(stores, mode, fn) {
    return abrir().then(function (db) {
      var t = db.transaction(stores, mode);
      var p = fn(t);
      return new Promise(function (res, rej) {
        t.oncomplete = function () { Promise.resolve(p).then(res, rej); };
        t.onerror = function () { rej(t.error); };
        t.onabort = function () { rej(t.error || new Error("transação abortada")); };
      });
    });
  }

  /* ================= texto: normalização e tokens ================= */

  var STOP = {};
  ("a o e de da do das dos em no na nos nas um uma uns umas por para com sem sob sobre entre " +
   "ao aos as os que se ser sera foi sao pelo pela pelos pelas seu sua seus suas este esta " +
   "esse essa aquele aquela isso isto como quando onde qual quais mais menos muito pouco ja " +
   "nao tambem apenas somente ou nem mas porem entao assim desde ate cada todo toda todos " +
   "todas outro outra outros outras mesmo mesma tal tais lhe lhes ele ela eles elas nos vos " +
   "meu minha art artigo artigos inciso incisos alinea paragrafo paragrafos caput dispoe " +
   "seguinte seguintes forma termos casos caso sera serao deve devera podera pode")
    .split(" ").forEach(function (w) { if (w) STOP[w] = 1; });

  function norm(s) {
    s = String(s == null ? "" : s).toLowerCase();
    try { s = s.normalize("NFD").replace(/[̀-ͯ]/g, ""); } catch (e) {}
    return s.replace(/[º°ª]/g, "");
  }

  /* "1.829" -> "1829" para o número do artigo virar um token só */
  function juntaMilhar(s) { return s.replace(/(\d)[. ](?=\d{3}(\D|$))/g, "$1"); }

  function tokens(s) {
    var brutos = juntaMilhar(norm(s)).replace(/[^a-z0-9]+/g, " ").split(" ");
    var out = [];
    for (var i = 0; i < brutos.length; i++) {
      var w = brutos[i];
      if (!w) continue;
      if (/^\d+$/.test(w)) { if (w.length <= 6) out.push(w); continue; }
      if (w.length < 3 || STOP[w]) continue;
      if (w.length > 4 && w.charAt(w.length - 1) === "s") w = w.slice(0, -1); // plural simples
      out.push(w);
    }
    return out;
  }

  /* ================= dicionário de diplomas ================= */
  /* Converte "CC", "Código Civil" e "Lei 10.406" na mesma chave.
     A lista é fechada: cobre o que as questões do app citam. */
  var DIPLOMAS = [
    { cod: "cf",   re: /\b(cf|crfb|cr)\b|constituicao (federal|da republica)|carta magna/ },
    { cod: "cc",   re: /\bcc\b|codigo civil|\b10406\b/ },
    { cod: "cpc",  re: /\bcpc\b|codigo de processo civil|\b13105\b/ },
    { cod: "cp",   re: /\bcp\b|codigo penal(?! militar)|decreto[- ]lei 2848|\b2848\b/ },
    { cod: "cpp",  re: /\bcpp\b|codigo de processo penal|\b3689\b/ },
    { cod: "cdc",  re: /\bcdc\b|codigo de defesa do consumidor|\b8078\b/ },
    { cod: "lep",  re: /\blep\b|lei de execucao penal|\b7210\b/ },
    { cod: "eca",  re: /\beca\b|estatuto da crianca|\b8069\b/ },
    { cod: "lc80", re: /\blc ?80\b|lei complementar ?(n ?)?80/ },
    { cod: "ctn",  re: /\bctn\b|codigo tributario/ },
    { cod: "clt",  re: /\bclt\b|consolidacao das leis do trabalho/ },
    { cod: "cadh", re: /convencao americana|pacto de san ?jose|\bcadh\b/ },
    { cod: "lacp", re: /\blacp\b|acao civil publica|\b7347\b/ },
    { cod: "lmp",  re: /maria da penha|\b11340\b/ },
    { cod: "ldro", re: /lei de drogas|\b11343\b/ },
    { cod: "lloc", re: /lei do inquilinato|locacoe|\b8245\b/ },
    { cod: "lidos", re: /estatuto (da pessoa idosa|do idoso)|\b10741\b/ },
    { cod: "llic", re: /lei de licitacoe|\b14133\b/ }
  ];

  function codDe(txtNorm) {
    for (var i = 0; i < DIPLOMAS.length; i++) if (DIPLOMAS[i].re.test(txtNorm)) return DIPLOMAS[i].cod;
    var g = txtNorm.match(/\blei\s*(?:n\s*)?[.]?\s*(\d{4,5})\b/);
    if (g) return "l" + g[1];
    return null;
  }

  /* "CC, art. 1.829" -> "cc:art:1829" · "Súmula 534 STJ" -> "stj:sumula:534" */
  function chaveDe(fonte) {
    var f = juntaMilhar(norm(fonte));
    var m = f.match(/sumula\s*vinculante[^\d]{0,6}(\d+)/);
    if (m) return "stf:sv:" + m[1];
    m = f.match(/\bsv[^\d]{0,4}(\d+)/);
    if (m) return "stf:sv:" + m[1];
    m = f.match(/sumula[^\d]{0,6}(\d+)/);
    if (m) return (/stf|supremo/.test(f) ? "stf" : "stj") + ":sumula:" + m[1];
    m = f.match(/tema[^\d]{0,6}(\d+)/);
    if (m) return (/stf|supremo/.test(f) ? "stf" : "stj") + ":tema:" + m[1];
    var cod = codDe(f);
    m = f.match(/art(?:igo)?s?[^\d]{0,4}(\d+)(?:\s*[-–]\s*([a-z])\b)?/);
    if (m && cod) return cod + ":art:" + m[1] + (m[2] ? "-" + m[2] : "");
    return null;
  }

  /* ================= leitura do PDF ================= */

  var carregandoLib = null;
  function carregarPdfJs() {
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    if (carregandoLib) return carregandoLib;
    carregandoLib = new Promise(function (res, rej) {
      var s = document.createElement("script");
      s.src = PDFJS_SRC;
      s.onload = function () {
        if (!window.pdfjsLib) { carregandoLib = null; rej(new Error("leitor de PDF não carregou")); return; }
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER_SRC;
        res(window.pdfjsLib);
      };
      s.onerror = function () {
        carregandoLib = null;
        rej(new Error("Não consegui carregar o leitor de PDF. Na primeira vez ele precisa de internet."));
      };
      document.head.appendChild(s);
    });
    return carregandoLib;
  }

  function linhasDaPagina(page) {
    return page.getTextContent().then(function (tc) {
      var linhas = [], atual = "", lastY = null;
      for (var i = 0; i < tc.items.length; i++) {
        var it = tc.items[i];
        if (typeof it.str !== "string") continue;
        var y = it.transform ? it.transform[5] : null;
        if (lastY !== null && y !== null && Math.abs(y - lastY) > 3.5 && atual) {
          linhas.push(atual); atual = "";
        }
        atual += it.str;
        if (it.hasEOL) { if (atual) linhas.push(atual); atual = ""; }
        if (y !== null) lastY = y;
      }
      if (atual) linhas.push(atual);
      return linhas.map(function (l) { return l.replace(/\s+/g, " ").trim(); })
        .filter(function (l) { return l.length > 0; });
    });
  }

  /* cabeçalho/rodapé: linha curta que se repete na maioria das páginas */
  function limparRepetidas(paginas) {
    var freq = {}, n = paginas.length;
    paginas.forEach(function (ls) {
      var vistas = {};
      ls.forEach(function (l) {
        if (l.length > 80) return;
        var k = norm(l).replace(/\d+/g, "#");
        if (vistas[k]) return;
        vistas[k] = 1; freq[k] = (freq[k] || 0) + 1;
      });
    });
    var corte = Math.max(3, Math.ceil(n * 0.6));
    return paginas.map(function (ls) {
      return ls.filter(function (l) {
        if (l.length > 80) return true;
        if (/^\d{1,4}$/.test(l)) return false; // número de página solto
        var k = norm(l).replace(/\d+/g, "#");
        return (freq[k] || 0) < corte;
      });
    });
  }

  /* ================= fatiamento por dispositivo ================= */

  /* o ":" aparece porque as apostilas escrevem "Tema: 998:" */
  var RE_ART = /^art(?:igo)?s?\.?\s*\d+/i;
  var RE_SUM = /^s[úu]mula(\s+vinculante)?:?\s*n?[.º°]?\s*\d+/i;
  var RE_TEMA = /^tema:?\s*n?[.º°]?\s*\d+/i;

  function marcador(linha) {
    if (RE_ART.test(linha) || RE_SUM.test(linha) || RE_TEMA.test(linha)) {
      return linha.slice(0, 60).replace(/\s*[-–—:.]\s*$/, "");
    }
    return null;
  }

  function partirLongo(texto) {
    if (texto.length <= MAX_CHUNK) return [texto];
    var partes = [], i = 0;
    while (i < texto.length) {
      var fim = Math.min(texto.length, i + ALVO_CHUNK);
      if (fim < texto.length) {
        var ponto = texto.lastIndexOf(". ", fim);
        if (ponto > i + ALVO_CHUNK * 0.5) fim = ponto + 1;
      }
      partes.push(texto.slice(i, fim).trim());
      if (fim >= texto.length) break;
      i = Math.max(i + 1, fim - OVERLAP);
    }
    return partes.filter(function (p) { return p.length >= MIN_CHUNK; });
  }

  function fatiar(paginas, docId, docNome) {
    var chunks = [], ord = 0;
    var codAtual = null;
    var buf = null; // { titulo, pag, cod, linhas:[] }

    function fechar() {
      if (!buf) return;
      var texto = buf.linhas.join(" ").replace(/\s+/g, " ").trim();
      if (texto.length < MIN_CHUNK) { buf = null; return; }
      var chave = null;
      if (buf.titulo) {
        var t = juntaMilhar(norm(buf.titulo));
        var m;
        if ((m = t.match(/sumula\s*vinculante[^\d]{0,6}(\d+)/))) chave = "stf:sv:" + m[1];
        else if ((m = t.match(/sumula[^\d]{0,6}(\d+)/))) chave = (/stf/.test(t) ? "stf" : "stj") + ":sumula:" + m[1];
        else if ((m = t.match(/tema[^\d]{0,6}(\d+)/))) chave = (/stf/.test(t) ? "stf" : "stj") + ":tema:" + m[1];
        else if ((m = t.match(/art(?:igo)?s?[^\d]{0,4}(\d+)(?:\s*[-–]\s*([a-z])\b)?/)) && buf.cod) {
          chave = buf.cod + ":art:" + m[1] + (m[2] ? "-" + m[2] : "");
        }
      }
      partirLongo(texto).forEach(function (p, i) {
        chunks.push({
          id: docId + ":" + ord, doc: docId, docNome: docNome, ord: ord,
          pag: buf.pag, chave: (i === 0 ? chave : null),
          titulo: buf.titulo || "", texto: p
        });
        ord++;
      });
      buf = null;
    }

    paginas.forEach(function (linhas, pi) {
      var pag = pi + 1;
      for (var i = 0; i < linhas.length; i++) {
        var l = linhas[i];
        // junta palavra quebrada por hífen no fim da linha
        while (/[a-záéíóúâêôãõç]-$/i.test(l) && i + 1 < linhas.length && /^[a-záéíóúâêôãõç]/i.test(linhas[i + 1])) {
          l = l.slice(0, -1) + linhas[i + 1]; i++;
        }
        var c = codDe(norm(l));
        if (c) codAtual = c;
        var mk = marcador(l);
        if (mk) { fechar(); buf = { titulo: mk, pag: pag, cod: codAtual, linhas: [] }; }
        else if (!buf) { buf = { titulo: "", pag: pag, cod: codAtual, linhas: [] }; }
        buf.linhas.push(l);
        // texto corrido sem marcador: corta sozinho para não virar um bloco gigante
        if (!buf.titulo && buf.linhas.join(" ").length > MAX_CHUNK) fechar();
      }
    });
    fechar();
    return chunks;
  }

  /* ================= índice ================= */

  function indexar(chunks) {
    var post = {};  // token -> [ord, tf, ord, tf, ...]
    var lens = [];
    chunks.forEach(function (c) {
      var ts = tokens(c.titulo + " " + c.texto);
      lens[c.ord] = ts.length;
      var tf = {};
      ts.forEach(function (t) { tf[t] = (tf[t] || 0) + 1; });
      for (var t2 in tf) {
        if (!post[t2]) post[t2] = [];
        post[t2].push(c.ord, tf[t2]);
      }
    });
    return { post: post, lens: lens };
  }

  /* grava em lotes: transação longa demais trava o navegador do celular */
  function gravarIndice(docId, post) {
    var toks = Object.keys(post), i = 0, LOTE = 1500;
    function proximo() {
      if (i >= toks.length) return Promise.resolve();
      var fatia = toks.slice(i, i + LOTE); i += LOTE;
      return tx(["idx"], "readwrite", function (t) {
        var st = t.objectStore("idx");
        fatia.forEach(function (tk) { st.put({ doc: docId, tok: tk, p: post[tk] }); });
        return null;
      }).then(proximo);
    }
    return proximo();
  }

  function gravarChunks(chunks) {
    var i = 0, LOTE = 800;
    function proximo() {
      if (i >= chunks.length) return Promise.resolve();
      var fatia = chunks.slice(i, i + LOTE); i += LOTE;
      return tx(["chunks"], "readwrite", function (t) {
        var st = t.objectStore("chunks");
        fatia.forEach(function (c) { st.put(c); });
        return null;
      }).then(proximo);
    }
    return proximo();
  }

  /* ================= API: adicionar ================= */

  /* File.arrayBuffer() só existe do Safari 14 em diante — em iPhone
     antigo cai no FileReader */
  function lerArquivo(file) {
    if (file.arrayBuffer) return file.arrayBuffer();
    return new Promise(function (res, rej) {
      var fr = new FileReader();
      fr.onload = function () { res(fr.result); };
      fr.onerror = function () { rej(new Error("não consegui ler o arquivo")); };
      fr.readAsArrayBuffer(file);
    });
  }

  function adicionar(file, onProgress, jaExistentes) {
    var nome = (file.name || "documento.pdf").replace(/\.pdf$/i, "");
    var dup = (jaExistentes || []).filter(function (d) { return d.nome === nome && d.bytes === file.size; });
    if (dup.length) return Promise.reject(new Error('"' + nome + '" já está nas suas fontes.'));

    var docId = "d" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    var prog = onProgress || function () {};

    return carregarPdfJs().then(function (pdfjs) {
      prog({ fase: "abrindo", nome: nome });
      return lerArquivo(file).then(function (buf) {
        return pdfjs.getDocument({ data: new Uint8Array(buf), isEvalSupported: false }).promise;
      });
    }).then(function (pdf) {
      var total = pdf.numPages, paginas = [], chars = 0, i = 1;
      function lerPagina() {
        if (i > total) return Promise.resolve();
        var n = i++;
        return pdf.getPage(n).then(linhasDaPagina).then(function (linhas) {
          paginas.push(linhas);
          linhas.forEach(function (l) { chars += l.length; });
          if (n % 2 === 0 || n === total) prog({ fase: "lendo", nome: nome, pagina: n, total: total });
          return lerPagina();
        });
      }
      return lerPagina().then(function () {
        try { pdf.destroy(); } catch (e) {}
        if (chars / Math.max(1, total) < 100) {
          throw new Error('"' + nome + '" parece ser um PDF escaneado (imagem). Só consigo indexar PDF com texto pesquisável.');
        }
        prog({ fase: "indexando", nome: nome, pagina: total, total: total });
        var chunks = fatiar(limparRepetidas(paginas), docId, nome);
        if (!chunks.length) throw new Error('Não encontrei texto aproveitável em "' + nome + '".');
        var ix = indexar(chunks);
        prog({ fase: "salvando", nome: nome, pagina: total, total: total });
        var doc = {
          id: docId, nome: nome, paginas: total, trechos: chunks.length,
          bytes: file.size || 0, at: Date.now(),
          nTok: ix.lens.reduce(function (a, b) { return a + (b || 0); }, 0)
        };
        return gravarChunks(chunks)
          .then(function () { return gravarIndice(docId, ix.post); })
          .then(function () {
            return tx(["docs", "lens"], "readwrite", function (t) {
              t.objectStore("docs").put(doc);
              t.objectStore("lens").put({ doc: docId, lens: ix.lens });
              return null;
            });
          })
          .then(function () { cacheLens = null; cacheDocs = null; return doc; });
      });
    });
  }

  /* ================= API: listar / remover ================= */

  var cacheDocs = null, cacheLens = null;

  function listar() {
    if (cacheDocs) return Promise.resolve(cacheDocs);
    if (!suportado) return Promise.resolve([]);
    return tx(["docs"], "readonly", function (t) {
      return req(t.objectStore("docs").getAll());
    }).then(function (ds) {
      ds.sort(function (a, b) { return b.at - a.at; });
      cacheDocs = ds;
      return ds;
    }).catch(function () { return []; });
  }

  function remover(docId) {
    return tx(["docs", "lens", "chunks", "idx"], "readwrite", function (t) {
      t.objectStore("docs").delete(docId);
      t.objectStore("lens").delete(docId);
      var ch = t.objectStore("chunks").index("doc").openKeyCursor(IDBKeyRange.only(docId));
      ch.onsuccess = function () {
        var c = ch.result;
        if (c) { t.objectStore("chunks").delete(c.primaryKey); c.continue(); }
      };
      t.objectStore("idx").delete(IDBKeyRange.bound([docId, ""], [docId, "￿"]));
      return null;
    }).then(function () { cacheDocs = null; cacheLens = null; });
  }

  function carregarLens() {
    if (cacheLens) return Promise.resolve(cacheLens);
    return tx(["lens"], "readonly", function (t) {
      return req(t.objectStore("lens").getAll());
    }).then(function (rs) {
      var m = {};
      rs.forEach(function (r) { m[r.doc] = r.lens; });
      cacheLens = m;
      return m;
    });
  }

  /* ================= API: buscar ================= */

  /* pesos: a fonte citada pela questão vale mais que a explicação,
     e o enunciado entra só como desempate */
  function consulta(q) {
    var pesos = {};
    function add(txt, w) {
      tokens(txt).forEach(function (t) { pesos[t] = Math.max(pesos[t] || 0, w); });
    }
    add(q.enunciado || "", 0.4);
    add(q.explicacao || "", 1);
    add(q.fonte || "", 3);
    return pesos;
  }

  /* null = o usuário não tem nenhuma fonte · NADA = tem, mas não achou */
  var NADA = { modo: "nada" };

  function buscar(q) {
    if (!suportado) return Promise.resolve(null);
    return listar().then(function (docs) {
      if (!docs.length) return null;
      var N = docs.reduce(function (a, d) { return a + d.trechos; }, 0);
      var avgdl = docs.reduce(function (a, d) { return a + (d.nTok || 0); }, 0) / Math.max(1, N) || 1;
      var chave = chaveDe(q.fonte || "");

      return carregarLens().then(function (lens) {
        // 1) chave exata do dispositivo
        var exata = chave ? tx(["chunks"], "readonly", function (t) {
          return req(t.objectStore("chunks").index("chave").getAll(chave));
        }) : Promise.resolve([]);

        return exata.then(function (hits) {
          if (hits && hits.length) {
            return { modo: "chave", chave: chave, trechos: hits.slice(0, 3) };
          }
          // 2) BM25
          var pesos = consulta(q);
          var toks = Object.keys(pesos);
          if (!toks.length) return NADA;
          return tx(["idx"], "readonly", function (t) {
            var st = t.objectStore("idx").index("tok");
            return Promise.all(toks.map(function (tk) {
              return req(st.getAll(tk)).then(function (rs) { return { tok: tk, rs: rs }; });
            }));
          }).then(function (listas) {
            /* O número do dispositivo ("676", "1829") é o que identifica
               o trecho. Se a questão cita um e nenhum trecho o contém,
               qualquer casamento é coincidência de vocabulário jurídico:
               melhor dizer que não achou do que mostrar a lei errada. */
            var nums = {}, temNum = false;
            numerosDaFonte(q.fonte, true).forEach(function (n) { nums[n] = 1; temNum = true; });
            var comNum = {};

            var scores = {}, matched = {}, maxScore = 0;
            listas.forEach(function (L) {
              var df = 0;
              L.rs.forEach(function (r) { df += r.p.length / 2; });
              if (!df) return;
              var idf = Math.log(1 + (N - df + 0.5) / (df + 0.5));
              var w = pesos[L.tok];
              maxScore += w * idf * (K1 + 1);
              L.rs.forEach(function (r) {
                var ll = lens[r.doc] || [];
                for (var i = 0; i < r.p.length; i += 2) {
                  var ord = r.p[i], tf = r.p[i + 1];
                  var dl = ll[ord] || avgdl;
                  var s = w * idf * (tf * (K1 + 1)) / (tf + K1 * (1 - B + B * dl / avgdl));
                  var k = r.doc + ":" + ord;
                  scores[k] = (scores[k] || 0) + s;
                  matched[k] = (matched[k] || 0) + 1;
                  if (nums[L.tok]) comNum[k] = 1;
                }
              });
            });
            var ids = Object.keys(scores).filter(function (k) {
              return matched[k] >= 2 && (!temNum || comNum[k]);
            });
            if (!ids.length) return NADA;
            ids.sort(function (a, b) { return scores[b] - scores[a]; });
            if (scores[ids[0]] < LIMIAR * maxScore) return NADA;
            var top = ids.slice(0, 3);
            return tx(["chunks"], "readonly", function (t) {
              var st = t.objectStore("chunks");
              return Promise.all(top.map(function (k) { return req(st.get(k)); }));
            }).then(function (cs) {
              cs = cs.filter(Boolean);
              if (!cs.length) return NADA;
              return { modo: "busca", chave: chave, score: scores[top[0]] / maxScore, trechos: cs };
            });
          });
        });
      });
    }).catch(function () { return null; });
  }

  /* O que identifica o dispositivo é o NÚMERO ("676", "1829"), não a
     palavra "súmula" ou "civil" — destacar essas só polui o trecho.
     "forte" descarta ano (2021) e sufixo de lei (8.009/90): esses
     aparecem em qualquer página e não servem para confirmar nada. */
  function numerosDaFonte(fonte, forte) {
    var brutos = juntaMilhar(norm(fonte || "")).replace(/[^a-z0-9]+/g, " ").split(" ");
    var todos = [], visto = {};
    brutos.forEach(function (w) {
      if (!/^\d{2,6}$/.test(w) || visto[w]) return;
      if (+w >= 1900 && +w <= 2099) return; // ano
      visto[w] = 1; todos.push(w);
    });
    if (!forte) return todos.slice(0, 5);
    var fortes = todos.filter(function (w) { return w.length >= 3; });
    return (fortes.length ? fortes : todos).slice(0, 5);
  }
  function termosDestaque(q) { return numerosDaFonte(q && q.fonte, false); }

  /* pede ao navegador para não descartar os dados (iOS/Safari limpam
     armazenamento de site pouco usado; com PWA instalado o pedido cola) */
  function fixar() {
    try {
      if (navigator.storage && navigator.storage.persist) return navigator.storage.persist();
    } catch (e) {}
    return Promise.resolve(false);
  }

  function espaco() {
    try {
      if (navigator.storage && navigator.storage.estimate) return navigator.storage.estimate();
    } catch (e) {}
    return Promise.resolve(null);
  }

  window.DPEFontes = {
    suportado: suportado,
    listar: listar,
    adicionar: adicionar,
    remover: remover,
    buscar: buscar,
    termosDestaque: termosDestaque,
    chaveDe: chaveDe,
    fixar: fixar,
    espaco: espaco,
    _tokens: tokens,   // usados pelos testes
    _fatiar: fatiar
  };
})();
