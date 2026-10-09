/* Rendu du site à partir de donnees.js — normalement rien à changer ici. */
(function () {
  "use strict";
  const F = window.FLO;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const enc = encodeURIComponent;
  const maps = (q) => "https://www.google.com/maps/search/?api=1&query=" + enc(q);
  const aPied = (q) => "https://www.google.com/maps/dir/?api=1&destination=" + enc(q) + "&travelmode=walking";
  const parcoursMaps = (c) => "https://www.google.com/maps/dir/?api=1&origin=" + enc(c.depart) + "&destination=" + enc(c.arrivee) +
    (c.etapes && c.etapes.length ? "&waypoints=" + c.etapes.slice(0, 3).map(enc).join("%7C") : "") + "&travelmode=walking";
  const LIBELLES = { calme: "calme", incontournable: "incontournable", pluie: "☔ si pluie", "pas-cher": "pas cher", "plus-cher": "plus cher", medicis: "Médicis", art: "art", vin: "vin", vue: "vue" };
  const GAMME = { 0: "🍦", 1: "€", 2: "€€", 3: "€€€" };
  const TYPES = { transport: "🚋", balade: "🚶", visite: "🏛", repas: "🍽", apero: "🍷", pause: "☕" };
  /* Étape principale (visite, repas, apéro, trajet, lieu à visiter) ou simple « en route » (balade, pause). */
  const estPrincipale = (e) => e.principal ?? (["visite", "repas", "apero", "transport"].includes(e.type) || (e.type === "balade" && !!e.lieu));
  const MOMENTS = [[11 * 60 + 30, "Matin"], [13 * 60 + 30, "Midi"], [18 * 60 + 30, "Après-midi"], [99 * 60, "Soir"]];
  const moment = (h) => { const m = minutes(h); return m === null ? null : MOMENTS.find((x) => m < x[0])[1]; };
  const restoParId = Object.fromEntries(F.restos.map((r) => [r.id, r]));

  /* « À ne pas manquer » des visites de musées : rangé dans le guide de visite du lieu
     (œuvre repérée par sa photo, sinon par un nom propre ou une année commune ; le reste va dans « Avant d'entrer et autour »). */
  const INCONT = {};
  (function () {
    const norm = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/<[^>]+>/g, "");
    const cles = (t) => new Set((norm(t).match(/\b(\d{4}|[A-Z][\w-]{3,})\b/g) || []).filter((w) => !["Les", "Sur", "Dans", "Pour", "Avec"].includes(w)));
    F.jours.forEach((j) => j.etapes.forEach((e) => {
      const L = e.lieu && F.lieux[e.lieu];
      if (!L || !L.guide || e.type !== "visite") return;
      const I = INCONT[e.lieu] || (INCONT[e.lieu] = { oeuvres: new Set(), salles: new Set(), extras: [], noms: [] });
      (e.regarder || []).filter((r) => !r.chemin).forEach((r) => {
        let hit = null;
        L.guide.etapes.forEach((s, si) => s.oeuvres.forEach((o, oi) => { if (!hit && r.img && o.img === r.img) hit = [si, oi]; }));
        if (!hit) { const k = cles(r.titre); L.guide.etapes.forEach((s, si) => s.oeuvres.forEach((o, oi) => { if (hit) return; const k2 = cles(o.nom + " " + s.titre); for (const w of k) if (k2.has(w)) { hit = [si, oi]; return; } })); }
        if (hit) { const cle = hit.join(":"); if (!I.oeuvres.has(cle)) { I.oeuvres.add(cle); I.salles.add(hit[0]); I.noms.push({ si: hit[0], nom: L.guide.etapes[hit[0]].oeuvres[hit[1]].nom }); } }
        else if (!I.extras.some((x) => x.titre === r.titre)) I.extras.push(r);
      });
    }));
  })();
  const BTN_TOUT = '<button class="bouton btn-tout" aria-pressed="false">↕ Tout déplier</button>';

  /* ---------------- Lexique (lexique.js) : mots cliquables dans les textes ---------------- */
  const LEX = F.lexique || {};
  const motsLex = [];
  Object.entries(LEX).forEach(([k, d]) => (d.mots || []).forEach((m) => motsLex.push([m, k])));
  motsLex.sort((a, b) => b[0].length - a[0].length);
  const cleDuMot = Object.fromEntries(motsLex.slice().reverse());
  const reLex = motsLex.length ? new RegExp("(^|[^\\p{L}\\p{N}])(" + motsLex.map((m) => m[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")(?![\\p{L}\\p{N}])", "gu") : null;
  const LEX_EXCLU = "a,button,h1,h2,h3,h4,h5,summary,label,dt,.etiquette,.heure,.terme,.salle-nom,.auteur,input,textarea";
  const LEX_BLOCS = "p,li,dd,.via";
  const LEX_PORTEE = ".etape,.salle,.option,.plat,.resa,.resto,#feuille-corps,#bulle-corps,.page";
  /* Première apparition de chaque mot, par carte : soulignée en pointillé, ouvre la bulle. */
  function lierMots(racine, sauf) {
    if (!reLex || !racine) return;
    const vus = new Map();
    const walker = document.createTreeWalker(racine, NodeFilter.SHOW_TEXT);
    const noeuds = [];
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      const p = n.parentElement;
      if (!p || p.closest(LEX_EXCLU) || !p.closest(LEX_BLOCS)) continue;
      reLex.lastIndex = 0;
      if (reLex.test(n.nodeValue)) noeuds.push(n);
    }
    noeuds.forEach((n) => {
      const portee = n.parentElement.closest(LEX_PORTEE) || racine;
      if (!vus.has(portee)) vus.set(portee, new Set(sauf ? [sauf] : []));
      const deja = vus.get(portee);
      const txt = n.nodeValue;
      const frag = document.createDocumentFragment();
      let pos = 0, change = false;
      reLex.lastIndex = 0;
      for (const m of txt.matchAll(reLex)) {
        const cle = cleDuMot[m[2]];
        if (!cle || deja.has(cle)) continue;
        deja.add(cle);
        const debut = m.index + m[1].length;
        frag.append(txt.slice(pos, debut));
        const b = document.createElement("button");
        b.type = "button"; b.className = "terme"; b.dataset.terme = cle; b.textContent = m[2];
        frag.append(b);
        pos = debut + m[2].length; change = true;
      }
      if (!change) return;
      frag.append(txt.slice(pos));
      n.replaceWith(frag);
    });
  }

  /* Petite mémoire locale (check-list, mode pluie). Facultative : le site marche sans. */
  const memo = {
    lire(k, d) { try { const v = localStorage.getItem("flo:" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    ecrire(k, v) { try { localStorage.setItem("flo:" + k, JSON.stringify(v)); } catch (e) { /* rien */ } }
  };

  /* Photos (Wikimedia Commons). Un clic ouvre la page du fichier (auteur, licence, grande taille). */
  function photo(cle, alt, cls) {
    const p = F.photos[cle]; if (!p) return "";
    return `<a class="photo ${cls || ""}" href="https://commons.wikimedia.org/wiki/File:${enc(p.f)}" target="_blank" rel="noopener"><img loading="lazy" decoding="async" src="${p.u}" alt="${esc(alt || "")}" onerror="this.parentNode.classList.add('ko')"></a>`;
  }

  /* ---------------- Dates et « maintenant » ---------------- */
  const today = new Date();
  const iso = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
  const jourCourant = F.jours.find((j) => j.date === iso);
  const minutes = (h) => { const m = String(h || "").match(/(\d{1,2})h(\d{2})?/); return m ? (+m[1]) * 60 + (+(m[2] || 0)) : null; };
  function etapeCourante(j) {
    if (!j || j !== jourCourant) return -1;
    const now = today.getHours() * 60 + today.getMinutes();
    let idx = -1;
    j.etapes.forEach((e, i) => { const m = minutes(e.heure); if (m !== null && m <= now) idx = i; });
    return idx;
  }

  /* ---------------- Onglets ---------------- */
  const ONGLETS = [{ id: "accueil", nom: "Accueil" }]
    .concat(F.jours.map((j) => ({ id: j.id, nom: j.court, auj: j === jourCourant })))
    .concat([{ id: "lieux", nom: "Lieux & guides" }, { id: "manger", nom: "Manger & boire" }]);
  $("#onglets").innerHTML = ONGLETS.map((o) => `<a href="#${o.id}" data-id="${o.id}" class="${o.auj ? "aujourdhui" : ""}">${esc(o.nom)}${o.auj ? " · auj." : ""}</a>`).join("");

  /* ---------------- Pages ---------------- */
  const THEMES = [...new Set(Object.values(F.lieux).map((l) => l.theme))];
  $("#contenu").innerHTML = [pageAccueil(), ...F.jours.map(pageJour), pageLieux(), pageManger()].join("");
  lierMots($("#contenu"));
  $("#pied").innerHTML = `Infos vérifiées le ${esc(F.maj)} · à re-vérifier la veille · photos Wikimedia Commons · <a href="#accueil">haut</a>`;

  function etiquettes(tags, reco) {
    return `<div class="etiquettes">${reco ? '<span class="etiquette reco">★ mon conseil</span>' : ""}${(tags || []).map((t) => `<span class="etiquette ${t}">${esc(LIBELLES[t] || t)}</span>`).join("")}</div>`;
  }
  function btnLieu(id, texte) { return F.lieux[id] ? `<button class="lien-fiche ${F.lieux[id].guide ? "guide" : ""}" data-lieu="${id}">${esc(texte || (F.lieux[id].guide ? "Guide de visite" : F.lieux[id].nom))}</button>` : ""; }
  function btnResto(id, texte) { return restoParId[id] ? `<button class="lien-fiche resto" data-resto="${id}">${esc(texte || restoParId[id].nom)}</button>` : ""; }
  /* Bloc repliable (fermé par défaut) : titre toujours visible, contenu au clic. */
  function repli(titre, contenu, info, cls) {
    return `<details class="bloc-repli ${cls || ""}"><summary><span>${titre}</span>${info ? `<small>${info}</small>` : ""}</summary>${contenu}</details>`;
  }
  function tel(t) { return t ? `<a class="bouton" href="tel:${t.replace(/\s/g, "")}">📞 Appeler</a>` : ""; }

  function pageAccueil() {
    const v = F.voyage;
    let bandeau = "";
    if (jourCourant) {
      const i = etapeCourante(jourCourant);
      const e = jourCourant.etapes[Math.max(i, 0)];
      bandeau = `<a class="maintenant-carte" href="#${jourCourant.id}"><span class="pastille">● En ce moment</span><b>${esc(e.heure)} — ${esc(e.titre)}</b><small>Ouvrir le programme du jour →</small></a>`;
    } else {
      const d0 = new Date(F.jours[0].date + "T00:00:00"), dj = new Date(iso + "T00:00:00");
      const n = Math.round((d0 - dj) / 86400000);
      if (n > 0) bandeau = `<div class="maintenant-carte calme"><span class="pastille">J–${n}</span><b>Départ ${n === 1 ? "demain" : "dans " + n + " jours"}</b><small>Pensez à la check-list de la veille, plus bas.</small></div>`;
    }
    const resas = F.reservations.map((r) => {
      const st = { ok: "✅ Réservé", todo: "🟡 À réserver", info: "ℹ️ À savoir" }[r.statut];
      return `<div class="resa ${r.statut}"><div class="statut">${st}</div><h3>${esc(r.titre)}</h3><div class="quand">${esc(r.quand)}</div><p>${esc(r.detail)}</p>
        <div class="actions">${tel(r.tel)}${r.lien ? `<a class="bouton" href="${r.lien}" target="_blank" rel="noopener">🎟 ${esc(r.lienTexte || "Réserver")}</a>` : ""}${r.lieu ? btnLieu(r.lieu, "Fiche du lieu") : ""}${r.resto ? btnResto(r.resto, "Fiche du restaurant") : ""}</div></div>`;
    }).join("");
    const coche = memo.lire("check", {});
    const check = F.checklist.map((c, i) => `<label class="check"><input type="checkbox" data-check="${i}" ${coche[i] ? "checked" : ""}><span>${esc(c)}</span></label>`).join("");
    const b = F.budget;
    const credits = Object.entries(F.photos).map(([k, p]) => `<li><a href="https://commons.wikimedia.org/wiki/File:${enc(p.f)}" target="_blank" rel="noopener">${esc(p.f.replace(/_/g, " "))}</a></li>`).join("");
    return `<section class="page" id="p-accueil">
      <p class="surtitre">${esc(v.voyageurs)}</p>
      <h1>Quatre jours à Florence</h1>
      ${bandeau}
      <div class="outils">${BTN_TOUT}</div>
      <details class="bloc-repli intro-repli"><summary><span>ℹ️ Comment utiliser ce site</span></summary><p class="intro">Chaque jour est un <b>parcours à pied</b>, étape par étape : ce qu'il y a à voir en chemin (🚶), les détails à repérer et leurs histoires (👀), un guide salle par salle pour chaque musée (🎧), et pour chaque repas trois choix simples par gamme de prix (€ · €€ · €€€). « Itinéraire à pied » ouvre Google Maps depuis l'endroit où vous êtes. Tout est replié : touchez un titre pour le déplier, ou « Tout déplier » en haut de chaque page. Les mots soulignés en pointillé ouvrent une explication.</p></details>
      <details class="bloc repli"><summary><h2>🧳 Le voyage</h2><small>vols, logement, tram</small></summary>
        <div class="info"><span class="ic">🛫</span><div>${esc(v.aller)}<small>Tram T2 jusqu'à Unità (~20 min), puis 15 min à pied</small></div></div>
        <div class="info"><span class="ic">🏠</span><div><a href="${maps(v.logement.adresse)}" target="_blank" rel="noopener">${esc(v.logement.adresse)}</a><small>${esc(v.logement.note)}</small></div></div>
        <div class="info"><span class="ic">🚋</span><div>Le tram, pas de taxi<small>${esc(v.tram)}</small></div></div>
        <div class="info"><span class="ic">🛬</span><div>${esc(v.retour)}<small>Tram T2 depuis Unità, aéroport vers 16h</small></div></div>
        <div class="info"><span class="ic">🌤</span><div><a href="${v.meteo}" target="_blank" rel="noopener">Météo de Florence (3bmeteo)</a><small>${esc(v.soleil)} · Lundi : musées d'État fermés</small></div></div>
      </details>
      <details class="bloc repli"><summary><h2>🎟 Réservations</h2><small>${F.reservations.filter((r) => r.statut === "ok").length} faites · ${F.reservations.filter((r) => r.statut === "todo").length} à faire</small></summary>${resas}</details>
      <details class="bloc repli"><summary><h2>📅 Les jours en un coup d'œil</h2><small>${F.jours.length} jours</small></summary>
        ${F.jours.map((j) => `<a class="jour-lien" href="#${j.id}"><b>${esc(j.court)}</b><span>${esc(j.titre)}</span><small>${j.etapes.filter(estPrincipale).length} temps forts</small></a>`).join("")}
      </details>
      <details class="bloc repli"><summary><h2>✅ Check-list de la veille</h2><small>${F.checklist.length} points</small></summary><div class="checks">${check}</div></details>
      <details class="bloc repli"><summary><h2>📥 Hors ligne</h2><small>photos à télécharger</small></summary>
        <p class="petit">Le site reste consultable sans réseau une fois ouvert. Pour avoir aussi les ${Object.keys(F.photos).length} photos hors ligne, téléchargez-les une fois, en Wi-Fi (≈ 10 Mo).</p>
        <button class="bouton" id="btn-photos">📥 Télécharger les photos</button> <span class="petit" id="statut-photos">${memo.lire("photosOK", null) ? "Déjà fait une fois sur ce téléphone." : ""}</span>
      </details>
      <details class="bloc repli"><summary><h2>💶 Budget estimé</h2></summary>
        <table class="budget">${b.lignes.map((l) => `<tr><td>${esc(l[0])}</td><td>${esc(l[1])}</td></tr>`).join("")}</table>
        <p class="total">${esc(b.total)}</p>
        <ul class="puces">${b.conseils.map((c) => `<li>${c}</li>`).join("")}</ul>
      </details>
      <details class="bloc repli credits"><summary><h2>📷 Crédits photos</h2><small>Wikimedia Commons</small></summary><p class="petit">Chaque photo renvoie à sa page sur Wikimedia Commons, avec son auteur et sa licence.</p><ul>${credits}</ul></details>
    </section>`;
  }

  function carteAutre(o) {
    const fiches = (o.lieux || []).map((id) => btnLieu(id, F.lieux[id] && F.lieux[id].nom)).join("") + (o.restos || []).map((id) => btnResto(id)).join("");
    const pluie = (o.tags || []).includes("pluie");
    return `<article class="option ${pluie ? "pluie-ok" : ""}">${etiquettes(o.tags, o.reco)}<h3>${esc(o.titre)}</h3><p>${o.texte}</p>${fiches ? `<div class="actions">${fiches}</div>` : ""}</article>`;
  }
  function blocAutres(liste, titre) {
    if (!liste || !liste.length) return "";
    const pluie = liste.some((o) => (o.tags || []).includes("pluie"));
    return `<details class="autres ${pluie ? "a-pluie" : ""}"><summary>${esc(titre || "Autres options")} (${liste.length})${pluie ? " · ☔" : ""}</summary><div class="options">${liste.map(carteAutre).join("")}</div></details>`;
  }
  function carteRegarder(r) {
    return `<li class="regard ${r.img ? "avec-photo" : ""}">${r.img ? photo(r.img, r.titre, "vignette") : ""}<div><b>${esc(r.titre)}</b><p>${r.texte}</p></div></li>`;
  }
  function choixRepas(c) {
    const r = restoParId[c.resto]; if (!r) return "";
    return `<article class="choix ${c.reco ? "reco" : ""}">
      <div class="choix-haut"><span class="gamme g${r.gamme}">${GAMME[r.gamme]}</span>${c.reco ? '<span class="etiquette reco">★ mon conseil</span>' : ""}${r.prio ? '<span class="etiquette prio">votre trouvaille</span>' : ""}</div>
      <h3>${esc(r.nom)}</h3><div class="ligne">${esc(r.type)} · ${esc(r.prix)} · ${esc(r.zone)}</div>
      <p>${c.texte}</p>
      <div class="actions">${btnResto(r.id, "Fiche & que commander")}<a class="bouton petit-btn" href="${aPied(r.nom + ", " + r.adresse + ", Firenze")}" target="_blank" rel="noopener">🚶 Y aller</a>${tel(r.tel)}</div>
    </article>`;
  }

  function pageJour(j) {
    const ici = etapeCourante(j);
    let momentPrec = null;
    const etapes = j.etapes.map((e, i) => {
      const princ = estPrincipale(e);
      const mo = moment(e.heure);
      const enTete = mo && mo !== momentPrec ? `<div class="moment">${esc(mo)}</div>` : "";
      if (mo) momentPrec = mo;
      const a = e.aller;
      const allerHtml = a ? `<div class="aller"><div class="aller-haut"><span>🚶 <b>${esc(a.duree)}</b></span><a class="bouton petit-btn" href="${aPied(a.vers)}" target="_blank" rel="noopener">Itinéraire à pied</a></div><div class="via">${esc(a.via)}</div></div>` : "";
      const L = e.lieu && F.lieux[e.lieu];
      const carteGuide = L ? (L.guide
        ? `<button class="carte-guide" data-lieu="${e.lieu}"><span class="cg-ic">🎧</span><span><b>Guide de visite</b><small>${L.guide.etapes.length} étapes salle par salle · ${esc(L.guide.duree)}${INCONT[e.lieu] && INCONT[e.lieu].noms.length ? " · ⭐ " + INCONT[e.lieu].noms.length + " à ne pas manquer" : ""}</small></span><span class="cg-fl">›</span></button>`
        : `<button class="carte-guide fiche" data-lieu="${e.lieu}"><span class="cg-ic">📖</span><span><b>Fiche du lieu</b><small>Histoires, horaires, prix, liens</small></span><span class="cg-fl">›</span></button>`) : "";
      const boutons = e.resto && !e.repas ? btnResto(e.resto) : "";
      const tousChemin = e.type === "balade" || e.type === "pause";
      const rChemin = (e.regarder || []).filter((r) => tousChemin || r.chemin);
      const rPlace = L && L.guide && e.type === "visite" ? [] : (e.regarder || []).filter((r) => !(tousChemin || r.chemin));
      const listeChemin = rChemin.length ? `<ul class="regards">${rChemin.map(carteRegarder).join("")}</ul>` : "";
      const listePlace = rPlace.length ? `<ul class="regards">${rPlace.map(carteRegarder).join("")}</ul>` : "";
      const regarder = (listeChemin ? `<div class="sous-titre">🚶 En chemin</div>${listeChemin}` : "") + (listePlace ? `<div class="sous-titre">📍 Sur place</div>${listePlace}` : "");
      const detours = e.detours && e.detours.length ? `<div class="sous-titre">↪ Petits détours</div><ul class="detours">${e.detours.map((d) => `<li><b>${esc(d.titre)}</b> <span class="duree">${esc(d.duree || "")}</span><p>${d.texte}</p>${d.lieu ? `<div class="actions">${btnLieu(d.lieu, F.lieux[d.lieu] && F.lieux[d.lieu].nom)}</div>` : ""}</li>`).join("")}</ul>` : "";
      const repas = e.repas && e.repas.length ? `<div class="repas">${e.repas.map(choixRepas).join("")}</div>` : "";
      const nVoir = (e.regarder || []).length + (e.detours || []).length;
      const nChemin = rChemin.length + (e.detours || []).length;
      if (!princ) {
        const resume = `<button class="route-resume" aria-expanded="false"><span>🚶 ${esc(e.heure)} · ${esc(e.titre)}</span><small data-ferme="${esc((nVoir ? nVoir + " à voir en chemin" : "en chemin") + (a ? " · " + a.duree : "") + " ▸")}">${nVoir ? nVoir + " à voir en chemin" : "en chemin"}${a ? " · " + esc(a.duree) : ""} ▸</small></button>`;
        return `${enTete}<div class="etape route type-${e.type || "balade"} ${i === ici ? "maintenant" : ""}" id="${j.id}-${i}">${resume}<div class="route-corps">
        ${allerHtml}
        <div class="heure">${TYPES[e.type] || "•"} ${esc(e.heure)}${i === ici ? ' <span class="pastille">● maintenant</span>' : ""}</div>
        <h2>${esc(e.titre)}</h2>
        ${carteGuide}
        <p class="texte">${e.texte || ""}</p>
        ${boutons ? `<div class="actions">${boutons}</div>` : ""}
        ${repas}${regarder}${detours}
        ${blocAutres(e.autres, "Autres options pour ce créneau")}
      </div></div>`;
      }
      const chemin = (allerHtml || listeChemin || detours ? `<details class="bloc-repli chemin"><summary><span>🚶 Pour y aller</span><small>${a ? esc(a.duree) : ""}${nChemin ? (a ? " · " : "") + nChemin + " à voir en chemin" : ""}</small></summary>${allerHtml}${listeChemin}${detours}</details>` : "")
        + (listePlace ? `<details class="bloc-repli place"><summary><span>${L && /musée/i.test(L.theme) && e.type === "visite" ? "🏛 Dans le musée" : "📍 Sur place"} : à ne pas manquer</span><small>${rPlace.length}</small></summary>${listePlace}</details>` : "");
      const nomLieu = L && e.type === "visite" ? L.nom.replace(/\s+—.*$/, "") : null;
      const titreHtml = nomLieu ? `<h2>${esc(nomLieu)}</h2><div class="a-voir">🎯 ${esc(e.titre)}</div>` : `<h2>${esc(e.titre)}</h2>`;
      const infos = [L ? (L.guide ? "🎧 guide" : "📖 fiche") : "", e.repas && e.repas.length ? "🍽 " + e.repas.length + " choix" : "", a ? "🚶 " + a.duree : "", (nChemin + rPlace.length) ? "👀 " + (nChemin + rPlace.length) + " à voir" : "", e.autres && e.autres.length ? e.autres.length + " option" + (e.autres.length > 1 ? "s" : "") : ""].filter(Boolean).join(" · ");
      return `${enTete}<div class="etape principale type-${e.type || "balade"} ${e.resa ? "reserve" : ""} ${i === ici ? "maintenant" : ""}" id="${j.id}-${i}">
        <div class="heure">${TYPES[e.type] || "•"} ${esc(e.heure)}${i === ici ? ' <span class="pastille">● maintenant</span>' : ""}</div>
        ${titreHtml}
        ${e.resa ? `<div class="resa-bandeau ${e.resaTodo ? "todo" : ""}">${e.resaTodo ? "🟡" : "✅"} ${esc(e.resa)}</div>` : ""}
        <button class="etape-ouvrir" aria-expanded="false"><span class="eo-fl">▸ Déplier</span>${infos ? `<small>${infos}</small>` : ""}</button>
        <div class="etape-corps">
        ${carteGuide}
        <p class="texte">${e.texte || ""}</p>
        ${boutons ? `<div class="actions">${boutons}</div>` : ""}
        ${repas}${chemin}
        ${blocAutres(e.autres, "Autres options pour ce créneau")}
        </div>
      </div>`;
    }).join("");
    const d = new Date(j.date + "T12:00:00");
    const dateLongue = d.toLocaleDateString("fr-BE", { weekday: "long", day: "numeric", month: "long" });
    return `<section class="page" id="p-${j.id}">
      <p class="surtitre">${esc(dateLongue)}</p><h1>${esc(j.titre)}</h1><details class="bloc-repli intro-repli"><summary><span>📝 Le résumé de la journée</span></summary><p class="intro">${esc(j.intro)}</p></details>
      <div class="outils">${j.carte ? `<a class="bouton" href="${parcoursMaps(j.carte)}" target="_blank" rel="noopener">🗺 Le parcours sur Maps</a>` : ""}${BTN_TOUT}<button class="bouton btn-pluie" aria-pressed="false">☔ Mode pluie</button></div>
      <div class="parcours">${etapes}</div>
      ${j.autres ? repli("🔀 Autres programmes possibles", j.autres.map(carteAutre).join(""), j.autres.length + " plans", "plans-b") : ""}
      ${ici >= 0 ? `<a class="aller-maintenant" href="#${j.id}-${ici}" data-saut="${j.id}-${ici}">● Maintenant</a>` : ""}
    </section>`;
  }

  function pageLieux() {
    return `<section class="page" id="p-lieux"><p class="surtitre">${Object.keys(F.lieux).length} fiches · ${Object.values(F.lieux).filter((l) => l.guide).length} guides de visite</p><h1>Lieux & guides</h1>
      <p class="intro">Pourquoi y aller, les histoires, ce qu'il faut regarder, et pour les musées un guide salle par salle avec les photos des pièces maîtresses (🎧). Partout sur le site, les mots <span class="terme-demo">soulignés en pointillé</span> s'ouvrent d'un tap : qui, quoi, l'histoire, et un lien pour en savoir plus.</p>
      <div class="outils">${BTN_TOUT}</div>
      <input class="recherche" type="search" id="recherche-lieux" placeholder="Chercher un lieu, un nom (Médicis, Galilée, Botticelli…)" aria-label="Chercher">
      <div class="filtres" id="filtres-lieux"><button aria-pressed="true" data-theme="">Tous</button><button aria-pressed="false" data-theme="guide">🎧 Avec guide</button>${THEMES.map((t) => `<button aria-pressed="false" data-theme="${esc(t)}">${esc(t)}</button>`).join("")}</div>
      <div class="liste" id="liste-lieux">${Object.entries(F.lieux).map(([id, l]) => {
        const texte = [l.nom, l.resume, l.pourquoi].concat(l.histoires || []).concat(l.guide ? l.guide.etapes.flatMap((s) => s.oeuvres.map((o) => o.nom + " " + (o.auteur || ""))) : []).join(" ").toLowerCase().replace(/<[^>]+>/g, "");
        return `<button class="item ${l.img ? "avec-photo" : ""}" data-lieu="${id}" data-theme="${esc(l.theme)}" data-guide="${l.guide ? 1 : 0}" data-texte="${esc(texte)}">${l.img && F.photos[l.img] ? `<img loading="lazy" src="${F.photos[l.img].u}" alt="" onerror="this.remove()">` : ""}<div><div class="meta">${esc(l.theme)} · ${esc(l.zone)}${l.guide ? " · 🎧 guide" : ""}</div><h3>${esc(l.nom)}</h3><p>${esc(l.resume)}</p></div></button>`;
      }).join("")}</div>
      ${Object.keys(LEX).length ? `<details class="bloc-repli lexique"><summary><span>📖 Petit lexique : personnages, familles, histoires</span><small>${Object.keys(LEX).length}</small></summary><div class="lexique-liste">${Object.entries(LEX).sort((a, b) => a[1].titre.localeCompare(b[1].titre, "fr")).map(([k, d]) => `<button class="lex-item" data-terme="${k}"><b>${esc(d.titre)}</b><small>${esc(d.sous || "")}</small></button>`).join("")}</div></details>` : ""}
    </section>`;
  }

  function carteResto(r, dansFiche) {
    const tete = `<div class="choix-haut"><span class="gamme g${r.gamme}">${GAMME[r.gamme]}</span>${r.prio ? '<span class="etiquette prio">★ votre trouvaille</span>' : ""}${r.prog ? '<span class="etiquette reco">au programme</span>' : ""}</div>
      ${dansFiche ? "" : `<h3>${esc(r.nom)}</h3>`}
      <div class="ligne">${esc(r.type)} · <span class="prix">${esc(r.prix)}</span> · ${esc(r.zone)}</div>
      ${r.quand ? `<div class="ligne quand">📅 ${esc(r.quand)}</div>` : ""}`;
    const corps = carteRestoCorps(r);
    if (!dansFiche) return `<details class="bloc resto repli-resto" data-gamme="${r.gamme}" data-prog="${r.prog ? 1 : 0}"><summary>${tete}</summary>${corps}</details>`;
    return `<div class="resto" data-gamme="${r.gamme}" data-prog="${r.prog ? 1 : 0}">${tete}${corps}</div>`;
  }
  function carteRestoCorps(r) {
    return `
      <p class="note">${r.pourquoi}</p>
      ${r.commander && r.commander.length ? `<div class="sous-titre">À commander</div><ul class="puces commander">${r.commander.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>` : ""}
      ${r.astuce ? `<p class="astuce">💡 ${esc(r.astuce)}</p>` : ""}
      <div class="ligne">🕒 ${esc(r.horaires)}</div>
      <div class="actions"><a class="bouton" href="${maps(r.nom + ", " + r.adresse + ", Firenze")}" target="_blank" rel="noopener">📍 ${esc(r.adresse)}</a><a class="bouton" href="${aPied(r.nom + ", " + r.adresse + ", Firenze")}" target="_blank" rel="noopener">🚶 Y aller</a>${tel(r.tel)}</div>`;
  }
  function pageManger() {
    const cartes = F.gammes.filter((g) => g.n > 0).map((g) => {
      const tops = F.restos.filter((r) => r.gamme === g.n && r.prog).map((r) => r.nom);
      return `<button class="gamme-carte" data-g="${g.n}" aria-pressed="false"><span class="gamme g${g.n}">${GAMME[g.n]}</span><b>${esc(g.nom.replace(/^€+\s*/, ""))}</b><small>${esc(g.sous)}</small>${tops.length ? `<span class="tops">Au programme : ${esc(tops.join(" · "))}</span>` : ""}</button>`;
    }).join("");
    return `<section class="page" id="p-manger"><p class="surtitre">${F.restos.length} adresses vérifiées</p><h1>Manger & boire</h1>
      <div class="outils">${BTN_TOUT}</div>
      <details class="bloc-repli intro-repli"><summary><span>ℹ️ Comment lire cette page</span></summary><p class="intro">Trois gammes. Touchez-en une pour voir toutes ses adresses, avec ce qu'il faut y commander. « Au programme » : les adresses déjà placées dans vos journées (★ = vos propres trouvailles). Les autres sont des alternatives sérieuses, citées par le Gambero Rosso, le guide Michelin ou les meilleurs blogs locaux. Attention aux jours de fermeture : le dimanche et le lundi, beaucoup d'adresses ferment.</p></details>
      <div class="gammes">${cartes}</div>
      <div class="filtres" id="filtres-manger"><button aria-pressed="true" data-f="tout">Tout</button><button aria-pressed="false" data-f="prog">Au programme</button><button aria-pressed="false" data-f="0">🍦 Glaces & cafés</button></div>
      <div id="liste-restos">${F.restos.slice().sort((a, b) => (b.prog ? 1 : 0) - (a.prog ? 1 : 0)).map((r) => carteResto(r)).join("")}</div>
      <details class="bloc repli"><summary><h2>😋 Que goûter à Florence</h2><small>${F.plats.length} plats</small></summary>
        <div class="plats">${F.plats.map((p) => repli(esc(p.nom), `<p>${p.texte}</p><div class="actions">${p.ou.map((id) => btnResto(id)).join("")}</div>`, "", "plat")).join("")}</div>
      </details>
    </section>`;
  }

  /* ---------------- Fiches (feuille modale) ---------------- */
  const feuille = $("#feuille");
  function ouvrir(meta, titre, corps) {
    $("#feuille-meta").textContent = meta; $("#feuille-titre").textContent = titre; $("#feuille-corps").innerHTML = corps; lierMots($("#feuille-corps"));
    if (!feuille.open) { feuille.showModal(); history.pushState({ feuille: 1 }, ""); }
    feuille.scrollTop = 0; $("#feuille-corps").scrollTop = 0;
  }
  function fermer() { if (feuille.open) { if (history.state && history.state.feuille) history.back(); else feuille.close(); } }
  window.addEventListener("popstate", () => { if (bulle.open) bulle.close(); if (feuille.open) feuille.close(); });

  /* ---------------- Bulle du lexique ---------------- */
  const bulle = $("#bulle");
  function ouvrirTerme(k) {
    const d = LEX[k]; if (!d) return;
    $("#bulle-sous").textContent = d.sous || "";
    $("#bulle-titre").textContent = d.titre;
    const fiche = d.lieu && F.lieux[d.lieu] ? `<button class="lien-fiche" data-lieu="${d.lieu}">Fiche du site : ${esc(F.lieux[d.lieu].nom)}</button>` : "";
    const corps = $("#bulle-corps");
    corps.innerHTML = `<p>${d.texte}</p><div class="bulle-liens">${(d.liens || []).map((l) => `<a href="${l.url}" target="_blank" rel="noopener">En savoir plus · ${esc(l.texte)} ↗</a>`).join("")}${fiche}</div>`;
    lierMots(corps, k);
    if (!bulle.open) bulle.showModal();
    corps.scrollTop = 0;
  }
  $("#bulle-fermer").addEventListener("click", () => bulle.close());
  bulle.addEventListener("click", (e) => { if (e.target === bulle) bulle.close(); });
  $("#fermer").addEventListener("click", fermer);
  feuille.addEventListener("cancel", (e) => { e.preventDefault(); fermer(); });
  feuille.addEventListener("click", (e) => { if (e.target === feuille) fermer(); });

  function ficheLieu(id) {
    const l = F.lieux[id]; if (!l) return;
    const p = l.pratique || {};
    const liens = [];
    (l.liens || []).forEach((x) => liens.push(`<a class="resa-lien" href="${x.url}" target="_blank" rel="noopener"><span class="ic">🎟</span>${esc(x.texte)}</a>`));
    [l.video, l.video2].filter(Boolean).forEach((v) => liens.push(`<a href="${v.url}" target="_blank" rel="noopener"><span class="ic">▶️</span>${esc(v.titre)}</a>`));
    ((F.aLire || {})[id] || []).forEach((x) => liens.push(`<a href="${x.url}" target="_blank" rel="noopener"><span class="ic">📖</span>${esc(/^Wikipédia/.test(x.texte) ? "En savoir plus sur " + x.texte : x.texte)}</a>`));
    liens.push(`<a href="${aPied(l.maps || l.nom)}" target="_blank" rel="noopener"><span class="ic">🚶</span>Itinéraire à pied</a>`);
    liens.push(`<a href="${maps(l.maps || l.nom)}" target="_blank" rel="noopener"><span class="ic">📍</span>Ouvrir dans Google Maps</a>`);
    const g = l.guide;
    const I = INCONT[id] || { oeuvres: new Set(), salles: new Set(), extras: [], noms: [] };
    const aNePasManquer = I.noms.length ? `<div class="incontournables"><span class="inc-titre">⭐ À ne pas manquer</span>${I.noms.map((n) => `<button class="inc-puce" data-salle="${n.si}">${esc(n.nom)}</button>`).join("")}</div>` : "";
    const autour = I.extras.length ? repli("📍 Avant d'entrer et autour", `<ul class="regards">${I.extras.map(carteRegarder).join("")}</ul>`, I.extras.length, "autour") : "";
    const guide = g ? `<h4>🎧 Visite guidée · ${esc(g.duree)} · ${g.etapes.length} étapes</h4>${aNePasManquer}${g.conseil ? repli("💡 Le conseil pour la visite", `<p class="astuce">${esc(g.conseil)}</p>`, "", "conseil") : ""}${autour}
      ${g.etapes.map((s, i) => `<details class="salle ${I.salles.has(i) ? "a-voir-absolument" : ""}" data-salle="${i}"><summary><span class="salle-num">${i + 1}</span><span class="salle-titre"><span class="salle-nom">${esc(s.salle)}${I.salles.has(i) ? ' <span class="etoile">⭐ à ne pas manquer</span>' : ""}</span><span class="salle-h">${esc(s.titre)}</span></span><span class="salle-fl">▸</span></summary><div class="salle-corps">
        ${s.oeuvres.map((o, oi) => `<div class="oeuvre ${o.img ? "avec-photo" : ""} ${I.oeuvres.has(i + ":" + oi) ? "incontournable" : ""}">${o.img ? photo(o.img, o.nom, "grande") : ""}<div class="oeuvre-texte">${I.oeuvres.has(i + ":" + oi) ? '<span class="etoile">⭐ à ne pas manquer</span>' : ""}<b>${esc(o.nom)}</b>${o.auteur || o.date ? `<span class="auteur">${esc([o.auteur, o.date].filter(Boolean).join(", "))}</span>` : ""}<p>${o.texte}</p></div></div>`).join("")}
      </div></details>`).join("")}` : "";
    const galerie = (l.photos || []).filter((k) => k !== l.img).map((k) => photo(k, l.nom, "galerie")).join("");
    ouvrir(l.theme + " · " + l.zone, l.nom, `
      ${l.img ? photo(l.img, l.nom, "entete") : ""}
      <p>${l.pourquoi}</p>
      ${guide}
      ${l.histoires && l.histoires.length ? repli("📜 Histoires et anecdotes", l.histoires.map((h) => `<p class="histoire">${h}</p>`).join(""), l.histoires.length) : ""}
      ${l.regarder && l.regarder.length ? repli("👀 À regarder", `<ul class="puces">${l.regarder.map((r) => `<li>${r}</li>`).join("")}</ul>`, l.regarder.length) : ""}
      ${galerie ? repli("📷 Photos", `<div class="galerie">${galerie}</div>`, (l.photos || []).filter((k) => k !== l.img).length) : ""}
      <details class="bloc-repli"><summary><span>🕒 Infos pratiques</span><small>${esc([p.horaires && p.horaires.split(",")[0], p.prix].filter(Boolean).join(" · ").slice(0, 40))}</small></summary><dl class="pratique">
        ${p.horaires ? `<dt>Horaires</dt><dd>${esc(p.horaires)}</dd>` : ""}${p.prix ? `<dt>Prix</dt><dd>${esc(p.prix)}</dd>` : ""}
        ${p.duree ? `<dt>Durée</dt><dd>${esc(p.duree)}</dd>` : ""}${p.moment ? `<dt>Quand</dt><dd>${esc(p.moment)}</dd>` : ""}
        ${p.resa ? `<dt>Réservation</dt><dd>${esc(p.resa)}</dd>` : ""}</dl></details>
      ${repli("🔗 Liens, vidéos et itinéraire", `<div class="liens">${liens.join("")}</div>`, liens.length)}`);
  }
  function ficheResto(id) {
    const r = restoParId[id]; if (!r) return;
    ouvrir(r.type + " · " + r.zone, r.nom, carteResto(r, true));
  }

  /* ---------------- Interactions ---------------- */
  document.addEventListener("click", (e) => {
    const ps = e.target.closest(".inc-puce");
    if (ps) { const d = $(`#feuille-corps details.salle[data-salle="${ps.dataset.salle}"]`); if (d) { d.open = true; d.scrollIntoView({ behavior: "smooth", block: "start" }); } return; }
    const tm = e.target.closest("[data-terme]");
    if (tm) { e.preventDefault(); ouvrirTerme(tm.dataset.terme); return; }
    if (bulle.open && e.target.closest("#bulle [data-lieu]")) bulle.close();
    const t = e.target.closest("[data-lieu], [data-resto], .btn-pluie, .btn-tout, .etape-ouvrir, .route-resume, #btn-photos, [data-saut]");
    if (!t) return;
    if (t.matches(".btn-tout")) { const pg = t.closest(".page"); toutDeplier(pg, t.getAttribute("aria-pressed") !== "true"); return; }
    if (t.matches(".etape-ouvrir")) { const et = t.closest(".etape"); ouvrirEtape(et, !et.classList.contains("ouvert")); return; }
    if (t.matches(".route-resume")) { const et = t.closest(".etape"); const on = !et.classList.contains("ouvert"); et.classList.toggle("ouvert", on); t.setAttribute("aria-expanded", on); const sm = $("small", t); sm.textContent = on ? "▾ Replier" : sm.dataset.ferme; return; }
    if (t.matches(".btn-pluie")) { majPluie(!document.body.classList.contains("pluie")); return; }
    if (t.id === "btn-photos") { telechargerPhotos(t); return; }
    if (t.dataset.saut) { e.preventDefault(); const cible = document.getElementById(t.dataset.saut); if (cible) cible.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    if (t.dataset.lieu) ficheLieu(t.dataset.lieu);
    else if (t.dataset.resto) ficheResto(t.dataset.resto);
  });
  document.addEventListener("change", (e) => {
    const c = e.target.closest("[data-check]"); if (!c) return;
    const coche = memo.lire("check", {}); coche[c.dataset.check] = c.checked; memo.ecrire("check", coche);
  });
  function majPluie(on) {
    document.body.classList.toggle("pluie", on); memo.ecrire("pluie", on);
    $$(".btn-pluie").forEach((b) => { b.setAttribute("aria-pressed", on); b.textContent = on ? "☔ Mode pluie : activé" : "☔ Mode pluie"; });
    $$("details.a-pluie").forEach((d) => { d.open = on || d.dataset.ouvert === "1"; });
  }
  majPluie(memo.lire("pluie", false));
  /* Vue essentielle (par défaut) ou tout le détail du parcours. */
  function ouvrirEtape(et, on) {
    et.classList.toggle("ouvert", on);
    const b = $(".etape-ouvrir", et); if (b) { b.setAttribute("aria-expanded", on); $(".eo-fl", b).textContent = on ? "▾ Replier" : "▸ Déplier"; }
    const r = $(".route-resume", et); if (r) { r.setAttribute("aria-expanded", on); const sm = $("small", r); if (sm) sm.textContent = on ? "▾ Replier" : sm.dataset.ferme; }
  }
  /* « Tout déplier » / « Tout replier » pour une page entière. */
  function toutDeplier(pg, on) {
    if (!pg) return;
    $$(".etape", pg).forEach((et) => ouvrirEtape(et, on));
    $$("details", pg).forEach((d) => { if (!d.classList.contains("credits")) d.open = on; });
    $$(".btn-tout", pg).forEach((b) => { b.setAttribute("aria-pressed", on); b.textContent = on ? "↕ Tout replier" : "↕ Tout déplier"; });
  }
  function majDetail(on) {
    document.body.classList.toggle("detail", on); memo.ecrire("detail", on);
    $$(".btn-detail").forEach((b) => { b.setAttribute("aria-pressed", on); b.textContent = on ? "🔎 Vue essentielle" : "🔎 Tout le détail"; });
    $$("details.bloc-repli.chemin").forEach((d) => { d.open = on; });
    $$(".etape.route").forEach((et) => { et.classList.remove("ouvert"); const b = $(".route-resume", et); if (b) { b.setAttribute("aria-expanded", "false"); const sm = $("small", b); if (sm) sm.textContent = sm.dataset.ferme; } });
  }
  majDetail(false);

  /* Filtres lieux */
  let themeLieu = "";
  function filtrerLieux() {
    const q = ($("#recherche-lieux").value || "").trim().toLowerCase();
    $$("#liste-lieux .item").forEach((it) => {
      const okTheme = !themeLieu || (themeLieu === "guide" ? it.dataset.guide === "1" : it.dataset.theme === themeLieu);
      it.hidden = !(okTheme && (!q || it.dataset.texte.includes(q)));
    });
  }
  $("#recherche-lieux").addEventListener("input", filtrerLieux);
  $("#filtres-lieux").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return; themeLieu = b.dataset.theme;
    $$("#filtres-lieux button").forEach((x) => x.setAttribute("aria-pressed", x === b)); filtrerLieux();
  });
  /* Filtres restos : gammes + filtres rapides */
  function filtrerRestos(f) {
    $$("#p-manger .gamme-carte").forEach((x) => x.setAttribute("aria-pressed", x.dataset.g === f));
    $$("#filtres-manger button").forEach((x) => x.setAttribute("aria-pressed", x.dataset.f === f));
    $$("#liste-restos .resto").forEach((r) => {
      r.hidden = f === "tout" ? false : f === "prog" ? r.dataset.prog !== "1" : r.dataset.gamme !== f;
    });
    memo.ecrire("filtreResto", f);
  }
  $("#p-manger").addEventListener("click", (e) => {
    const b = e.target.closest(".gamme-carte, #filtres-manger button"); if (!b) return;
    filtrerRestos(b.dataset.g ?? b.dataset.f);
    if (b.matches(".gamme-carte")) $("#filtres-manger").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  const filtreMemo = memo.lire("filtreResto", "tout");
  filtrerRestos(["tout", "prog", "0", "1", "2", "3"].includes(filtreMemo) ? filtreMemo : "tout");

  /* Photos hors ligne : on les met dans un cache que le service worker sait relire. */
  async function telechargerPhotos(btn) {
    const statut = $("#statut-photos");
    if (!("caches" in window)) { statut.textContent = "Ce navigateur ne permet pas de les enregistrer."; return; }
    btn.disabled = true;
    const urls = Object.values(F.photos).map((p) => p.u);
    const cache = await caches.open("florence-photos");
    let ok = 0, ko = 0, i = 0;
    async function suivant() {
      while (i < urls.length) {
        const u = urls[i++];
        try {
          if (await cache.match(u)) { ok++; }
          else {
            let r;
            try { r = await fetch(u, { mode: "cors" }); } catch (e) { r = await fetch(u, { mode: "no-cors" }); }
            if (r && (r.ok || r.type === "opaque")) { await cache.put(u, r); ok++; } else ko++;
          }
        } catch (e) { ko++; }
        statut.textContent = `${ok + ko} / ${urls.length} photos…`;
      }
    }
    await Promise.all([suivant(), suivant(), suivant(), suivant(), suivant(), suivant()]);
    statut.textContent = ko ? `${ok} photos enregistrées, ${ko} en échec : réessayez en Wi-Fi.` : `Les ${ok} photos sont enregistrées sur ce téléphone.`;
    if (!ko) memo.ecrire("photosOK", new Date().toISOString());
    btn.disabled = false;
  }

  /* Navigation par onglets (#accueil, #sam, …, et #sam-3 pour une étape) */
  function afficher() {
    let id = (location.hash || "").slice(1), etape = null;
    const m = id.match(/^(sam|dim|lun|mar)-(\d+)$/); if (m) { etape = id; id = m[1]; }
    if (!ONGLETS.some((o) => o.id === id)) id = jourCourant ? jourCourant.id : "accueil";
    $$(".page").forEach((p) => (p.hidden = p.id !== "p-" + id));
    $$("#onglets a").forEach((a) => {
      const on = a.dataset.id === id; if (on) { a.setAttribute("aria-current", "page"); a.scrollIntoView({ inline: "center", block: "nearest" }); } else a.removeAttribute("aria-current");
    });
    if (etape) { const c = document.getElementById(etape); if (c && c.classList.contains("etape")) ouvrirEtape(c, true); if (c) setTimeout(() => c.scrollIntoView({ block: "start" }), 50); }
    else window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", () => { if (feuille.open) feuille.close(); afficher(); });
  afficher();

  /* Hors ligne : une fois ouvert avec du réseau, le site reste consultable sans connexion. */
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
