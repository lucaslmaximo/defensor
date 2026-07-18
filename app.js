/* ============================================================
   App de Estudo DPE-RJ — lógica (vanilla JS, sem build)
   ============================================================ */
(function () {
  "use strict";

  var DATA = window.APP_DATA;
  var DAY = 86400000;
  var KEY = "dperj_state_v1";
  var APP_VERSION = "2.1"; // exibida no Perfil; usada pela checagem de atualização
  var HEART_MAX = 5;
  var HEART_REGEN_MS = 2 * 3600000; // 1 vida a cada 2 horas

  /* Patentes: carreira por matéria, movida a XP */
  var RANKS = [
    { nome: "Estudante",         ico: "🔰", xp: 0 },
    { nome: "Bacharel",          ico: "📜", xp: 60 },
    { nome: "Analista",          ico: "📘", xp: 150 },
    { nome: "Substituto(a)",     ico: "⚖️", xp: 300 },
    { nome: "Titular",           ico: "🎖️", xp: 500 },
    { nome: "Classe Especial",   ico: "🏅", xp: 750 },
    { nome: "Defensor(a) Geral", ico: "👑", xp: 1000 }
  ];
  function rankFor(xp) {
    var i = 0;
    for (var k = 0; k < RANKS.length; k++) if (xp >= RANKS[k].xp) i = k;
    var cur = RANKS[i], next = RANKS[i + 1] || null;
    var pct = next ? Math.min(100, Math.round((xp - cur.xp) / (next.xp - cur.xp) * 100)) : 100;
    return { idx: i, cur: cur, next: next, pct: pct };
  }
  function materiaXp(m) { return S.xpByMateria[m] || 0; }

  /* ---------- cores das unidades ---------- */
  var COR = {
    roxo:    ["#7C5CFC", "#5f3fe0"],
    verde:   ["#18BC64", "#12994F"],
    rosa:    ["#FF5FA2", "#e03e85"],
    azul:    ["#2B8FF5", "#1b6fc9"],
    laranja: ["#FF8A3D", "#e06b1e"],
    ciano:   ["#12BFC7", "#0e9aa1"],
    indigo:  ["#4F5BD5", "#3a45b0"],
    petroleo:["#0E8E99", "#0a6b73"],
    vermelho:["#E7443B", "#c22f27"],
    grafite: ["#5B6B7B", "#44515e"],
    dourado: ["#E0A82E", "#b8871f"]
  };
  var BANCA_INFO = {
    "I":  { nome: "Banca I", tema: "Cível" },
    "II": { nome: "Banca II", tema: "Criminal" },
    "III":{ nome: "Banca III", tema: "Público" }
  };

  /* ---------- índices ---------- */
  var LESSONS = [];            // ordem plana de lições
  var LESSON_BY_ID = {};
  var UNIT_BY_LESSON = {};
  var Q_BY_ID = {};
  DATA.units.forEach(function (u) {
    u.licoes.forEach(function (l, i) {
      l._unit = u; l._idx = i;
      LESSONS.push(l);
      LESSON_BY_ID[l.id] = l;
      UNIT_BY_LESSON[l.id] = u;
      l.questoes.forEach(function (q) {
        q._materia = u.materia; q._topico = u.titulo;
        Q_BY_ID[q.id] = q;
      });
    });
  });

  /* ---------- estado ---------- */
  var S = load();
  function defaultState() {
    return {
      xp: 0, hearts: 5, heartT: null, streak: 0, lastStudyDay: null,
      lessons: {}, srs: {}, errors: {}, answered: 0, correctTotal: 0,
      byMateria: {}, xpByMateria: {}, theme: null,
      social: { uid: null, nome: "", avatar: "🦉", friends: {}, grupo: null, grupoCache: null },
      week: { id: null, xp: 0, answered: 0, correct: 0 }
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
    return '<span class="stat heart"><span class="ico">❤️</span>' + S.hearts +
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
    var p = { v: 1, id: S.social.uid, n: S.social.nome, a: S.social.avatar, w: S.week.id, x: S.week.xp, q: S.week.answered, c: S.week.correct, s: S.streak, t: S.xp };
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
    var texto = "🎓 Defensor — estudo DPE-RJ\n" + S.social.avatar + " " + S.social.nome +
      " esta semana: ⭐ " + S.week.xp + " XP · " + S.week.answered + " questões\n\n" +
      "Meu código de amigo (cole na aba Amigos):\n" + myCode() +
      "\n\nJogue também: " + location.origin + location.pathname;
    if (navigator.share) { navigator.share({ text: texto }).catch(function () {}); }
    else { copyText(texto); toast("Convite copiado! Cole no grupo do WhatsApp 📋"); }
  }
  function addFriend() {
    var inp = document.getElementById("friend-code");
    var p = parseCode(((inp && inp.value) || "").trim());
    if (!p) { toast("Código inválido — confira se copiou a parte que começa com DPE1."); return; }
    if (p.id === S.social.uid) { toast("Esse código é o seu 😄"); return; }
    var novo = !S.social.friends[p.id];
    S.social.friends[p.id] = { n: String(p.n).slice(0, 18), a: p.a || "🙂", w: p.w, x: p.x | 0, q: p.q | 0, c: p.c | 0, s: p.s | 0, t: p.t | 0, at: Date.now() };
    save(); render();
    toast(novo ? String(p.n) + " entrou no grupo! 🎉" : String(p.n) + " atualizado(a) no placar ✅");
  }

  /* ---------- grupo em tempo real (Firebase Realtime DB via REST) ---------- */
  // URL do Realtime Database (ex.: https://seu-projeto-default-rtdb.firebaseio.com)
  var DB_URL = window.DPE_DB_URL || "https://defensor-app-default-rtdb.firebaseio.com";
  function grupoAtivo() { return !!(S.social.grupo && S.social.grupo.url && S.social.grupo.gid); }
  function dbFetch(path, opts) {
    var g = S.social.grupo;
    return fetch(g.url.replace(/\/+$/, "") + "/grupos/" + encodeURIComponent(g.gid) + path + ".json", opts);
  }
  function pushMyStats() {
    if (!grupoAtivo() || !S.social.uid || !S.social.nome) return;
    ensureWeek();
    var p = { n: S.social.nome, a: S.social.avatar, w: S.week.id, x: S.week.xp, q: S.week.answered, c: S.week.correct, s: S.streak, t: S.xp, at: Date.now() };
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
    var texto = "⚡ Bora estudar junto! Entre no meu grupo \"" + (g.nome || "Defensor") + "\" no app Defensor (DPE-RJ).\n\n" +
      "Código de convite (aba Amigos → Entrar no grupo):\n" + grupoInvite() +
      "\n\nO app: " + location.origin + location.pathname;
    if (navigator.share) { navigator.share({ text: texto }).catch(function () {}); }
    else { copyText(texto); toast("Convite do grupo copiado! 📋"); }
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
    b.textContent = "⬆️ Nova versão disponível — toque para atualizar";
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
          toast("Você já está na versão mais recente ✅ (v" + APP_VERSION + ")");
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
  function printCaderno() {
    var errs = errosParaExportar();
    if (!errs.length) { toast("Caderno vazio — nada para exportar."); return; }
    var old = document.getElementById("print-doc");
    if (old) old.remove();
    var div = document.createElement("div");
    div.id = "print-doc";
    div.className = "print-doc";
    var hoje = new Date();
    var h = '<h1>Caderno de Erros — Defensor (DPE-RJ)</h1>' +
      '<p class="pd-meta">Exportado em ' + hoje.toLocaleDateString("pt-BR") + ' · ' + errs.length + ' questões para revisar</p>';
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
        '<p class="pd-expl">' + esc(x.explicacao) + '</p>' +
        '</div>';
    });
    div.innerHTML = h;
    document.body.appendChild(div);
    setTimeout(function () {
      window.print();
      setTimeout(function () { div.remove(); }, 500);
    }, 50);
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

  /* ================= RENDER ================= */
  var app = document.getElementById("app");
  var view = { name: "trilha" };
  var quiz = null;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function hud() {
    return '' +
      '<div class="hud">' +
      '  <div class="brand"><span class="logo">§</span> Defensor</div>' +
      '  <span class="stat flame"><span class="ico">🔥</span>' + S.streak + '</span>' +
      '  <span class="stat xp"><span class="ico">⭐</span>' + S.xp + '</span>' +
      '  ' + heartHud() +
      '</div>';
  }

  function nav() {
    var due = dueQuestions().length;
    var errs = errorQuestions().length;
    function b(id, ico, label, badge) {
      return '<button data-nav="' + id + '" class="' + (view.name === id ? "active" : "") + '">' +
        (badge ? '<span class="badge">' + badge + '</span>' : '') +
        '<span class="ni">' + ico + '</span>' + label + '</button>';
    }
    return '<div class="nav">' +
      b("trilha", "🗺️", "Trilha", 0) +
      b("revisar", "🔁", "Revisar", due) +
      b("erros", "📓", "Erros", errs) +
      b("amigos", "🤝", "Amigos", 0) +
      b("perfil", "👤", "Perfil", 0) +
      '</div>';
  }

  function render() {
    var body;
    if (view.name === "quiz") body = renderQuiz();
    else if (view.name === "result") body = renderResult();
    else body = hud() + '<div class="screen">' + screens[view.name]() + '</div>' + nav();
    app.innerHTML = body;
    wire();
  }

  /* ---------- Screen: Trilha ---------- */
  var screens = {};
  screens.trilha = function () {
    var h = '<div class="trail-head"><h1>Sua trilha</h1><p>' +
      esc(DATA.meta.fase) + '</p></div>';
    var currentBanca = null;
    DATA.units.forEach(function (u) {
      var banca = u.banca || "I";
      if (banca !== currentBanca) {
        currentBanca = banca;
        var bi = BANCA_INFO[banca] || { nome: "Banca " + banca, tema: "" };
        h += '<div class="banca-divider"><span class="bd-tag">' + esc(bi.nome) + '</span>' +
          '<span class="bd-tema">' + esc(bi.tema) + '</span></div>';
      }
      var c = COR[u.cor] || COR.verde;
      var rxp = materiaXp(u.materia), rk = rankFor(rxp);
      h += '<div class="unit">' +
        '<div class="unit-banner" style="background:linear-gradient(135deg,' + c[0] + ',' + c[1] + ')">' +
        '<span class="ubadge">' + u.icone + '</span>' +
        '<div class="materia">' + esc(u.materia) + '</div>' +
        '<h2>' + esc(u.titulo) + '</h2>' +
        '<p>' + esc(u.descricao) + '</p>' +
        '<div class="rank-strip"><span class="r-ico">' + rk.cur.ico + '</span>' +
        '<span class="r-name">' + rk.cur.nome + '</span>' +
        '<span class="r-track"><i style="width:' + rk.pct + '%"></i></span>' +
        '<span class="r-xp">' + (rk.next ? rxp + '/' + rk.next.xp + ' XP' : 'MÁX') + '</span></div>' +
        '</div><div class="path">';
      u.licoes.forEach(function (l) {
        var stt = lessonState(l);
        var icon = stt === "done" ? "👑" : (stt === "locked" ? "🔒" : u.icone);
        var cls = "node " + (stt === "done" ? "done" : stt === "locked" ? "locked" : "current");
        var attr = stt === "locked" ? "" : ' data-lesson="' + l.id + '"';
        h += '<div class="node-wrap" style="--node-c:' + c[0] + ';--node-sh:' + c[1] + '">' +
          (stt === "open" ? '<span class="start-bubble">Começar</span>' : '') +
          '<button class="' + cls + '"' + attr + '>' + icon + '</button>' +
          '<span class="node-label">' + esc(l.titulo) + '</span>' +
          '</div>';
      });
      h += '</div></div>';
    });
    return h;
  };

  /* ---------- Screen: Revisar ---------- */
  screens.revisar = function () {
    var due = dueQuestions();
    var h = '<div class="page-title">Revisão espaçada</div>' +
      '<p class="page-sub">O algoritmo traz de volta o que você errou ou está prestes a esquecer.' +
      (S.hearts < HEART_MAX ? ' 💡 Concluir uma revisão recupera 1 ❤️.' : '') + '</p>';
    if (due.length === 0) {
      h += '<div class="empty"><div class="e-ico">✅</div><b>Nada para revisar agora.</b><br>' +
        'Continue a trilha — as questões voltam no tempo certo.</div>';
    } else {
      h += '<div class="big-cta"><div class="n">' + due.length + '</div>' +
        '<div class="lbl">' + (due.length === 1 ? "questão pronta" : "questões prontas") + ' para revisar</div>' +
        '<button class="btn" style="background:#fff;color:#5a3fd6;box-shadow:0 5px 0 rgba(0,0,0,.15)" data-review="due">Revisar agora</button></div>';
    }
    return h;
  };

  /* ---------- Screen: Erros ---------- */
  screens.erros = function () {
    var errs = errorQuestions();
    var h = '<div class="page-title">Caderno de erros</div>' +
      '<p class="page-sub">Tudo que você errou fica aqui até você acertar de novo.</p>';
    if (errs.length === 0) {
      return h + '<div class="empty"><div class="e-ico">🎯</div><b>Sem erros registrados.</b><br>Bom sinal! Continue estudando.</div>';
    }
    h += '<button class="btn danger" data-review="errors" style="margin-bottom:12px">Revisar os ' + errs.length + ' erros</button>' +
      '<div class="exp-row">' +
      '<button class="btn ghost" data-action="export-errors-print">🖨️ Exportar PDF</button>' +
      '<button class="btn ghost" data-action="export-errors-copy">📤 Copiar texto</button>' +
      '</div>';
    errs.forEach(function (q) {
      var e = S.errors[q.id];
      h += '<div class="card err-item">' +
        '<span class="tag">' + esc(q.modo === "lei" ? "Lei" : q.modo === "juris" ? "Juris" : "Caso") + '</span>' +
        '<div><div class="err-q">' + esc(q.enunciado) + '</div>' +
        '<div class="err-meta">' + esc(q._topico) + ' · ' + esc(q.fonte) + ' · errada ' + e.count + 'x</div></div>' +
        '</div>';
    });
    return h;
  };

  /* ---------- Screen: Amigos ---------- */
  var AVATARES = ["🦉", "🦁", "🐯", "🦊", "🐼", "🦅", "🐺", "🦈", "🐢", "🐝"];
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
        '<p class="page-sub" style="margin-top:10px">🔒 Sem cadastro e sem servidor: o placar funciona trocando códigos (ex.: no grupo do WhatsApp). Seu progresso continua salvo só no seu aparelho.</p>';
      return h;
    }

    h += '<div class="card">' +
      '<div class="friend-me"><span class="f-av">' + S.social.avatar + '</span>' +
      '<div style="flex:1;min-width:0">' +
      '<div class="f-name">' + esc(S.social.nome) + ' <button class="mini" data-action="edit-name" title="Editar nome">✏️</button></div>' +
      '<div class="f-meta">Esta semana: ⭐ ' + S.week.xp + ' XP · ' + S.week.answered + ' questões · 🔥 ' + S.streak + '</div>' +
      '</div></div>' +
      '<div class="av-row">' + AVATARES.map(function (a) {
        return '<button class="av' + (a === S.social.avatar ? ' sel' : '') + '" data-avatar="' + a + '">' + a + '</button>';
      }).join('') + '</div>' +
      '</div>';

    /* --- modo grupo (tempo real) --- */
    if (grupoAtivo()) {
      var gc = S.social.grupoCache || { membros: {}, at: 0 };
      var mrows = [{ me: true, n: S.social.nome, a: S.social.avatar, w: S.week.id, x: S.week.xp, q: S.week.answered, s: S.streak }];
      for (var mid in gc.membros) {
        if (mid === S.social.uid) continue;
        var mm = gc.membros[mid];
        if (mm && mm.n) mrows.push({ n: mm.n, a: mm.a || "🙂", w: mm.w, x: mm.x | 0, q: mm.q | 0, s: mm.s | 0 });
      }
      var mAtuais = mrows.filter(function (r) { return r.w === S.week.id; }).sort(function (a, b) { return b.x - a.x; });
      var mVelhos = mrows.filter(function (r) { return r.w !== S.week.id; });
      var MEDg = ["🥇", "🥈", "🥉"];
      var mins = gc.at ? Math.round((Date.now() - gc.at) / 60000) : null;
      h += '<div class="page-title" style="font-size:1.05rem">⚡ ' + esc(S.social.grupo.nome || "Grupo") + '</div>' +
        '<p class="page-sub">Placar em tempo real · ' +
        (mins === null ? 'ainda não sincronizado' : (mins < 1 ? 'atualizado agora' : 'atualizado há ' + mins + ' min')) + '</p>' +
        '<div class="card">';
      mAtuais.forEach(function (r, i) {
        h += '<div class="friend-row' + (r.me ? ' me' : '') + '">' +
          '<span class="pos">' + (MEDg[i] || (i + 1) + 'º') + '</span>' +
          '<span class="fr-av">' + r.a + '</span>' +
          '<div class="fr-info"><div class="fr-n">' + esc(r.n) + (r.me ? ' (você)' : '') + '</div>' +
          '<div class="fr-sub">' + r.q + ' questões · 🔥 ' + (r.s || 0) + '</div></div>' +
          '<div class="fr-x"><div class="fr-xp">⭐ ' + r.x + '</div><div class="fr-sub">XP</div></div>' +
          '</div>';
      });
      mVelhos.forEach(function (r) {
        h += '<div class="friend-row stale">' +
          '<span class="pos">—</span><span class="fr-av">' + r.a + '</span>' +
          '<div class="fr-info"><div class="fr-n">' + esc(r.n) + '</div>' +
          '<div class="fr-sub">ainda sem pontos nesta semana</div></div>' +
          '<div class="fr-x"><div class="fr-xp">⭐ ' + (r.x | 0) + '</div><div class="fr-sub">' + esc(r.w || '') + '</div></div>' +
          '</div>';
      });
      if (mrows.length === 1) {
        h += '<div class="fr-sub" style="padding:6px 0">Só você por aqui. Convide os amigos! 📣</div>';
      }
      h += '</div>' +
        '<button class="btn" data-action="share-group">📣 Convidar para o grupo</button>' +
        '<button class="btn ghost" data-action="refresh-group" style="margin-top:10px">🔄 Atualizar agora</button>' +
        '<button class="btn ghost" data-action="leave-group" style="margin-top:10px;color:var(--no)">Sair do grupo</button>';
      return h;
    }

    /* --- sem grupo: entrar/criar + modo manual --- */
    h += '<div class="page-title" style="font-size:1.05rem">⚡ Grupo em tempo real</div>' +
      '<div class="card">' +
      (DB_URL
        ? '<button class="btn" data-action="create-group">Criar um grupo</button>' +
          '<div class="f-label" style="margin:14px 0 8px">Ou entre com um convite:</div>'
        : '<div class="f-label" style="margin-bottom:8px">Recebeu um convite de grupo? Cole aqui:</div>') +
      '<textarea id="group-code" class="f-input" rows="2" placeholder="Cole o convite do grupo (DPEG.…)"></textarea>' +
      '<button class="btn ok" data-action="join-group" style="margin-top:10px">Entrar no grupo</button>' +
      '</div>';

    h += '<div class="page-title" style="font-size:1.05rem">Modo manual (troca de códigos)</div>' +
      '<div class="card">' +
      '<button class="btn" data-action="share-code">📣 Compartilhar meu código</button>' +
      '<div class="code-box"><input readonly id="my-code" value="' + myCode() + '">' +
      '<button class="btn ghost" data-action="copy-code">Copiar</button></div>' +
      '</div>';

    h += '<div class="page-title" style="font-size:1.05rem">Adicionar amigo(a)</div>' +
      '<div class="card">' +
      '<textarea id="friend-code" class="f-input" rows="2" placeholder="Cole aqui a mensagem ou o código recebido (DPE1.…)"></textarea>' +
      '<button class="btn ok" data-action="add-friend" style="margin-top:10px">Adicionar ao grupo</button>' +
      '</div>';

    var rows = [{ me: true, n: S.social.nome, a: S.social.avatar, w: S.week.id, x: S.week.xp, q: S.week.answered, s: S.streak }];
    for (var fid in S.social.friends) {
      var f = S.social.friends[fid];
      rows.push({ id: fid, n: f.n, a: f.a, w: f.w, x: f.x, q: f.q, s: f.s });
    }
    var atuais = rows.filter(function (r) { return r.w === S.week.id; }).sort(function (a, b) { return b.x - a.x; });
    var velhos = rows.filter(function (r) { return r.w !== S.week.id; });
    var MED = ["🥇", "🥈", "🥉"];

    h += '<div class="page-title" style="font-size:1.05rem">Placar da semana</div><div class="card">';
    atuais.forEach(function (r, i) {
      h += '<div class="friend-row' + (r.me ? ' me' : '') + '">' +
        '<span class="pos">' + (MED[i] || (i + 1) + 'º') + '</span>' +
        '<span class="fr-av">' + r.a + '</span>' +
        '<div class="fr-info"><div class="fr-n">' + esc(r.n) + (r.me ? ' (você)' : '') + '</div>' +
        '<div class="fr-sub">' + r.q + ' questões · 🔥 ' + (r.s || 0) + '</div></div>' +
        '<div class="fr-x"><div class="fr-xp">⭐ ' + r.x + '</div><div class="fr-sub">XP</div></div>' +
        (r.me ? '' : '<button class="unfr" data-unfriend="' + r.id + '" title="Remover do grupo">✕</button>') +
        '</div>';
    });
    velhos.forEach(function (r) {
      h += '<div class="friend-row stale">' +
        '<span class="pos">—</span><span class="fr-av">' + r.a + '</span>' +
        '<div class="fr-info"><div class="fr-n">' + esc(r.n) + '</div>' +
        '<div class="fr-sub">sem código desta semana — peça um novo</div></div>' +
        '<div class="fr-x"><div class="fr-xp">⭐ ' + r.x + '</div><div class="fr-sub">' + esc(r.w || '') + '</div></div>' +
        '<button class="unfr" data-unfriend="' + r.id + '" title="Remover do grupo">✕</button>' +
        '</div>';
    });
    if (rows.length === 1) {
      h += '<div class="fr-sub" style="padding:6px 0">Seu grupo ainda está vazio. Mande seu código no WhatsApp e cole aqui os que receber. 🎯</div>';
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

    // patentes por matéria
    var rksHtml = '';
    var matNames = Object.keys(S.xpByMateria);
    matNames.sort(function (a, b) { return (S.xpByMateria[b] || 0) - (S.xpByMateria[a] || 0); });
    matNames.forEach(function (m) {
      var xp = S.xpByMateria[m]; if (!xp) return;
      var rk = rankFor(xp);
      rksHtml += '<div class="rank-row"><span class="ico">' + rk.cur.ico + '</span><div class="info">' +
        '<div class="top"><span>' + esc(m) + '</span><span class="rn">' + rk.cur.nome + '</span></div>' +
        '<div class="track"><i style="width:' + rk.pct + '%"></i></div></div>' +
        '<span class="rxp">' + (rk.next ? xp + '/' + rk.next.xp : 'MÁX') + '</span></div>';
    });
    if (rksHtml) {
      h += '<div class="page-title" style="font-size:1.1rem">Patentes por matéria</div><div class="card">' + rksHtml + '</div>';
    }

    // desempenho por matéria
    var mats = {};
    for (var m in S.byMateria) {
      var b = S.byMateria[m];
      mats[m] = b.total ? Math.round(b.correct / b.total * 100) : 0;
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

    h += '<button class="btn ghost" data-action="check-update" style="margin-top:8px">🔄 Buscar atualização</button>' +
      '<button class="btn ghost" data-action="toggle-theme" style="margin-top:10px">🌓 Alternar tema</button>' +
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
      kind: opts.kind, lessonId: opts.lessonId,
      selected: null, checked: false
    };
    view.name = "quiz";
    render();
  }

  function renderQuiz() {
    var q = quiz.qs[quiz.i];
    var pct = Math.round(quiz.i / quiz.qs.length * 100);
    var modoTxt = q.modo === "lei" ? "Letra de lei" : q.modo === "juris" ? "Jurisprudência" : "Caso concreto";
    var h = '<div class="screen" style="padding-bottom:120px">' +
      '<div class="quiz-top">' +
      '<button class="x" data-action="quit-quiz">✕</button>' +
      '<span class="progress"><i style="width:' + pct + '%"></i></span>' +
      heartHud() +
      '</div>' +
      '<div class="q-head">' +
      '<span class="q-modo ' + q.modo + '">' + modoTxt + '</span>' +
      '<div class="q-stem">' + esc(q.enunciado) + '</div>' +
      '<div class="q-fonte">📖 ' + esc(q.fonte) + '</div>' +
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
        '<button class="btn ' + (ok ? "ok" : "danger") + '" data-action="next">Continuar</button>' +
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

    // estatística global
    ensureWeek();
    S.answered += 1; S.week.answered += 1;
    var mat = q._materia;
    if (!(mat in quiz.rankBefore)) quiz.rankBefore[mat] = rankFor(materiaXp(mat)).idx;
    if (ok) {
      S.correctTotal += 1; quiz.correct += 1; quiz.xpGained += 10; S.xp += 10;
      S.week.xp += 10; S.week.correct += 1;
      S.xpByMateria[mat] = (S.xpByMateria[mat] || 0) + 10;
    }
    S.byMateria[mat] = S.byMateria[mat] || { total: 0, correct: 0 };
    S.byMateria[mat].total += 1;
    if (ok) S.byMateria[mat].correct += 1;

    // SRS + vidas + erros
    srsUpdate(q.id, ok);
    if (ok) {
      if (S.errors[q.id] && !S.errors[q.id].resolved) S.errors[q.id].resolved = true; // acertou o que errava
    } else {
      loseHeart();
      quiz.wrong.push(q.id);
      var e = S.errors[q.id] || { count: 0, resolved: false };
      e.count += 1; e.resolved = false; e.lastWrong = Date.now();
      S.errors[q.id] = e;
    }
    save();
    render();
  }

  function nextQuestion() {
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
      S.xpByMateria[bm] = (S.xpByMateria[bm] || 0) + 5;
    }
    // subiu de patente em alguma matéria?
    quiz.rankUps = [];
    for (var rm in quiz.rankBefore) {
      var rNow = rankFor(materiaXp(rm));
      if (rNow.idx > quiz.rankBefore[rm]) quiz.rankUps.push({ materia: rm, rank: rNow.cur });
    }
    // concluir revisão recupera 1 vida
    if (quiz.kind === "review" && S.hearts < HEART_MAX) { gainHeart(); quiz.heartWon = true; }
    save();
    pushMyStats(); // atualiza o placar do grupo em tempo real
    view.name = "result";
    render();
  }

  function renderResult() {
    var total = quiz.qs.length;
    var acc = Math.round(quiz.correct / total * 100);
    var emoji = acc === 100 ? "🏆" : acc >= 70 ? "🎉" : acc >= 40 ? "💪" : "📚";
    var titulo = acc === 100 ? "Perfeito!" : acc >= 70 ? "Muito bom!" : acc >= 40 ? "Continue firme!" : "Bora revisar!";
    var hasWrong = quiz.wrong.length > 0;
    var h = '<div class="screen"><div class="result">' +
      '<div class="emoji">' + emoji + '</div>' +
      '<h1>' + titulo + '</h1>' +
      '<div class="result-tiles">' +
      '<div class="rt xp"><div class="rv">+' + quiz.xpGained + '</div><div class="rl">XP</div></div>' +
      '<div class="rt acc"><div class="rv">' + acc + '%</div><div class="rl">acerto</div></div>' +
      '</div>' +
      (quiz.rankUps && quiz.rankUps.length ? quiz.rankUps.map(function (r) {
        return '<div class="rankup"><span class="ru-ico">' + r.rank.ico + '</span><div>' +
          '<div class="ru-t">' + esc(r.materia) + ' — nova patente</div>' +
          '<div class="ru-n">' + r.rank.nome + '</div></div></div>';
      }).join('') : '') +
      (quiz.heartWon ? '<div class="rankup" style="border-color:var(--heart)"><span class="ru-ico">❤️</span><div>' +
        '<div class="ru-t">Revisão concluída</div><div class="ru-n">+1 vida recuperada</div></div></div>' : '') +
      '<div style="max-width:340px;margin:0 auto">' +
      (hasWrong
        ? '<button class="btn danger" data-review="just-wrong" style="margin-bottom:12px">Revisar os ' + quiz.wrong.length + ' erros agora</button>'
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
    // iniciar lição
    app.querySelectorAll("[data-lesson]").forEach(function (b) {
      b.onclick = function () {
        if (S.hearts <= 0) {
          toast("Sem vidas ❤️ Próxima em " + heartTimerText() + " — ou revise erros para ganhar 1.");
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
        startSession(qs, { kind: "review" });
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
      b.onclick = function () { S.social.avatar = b.getAttribute("data-avatar"); save(); render(); };
    });
    app.querySelectorAll("[data-unfriend]").forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute("data-unfriend");
        var f = S.social.friends[id];
        if (f && confirm("Remover " + f.n + " do grupo?")) { delete S.social.friends[id]; save(); render(); }
      };
    });
  }

  function action(a) {
    if (a === "check") checkAnswer();
    else if (a === "next") nextQuestion();
    else if (a === "quit-quiz") { if (confirm("Sair da lição? O progresso desta rodada será perdido.")) { view.name = "trilha"; render(); } }
    else if (a === "home") { view.name = "trilha"; render(); }
    else if (a === "create-profile") {
      var inp = document.getElementById("social-name");
      var nome = ((inp && inp.value) || "").trim();
      if (!nome) { toast("Digite um nome para entrar no placar."); return; }
      if (!S.social.uid) S.social.uid = Math.random().toString(36).slice(2, 10);
      S.social.nome = nome.slice(0, 18);
      save(); render(); toast("Perfil criado! Agora compartilhe seu código 📣");
    }
    else if (a === "edit-name") {
      var novo = prompt("Seu nome no placar:", S.social.nome);
      if (novo && novo.trim()) { S.social.nome = novo.trim().slice(0, 18); save(); render(); }
    }
    else if (a === "check-update") checkUpdate(true);
    else if (a === "export-errors-print") printCaderno();
    else if (a === "export-errors-copy") {
      if (!errorQuestions().length) { toast("Caderno vazio — nada para copiar."); return; }
      var txtCad = textoCaderno();
      if (navigator.share) { navigator.share({ text: txtCad }).catch(function () {}); }
      else { copyText(txtCad); toast("Caderno copiado! Cole onde quiser estudar 📚"); }
    }
    else if (a === "share-code") shareCode();
    else if (a === "copy-code") { copyText(myCode()); toast("Código copiado! Cole no grupo 📋"); }
    else if (a === "add-friend") addFriend();
    else if (a === "create-group") {
      if (!DB_URL) { toast("O banco em tempo real ainda não foi configurado."); return; }
      var gn = prompt("Nome do grupo:", "Rumo à DPE-RJ 🎯");
      if (gn === null) return;
      gn = (gn || "").trim().slice(0, 24) || "Meu grupo";
      var gid = Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 10);
      S.social.grupo = { url: DB_URL, gid: gid, nome: gn };
      S.social.grupoCache = null;
      save();
      try { dbFetch("/info", { method: "PUT", body: JSON.stringify({ nome: gn, criadoEm: Date.now() }) }).catch(function () {}); } catch (e) {}
      syncAmigos();
      render(); toast("Grupo criado! Convide os amigos 📣");
    }
    else if (a === "join-group") {
      var gi = document.getElementById("group-code");
      var pv = parseInvite(((gi && gi.value) || "").trim());
      if (!pv) { toast("Convite inválido — confira se copiou a parte que começa com DPEG."); return; }
      S.social.grupo = { url: pv.u, gid: pv.g, nome: (pv.n || "Grupo") };
      S.social.grupoCache = null;
      save(); syncAmigos();
      render(); toast("Você entrou no grupo! ⚡");
    }
    else if (a === "share-group") shareGroupInvite();
    else if (a === "refresh-group") {
      pushMyStats();
      pullGroup(function (ok) {
        if (view.name === "amigos") render();
        toast(ok ? "Placar atualizado ⚡" : "Sem conexão — tente de novo.");
      });
    }
    else if (a === "leave-group") {
      if (!confirm("Sair do grupo \"" + ((S.social.grupo && S.social.grupo.nome) || "") + "\"?")) return;
      try { dbFetch("/membros/" + S.social.uid, { method: "DELETE" }).catch(function () {}); } catch (e) {}
      S.social.grupo = null; S.social.grupoCache = null;
      save(); render(); toast("Você saiu do grupo.");
    }
    else if (a === "toggle-theme") toggleTheme();
    else if (a === "reset") { if (confirm("Isso apaga todo o seu progresso. Continuar? (Seu grupo de amigos é mantido.)")) { var soc = S.social; S = defaultState(); S.social = soc; applyTheme(); save(); view.name = "trilha"; render(); toast("Progresso zerado."); } }
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
  if (grupoAtivo()) syncAmigos();
  render();

  /* checagem de atualização: ao abrir e sempre que o app voltar ao primeiro plano */
  setTimeout(function () { checkUpdate(false); }, 4000);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") checkUpdate(false);
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
