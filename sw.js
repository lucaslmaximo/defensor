/* Service worker — offline com atualização de conteúdo.
   Estratégia: network-first (busca a versão nova quando online;
   usa o cache apenas como fallback offline). Assim, novas questões
   aparecem sem precisar limpar cache. */
var CACHE = "dperj-v4";
var ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./data.js",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    // "no-cache": revalida com o servidor (ETag) em vez de confiar no cache HTTP
    fetch(e.request, { cache: "no-cache" }).then(function (res) {
      // atualiza o cache com a versão fresca
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { try { c.put(e.request, copy); } catch (err) {} });
      return res;
    }).catch(function () {
      // offline: usa o cache
      return caches.match(e.request).then(function (hit) {
        return hit || caches.match("./index.html");
      });
    })
  );
});
