/* ============================================================
   App de Estudo DPE-RJ — lógica (vanilla JS, sem build)
   ============================================================ */
(function () {
  "use strict";

  var DATA = null; // dados da prova ativa (definidos em loadProva)
  var DAY = 86400000;
  var KEY = "dperj_state_v1";
  var APP_VERSION = "4.4"; // exibida no Perfil; usada pela checagem de atualização
  var REDUCED = false;
  try { REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  /* ---------- ícones de traço (substituem os emojis da interface) ---------- */
  var ICONS = {
    flame: '<path d="M12 3c1.2 3.2-3 4.6-3 8.4a3.9 3.9 0 007.8 0c0-1.2-.5-2.2-1.1-3-.1 2.1-2.9 2.4-2.9.3 0-2 2.3-3.4-.8-5.7z"/>',
    heart: '<path d="M12 20.5C7.5 16.4 4 13.4 4 9.9 4 7.6 5.8 6 7.9 6c1.6 0 3 .9 4.1 2.3C13.1 6.9 14.5 6 16.1 6 18.2 6 20 7.6 20 9.9c0 3.5-3.5 6.5-8 10.6z"/>',
    bolt: '<path d="M13 2.5L5.5 13H10l-1 8.5L16.5 11H12z"/>',
    trail: '<path d="M4 19c4.5-2 4.5-11.5 8-11.5S15.5 17 20 15M6 4.5l1.8 1.8M17.5 3.5l-1.6 2.4"/>',
    refresh: '<path d="M21 12a9 9 0 11-2.9-6.6M21 3.5V8.5h-5"/>',
    bookmark: '<path d="M6.5 3.5h11V21L12 16.8 6.5 21z"/>',
    users: '<circle cx="9" cy="8.2" r="3.2"/><path d="M3.2 20c1-3.4 3.2-5 5.8-5s4.8 1.6 5.8 5M15.4 5.4a3.2 3.2 0 010 5.6M17 15.4c1.9.8 3.2 2.3 3.8 4.6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 21c1.4-3.9 4.2-5.8 7.5-5.8s6.1 1.9 7.5 5.8"/>',
    check: '<path d="M5 13l4.2 4.2L19 7"/>',
    lock: '<rect x="6" y="11" width="12" height="9" rx="2"/><path d="M9 11V8a3 3 0 016 0v3"/>',
    book: '<path d="M4.5 19.5V6a2 2 0 012-2H19.5v15.5H6.5a2 2 0 00-2 2zm0 0a2 2 0 012-2H19.5"/>',
    scales: '<path d="M12 4v16M6.5 20h11M12 6.5H6m6 0h6M6 6.5l-2.4 5.6a3.4 3.4 0 006.8 0L8 6.5m10 0l-2.4 5.6a3.4 3.4 0 006.8 0L20 6.5"/>',
    columns: '<path d="M4 21h16M5 8.5h14M12 3.5l7.5 5h-15zM7.5 8.5V17M12 8.5V17M16.5 8.5V17M5 17h14v2H5z"/>',
    briefcase: '<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M9.5 8V5.5h5V8M4 13.5h16"/>',
    bag: '<path d="M6.2 8h11.6l1 12.5H5.2zM9 8a3 3 0 016 0"/>',
    sprout: '<path d="M12 21v-8M12 13c0-4.2-3.1-6.3-7.3-6.3 0 4.2 3.1 6.3 7.3 6.3zm0 0c0-4.2 3.1-6.3 7.3-6.3 0 4.2-3.1 6.3-7.3 6.3z"/>',
    gavel: '<path d="M13.5 4.5l6 6M11 7l6 6M15.5 5l-8.5 8.5M8 21h8M12 21v-4.5l-3-3"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M20.5 20.5L16 16"/>',
    link: '<path d="M9.5 14.5l5-5M8.2 11.5l-2 2a4 4 0 105.7 5.7l2-2M15.8 12.5l2-2a4 4 0 10-5.7-5.7l-2 2"/>',
    eye: '<path d="M2.5 12S6.5 5.5 12 5.5 21.5 12 21.5 12 17.5 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
    building: '<path d="M4.5 21h15M6.5 21V4h11v17M10 8h1.5M14 8h1.5M10 12h1.5M14 12h1.5M11 21v-4h2v4"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c3 3.4 3 13.6 0 17-3-3.4-3-13.6 0-17z"/>',
    shield: '<path d="M12 3l7.5 2.8v6.1c0 4.8-3.3 7.6-7.5 9.1-4.2-1.5-7.5-4.3-7.5-9.1V5.8z"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 1110 4a6.8 6.8 0 0010 10.5z"/>',
    printer: '<path d="M7 8V4h10v4M5 8h14v7.5h-3.5M8.5 15.5H5V8M8.5 13h7v7h-7z"/>',
    share: '<path d="M12 3.5V15M8 7l4-4 4 4M5.5 12.5V20h13v-7.5"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 01-8 0zM8 5H4.5c0 3 1.5 4.5 3.5 5M16 5h3.5c0 3-1.5 4.5-3.5 5M12 13v4M8.5 20.5h7M10 17h4v3.5h-4z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    grad: '<path d="M12 4.5L2.5 9 12 13.5 21.5 9zM6 11v4.5c0 1.5 2.7 2.8 6 2.8s6-1.3 6-2.8V11M21.5 9v5"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>',
    calendar: '<rect x="4" y="5.5" width="16" height="15" rx="2"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/>',
    ballot: '<rect x="3.5" y="12" width="17" height="8.5" rx="2"/><path d="M7.5 12V3.5h9V12M10 7.2l1.5 1.5 3-3"/>',
    coins: '<ellipse cx="12" cy="6.2" rx="7.5" ry="2.9"/><path d="M4.5 6.2v5.3c0 1.6 3.4 2.9 7.5 2.9s7.5-1.3 7.5-2.9V6.2M4.5 11.5v5.3c0 1.6 3.4 2.9 7.5 2.9s7.5-1.3 7.5-2.9v-5.3"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    pencil: '<path d="M4 20l1-4.4L15.6 5a2.1 2.1 0 013 3L8 18.6zM13.6 7l3.4 3.4"/>',
    flag: '<path d="M6 21V4M6 5h11.5l-2.2 3.6L17.5 12H6"/>',
    star: '<path d="M12 3.6l2.6 5.3 5.8.9-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.9z"/>',
    mountain: '<path d="M2.5 19.5h19L14.4 6l-3.6 6.6-2.3-2.9z"/>',
    bolts: '<path d="M9.8 2.5L4.5 11h3.4l-.8 6.4L12.4 9H9z"/><path d="M17.8 8.5l-3.3 5.2h2.1l-.5 3.8 3.4-5.3h-2z"/>',
    medal: '<circle cx="12" cy="14.8" r="4.8"/><path d="M9.2 10.4L6.5 3.5h11l-2.7 6.9"/>',
    broom: '<path d="M14.2 3.8l6 6M16.8 6.4l-6.2 6.2M10.6 12.6L4.5 19.5h8.2l3.1-6z"/>',
    swords: '<path d="M5 3.5l11 11M8.6 17.6L3.5 20.5l2.9-5.1M19 3.5l-11 11M15.4 17.6l5.1 2.9-2.9-5.1"/>',
    cloud: '<path d="M7.6 19a4 4 0 01-.4-8A5.5 5.5 0 0118 11.7 3.7 3.7 0 0117.2 19z"/>',
    sound: '<path d="M4 9.5h3.6L12 5.5v13L7.6 14.5H4zM15.6 9.3a4 4 0 010 5.4M18.3 6.7a7.6 7.6 0 010 10.6"/>',
    soundOff: '<path d="M4 9.5h3.6L12 5.5v13L7.6 14.5H4zM16 10l4.5 4.5M20.5 10L16 14.5"/>'
  };
  function icon(name, extra) {
    return '<svg class="ic' + (extra ? ' ' + extra : '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }
  var MAT_ICON = {
    "Direito Civil": "scales",
    "Direito Processual Civil": "columns",
    "Direito Empresarial": "briefcase",
    "Direito do Consumidor": "bag",
    "Criança, Adolescente e Idoso": "sprout",
    "Direito Penal": "gavel",
    "Direito Processual Penal": "search",
    "Direito de Execução Penal": "link",
    "Criminologia": "eye",
    "Direito Constitucional": "book",
    "Direito Administrativo": "building",
    "Direitos Humanos": "globe",
    "Formação Humanística": "grad",
    "Princípios Institucionais da Defensoria": "shield",
    // matérias que entraram com o MPRJ
    "Legislação Penal Extravagante": "bookmark",
    "Direito Eleitoral": "ballot",
    "Direito Financeiro e Tributário": "coins",
    "Direito da Infância e Juventude": "sprout",
    "Tutela Coletiva": "users",
    "Princípios Institucionais do Ministério Público": "shield"
  };
  function matIcon(u) { return icon(MAT_ICON[u.materia] || "book"); }
  var ROMANOS = ["I", "II", "III", "IV", "V", "VI", "VII"];
  function insignia(idx) {
    return '<span class="insig t' + idx + '" title="Patente">' + (ROMANOS[idx] || idx + 1) + '</span>';
  }
  var HEART_MAX = 5;
  var HEART_REGEN_MS = 2 * 3600000; // 1 vida a cada 2 horas
  var BLITZ_LIVES = 3; // vidas próprias do Modo Blitz (não gastam as normais)

  /* ---------- sons e vibração (WebAudio sintetizado, sem arquivos) ---------- */
  var AC = null;
  function tone(freq, when, dur, type, vol) {
    var o = AC.createOscillator(), g = AC.createGain();
    o.type = type || "sine"; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(vol || 0.1, when + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    o.connect(g); g.connect(AC.destination);
    o.start(when); o.stop(when + dur + 0.05);
  }
  function sfx(kind) {
    if (S.sons === false) return;
    try {
      if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
      if (AC.state === "suspended") AC.resume();
      var t = AC.currentTime + 0.01;
      if (kind === "ok") { tone(880, t, 0.09); tone(1174.7, t + 0.08, 0.13); }
      else if (kind === "no") { tone(196, t, 0.16, "sawtooth", 0.05); tone(185, t + 0.09, 0.2, "sawtooth", 0.05); }
      else if (kind === "fim") { [523.3, 659.3, 784, 1046.5].forEach(function (f, i) { tone(f, t + i * 0.11, 0.15); }); }
      else if (kind === "premio") { tone(1318.5, t, 0.1); tone(1568, t + 0.09, 0.1); tone(2093, t + 0.18, 0.22); }
    } catch (e) {}
  }
  function vib(p) {
    if (S.sons === false) return;
    try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) {}
  }

  /* Patentes: carreira por matéria, movida a XP */
  var RANKS = [
    { nome: "Estudante",         xp: 0 },
    { nome: "Bacharel",          xp: 60 },
    { nome: "Analista",          xp: 150 },
    { nome: "Substituto(a)",     xp: 300 },
    { nome: "Titular",           xp: 500 },
    { nome: "Classe Especial",   xp: 750 },
    { nome: "Defensor(a) Geral", xp: 1000 }
  ];
  function rankFor(xp) {
    var i = 0;
    for (var k = 0; k < RANKS.length; k++) if (xp >= RANKS[k].xp) i = k;
    var cur = RANKS[i], next = RANKS[i + 1] || null;
    var pct = next ? Math.min(100, Math.round((xp - cur.xp) / (next.xp - cur.xp) * 100)) : 100;
    return { idx: i, cur: cur, next: next, pct: pct };
  }
  /* As estatísticas por matéria são guardadas por PROVA: sem isso,
     "Direito Civil" da DPE-RJ e da ENAM somariam na mesma patente.
     A chave é "<prova>|<matéria>"; na tela mostra-se só a matéria. */
  function matKey(m) { return (PROVA ? PROVA.id : "?") + "|" + m; }
  function matNome(k) { var i = k.indexOf("|"); return i === -1 ? k : k.slice(i + 1); }
  function daProva(k) { return k.indexOf((PROVA ? PROVA.id : "?") + "|") === 0; }
  function materiaXp(m) { return S.xpByMateria[matKey(m)] || 0; }

  /* O campo "cor" das unidades em data.js é ignorado: o design
     "Sem IA" tem um acento único (dourado), que já acompanha
     claro/escuro pelo token --acc. */
  /* Grupos que separam as unidades na trilha. Cada prova define os
     seus em meta.grupos; a DPE-RJ, anterior a isso, usa este mapa. */
  var BANCA_PADRAO = {
    "I":  { nome: "Banca I", tema: "Cível" },
    "II": { nome: "Banca II", tema: "Criminal" },
    "III":{ nome: "Banca III", tema: "Público" }
  };
  function grupoInfo(g) {
    var mapa = (DATA && DATA.meta && DATA.meta.grupos) || BANCA_PADRAO;
    return mapa[g] || { nome: g, tema: "" };
  }

  /* ---------- provas disponíveis ---------- */
  // Para adicionar uma prova nova: crie um data-<prova>.js no mesmo formato
  // do data.js (definindo um objeto global próprio, ex.: window.APP_DATA_MPRJ),
  // inclua o <script> dele no index.html e acrescente uma entrada aqui.
  // IDs de unidades/lições/questões devem ser únicos entre as provas.
  var PROVAS = [
    {
      id: "dpe-rj",
      nome: "Defensoria Pública · RJ",
      detalhe: "XXIX Concurso · FGV",
      icone: "shield",
      data: window.APP_DATA
    },
    {
      id: "enam",
      nome: "Magistratura · ENAM",
      detalhe: "Exame Nacional · FGV",
      icone: "scales",
      data: window.APP_DATA_ENAM
    },
    {
      id: "mprj",
      nome: "Ministério Público · RJ",
      detalhe: "XXXIX Concurso · FGV",
      icone: "building",
      data: window.APP_DATA_MPRJ
    }
  ];
  function provaById(id) {
    for (var i = 0; i < PROVAS.length; i++) if (PROVAS[i].id === id) return PROVAS[i];
    return null;
  }

  /* Uma prova pode reaproveitar as questões de outra: em vez de
     `questoes`, a lição traz `refs` com os ids de origem. Aqui cada
     ref vira um clone com id prefixado — mesmo texto, id próprio,
     para que progresso, SRS e caderno de erros não se misturem. */
  function resolverRefs(prova) {
    var d = prova.data;
    if (!d || !d.herdaDe) return;
    var origem = window[d.herdaDe];
    if (!origem) { console.error("Prova " + prova.id + ": banco de origem " + d.herdaDe + " não encontrado."); return; }
    var porId = {};
    origem.units.forEach(function (u) {
      u.licoes.forEach(function (l) { (l.questoes || []).forEach(function (q) { porId[q.id] = q; }); });
    });
    var pref = d.prefixo || (prova.id + "-"), vistos = {}, faltando = [], repetidos = [];
    d.units.forEach(function (u) {
      u.licoes.forEach(function (l) {
        if (!l.refs) return;
        l.questoes = [];
        l.refs.forEach(function (ref) {
          var src = porId[ref];
          if (!src) { faltando.push(ref); return; }
          if (vistos[ref]) repetidos.push(ref);
          vistos[ref] = 1;
          var c = {};
          for (var k in src) c[k] = src[k];
          c.id = pref + ref;
          l.questoes.push(c);
        });
      });
    });
    // Falhar barulhento: um ref errado sumiria da trilha sem aviso.
    if (faltando.length) console.error("Prova " + prova.id + ": refs inexistentes em " + d.herdaDe + " → " + faltando.join(", "));
    if (repetidos.length) console.warn("Prova " + prova.id + ": questões repetidas em mais de uma lição → " + repetidos.join(", "));
  }
  PROVAS.forEach(resolverRefs);

  /* Pontos do edital (edital.js) → conjuntos de questões. Cada ponto
     declara onde treinar por `unidades`, `licoes` e/ou `questoes`; aqui
     as três granularidades se somam num único `_qids`. Rodar depois de
     `resolverRefs`, porque a ENAM só tem questões após a resolução. */
  function resolverEdital(prova) {
    var mapa = window.APP_EDITAL && window.APP_EDITAL[prova.id];
    if (!mapa) { console.warn("Prova " + prova.id + ": sem pontos em edital.js — o Cronograma cai no modo de reserva (uma unidade = um ponto)."); return; }
    var d = prova.data, licoesDaUnidade = {}, qidsDaLicao = {}, todas = {}, faltando = [];
    d.units.forEach(function (u) {
      licoesDaUnidade[u.id] = u.licoes.map(function (l) { return l.id; });
      u.licoes.forEach(function (l) {
        qidsDaLicao[l.id] = (l.questoes || []).map(function (q) { return q.id; });
        qidsDaLicao[l.id].forEach(function (id) { todas[id] = l.id; });
      });
    });
    var cobertas = {};
    mapa.pontos.forEach(function (p) {
      var set = {}, ordem = [];
      function addQ(id) {
        if (!(id in todas)) { faltando.push(p.id + " → questão " + id); return; }
        if (!set[id]) { set[id] = 1; ordem.push(id); cobertas[id] = 1; }
      }
      function addL(lid) {
        if (!(lid in qidsDaLicao)) { faltando.push(p.id + " → lição " + lid); return; }
        qidsDaLicao[lid].forEach(addQ);
      }
      (p.unidades || []).forEach(function (uid) {
        if (!(uid in licoesDaUnidade)) { faltando.push(p.id + " → unidade " + uid); return; }
        licoesDaUnidade[uid].forEach(addL);
      });
      (p.licoes || []).forEach(addL);
      (p.questoes || []).forEach(addQ);
      p._qids = ordem;
      p._prova = prova.id;
    });
    // Falhar barulhento, como em resolverRefs: id errado no edital.js
    // sumiria do diagnóstico sem deixar rastro.
    if (faltando.length) console.error("edital.js (" + prova.id + "): referências inexistentes → " + faltando.join(", "));
    // E o aviso que mantém o mapa vivo: lote novo que ninguém mapeou.
    var orfas = {};
    for (var id in todas) if (!cobertas[id]) { var l = todas[id]; (orfas[l] = orfas[l] || []).push(id); }
    var lics = Object.keys(orfas);
    if (lics.length) {
      console.warn("edital.js (" + prova.id + "): questões fora de qualquer ponto do edital — acrescente estas lições ao ponto certo:\n" +
        lics.map(function (l) { return "  " + l + ": " + orfas[l].join(", "); }).join("\n"));
    }
  }
  PROVAS.forEach(resolverEdital);

  function provaStats(p) {
    var lic = 0, feitas = 0, qs = 0;
    p.data.units.forEach(function (u) {
      u.licoes.forEach(function (l) {
        lic += 1; qs += l.questoes.length;
        if (S.lessons[l.id] && S.lessons[l.id].completed) feitas += 1;
      });
    });
    return { licoes: lic, feitas: feitas, questoes: qs };
  }

  /* ---------- índices (montados por prova) ---------- */
  var PROVA = null;            // prova ativa
  var LESSONS = [];            // ordem plana de lições
  var LESSON_BY_ID = {};
  var UNIT_BY_LESSON = {};
  var Q_BY_ID = {};
  var PONTOS = [];             // pontos do edital da prova ativa
  var PONTO_BY_ID = {};
  var PONTOS_BY_QID = {};      // id de questão -> pontos que a contêm
  function loadProva(p) {
    PROVA = p; DATA = p.data;
    LESSONS = []; LESSON_BY_ID = {}; UNIT_BY_LESSON = {}; Q_BY_ID = {};
    DATA.units.forEach(function (u) {
      u.licoes.forEach(function (l, i) {
        l._unit = u; l._idx = i;
        LESSONS.push(l);
        LESSON_BY_ID[l.id] = l;
        UNIT_BY_LESSON[l.id] = u;
        l.questoes.forEach(function (q) {
          q._materia = u.materia; q._topico = u.titulo; q._licao = l.id;
          Q_BY_ID[q.id] = q;
        });
      });
    });
    var mapa = window.APP_EDITAL && window.APP_EDITAL[p.id];
    PONTOS = (mapa && mapa.pontos) || pontosDeReserva();
    PONTO_BY_ID = {}; PONTOS_BY_QID = {};
    PONTOS.forEach(function (pt) {
      PONTO_BY_ID[pt.id] = pt;
      (pt._qids || []).forEach(function (id) { (PONTOS_BY_QID[id] = PONTOS_BY_QID[id] || []).push(pt); });
    });
  }
  /* Prova sem entrada no edital.js: cada unidade vira um ponto, sem
     peso. O Cronograma continua funcionando (ranqueia pelo desempenho)
     e a tela diz que o peso do edital ainda não foi mapeado. */
  function pontosDeReserva() {
    return DATA.units.map(function (u) {
      return {
        id: "u-" + u.id, banca: u.banca || "I", materia: u.materia, tema: u.titulo,
        peso: null, _prova: PROVA.id, _reserva: true,
        _qids: u.licoes.reduce(function (a, l) { return a.concat((l.questoes || []).map(function (q) { return q.id; })); }, [])
      };
    });
  }

  /* ---------- estado ---------- */
  var S = load();
  function defaultState() {
    return {
      prova: null,
      xp: 0, hearts: 5, heartT: null, streak: 0, lastStudyDay: null,
      lessons: {}, srs: {}, errors: {}, blitz: {}, answered: 0, correctTotal: 0,
      byMateria: {}, xpByMateria: {}, theme: null,
      social: { uid: null, nome: "", avatar: "c0", friends: {}, grupo: null, grupoCache: null },
      week: { id: null, xp: 0, answered: 0, correct: 0 },
      treino: {},    // por prova: último dia em que o Treino do dia foi concluído
      treinos: 0,    // total de Treinos do dia concluídos
      conquistas: {},// medalhas desbloqueadas: id -> timestamp
      missao: null,  // missão do dia: { day, t, materia, alvo, prog, done }
      sons: true,    // sons e vibração
      duelo: null,   // Duelo Blitz: { week, best } — melhor resultado na semana
      meta: { data: null, diaria: 20 }, // data da prova (YYYY-MM-DD) e meta de questões/dia
      hoje: { day: null, answered: 0, correct: 0, metaOk: false }, // contadores do dia
      dias: {},      // histórico: "YYYY-MM-DD" -> questões respondidas (calendário)
      byQ: {},       // acerto por questão: id -> { t: tentativas, c: acertos }
      migByQ: 0,     // 1 = o byQ já foi semeado com o histórico antigo (ver load)
      diasEstudo: [1, 2, 3, 4, 5, 6], // dias da semana que você estuda (0=dom … 6=sáb)
      plano: null,   // cronograma da semana: ver gerarPlano()
      conta: null,   // { uid, email, refresh, syncAt } quando logado (não vai para a nuvem)
      mudadoEm: 0    // última mudança relevante de progresso (decide quem é mais novo no sync)
    };
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return defaultState();
      var s = JSON.parse(raw);
      var d = defaultState();
      for (var k in d) if (!(k in s)) s[k] = d[k];
      // migração: estima o XP por matéria a partir dos acertos antigos
      if (Object.keys(s.xpByMateria).length === 0) {
        for (var m in (s.byMateria || {})) s.xpByMateria[m] = (s.byMateria[m].correct || 0) * 10;
      }
      // migração: as estatísticas por matéria passaram a ser por prova
      // ("dpe-rj|Direito Civil"). Chaves sem "|" são anteriores à ENAM,
      // quando a DPE-RJ era a única prova. Idempotente.
      ["byMateria", "xpByMateria"].forEach(function (tab) {
        var t = s[tab] || {};
        for (var k in t) {
          if (k.indexOf("|") === -1) { t["dpe-rj|" + k] = t[k]; delete t[k]; }
        }
      });
      // migração: o acerto por questão (byQ) nasceu com o Cronograma. Sem
      // semear, o diagnóstico do edital abriria "sem dados" para quem já
      // estudou meses. O app nunca guardou tentativa por questão, então
      // reconstrói o PISO do histórico a partir do que existe: quem tem
      // ficha de revisão foi respondida ao menos uma vez, e o caderno de
      // erros diz quantas vezes errou. Roda uma vez só.
      if (!s.migByQ) {
        s.byQ = s.byQ || {};
        for (var qid in (s.srs || {})) {
          if (s.byQ[qid]) continue;
          var er = (s.errors || {})[qid];
          var errado = (er && er.count) || 0;
          var acertou = er ? (er.resolved ? 1 : 0) : 1;
          s.byQ[qid] = { t: errado + acertou, c: acertou };
        }
        s.migByQ = 1;
      }
      return s;
    } catch (e) { return defaultState(); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ---------- datas / ofensiva ---------- */
  function dayStr(t) {
    var d = new Date(t || Date.now());
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function ensureHoje() {
    var d = dayStr();
    if (!S.hoje || S.hoje.day !== d) S.hoje = { day: d, answered: 0, correct: 0, metaOk: false };
  }
  function registerStudyToday() {
    var today = dayStr();
    if (S.lastStudyDay === today) return;
    var yesterday = dayStr(Date.now() - DAY);
    if (S.lastStudyDay === yesterday) S.streak += 1;
    else S.streak = 1;
    S.lastStudyDay = today;
  }

  /* ---------- vidas: regeneração 1 a cada 2h ---------- */
  function applyHeartRegen() {
    if (S.hearts >= HEART_MAX) { S.heartT = null; return false; }
    if (!S.heartT) { S.heartT = Date.now(); save(); return false; }
    var changed = false;
    while (S.hearts < HEART_MAX && Date.now() - S.heartT >= HEART_REGEN_MS) {
      S.hearts += 1; S.heartT += HEART_REGEN_MS; changed = true;
    }
    if (S.hearts >= HEART_MAX) S.heartT = null;
    if (changed) save();
    return changed;
  }
  function loseHeart() {
    if (S.hearts <= 0) return;
    if (!S.heartT) S.heartT = Date.now();
    S.hearts -= 1;
  }
  function gainHeart() {
    if (S.hearts >= HEART_MAX) return false;
    S.hearts += 1;
    if (S.hearts >= HEART_MAX) S.heartT = null;
    else if (!S.heartT) S.heartT = Date.now();
    return true;
  }
  function heartTimerText() {
    if (S.hearts >= HEART_MAX || !S.heartT) return "";
    var left = Math.max(0, HEART_REGEN_MS - (Date.now() - S.heartT));
    var h = Math.floor(left / 3600000), m = Math.ceil((left % 3600000) / 60000);
    if (m === 60) { h += 1; m = 0; }
    return h > 0 ? h + "h" + (m < 10 ? "0" + m : m) : m + "m";
  }
  function heartHud() {
    var t = heartTimerText();
    return '<span class="stat heart">' + icon("heart") + '<b>' + S.hearts + '</b>' +
      (t ? '<span class="regen" data-regen>+1 em ' + t + '</span>' : '') + '</span>';
  }

  /* ---------- amigos: semana, códigos e compartilhamento ---------- */
  function weekId(t) {
    var d = new Date(t || Date.now());
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7)); // quinta-feira da semana ISO
    var w1 = new Date(d.getFullYear(), 0, 4);
    var wk = 1 + Math.round(((d - w1) / 86400000 - 3 + ((w1.getDay() + 6) % 7)) / 7);
    return d.getFullYear() + "-S" + (wk < 10 ? "0" + wk : wk);
  }
  function ensureWeek() {
    var id = weekId();
    if (!S.week || S.week.id !== id) S.week = { id: id, xp: 0, answered: 0, correct: 0 };
  }
  function b64e(s) { return btoa(unescape(encodeURIComponent(s))); }
  function b64d(s) { return decodeURIComponent(escape(atob(s))); }
  function myCode() {
    ensureWeek();
    var p = { v: 1, id: S.social.uid, n: S.social.nome, a: S.social.avatar, w: S.week.id, x: S.week.xp, q: S.week.answered, c: S.week.correct, s: S.streak, t: S.xp,
      dw: (S.duelo && S.duelo.week) || null, ds: (S.duelo && S.duelo.best) | 0 };
    // o "." final é terminador: base64 nunca contém ponto, então o código
    // sobrevive mesmo colado no meio de um texto sem espaços
    return "DPE1." + b64e(JSON.stringify(p)) + ".";
  }
  function parseCode(raw) {
    try {
      var m = raw.match(/DPE1\.([A-Za-z0-9+\/=]+)\./);
      var b64 = m ? m[1] : null;
      if (!b64) { // código truncado (sem o ponto final): tenta até o 1º espaço
        var i = raw.indexOf("DPE1.");
        if (i === -1) return null;
        b64 = raw.slice(i + 5).split(/\s/)[0];
      }
      var p = JSON.parse(b64d(b64));
      if (!p || !p.id || !p.n || !p.w) return null;
      return p;
    } catch (e) { return null; }
  }
  function copyText(t) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(t).catch(function () {});
      return;
    }
    var ta = document.createElement("textarea");
    ta.value = t; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    ta.remove();
  }
  function shareCode() {
    var texto = "Defensor — estudo para a DPE-RJ\n" + S.social.nome +
      " esta semana: " + S.week.xp + " XP · " + S.week.answered + " questões\n\n" +
      "Meu código de amigo (cole na aba Amigos):\n" + myCode() +
      "\n\nO app: " + location.origin + location.pathname;
    if (navigator.share) { navigator.share({ text: texto }).catch(function () {}); }
    else { copyText(texto); toast("Convite copiado. Cole no grupo do WhatsApp."); }
  }
  function addFriend() {
    var inp = document.getElementById("friend-code");
    var p = parseCode(((inp && inp.value) || "").trim());
    if (!p) { toast("Código inválido — confira se copiou a parte que começa com DPE1."); return; }
    if (p.id === S.social.uid) { toast("Esse código é o seu."); return; }
    var novo = !S.social.friends[p.id];
    S.social.friends[p.id] = { n: String(p.n).slice(0, 18), a: p.a || "", w: p.w, x: p.x | 0, q: p.q | 0, c: p.c | 0, s: p.s | 0, t: p.t | 0, dw: p.dw || null, ds: p.ds | 0, at: Date.now() };
    save(); render();
    toast(novo ? String(p.n) + " entrou no placar." : String(p.n) + " atualizado(a) no placar.");
  }

  /* ---------- grupo em tempo real (Firebase Realtime DB via REST) ---------- */
  // Config do Firebase (URL do banco + Web API Key) vem de config.js, que é
  // carregado antes de app.js no index.html. Se config.js não definir esses
  // valores, DB_URL/AUTH_KEY ficam vazios e os recursos de nuvem se ocultam.
  var DB_URL = window.DPE_DB_URL || "";     // definido em config.js
  var AUTH_KEY = window.DPE_AUTH_KEY || ""; // definido em config.js
  function grupoAtivo() { return !!(S.social.grupo && S.social.grupo.url && S.social.grupo.gid); }
  function dbFetch(path, opts) {
    var g = S.social.grupo;
    return fetch(g.url.replace(/\/+$/, "") + "/grupos/" + encodeURIComponent(g.gid) + path + ".json", opts);
  }
  function pushMyStats() {
    if (!grupoAtivo() || !S.social.uid || !S.social.nome) return;
    ensureWeek();
    var p = { n: S.social.nome, a: S.social.avatar, w: S.week.id, x: S.week.xp, q: S.week.answered, c: S.week.correct, s: S.streak, t: S.xp,
      dw: (S.duelo && S.duelo.week) || null, ds: (S.duelo && S.duelo.best) | 0, at: Date.now() };
    try { dbFetch("/membros/" + S.social.uid, { method: "PUT", body: JSON.stringify(p) }).catch(function () {}); } catch (e) {}
  }
  function pullGroup(cb) {
    if (!grupoAtivo()) { if (cb) cb(false); return; }
    try {
      dbFetch("", {}).then(function (r) { return r.json(); }).then(function (data) {
        S.social.grupoCache = { info: (data && data.info) || null, membros: (data && data.membros) || {}, at: Date.now() };
        save();
        if (cb) cb(true);
      }).catch(function () { if (cb) cb(false); });
    } catch (e) { if (cb) cb(false); }
  }
  function grupoInvite() {
    var g = S.social.grupo;
    return "DPEG." + b64e(JSON.stringify({ u: g.url, g: g.gid, n: g.nome || "" })) + ".";
  }
  function parseInvite(raw) {
    try {
      var m = raw.match(/DPEG\.([A-Za-z0-9+\/=]+)\./);
      if (!m) return null;
      var p = JSON.parse(b64d(m[1]));
      if (!p || !p.u || !p.g) return null;
      if (!/^https:\/\/[a-z0-9.-]+\.(firebaseio\.com|firebasedatabase\.app)\/?$/i.test(p.u)) return null;
      return p;
    } catch (e) { return null; }
  }
  function shareGroupInvite() {
    var g = S.social.grupo;
    var texto = "Entra no meu grupo \"" + (g.nome || "Defensor") + "\" no app Defensor (DPE-RJ).\n\n" +
      "Código de convite (aba Amigos → Entrar no grupo):\n" + grupoInvite() +
      "\n\nO app: " + location.origin + location.pathname;
    if (navigator.share) { navigator.share({ text: texto }).catch(function () {}); }
    else { copyText(texto); toast("Convite do grupo copiado."); }
  }
  function syncAmigos() {
    if (!grupoAtivo()) return;
    pushMyStats();
    pullGroup(function (ok) {
      if (ok && view.name === "amigos") {
        var ae = document.activeElement;
        if (!(ae && /INPUT|TEXTAREA/.test(ae.tagName))) render();
      }
    });
  }

  /* ---------- conta por e-mail + backup na nuvem (Firebase Auth via REST) ---------- */
  var authToken = null, authTokenExp = 0; // idToken em memória (expira em ~1h)
  function contaAtiva() { return !!(AUTH_KEY && S.conta && S.conta.refresh); }
  function touch() { S.mudadoEm = Date.now(); }
  var AUTH_ERROS = {
    EMAIL_EXISTS: "Esse e-mail já tem conta — use Entrar.",
    EMAIL_NOT_FOUND: "E-mail não encontrado — confira ou crie a conta.",
    INVALID_PASSWORD: "Senha incorreta.",
    INVALID_LOGIN_CREDENTIALS: "E-mail ou senha incorretos.",
    WEAK_PASSWORD: "Senha muito curta — use pelo menos 6 caracteres.",
    INVALID_EMAIL: "E-mail inválido.",
    TOO_MANY_ATTEMPTS_TRY_LATER: "Muitas tentativas — aguarde alguns minutos."
  };
  function authErro(d) {
    var m = (d && d.error && d.error.message) || "";
    for (var k in AUTH_ERROS) if (m.indexOf(k) === 0) return AUTH_ERROS[k];
    return "Não deu certo (" + (m || "sem conexão") + "). Tente de novo.";
  }
  function authApi(action, payload, cb) {
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:" + action + "?key=" + AUTH_KEY, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload)
    }).then(function (r) { return r.json(); }).then(cb).catch(function () { cb(null); });
  }
  // garante um idToken válido (renova com o refresh token quando preciso)
  function authFetchToken(cb) {
    if (!contaAtiva()) { cb(null); return; }
    if (authToken && Date.now() < authTokenExp - 60000) { cb(authToken); return; }
    fetch("https://securetoken.googleapis.com/v1/token?key=" + AUTH_KEY, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "grant_type=refresh_token&refresh_token=" + encodeURIComponent(S.conta.refresh)
    }).then(function (r) { return r.json(); }).then(function (d) {
      if (d && d.id_token) {
        authToken = d.id_token;
        authTokenExp = Date.now() + (parseInt(d.expires_in, 10) || 3600) * 1000;
        if (d.refresh_token && d.refresh_token !== S.conta.refresh) { S.conta.refresh = d.refresh_token; save(); }
        cb(authToken);
      } else {
        var m = (d && d.error && (d.error.message || d.error)) + "";
        if (/TOKEN_EXPIRED|USER_DISABLED|USER_NOT_FOUND|INVALID_REFRESH_TOKEN/.test(m)) {
          S.conta = null; authToken = null; save(); render();
          toast("Sessão expirada — entre de novo no Perfil para manter o backup.");
        }
        cb(null);
      }
    }).catch(function () { cb(null); });
  }
  function estadoParaNuvem() {
    var c = {};
    for (var k in S) if (k !== "conta") c[k] = S[k];
    return { at: Date.now(), v: APP_VERSION, estado: c };
  }
  function cloudUrl(token) {
    return DB_URL.replace(/\/+$/, "") + "/usuarios/" + encodeURIComponent(S.conta.uid) + "/estado.json?auth=" + encodeURIComponent(token);
  }
  function cloudPush(cb) {
    if (!contaAtiva()) { if (cb) cb(false); return; }
    authFetchToken(function (t) {
      if (!t) { if (cb) cb(false, "login"); return; }
      fetch(cloudUrl(t), { method: "PUT", body: JSON.stringify(estadoParaNuvem()) })
        .then(function (r) {
          if (r.ok && S.conta) { S.conta.syncAt = Date.now(); save(); if (cb) cb(true); return; }
          r.json().then(function (d) { if (cb) cb(false, (d && d.error) || "HTTP " + r.status); })
            .catch(function () { if (cb) cb(false, "HTTP " + r.status); });
        }).catch(function () { if (cb) cb(false, "rede"); });
    });
  }
  function cloudPull(cb) { // cb(payload|null)
    if (!contaAtiva()) { cb(null); return; }
    authFetchToken(function (t) {
      if (!t) { cb(null); return; }
      fetch(cloudUrl(t), {}).then(function (r) { return r.json(); })
        .then(function (d) { cb(d && d.estado ? d : null); })
        .catch(function () { cb(null); });
    });
  }
  // substitui o estado local pelo da nuvem (mantendo a conta deste aparelho)
  function adotarNuvem(payload) {
    var conta = S.conta;
    var novo = defaultState(), e = payload.estado || {};
    for (var k in novo) if (k !== "conta" && (k in e)) novo[k] = e[k];
    // o Firebase descarta objetos vazios — repõe subcampos que possam ter sumido
    var ds = defaultState();
    for (var k2 in ds.social) if (!(k2 in novo.social)) novo.social[k2] = ds.social[k2];
    for (var k3 in ds.week) if (!(k3 in novo.week)) novo.week[k3] = ds.week[k3];
    S = novo; S.conta = conta;
    applyTheme(); save();
    var p = provaById(S.prova);
    if (p) loadProva(p);
    else { PROVA = null; DATA = null; view.name = "inicio"; }
  }
  function aposLogin(d, criouAgora) {
    S.conta = { uid: d.localId, email: d.email, refresh: d.refreshToken, syncAt: 0 };
    authToken = d.idToken;
    authTokenExp = Date.now() + (parseInt(d.expiresIn, 10) || 3600) * 1000;
    save();
    cloudPull(function (nuvem) {
      var temLocal = S.answered > 0 || Object.keys(S.lessons).length > 0;
      if (nuvem) {
        var qtd = (nuvem.estado.answered || 0);
        var quando = new Date(nuvem.at || 0).toLocaleDateString("pt-BR");
        if (!temLocal || confirm("Há um progresso salvo na nuvem (" + qtd + " respostas, " + quando + ").\n\nOK = usar o da nuvem neste aparelho\nCancelar = manter o local (a nuvem será sobrescrita)")) {
          adotarNuvem(nuvem);
        }
      }
      cloudPush();
      render();
      toast(criouAgora ? "Conta criada. Backup na nuvem ativado." : "Bem-vindo(a) de volta.");
    });
  }

  /* ---------- atualização do app ---------- */
  function applyUpdate() {
    var done = function () { location.reload(); };
    try {
      if (window.caches && caches.keys) {
        caches.keys().then(function (ks) {
          return Promise.all(ks.map(function (k) { return caches.delete(k); }));
        }).then(done, done);
      } else done();
    } catch (e) { done(); }
  }
  function showUpdateBanner() {
    if (document.getElementById("upd-banner")) return;
    var b = document.createElement("button");
    b.id = "upd-banner";
    b.className = "upd-banner";
    b.textContent = "Nova versão disponível — toque para atualizar";
    b.onclick = applyUpdate;
    document.body.appendChild(b);
  }
  function checkUpdate(manual) {
    try {
      fetch("app.js", { cache: "no-cache" }).then(function (r) { return r.text(); }).then(function (t) {
        var m = t.match(/APP_VERSION\s*=\s*"([^"]+)"/);
        if (m && m[1] !== APP_VERSION) {
          if (manual) { toast("Atualizando para a versão " + m[1] + "…"); setTimeout(applyUpdate, 700); }
          else showUpdateBanner();
        } else if (manual) {
          toast("Você já está na versão mais recente (v" + APP_VERSION + ").");
        }
      }).catch(function () { if (manual) toast("Sem conexão — tente de novo mais tarde."); });
    } catch (e) {}
  }

  /* ---------- exportar caderno de erros ---------- */
  function errosParaExportar() {
    var errs = errorQuestions();
    errs.sort(function (a, b) {
      if (a._materia !== b._materia) return a._materia < b._materia ? -1 : 1;
      return (S.errors[b.id].count || 0) - (S.errors[a.id].count || 0);
    });
    return errs;
  }
  function textoCaderno() {
    var errs = errosParaExportar();
    var hoje = new Date();
    var t = "CADERNO DE ERROS — Defensor (DPE-RJ)\n" +
      "Exportado em " + hoje.toLocaleDateString("pt-BR") + " · " + errs.length + " questões para revisar\n";
    var mat = null;
    errs.forEach(function (x, i) {
      if (x._materia !== mat) { mat = x._materia; t += "\n====== " + mat.toUpperCase() + " ======\n"; }
      var e = S.errors[x.id];
      t += "\n" + (i + 1) + ") [" + x._topico + " · " + x.fonte + " · errada " + e.count + "x]\n" + x.enunciado + "\n";
      x.alternativas.forEach(function (a, idx) {
        t += (idx === x.correta ? "  ✔ " : "  - ") + "ABCDE"[idx] + ") " + a + "\n";
      });
      t += "  >> " + x.explicacao + "\n";
    });
    return t;
  }
  /* Busca o trecho de cada erro nas fontes, um por vez: dezenas de
     transações simultâneas no IndexedDB travariam o celular. */
  var printBusy = false;
  function coletarFontes(errs, cb) {
    var mapa = {};
    if (!ftOk) { cb(mapa); return; }
    FT.listar().then(function (ds) {
      if (!ds.length) { cb(mapa); return; }
      if (errs.length > 8) toast("Montando o caderno com suas fontes…");
      var i = 0;
      (function passo() {
        if (i >= errs.length) { cb(mapa); return; }
        var q = errs[i++];
        FT.buscar(q).then(function (r) {
          if (r && r.trechos && r.trechos.length) mapa[q.id] = r.trechos[0];
          passo();
        }).catch(function () { passo(); });
      })();
    }).catch(function () { cb(mapa); });
  }

  function printCaderno() {
    var errs = errosParaExportar();
    if (!errs.length) { toast("Caderno vazio — nada para exportar."); return; }
    if (printBusy) return;
    printBusy = true;
    coletarFontes(errs, function (fontesPorQ) {
      printBusy = false;
      montarImpressao(errs, fontesPorQ);
    });
  }

  function montarImpressao(errs, fontesPorQ) {
    var old = document.getElementById("print-doc");
    if (old) old.remove();
    var div = document.createElement("div");
    div.id = "print-doc";
    div.className = "print-doc";
    var hoje = new Date();
    var comFonte = 0;
    for (var k in fontesPorQ) if (fontesPorQ[k]) comFonte++;
    var h = '<h1>Caderno de Erros — Defensor (DPE-RJ)</h1>' +
      '<p class="pd-meta">Exportado em ' + hoje.toLocaleDateString("pt-BR") + ' · ' + errs.length + ' questões para revisar' +
      (comFonte ? ' · ' + comFonte + ' com trecho das suas fontes' : '') + '</p>';
    var mat = null;
    errs.forEach(function (x, i) {
      if (x._materia !== mat) { mat = x._materia; h += '<h2>' + esc(mat) + '</h2>'; }
      var e = S.errors[x.id];
      h += '<div class="pd-q">' +
        '<div class="pd-head">' + (i + 1) + '. <span>' + esc(x._topico) + ' · ' + esc(x.fonte) + ' · errada ' + e.count + 'x</span></div>' +
        '<p class="pd-enun">' + esc(x.enunciado) + '</p><ol type="A">' +
        x.alternativas.map(function (a, idx) {
          return '<li class="' + (idx === x.correta ? 'pd-ok' : '') + '">' + esc(a) + (idx === x.correta ? ' ✔' : '') + '</li>';
        }).join('') + '</ol>' +
        '<p class="pd-expl">' + esc(x.explicacao) + '</p>';
      var src = fontesPorQ[x.id];
      if (src) {
        h += '<div class="pd-src">' +
          '<div class="pd-src-h">Na sua fonte — ' + esc(src.docNome) + ', p. ' + src.pag + '</div>' +
          destacar(src.texto, FT.termosDestaque(x)) +
          '</div>';
      }
      h += '</div>';
    });
    div.innerHTML = h;
    document.body.appendChild(div);
    setTimeout(function () {
      window.print();
      setTimeout(function () { div.remove(); }, 500);
    }, 50);
  }

  /* ============================================================
     Minhas Fontes — PDFs do usuário (motor em fontes.js)
     A biblioteca vive no aparelho (IndexedDB); aqui fica só a
     interface: importar, listar, remover e mostrar o trecho da
     fonte dentro do caderno de erros.
     ============================================================ */
  var FT = window.DPEFontes || null;
  var ftOk = !!(FT && FT.suportado);
  var fontes = null;      // lista de docs (null = ainda não carregada)
  var fontesLoading = false;
  var fontesBusy = null;  // progresso da importação em andamento
  var fileInput = null;

  function fontesRecarrega(cb) {
    if (!ftOk) { if (cb) cb([]); return; }
    FT.listar().then(function (ds) { fontes = ds; if (cb) cb(ds); });
  }

  function fonteInput() {
    if (fileInput || !ftOk) return fileInput;
    fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/pdf,.pdf";
    fileInput.multiple = true;
    fileInput.style.display = "none";
    // fora de #app de propósito: sobrevive aos re-renders da tela
    document.body.appendChild(fileInput);
    fileInput.onchange = function () {
      var fs = [].slice.call(fileInput.files || []);
      fileInput.value = "";
      if (fs.length) importarFontes(fs);
    };
    return fileInput;
  }

  function fonteProgHtml(p) {
    if (!p) return "";
    var txt, pct = null;
    if (p.fase === "lendo") {
      txt = "Indexando " + p.nome + " — página " + p.pagina + " de " + p.total + "…";
      pct = Math.round(p.pagina / Math.max(1, p.total) * 100);
    } else if (p.fase === "indexando") txt = "Organizando os trechos de " + p.nome + "…";
    else if (p.fase === "salvando") txt = "Salvando " + p.nome + " no aparelho…";
    else txt = "Abrindo " + p.nome + "…";
    return '<div class="ft-prog"><div class="ft-ptxt">' + esc(txt) + '</div>' +
      '<div class="ft-track' + (pct === null ? ' indet' : '') + '"><i style="width:' + (pct === null ? 100 : pct) + '%"></i></div></div>';
  }

  function progressoFonte(p) {
    fontesBusy = p;
    var el = document.querySelector("[data-fonte-prog]");
    if (el) el.innerHTML = fonteProgHtml(p); // atualiza sem redesenhar a tela
  }

  function importarFontes(files) {
    var i = 0, ok = 0, erros = [];
    fontesRecarrega(function () {
      (function passo() {
        if (i >= files.length) {
          fontesBusy = null;
          fontesRecarrega(function () {
            render();
            if (ok) {
              FT.fixar();
              toast(ok === 1 ? "Fonte adicionada." : ok + " fontes adicionadas.");
            }
            if (erros.length) alert(erros.join("\n\n"));
          });
          return;
        }
        var f = files[i++];
        progressoFonte({ fase: "abrindo", nome: (f.name || "PDF").replace(/\.pdf$/i, "") });
        render();
        FT.adicionar(f, progressoFonte, fontes || [])
          .then(function (doc) { ok++; fontes = null; fontesRecarrega(); return doc; })
          .catch(function (e) { erros.push((e && e.message) || "Não consegui ler esse PDF."); })
          .then(passo);
      })();
    });
  }

  function fontesHtml() {
    if (!ftOk) {
      return '<div class="card"><p class="page-sub" style="margin:0">Este navegador não deixa guardar arquivos no aparelho, então a biblioteca de fontes não funciona aqui. Tente fora do modo anônimo.</p></div>';
    }
    var h = '<div class="card">' +
      '<p class="page-sub" style="margin:0 0 12px">Suba suas apostilas e leis em PDF. O arquivo é lido <b>aqui no aparelho</b> e não sai daqui — depois, cada erro do caderno mostra o trecho da sua própria fonte.</p>' +
      '<button class="btn" data-action="fonte-add">' + icon("plus") + ' Adicionar PDF</button>' +
      '<div data-fonte-prog>' + fonteProgHtml(fontesBusy) + '</div>';

    if (fontes === null) {
      if (!fontesLoading) {
        fontesLoading = true;
        FT.listar().then(function (ds) {
          fontes = ds; fontesLoading = false;
          if (view.name === "perfil") render();
        });
      }
      return h + '<p class="page-sub" style="margin:14px 0 0">Carregando…</p></div>';
    }
    if (!fontes.length) {
      return h + '<p class="page-sub" style="margin:14px 0 0">Nenhuma fonte ainda. PDF escaneado (foto de página) não serve — precisa ser PDF com texto.</p></div>';
    }
    h += '<div class="ft-list">';
    fontes.forEach(function (d) {
      h += '<div class="ft-row"><div class="ft-main">' +
        '<div class="ft-nome">' + esc(d.nome) + '</div>' +
        '<div class="ft-meta">' + d.paginas + ' páginas · ' + d.trechos.toLocaleString("pt-BR") + ' trechos · ' +
        new Date(d.at).toLocaleDateString("pt-BR") + '</div></div>' +
        '<button class="ft-del" data-fonte-del="' + esc(d.id) + '" aria-label="Remover ' + esc(d.nome) + '">×</button></div>';
    });
    return h + '</div></div>';
  }

  /* ---------- trecho da fonte dentro do caderno de erros ---------- */

  var ACC = "áàâãäéèêëíìîïóòôõöúùûüçñ", SEM = "aaaaaeeeeiiiiooooouuuucn";
  /* tira acento preservando o comprimento, para os índices do regex
     baterem com o texto original (NFD mudaria o tamanho) */
  function planificar(s) {
    var out = "";
    for (var i = 0; i < s.length; i++) {
      var c = s.charAt(i).toLowerCase(), j = ACC.indexOf(c);
      out += j >= 0 ? SEM.charAt(j) : c;
    }
    return out;
  }
  function destacar(txt, termos) {
    if (!termos || !termos.length) return esc(txt);
    var pats = termos.map(function (t) {
      if (/^\d+$/.test(t) && t.length > 3) return t.replace(/(\d)(?=(\d{3})+$)/g, "$1[.\\s]?"); // 1829 casa "1.829"
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    });
    var re;
    try { re = new RegExp("\\b(" + pats.join("|") + ")", "g"); } catch (e) { return esc(txt); }
    var plano = planificar(txt), out = "", last = 0, m;
    while ((m = re.exec(plano)) !== null) {
      if (re.lastIndex === m.index) { re.lastIndex++; continue; }
      if (m.index < last) continue;
      out += esc(txt.slice(last, m.index)) + "<mark>" + esc(txt.slice(m.index, m.index + m[0].length)) + "</mark>";
      last = m.index + m[0].length;
    }
    return out + esc(txt.slice(last));
  }

  function srcHtml(q, r) {
    if (!r) return "";                       // usuário não tem fontes
    if (r.modo === "nada") {
      return '<div class="src none">Não localizei este ponto nas suas fontes.</div>';
    }
    var termos = FT.termosDestaque(q);
    var t0 = r.trechos[0];
    var h = '<div class="src"><div class="src-head">Na sua fonte' +
      '<span class="src-doc">' + esc(t0.docNome) + ' · p. ' + t0.pag + '</span></div>' +
      '<div class="src-body clamp">';
    /* de propósito sem rótulo de dispositivo: quando o trecho é a
       continuação de um artigo, o título do bloco é o do dispositivo
       anterior e contradiz o texto exibido. O texto fala por si. */
    r.trechos.forEach(function (t, i) {
      if (i) h += '<div class="src-sep">' + esc(t.docNome) + ' · p. ' + t.pag + '</div>';
      h += '<p>' + destacar(t.texto, termos) + '</p>';
    });
    return h + '</div><button class="src-more" data-srcmore>ver mais</button></div>';
  }

  /* preenche os blocos de fonte um a um, sem travar a tela */
  var srcToken = 0;
  function preencherFontes() {
    srcToken++;
    if (!ftOk) return;
    var boxes = [].slice.call(document.querySelectorAll("[data-src]"));
    if (!boxes.length) return;
    var meu = srcToken, i = 0;
    (function passo() {
      if (meu !== srcToken || i >= boxes.length) return;
      var el = boxes[i++], q = Q_BY_ID[el.getAttribute("data-src")];
      if (!q) { passo(); return; }
      FT.buscar(q).then(function (r) {
        if (meu !== srcToken) return;
        el.innerHTML = srcHtml(q, r);
        bindSrcMore(el);
        passo();
      }).catch(function () { passo(); });
    })();
  }
  function bindSrcMore(root) {
    root.querySelectorAll("[data-srcmore]").forEach(function (b) {
      var body = b.parentNode.querySelector(".src-body");
      // trecho curto não precisa de "ver mais": tira o corte e o botão
      if (body && body.scrollHeight <= body.clientHeight + 4) {
        body.classList.remove("clamp");
        b.remove();
        return;
      }
      b.onclick = function () {
        var aberto = body.classList.toggle("clamp");
        b.textContent = aberto ? "ver mais" : "ver menos";
      };
    });
  }

  /* ---------- SM-2 ---------- */
  function srsUpdate(qid, correct) {
    var c = S.srs[qid] || { ef: 2.5, reps: 0, interval: 0, lapses: 0 };
    var q = correct ? 5 : 2;
    if (q < 3) {
      c.reps = 0; c.interval = 1; c.lapses += 1;
    } else {
      if (c.reps === 0) c.interval = 1;
      else if (c.reps === 1) c.interval = 6;
      else c.interval = Math.round(c.interval * c.ef);
      c.reps += 1;
    }
    c.ef = Math.max(1.3, c.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
    c.due = Date.now() + c.interval * DAY;
    c.at = Date.now(); // última vez respondida (o Treino do dia usa para não repetir o que foi visto hoje)
    S.srs[qid] = c;
  }
  function dueQuestions() {
    var now = Date.now(), out = [];
    for (var id in S.srs) {
      if (Q_BY_ID[id] && S.srs[id].due <= now) out.push(Q_BY_ID[id]);
    }
    return out;
  }
  function errorQuestions() {
    var out = [];
    for (var id in S.errors) {
      if (Q_BY_ID[id] && !S.errors[id].resolved) out.push(Q_BY_ID[id]);
    }
    return out;
  }

  /* ---------- trilha / desbloqueio ---------- */
  function isUnlocked(l) {
    if (l._idx === 0) return true;                 // 1ª lição de cada unidade sempre aberta
    var prev = l._unit.licoes[l._idx - 1];
    return !!(S.lessons[prev.id] && S.lessons[prev.id].completed);
  }
  function lessonState(l) {
    var st = S.lessons[l.id];
    if (st && st.completed) return "done";
    if (!isUnlocked(l)) return "locked";
    return "open";
  }

  /* ---------- Modo Blitz ---------- */
  function blitzBest() {
    var b = PROVA && S.blitz[PROVA.id];
    return b ? (b.best || 0) : 0;
  }
  // gerador pseudoaleatório com semente — o Duelo usa a mesma semente para
  // todo mundo (semana + prova), então as questões saem na mesma ordem
  function seededRand(seedStr) {
    var h = 2166136261;
    for (var i = 0; i < seedStr.length; i++) { h ^= seedStr.charCodeAt(i); h = Math.imul(h, 16777619); }
    return function () {
      h = Math.imul(h ^ (h >>> 15), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      h ^= h >>> 16;
      return (h >>> 0) / 4294967296;
    };
  }
  function blitzPool(rnd) {
    var rand = rnd || Math.random;
    // Banco inteiro num sorteio único: qualquer questão de qualquer banca
    // pode cair logo na primeira, mesmo que a lição esteja bloqueada na
    // trilha. (Antes o sorteio era por banca e concatenado I → II → III;
    // como a Banca I sozinha tem 163 questões e uma partida acaba em
    // poucas, as bancas II e III nunca eram alcançadas.)
    var todas = [];
    DATA.units.forEach(function (u) {
      u.licoes.forEach(function (l) {
        l.questoes.forEach(function (q) { todas.push(q); });
      });
    });
    for (var i = todas.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var t = todas[i]; todas[i] = todas[j]; todas[j] = t;
    }
    return todas;
  }

  /* ---------- Treino do dia ---------- */
  var TREINO_ALVO = 12; // ~15 minutos de estudo
  // as 2 matérias com pior acerto (mínimo de 4 respostas e menos de 85%)
  function materiasFracas() {
    var arr = [];
    for (var k in S.byMateria) {
      if (!daProva(k)) continue;   // só as matérias da prova aberta
      var b = S.byMateria[k];
      if ((b.total || 0) >= 4 && b.correct / b.total < 0.85) arr.push({ m: matNome(k), acc: b.correct / b.total });
    }
    arr.sort(function (a, b) { return a.acc - b.acc; });
    return arr.slice(0, 2).map(function (x) { return x.m; });
  }
  // monta a dose diária: revisões vencidas + reforço nas matérias fracas + questões novas
  function treinoDoDia() {
    var hoje = dayStr(), usados = {}, out = [];
    function add(q) { if (q && !usados[q.id]) { usados[q.id] = 1; out.push(q); return true; } return false; }

    // revisões vencidas, as mais atrasadas primeiro
    var due = dueQuestions().sort(function (a, b) { return S.srs[a.id].due - S.srs[b.id].due; });

    // reforço: já vistas (não vencidas, não respondidas hoje) das matérias fracas,
    // priorizando erros ainda não resolvidos e questões com mais lapsos
    var fracas = materiasFracas();
    var reforco = [];
    LESSONS.forEach(function (l) {
      l.questoes.forEach(function (q) {
        var c = S.srs[q.id];
        if (!c || c.due <= Date.now()) return;
        if (c.at && dayStr(c.at) === hoje) return;
        if (fracas.indexOf(q._materia) === -1) return;
        reforco.push(q);
      });
    });
    reforco.sort(function (a, b) {
      var ea = S.errors[a.id] && !S.errors[a.id].resolved ? 1 : 0;
      var eb = S.errors[b.id] && !S.errors[b.id].resolved ? 1 : 0;
      if (ea !== eb) return eb - ea;
      return ((S.srs[b.id].lapses) || 0) - ((S.srs[a.id].lapses) || 0);
    });

    // novas: nunca respondidas, sorteadas em TODO o banco — inclusive em
    // lições ainda bloqueadas na trilha. A semente é o dia + a prova, então
    // a dose de hoje é sempre a mesma (reabrir o app não troca as questões),
    // mas amanhã cai em outro ponto do banco em vez de andar sempre do
    // começo da trilha para a frente.
    var novas = [];
    LESSONS.forEach(function (l) {
      l.questoes.forEach(function (q) { if (!S.srs[q.id]) novas.push(q); });
    });
    var randDia = seededRand(hoje + "|" + (PROVA ? PROVA.id : ""));
    for (var n = novas.length - 1; n > 0; n--) {
      var nj = Math.floor(randDia() * (n + 1));
      var nt = novas[n]; novas[n] = novas[nj]; novas[nj] = nt;
    }

    due.slice(0, 6).forEach(add);
    var nRev = out.length;
    reforco.slice(0, 3).forEach(add);
    var nRef = out.length - nRev;
    for (var i = 0; i < novas.length && out.length < TREINO_ALVO; i++) add(novas[i]);
    var nNov = out.length - nRev - nRef;
    // faltou? completa com o excedente de revisões e reforços
    for (var j = 6; j < due.length && out.length < TREINO_ALVO; j++) { if (add(due[j])) nRev++; }
    for (var k = 3; k < reforco.length && out.length < TREINO_ALVO; k++) { if (add(reforco[k])) nRef++; }
    // embaralha para intercalar os tipos (mesma semente do dia, para o
    // card da trilha e a sessão mostrarem exatamente a mesma dose)
    for (var x = out.length - 1; x > 0; x--) {
      var y = Math.floor(randDia() * (x + 1));
      var t = out[x]; out[x] = out[y]; out[y] = t;
    }
    return { qs: out, rev: nRev, ref: nRef, novas: nNov };
  }

  /* ============================================================
     DIAGNÓSTICO DO EDITAL
     Cruza ponto do edital × seu acerto × peso (incidência) para
     responder "o que vale mais estudar hoje". Todo número que
     entra na conta também aparece na tela: mentoria que não
     mostra a razão é adivinhação.
     ============================================================ */
  var DIAG_CONF = 8;     // respostas para o acerto de um ponto valer inteiro
  var PESO_PADRAO = 3;   // peso de ponto sem peso mapeado no edital.js

  function statsDoPonto(p) {
    var qids = p._qids || [], agora = Date.now();
    var total = 0, correct = 0, vistos = 0, due = 0, errados = 0;
    qids.forEach(function (id) {
      var b = S.byQ[id];
      if (b) { total += b.t || 0; correct += b.c || 0; }
      var c = S.srs[id];
      if (c) { vistos += 1; if (c.due <= agora) due += 1; }
      if (S.errors[id] && !S.errors[id].resolved) errados += 1;
    });
    var n = qids.length;
    return {
      qs: n, total: total, correct: correct, vistos: vistos, due: due, errados: errados,
      acerto: total ? correct / total : null,
      cobertura: n ? vistos / n : 0
    };
  }

  function diagnostico() {
    var lista = [];
    PONTOS.forEach(function (p) {
      var st = statsDoPonto(p);
      var peso = (p.peso === null || p.peso === undefined) ? PESO_PADRAO : p.peso;
      /* Três lacunas distintas, sem contar a mesma ignorância duas vezes:
         - lacuna : o que você ERRA de fato, pesada pela confiança (2 questões
                    respondidas não definem um ponto de 14; 8 já definem);
         - desconh: o que você nem abriu ainda;
         - atraso : o que você sabia e o SM-2 diz que está vencendo.
         Um ponto nunca aberto pontua só em `desconh` — se também entrasse em
         `lacuna` por um acerto presumido, "nunca vi" abafaria "erro muito",
         que é justamente o eixo que o diagnóstico existe para mostrar. */
      var conf = Math.min(1, st.total / DIAG_CONF);
      var lacuna = st.total ? (1 - st.correct / st.total) * conf : 0;
      var desconh = 1 - st.cobertura;
      var atraso = st.qs ? st.due / st.qs : 0;
      var termos = { lacuna: 0.50 * lacuna, desconh: 0.30 * desconh, atraso: 0.20 * atraso };
      var dom = "lacuna";
      for (var k in termos) if (termos[k] > termos[dom]) dom = k;
      lista.push({
        p: p, st: st, peso: peso, semPeso: p.peso === null || p.peso === undefined,
        lacuna: lacuna, desconh: desconh, atraso: atraso, dom: dom, conf: conf,
        valor: st.qs ? peso * (termos.lacuna + termos.desconh + termos.atraso) : -1
      });
    });
    var comQ = lista.filter(function (x) { return x.st.qs > 0; });
    var semQ = lista.filter(function (x) { return x.st.qs === 0; });
    // Empate é a regra em quem está começando (sem histórico, todo ponto
    // de mesmo peso vale igual). Então desempata por peso, depois por
    // tamanho do banco — mais questões, mais chão para ganhar — e por
    // fim pelo id, para a ordem não dançar entre recargas.
    function desempate(a, b) {
      return (b.valor - a.valor) || (b.peso - a.peso) || (b.st.qs - a.st.qs) ||
        (a.p.id < b.p.id ? -1 : a.p.id > b.p.id ? 1 : 0);
    }
    comQ.sort(desempate);
    semQ.sort(function (a, b) { return (b.peso - a.peso) || (a.p.id < b.p.id ? -1 : 1); });
    return { ranking: comQ, semQuestoes: semQ };
  }

  // a frase que justifica a posição do ponto no ranking
  function motivoDiag(d) {
    var fim = d.dom === "desconh" ? "você quase não treinou aqui."
      : d.dom === "atraso" ? "você está esquecendo o que já sabia."
      : "você acerta pouco.";
    if (d.semPeso) return fim.charAt(0).toUpperCase() + fim.slice(1);
    var forte = d.peso >= 4 ? "Vale muito" : d.peso >= 3 ? "Vale" : "Vale pouco, mas";
    return forte + " e " + fim;
  }

  // questões de um ponto na ordem que mais rende: vencidas → erros
  // pendentes → nunca vistas → o resto (mesma prioridade do Treino do dia)
  function questoesDoPonto(p, limite) {
    var agora = Date.now(), grupos = [[], [], [], []];
    (p._qids || []).forEach(function (id) {
      var q = Q_BY_ID[id]; if (!q) return;
      var c = S.srs[id], erro = S.errors[id] && !S.errors[id].resolved;
      if (c && c.due <= agora) grupos[0].push(q);
      else if (erro) grupos[1].push(q);
      else if (!c) grupos[2].push(q);
      else grupos[3].push(q);
    });
    var out = grupos[0].concat(grupos[1], grupos[2], grupos[3]);
    return limite ? out.slice(0, limite) : out;
  }

  /* ============================================================
     CICLO DE ESTUDOS REGRESSIVO
     O plano da semana distribui a meta diária pelos pontos que o
     diagnóstico apontou, e o mix novo/reforço/revisão vai virando
     revisão conforme a prova chega. Quando um dia é furado, a
     dívida é redistribuída com teto — é o que impede a bola de
     neve que mata todo cronograma.
     ============================================================ */
  var TETO_DIA = 1.5;   // nenhum dia passa de 1,5× a meta diária

  function diasParaProva() {
    if (!(S.meta && S.meta.data)) return null;
    var p = S.meta.data.split("-");
    var alvo = new Date(+p[0], +p[1] - 1, +p[2]);
    var hoje0 = new Date(); hoje0.setHours(0, 0, 0, 0);
    return Math.round((alvo - hoje0) / DAY);
  }
  var FASES = [
    { max: 6,        id: "vespera", nome: "Véspera",     novo: 0.00, ref: 0.30, rev: 0.70 },
    { max: 29,       id: "reta",    nome: "Reta final",  novo: 0.25, ref: 0.30, rev: 0.45 },
    { max: 89,       id: "meio",    nome: "Consolidação",novo: 0.45, ref: 0.30, rev: 0.25 },
    { max: Infinity, id: "base",    nome: "Construção",  novo: 0.60, ref: 0.25, rev: 0.15 }
  ];
  function faseAtual() {
    var d = diasParaProva();
    if (d === null) return FASES[2];              // sem data: assume consolidação
    if (d < 0) return FASES[3];                   // prova passou: volta a construir
    for (var i = 0; i < FASES.length; i++) if (d <= FASES[i].max) return FASES[i];
    return FASES[3];
  }

  // segunda-feira da semana ISO corrente, em "YYYY-MM-DD"
  function segundaDaSemana(t) {
    var d = new Date(t || Date.now());
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    return dayStr(d.getTime());
  }
  function diaDaSemana(ds) {
    var p = ds.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]).getDay();
  }
  function ehDiaDeEstudo(ds) {
    var lst = S.diasEstudo && S.diasEstudo.length ? S.diasEstudo : [0, 1, 2, 3, 4, 5, 6];
    return lst.indexOf(diaDaSemana(ds)) !== -1;
  }
  function diasDaSemana() {
    var ini = segundaDaSemana(), p = ini.split("-");
    var base = new Date(+p[0], +p[1] - 1, +p[2]).getTime(), out = [];
    for (var i = 0; i < 7; i++) out.push(dayStr(base + i * DAY));
    return out;
  }
  function metaDiaria() { return (S.meta && S.meta.diaria) || 20; }

  function gerarPlano() {
    var diag = diagnostico(), fase = faseAtual(), meta = metaDiaria();
    var hoje = dayStr();
    var dias = diasDaSemana(), plano = { prova: PROVA.id, semana: weekId(), ini: dias[0], criado: hoje, dias: {}, cortados: [], geradoEm: Date.now(), refeitoEm: 0, fase: fase.id };

    // fila de pontos por valor, com as travas do ciclo: no máximo 2 do
    // mesmo tema por dia e toda matéria com ponto ativo aparece na semana
    var fila = diag.ranking.slice(0, 40);
    // Na véspera não há tempo de ser completo, só de ser certeiro: fica
    // o que a banca mais cobra. (Se sobrar pouco, volta a fila inteira.)
    if (fase.id === "vespera") {
      var pesados = fila.filter(function (d) { return d.peso >= 4; });
      if (pesados.length >= 6) fila = pesados;
    }
    if (!fila.length) { plano.vazio = true; return plano; }
    var usadoNaSemana = {}, cursor = 0;
    function proximo(materiasDoDia, jaNoDia) {
      for (var volta = 0; volta < fila.length * 2; volta++) {
        var d = fila[cursor % fila.length];
        cursor += 1;
        if (jaNoDia[d.p.id]) continue;
        if ((materiasDoDia[d.p.materia] || 0) >= 2) continue;
        return d;
      }
      return null;
    }
    // Só distribui de hoje para a frente: dia que já passou quando o
    // plano nasceu não é dia furado — não existia plano para furar.
    var estudo = dias.filter(function (ds) { return ehDiaDeEstudo(ds) && ds >= hoje; });
    // matéria que ainda não apareceu entra na frente uma vez por semana —
    // menos na véspera, quando espalhar por todas as matérias é o erro
    var porMateria = {};
    fila.forEach(function (d) { if (!porMateria[d.p.materia]) porMateria[d.p.materia] = d; });
    var pendentes = fase.id === "vespera" ? [] : Object.keys(porMateria);

    /* Cota de revisão do dia. Duas correções sobre a porcentagem crua
       da fase: (1) nunca pedir mais revisão do que há questão vencida —
       item impossível de fechar desmoraliza o plano; (2) quando a pilha
       de vencidas já passa de um dia inteiro de meta, ela toma metade do
       dia até drenar: esquecer o que já se sabia custa mais caro que
       não ter visto ainda. */
    var vencidas = dueQuestions().length;
    var cotaRev = Math.round(meta * fase.rev);
    if (vencidas >= meta) cotaRev = Math.max(cotaRev, Math.round(meta * 0.5));
    cotaRev = Math.min(cotaRev, vencidas);

    estudo.forEach(function (ds, i) {
      var itens = [], materiasDoDia = {}, jaNoDia = {};
      var volumeRev = cotaRev;
      if (volumeRev > 0) itens.push({ ponto: null, rev: true, alvo: volumeRev, feito: 0 });
      var resto = meta - volumeRev;
      // 2 ou 3 pontos por dia, conforme sobra de volume
      var nPontos = resto >= 14 ? 3 : 2;
      var fatias = [];
      for (var k = 0; k < nPontos; k++) fatias.push(0);
      for (var q = 0; q < resto; q++) fatias[q % nPontos] += 1;
      for (var j = 0; j < nPontos; j++) {
        var d = null;
        // garante presença semanal de cada matéria antes de repetir as fortes
        while (pendentes.length && !d) {
          var cand = porMateria[pendentes[0]];
          if (usadoNaSemana[cand.p.id]) { pendentes.shift(); continue; }
          if (!jaNoDia[cand.p.id] && (materiasDoDia[cand.p.materia] || 0) < 2) { d = cand; pendentes.shift(); }
          else break;
        }
        if (!d) d = proximo(materiasDoDia, jaNoDia);
        if (!d || !fatias[j]) continue;
        jaNoDia[d.p.id] = 1;
        materiasDoDia[d.p.materia] = (materiasDoDia[d.p.materia] || 0) + 1;
        usadoNaSemana[d.p.id] = 1;
        itens.push({ ponto: d.p.id, alvo: fatias[j], feito: 0, peso: d.peso });
      }
      plano.dias[ds] = itens;
    });
    // dias de folga entram no plano como folga explícita (não geram dívida)
    dias.forEach(function (ds) { if (!plano.dias[ds]) plano.dias[ds] = []; });
    return plano;
  }

  /* Redistribuição: chamada no boot e ao abrir o Cronograma.
     1. semana ou prova mudou  → plano novo, diagnóstico fresco
     2. dia de estudo passado com alvo não cumprido → dívida, por ponto
     3. dívida volta nos dias restantes (no ponto de origem), teto 1,5× a meta
     4. o que não couber sai da semana, começando pelo ponto de MENOR peso */
  function ensurePlano(forcar) {
    if (!PROVA) return;
    if (forcar || !S.plano || S.plano.prova !== PROVA.id || S.plano.semana !== weekId()) {
      S.plano = gerarPlano();
      save();
      return;
    }
    var pl = S.plano, hoje = dayStr(), dias = diasDaSemana();

    /* 1. Levanta a dívida POR PONTO. Guardar só o total faria a dívida de
       Execução Penal reaparecer como questão de Constitucional — você deve
       o assunto que deixou de estudar, não um número solto. */
    var devePorPonto = {}, divida = 0, furados = [];
    dias.forEach(function (ds) {
      if (ds >= hoje) return;
      if (ds < (pl.criado || pl.ini)) return;         // anterior ao plano: não há dívida
      var itens = pl.dias[ds] || [];
      if (!itens.length) return;                      // folga: nada a devolver
      var falta = 0;
      itens.forEach(function (it) {
        if (it.cortado || it.migrado) return;
        // revisão não vira dívida: o SM-2 já reagenda o que você não
        // revisou. Cobrar duas vezes pelo mesmo esquecimento é o que
        // transforma um dia perdido em muro na quinta-feira.
        if (it.rev) { it.migrado = 1; return; }
        var f = (it.alvo || 0) - (it.feito || 0);
        if (f > 0) {
          devePorPonto[it.ponto] = (devePorPonto[it.ponto] || 0) + f;
          falta += f; it.migrado = 1;
        }
      });
      if (falta > 0) { divida += falta; furados.push(ds); }
    });
    if (!divida) return;

    /* 2. Devolve o que couber, do ponto de MAIOR peso para o de menor: se
       nem tudo cabe, o que sobrevive à semana é o que mais rende na prova. */
    var ledger = Object.keys(devePorPonto).map(function (id) {
      var p = PONTO_BY_ID[id];
      return { id: id, qtd: devePorPonto[id], peso: p ? (p.peso || PESO_PADRAO) : 0 };
    }).sort(function (a, b) { return b.peso - a.peso; });

    var futuros = dias.filter(function (ds) { return ds >= hoje && ehDiaDeEstudo(ds) && (pl.dias[ds] || []).length; });
    var teto = Math.round(metaDiaria() * TETO_DIA), colocado = 0, li = 0;
    futuros.forEach(function (ds) {
      var itens = pl.dias[ds];
      var carga = itens.reduce(function (a, it) { return a + (it.alvo || 0); }, 0);
      var espaco = Math.max(0, teto - carga);
      while (espaco > 0 && li < ledger.length) {
        var lg = ledger[li];
        if (lg.qtd <= 0) { li += 1; continue; }
        var por = Math.min(espaco, lg.qtd);
        // a dívida volta para o SEU ponto: soma no item do dia se ele já
        // estiver lá, senão entra como item próprio
        var alvoIt = null;
        for (var i = 0; i < itens.length; i++) if (itens[i].ponto === lg.id) { alvoIt = itens[i]; break; }
        if (!alvoIt) {
          alvoIt = { ponto: lg.id, alvo: 0, feito: 0, peso: lg.peso };
          itens.push(alvoIt);
        }
        alvoIt.alvo += por;
        alvoIt.devido = (alvoIt.devido || 0) + por;
        lg.qtd -= por; espaco -= por; colocado += por;
      }
    });

    /* 3. O que não couber sai da semana — e o app diz qual e por quê. Sem
       este corte, furar segunda vira uma quinta-feira impossível, e é aí
       que o concurseiro abandona o cronograma. */
    pl.cortados = [];
    ledger.forEach(function (lg) {
      if (lg.qtd > 0) pl.cortados.push({ ponto: lg.id, peso: lg.peso, qtd: lg.qtd });
    });
    pl.cortados.sort(function (a, b) { return a.peso - b.peso; });
    pl.refeitoEm = Date.now();
    pl.furados = furados;
    pl.dividaUltima = divida;
    pl.dividaColocada = colocado;
    save();
  }

  // itens de hoje que ainda valem (sem os cortados)
  function itensDeHoje() {
    if (!S.plano || !S.plano.dias) return [];
    return (S.plano.dias[dayStr()] || []).filter(function (it) { return !it.cortado; });
  }
  // uma resposta em qualquer lugar do app conta no cronograma
  function creditarNoPlano(q, foiRevisaoVencida) {
    var itens = itensDeHoje();
    if (!itens.length) return;
    var pontos = PONTOS_BY_QID[q.id] || [];
    for (var i = 0; i < itens.length; i++) {
      var it = itens[i];
      if (it.rev) continue;
      for (var j = 0; j < pontos.length; j++) {
        if (pontos[j].id === it.ponto && (it.feito || 0) < (it.alvo || 0)) { it.feito = (it.feito || 0) + 1; return; }
      }
    }
    // não era de nenhum ponto do dia: se veio vencida, abate a cota de revisão
    if (foiRevisaoVencida) {
      for (var k = 0; k < itens.length; k++) {
        if (itens[k].rev && (itens[k].feito || 0) < (itens[k].alvo || 0)) { itens[k].feito = (itens[k].feito || 0) + 1; return; }
      }
    }
  }
  // sessão "Começar o dia": junta o que o plano de hoje pede
  function questoesDoDia() {
    var out = [], usados = {};
    function add(q) { if (q && !usados[q.id]) { usados[q.id] = 1; out.push(q); } }
    itensDeHoje().forEach(function (it) {
      var falta = Math.max(0, (it.alvo || 0) - (it.feito || 0));
      if (!falta) return;
      if (it.rev) {
        dueQuestions().sort(function (a, b) { return S.srs[a.id].due - S.srs[b.id].due; }).slice(0, falta).forEach(add);
        return;
      }
      var p = PONTO_BY_ID[it.ponto];
      if (p) questoesDoPonto(p, falta).forEach(add);
    });
    // plano cumprido (ou sem nada a fazer): cai no Treino do dia
    if (!out.length) return treinoDoDia().qs;
    return out;
  }

  /* ---------- conquistas (medalhas) ---------- */
  function lessonsDoneCount() { var n = 0; for (var k in S.lessons) if (S.lessons[k].completed) n++; return n; }
  function blitzMax() { var m = 0; for (var k in (S.blitz || {})) m = Math.max(m, S.blitz[k].best || 0); return m; }
  function unidadeCompleta() {
    if (!DATA) return false;
    for (var i = 0; i < DATA.units.length; i++) {
      var u = DATA.units[i], all = u.licoes.length > 0;
      for (var j = 0; j < u.licoes.length; j++) {
        if (!(S.lessons[u.licoes[j].id] && S.lessons[u.licoes[j].id].completed)) { all = false; break; }
      }
      if (all) return true;
    }
    return false;
  }
  var CONQUISTAS = [
    { id: "licao1",   ico: "flag", nome: "Primeiro passo",  desc: "Conclua sua primeira lição",            cond: function () { return lessonsDoneCount() >= 1; } },
    { id: "gabarito", ico: "star", nome: "Gabaritou",      desc: "Termine uma lição com 100% de acerto",  cond: function () { for (var k in S.lessons) if (S.lessons[k].best === 100) return true; return false; } },
    { id: "unidade",  ico: "building", nome: "Dominou o tópico", desc: "Complete todas as lições de uma unidade", cond: unidadeCompleta },
    { id: "q50",      ico: "pencil", nome: "Aquecendo",       desc: "Responda 50 questões",                  cond: function () { return S.answered >= 50; } },
    { id: "q100",     ico: "book", nome: "Centurião",       desc: "Responda 100 questões",                 cond: function () { return S.answered >= 100; } },
    { id: "q500",     ico: "trail", nome: "Maratonista",     desc: "Responda 500 questões",                 cond: function () { return S.answered >= 500; } },
    { id: "streak3",  ico: "flame", nome: "Pegando fogo",    desc: "Estude 3 dias seguidos",                cond: function () { return S.streak >= 3; } },
    { id: "streak7",  ico: "calendar", nome: "Semana perfeita", desc: "Estude 7 dias seguidos",                cond: function () { return S.streak >= 7; } },
    { id: "streak30", ico: "mountain", nome: "Imparável",       desc: "Estude 30 dias seguidos",               cond: function () { return S.streak >= 30; } },
    { id: "blitz10",  ico: "bolt", nome: "Relâmpago",       desc: "Faça 10+ acertos numa rodada Blitz",    cond: function () { return blitzMax() >= 10; } },
    { id: "blitz20",  ico: "bolts", nome: "Tempestade",      desc: "Faça 20+ acertos numa rodada Blitz",    cond: function () { return blitzMax() >= 20; } },
    { id: "treino1",  ico: "target", nome: "Na rotina",       desc: "Conclua seu primeiro Treino do dia",    cond: function () { return (S.treinos || 0) >= 1; } },
    { id: "treino7",  ico: "medal", nome: "Disciplina",      desc: "Conclua 7 Treinos do dia",              cond: function () { return (S.treinos || 0) >= 7; } },
    { id: "limpou10", ico: "broom", nome: "Caderno em dia",  desc: "Resolva 10 erros do caderno",           cond: function () { var n = 0; for (var k in S.errors) if (S.errors[k].resolved) n++; return n >= 10; } },
    { id: "social",   ico: "users", nome: "Time formado",    desc: "Crie seu perfil na aba Amigos",         cond: function () { return !!S.social.uid; } }
  ];
  function checkConquistas() {
    var novas = [];
    if (!S.conquistas) S.conquistas = {};
    CONQUISTAS.forEach(function (c) {
      if (S.conquistas[c.id]) return;
      var ok = false;
      try { ok = c.cond(); } catch (e) {}
      if (ok) { S.conquistas[c.id] = Date.now(); novas.push(c); }
    });
    if (novas.length) { touch(); save(); }
    return novas;
  }

  /* ---------- missão do dia ---------- */
  var MISSAO_XP = 20;
  function ensureMissao() {
    if (!PROVA) return;
    var hoje = dayStr();
    if (S.missao && S.missao.day === hoje) return;
    var mats = {};
    DATA.units.forEach(function (u) { mats[u.materia] = 1; });
    var nomes = Object.keys(mats);
    var tipos = [
      { t: "mat", materia: nomes[Math.floor(Math.random() * nomes.length)], alvo: 6 },
      { t: "geral", alvo: 15 },
      { t: "treino", alvo: 1 },
      { t: "blitz", alvo: 5 }
    ];
    var due = dueQuestions().length;
    if (due >= 3 && due <= 15) tipos.push({ t: "zerar-rev", alvo: due });
    var m = tipos[Math.floor(Math.random() * tipos.length)];
    S.missao = { day: hoje, t: m.t, materia: m.materia || null, alvo: m.alvo, prog: 0, done: false };
    save();
  }
  function missaoTexto(m) {
    if (m.t === "mat") return "Acerte " + m.alvo + " questões de " + m.materia + " hoje";
    if (m.t === "geral") return "Acerte " + m.alvo + " questões hoje";
    if (m.t === "treino") return "Conclua o Treino do dia";
    if (m.t === "blitz") return "Faça " + m.alvo + "+ acertos numa rodada Blitz";
    return "Zere as revisões pendentes de hoje";
  }
  function missaoAtiva() { return S.missao && !S.missao.done && S.missao.day === dayStr(); }
  function concluirMissao() {
    S.missao.done = true;
    S.xp += MISSAO_XP; ensureWeek(); S.week.xp += MISSAO_XP;
    if (quiz) { quiz.xpGained += MISSAO_XP; quiz.missaoDone = true; }
    touch(); save();
    sfx("premio"); vib([15, 30, 15, 30, 40]);
    toast("Missão do dia cumprida · +" + MISSAO_XP + " XP");
  }
  /* ---------- meta diária + data da prova ---------- */
  function metaStripHtml() {
    ensureHoje();
    var metaD = (S.meta && S.meta.diaria) || 20;
    var hj = S.hoje.answered;
    var pct = Math.min(100, Math.round(hj / metaD * 100));
    var esq;
    if (S.meta && S.meta.data) {
      var p = S.meta.data.split("-");
      var alvo = new Date(+p[0], +p[1] - 1, +p[2]);
      var hoje0 = new Date(); hoje0.setHours(0, 0, 0, 0);
      var dias = Math.round((alvo - hoje0) / DAY);
      esq = dias > 1 ? icon("calendar") + ' Faltam <b>' + dias + '</b> dias'
        : dias === 1 ? icon("calendar") + ' A prova é <b>amanhã</b>!'
        : dias === 0 ? icon("flame") + ' <b>É hoje!</b> Boa prova!'
        : '<button class="ms-set" data-action="go-perfil">' + icon("calendar") + ' A prova passou — defina a próxima</button>';
    } else {
      esq = '<button class="ms-set" data-action="go-perfil">' + icon("calendar") + ' Definir data da prova</button>';
    }
    return '<div class="meta-strip"><span class="ms-esq">' + esq + '</span>' +
      '<span class="ms-dir">hoje <b>' + hj + '/' + metaD + '</b>' +
      '<span class="ms-track"><i style="width:' + pct + '%"></i></span></span></div>';
  }
  // calendário de constância do mês corrente (Perfil)
  function calendarioHtml() {
    var agora = new Date();
    var ano = agora.getFullYear(), mes = agora.getMonth();
    var nDias = new Date(ano, mes + 1, 0).getDate();
    var off = (new Date(ano, mes, 1).getDay() + 6) % 7; // semana começa na segunda
    var metaD = (S.meta && S.meta.diaria) || 20;
    var nomes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    var h = '<div class="cal-head">' + nomes[mes] + ' de ' + ano + '</div><div class="cal-grid">';
    ["S", "T", "Q", "Q", "S", "S", "D"].forEach(function (d) { h += '<span class="cal-wd">' + d + '</span>'; });
    for (var i = 0; i < off; i++) h += '<span></span>';
    for (var d2 = 1; d2 <= nDias; d2++) {
      var n = (S.dias || {})[ano + "-" + pad(mes + 1) + "-" + pad(d2)] || 0;
      var cls = "cal-d";
      if (n >= metaD) cls += " full"; else if (n > 0) cls += " some";
      if (d2 === agora.getDate()) cls += " today";
      else if (d2 > agora.getDate()) cls += " fut";
      h += '<span class="' + cls + '" title="' + n + (n === 1 ? ' questão' : ' questões') + '">' + d2 + '</span>';
    }
    h += '</div><div class="cal-leg"><span class="cal-d some"></span> estudou' +
      '<span class="cal-d full"></span> meta batida (' + metaD + '/dia)</div>';
    return h;
  }

  // banners de missão/conquistas para as telas de resultado
  function bannersExtras() {
    var h = '';
    if (quiz.metaHit) {
      h += '<div class="rankup" style="border-color:var(--acc)"><span class="ru-ico" style="color:var(--acc)">' + icon("calendar") + '</span><div>' +
        '<div class="ru-t">Meta diária batida</div><div class="ru-n">+10 XP</div></div></div>';
    }
    if (quiz.missaoDone) {
      h += '<div class="rankup" style="border-color:var(--acc)"><span class="ru-ico" style="color:var(--acc)">' + icon("target") + '</span><div>' +
        '<div class="ru-t">Missão do dia cumprida</div><div class="ru-n">+' + MISSAO_XP + ' XP</div></div></div>';
    }
    (quiz.novasConquistas || []).forEach(function (c) {
      h += '<div class="rankup" style="border-color:var(--gold)"><span class="ru-ico" style="color:var(--gold)">' + icon(c.ico) + '</span><div>' +
        '<div class="ru-t">Conquista desbloqueada</div><div class="ru-n">' + esc(c.nome) + '</div></div></div>';
    });
    return h;
  }

  /* ================= RENDER ================= */
  var app = document.getElementById("app");
  var view = { name: "inicio" };
  var quiz = null;
  var drawerOpen = false;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function hud() {
    return '' +
      '<div class="hud">' +
      '  <button class="menu-btn" data-action="open-menu" aria-label="Abrir menu">' + icon("menu") + '</button>' +
      '  <div class="brand"><span class="logo">§</span>Defensor</div>' +
      '  <span class="stat flame">' + icon("flame") + '<b>' + S.streak + '</b></span>' +
      '  <span class="stat xp">' + icon("bolt") + '<b>' + S.xp + '</b></span>' +
      '  ' + heartHud() +
      '</div>';
  }

  function nav() {
    var due = dueQuestions().length;
    var errs = errorQuestions().length;
    function b(id, ico, label, badge) {
      return '<button data-nav="' + id + '" class="' + (view.name === id ? "active" : "") + '">' +
        (badge ? '<span class="badge">' + badge + '</span>' : '') +
        icon(ico) + label + '</button>';
    }
    return '<div class="nav n6">' +
      b("cronograma", "calendar", "Plano", 0) +
      b("trilha", "trail", "Trilha", 0) +
      b("revisar", "refresh", "Revisar", due) +
      b("erros", "bookmark", "Erros", errs) +
      b("amigos", "users", "Amigos", 0) +
      b("perfil", "user", "Perfil", 0) +
      '</div>';
  }

  var lastView = null;
  function renderCore() {
    var body;
    if (view.name === "inicio") body = renderInicio();
    else if (view.name === "quiz") body = renderQuiz();
    else if (view.name === "result") body = renderResult();
    else body = hud() + '<div class="screen">' + screens[view.name]() + '</div>' + nav();
    if (drawerOpen && PROVA && !/^(inicio|quiz|result)$/.test(view.name)) body += renderDrawer();
    app.innerHTML = body;
    wire();
    if (view.name === "result") setTimeout(animateResult, 40);
    // caderno de erros: busca o trecho de cada erro nas fontes do aparelho
    if (view.name === "erros") preencherFontes(); else srcToken++;
  }
  function render() {
    var mudouTela = view.name !== lastView;
    lastView = view.name;
    if (mudouTela && !REDUCED && document.startViewTransition) {
      document.startViewTransition(renderCore);
    } else {
      renderCore();
    }
  }
  /* anima o anel de acerto e o contador de XP da tela de resultado */
  function animateResult() {
    var fg = document.querySelector(".ring .fgc");
    if (fg) {
      var p = parseFloat(fg.getAttribute("data-p")) || 0;
      fg.style.strokeDashoffset = (276.5 * (1 - p / 100)).toFixed(1);
    }
    var xv = document.querySelector("[data-count]");
    if (xv) {
      var alvo = parseInt(xv.getAttribute("data-count"), 10) || 0;
      var pref = xv.hasAttribute("data-plain") ? "" : "+";
      if (REDUCED) { xv.textContent = pref + alvo; return; }
      var t0 = performance.now();
      (function tick(t) {
        var k = Math.min(1, (t - t0) / 700);
        k = 1 - Math.pow(1 - k, 3);
        xv.textContent = pref + Math.round(alvo * k);
        if (k < 1) requestAnimationFrame(tick);
      })(t0);
    }
  }

  /* ---------- Menu inicial: escolha da prova ---------- */
  function renderInicio() {
    var h = '<div class="inicio">' +
      '<div class="inicio-lockup"><span class="logo">§</span><span class="wordmark">Defensor</span></div>' +
      '<div class="inicio-hero">' +
      '<h1>Continue de<br>onde parou.</h1>' +
      '<p>Selecione um concurso para abrir sua trilha.</p>' +
      '</div><div class="prova-list">';
    PROVAS.forEach(function (p) {
      var st = provaStats(p);
      var pct = st.licoes ? Math.round(st.feitas / st.licoes * 100) : 0;
      h += '<button class="prova-card" data-prova="' + p.id + '">' +
        '<span class="pc-eyebrow">' + esc(p.detalhe) + '</span>' +
        '<span class="pc-line">' +
        '<span class="pc-nome">' + esc(p.nome) + '</span>' +
        '<span class="pc-go">' + (st.feitas ? 'Continuar' : 'Abrir') + '</span>' +
        '</span>' +
        '<span class="pc-meta">' + st.questoes + ' questões</span>' +
        '<span class="pc-prog-row">' +
        '<span class="pc-track"><i style="width:' + pct + '%"></i></span>' +
        '<span class="pc-prog">' + st.feitas + ' / ' + st.licoes + '</span>' +
        '</span>' +
        '</button>';
    });
    h += '<div class="prova-card breve">' +
      '<span class="pc-ico">' + icon("plus") + '</span>' +
      '<span class="pc-info"><span class="pc-nome-alt">Novos concursos</span>' +
      '<span class="pc-meta">Em breve</span></span>' +
      '</div>';
    h += '</div>';
    var t = heartTimerText();
    h += '<div class="inicio-foot">Vidas ' + S.hearts +
      (t ? ' · +1 em ' + t : ' · regenera 1 a cada 2h') + '</div>';
    h += '</div>';
    return h;
  }

  /* ---------- Menu lateral ---------- */
  function renderDrawer() {
    var h = '<div class="drawer-back" data-action="close-menu"></div>' +
      '<aside class="drawer">' +
      '<div class="dr-head"><span class="logo">§</span>' +
      '<div class="dr-t"><b>Defensor</b><span>' + esc(PROVA.nome) + '</span></div>' +
      '<button class="dr-x" data-action="close-menu" aria-label="Fechar menu">' + icon("x") + '</button></div>' +
      '<div class="dr-label">Estudando para</div>';
    PROVAS.forEach(function (p) {
      var on = PROVA && p.id === PROVA.id;
      h += '<button class="dr-item' + (on ? ' on' : '') + '" data-prova="' + p.id + '">' +
        icon(p.icone || "book") +
        '<span class="dr-info"><span class="dr-n">' + esc(p.nome) + '</span>' +
        '<span class="dr-s">' + esc(p.detalhe) + '</span></span>' +
        (on ? icon("check", "dr-check") : '') +
        '</button>';
    });
    h += '<div class="dr-sep"></div>' +
      '<button class="dr-item" data-action="go-inicio">' + icon("grad") +
      '<span class="dr-info"><span class="dr-n">Tela inicial</span>' +
      '<span class="dr-s">Ver todas as provas</span></span></button>' +
      '</aside>';
    return h;
  }
  function closeDrawer() {
    drawerOpen = false;
    var d = app.querySelector(".drawer"), bk = app.querySelector(".drawer-back");
    if (d && !REDUCED) {
      d.classList.add("closing");
      if (bk) bk.classList.add("closing");
      setTimeout(render, 170);
    } else render();
  }

  var screens = {};

  /* ---------- Screen: Cronograma (a mentoria) ----------
     A ordem da tela é a ordem da conversa: primeiro o que fazer
     hoje, depois por que esses pontos, depois como a semana está,
     e por fim o que o app ainda não consegue treinar. */
  var DIAS_CURTO = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
  var DIAS_LONGO = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  var PONTO_ALVO = 10;   // tamanho da sessão "treinar este ponto"
  var verTodosPontos = false;

  screens.cronograma = function () {
    ensureHoje();
    ensurePlano();
    var diag = diagnostico();
    var fase = faseAtual(), dias = diasParaProva();
    var itens = itensDeHoje();
    var pl = S.plano || {};
    var alvoHoje = itens.reduce(function (a, it) { return a + (it.alvo || 0); }, 0);
    var feitoHoje = itens.reduce(function (a, it) { return a + Math.min(it.feito || 0, it.alvo || 0); }, 0);

    var h = '<div class="trail-head"><h1>Seu plano de hoje</h1><p>' +
      esc(DATA.meta.concurso) + '</p>' + metaStripHtml() + '</div>';

    /* ---- 1. a abertura: o veredito do dia em uma frase ---- */
    var frase, cta = true;
    if (!alvoHoje) {
      frase = ehDiaDeEstudo(dayStr())
        ? 'Nada no plano de hoje — o diagnóstico não achou ponto para treinar ainda. Responda algumas questões na trilha e volte.'
        : 'Hoje é seu dia de folga. Nada aqui gera dívida — descansar faz parte do ciclo.';
      cta = false;
    } else {
      var partes = [];
      if (dias !== null && dias > 1) partes.push('Faltam <b>' + dias + ' dias</b>');
      else if (dias === 1) partes.push('A prova é <b>amanhã</b>');
      else if (dias === 0) partes.push('<b>É hoje</b>');
      // a frase precisa caber numa respiração: nomeia o maior ponto do
      // dia (com o motivo) e resume o resto
      var rev = 0, temas = [];
      itens.forEach(function (it) {
        if (it.rev) { rev += it.alvo || 0; return; }
        var p = PONTO_BY_ID[it.ponto];
        if (p) temas.push({ n: it.alvo || 0, p: p });
      });
      temas.sort(function (a, b) { return b.n - a.n; });
      var desc = [];
      if (rev) desc.push('<b>' + rev + '</b> de revisão vencida');
      if (temas.length) {
        var t0 = temas[0];
        var d0 = diag.ranking.filter(function (x) { return x.p.id === t0.p.id; })[0];
        var razao = d0 ? (d0.semPeso ? '' : 'peso ' + d0.peso +
          (d0.st.total ? ', você acerta ' + Math.round(d0.st.acerto * 100) + '%' : ', ainda sem histórico')) : '';
        desc.push('<b>' + t0.n + '</b> em ' + esc(curto(t0.p.tema)) + (razao ? ' (' + razao + ')' : ''));
        var resto = temas.slice(1).reduce(function (a, x) { return a + x.n; }, 0);
        if (resto) desc.push('<b>' + resto + '</b> em ' + (temas.length === 2 ? esc(curto(temas[1].p.tema)) : 'outros ' + (temas.length - 1) + ' pontos'));
      }
      partes.push('Hoje são <b>' + alvoHoje + ' questões</b>: ' + desc.join(', '));
      frase = partes.join('. ') + '.';
    }
    // a etiqueta mostra a fatia REAL de revisão do dia, não a nominal da
    // fase: quando a pilha de vencidas estoura, ela toma metade do dia, e
    // anunciar "15% revisão" enquanto o plano pede 50% seria mentira
    var revHoje = itens.reduce(function (a, it) { return a + (it.rev ? (it.alvo || 0) : 0); }, 0);
    var pctRev = alvoHoje ? Math.round(revHoje / alvoHoje * 100) : Math.round(fase.rev * 100);
    h += '<div class="mentor">' +
      '<div class="mt-fase">' + icon("target") + ' ' + fase.nome + ' · ' + pctRev + '% revisão' +
      (dias === null ? ' · <button class="ms-set" data-action="go-perfil">sem data da prova</button>' : '') + '</div>' +
      '<p class="mt-frase">' + frase + '</p>' +
      (cta ? '<button class="btn" data-action="start-dia">' +
        (feitoHoje >= alvoHoje ? 'Dia cumprido — treinar mais' : (feitoHoje ? 'Continuar o dia' : 'Começar o dia')) +
        '</button>' : '') +
      '</div>';

    /* ---- 2. checklist de hoje ---- */
    if (alvoHoje) {
      h += '<div class="page-title" style="font-size:1.1rem">Hoje <span class="conq-count">' + feitoHoje + '/' + alvoHoje + '</span></div>';
      itens.forEach(function (it) {
        var feito = Math.min(it.feito || 0, it.alvo || 0);
        var pct = it.alvo ? Math.round(feito / it.alvo * 100) : 0;
        var pronto = feito >= (it.alvo || 0);
        var nome, sub, attr = '';
        if (it.rev) {
          nome = 'Revisões vencidas';
          var nDue = dueQuestions().length;
          sub = nDue ? nDue + (nDue === 1 ? ' questão vencida no banco' : ' questões vencidas no banco') : 'nada vencido agora';
          attr = ' data-review="plano"';
        } else {
          var p = PONTO_BY_ID[it.ponto];
          if (!p) return;
          nome = p.tema;
          sub = (p.peso ? 'peso ' + p.peso + '/5 · ' : '') + esc(p.materia) +
            (it.devido ? ' · <b>+' + it.devido + ' de dia furado</b>' : '');
          attr = ' data-ponto="' + esc(p.id) + '"';
        }
        h += '<button class="plan-item' + (pronto ? ' done' : '') + '"' + attr + '>' +
          '<span class="pi-ico">' + icon(pronto ? "check" : (it.rev ? "refresh" : "target")) + '</span>' +
          '<span class="pi-info"><span class="pi-t">' + esc(nome) + '</span>' +
          '<span class="pi-s">' + sub + '</span>' +
          '<span class="pi-track"><i style="width:' + pct + '%"></i></span></span>' +
          '<span class="pi-n">' + feito + '/' + it.alvo + '</span>' +
          '</button>';
      });
    }

    /* ---- 3. o diagnóstico ---- */
    var semPesoAqui = diag.ranking.length && diag.ranking[0].semPeso;
    h += '<div class="page-title" style="font-size:1.1rem">Seus 5 pontos que mais valem hoje</div>';
    if (!diag.ranking.length) {
      h += '<div class="empty"><div class="e-ico">' + icon("target") + '</div><b>Sem pontos para diagnosticar.</b><br>' +
        'Esta prova ainda não tem pontos do edital mapeados.</div>';
    } else {
      h += '<p class="page-sub">' + (semPesoAqui
        ? 'Esta prova ainda não tem o peso do edital mapeado — a ordem abaixo usa só o seu desempenho.'
        : 'Peso do edital × seu acerto × o que você está esquecendo. Toque para treinar o ponto.') + '</p>';
      /* Os 5 da abertura levam no máximo 2 pontos da mesma matéria: um
         top-5 com quatro temas de Civil está certo na conta e é péssimo
         como conselho — a lista existe para dizer onde ATACAR, e atacar
         uma matéria só desequilibra a prova. A lista completa, no botão
         abaixo, segue na ordem crua do ranking. */
      var mostra;
      if (verTodosPontos) mostra = diag.ranking;
      else {
        mostra = [];
        var porMat = {};
        for (var mi = 0; mi < diag.ranking.length && mostra.length < 5; mi++) {
          var cand = diag.ranking[mi];
          if ((porMat[cand.p.materia] || 0) >= 2) continue;
          porMat[cand.p.materia] = (porMat[cand.p.materia] || 0) + 1;
          mostra.push(cand);
        }
      }
      mostra.forEach(function (d, i) {
        var st = d.st;
        var accTxt = st.total ? Math.round(st.acerto * 100) + '%' : '—';
        h += '<button class="ponto-card" data-ponto="' + esc(d.p.id) + '">' +
          '<span class="pc-rank">' + (i + 1) + '</span>' +
          '<span class="pc-body">' +
          '<span class="pc-tema">' + esc(d.p.tema) + '</span>' +
          '<span class="pc-mat">' + esc(d.p.materia) + '</span>' +
          '<span class="pc-nums">' +
          (d.semPeso ? '' : '<b>Peso ' + d.peso + '/5</b> · ') +
          'acerta <b>' + accTxt + '</b>' +
          ' · <b>' + st.vistos + '/' + st.qs + '</b> ' + (st.qs === 1 ? 'questão vista' : 'questões vistas') +
          (st.due ? ' · <b>' + st.due + '</b> ' + (st.due === 1 ? 'vencida' : 'vencidas') : '') +
          (st.errados ? ' · <b>' + st.errados + '</b> no caderno de erros' : '') +
          '</span>' +
          '<span class="pc-motivo">' + esc(motivoDiag(d)) + '</span>' +
          '</span></button>';
      });
      if (diag.ranking.length > 5) {
        h += '<button class="btn ghost" data-action="ver-pontos">' +
          (verTodosPontos ? 'Ver só os 5 principais' : 'Ver todos os ' + diag.ranking.length + ' pontos') + '</button>';
      }
    }

    /* ---- 4. a semana ---- */
    h += '<div class="page-title" style="font-size:1.1rem">A semana</div>';
    if (pl.refeitoEm && pl.furados && pl.furados.length) {
      var nomesFurados = pl.furados.map(function (ds) { return DIAS_CURTO[diaDaSemana(ds)]; });
      var cortNomes = (pl.cortados || []).map(function (c) {
        var p = PONTO_BY_ID[c.ponto];
        return (p ? curto(p.tema) : c.ponto) + ' (' + c.qtd + 'q, peso ' + c.peso + ')';
      });
      var voltou = pl.dividaColocada || 0, foi = pl.dividaUltima - voltou;
      h += '<div class="replan">' + icon("refresh") +
        '<span>Você furou <b>' + nomesFurados.join(', ') + '</b> — ' + pl.dividaUltima +
        (pl.dividaUltima === 1 ? ' questão' : ' questões') + ' em aberto. ' +
        (voltou ? '<b>' + voltou + '</b> ' + (voltou === 1 ? 'voltou' : 'voltaram') +
          ' para os dias seguintes, sem nenhum dia passar de ' + Math.round(metaDiaria() * TETO_DIA) + '. ' : '') +
        (foi > 0 ? '<b>' + foi + '</b> ' + (foi === 1 ? 'saiu' : 'saíram') +
          ' da semana, começando pelo que vale menos: ' + esc(cortNomes.join('; ')) + '. ' : '') +
        'O plano se refez — sem bola de neve.</span></div>';
    }
    h += '<div class="card"><div class="semana">';
    diasDaSemana().forEach(function (ds) {
      var lst = (pl.dias && pl.dias[ds]) || [];
      var alvo = 0, feito = 0;
      lst.forEach(function (it) { if (it.cortado) return; alvo += it.alvo || 0; feito += Math.min(it.feito || 0, it.alvo || 0); });
      var hoje = ds === dayStr();
      var antes = ds < (pl.criado || pl.ini || ds);
      var cls = "sd";
      if (hoje && alvo) cls += " hoje";
      else if (antes) cls += " antes";
      else if (!alvo) cls += " folga";
      else if (ds < dayStr()) cls += (feito >= alvo ? " ok" : " furou");
      else cls += " fut";
      var alt = alvo ? Math.max(8, Math.round(Math.min(1, feito / alvo) * 34)) : 0;
      h += '<span class="' + cls + '" title="' + ds + '">' +
        '<span class="sd-bar"><i style="height:' + alt + 'px"></i></span>' +
        '<b>' + (alvo || '·') + '</b>' +
        '<span class="sd-wd">' + DIAS_CURTO[diaDaSemana(ds)] + '</span></span>';
    });
    h += '</div>';
    h += '<div class="f-label" style="margin:14px 0 8px">Dias em que você estuda</div><div class="dow">';
    for (var wd = 1; wd <= 7; wd++) {
      var n = wd % 7; // começa na segunda
      var on = (S.diasEstudo || []).indexOf(n) !== -1;
      h += '<button class="dow-b' + (on ? ' on' : '') + '" data-dia="' + n + '">' + DIAS_CURTO[n].charAt(0).toUpperCase() + '</button>';
    }
    h += '</div><button class="btn ghost" data-action="refazer-plano" style="margin-top:12px">' +
      icon("refresh") + ' Refazer o plano da semana</button></div>';

    /* ---- 4b. o ritmo regressivo, explicado ---- */
    h += '<div class="ritmo">';
    FASES.slice().reverse().forEach(function (f) {
      var atual = f.id === fase.id;
      var faixa = f.id === "base" ? 'mais de 90 dias' : f.id === "meio" ? '90 a 30 dias'
        : f.id === "reta" ? '30 a 7 dias' : 'última semana';
      h += '<div class="rt-row' + (atual ? ' on' : '') + '">' +
        '<span class="rt-n">' + f.nome + '</span>' +
        '<span class="rt-f">' + faixa + '</span>' +
        '<span class="rt-mix">' +
        '<i class="rt-novo" style="flex:' + (f.novo * 100 + 0.01) + '"></i>' +
        '<i class="rt-ref" style="flex:' + (f.ref * 100) + '"></i>' +
        '<i class="rt-rev" style="flex:' + (f.rev * 100) + '"></i>' +
        '</span></div>';
    });
    h += '<div class="rt-leg"><span><i class="rt-novo"></i>novo</span>' +
      '<span><i class="rt-ref"></i>reforço</span><span><i class="rt-rev"></i>revisão</span></div>' +
      '<p class="page-sub" style="margin:10px 2px 0">Conforme a prova chega, o plano troca questão nova por revisão. ' +
      (dias === null ? 'Defina a data da prova no Perfil para o ciclo andar sozinho.'
        : 'Você está em <b>' + fase.nome.toLowerCase() + '</b>.') + '</p>' +
      '</div>';

    /* ---- 5. sem questões no app ---- */
    if (diag.semQuestoes.length) {
      var altos = diag.semQuestoes.filter(function (d) { return d.peso >= 3; });
      if (altos.length) {
        h += '<div class="page-title" style="font-size:1.1rem">Pontos que o app ainda não treina</div>' +
          '<p class="page-sub">Estão no edital e não têm nenhuma questão no banco. Não entram no plano porque não há o que responder — estude pela apostila e cobre um lote novo.</p>' +
          '<div class="card">';
        altos.slice(0, 8).forEach(function (d) {
          h += '<div class="bar-row"><span class="name" style="width:auto;flex:1">' + esc(d.p.tema) + '</span>' +
            '<span class="pct" style="width:auto">peso ' + d.peso + '/5</span></div>';
        });
        h += '</div>';
      }
    }
    return h;
  };
  // encurta o tema do edital para caber numa frase
  function curto(t) {
    var s = String(t).split(/[:(]/)[0].trim();
    return s.length > 42 ? s.slice(0, 40).trim() + '…' : s;
  }

  /* ---------- Screen: Trilha ---------- */
  screens.trilha = function () {
    // A etiqueta é uma linha só: as bancas já aparecem nos divisores
    // logo abaixo, então "fase" aqui seria redundante.
    var h = '<div class="trail-head"><h1>Sua trilha</h1><p>' +
      esc(DATA.meta.concurso) + '</p>' +
      metaStripHtml() + '</div>';
    // missão do dia (faixa compacta)
    ensureMissao();
    var mio = S.missao;
    if (mio && mio.day === dayStr()) {
      var progM = mio.t === "zerar-rev" ? Math.max(0, mio.alvo - dueQuestions().length) : Math.min(mio.prog, mio.alvo);
      var pctM = Math.round(progM / mio.alvo * 100);
      h += '<div class="missao' + (mio.done ? ' done' : '') + '">' +
        '<div class="mi-t">Missão do dia · +' + MISSAO_XP + ' XP</div>' +
        '<div class="mi-row">' +
        '<div class="mi-desc">' + esc(missaoTexto(mio)) + '</div>' +
        '<span class="mi-prog">' + (mio.done ? 'Feita!' : (mio.t === "treino" || mio.t === "blitz" ? '' : progM + '/' + mio.alvo)) + '</span>' +
        '</div>' +
        (mio.done ? '' : '<div class="mi-track"><i style="width:' + pctM + '%"></i></div>') +
        '</div>';
    }
    var tdo = treinoDoDia();
    var feitoHoje = (S.treino || {})[PROVA.id] === dayStr();
    var partes = [];
    if (tdo.rev) partes.push(tdo.rev + (tdo.rev === 1 ? " revisão" : " revisões"));
    if (tdo.ref) partes.push(tdo.ref + (tdo.ref === 1 ? " reforço" : " reforços"));
    if (tdo.novas) partes.push(tdo.novas + (tdo.novas === 1 ? " questão nova" : " questões novas"));
    h += '<button class="treino-card' + (feitoHoje ? ' done' : '') + '" data-action="start-treino"' + (tdo.qs.length ? '' : ' disabled') + '>' +
      '<span class="tc-ico">' + icon(feitoHoje ? "check" : "target") + '</span>' +
      '<span class="bz-info">' +
      '<span class="bz-t">Treino do dia</span>' +
      '<span class="bz-s">' + (feitoHoje
        ? 'Concluído hoje · repita se quiser'
        : (tdo.qs.length ? partes.join(' · ') + ' · ~15 min' : 'Nada para treinar por aqui ainda')) + '</span>' +
      (S.hearts < HEART_MAX && !feitoHoje && tdo.qs.length ? '<span class="bz-rec">Concluir recupera 1 ' + icon("heart") + '</span>' : '') +
      '</span>' +
      '<span class="tc-go">' + (feitoHoje ? 'De novo' : 'Treinar') + '</span>' +
      '</button>';
    var rec = blitzBest();
    h += '<button class="blitz-card" data-action="start-blitz">' +
      '<span class="bz-ico">' + icon("bolt") + '</span>' +
      '<span class="bz-info">' +
      '<span class="bz-t">Modo Blitz</span>' +
      '<span class="bz-s">3 vidas próprias, sem pausa' + (rec ? ' · recorde: ' + rec + (rec === 1 ? ' acerto' : ' acertos') : '') + '</span>' +
      '</span>' +
      '<span class="bz-go">Jogar</span>' +
      '</button>';
    var currentBanca = null;
    DATA.units.forEach(function (u) {
      var banca = u.banca || "I";
      if (banca !== currentBanca) {
        currentBanca = banca;
        var bi = grupoInfo(banca);
        h += '<div class="banca-divider"><span class="bd-tag">' + esc(bi.nome) + '</span>' +
          '<span class="bd-tema">' + esc(bi.tema) + '</span></div>';
      }
      // A patente da matéria saiu daqui: ela vive no Perfil, e o card
      // da unidade ficou com uma voz só — etiqueta, título, descrição.
      h += '<div class="unit">' +
        '<div class="unit-banner">' +
        '<div class="materia">' + esc(u.materia) + '</div>' +
        '<h2>' + esc(u.titulo) + '</h2>' +
        '<p>' + esc(u.descricao) + '</p>' +
        '<div class="path">';
      u.licoes.forEach(function (l) {
        var stt = lessonState(l);
        var nodeIco = stt === "done" ? icon("check") : (stt === "locked" ? icon("lock") : matIcon(u));
        var cls = "node " + (stt === "done" ? "done" : stt === "locked" ? "locked" : "current");
        var attr = stt === "locked" ? "" : ' data-lesson="' + l.id + '"';
        h += '<div class="node-wrap is-' + stt + '">' +
          '<button class="' + cls + '"' + attr + '>' + nodeIco + '</button>' +
          '<span class="node-label">' + esc(l.titulo) + '</span>' +
          '</div>';
      });
      h += '</div></div></div>';
    });
    return h;
  };

  /* ---------- Screen: Revisar ---------- */
  screens.revisar = function () {
    var due = dueQuestions();
    var h = '<div class="page-title">Revisão espaçada</div>' +
      '<p class="page-sub">O algoritmo traz de volta o que você errou ou está prestes a esquecer.' +
      (S.hearts < HEART_MAX ? ' Concluir uma revisão recupera 1 ' + icon("heart") + '.' : '') + '</p>';
    if (due.length === 0) {
      h += '<div class="empty"><div class="e-ico">' + icon("check") + '</div><b>Nada para revisar agora.</b><br>' +
        'Continue a trilha — as questões voltam no tempo certo.</div>';
    } else {
      h += '<div class="big-cta"><div class="n">' + due.length + '</div>' +
        '<div class="lbl">' + (due.length === 1 ? "questão pronta" : "questões prontas") + ' para revisar</div>' +
        '<button class="btn" data-review="due">Revisar agora</button></div>';
    }
    return h;
  };

  /* ---------- Screen: Erros ---------- */
  screens.erros = function () {
    var errs = errorQuestions();
    var h = '<div class="page-title">Caderno de erros</div>' +
      '<p class="page-sub">Tudo que você errou fica aqui até você acertar de novo.</p>';
    if (errs.length === 0) {
      return h + '<div class="empty"><div class="e-ico">' + icon("bookmark") + '</div><b>Sem erros registrados.</b><br>Bom sinal! Continue estudando.</div>';
    }
    h += '<button class="btn" data-review="errors" style="margin-bottom:12px">Revisar os ' + errs.length + ' erros</button>' +
      '<div class="exp-row">' +
      '<button class="btn ghost" data-action="export-errors-print">' + icon("printer") + ' Exportar PDF</button>' +
      '<button class="btn ghost" data-action="export-errors-copy">' + icon("share") + ' Copiar texto</button>' +
      '</div>';
    // convite discreto: sem fontes, não há trecho para mostrar aqui
    if (ftOk && fontes && !fontes.length) {
      h += '<div class="card ft-hint" data-action="go-perfil">Suba suas apostilas em PDF no Perfil e cada erro passa a mostrar o trecho da sua própria fonte.</div>';
    }
    errs.forEach(function (q) {
      var e = S.errors[q.id];
      h += '<div class="card err-item">' +
        '<span class="tag">' + esc(q.modo === "lei" ? "Lei" : q.modo === "juris" ? "Juris" : "Caso") + '</span>' +
        '<div><div class="err-q">' + esc(q.enunciado) + '</div>' +
        '<div class="err-meta">' + esc(q._topico) + ' · ' + esc(q.fonte) + ' · errada ' + e.count + 'x</div></div>' +
        '<div data-src="' + esc(q.id) + '"></div>' +
        '</div>';
    });
    if (ftOk && fontes === null) fontesRecarrega(); // só para saber se mostra a dica
    return h;
  };

  /* ---------- Screen: Amigos ---------- */
  /* Avatar = monograma (inicial do nome) numa das 8 cores da paleta.
     O valor guardado ("c0".."c7") viaja nos códigos e no Firebase; perfis
     antigos guardavam um emoji, que cai no fallback por hash do nome. */
  var AVATARES = ["c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7"];
  function avKey(a, nome) {
    if (typeof a === "string" && /^c[0-7]$/.test(a)) return a;
    var s = String(nome || ""), n = 0;
    for (var i = 0; i < s.length; i++) n = (n * 31 + s.charCodeAt(i)) % 997;
    return "c" + (n % 8);
  }
  function inicialDe(nome) {
    var s = String(nome || "").trim();
    return s ? s.charAt(0).toUpperCase() : "?";
  }
  function avatarHtml(nome, a, cls) {
    return '<span class="mono ' + avKey(a, nome) + (cls ? ' ' + cls : '') + '">' + esc(inicialDe(nome)) + '</span>';
  }
  // Duelo Blitz da semana: todo mundo joga as mesmas questões, na mesma ordem
  function duelHtml() {
    ensureWeek();
    var rows = [];
    var meu = (S.duelo && S.duelo.week === S.week.id) ? S.duelo.best : null;
    if (meu !== null) rows.push({ me: true, n: S.social.nome, a: S.social.avatar, ds: meu });
    if (grupoAtivo() && S.social.grupoCache) {
      var mb = S.social.grupoCache.membros || {};
      for (var id in mb) {
        if (id === S.social.uid) continue;
        var mm = mb[id];
        if (mm && mm.n && mm.dw === S.week.id) rows.push({ n: mm.n, a: mm.a || "", ds: mm.ds | 0 });
      }
    } else {
      for (var fid in S.social.friends) {
        var f = S.social.friends[fid];
        if (f.dw === S.week.id) rows.push({ n: f.n, a: f.a, ds: f.ds | 0 });
      }
    }
    rows.sort(function (a, b) { return b.ds - a.ds; });
    var h = '<div class="page-title" style="font-size:1.05rem">Duelo Blitz da semana</div>' +
      '<div class="card">' +
      '<p class="page-sub" style="margin:0 0 10px">As mesmas questões, na mesma ordem, para todo mundo — vale o melhor resultado até domingo.</p>' +
      '<button class="btn" data-action="start-duelo">' + icon("bolt") + (meu === null ? ' Jogar o duelo' : ' Tentar melhorar (meu melhor: ' + meu + ')') + '</button>';
    if (rows.length) {
      h += '<div style="margin-top:12px">';
      rows.forEach(function (r, i) {
        h += '<div class="friend-row' + (r.me ? ' me' : '') + '">' +
          '<span class="pos p' + i + '">' + (i + 1) + '</span>' +
          avatarHtml(r.n, r.a, 'fr-av') +
          '<div class="fr-info"><div class="fr-n">' + esc(r.n) + (r.me ? ' (você)' : '') + '</div></div>' +
          '<div class="fr-x"><div class="fr-xp">' + r.ds + '</div><div class="fr-sub">acertos</div></div>' +
          '</div>';
      });
      h += '</div>';
    } else {
      h += '<div class="fr-sub" style="padding:8px 0 0">Ninguém jogou nesta semana ainda.</div>';
    }
    return h + '</div>';
  }
  screens.amigos = function () {
    ensureWeek();
    var h = '<div class="page-title">Grupo de amigos</div>';

    if (!S.social.uid || !S.social.nome) {
      h += '<p class="page-sub">Estilo GymRats, versão concurseiro: cada um compartilha seu código no grupo e o app monta o placar semanal de questões.</p>' +
        '<div class="card">' +
        '<div class="f-label">Como você quer aparecer no placar?</div>' +
        '<input type="text" id="social-name" class="f-input" maxlength="18" placeholder="Seu nome ou apelido">' +
        '<button class="btn" data-action="create-profile" style="margin-top:12px">Criar meu perfil</button>' +
        '</div>' +
        '<p class="page-sub" style="margin-top:10px">' + icon("lock") + ' Sem cadastro e sem servidor: o placar funciona trocando códigos (ex.: no grupo do WhatsApp). Seu progresso continua salvo só no seu aparelho.</p>';
      return h;
    }

    h += '<div class="card">' +
      '<div class="friend-me">' + avatarHtml(S.social.nome, S.social.avatar, 'f-av') +
      '<div style="flex:1;min-width:0">' +
      '<div class="f-name">' + esc(S.social.nome) + ' <button class="mini" data-action="edit-name" title="Editar nome">' + icon("pencil") + '</button></div>' +
      '<div class="f-meta">Esta semana: ' + S.week.xp + ' XP · ' + S.week.answered + ' questões · série ' + S.streak + '</div>' +
      '</div></div>' +
      '<div class="f-label">Cor do seu monograma</div>' +
      '<div class="av-row">' + AVATARES.map(function (a, i) {
        return '<button class="av mono ' + a + (a === avKey(S.social.avatar, S.social.nome) ? ' sel' : '') +
          '" data-avatar="' + a + '" aria-label="Cor ' + (i + 1) + ' de ' + AVATARES.length + '">' +
          esc(inicialDe(S.social.nome)) + '</button>';
      }).join('') + '</div>' +
      '</div>';

    h += duelHtml();

    /* --- modo grupo (tempo real) --- */
    if (grupoAtivo()) {
      var gc = S.social.grupoCache || { membros: {}, at: 0 };
      var mrows = [{ me: true, n: S.social.nome, a: S.social.avatar, w: S.week.id, x: S.week.xp, q: S.week.answered, s: S.streak }];
      for (var mid in gc.membros) {
        if (mid === S.social.uid) continue;
        var mm = gc.membros[mid];
        if (mm && mm.n) mrows.push({ n: mm.n, a: mm.a || "", w: mm.w, x: mm.x | 0, q: mm.q | 0, s: mm.s | 0 });
      }
      var mAtuais = mrows.filter(function (r) { return r.w === S.week.id; }).sort(function (a, b) { return b.x - a.x; });
      var mVelhos = mrows.filter(function (r) { return r.w !== S.week.id; });
      var mins = gc.at ? Math.round((Date.now() - gc.at) / 60000) : null;
      h += '<div class="page-title" style="font-size:1.05rem">' + esc(S.social.grupo.nome || "Grupo") + '</div>' +
        '<p class="page-sub">Placar em tempo real · ' +
        (mins === null ? 'ainda não sincronizado' : (mins < 1 ? 'atualizado agora' : 'atualizado há ' + mins + ' min')) + '</p>' +
        '<div class="card">';
      mAtuais.forEach(function (r, i) {
        h += '<div class="friend-row' + (r.me ? ' me' : '') + '">' +
          '<span class="pos p' + i + '">' + (i + 1) + '</span>' +
          avatarHtml(r.n, r.a, 'fr-av') +
          '<div class="fr-info"><div class="fr-n">' + esc(r.n) + (r.me ? ' (você)' : '') + '</div>' +
          '<div class="fr-sub">' + r.q + ' questões · série ' + (r.s || 0) + '</div></div>' +
          '<div class="fr-x"><div class="fr-xp">' + r.x + '</div><div class="fr-sub">XP</div></div>' +
          '</div>';
      });
      mVelhos.forEach(function (r) {
        h += '<div class="friend-row stale">' +
          '<span class="pos">—</span>' + avatarHtml(r.n, r.a, 'fr-av') +
          '<div class="fr-info"><div class="fr-n">' + esc(r.n) + '</div>' +
          '<div class="fr-sub">ainda sem pontos nesta semana</div></div>' +
          '<div class="fr-x"><div class="fr-xp">' + (r.x | 0) + '</div><div class="fr-sub">' + esc(r.w || '') + '</div></div>' +
          '</div>';
      });
      if (mrows.length === 1) {
        h += '<div class="fr-sub" style="padding:6px 0">Só você por aqui. Convide os amigos.</div>';
      }
      h += '</div>' +
        '<button class="btn" data-action="share-group">' + icon("share") + ' Convidar para o grupo</button>' +
        '<button class="btn ghost" data-action="refresh-group" style="margin-top:10px">' + icon("refresh") + ' Atualizar agora</button>' +
        '<button class="btn ghost" data-action="leave-group" style="margin-top:10px;color:var(--no)">Sair do grupo</button>';
      return h;
    }

    /* --- sem grupo: entrar/criar + modo manual --- */
    h += '<div class="page-title" style="font-size:1.05rem">Grupo em tempo real</div>' +
      '<div class="card">' +
      (DB_URL
        ? '<button class="btn" data-action="create-group">Criar um grupo</button>' +
          '<div class="f-label" style="margin:14px 0 8px">Ou entre com um convite:</div>'
        : '<div class="f-label" style="margin-bottom:8px">Recebeu um convite de grupo? Cole aqui:</div>') +
      '<textarea id="group-code" class="f-input" rows="2" placeholder="Cole o convite do grupo (DPEG.…)"></textarea>' +
      '<button class="btn" data-action="join-group" style="margin-top:10px">Entrar no grupo</button>' +
      '</div>';

    h += '<div class="page-title" style="font-size:1.05rem">Modo manual (troca de códigos)</div>' +
      '<div class="card">' +
      '<button class="btn" data-action="share-code">' + icon("share") + ' Compartilhar meu código</button>' +
      '<div class="code-box"><input readonly id="my-code" value="' + myCode() + '">' +
      '<button class="btn ghost" data-action="copy-code">Copiar</button></div>' +
      '</div>';

    h += '<div class="page-title" style="font-size:1.05rem">Adicionar amigo(a)</div>' +
      '<div class="card">' +
      '<textarea id="friend-code" class="f-input" rows="2" placeholder="Cole aqui a mensagem ou o código recebido (DPE1.…)"></textarea>' +
      '<button class="btn" data-action="add-friend" style="margin-top:10px">Adicionar ao grupo</button>' +
      '</div>';

    var rows = [{ me: true, n: S.social.nome, a: S.social.avatar, w: S.week.id, x: S.week.xp, q: S.week.answered, s: S.streak }];
    for (var fid in S.social.friends) {
      var f = S.social.friends[fid];
      rows.push({ id: fid, n: f.n, a: f.a, w: f.w, x: f.x, q: f.q, s: f.s });
    }
    var atuais = rows.filter(function (r) { return r.w === S.week.id; }).sort(function (a, b) { return b.x - a.x; });
    var velhos = rows.filter(function (r) { return r.w !== S.week.id; });

    h += '<div class="page-title" style="font-size:1.05rem">Placar da semana</div><div class="card">';
    atuais.forEach(function (r, i) {
      h += '<div class="friend-row' + (r.me ? ' me' : '') + '">' +
        '<span class="pos p' + i + '">' + (i + 1) + '</span>' +
        avatarHtml(r.n, r.a, 'fr-av') +
        '<div class="fr-info"><div class="fr-n">' + esc(r.n) + (r.me ? ' (você)' : '') + '</div>' +
        '<div class="fr-sub">' + r.q + ' questões · série ' + (r.s || 0) + '</div></div>' +
        '<div class="fr-x"><div class="fr-xp">' + r.x + '</div><div class="fr-sub">XP</div></div>' +
        (r.me ? '' : '<button class="unfr" data-unfriend="' + r.id + '" title="Remover do grupo">' + icon("x") + '</button>') +
        '</div>';
    });
    velhos.forEach(function (r) {
      h += '<div class="friend-row stale">' +
        '<span class="pos">—</span>' + avatarHtml(r.n, r.a, 'fr-av') +
        '<div class="fr-info"><div class="fr-n">' + esc(r.n) + '</div>' +
        '<div class="fr-sub">sem código desta semana — peça um novo</div></div>' +
        '<div class="fr-x"><div class="fr-xp">' + r.x + '</div><div class="fr-sub">' + esc(r.w || '') + '</div></div>' +
        '<button class="unfr" data-unfriend="' + r.id + '" title="Remover do grupo">' + icon("x") + '</button>' +
        '</div>';
    });
    if (rows.length === 1) {
      h += '<div class="fr-sub" style="padding:6px 0">Seu grupo ainda está vazio. Mande seu código no WhatsApp e cole aqui os que receber.</div>';
    }
    h += '</div>' +
      '<p class="page-sub" style="margin-top:10px">O placar zera toda segunda-feira. Troquem códigos novos ao longo da semana para manter os números em dia.</p>';
    return h;
  };

  /* ---------- Screen: Perfil ---------- */
  screens.perfil = function () {
    var acc = S.answered ? Math.round(S.correctTotal / S.answered * 100) : 0;
    var lessonsDone = Object.keys(S.lessons).filter(function (k) { return S.lessons[k].completed; }).length;
    var h = '<div class="page-title">Seu progresso</div>' +
      '<div class="stat-grid">' +
      tile(S.streak, "dias de ofensiva") +
      tile(S.xp, "XP total") +
      tile(acc + "%", "acerto geral") +
      '</div>' +
      '<div class="stat-grid">' +
      tile(lessonsDone + "/" + LESSONS.length, "lições") +
      tile(S.answered, "respostas") +
      tile(Object.keys(S.srs).length, "em revisão") +
      '</div>';

    // meta e data da prova + calendário de constância
    h += '<div class="page-title" style="font-size:1.1rem">Meta e data da prova</div>' +
      '<div class="card">' +
      '<div class="f-label">Data da prova</div>' +
      '<input type="date" id="meta-data" class="f-input" value="' + esc((S.meta && S.meta.data) || "") + '">' +
      '<div class="f-label" style="margin-top:10px">Meta diária de questões</div>' +
      '<select id="meta-diaria" class="f-input">' + [10, 20, 30, 50].map(function (n) {
        return '<option value="' + n + '"' + ((((S.meta && S.meta.diaria) || 20) === n) ? ' selected' : '') + '>' + n + ' questões por dia</option>';
      }).join('') + '</select>' +
      '<button class="btn" data-action="save-meta" style="margin-top:12px">Salvar meta</button>' +
      '</div>';
    h += '<div class="page-title" style="font-size:1.1rem">Constância</div>' +
      '<div class="card">' + calendarioHtml() + '</div>';

    // patentes por matéria (só as da prova aberta)
    var rksHtml = '';
    var matNames = Object.keys(S.xpByMateria).filter(daProva);
    matNames.sort(function (a, b) { return (S.xpByMateria[b] || 0) - (S.xpByMateria[a] || 0); });
    matNames.forEach(function (k) {
      var xp = S.xpByMateria[k]; if (!xp) return;
      var rk = rankFor(xp);
      rksHtml += '<div class="rank-row">' + insignia(rk.idx) + '<div class="info">' +
        '<div class="top"><span>' + esc(matNome(k)) + '</span><span class="rn">' + rk.cur.nome + '</span></div>' +
        '<div class="track"><i style="width:' + rk.pct + '%"></i></div></div>' +
        '<span class="rxp">' + (rk.next ? xp + '/' + rk.next.xp : 'MÁX') + '</span></div>';
    });
    if (rksHtml) {
      h += '<div class="page-title" style="font-size:1.1rem">Patentes por matéria</div><div class="card">' + rksHtml + '</div>';
    }

    // conquistas
    var desb = Object.keys(S.conquistas || {}).length;
    h += '<div class="page-title" style="font-size:1.1rem">Conquistas <span class="conq-count">' + desb + '/' + CONQUISTAS.length + '</span></div>' +
      '<div class="card conq-grid">';
    CONQUISTAS.forEach(function (c) {
      var un = (S.conquistas || {})[c.id];
      h += '<div class="conq' + (un ? '' : ' lk') + '">' +
        '<span class="cq-ico">' + icon(c.ico) + '</span>' +
        '<span class="cq-n">' + c.nome + '</span>' +
        '<span class="cq-d">' + c.desc + (un ? ' · ' + new Date(un).toLocaleDateString("pt-BR") : '') + '</span>' +
        '</div>';
    });
    h += '</div>';

    // desempenho por matéria (só as da prova aberta)
    var mats = {};
    for (var k2 in S.byMateria) {
      if (!daProva(k2)) continue;
      var b = S.byMateria[k2];
      mats[matNome(k2)] = b.total ? Math.round(b.correct / b.total * 100) : 0;
    }
    var keys = Object.keys(mats);
    if (keys.length) {
      h += '<div class="page-title" style="font-size:1.1rem">Acerto por matéria</div><div class="card">';
      keys.forEach(function (m) {
        h += '<div class="bar-row"><span class="name">' + esc(m) + '</span>' +
          '<span class="track"><i style="width:' + mats[m] + '%"></i></span>' +
          '<span class="pct">' + mats[m] + '%</span></div>';
      });
      h += '</div>';
    }

    // biblioteca de PDFs do usuário
    h += '<div class="page-title" style="font-size:1.1rem">Minhas Fontes</div>' + fontesHtml();

    // conta e backup na nuvem
    h += '<div class="page-title" style="font-size:1.1rem">Conta e backup</div>';
    if (!AUTH_KEY) {
      h += '<div class="card"><p class="page-sub" style="margin:0">' + icon("cloud") + ' Backup na nuvem ainda não configurado nesta instalação — veja "Ativar backup por e-mail" no LEIA-ME.</p></div>';
    } else if (contaAtiva()) {
      h += '<div class="card">' +
        '<div class="f-label">Conectado como</div>' +
        '<div class="acct-mail">' + esc(S.conta.email) + '</div>' +
        '<div class="acct-sync">' + (S.conta.syncAt ? icon("cloud") + ' Último backup: ' + new Date(S.conta.syncAt).toLocaleString("pt-BR") : 'Ainda não sincronizado') + '</div>' +
        '<button class="btn" data-action="sync-now" style="margin-top:12px">Sincronizar agora</button>' +
        '<button class="btn ghost" data-action="logout" style="margin-top:10px">Sair da conta</button>' +
        '</div>';
    } else {
      h += '<div class="card">' +
        '<p class="page-sub" style="margin:0 0 10px">Vincule um e-mail para salvar seu progresso na nuvem e continuar de onde parou em qualquer aparelho.</p>' +
        '<input type="email" id="acct-email" class="f-input" placeholder="seu@email.com" autocomplete="email">' +
        '<input type="password" id="acct-pass" class="f-input" placeholder="senha (mín. 6 caracteres)" style="margin-top:8px" autocomplete="current-password">' +
        '<div class="exp-row" style="margin-top:12px">' +
        '<button class="btn" data-action="login">Entrar</button>' +
        '<button class="btn ghost" data-action="signup">Criar conta</button>' +
        '</div>' +
        '<button class="btn ghost" data-action="forgot" style="margin-top:10px">Esqueci a senha</button>' +
        '</div>';
    }

    h += '<button class="btn ghost" data-action="check-update" style="margin-top:8px">' + icon("refresh") + ' Buscar atualização</button>' +
      '<button class="btn ghost" data-action="toggle-sons" style="margin-top:10px">' + (S.sons === false ? icon("soundOff") + ' Sons e vibração: desligados' : icon("sound") + ' Sons e vibração: ligados') + '</button>' +
      '<button class="btn ghost" data-action="toggle-theme" style="margin-top:10px">' + icon("moon") + ' Alternar tema</button>' +
      '<button class="btn ghost" data-action="reset" style="margin-top:10px;color:var(--no)">Zerar progresso</button>' +
      '<p class="page-sub" style="margin-top:18px;text-align:center">Versão ' + APP_VERSION + ' · ' +
      DATA.units.reduce(function (a, u) { return a + u.licoes.reduce(function (b, l) { return b + l.questoes.length; }, 0); }, 0) +
      ' questões<br>Conteúdo gerado para estudo. Confira sempre a fonte legal citada.</p>';
    return h;
  };
  function tile(v, l) { return '<div class="stat-tile"><div class="v">' + v + '</div><div class="l">' + l + '</div></div>'; }

  /* ================= QUIZ ================= */
  /* embaralha as alternativas a cada apresentação (a correta muda de letra) */
  function shuffleQuestion(q) {
    var idx = q.alternativas.map(function (_, i) { return i; });
    for (var i = idx.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = idx[i]; idx[i] = idx[j]; idx[j] = tmp;
    }
    var c = {};
    for (var k in q) c[k] = q[k];
    c.alternativas = idx.map(function (i) { return q.alternativas[i]; });
    c.correta = idx.indexOf(q.correta);
    return c;
  }

  function startSession(questions, opts) {
    if (!questions.length) { toast("Nada para praticar aqui."); return; }
    quiz = {
      qs: questions.map(shuffleQuestion),
      i: 0, correct: 0, xpGained: 0, wrong: [], rankBefore: {},
      kind: opts.kind, lessonId: opts.lessonId, ponto: opts.ponto,
      lives: opts.kind === "blitz" ? BLITZ_LIVES : null,
      duelo: !!opts.duelo,
      // volta para a tela que abriu a sessão: quem saiu do Cronograma
      // precisa ver o checklist do dia andar ao terminar
      origem: /^(quiz|result|inicio)$/.test(view.name) ? "trilha" : view.name,
      selected: null, checked: false
    };
    view.name = "quiz";
    render();
  }

  function renderQuiz() {
    var q = quiz.qs[quiz.i];
    var pct = Math.round(quiz.i / quiz.qs.length * 100);
    var modoTxt = q.modo === "lei" ? "Letra de lei" : q.modo === "juris" ? "Jurisprudência" : "Caso concreto";
    var top;
    if (quiz.kind === "blitz") {
      var lv = '';
      for (var bi = 0; bi < BLITZ_LIVES; bi++) lv += icon("heart", bi < quiz.lives ? "" : "off");
      top = '<span class="bz-score">' + icon("bolt") + '<b>' + quiz.correct + '</b>' +
        (quiz.correct === 1 ? 'acerto' : 'acertos') + '</span>' +
        '<span class="stat heart bz-lives">' + lv + '</span>';
    } else {
      top = '<span class="progress"><i style="width:' + pct + '%"></i></span>' + heartHud();
    }
    var h = '<div class="screen" style="padding-bottom:120px">' +
      '<div class="quiz-top">' +
      '<button class="x" data-action="quit-quiz">' + icon("x") + '</button>' +
      top +
      '</div>' +
      '<div class="q-head">' +
      '<span class="q-modo ' + q.modo + '">' + modoTxt + '</span>' +
      '<div class="q-stem">' + esc(q.enunciado) + '</div>' +
      '<div class="q-fonte">' + icon("book") + esc(q.fonte) + '</div>' +
      '</div><ul class="alts">';
    q.alternativas.forEach(function (a, idx) {
      var cls = "alt";
      if (quiz.checked) {
        cls += " disabled";
        if (idx === q.correta) cls += " correct";
        else if (idx === quiz.selected) cls += " wrong";
        else cls += " dim";
      } else if (quiz.selected === idx) cls += " sel";
      h += '<li><button class="' + cls + '" data-alt="' + idx + '">' +
        '<span class="key">' + "ABCDE".charAt(idx) + '</span>' +
        '<span>' + esc(a) + '</span></button></li>';
    });
    h += '</ul></div>';

    if (quiz.checked) {
      var ok = quiz.selected === q.correta;
      h += '<div class="feedback ' + (ok ? "ok" : "no") + '">' +
        '<div class="fb-head"><span class="fb-badge">' + (ok ? "✓" : "✕") + '</span>' +
        (ok ? "Mandou bem!" : "Resposta certa: " + "ABCDE".charAt(q.correta)) + '</div>' +
        '<div class="fb-expl"><span class="fb-fonte">' + esc(q.fonte) + '.</span> ' + esc(q.explicacao) + '</div>' +
        /* No design "Sem IA" a ação é sempre dourada: o acerto/erro
           é comunicado pela borda e pelo selo da folha, não pelo botão. */
        '<button class="btn" data-action="next">Continuar</button>' +
        '</div>';
    } else {
      h += '<div class="check-bar"><button class="btn" data-action="check"' +
        (quiz.selected === null ? " disabled" : "") + '>Verificar</button></div>';
    }
    return h;
  }

  function checkAnswer() {
    var q = quiz.qs[quiz.i];
    var ok = quiz.selected === q.correta;
    quiz.checked = true;
    touch();

    // estatística global
    ensureWeek();
    S.answered += 1; S.week.answered += 1;
    // contadores do dia (meta diária + calendário de constância)
    ensureHoje();
    S.hoje.answered += 1; if (ok) S.hoje.correct += 1;
    if (!S.dias) S.dias = {};
    S.dias[S.hoje.day] = (S.dias[S.hoje.day] || 0) + 1;
    if (!S.hoje.metaOk && S.hoje.answered >= ((S.meta && S.meta.diaria) || 20)) {
      S.hoje.metaOk = true;
      S.xp += 10; S.week.xp += 10;
      if (quiz) { quiz.xpGained += 10; quiz.metaHit = true; }
      sfx("premio");
      toast("Meta diária batida · +10 XP");
    }
    var mat = q._materia, mk = matKey(mat);
    if (!(mat in quiz.rankBefore)) quiz.rankBefore[mat] = rankFor(materiaXp(mat)).idx;
    if (ok) {
      S.correctTotal += 1; quiz.correct += 1; quiz.xpGained += 10; S.xp += 10;
      S.week.xp += 10; S.week.correct += 1;
      S.xpByMateria[mk] = (S.xpByMateria[mk] || 0) + 10;
    }
    S.byMateria[mk] = S.byMateria[mk] || { total: 0, correct: 0 };
    S.byMateria[mk].total += 1;
    if (ok) S.byMateria[mk].correct += 1;

    // acerto por questão: é o grão que o Diagnóstico do edital agrega
    // por ponto (uma matéria inteira é grossa demais para orientar)
    S.byQ[q.id] = S.byQ[q.id] || { t: 0, c: 0 };
    S.byQ[q.id].t += 1;
    if (ok) S.byQ[q.id].c += 1;
    // e o cronograma anda com resposta dada em qualquer tela. Aqui o
    // srsUpdate ainda não rodou, então o `due` antigo diz a verdade:
    // esta questão chegou vencida?
    creditarNoPlano(q, !!(S.srs[q.id] && S.srs[q.id].due <= Date.now()));

    // missão do dia: progresso por acerto
    if (ok && missaoAtiva()) {
      var mi = S.missao;
      if (mi.t === "geral" || (mi.t === "mat" && q._materia === mi.materia)) {
        mi.prog += 1;
        if (mi.prog >= mi.alvo) concluirMissao();
      }
    }

    // som e vibração do feedback
    if (ok) { sfx("ok"); vib(12); } else { sfx("no"); vib([60, 40, 80]); }

    // SRS + vidas + erros
    srsUpdate(q.id, ok);
    if (ok) {
      if (S.errors[q.id] && !S.errors[q.id].resolved) S.errors[q.id].resolved = true; // acertou o que errava
    } else {
      if (quiz.kind === "blitz") quiz.lives -= 1;
      else loseHeart();
      quiz.wrong.push(q.id);
      var e = S.errors[q.id] || { count: 0, resolved: false };
      e.count += 1; e.resolved = false; e.lastWrong = Date.now();
      S.errors[q.id] = e;
    }
    save();
    render();
  }

  function nextQuestion() {
    if (quiz.kind === "blitz" && quiz.lives <= 0) { finishSession(); return; }
    quiz.i += 1; quiz.selected = null; quiz.checked = false;
    if (quiz.i >= quiz.qs.length) finishSession();
    else render();
  }

  function finishSession() {
    registerStudyToday();
    // conclui lição + bônus
    if (quiz.kind === "lesson") {
      var acc = Math.round(quiz.correct / quiz.qs.length * 100);
      var prev = S.lessons[quiz.lessonId] || { completed: false, best: 0, times: 0 };
      prev.completed = true;
      prev.best = Math.max(prev.best || 0, acc);
      prev.times = (prev.times || 0) + 1;
      S.lessons[quiz.lessonId] = prev;
      S.xp += 5; quiz.xpGained += 5; ensureWeek(); S.week.xp += 5; // bônus de conclusão
      var bm = LESSON_BY_ID[quiz.lessonId]._unit.materia;
      if (!(bm in quiz.rankBefore)) quiz.rankBefore[bm] = rankFor(materiaXp(bm)).idx;
      S.xpByMateria[matKey(bm)] = (S.xpByMateria[matKey(bm)] || 0) + 5;
    }
    // Treino do dia: bônus de conclusão e registro do dia
    if (quiz.kind === "treino") {
      S.xp += 5; quiz.xpGained += 5; ensureWeek(); S.week.xp += 5;
      if (!S.treino) S.treino = {};
      S.treino[PROVA.id] = dayStr();
      S.treinos = (S.treinos || 0) + 1;
    }
    // Blitz: registra a rodada e o recorde da prova
    if (quiz.kind === "blitz") {
      var bb = S.blitz[PROVA.id] || { best: 0, runs: 0 };
      bb.runs += 1;
      quiz.newRecord = quiz.correct > (bb.best || 0);
      if (quiz.newRecord) bb.best = quiz.correct;
      S.blitz[PROVA.id] = bb;
      // Duelo da semana: guarda o melhor resultado desta semana
      if (quiz.duelo) {
        var wk = weekId();
        var atual = (S.duelo && S.duelo.week === wk) ? S.duelo.best : null;
        if (atual === null || quiz.correct > atual) {
          S.duelo = { week: wk, best: quiz.correct };
          quiz.duelBest = true;
        }
      }
    }
    // subiu de patente em alguma matéria?
    quiz.rankUps = [];
    for (var rm in quiz.rankBefore) {
      var rNow = rankFor(materiaXp(rm));
      if (rNow.idx > quiz.rankBefore[rm]) quiz.rankUps.push({ materia: rm, rank: rNow.cur, idx: rNow.idx });
    }
    // concluir revisão ou treino recupera 1 vida
    if ((quiz.kind === "review" || quiz.kind === "treino") && S.hearts < HEART_MAX) { gainHeart(); quiz.heartWon = true; }
    // missão do dia: tipos ligados a sessões
    if (missaoAtiva()) {
      if (S.missao.t === "treino" && quiz.kind === "treino") concluirMissao();
      else if (S.missao.t === "blitz" && quiz.kind === "blitz" && quiz.correct >= S.missao.alvo) concluirMissao();
      else if (S.missao.t === "zerar-rev" && dueQuestions().length === 0) concluirMissao();
    }
    quiz.novasConquistas = checkConquistas();
    touch();
    save();
    pushMyStats(); // atualiza o placar do grupo em tempo real
    cloudPush();   // backup do progresso na nuvem (se logado)
    sfx("fim"); vib([25, 40, 25]);
    view.name = "result";
    render();
  }

  function renderBlitzResult() {
    var resp = quiz.correct + quiz.wrong.length;
    var zerou = quiz.i >= quiz.qs.length;
    var titulo = zerou ? "Você respondeu o banco inteiro!"
      : quiz.newRecord ? "Novo recorde!"
      : quiz.duelBest ? "Novo melhor no duelo!"
      : "Fim da rodada!";
    var h = '<div class="screen"><div class="result">' +
      '<div class="bz-big">' + icon("bolt") + '</div>' +
      '<div class="bz-num" data-count="' + quiz.correct + '" data-plain>0</div>' +
      '<div class="bz-cap">' + (quiz.correct === 1 ? 'acerto' : 'acertos') + (quiz.duelo ? ' no Duelo da semana' : ' no Modo Blitz') + '</div>' +
      '<h1>' + titulo + '</h1>' +
      '<div class="result-tiles">' +
      '<div class="rt"><div class="rv">' + resp + '</div><div class="rl">respondidas</div></div>' +
      '<div class="rt"><div class="rv">+' + quiz.xpGained + '</div><div class="rl">XP ganho</div></div>' +
      '<div class="rt acc"><div class="rv">' + blitzBest() + '</div><div class="rl">recorde</div></div>' +
      '</div>' +
      (quiz.newRecord && quiz.correct > 0
        ? '<div class="rankup" style="border-color:var(--flame)"><span class="ru-ico" style="color:var(--flame)">' + icon("trophy") + '</span><div>' +
          '<div class="ru-t">Modo Blitz</div><div class="ru-n">Novo recorde: ' + quiz.correct + (quiz.correct === 1 ? ' acerto' : ' acertos') + '</div></div></div>'
        : '') +
      (quiz.duelBest && quiz.correct > 0
        ? '<div class="rankup" style="border-color:var(--blue)"><span class="ru-ico" style="color:var(--blue)">' + icon("swords") + '</span><div>' +
          '<div class="ru-t">Duelo da semana</div><div class="ru-n">Seu melhor: ' + quiz.correct + (quiz.correct === 1 ? ' acerto' : ' acertos') + '</div></div></div>'
        : '') +
      (quiz.rankUps && quiz.rankUps.length ? quiz.rankUps.map(function (r) {
        return '<div class="rankup"><span class="ru-ico">' + insignia(r.idx) + '</span><div>' +
          '<div class="ru-t">' + esc(r.materia) + ' — nova patente</div>' +
          '<div class="ru-n">' + r.rank.nome + '</div></div></div>';
      }).join('') : '') +
      bannersExtras() +
      '<div style="max-width:340px;margin:0 auto">' +
      (quiz.wrong.length
        ? '<button class="btn" data-review="just-wrong" style="margin-bottom:12px">Revisar os ' + quiz.wrong.length + ' erros agora</button>'
        : '') +
      '<button class="btn" data-action="' + (quiz.duelo ? 'start-duelo' : 'start-blitz') + '" style="margin-bottom:12px">' + icon("bolt") + ' Jogar de novo</button>' +
      (quiz.duelo ? '<button class="btn ghost" data-action="go-amigos" style="margin-bottom:12px">' + icon("swords") + ' Ver placar do duelo</button>' : '') +
      '<button class="btn ghost" data-action="home">Voltar à trilha</button>' +
      '</div></div></div>';
    return h;
  }

  function renderResult() {
    if (quiz.kind === "blitz") return renderBlitzResult();
    var total = quiz.qs.length;
    var acc = Math.round(quiz.correct / total * 100);
    var titulo = acc === 100 ? "Perfeito!" : acc >= 70 ? "Muito bom!" : acc >= 40 ? "Continue firme!" : "Bora revisar!";
    var hasWrong = quiz.wrong.length > 0;
    var h = '<div class="screen"><div class="result">' +
      '<div class="ring"><svg viewBox="0 0 100 100">' +
      '<circle class="bgc" cx="50" cy="50" r="44"/>' +
      '<circle class="fgc" cx="50" cy="50" r="44" data-p="' + acc + '"/></svg>' +
      '<div class="ring-num"><div><b>' + acc + '%</b><span>acerto</span></div></div></div>' +
      '<h1>' + titulo + '</h1>' +
      '<div class="result-tiles">' +
      '<div class="rt xp"><div class="rv" data-count="' + quiz.xpGained + '">+0</div><div class="rl">XP ganho</div></div>' +
      '</div>' +
      (quiz.rankUps && quiz.rankUps.length ? quiz.rankUps.map(function (r) {
        return '<div class="rankup"><span class="ru-ico">' + insignia(r.idx) + '</span><div>' +
          '<div class="ru-t">' + esc(r.materia) + ' — nova patente</div>' +
          '<div class="ru-n">' + r.rank.nome + '</div></div></div>';
      }).join('') : '') +
      (quiz.heartWon ? '<div class="rankup" style="border-color:var(--heart)"><span class="ru-ico" style="color:var(--heart)">' + icon("heart") + '</span><div>' +
        '<div class="ru-t">' + (quiz.kind === "treino" ? "Treino do dia concluído" : "Revisão concluída") + '</div><div class="ru-n">+1 vida recuperada</div></div></div>' : '') +
      bannersExtras() +
      '<div style="max-width:340px;margin:0 auto">' +
      (hasWrong
        ? '<button class="btn" data-review="just-wrong" style="margin-bottom:12px">Revisar os ' + quiz.wrong.length + ' erros agora</button>'
        : '') +
      '<button class="btn" data-action="home">Voltar à trilha</button>' +
      '</div></div></div>';
    return h;
  }

  /* ================= EVENTOS ================= */
  function wire() {
    // navegação inferior
    app.querySelectorAll("[data-nav]").forEach(function (b) {
      b.onclick = function () {
        view.name = b.getAttribute("data-nav");
        if (view.name === "amigos") syncAmigos();
        render();
      };
    });
    // escolher/trocar prova (menu inicial e menu lateral)
    app.querySelectorAll("[data-prova]").forEach(function (b) {
      b.onclick = function () {
        var p = provaById(b.getAttribute("data-prova"));
        if (!p) return;
        if (!PROVA || PROVA.id !== p.id) { loadProva(p); S.prova = p.id; save(); }
        drawerOpen = false;
        // abre no Cronograma: escolher a prova é pedir orientação, não
        // uma lista de lições. A Trilha fica a um toque na nav.
        view.name = "cronograma";
        render();
      };
    });
    // iniciar lição
    app.querySelectorAll("[data-lesson]").forEach(function (b) {
      b.onclick = function () {
        if (S.hearts <= 0) {
          toast("Sem vidas — próxima em " + heartTimerText() + ", ou revise erros para ganhar 1.");
          return;
        }
        var l = LESSON_BY_ID[b.getAttribute("data-lesson")];
        startSession(l.questoes, { kind: "lesson", lessonId: l.id });
      };
    });
    // revisar (due / errors / just-wrong)
    app.querySelectorAll("[data-review]").forEach(function (b) {
      b.onclick = function () {
        var kind = b.getAttribute("data-review");
        var qs = kind === "errors" ? errorQuestions()
          : kind === "just-wrong" ? quiz.wrong.map(function (id) { return Q_BY_ID[id]; })
          : dueQuestions();
        // "plano": só a cota de revisão que falta hoje, as mais atrasadas
        // primeiro — a aba Revisar continua servindo a fila inteira
        if (kind === "plano") {
          var cota = 0;
          itensDeHoje().forEach(function (it) { if (it.rev) cota += Math.max(0, (it.alvo || 0) - (it.feito || 0)); });
          qs = qs.sort(function (x, y) { return S.srs[x.id].due - S.srs[y.id].due; }).slice(0, cota || qs.length);
        }
        startSession(qs, { kind: "review" });
      };
    });
    // treinar um ponto do edital (Cronograma: checklist e diagnóstico)
    app.querySelectorAll("[data-ponto]").forEach(function (b) {
      b.onclick = function () {
        if (S.hearts <= 0) {
          toast("Sem vidas — próxima em " + heartTimerText() + ", ou revise erros para ganhar 1.");
          return;
        }
        var p = PONTO_BY_ID[b.getAttribute("data-ponto")];
        if (!p) return;
        var qs = questoesDoPonto(p, PONTO_ALVO);
        if (!qs.length) { toast("Este ponto ainda não tem questões no app."); return; }
        startSession(qs, { kind: "review", ponto: p.id });
      };
    });
    // dias da semana em que você estuda
    app.querySelectorAll("[data-dia]").forEach(function (b) {
      b.onclick = function () {
        var n = parseInt(b.getAttribute("data-dia"), 10);
        var lst = (S.diasEstudo || []).slice();
        var i = lst.indexOf(n);
        if (i === -1) lst.push(n);
        else if (lst.length > 1) lst.splice(i, 1);
        else { toast("Deixe ao menos um dia de estudo na semana."); return; }
        lst.sort();
        S.diasEstudo = lst;
        ensurePlano(true);   // dia novo (ou folga nova) muda a distribuição
        touch(); save(); render();
        toast(i === -1 ? DIAS_LONGO[n] + " entrou no plano." : DIAS_LONGO[n] + " agora é folga.");
      };
    });
    // alternativas
    app.querySelectorAll("[data-alt]").forEach(function (b) {
      b.onclick = function () {
        if (quiz.checked) return;
        quiz.selected = parseInt(b.getAttribute("data-alt"), 10);
        render();
      };
    });
    // ações
    app.querySelectorAll("[data-action]").forEach(function (b) {
      b.onclick = function () { action(b.getAttribute("data-action")); };
    });
    // amigos: avatar e remoção
    app.querySelectorAll("[data-avatar]").forEach(function (b) {
      b.onclick = function () { S.social.avatar = b.getAttribute("data-avatar"); touch(); save(); render(); };
    });
    app.querySelectorAll("[data-unfriend]").forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute("data-unfriend");
        var f = S.social.friends[id];
        if (f && confirm("Remover " + f.n + " do grupo?")) { delete S.social.friends[id]; save(); render(); }
      };
    });
    // fontes: remover um PDF da biblioteca
    app.querySelectorAll("[data-fonte-del]").forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute("data-fonte-del");
        var d = (fontes || []).filter(function (x) { return x.id === id; })[0];
        if (!d) return;
        if (!confirm('Remover "' + d.nome + '" das suas fontes?\n\nOs trechos indexados serão apagados do aparelho. O PDF original no seu celular não é tocado.')) return;
        FT.remover(id).then(function () {
          fontes = null;
          fontesRecarrega(function () { render(); toast("Fonte removida."); });
        });
      };
    });
  }

  function action(a) {
    if (a === "check") checkAnswer();
    else if (a === "next") nextQuestion();
    else if (a === "open-menu") { drawerOpen = true; render(); }
    else if (a === "close-menu") closeDrawer();
    else if (a === "go-inicio") { drawerOpen = false; view.name = "inicio"; render(); }
    else if (a === "quit-quiz") {
      if (quiz && quiz.kind === "blitz") {
        if (confirm("Encerrar a rodada Blitz? Seu placar será registrado.")) finishSession();
      } else if (confirm("Sair da lição? O progresso desta rodada será perdido.")) { view.name = (quiz && quiz.origem) || "trilha"; render(); }
    }
    else if (a === "home") { view.name = (quiz && quiz.origem) || "trilha"; render(); }
    else if (a === "start-blitz") startSession(blitzPool(), { kind: "blitz" });
    else if (a === "start-duelo") startSession(blitzPool(seededRand(weekId() + "|" + PROVA.id)), { kind: "blitz", duelo: true });
    else if (a === "go-amigos") { view.name = "amigos"; syncAmigos(); render(); }
    else if (a === "start-treino") startSession(treinoDoDia().qs, { kind: "treino" });
    else if (a === "go-perfil") { view.name = "perfil"; render(); }
    else if (a === "start-dia") {
      if (S.hearts <= 0) { toast("Sem vidas — próxima em " + heartTimerText() + ", ou revise erros para ganhar 1."); return; }
      var qsd = questoesDoDia();
      if (!qsd.length) { toast("Nada para treinar agora."); return; }
      startSession(qsd, { kind: "treino" });
    }
    else if (a === "ver-pontos") { verTodosPontos = !verTodosPontos; render(); }
    else if (a === "refazer-plano") {
      if (!confirm("Refazer o plano desta semana com o diagnóstico atual?\n\nO que você já respondeu continua contado; a distribuição dos dias que faltam muda.")) return;
      ensurePlano(true);
      render();
      toast("Plano refeito com o diagnóstico de hoje.");
    }
    else if (a === "save-meta") {
      var mdt = ((document.getElementById("meta-data") || {}).value || "").trim();
      var mdi = parseInt((document.getElementById("meta-diaria") || {}).value, 10) || 20;
      S.meta = { data: mdt || null, diaria: mdi };
      touch(); save(); render();
      toast(mdt ? "Meta salva. Contagem regressiva ligada." : "Meta diária salva.");
    }
    else if (a === "create-profile") {
      var inp = document.getElementById("social-name");
      var nome = ((inp && inp.value) || "").trim();
      if (!nome) { toast("Digite um nome para entrar no placar."); return; }
      if (!S.social.uid) S.social.uid = Math.random().toString(36).slice(2, 10);
      S.social.nome = nome.slice(0, 18);
      touch(); save();
      var cq = checkConquistas();
      render();
      toast(cq.length ? "Conquista desbloqueada: " + cq[0].nome : "Perfil criado. Compartilhe seu código com o grupo.");
    }
    else if (a === "edit-name") {
      var novo = prompt("Seu nome no placar:", S.social.nome);
      if (novo && novo.trim()) { S.social.nome = novo.trim().slice(0, 18); touch(); save(); render(); }
    }
    else if (a === "check-update") checkUpdate(true);
    else if (a === "fonte-add") { var fi = fonteInput(); if (fi) fi.click(); }
    else if (a === "export-errors-print") printCaderno();
    else if (a === "export-errors-copy") {
      if (!errorQuestions().length) { toast("Caderno vazio — nada para copiar."); return; }
      var txtCad = textoCaderno();
      if (navigator.share) { navigator.share({ text: txtCad }).catch(function () {}); }
      else { copyText(txtCad); toast("Caderno copiado."); }
    }
    else if (a === "share-code") shareCode();
    else if (a === "copy-code") { copyText(myCode()); toast("Código copiado. Cole no grupo."); }
    else if (a === "add-friend") addFriend();
    else if (a === "create-group") {
      if (!DB_URL) { toast("O banco em tempo real ainda não foi configurado."); return; }
      var gn = prompt("Nome do grupo:", "Rumo à DPE-RJ");
      if (gn === null) return;
      gn = (gn || "").trim().slice(0, 24) || "Meu grupo";
      var gid = Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10);
      S.social.grupo = { url: DB_URL, gid: gid, nome: gn };
      S.social.grupoCache = null;
      save();
      try { dbFetch("/info", { method: "PUT", body: JSON.stringify({ nome: gn, criadoEm: Date.now() }) }).catch(function () {}); } catch (e) {}
      syncAmigos();
      render(); toast("Grupo criado. Convide os amigos.");
    }
    else if (a === "join-group") {
      var gi = document.getElementById("group-code");
      var pv = parseInvite(((gi && gi.value) || "").trim());
      if (!pv) { toast("Convite inválido — confira se copiou a parte que começa com DPEG."); return; }
      S.social.grupo = { url: pv.u, gid: pv.g, nome: (pv.n || "Grupo") };
      S.social.grupoCache = null;
      save(); syncAmigos();
      render(); toast("Você entrou no grupo.");
    }
    else if (a === "share-group") shareGroupInvite();
    else if (a === "refresh-group") {
      pushMyStats();
      pullGroup(function (ok) {
        if (view.name === "amigos") render();
        toast(ok ? "Placar atualizado." : "Sem conexão — tente de novo.");
      });
    }
    else if (a === "leave-group") {
      if (!confirm("Sair do grupo \"" + ((S.social.grupo && S.social.grupo.nome) || "") + "\"?")) return;
      try { dbFetch("/membros/" + S.social.uid, { method: "DELETE" }).catch(function () {}); } catch (e) {}
      S.social.grupo = null; S.social.grupoCache = null;
      save(); render(); toast("Você saiu do grupo.");
    }
    else if (a === "login" || a === "signup") {
      var aem = ((document.getElementById("acct-email") || {}).value || "").trim();
      var apw = (document.getElementById("acct-pass") || {}).value || "";
      if (!aem || !apw) { toast("Preencha e-mail e senha."); return; }
      toast(a === "login" ? "Entrando…" : "Criando conta…");
      authApi(a === "login" ? "signInWithPassword" : "signUp",
        { email: aem, password: apw, returnSecureToken: true },
        function (d) {
          if (d && d.idToken) aposLogin(d, a === "signup");
          else toast(authErro(d));
        });
    }
    else if (a === "forgot") {
      var fem = ((document.getElementById("acct-email") || {}).value || "").trim();
      if (!fem) { toast("Digite seu e-mail no campo acima primeiro."); return; }
      authApi("sendOobCode", { requestType: "PASSWORD_RESET", email: fem }, function (d) {
        toast(d && d.email ? "E-mail de redefinição enviado. Confira a caixa de entrada." : authErro(d));
      });
    }
    else if (a === "sync-now") {
      toast("Sincronizando…");
      cloudPush(function (ok, motivo) {
        render();
        if (ok) toast("Backup atualizado.");
        else if (/permission/i.test(motivo || "")) toast("O banco recusou o acesso — falta publicar as Regras novas (passo 4 do LEIA-ME).");
        else if (motivo === "login") toast("Sessão expirada — saia da conta e entre de novo.");
        else if (motivo === "rede") toast("Sem conexão — tente de novo mais tarde.");
        else toast("Não deu certo: " + motivo);
      });
    }
    else if (a === "logout") {
      if (!confirm("Sair da conta? O progresso continua salvo neste aparelho e na nuvem.")) return;
      S.conta = null; authToken = null; save(); render(); toast("Você saiu da conta.");
    }
    else if (a === "toggle-sons") {
      S.sons = S.sons === false; // alterna
      save(); render();
      if (S.sons) { sfx("ok"); vib(15); }
      toast(S.sons ? "Sons e vibração ligados." : "Sons e vibração desligados.");
    }
    else if (a === "toggle-theme") toggleTheme();
    else if (a === "reset") {
      var avisoNuvem = contaAtiva() ? " O backup na nuvem também será zerado." : "";
      if (confirm("Isso apaga todo o seu progresso." + avisoNuvem + " Continuar? (Seu grupo de amigos e sua conta são mantidos.)")) {
        var soc = S.social, pv = S.prova, ct = S.conta;
        S = defaultState(); S.social = soc; S.prova = pv; S.conta = ct;
        touch(); applyTheme(); save(); cloudPush();
        view.name = "cronograma"; render(); toast("Progresso zerado.");
      }
    }
  }

  /* ---------- tema ---------- */
  function applyTheme() {
    if (S.theme) document.documentElement.setAttribute("data-theme", S.theme);
    else document.documentElement.removeAttribute("data-theme");
  }
  function toggleTheme() {
    var cur = S.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    S.theme = cur === "dark" ? "light" : "dark";
    applyTheme(); save(); render();
  }

  /* ---------- toast ---------- */
  function toast(msg) {
    var t = document.createElement("div");
    t.className = "toast"; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 1800);
  }

  /* ---------- boot ---------- */
  applyTheme();
  applyHeartRegen();
  ensureWeek();
  // prova já escolhida: abre no Cronograma (a mentoria diz o que fazer
  // hoje antes de qualquer lista); senão, mostra o menu inicial
  var provaSalva = provaById(S.prova);
  if (provaSalva) {
    loadProva(provaSalva);
    view.name = "cronograma";
    ensurePlano();   // já no boot: o dia furado é redistribuído antes da 1ª tela
  }
  if (grupoAtivo()) syncAmigos();
  // conquistas retroativas (ex.: quem já tinha 100 respostas antes desta versão)
  var retro = checkConquistas();
  render();
  if (retro.length) {
    toast(retro.length === 1
      ? "Conquista desbloqueada: " + retro[0].nome
      : retro.length + " conquistas desbloqueadas — veja no Perfil.");
  }

  // conta na nuvem: adota o backup se ele for mais novo que este aparelho
  if (contaAtiva()) {
    cloudPull(function (nuvem) {
      if (nuvem && (nuvem.at || 0) > (S.mudadoEm || 0)) {
        adotarNuvem(nuvem);
        render();
        toast("Progresso sincronizado da nuvem.");
      }
    });
  }

  /* checagem de atualização: ao abrir e sempre que o app voltar ao primeiro plano */
  setTimeout(function () { checkUpdate(false); }, 4000);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") checkUpdate(false);
    // ao sair do app, garante o backup do que mudou desde o último sync
    else if (contaAtiva() && (S.mudadoEm || 0) > (S.conta.syncAt || 0)) cloudPush();
  });

  /* relógio das vidas: repõe e atualiza o contador sem recarregar a tela */
  setInterval(function () {
    if (applyHeartRegen()) {
      var ae = document.activeElement;
      if (!(ae && /INPUT|TEXTAREA/.test(ae.tagName))) render();
      return;
    }
    if (S.hearts < HEART_MAX) {
      var t = heartTimerText();
      document.querySelectorAll("[data-regen]").forEach(function (el) { el.textContent = "+1 em " + t; });
    }
    // placar do grupo: atualiza sozinho enquanto a aba Amigos está aberta
    if (view.name === "amigos" && grupoAtivo()) {
      pullGroup(function (ok) {
        if (ok && view.name === "amigos") {
          var ae2 = document.activeElement;
          if (!(ae2 && /INPUT|TEXTAREA/.test(ae2.tagName))) render();
        }
      });
    }
  }, 30000);

  /* ---------- service worker (só em http/https) ---------- */
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
