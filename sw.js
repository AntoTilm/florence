/* Hors ligne : garde une copie du site dans le téléphone.
   Changer VERSION à chaque publication pour forcer la mise à jour. */
const VERSION = "florence-v1";
const FICHIERS = ["./", "index.html", "app.js", "donnees.js", "icone.svg", "manifest.webmanifest"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((cles) => Promise.all(cles.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
/* Réseau d'abord (pour avoir les mises à jour), copie locale si pas de connexion. */
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then((rep) => {
      const copie = rep.clone();
      caches.open(VERSION).then((c) => c.put(e.request, copie)).catch(() => {});
      return rep;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then((r) => r || caches.match("index.html")))
  );
});
