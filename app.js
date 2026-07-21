/* ============================================================
   App de Estudo DPE-RJ — lógica (vanilla JS, sem build)
   ============================================================ */
(function () {
  "use strict";

  var DATA = null; // dados da prova ativa (definidos em loadProva)
  var DAY = 86400000;
  var KEY = "dperj_state_v1";
  var APP_VERSION = "3.17"; // exibida no Perfil; usada pela checagem de atualização
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
    grad: '<path d="M12 4.5L2.5 9 12 13.5 21.5 9zM6 11v4.5c0 1.5 2.7 2.8 6 2.8s6-1.3 6-2.8V11M21.5 9v5"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>'
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
    "Princípios Institucionais da Defensoria": "shield"
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
    }
  ];
  function provaById(id) {
    for (var i = 0; i < PROVAS.length; i++) if (PROVAS[i].id === id) return PROVAS[i];
    return null;
  }
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
          q._materia = u.materia; q._topico = u.titulo;
          Q_BY_ID[q.id] = q;
        });
      });
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
      social: { uid: null, nome: "", avatar: "🦉", friends: {}, grupo: null, grupoCache: null },
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
    S.social.friends[p.id] = { n: String(p.n).slice(0, 18), a: p.a || "🙂", w: p.w, x: p.x | 0, q: p.q | 0, c: p.c | 0, s: p.s | 0, t: p.t | 0, dw: p.dw || null, ds: p.ds | 0, at: Date.now() };
    save(); render();
    toast(novo ? String(p.n) + " entrou no grupo! 🎉" : String(p.n) + " atualizado(a) no placar ✅");
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
      toast(criouAgora ? "Conta criada! Backup na nuvem ativado ☁️" : "Bem-vindo(a) de volta! ☁️");
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
    // sorteio embaralhado dentro de cada banca, na ordem Banca I → II → III
    var by = { I: [], II: [], III: [] }, resto = [];
    DATA.units.forEach(function (u) {
      var arr = by[u.banca] || resto;
      u.licoes.forEach(function (l) {
        l.questoes.forEach(function (q) { arr.push(q); });
      });
    });
    function shuf(a) {
      for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(rand() * (i + 1));
        var t = a[i]; a[i] = a[j]; a[j] = t;
      }
      return a;
    }
    return shuf(by.I).concat(shuf(by.II), shuf(by.III), shuf(resto));
  }

  /* ---------- Treino do dia ---------- */
  var TREINO_ALVO = 12; // ~15 minutos de estudo
  // as 2 matérias com pior acerto (mínimo de 4 respostas e menos de 85%)
  function materiasFracas() {
    var arr = [];
    for (var m in S.byMateria) {
      var b = S.byMateria[m];
      if ((b.total || 0) >= 4 && b.correct / b.total < 0.85) arr.push({ m: m, acc: b.correct / b.total });
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

    // novas: nunca respondidas, na ordem da trilha
    var novas = [];
    LESSONS.forEach(function (l) {
      l.questoes.forEach(function (q) { if (!S.srs[q.id]) novas.push(q); });
    });

    due.slice(0, 6).forEach(add);
    var nRev = out.length;
    reforco.slice(0, 3).forEach(add);
    var nRef = out.length - nRev;
    for (var i = 0; i < novas.length && out.length < TREINO_ALVO; i++) add(novas[i]);
    var nNov = out.length - nRev - nRef;
    // faltou? completa com o excedente de revisões e reforços
    for (var j = 6; j < due.length && out.length < TREINO_ALVO; j++) { if (add(due[j])) nRev++; }
    for (var k = 3; k < reforco.length && out.length < TREINO_ALVO; k++) { if (add(reforco[k])) nRef++; }
    // embaralha para intercalar os tipos
    for (var x = out.length - 1; x > 0; x--) {
      var y = Math.floor(Math.random() * (x + 1));
      var t = out[x]; out[x] = out[y]; out[y] = t;
    }
    return { qs: out, rev: nRev, ref: nRef, novas: nNov };
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
    { id: "licao1",   ico: "👣", nome: "Primeiro passo",  desc: "Conclua sua primeira lição",            cond: function () { return lessonsDoneCount() >= 1; } },
    { id: "gabarito", ico: "💯", nome: "Gabaritou!",      desc: "Termine uma lição com 100% de acerto",  cond: function () { for (var k in S.lessons) if (S.lessons[k].best === 100) return true; return false; } },
    { id: "unidade",  ico: "🏛️", nome: "Dominou o tópico", desc: "Complete todas as lições de uma unidade", cond: unidadeCompleta },
    { id: "q50",      ico: "✏️", nome: "Aquecendo",       desc: "Responda 50 questões",                  cond: function () { return S.answered >= 50; } },
    { id: "q100",     ico: "📚", nome: "Centurião",       desc: "Responda 100 questões",                 cond: function () { return S.answered >= 100; } },
    { id: "q500",     ico: "🧠", nome: "Maratonista",     desc: "Responda 500 questões",                 cond: function () { return S.answered >= 500; } },
    { id: "streak3",  ico: "🔥", nome: "Pegando fogo",    desc: "Estude 3 dias seguidos",                cond: function () { return S.streak >= 3; } },
    { id: "streak7",  ico: "🚀", nome: "Semana perfeita", desc: "Estude 7 dias seguidos",                cond: function () { return S.streak >= 7; } },
    { id: "streak30", ico: "🌋", nome: "Imparável",       desc: "Estude 30 dias seguidos",               cond: function () { return S.streak >= 30; } },
    { id: "blitz10",  ico: "⚡", nome: "Relâmpago",       desc: "Faça 10+ acertos numa rodada Blitz",    cond: function () { return blitzMax() >= 10; } },
    { id: "blitz20",  ico: "🌩️", nome: "Tempestade",      desc: "Faça 20+ acertos numa rodada Blitz",    cond: function () { return blitzMax() >= 20; } },
    { id: "treino1",  ico: "🎯", nome: "Na rotina",       desc: "Conclua seu primeiro Treino do dia",    cond: function () { return (S.treinos || 0) >= 1; } },
    { id: "treino7",  ico: "🥋", nome: "Disciplina",      desc: "Conclua 7 Treinos do dia",              cond: function () { return (S.treinos || 0) >= 7; } },
    { id: "limpou10", ico: "🧹", nome: "Caderno em dia",  desc: "Resolva 10 erros do caderno",           cond: function () { var n = 0; for (var k in S.errors) if (S.errors[k].resolved) n++; return n >= 10; } },
    { id: "social",   ico: "🤝", nome: "Time formado",    desc: "Crie seu perfil na aba Amigos",         cond: function () { return !!S.social.uid; } }
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
    toast("Missão do dia cumprida! +" + MISSAO_XP + " XP 🎯");
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
      esq = dias > 1 ? '📅 Faltam <b>' + dias + '</b> dias'
        : dias === 1 ? '📅 A prova é <b>amanhã</b>!'
        : dias === 0 ? '🚀 <b>É hoje!</b> Boa prova!'
        : '<button class="ms-set" data-action="go-perfil">📅 A prova passou — defina a próxima</button>';
    } else {
      esq = '<button class="ms-set" data-action="go-perfil">📅 Definir data da prova</button>';
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
      h += '<div class="rankup" style="border-color:var(--acc)"><span class="ru-ico emj">📅</span><div>' +
        '<div class="ru-t">Meta diária batida</div><div class="ru-n">+10 XP</div></div></div>';
    }
    if (quiz.missaoDone) {
      h += '<div class="rankup" style="border-color:var(--acc)"><span class="ru-ico emj">🎯</span><div>' +
        '<div class="ru-t">Missão do dia cumprida</div><div class="ru-n">+' + MISSAO_XP + ' XP</div></div></div>';
    }
    (quiz.novasConquistas || []).forEach(function (c) {
      h += '<div class="rankup" style="border-color:var(--gold)"><span class="ru-ico emj">' + c.ico + '</span><div>' +
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
      '  <div class="brand"><span class="logo">§</span> Defensor</div>' +
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
    return '<div class="nav">' +
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
    var h = '<div class="inicio"><div class="inicio-hero">' +
      '<span class="logo xl">§</span>' +
      '<h1>Defensor</h1>' +
      '<p>Para qual prova você quer estudar? Dá para trocar depois pelo menu ☰.</p>' +
      '</div><div class="prova-list">';
    PROVAS.forEach(function (p) {
      var st = provaStats(p);
      var pct = st.licoes ? Math.round(st.feitas / st.licoes * 100) : 0;
      h += '<button class="prova-card" data-prova="' + p.id + '">' +
        '<span class="pc-ico">' + icon(p.icone || "book") + '</span>' +
        '<span class="pc-info">' +
        '<span class="pc-nome">' + esc(p.nome) + '</span>' +
        '<span class="pc-meta">' + esc(p.detalhe) + ' · ' + st.questoes + ' questões</span>' +
        (st.feitas
          ? '<span class="pc-track"><i style="width:' + pct + '%"></i></span>' +
            '<span class="pc-prog">' + st.feitas + '/' + st.licoes + ' lições concluídas</span>'
          : '') +
        '</span>' +
        '<span class="pc-go">' + (st.feitas ? 'Continuar' : 'Começar') + '</span>' +
        '</button>';
    });
    h += '<div class="prova-card breve">' +
      '<span class="pc-ico">' + icon("trophy") + '</span>' +
      '<span class="pc-info"><span class="pc-nome">Mais provas em breve</span>' +
      '<span class="pc-meta">Novos concursos serão adicionados aqui.</span></span>' +
      '</div>';
    h += '</div></div>';
    return h;
  }

  /* ---------- Menu lateral ---------- */
  function renderDrawer() {
    var h = '<div class="drawer-back" data-action="close-menu"></div>' +
      '<aside class="drawer">' +
      '<div class="dr-head"><span class="logo">§</span>' +
      '<div class="dr-t"><b>Defensor</b><span>' + esc(PROVA.nome) + '</span></div>' +
      '<button class="dr-x" data-action="close-menu" aria-label="Fechar menu">✕</button></div>' +
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

  /* ---------- Screen: Trilha ---------- */
  var screens = {};
  screens.trilha = function () {
    var h = '<div class="trail-head"><h1>Sua trilha</h1><p>' +
      esc(DATA.meta.concurso) + ' · ' + esc(DATA.meta.fase) + '</p>' +
      metaStripHtml() + '</div>';
    // missão do dia (faixa compacta)
    ensureMissao();
    var mio = S.missao;
    if (mio && mio.day === dayStr()) {
      var progM = mio.t === "zerar-rev" ? Math.max(0, mio.alvo - dueQuestions().length) : Math.min(mio.prog, mio.alvo);
      var pctM = Math.round(progM / mio.alvo * 100);
      h += '<div class="missao' + (mio.done ? ' done' : '') + '">' +
        '<span class="mi-ico">' + (mio.done ? '✅' : '🎯') + '</span>' +
        '<div class="mi-info"><div class="mi-t">Missão do dia <span class="mi-xp">+' + MISSAO_XP + ' XP</span></div>' +
        '<div class="mi-desc">' + esc(missaoTexto(mio)) + '</div>' +
        (mio.done ? '' : '<div class="mi-track"><i style="width:' + pctM + '%"></i></div>') +
        '</div>' +
        '<span class="mi-prog">' + (mio.done ? 'Feita!' : (mio.t === "treino" || mio.t === "blitz" ? '' : progM + '/' + mio.alvo)) + '</span>' +
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
        ? 'Concluído hoje! Amanhã tem uma dose nova — ou repita agora.'
        : (tdo.qs.length ? 'Sua dose de hoje: ' + partes.join(' · ') + '. Uns 15 minutinhos.' : 'Nada para treinar por aqui ainda.')) + '</span>' +
      (S.hearts < HEART_MAX && !feitoHoje && tdo.qs.length ? '<span class="bz-rec">💡 Concluir recupera 1 ❤️</span>' : '') +
      '</span>' +
      '<span class="tc-go">' + (feitoHoje ? 'De novo' : 'Treinar') + '</span>' +
      '</button>';
    var rec = blitzBest();
    h += '<button class="blitz-card" data-action="start-blitz">' +
      '<span class="bz-ico">' + icon("bolt") + '</span>' +
      '<span class="bz-info">' +
      '<span class="bz-t">Modo Blitz</span>' +
      '<span class="bz-s">Questões aleatórias das três bancas, em sequência. 3 vidas, sem pausa: quantas você acerta?</span>' +
      (rec ? '<span class="bz-rec">' + icon("trophy") + ' Recorde: ' + rec + (rec === 1 ? ' acerto' : ' acertos') + '</span>' : '') +
      '</span>' +
      '<span class="bz-go">Jogar</span>' +
      '</button>';
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
        '<div class="unit-banner" style="--uc:' + c[0] + '">' +
        '<span class="ubadge">' + matIcon(u) + '</span>' +
        '<div class="materia">' + esc(u.materia) + '</div>' +
        '<h2>' + esc(u.titulo) + '</h2>' +
        '<p>' + esc(u.descricao) + '</p>' +
        '<div class="rank-strip"><span class="r-ico">' + insignia(rk.idx) + '</span>' +
        '<span class="r-name">' + rk.cur.nome + '</span>' +
        '<span class="r-track"><i style="width:' + rk.pct + '%"></i></span>' +
        '<span class="r-xp">' + (rk.next ? rxp + '/' + rk.next.xp + ' XP' : 'MÁX') + '</span></div>' +
        '</div><div class="path">';
      u.licoes.forEach(function (l) {
        var stt = lessonState(l);
        var nodeIco = stt === "done" ? icon("check") : (stt === "locked" ? icon("lock") : matIcon(u));
        var cls = "node " + (stt === "done" ? "done" : stt === "locked" ? "locked" : "current");
        var attr = stt === "locked" ? "" : ' data-lesson="' + l.id + '"';
        h += '<div class="node-wrap" style="--node-c:' + c[0] + '">' +
          (stt === "open" ? '<span class="start-bubble">Começar</span>' : '') +
          '<button class="' + cls + '"' + attr + '>' + nodeIco + '</button>' +
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
      h += '<div class="empty"><div class="e-ico">' + icon("check") + '</div><b>Nada para revisar agora.</b><br>' +
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
      return h + '<div class="empty"><div class="e-ico">' + icon("bookmark") + '</div><b>Sem erros registrados.</b><br>Bom sinal! Continue estudando.</div>';
    }
    h += '<button class="btn danger" data-review="errors" style="margin-bottom:12px">Revisar os ' + errs.length + ' erros</button>' +
      '<div class="exp-row">' +
      '<button class="btn ghost" data-action="export-errors-print">' + icon("printer") + ' Exportar PDF</button>' +
      '<button class="btn ghost" data-action="export-errors-copy">' + icon("share") + ' Copiar texto</button>' +
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
        if (mm && mm.n && mm.dw === S.week.id) rows.push({ n: mm.n, a: mm.a || "🙂", ds: mm.ds | 0 });
      }
    } else {
      for (var fid in S.social.friends) {
        var f = S.social.friends[fid];
        if (f.dw === S.week.id) rows.push({ n: f.n, a: f.a, ds: f.ds | 0 });
      }
    }
    rows.sort(function (a, b) { return b.ds - a.ds; });
    var h = '<div class="page-title" style="font-size:1.05rem">⚔️ Duelo Blitz da semana</div>' +
      '<div class="card">' +
      '<p class="page-sub" style="margin:0 0 10px">As mesmas questões, na mesma ordem, para todo mundo — vale o melhor resultado até domingo.</p>' +
      '<button class="btn" data-action="start-duelo">' + icon("bolt") + (meu === null ? ' Jogar o duelo' : ' Tentar melhorar (meu melhor: ' + meu + ')') + '</button>';
    if (rows.length) {
      h += '<div style="margin-top:12px">';
      rows.forEach(function (r, i) {
        h += '<div class="friend-row' + (r.me ? ' me' : '') + '">' +
          '<span class="pos p' + i + '">' + (i + 1) + '</span>' +
          '<span class="fr-av">' + r.a + '</span>' +
          '<div class="fr-info"><div class="fr-n">' + esc(r.n) + (r.me ? ' (você)' : '') + '</div></div>' +
          '<div class="fr-x"><div class="fr-xp">' + r.ds + '</div><div class="fr-sub">acertos</div></div>' +
          '</div>';
      });
      h += '</div>';
    } else {
      h += '<div class="fr-sub" style="padding:8px 0 0">Ninguém jogou nesta semana ainda. Seja o(a) primeiro(a)! ⚡</div>';
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
        '<p class="page-sub" style="margin-top:10px">🔒 Sem cadastro e sem servidor: o placar funciona trocando códigos (ex.: no grupo do WhatsApp). Seu progresso continua salvo só no seu aparelho.</p>';
      return h;
    }

    h += '<div class="card">' +
      '<div class="friend-me"><span class="f-av">' + S.social.avatar + '</span>' +
      '<div style="flex:1;min-width:0">' +
      '<div class="f-name">' + esc(S.social.nome) + ' <button class="mini" data-action="edit-name" title="Editar nome">✏️</button></div>' +
      '<div class="f-meta">Esta semana: ' + S.week.xp + ' XP · ' + S.week.answered + ' questões · série ' + S.streak + '</div>' +
      '</div></div>' +
      '<div class="av-row">' + AVATARES.map(function (a) {
        return '<button class="av' + (a === S.social.avatar ? ' sel' : '') + '" data-avatar="' + a + '">' + a + '</button>';
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
        if (mm && mm.n) mrows.push({ n: mm.n, a: mm.a || "🙂", w: mm.w, x: mm.x | 0, q: mm.q | 0, s: mm.s | 0 });
      }
      var mAtuais = mrows.filter(function (r) { return r.w === S.week.id; }).sort(function (a, b) { return b.x - a.x; });
      var mVelhos = mrows.filter(function (r) { return r.w !== S.week.id; });
      var mins = gc.at ? Math.round((Date.now() - gc.at) / 60000) : null;
      h += '<div class="page-title" style="font-size:1.05rem">⚡ ' + esc(S.social.grupo.nome || "Grupo") + '</div>' +
        '<p class="page-sub">Placar em tempo real · ' +
        (mins === null ? 'ainda não sincronizado' : (mins < 1 ? 'atualizado agora' : 'atualizado há ' + mins + ' min')) + '</p>' +
        '<div class="card">';
      mAtuais.forEach(function (r, i) {
        h += '<div class="friend-row' + (r.me ? ' me' : '') + '">' +
          '<span class="pos p' + i + '">' + (i + 1) + '</span>' +
          '<span class="fr-av">' + r.a + '</span>' +
          '<div class="fr-info"><div class="fr-n">' + esc(r.n) + (r.me ? ' (você)' : '') + '</div>' +
          '<div class="fr-sub">' + r.q + ' questões · série ' + (r.s || 0) + '</div></div>' +
          '<div class="fr-x"><div class="fr-xp">' + r.x + '</div><div class="fr-sub">XP</div></div>' +
          '</div>';
      });
      mVelhos.forEach(function (r) {
        h += '<div class="friend-row stale">' +
          '<span class="pos">—</span><span class="fr-av">' + r.a + '</span>' +
          '<div class="fr-info"><div class="fr-n">' + esc(r.n) + '</div>' +
          '<div class="fr-sub">ainda sem pontos nesta semana</div></div>' +
          '<div class="fr-x"><div class="fr-xp">' + (r.x | 0) + '</div><div class="fr-sub">' + esc(r.w || '') + '</div></div>' +
          '</div>';
      });
      if (mrows.length === 1) {
        h += '<div class="fr-sub" style="padding:6px 0">Só você por aqui. Convide os amigos! 📣</div>';
      }
      h += '</div>' +
        '<button class="btn" data-action="share-group">' + icon("share") + ' Convidar para o grupo</button>' +
        '<button class="btn ghost" data-action="refresh-group" style="margin-top:10px">' + icon("refresh") + ' Atualizar agora</button>' +
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
      '<button class="btn" data-action="share-code">' + icon("share") + ' Compartilhar meu código</button>' +
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

    h += '<div class="page-title" style="font-size:1.05rem">Placar da semana</div><div class="card">';
    atuais.forEach(function (r, i) {
      h += '<div class="friend-row' + (r.me ? ' me' : '') + '">' +
        '<span class="pos p' + i + '">' + (i + 1) + '</span>' +
        '<span class="fr-av">' + r.a + '</span>' +
        '<div class="fr-info"><div class="fr-n">' + esc(r.n) + (r.me ? ' (você)' : '') + '</div>' +
        '<div class="fr-sub">' + r.q + ' questões · série ' + (r.s || 0) + '</div></div>' +
        '<div class="fr-x"><div class="fr-xp">' + r.x + '</div><div class="fr-sub">XP</div></div>' +
        (r.me ? '' : '<button class="unfr" data-unfriend="' + r.id + '" title="Remover do grupo">✕</button>') +
        '</div>';
    });
    velhos.forEach(function (r) {
      h += '<div class="friend-row stale">' +
        '<span class="pos">—</span><span class="fr-av">' + r.a + '</span>' +
        '<div class="fr-info"><div class="fr-n">' + esc(r.n) + '</div>' +
        '<div class="fr-sub">sem código desta semana — peça um novo</div></div>' +
        '<div class="fr-x"><div class="fr-xp">' + r.x + '</div><div class="fr-sub">' + esc(r.w || '') + '</div></div>' +
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

    // patentes por matéria
    var rksHtml = '';
    var matNames = Object.keys(S.xpByMateria);
    matNames.sort(function (a, b) { return (S.xpByMateria[b] || 0) - (S.xpByMateria[a] || 0); });
    matNames.forEach(function (m) {
      var xp = S.xpByMateria[m]; if (!xp) return;
      var rk = rankFor(xp);
      rksHtml += '<div class="rank-row">' + insignia(rk.idx) + '<div class="info">' +
        '<div class="top"><span>' + esc(m) + '</span><span class="rn">' + rk.cur.nome + '</span></div>' +
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
        '<span class="cq-ico">' + c.ico + '</span>' +
        '<span class="cq-n">' + c.nome + '</span>' +
        '<span class="cq-d">' + c.desc + (un ? ' · ' + new Date(un).toLocaleDateString("pt-BR") : '') + '</span>' +
        '</div>';
    });
    h += '</div>';

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

    // conta e backup na nuvem
    h += '<div class="page-title" style="font-size:1.1rem">Conta e backup</div>';
    if (!AUTH_KEY) {
      h += '<div class="card"><p class="page-sub" style="margin:0">☁️ Backup na nuvem ainda não configurado nesta instalação — veja "Ativar backup por e-mail" no LEIA-ME.</p></div>';
    } else if (contaAtiva()) {
      h += '<div class="card">' +
        '<div class="f-label">Conectado como</div>' +
        '<div class="acct-mail">' + esc(S.conta.email) + '</div>' +
        '<div class="acct-sync">' + (S.conta.syncAt ? '☁️ Último backup: ' + new Date(S.conta.syncAt).toLocaleString("pt-BR") : 'Ainda não sincronizado') + '</div>' +
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
      '<button class="btn ghost" data-action="toggle-sons" style="margin-top:10px">' + (S.sons === false ? '🔇 Sons e vibração: desligados' : '🔊 Sons e vibração: ligados') + '</button>' +
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
      kind: opts.kind, lessonId: opts.lessonId,
      lives: opts.kind === "blitz" ? BLITZ_LIVES : null,
      duelo: !!opts.duelo,
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
      '<button class="x" data-action="quit-quiz">✕</button>' +
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
      toast("Meta diária batida! +10 XP 📅");
    }
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
      S.xpByMateria[bm] = (S.xpByMateria[bm] || 0) + 5;
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
        ? '<div class="rankup" style="border-color:var(--blue)"><span class="ru-ico emj">⚔️</span><div>' +
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
        ? '<button class="btn danger" data-review="just-wrong" style="margin-bottom:12px">Revisar os ' + quiz.wrong.length + ' erros agora</button>'
        : '') +
      '<button class="btn" data-action="' + (quiz.duelo ? 'start-duelo' : 'start-blitz') + '" style="margin-bottom:12px">' + icon("bolt") + ' Jogar de novo</button>' +
      (quiz.duelo ? '<button class="btn ghost" data-action="go-amigos" style="margin-bottom:12px">⚔️ Ver placar do duelo</button>' : '') +
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
    // escolher/trocar prova (menu inicial e menu lateral)
    app.querySelectorAll("[data-prova]").forEach(function (b) {
      b.onclick = function () {
        var p = provaById(b.getAttribute("data-prova"));
        if (!p) return;
        if (!PROVA || PROVA.id !== p.id) { loadProva(p); S.prova = p.id; save(); }
        drawerOpen = false;
        view.name = "trilha";
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
      b.onclick = function () { S.social.avatar = b.getAttribute("data-avatar"); touch(); save(); render(); };
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
    else if (a === "open-menu") { drawerOpen = true; render(); }
    else if (a === "close-menu") closeDrawer();
    else if (a === "go-inicio") { drawerOpen = false; view.name = "inicio"; render(); }
    else if (a === "quit-quiz") {
      if (quiz && quiz.kind === "blitz") {
        if (confirm("Encerrar a rodada Blitz? Seu placar será registrado.")) finishSession();
      } else if (confirm("Sair da lição? O progresso desta rodada será perdido.")) { view.name = "trilha"; render(); }
    }
    else if (a === "home") { view.name = "trilha"; render(); }
    else if (a === "start-blitz") startSession(blitzPool(), { kind: "blitz" });
    else if (a === "start-duelo") startSession(blitzPool(seededRand(weekId() + "|" + PROVA.id)), { kind: "blitz", duelo: true });
    else if (a === "go-amigos") { view.name = "amigos"; syncAmigos(); render(); }
    else if (a === "start-treino") startSession(treinoDoDia().qs, { kind: "treino" });
    else if (a === "go-perfil") { view.name = "perfil"; render(); }
    else if (a === "save-meta") {
      var mdt = ((document.getElementById("meta-data") || {}).value || "").trim();
      var mdi = parseInt((document.getElementById("meta-diaria") || {}).value, 10) || 20;
      S.meta = { data: mdt || null, diaria: mdi };
      touch(); save(); render();
      toast(mdt ? "Meta salva! Contagem regressiva ligada 📅" : "Meta diária salva ✅");
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
      toast(cq.length ? "Conquista desbloqueada: " + cq[0].nome + " " + cq[0].ico : "Perfil criado! Agora compartilhe seu código 📣");
    }
    else if (a === "edit-name") {
      var novo = prompt("Seu nome no placar:", S.social.nome);
      if (novo && novo.trim()) { S.social.nome = novo.trim().slice(0, 18); touch(); save(); render(); }
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
        toast(d && d.email ? "E-mail de redefinição enviado 📬 Confira a caixa de entrada." : authErro(d));
      });
    }
    else if (a === "sync-now") {
      toast("Sincronizando…");
      cloudPush(function (ok, motivo) {
        render();
        if (ok) toast("Backup atualizado ☁️");
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
      toast(S.sons ? "Sons e vibração ligados 🔊" : "Sons e vibração desligados 🔇");
    }
    else if (a === "toggle-theme") toggleTheme();
    else if (a === "reset") {
      var avisoNuvem = contaAtiva() ? " O backup na nuvem também será zerado." : "";
      if (confirm("Isso apaga todo o seu progresso." + avisoNuvem + " Continuar? (Seu grupo de amigos e sua conta são mantidos.)")) {
        var soc = S.social, pv = S.prova, ct = S.conta;
        S = defaultState(); S.social = soc; S.prova = pv; S.conta = ct;
        touch(); applyTheme(); save(); cloudPush();
        view.name = "trilha"; render(); toast("Progresso zerado.");
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
  // prova já escolhida: abre direto na trilha; senão, mostra o menu inicial
  var provaSalva = provaById(S.prova);
  if (provaSalva) { loadProva(provaSalva); view.name = "trilha"; }
  if (grupoAtivo()) syncAmigos();
  // conquistas retroativas (ex.: quem já tinha 100 respostas antes desta versão)
  var retro = checkConquistas();
  render();
  if (retro.length) {
    toast(retro.length === 1
      ? "Conquista desbloqueada: " + retro[0].nome + " " + retro[0].ico
      : retro.length + " conquistas desbloqueadas — veja no Perfil 🏅");
  }

  // conta na nuvem: adota o backup se ele for mais novo que este aparelho
  if (contaAtiva()) {
    cloudPull(function (nuvem) {
      if (nuvem && (nuvem.at || 0) > (S.mudadoEm || 0)) {
        adotarNuvem(nuvem);
        render();
        toast("Progresso sincronizado da nuvem ☁️");
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
