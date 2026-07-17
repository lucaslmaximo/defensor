/* ============================================================
   App de Estudo DPE-RJ — lógica (vanilla JS, sem build)
   ============================================================ */
(function () {
  "use strict";

  var DATA = window.APP_DATA;
  var DAY = 86400000;
  var KEY = "dperj_state_v1";
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
      byMateria: {}, xpByMateria: {}, theme: null
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
    h += '<button class="btn danger" data-review="errors" style="margin-bottom:16px">Revisar os ' + errs.length + ' erros</button>';
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

    h += '<button class="btn ghost" data-action="toggle-theme" style="margin-top:8px">🌓 Alternar tema</button>' +
      '<button class="btn ghost" data-action="reset" style="margin-top:10px;color:var(--no)">Zerar progresso</button>' +
      '<p class="page-sub" style="margin-top:18px;text-align:center">Conteúdo gerado para estudo. Confira sempre a fonte legal citada.</p>';
    return h;
  };
  function tile(v, l) { return '<div class="stat-tile"><div class="v">' + v + '</div><div class="l">' + l + '</div></div>'; }

  /* ================= QUIZ ================= */
  function startSession(questions, opts) {
    if (!questions.length) { toast("Nada para praticar aqui."); return; }
    quiz = {
      qs: questions.slice(),
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
    S.answered += 1;
    var mat = q._materia;
    if (!(mat in quiz.rankBefore)) quiz.rankBefore[mat] = rankFor(materiaXp(mat)).idx;
    if (ok) {
      S.correctTotal += 1; quiz.correct += 1; quiz.xpGained += 10; S.xp += 10;
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
      S.xp += 5; quiz.xpGained += 5; // bônus de conclusão
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
      b.onclick = function () { view.name = b.getAttribute("data-nav"); render(); };
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
  }

  function action(a) {
    if (a === "check") checkAnswer();
    else if (a === "next") nextQuestion();
    else if (a === "quit-quiz") { if (confirm("Sair da lição? O progresso desta rodada será perdido.")) { view.name = "trilha"; render(); } }
    else if (a === "home") { view.name = "trilha"; render(); }
    else if (a === "toggle-theme") toggleTheme();
    else if (a === "reset") { if (confirm("Isso apaga todo o seu progresso. Continuar?")) { S = defaultState(); applyTheme(); save(); view.name = "trilha"; render(); toast("Progresso zerado."); } }
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
  render();

  /* relógio das vidas: repõe e atualiza o contador sem recarregar a tela */
  setInterval(function () {
    if (applyHeartRegen()) { render(); return; }
    if (S.hearts < HEART_MAX) {
      var t = heartTimerText();
      document.querySelectorAll("[data-regen]").forEach(function (el) { el.textContent = "+1 em " + t; });
    }
  }, 30000);

  /* ---------- service worker (só em http/https) ---------- */
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }
})();
