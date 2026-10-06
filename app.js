/* Rendu du site à partir de donnees.js — normalement rien à changer ici. */
(function () {
  "use strict";
  const F = window.FLO;
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const maps = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  const LIBELLES = { calme: "calme", incontournable: "incontournable", pluie: "☔ si pluie", "pas-cher": "pas cher", "plus-cher": "plus cher", medicis: "Médicis", art: "art", vin: "vin", vue: "vue" };
  const restoParId = Object.fromEntries(F.restos.map((r) => [r.id, r]));

  /* Petite mémoire locale (choix et mode pluie). Facultative : le site marche sans. */
  const memo = {
    lire(k, d) { try { const v = localStorage.getItem("flo:" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    ecrire(k, v) { try { localStorage.setItem("flo:" + k, JSON.stringify(v)); } catch (e) { /* rien */ } }
  };
  let choix = memo.lire("choix", {});

  /* ---------------- Onglets ---------------- */
  const today = new Date();
  const iso = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
  const jourCourant = F.jours.find((j) => j.date === iso);
  const ONGLETS = [{ id: "accueil", nom: "Accueil" }]
    .concat(F.jours.map((j) => ({ id: j.id, nom: j.court, auj: j === jourCourant })))
    .concat([{ id: "lieux", nom: "Lieux & histoires" }, { id: "manger", nom: "Manger & boire" }]);

  $("#onglets").innerHTML = ONGLETS.map((o) => `<a href="#${o.id}" data-id="${o.id}" class="${o.auj ? "aujourdhui" : ""}">${esc(o.nom)}${o.auj ? " · auj." : ""}</a>`).join("");

  /* ---------------- Pages ---------------- */
  const THEMES = [...new Set(Object.values(F.lieux).map((l) => l.theme))];
  const ZONES = [...new Set(F.restos.map((r) => r.zone))];
  const contenu = $("#contenu");
  contenu.innerHTML = [pageAccueil(), ...F.jours.map(pageJour), pageLieux(), pageManger()].join("");
  $("#pied").innerHTML = `Infos vérifiées le ${esc(F.maj)} · à re-vérifier la veille · <a href="#accueil">haut</a>`;

  function etiquettes(tags, reco) {
    return `<div class="etiquettes">${reco ? '<span class="etiquette reco">★ mon conseil</span>' : ""}${(tags || []).map((t) => `<span class="etiquette ${t}">${esc(LIBELLES[t] || t)}</span>`).join("")}</div>`;
  }

  function pageAccueil() {
    const v = F.voyage;
    const resas = F.reservations.map((r) => {
      const st = { ok: "✅ Réservé", todo: "🟡 À réserver", info: "ℹ️ À prévoir" }[r.statut];
      return `<div class="resa ${r.statut}"><div class="statut">${st}</div><h3>${esc(r.titre)}</h3><div class="quand">${esc(r.quand)}</div><p>${esc(r.detail)}</p>
        <div class="actions">${r.lien ? `<a class="bouton" href="${r.lien}" target="_blank" rel="noopener">🎟 ${esc(r.lienTexte || "Réserver")}</a>` : ""}${r.lieu ? `<button class="lien-fiche" data-lieu="${r.lieu}">Fiche du lieu</button>` : ""}</div></div>`;
    }).join("");
    const b = F.budget;
    return `<section class="page" id="p-accueil">
      <p class="surtitre">${esc(v.voyageurs)}</p>
      <h1>Quatre jours à Florence</h1>
      <p class="intro">Chaque journée propose 2 ou 3 options par créneau, avec ma recommandation (★). Touchez « Notre choix » pour marquer ce que vous retenez, et « Mode pluie » pour faire ressortir les plans B. Les 📖 ouvrent l'histoire de chaque lieu.</p>
      <div class="bloc"><h2>Le voyage</h2>
        <div class="info"><span class="ic">🛫</span><div>${esc(v.aller)}<small>Tram T2 jusqu'à Unità (~20 min) ou taxi forfait 25–27 €</small></div></div>
        <div class="info"><span class="ic">🏠</span><div><a href="${maps(v.logement.adresse)}" target="_blank" rel="noopener">${esc(v.logement.adresse)}</a><small>${esc(v.logement.note)}</small></div></div>
        <div class="info"><span class="ic">🛬</span><div>${esc(v.retour)}<small>Taxi conseillé avec les valises (25 €)</small></div></div>
        <div class="info"><span class="ic">🌤</span><div><a href="${v.meteo}" target="_blank" rel="noopener">Météo de Florence (3bmeteo)</a><small>${esc(v.soleil)} · Lundi : musées d'État fermés</small></div></div>
      </div>
      <div class="bloc"><h2>Réservations</h2>${resas}</div>
      <div class="bloc"><h2>Les jours en un coup d'œil</h2>
        ${F.jours.map((j) => `<div class="info"><span class="ic">${{ sam: "🌙", dim: "🗿", lun: "🔔", mar: "🌿" }[j.id] || "•"}</span><div><a href="#${j.id}"><b>${esc(j.court)}</b> — ${esc(j.titre)}</a></div></div>`).join("")}
      </div>
      <div class="bloc"><h2>Budget estimé</h2>
        <table class="budget">${b.lignes.map((l) => `<tr><td>${esc(l[0])}</td><td>${esc(l[1])}</td></tr>`).join("")}</table>
        <p class="total">${esc(b.total)}</p>
        <ul class="puces">${b.conseils.map((c) => `<li>${c}</li>`).join("")}</ul>
      </div>
      <div class="bloc"><h2>Légende</h2><div class="legende">${Object.keys(LIBELLES).map((t) => `<span class="etiquette ${t}">${esc(LIBELLES[t])}</span>`).join("")}<span class="etiquette reco">★ mon conseil</span></div></div>
    </section>`;
  }

  function pageJour(j) {
    const creneaux = j.creneaux.map((c, ci) => {
      const cle = j.id + ":" + ci;
      const todo = c.resa && /RÉSERVER/i.test(c.resa);
      const opts = c.options.map((o, oi) => {
        const pluieOk = (o.tags || []).includes("pluie") || c.options.length === 1 || !!c.resa;
        const fiches = (o.lieux || []).map((id) => F.lieux[id] ? `<button class="lien-fiche" data-lieu="${id}">${esc(F.lieux[id].nom)}</button>` : "").join("")
          + (o.restos || []).map((id) => restoParId[id] ? `<button class="lien-fiche resto" data-resto="${id}">${esc(restoParId[id].nom)}</button>` : "").join("");
        const choisi = choix[cle] === oi;
        return `<article class="option ${o.reco ? "reco" : ""} ${pluieOk ? "pluie-ok" : ""} ${choisi ? "choisie" : ""}" data-cle="${cle}" data-i="${oi}">
          ${etiquettes(o.tags, o.reco)}<h3>${esc(o.titre)}</h3><p>${o.texte}</p>
          <div class="actions">${fiches}${c.options.length > 1 ? `<button class="choisir" aria-pressed="${choisi}">${choisi ? "✓ Notre choix" : "Notre choix ?"}</button>` : ""}</div></article>`;
      }).join("");
      const aChoix = c.options.length > 1 && choix[cle] !== undefined;
      return `<div class="creneau ${c.resa ? "reserve" : ""}"><div class="heure">${esc(c.heure)}</div><h2>${esc(c.titre)}</h2>
        ${c.resa ? `<div class="resa-bandeau ${todo ? "todo" : ""}">${todo ? "🟡" : "✅"} ${esc(c.resa)}</div>` : ""}
        <div class="options ${aChoix ? "a-un-choix" : ""}">${opts}</div>
        ${c.chemin ? `<div class="chemin"><strong>👣 Sur le chemin</strong>${c.chemin}</div>` : ""}</div>`;
    }).join("");
    const d = new Date(j.date + "T12:00:00");
    const dateLongue = d.toLocaleDateString("fr-BE", { weekday: "long", day: "numeric", month: "long" });
    return `<section class="page" id="p-${j.id}">
      <p class="surtitre">${esc(dateLongue)}</p><h1>${esc(j.titre)}</h1><p class="intro">${esc(j.intro)}</p>
      <div class="outils"><button class="bouton btn-pluie" aria-pressed="false">☔ Mode pluie</button><button class="bouton discret btn-reset" data-jour="${j.id}">Effacer nos choix</button></div>
      ${creneaux}</section>`;
  }

  function pageLieux() {
    return `<section class="page" id="p-lieux"><p class="surtitre">${Object.keys(F.lieux).length} fiches</p><h1>Lieux & histoires</h1>
      <p class="intro">Pourquoi y aller, les histoires, ce qu'il faut regarder, les infos pratiques, une vidéo et le lien Maps.</p>
      <input class="recherche" type="search" id="recherche-lieux" placeholder="Chercher un lieu, un nom (Médicis, Galilée…)" aria-label="Chercher">
      <div class="filtres" id="filtres-lieux"><button aria-pressed="true" data-theme="">Tous</button>${THEMES.map((t) => `<button aria-pressed="false" data-theme="${esc(t)}">${esc(t)}</button>`).join("")}</div>
      <div class="liste" id="liste-lieux">${Object.entries(F.lieux).map(([id, l]) => `<button class="item" data-lieu="${id}" data-theme="${esc(l.theme)}" data-texte="${esc((l.nom + " " + l.resume + " " + l.pourquoi + " " + l.histoires.join(" ")).toLowerCase().replace(/<[^>]+>/g, ""))}"><div class="meta">${esc(l.theme)} · ${esc(l.zone)}</div><h3>${esc(l.nom)}</h3><p>${esc(l.resume)}</p></button>`).join("")}</div>
    </section>`;
  }

  function carteResto(r) {
    return `<div class="bloc resto" data-zone="${esc(r.zone)}" data-tags="${(r.tags || []).join(" ")}"><h3>${esc(r.nom)}</h3>
      <div class="ligne">${esc(r.type)} · <span class="prix">${esc(r.prix)}</span> · ${esc(r.zone)}</div>
      <div class="ligne">🕒 ${esc(r.horaires)}</div>
      <p class="note">${r.note}</p>
      <div class="actions"><a class="bouton" href="${maps(r.nom + ", " + r.adresse + ", Firenze")}" target="_blank" rel="noopener">📍 ${esc(r.adresse)}</a>${r.tel ? `<a class="bouton" href="tel:${r.tel.replace(/\s/g, "")}">📞 Appeler</a>` : ""}</div></div>`;
  }
  function pageManger() {
    return `<section class="page" id="p-manger"><p class="surtitre">${F.restos.length} adresses vérifiées</p><h1>Manger & boire</h1>
      <p class="intro">Midi : simple, typique, pas cher. Soir : 30–50 €. Bars à vin avec planches, comme à Rome. Les jours de fermeture comptent : le dimanche et le lundi, beaucoup d'adresses ferment.</p>
      <div class="filtres" id="filtres-manger"><button aria-pressed="true" data-f="">Tout</button><button aria-pressed="false" data-f="vin">🍷 Bars à vin</button><button aria-pressed="false" data-f="pas-cher">Pas cher</button><button aria-pressed="false" data-f="local">Très local</button>${ZONES.map((z) => `<button aria-pressed="false" data-f="zone:${esc(z)}">${esc(z)}</button>`).join("")}</div>
      <div id="liste-restos">${F.restos.map(carteResto).join("")}</div></section>`;
  }

  /* ---------------- Fiches ---------------- */
  const feuille = $("#feuille");
  function ouvrir(meta, titre, corps) {
    $("#feuille-meta").textContent = meta; $("#feuille-titre").textContent = titre; $("#feuille-corps").innerHTML = corps;
    $("#feuille-corps").scrollTop = 0;
    if (!feuille.open) { feuille.showModal(); history.pushState({ feuille: 1 }, ""); }
    feuille.scrollTop = 0;
  }
  function fermer() { if (feuille.open) { if (history.state && history.state.feuille) history.back(); else feuille.close(); } }
  window.addEventListener("popstate", () => { if (feuille.open) feuille.close(); });
  $("#fermer").addEventListener("click", fermer);
  feuille.addEventListener("cancel", (e) => { e.preventDefault(); fermer(); });
  feuille.addEventListener("click", (e) => { if (e.target === feuille) fermer(); });

  function ficheLieu(id) {
    const l = F.lieux[id]; if (!l) return;
    const p = l.pratique || {};
    const liens = [];
    (l.liens || []).forEach((x) => liens.push(`<a class="resa-lien" href="${x.url}" target="_blank" rel="noopener"><span class="ic">🎟</span>${esc(x.texte)}</a>`));
    [l.video, l.video2].filter(Boolean).forEach((v) => liens.push(`<a href="${v.url}" target="_blank" rel="noopener"><span class="ic">▶️</span>${esc(v.titre)}</a>`));
    liens.push(`<a href="${maps(l.maps || l.nom)}" target="_blank" rel="noopener"><span class="ic">📍</span>Ouvrir dans Google Maps</a>`);
    ouvrir(l.theme + " · " + l.zone, l.nom, `
      <p>${l.pourquoi}</p>
      <h4>Histoires et anecdotes</h4>${l.histoires.map((h) => `<p class="histoire">${h}</p>`).join("")}
      ${l.regarder && l.regarder.length ? `<h4>À regarder</h4><ul class="puces">${l.regarder.map((r) => `<li>${r}</li>`).join("")}</ul>` : ""}
      <h4>Infos pratiques</h4><dl class="pratique">
        ${p.horaires ? `<dt>Horaires</dt><dd>${esc(p.horaires)}</dd>` : ""}${p.prix ? `<dt>Prix</dt><dd>${esc(p.prix)}</dd>` : ""}
        ${p.duree ? `<dt>Durée</dt><dd>${esc(p.duree)}</dd>` : ""}${p.moment ? `<dt>Quand</dt><dd>${esc(p.moment)}</dd>` : ""}
        ${p.resa ? `<dt>Réservation</dt><dd>${esc(p.resa)}</dd>` : ""}</dl>
      <h4>Liens</h4><div class="liens">${liens.join("")}</div>`);
  }
  function ficheResto(id) {
    const r = restoParId[id]; if (!r) return;
    ouvrir(r.type + " · " + r.zone, r.nom, carteResto(r).replace('class="bloc resto"', 'class="resto"'));
  }

  /* ---------------- Interactions ---------------- */
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-lieu], [data-resto], .choisir, .btn-pluie, .btn-reset");
    if (!t) return;
    if (t.matches(".choisir")) {
      const opt = t.closest(".option"); const cle = opt.dataset.cle; const i = +opt.dataset.i;
      if (choix[cle] === i) delete choix[cle]; else choix[cle] = i;
      memo.ecrire("choix", choix); majChoix(opt.parentElement, cle); return;
    }
    if (t.matches(".btn-pluie")) { majPluie(!document.body.classList.contains("pluie")); return; }
    if (t.matches(".btn-reset")) {
      Object.keys(choix).filter((k) => k.startsWith(t.dataset.jour + ":")).forEach((k) => delete choix[k]);
      memo.ecrire("choix", choix);
      document.querySelectorAll(`#p-${t.dataset.jour} .options`).forEach((o) => majChoix(o, o.firstElementChild && o.firstElementChild.dataset.cle));
      return;
    }
    if (t.dataset.lieu) ficheLieu(t.dataset.lieu);
    else if (t.dataset.resto) ficheResto(t.dataset.resto);
  });
  function majChoix(liste, cle) {
    const c = choix[cle];
    liste.classList.toggle("a-un-choix", c !== undefined);
    liste.querySelectorAll(".option").forEach((o) => {
      const on = +o.dataset.i === c; o.classList.toggle("choisie", on);
      const b = o.querySelector(".choisir"); if (b) { b.setAttribute("aria-pressed", on); b.textContent = on ? "✓ Notre choix" : "Notre choix ?"; }
    });
  }
  function majPluie(on) {
    document.body.classList.toggle("pluie", on); memo.ecrire("pluie", on);
    document.querySelectorAll(".btn-pluie").forEach((b) => { b.setAttribute("aria-pressed", on); b.textContent = on ? "☔ Mode pluie : activé" : "☔ Mode pluie"; });
  }
  majPluie(memo.lire("pluie", false));

  /* Filtres lieux */
  let themeLieu = "";
  function filtrerLieux() {
    const q = ($("#recherche-lieux").value || "").trim().toLowerCase();
    document.querySelectorAll("#liste-lieux .item").forEach((it) => {
      it.hidden = !((!themeLieu || it.dataset.theme === themeLieu) && (!q || it.dataset.texte.includes(q)));
    });
  }
  $("#recherche-lieux").addEventListener("input", filtrerLieux);
  $("#filtres-lieux").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return; themeLieu = b.dataset.theme;
    $("#filtres-lieux").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b)); filtrerLieux();
  });
  /* Filtres restos */
  $("#filtres-manger").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return; const f = b.dataset.f;
    $("#filtres-manger").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    document.querySelectorAll("#liste-restos .resto").forEach((r) => {
      r.hidden = f ? (f.startsWith("zone:") ? r.dataset.zone !== f.slice(5) : !r.dataset.tags.split(" ").includes(f)) : false;
    });
  });

  /* Navigation par onglets (#accueil, #sam, …) */
  function afficher() {
    let id = (location.hash || "").slice(1);
    if (!ONGLETS.some((o) => o.id === id)) id = jourCourant ? jourCourant.id : "accueil";
    document.querySelectorAll(".page").forEach((p) => (p.hidden = p.id !== "p-" + id));
    document.querySelectorAll("#onglets a").forEach((a) => {
      const on = a.dataset.id === id; if (on) { a.setAttribute("aria-current", "page"); a.scrollIntoView({ inline: "center", block: "nearest" }); } else a.removeAttribute("aria-current");
    });
  }
  window.addEventListener("hashchange", () => { if (feuille.open) feuille.close(); afficher(); window.scrollTo(0, 0); });
  afficher();

  /* Hors ligne : une fois ouvert avec du réseau, le site reste consultable sans connexion. */
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
