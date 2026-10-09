/* Hors ligne : garde une copie du site dans le téléphone.
   Changer VERSION à chaque publication pour forcer la mise à jour. */
const VERSION = "florence-v11";
const PHOTOS = "florence-photos"; /* photos Wikimedia, gardées d'une version à l'autre */
const FICHIERS = ["./", "index.html", "app.js", "donnees.js", "lexique.js", "icone.svg", "manifest.webmanifest"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((cles) => Promise.all(cles.filter((k) => k !== VERSION && k !== PHOTOS).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  /* Photos : d'abord la copie locale, sinon le réseau (et on garde la copie). */
  if (url.hostname.endsWith("wikimedia.org")) {
    e.respondWith(caches.open(PHOTOS).then((c) => c.match(req.url).then((hit) => hit || fetch(req).then((r) => {
      if (r && (r.ok || r.type === "opaque")) c.put(req.url, r.clone()).catch(() => {});
      return r;
    }))));
    return;
  }

  /* Le site : réseau d'abord pour avoir les mises à jour, mais si le réseau traîne
     plus de 3 secondes (4G faible), on affiche la copie locale. */
  if (url.origin === self.location.origin) {
    e.respondWith(new Promise((resolve) => {
      let fini = false;
      const repondre = (r) => { if (!fini && r) { fini = true; resolve(r); } };
      const minuteur = setTimeout(() => { caches.match(req, { ignoreSearch: true }).then(repondre); }, 3000);
      fetch(req).then((r) => {
        clearTimeout(minuteur);
        if (r && r.ok) { const copie = r.clone(); caches.open(VERSION).then((c) => c.put(req, copie)).catch(() => {}); }
        if (fini) return;
        fini = true; resolve(r);
      }).catch(() => {
        clearTimeout(minuteur);
        caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match("index.html")).then((r) => {
          if (!fini) { fini = true; resolve(r || new Response("Hors ligne", { status: 503 })); }
        });
      });
    }));
    return;
  }

  /* Le reste (polices Google) : copie locale si elle existe, mise à jour en arrière-plan. */
  e.respondWith(caches.open(VERSION).then((c) => c.match(req).then((hit) => {
    const reseau = fetch(req).then((r) => { if (r && (r.ok || r.type === "opaque")) c.put(req, r.clone()).catch(() => {}); return r; }).catch(() => hit);
    return hit || reseau;
  })));
});
