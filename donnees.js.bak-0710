/* =====================================================================
   Florence · 10–13 octobre 2026 — TOUT LE CONTENU DU SITE EST ICI
   ---------------------------------------------------------------------
   Pour modifier le site : changer ce fichier, puis lancer publier.bat
   depuis E:\Website. (Voir README.md.)
   - reservations : statut "ok" (réservé), "todo" (à réserver), "info"
   - jours[].creneaux[].options : une carte par option ; reco: true = ma recommandation
   - tags possibles : calme, incontournable, pluie, pas-cher, plus-cher, medicis, art, vin, vue
   - lieux : fiches détaillées (ouvertes depuis les options via "lieux: [...]")
   - restos : carnet d'adresses (ouvertes via "restos: [...]")
   Vérifications web : 6 octobre 2026. Les horaires peuvent changer : re-vérifier la veille.
   ===================================================================== */

window.FLO = {
  maj: "6 octobre 2026",

  voyage: {
    titre: "Florence",
    dates: "Sam 10 → mar 13 octobre 2026",
    voyageurs: "Antoine & Charlotte",
    logement: { adresse: "Via dei Neri 16, 50122 Firenze", note: "Derrière les Offices, entre la piazza della Signoria et Santa Croce. Offices 2 min, Ponte Vecchio 5 min, Duomo 10 min." },
    aller: "Sam 10/10 · Vueling Bruxelles → Florence, atterrissage vers 20h00",
    retour: "Mar 13/10 · vol vers 18h00 — quitter le centre vers 15h30",
    meteo: "https://www.3bmeteo.com/meteo/firenze",
    soleil: "Coucher du soleil vers 18h40"
  },

  reservations: [
    { statut: "ok", titre: "Galleria dell'Accademia — le David", quand: "Dim 11 · entrée 8h15", detail: "Arriver vers 8h05, via Ricasoli 58–60. 2 billets nominatifs, 48 €. Commande B-ticket n° 24288201 (billets dans l'e-mail « Stampa@Casa »). Non remboursable.", lieu: "accademia" },
    { statut: "ok", titre: "Galerie des Offices", quand: "Dim 11 · entrée 13h45", detail: "Sortie vers 16h30. 2 billets, 58 €. Code CoopCulture 6R325YDT (PDF par e-mail). Si les PDF n'arrivent pas : etickets@coopculture.it.", lieu: "offices" },
    { statut: "todo", titre: "Giotto Pass — campanile + baptistère + musée + crypte", quand: "Lun 12 · créneau tour vers 16h30–17h", detail: "20 €/pers. Valable 3 jours, mais le créneau de la tour est fixe et non modifiable. À réserver dès que la météo de lundi est claire. Tour en restauration (échafaudage) : terrasse ouverte, vue un peu réduite.", lien: "https://tickets.duomo.firenze.it/en/", lienTexte: "Billetterie officielle du Duomo", lieu: "campanile" },
    { statut: "info", titre: "Dîner bistecca (lundi soir)", quand: "Lun 12 · ~20h", detail: "Réserver par téléphone 1–2 jours avant : Cammillo (+39 055 212427) ou I'Raddi (+39 055 211072). Voir l'onglet Manger.", lieu: null },
    { statut: "info", titre: "Optionnel : Cappella Brancacci", quand: "Lun 12 (fermée le mardi)", detail: "Réservation obligatoire, 10 visiteurs par créneau de 30 min. Seulement si l'envie est là.", lien: "https://ticketsmuseums.comune.fi.it/4_cappella-brancacci/", lienTexte: "Billetterie des musées civiques", lieu: "brancacci" }
  ],

  /* ------------------------------------------------------------------ */
  jours: [
    {
      id: "sam", court: "Sam 10", date: "2026-10-10",
      titre: "Arrivée et Florence la nuit",
      intro: "Atterrissage vers 20h. Ce soir, pas de programme : on pose les valises, on mange tard et on découvre les monuments éclairés, presque sans touristes.",
      creneaux: [
        {
          heure: "20h00 → 21h15", titre: "De l'aéroport au logement",
          options: [
            { titre: "Tram T2 + 15 min à pied", tags: ["pas-cher"], reco: true,
              texte: "Tram T2 « Peretola Aeroporto » → arrêt <b>Unità</b> (~20 min, toutes les 5–10 min, ticket ~2 € à valider sur le quai, distributeurs par carte). Puis 15 min à pied par la via de' Cerretani : <b>le Duomo surgit d'un coup, illuminé</b>. La plus belle façon d'arriver." },
            { titre: "Taxi forfaitaire", tags: ["calme"],
              texte: "Forfait aéroport → centre : 25 € en journée, <b>27 € après 22h et le dimanche</b> (jusqu'à 4 pers. avec bagages). 15–25 min, porte à porte. Station devant le hall des arrivées." }
          ],
          chemin: "De l'arrêt Unità, prenez la via de' Cerretani : la coupole apparaît au bout de la rue. Longez le baptistère, descendez la <b>via dei Calzaiuoli</b> (la rue des chaussetiers, l'axe médiéval entre la cathédrale et le pouvoir), passez devant <b>Orsanmichele</b> et ses niches de statues, traversez la <b>piazza della Signoria</b>, puis via dei Leoni → via dei Neri."
        },
        {
          heure: "~21h30", titre: "Dîner tardif",
          options: [
            { titre: "Bar à vin et crostoni à San Niccolò", tags: ["vin", "calme"], reco: true, restos: ["fuoriporta"],
              texte: "<b>Fuori Porta</b>, l'enoteca de quartier au pied de San Miniato, ouverte jusqu'à 23h30 le samedi. Crostoni, planches, 600 vins dont des dizaines au verre : exactement l'esprit de votre bar à vin de Rome. 12 min à pied en longeant l'Arno." },
            { titre: "Trattoria à 5 minutes", tags: ["calme"], restos: ["vinivecchisapori"],
              texte: "<b>Vini e Vecchi Sapori</b>, minuscule osteria derrière le Palazzo Vecchio, pleine d'Italiens. Peposo, pâtes au canard. Réserver par téléphone en arrivant (+39 055 293045), cuisine jusqu'à ~23h." },
            { titre: "Pizza napolitaine dans l'Oltrarno", tags: ["pas-cher"], restos: ["gustapizza"],
              texte: "<b>Gusta Pizza</b>, via Maggio, à deux pas de Santo Spirito. 8–15 €, ouverte jusqu'à 23h. Sans chichis, très bonne." }
          ]
        },
        {
          heure: "Après le dîner", titre: "Première balade de nuit",
          options: [
            { titre: "La boucle des ponts", tags: ["incontournable", "vue"], reco: true, lieux: ["signoria", "pontevecchio", "santatrinita"],
              texte: "Piazza della Signoria éclairée → les Offices (la cour vide la nuit est saisissante) → <b>Ponte Vecchio</b>, boutiques fermées, presque désert → <b>Ponte Santa Trinita</b> pour LA vue sur le Ponte Vecchio illuminé → retour par le lungarno. 40 min sans se presser." },
            { titre: "Retour le long de l'Arno (si dîner à San Niccolò)", tags: ["calme", "vue"], lieux: ["sanniccolo", "pontevecchio"],
              texte: "Depuis Fuori Porta : la <b>Porta San Niccolò</b> éclairée, puis le Ponte alle Grazie avec la vue de face sur le Ponte Vecchio, et rentrer par les Offices. Glace en route à la <b>Gelateria dei Neri</b>, en bas de chez vous." }
          ],
          chemin: "Via dei Neri : à l'angle de la via San Remigio, levez la tête. <b>Deux petites plaques</b> marquent la hauteur de l'eau lors des crues de <b>1333</b> et de <b>1966</b> — la seconde est plus haute que vous. Le 4 novembre 1966, l'Arno a inondé Santa Croce sous près de 5 m d'eau et de boue."
        }
      ]
    },

    {
      id: "dim", court: "Dim 11", date: "2026-10-11",
      titre: "Les deux géants : le David et les Offices",
      intro: "Le seul réveil matinal du séjour (le David à 8h15, c'était le seul créneau). En échange : une matinée tranquille après, un vrai déjeuner, puis les Offices. Attention, le dimanche beaucoup de trattorias sont fermées et la cathédrale n'ouvre que pour les messes.",
      creneaux: [
        {
          heure: "8h05 → 9h30", titre: "Le David", resa: "Accademia · entrée 8h15 — réservé",
          options: [
            { titre: "Galleria dell'Accademia", tags: ["incontournable", "art"], reco: true, lieux: ["accademia"],
              texte: "Arriver à <b>8h05</b> via Ricasoli 58–60 avec les billets (e-mail Stampa@Casa). Compter 1h–1h15. Allez d'abord au David tant que la salle est presque vide, puis revenez par les <b>Prisonniers</b> inachevés de Michel-Ange." }
          ],
          chemin: "Pas le temps de petit-déjeuner avant ? Un cappuccino-cornetto au comptoir d'un bar de la via Ricasoli ou de la piazza San Marco (1,5–3 € au comptoir, plus cher assis)."
        },
        {
          heure: "9h30 → 12h00", titre: "Matinée libre",
          options: [
            { titre: "Quartier des Médicis", tags: ["medicis", "incontournable"], reco: true, lieux: ["cappellemedicee", "sanlorenzo", "mercatocentrale"],
              texte: "Petit-déjeuner, puis les <b>Chapelles Médicis</b> (ouvertes le dimanche, fermées lundi : c'est aujourd'hui ou mardi ; 11 €, sans réservation, ~1h) : le mausolée de marbre et de pierres dures des grands-ducs, et la Nouvelle Sacristie de Michel-Ange. Puis tour du <b>Mercato Centrale</b> et des rues de San Lorenzo." },
            { titre: "Flânerie calme, côté Florentins", tags: ["calme"], lieux: ["annunziata", "santacroce"],
              texte: "Piazza <b>Santissima Annunziata</b> (le premier bâtiment de la Renaissance et sa « roue » des enfants abandonnés), <b>Borgo Pinti</b>, puis la piazza Santa Croce encore calme. Retour par la via dei Neri pour souffler avant les Offices." },
            { titre: "Le cœur médiéval", tags: ["incontournable"], lieux: ["duomo", "battistero", "orsanmichele", "mercatonuovo"],
              texte: "Faire le tour extérieur du Duomo et du baptistère (les portes du Paradis), Orsanmichele, puis le Mercato Nuovo et son <b>sanglier</b> dont il faut frotter le museau. Cathédrale fermée le dimanche matin aux visites." }
          ]
        },
        {
          heure: "12h15 → 13h30", titre: "Déjeuner près des Offices",
          options: [
            { titre: "Trattoria historique à 1 minute", tags: ["incontournable"], reco: true, restos: ["anticofattore"],
              texte: "<b>Antico Fattore</b>, via Lambertesca, littéralement à l'angle des Offices. Ouverte le dimanche. Ribollita, pappa al pomodoro, pâtes maison : idéal pour être à l'heure à 13h45." },
            { titre: "Osteria des locaux", tags: ["calme"], restos: ["vinivecchisapori"],
              texte: "<b>Vini e Vecchi Sapori</b>, 3 min. Plus typique, plus serré, réserver le matin." },
            { titre: "Sur le pouce, à la florentine", tags: ["pas-cher"], restos: ["fratellini", "trippaioporcellino", "mercatocentrale"],
              texte: "Un <b>panino + un verre de vin</b> debout aux Fratellini (une institution depuis 1875), ou un <b>lampredotto</b> au chariot du Porcellino. 5–10 €. Si vous étiez à San Lorenzo : le 1er étage du Mercato Centrale (ouvert le dimanche)." }
          ]
        },
        {
          heure: "13h45 → 16h30", titre: "Les Offices", resa: "Offices · entrée 13h45 — réservé",
          options: [
            { titre: "Galleria degli Uffizi", tags: ["incontournable", "art", "medicis"], reco: true, lieux: ["offices"],
              texte: "Prévoir 2h30–3h. Le parcours conseillé est dans la fiche : Botticelli, Léonard, Michel-Ange, Caravage, Artemisia. Pause au <b>café sur le toit de la Loggia</b> : la tour du Palazzo Vecchio à portée de main." }
          ],
          chemin: "En sortant, faites quelques pas dans la <b>via dei Georgofili</b>, juste derrière. Le 27 mai 1993, une voiture piégée de la mafia y a explosé : 5 morts, la Torre dei Pulci effondrée, des tableaux des Offices criblés d'éclats. Un olivier et une plaque gardent la mémoire de la famille Nencioni."
        },
        {
          heure: "16h30 → 19h00", titre: "Fin d'après-midi",
          options: [
            { titre: "Coucher de soleil à San Miniato", tags: ["vue", "calme"], reco: true, lieux: ["sanniccolo", "sanminiato", "piazzalemichelangelo"],
              texte: "Ponte alle Grazie → San Niccolò → montée par la Porta San Miniato (30–40 min, ça grimpe). Le soleil se couche vers <b>18h40</b> : depuis le parvis de San Miniato, plus calme que le Piazzale juste en dessous. Si les moines chantent les <b>vêpres grégoriennes</b> en fin d'après-midi, entrez : moment rare (horaire affiché à l'église)." },
            { titre: "Pause, puis apéro à Santo Spirito", tags: ["vin", "calme"], lieux: ["santospirito", "buchette"], restos: ["santino", "babae"],
              texte: "Repos au logement, puis l'Oltrarno : à <b>19h, la buchetta de Babae</b> sert un verre à travers sa fenêtre à vin (19h–20h). Ensuite Il Santino, ou un verre sur les marches de la piazza Santo Spirito avec les Florentins." },
            { titre: "S'il pleut : Palazzo Vecchio", tags: ["pluie", "medicis"], lieux: ["palazzovecchio"],
              texte: "Ouvert jusqu'à 19h le dimanche. Mais après 3h d'Offices, ça fait beaucoup : à garder plutôt pour lundi." }
          ]
        },
        {
          heure: "~20h00", titre: "Dîner (le dimanche, moins de choix)",
          options: [
            { titre: "Fuori Porta en redescendant", tags: ["vin"], reco: true, restos: ["fuoriporta"],
              texte: "Si vous êtes à San Miniato : on redescend directement à San Niccolò. Ouvert le dimanche jusqu'à 23h30. (Si vous y êtes allés samedi, prenez l'option suivante.)" },
            { titre: "Planches et vins à Santo Spirito", tags: ["vin", "pas-cher"], restos: ["santino"],
              texte: "Il Santino : charcuteries, fromages, crostoni, petits plats. Ouvert tous les jours." },
            { titre: "Pizza", tags: ["pas-cher"], restos: ["gustapizza"],
              texte: "Gusta Pizza (ouvert le dimanche), à manger sur place ou sur les marches de Santo Spirito." }
          ]
        },
        {
          heure: "Soirée", titre: "Balade de nuit",
          options: [
            { titre: "Florence illuminée depuis le Piazzale", tags: ["vue"], lieux: ["piazzalemichelangelo"],
              texte: "Si vous êtes encore de ce côté : toute la ville éclairée à vos pieds, la coupole en orange. Puis redescendre par les rampes de Poggi." },
            { titre: "Santo Spirito → Santa Trinita → Signoria", tags: ["calme"], reco: true, lieux: ["santospirito", "santatrinita"],
              texte: "La place s'anime le soir. Rentrer par la via Maggio (les palais des banquiers), le Ponte Santa Trinita et la via Por Santa Maria." }
          ]
        }
      ]
    },

    {
      id: "lun", court: "Lun 12", date: "2026-10-12",
      titre: "La Florence des Florentins + le campanile",
      intro: "Lundi, les grands musées d'État sont fermés (Offices, Accademia, Pitti, Bargello, Chapelles Médicis). C'est le jour des marchés, des quartiers, du Palazzo Vecchio et du campanile en fin de journée. La cathédrale ferme à 15h45 : si vous voulez y entrer, c'est avant le campanile.",
      creneaux: [
        {
          heure: "9h30 → 12h00", titre: "Matinée",
          options: [
            { titre: "Marché de Sant'Ambrogio + Santa Croce", tags: ["calme", "incontournable"], reco: true, lieux: ["santambrogio", "santacroce"],
              texte: "Le <b>vrai marché des Florentins</b> (lun–sam 7h–14h) : primeurs dehors, bouchers et fromagers sous la halle. Puis la <b>basilique Santa Croce</b> (ouvre 9h30, ~1h) : Michel-Ange, Galilée, Machiavel, et les chapelles de Giotto." },
            { titre: "La cathédrale sans attendre", tags: ["incontournable"], lieux: ["duomo", "museoopera"],
              texte: "Intérieur du Duomo (gratuit, 10h15–15h45, file plus courte en semaine), puis le <b>musée de l'Opera del Duomo</b> (inclus dans le Giotto Pass) : les vraies portes du Paradis et la Pietà que Michel-Ange a voulu détruire." },
            { titre: "Artisans d'Oltrarno + Brancacci", tags: ["calme", "art"], lieux: ["sanfrediano", "brancacci"],
              texte: "Flânerie à San Frediano parmi les ateliers, puis les fresques de Masaccio à la <b>Cappella Brancacci</b> (lundi ouvert 10h–17h, <b>réservation obligatoire</b>, 30 min)." }
          ],
          chemin: "De la via dei Neri à Sant'Ambrogio (12 min) : piazza Santa Croce, puis la via de' Macci. Sur la façade du <b>Palazzo dell'Antella</b> (côté droit de la place, la façade peinte), cherchez le <b>disque de marbre de 1565</b> : il marque la ligne médiane du terrain du <b>calcio storico</b>, le football-rugby en costumes qui se joue encore ici chaque juin."
        },
        {
          heure: "12h00 → 13h45", titre: "Déjeuner",
          options: [
            { titre: "Au comptoir du marché", tags: ["pas-cher", "calme"], reco: true, restos: ["darocco"],
              texte: "<b>Da Rocco</b>, dans la halle de Sant'Ambrogio : ribollita, polpette, plat du jour, 15–20 € avec un verre. Arriver à 12h pile, tables partagées, cash." },
            { titre: "La bistecca à midi (moins chère qu'au dîner)", tags: ["incontournable"], restos: ["mario"],
              texte: "<b>Trattoria Mario</b>, derrière le Mercato Centrale, depuis 1953 : la cantine des Florentins, bistecca de compétition. Faire la queue vers 11h45, cash, pas de réservation. Dans ce cas, prenez autre chose qu'une bistecca le soir." },
            { titre: "Pizza napolitaine de quartier", tags: ["pas-cher"], restos: ["pizzaiuolo"],
              texte: "<b>Il Pizzaiuolo</b>, via de' Macci, à 2 min du marché. Réserver (+39 055 241171)." }
          ]
        },
        {
          heure: "14h00 → 16h15", titre: "Début d'après-midi",
          options: [
            { titre: "Palazzo Vecchio", tags: ["medicis", "incontournable", "pluie"], reco: true, lieux: ["palazzovecchio"],
              texte: "Ouvert le lundi 9h–19h, 12–15 €, 1h30. Le cœur des intrigues : la cellule de Cosimo l'Ancien, le Salone dei Cinquecento (et le Léonard peut-être caché derrière), le Studiolo secret de François Ier. Tour d'Arnolfo jusqu'à 17h (fermée s'il pleut)." },
            { titre: "Palazzo Medici Riccardi", tags: ["medicis", "calme", "pluie"], lieux: ["medicicriccardi"],
              texte: "La maison où Laurent le Magnifique a grandi. La <b>chapelle des Mages</b> de Gozzoli, où toute la famille Médicis défile en cortège. Ouvert lundi, ~15 €, 1h. Beaucoup moins de monde." },
            { titre: "Flânerie + intérieur du Duomo", tags: ["calme"], lieux: ["duomo", "orsanmichele"],
              texte: "Café, balade, et l'intérieur de la cathédrale <b>avant 15h45</b> (gratuit). Rien d'autre : vous gardez les jambes pour les 414 marches." }
          ]
        },
        {
          heure: "16h30 → 18h45", titre: "Le campanile au soleil couchant", resa: "Giotto Pass · tour vers 16h30–17h — À RÉSERVER",
          options: [
            { titre: "Campanile + baptistère", tags: ["vue", "incontournable"], reco: true, lieux: ["campanile", "battistero", "museoopera"],
              texte: "Se présenter 10 min avant le créneau. 414 marches, trois paliers pour souffler, 45 min–1h aller-retour. Vue sur la coupole à hauteur d'yeux, lumière dorée. En redescendant : le <b>baptistère</b> (ouvert jusqu'à 19h30) et, s'il reste de l'énergie, le musée de l'Opera (jusqu'à 19h)." }
          ]
        },
        {
          heure: "19h00", titre: "Apéro",
          options: [
            { titre: "Le bar à vin des connaisseurs", tags: ["vin"], reco: true, restos: ["volpi"],
              texte: "<b>Le Volpi e l'Uva</b>, juste après le Ponte Vecchio : 45 vins au verre de petits producteurs, fromages et crostini. Ferme à 21h, donc parfait avant dîner." },
            { titre: "Un verre avec vue sur le Ponte Vecchio", tags: ["vue", "plus-cher"], restos: ["signorvino"],
              texte: "<b>Signorvino</b>, via de' Bardi : terrasse au ras de l'Arno face au Ponte Vecchio. Chaîne, mais la vue est imbattable." }
          ]
        },
        {
          heure: "~20h00", titre: "Dîner : la bistecca alla fiorentina",
          options: [
            { titre: "I'Raddi, trattoria de quartier", tags: ["calme"], reco: true, restos: ["iraddi"],
              texte: "Oltrarno, rue tranquille, poutres et nappes. Bistecca ou peposo, cuisine du jour. Le meilleur rapport qualité-prix pour votre budget (30–55 €/pers.). <b>Réserver.</b>" },
            { titre: "Cammillo, l'institution", tags: ["plus-cher", "incontournable"], restos: ["cammillo"],
              texte: "Depuis 1945, borgo San Jacopo. Bistecca « sérieuse », service à l'ancienne. Plutôt 50–70 €/pers. Ouvert le lundi, fermé mardi et mercredi. <b>Réserver.</b>" },
            { titre: "Sostanza, le poulet au beurre de 1869", tags: ["plus-cher"], restos: ["sostanza"],
              texte: "Tables communes, murs couverts de photos, et deux plats culte : le <b>tortino d'artichauts</b> et le <b>pollo al burro</b>. Fermé le week-end, donc c'est lundi ou jamais. Réserver." }
          ],
          chemin: "La bistecca se vend <b>au poids</b> (45–60 €/kg, rarement moins de 1–1,2 kg pour deux) et se mange <b>saignante</b>, sans discussion. Un prix au kilo trop bas sur une ardoise devant un restaurant = piège à touristes."
        },
        {
          heure: "Soirée", titre: "Balade de nuit",
          options: [
            { titre: "Le Duomo de nuit", tags: ["incontournable", "calme"], reco: true, lieux: ["duomo", "annunziata"],
              texte: "Après 22h la piazza del Duomo se vide : le marbre blanc, vert et rose sous les projecteurs. Puis via dei Servi jusqu'à la piazza Santissima Annunziata, la plus harmonieuse de Florence, souvent déserte." },
            { titre: "Piazza della Repubblica et ses cafés", tags: ["calme"],
              texte: "Le carrousel, l'arc, les vieux cafés littéraires (Giubbe Rosse). Un dernier verre ou un digestif." }
          ]
        }
      ]
    },

    {
      id: "mar", court: "Mar 13", date: "2026-10-13",
      titre: "Dernière matinée, au choix",
      intro: "Check-out, une belle matinée, un bon déjeuner, et départ vers 15h30. Demandez à l'hôte de garder les valises jusqu'à 15h ; sinon il existe des consignes à la journée (Bounce, Radical Storage) autour du centre.",
      creneaux: [
        {
          heure: "9h30 → 12h30", titre: "Matinée",
          options: [
            { titre: "Jardins de Boboli", tags: ["calme", "medicis", "vue"], reco: true, lieux: ["boboli"],
              texte: "Ouverts dès 8h15, <b>10 € au guichet</b> le jour même (pas besoin de réserver). 1h30–2h : l'amphithéâtre, la grotte de Buontalenti, la fontaine du nain Morgante sur sa tortue, et la vue depuis le haut. Entrée par le Palazzo Pitti." },
            { titre: "La campagne en pleine ville", tags: ["calme", "vue"], lieux: ["costasangiorgio", "sanminiato"],
              texte: "Costa San Giorgio (la maison de Galilée) → Forte Belvedere → via di San Leonardo, entre murs et oliviers → <b>San Miniato</b> (ouvert 9h30–13h, gratuit). 2h, gratuit, ça monte. Si vous n'y êtes pas allés dimanche, c'est la belle alternative." },
            { titre: "S'il pleut : Bargello (+ Chapelles Médicis)", tags: ["pluie", "art", "medicis"], lieux: ["bargello", "cappellemedicee"],
              texte: "Le <b>Bargello</b> (ouvert mardi dès 8h15, 12 €, 1h30) : la prison où l'on pendait les conjurés, le David de Donatello, et les deux panneaux du concours de 1401 côte à côte. Si vous n'avez pas fait les Chapelles Médicis dimanche, elles sont ouvertes aussi." },
            { titre: "Fiesole, le village perché", tags: ["vue", "calme"], lieux: ["fiesole"],
              texte: "Bus 7 depuis la piazza San Marco (~25 min, 2 €). Théâtre romain, vue sur toute la vallée de l'Arno. 3–4h aller-retour : faisable si vous partez à 9h30 et déjeunez là-haut, mais ça fait un retour serré." }
          ]
        },
        {
          heure: "12h30 → 14h00", titre: "Dernier déjeuner",
          options: [
            { titre: "Pizza de l'Oltrarno", tags: ["pas-cher"], reco: true, restos: ["gustapizza"],
              texte: "Après Boboli, Gusta Pizza est à 5 min. Simple, rapide, très bon." },
            { titre: "Terrasse de Fuori Porta", tags: ["vin", "calme"], restos: ["fuoriporta"],
              texte: "Si vous redescendez de San Miniato : déjeuner face à la porte médiévale (mar–ven 12h–15h30)." },
            { titre: "Une dernière trattoria au centre", tags: ["incontournable"], restos: ["anticofattore", "vinivecchisapori"],
              texte: "Antico Fattore ou Vini e Vecchi Sapori, à 3–5 min du logement : pratique pour récupérer les valises." }
          ]
        },
        {
          heure: "14h00 → 15h30", titre: "Avant de partir",
          options: [
            { titre: "Dernier gelato et dernier café", tags: ["calme"], reco: true, restos: ["vivoli", "gelateriadeineri"],
              texte: "Vivoli (l'une des plus anciennes) ou la Gelateria dei Neri en bas de chez vous. Un dernier espresso au comptoir, debout, comme les Florentins." }
          ]
        },
        {
          heure: "15h30", titre: "Départ vers l'aéroport",
          options: [
            { titre: "Taxi forfaitaire", tags: ["calme"], reco: true,
              texte: "25 € en semaine en journée, porte à porte, 15–25 min. Avec les valises, c'est le plus simple. Viser l'aéroport vers 16h15 pour le vol de 18h." },
            { titre: "Tram T2", tags: ["pas-cher"],
              texte: "15 min à pied jusqu'à Unità (ou 20 min jusqu'à Alamanni), puis ~20 min de tram. ~2 €/pers." }
          ]
        }
      ]
    }
  ],

  /* ------------------------------------------------------------------ */
  lieux: {
    pontevecchio: {
      nom: "Ponte Vecchio", theme: "Ponts et places", zone: "Centre",
      resume: "Le pont aux bijoutiers, et le passage secret des Médicis au-dessus.",
      pourquoi: "C'est le symbole de Florence, et le seul pont épargné en 1944. Bondé en journée : traversez-le <b>de nuit</b> (samedi), boutiques fermées, et regardez-le surtout <b>depuis le Ponte Santa Trinita</b>.",
      histoires: [
        "Jusqu'en 1593, le pont était occupé par des <b>bouchers et des tanneurs</b> qui jetaient leurs déchets dans l'Arno. Le grand-duc Ferdinand Ier, qui passait au-dessus par son couloir privé, n'en supportait plus l'odeur : il les a expulsés et remplacés par des orfèvres. Ils y sont toujours.",
        "Le <b>couloir de Vasari</b>, au-dessus des boutiques, a été construit en <b>cinq mois</b> en 1565 pour le mariage de François Ier : les Médicis pouvaient aller du Palazzo Vecchio au Palazzo Pitti sans jamais se mêler au peuple. Côté Oltrarno, la famille Mannelli a refusé de démolir sa tour : le couloir la contourne sur des consoles. Regardez-le, c'est toujours visible.",
        "Août 1944 : les Allemands en retraite font sauter tous les ponts de Florence, sauf celui-ci. À la place, ils dynamitent les maisons médiévales des deux côtés pour bloquer l'accès. La via Por Santa Maria et la via Guicciardini ont été reconstruites après-guerre."
      ],
      regarder: ["Au milieu, le buste de Benvenuto Cellini, le plus célèbre orfèvre de la ville.", "Les petites fenêtres rondes du couloir, au-dessus des boutiques.", "Les boutiques en encorbellement, soutenues par des poutres au-dessus de l'eau."],
      pratique: { horaires: "Toujours accessible", prix: "Gratuit", duree: "10 min", moment: "La nuit, ou tôt le matin", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=yRc_YbhejXk", titre: "Pourquoi les Médicis ont transformé ce pont (EN)" },
      video2: { url: "https://www.youtube.com/watch?v=QNSh4V1MhYU", titre: "Les passages secrets du couloir de Vasari (EN)" },
      maps: "Ponte Vecchio, Firenze"
    },
    santatrinita: {
      nom: "Ponte Santa Trinita", theme: "Ponts et places", zone: "Centre",
      resume: "Le plus élégant des ponts, et la meilleure vue sur le Ponte Vecchio.",
      pourquoi: "Calme, et c'est d'ici qu'on a la carte postale du Ponte Vecchio, surtout la nuit.",
      histoires: [
        "Ses trois arches elliptiques (1569, Ammannati) ont une courbe si particulière qu'on soupçonne un dessin de <b>Michel-Ange</b>.",
        "Dynamité en 1944, il a été reconstruit à l'identique en 1958 avec ses pierres d'origine <b>repêchées dans l'Arno</b>, et des blocs neufs taillés dans la même carrière de Boboli.",
        "La statue du Printemps a été retrouvée sans sa tête. La ville a promis une récompense : la tête n'a été repêchée qu'en <b>1961</b>, et remise en place sous les applaudissements."
      ],
      regarder: ["Les quatre statues des saisons aux angles.", "Le Printemps : la ligne de recollage du cou."],
      pratique: { horaires: "Toujours", prix: "Gratuit", duree: "10 min", moment: "Nuit ou coucher du soleil", resa: "Non" },
      maps: "Ponte Santa Trinita, Firenze"
    },
    signoria: {
      nom: "Piazza della Signoria & Loggia dei Lanzi", theme: "Ponts et places", zone: "Centre",
      resume: "La place du pouvoir, un musée de sculptures en plein air.",
      pourquoi: "Tout s'est joué ici : les assemblées du peuple, les bûchers, les révoltes contre les Médicis. On y passe plusieurs fois par jour depuis votre logement.",
      histoires: [
        "Le 23 mai 1498, le moine <b>Savonarole</b>, qui avait fait brûler ici les « vanités » (miroirs, livres, tableaux) un an plus tôt, y est pendu puis brûlé. Une <b>plaque ronde dans le pavé</b>, devant la fontaine de Neptune, marque l'endroit. Chaque 23 mai, on y dépose des pétales de rose.",
        "Le <b>David</b> de Michel-Ange se dressait ici, devant le palais, de 1504 à 1873 (c'est une copie aujourd'hui). En 1527, pendant une émeute contre les Médicis, un banc jeté d'une fenêtre lui a cassé le bras en trois. Le jeune Vasari a ramassé les morceaux.",
        "Le Neptune d'Ammannati déplut tellement que les Florentins le surnommèrent « <b>il Biancone</b> » (le gros blanc) et chantaient : « Ammannato, Ammannato, che bel marmo hai rovinato ! » (quel beau marbre tu as gâché).",
        "Sous la Loggia, le <b>Persée</b> de Cellini (1554). Pendant la fonte, le métal figeait : Cellini, fiévreux, a jeté dans le four toute la vaisselle d'étain de sa maison. La statue est sortie entière."
      ],
      regarder: [
        "Sur la façade du Palazzo Vecchio, à droite de la porte, au coin : un <b>profil d'homme gravé dans la pierre</b>, « l'Importuno di Michelangelo ». La légende dit que Michel-Ange l'a gravé dans son dos, sans regarder, pour se débarrasser d'un bavard.",
        "L'arrière de la tête de Persée : Cellini y a caché son autoportrait (barbe et visage dans les cheveux du casque).",
        "La plaque de Savonarole dans le pavé, près de la fontaine."
      ],
      pratique: { horaires: "Toujours", prix: "Gratuit", duree: "20 min", moment: "La nuit ou avant 10h", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=1H-pDhiB9yo", titre: "Rick Steves : les lieux des Médicis (EN, court)" },
      maps: "Piazza della Signoria, Firenze"
    },
    palazzovecchio: {
      nom: "Palazzo Vecchio", theme: "Musées et palais", zone: "Centre",
      resume: "L'hôtel de ville depuis 700 ans, et le palais des intrigues.",
      pourquoi: "Le meilleur endroit pour les Médicis et leurs intrigues : chaque salle a son histoire de pouvoir, d'exil et de secrets. Ouvert le lundi, quand les autres musées sont fermés.",
      histoires: [
        "En 1433, <b>Cosimo l'Ancien</b>, l'homme le plus riche de Florence, est enfermé dans une petite cellule de la tour, l'« Alberghetto ». Craignant l'empoisonnement, il refuse de manger jusqu'à ce qu'un geôlier goûte ses plats. Il achète sa liberté, part en exil… et revient un an plus tard pour gouverner la ville pendant 30 ans. Savonarole occupera la même cellule avant son bûcher.",
        "Dans l'immense Salone dei Cinquecento, Léonard de Vinci avait commencé sa <b>Bataille d'Anghiari</b>. Soixante ans plus tard, Vasari a peint par-dessus. Sur sa fresque, un minuscule drapeau porte les mots « <b>Cerca trova</b> » (cherche et tu trouveras) : certains pensent que le Léonard est encore caché derrière.",
        "Le <b>Studiolo de François Ier</b> : une petite pièce sans fenêtre, entièrement peinte, où le prince alchimiste rangeait ses trésors derrière des panneaux secrets. Une porte dérobée mène à un escalier caché.",
        "La tour est volontairement décentrée : Arnolfo di Cambio l'a bâtie sur une tour plus ancienne, celle des Foraboschi, pour économiser."
      ],
      regarder: ["Le masque mortuaire de Dante.", "La salle des cartes géographiques et son immense globe.", "La cour de Michelozzo, peinte de vues de villes autrichiennes pour accueillir Jeanne d'Autriche."],
      pratique: { horaires: "Tous les jours 9h–19h, jeudi 9h–14h. Tour 9h–17h (fermée s'il pleut).", prix: "Musée ~12–15 € ; tour 13 €", duree: "1h30 (+45 min la tour)", moment: "Début d'après-midi", resa: "Non obligatoire. Visites « parcours secrets » sur réservation." },
      liens: [{ url: "https://ticketsmuseums.comune.fi.it/", texte: "Billetterie des musées civiques" }],
      video: { url: "https://www.youtube.com/watch?v=n5Xb9Ivcco0", titre: "Palazzo Vecchio : pourquoi c'est à voir (EN)" },
      video2: { url: "https://www.youtube.com/watch?v=TW5RMNY0Q7U", titre: "Les passages secrets du Palazzo Vecchio (EN)" },
      maps: "Palazzo Vecchio, Firenze"
    },
    offices: {
      nom: "Galerie des Offices (Uffizi)", theme: "Musées et palais", zone: "Centre",
      resume: "La plus grande collection de la Renaissance, à 2 minutes de chez vous.",
      pourquoi: "Botticelli, Léonard, Michel-Ange, Raphaël, Caravage dans un seul bâtiment. Réservé dimanche 13h45.",
      histoires: [
        "« Uffizi » veut dire « bureaux » : Vasari a construit le bâtiment en 1560 pour les <b>administrations</b> de Cosme Ier. Les collections ont pris l'étage du dessus.",
        "En 1737 meurt le dernier Médicis. Sa sœur, <b>Anna Maria Luisa</b>, signe le « Pacte de famille » : toutes les œuvres restent à Florence, pour toujours, « pour l'ornement de l'État et l'utilité du public ». Sans elle, la collection aurait fini à Vienne. Elle est enterrée aux Chapelles Médicis.",
        "La <b>Naissance de Vénus</b> : la tradition veut que Botticelli ait peint les traits de Simonetta Vespucci, la beauté de la ville, aimée de Julien de Médicis (tué en 1478). Botticelli a demandé à être enterré à ses pieds, à l'église d'Ognissanti. C'est le cas.",
        "La <b>Méduse</b> du Caravage est peinte sur un vrai bouclier de parade, offert aux Médicis. Le visage serait celui du peintre lui-même."
      ],
      regarder: [
        "Parcours conseillé : Giotto et Cimabue (salle 2) → <b>Botticelli</b> (salles 10–14) → l'Annonciation de <b>Léonard</b> → le <b>Tondo Doni</b> de Michel-Ange, sa seule peinture sur bois à Florence, dans le cadre qu'il a dessiné → Raphaël, Titien (Vénus d'Urbin) → <b>Caravage</b> et la Judith d'<b>Artemisia Gentileschi</b> au premier étage.",
        "Depuis le couloir du dernier étage, côté Arno : la vue sur le Ponte Vecchio et le couloir de Vasari.",
        "Le café sur le toit de la Loggia dei Lanzi."
      ],
      pratique: { horaires: "Mar–dim 8h15–18h30, fermé le lundi", prix: "29 € en prévente (réservé)", duree: "2h30–3h", moment: "Votre créneau : dim 13h45", resa: "✅ Réservé — code 6R325YDT" },
      video: { url: "https://www.youtube.com/watch?v=XBrAu6cBTN0", titre: "La Naissance de Vénus aux Offices (Smarthistory, EN)" },
      maps: "Galleria degli Uffizi, Firenze"
    },
    accademia: {
      nom: "Galleria dell'Accademia — le David", theme: "Musées et palais", zone: "San Marco",
      resume: "Le David, et les Prisonniers qui sortent du marbre.",
      pourquoi: "Aucune photo ne prépare à la taille (5,17 m) ni à la tension du regard. Réservé dimanche 8h15, la meilleure heure.",
      histoires: [
        "Le bloc de marbre, surnommé « <b>le Géant</b> », avait été abîmé et abandonné par deux sculpteurs pendant près de 40 ans. Michel-Ange, 26 ans, l'obtient en 1501 et en tire le David en trois ans.",
        "Le David n'est pas le vainqueur, mais <b>l'instant d'avant</b> le combat : sourcils froncés, fronde sur l'épaule. Pour la République florentine, c'était un message : le petit peuple libre qui tient tête aux tyrans (les Médicis venaient d'être chassés).",
        "Ses <b>mains et sa tête sont trop grandes</b> : la statue devait être placée en hauteur, sur la cathédrale. Vue d'en bas, les proportions se corrigent.",
        "Les <b>Prisonniers</b>, dans le couloir, sont inachevés : des corps qui semblent lutter pour sortir de la pierre. Michel-Ange disait que la statue est déjà dans le bloc, il suffit d'enlever le surplus."
      ],
      regarder: ["Les veines des mains et la tension de la jambe d'appui.", "Faites le tour : le profil gauche est le plus fort.", "Les Prisonniers avant ou après : la différence entre « fini » et « en train de naître »."],
      pratique: { horaires: "Mar–dim 8h15–18h50, fermé le lundi", prix: "24 € (réservé)", duree: "1h–1h15", moment: "Votre créneau : dim 8h15", resa: "✅ Réservé — B-ticket n° 24288201" },
      video: { url: "https://www.youtube.com/watch?v=QdlP8ai8trw", titre: "Le David et la République florentine (Smarthistory, EN)" },
      maps: "Galleria dell'Accademia, Via Ricasoli 58, Firenze"
    },
    duomo: {
      nom: "Cathédrale Santa Maria del Fiore", theme: "Duomo", zone: "Duomo",
      resume: "La coupole que personne ne savait construire.",
      pourquoi: "L'extérieur est l'un des plus beaux bâtiments du monde. L'intérieur, gratuit, est plus sobre : y aller pour la fresque de la coupole, l'horloge d'Uccello et l'histoire du meurtre de 1478.",
      histoires: [
        "Commencée en 1296, la cathédrale est restée <b>avec un trou</b> de 45 m au-dessus du chœur pendant des décennies : personne ne savait couvrir une telle portée. <b>Brunelleschi</b>, orfèvre de formation, a gagné le concours en 1418. Selon Vasari, il aurait défié ses rivaux de faire tenir un œuf debout ; personne n'y arrive, il casse la pointe et le pose. « On aurait pu le faire ! » — « Oui, et vous auriez su construire la coupole si je vous avais montré mon plan. »",
        "Sa coupole tient sans échafaudage porteur grâce à <b>deux coques</b> emboîtées et des briques posées <b>en arête de poisson</b>, qui se bloquent mutuellement pendant que le mortier sèche. Quatre millions de briques.",
        "26 avril 1478, messe de Pâques : la <b>conjuration des Pazzi</b>. Au signal de l'élévation, Julien de Médicis est poignardé 19 fois. Laurent, blessé au cou, s'enfuit dans la sacristie nord et ferme les lourdes portes de bronze. La vengeance sera terrible : les conjurés sont pendus aux fenêtres du Palazzo Vecchio.",
        "L'horloge de Paolo Uccello (1443), au-dessus de l'entrée, <b>tourne à l'envers</b> et compte 24 heures : la journée commençait au coucher du soleil."
      ],
      regarder: ["L'horloge d'Uccello au revers de la façade.", "Le Jugement dernier de Vasari et Zuccari à l'intérieur de la coupole.", "Le tableau de Dante tenant la Divine Comédie (mur gauche).", "Dehors, côté nord : la Porta della Mandorla, et un peu plus loin une tête de taureau sculptée en hauteur, l'objet d'une légende de mari trompé."],
      pratique: { horaires: "Lun–sam 10h15–15h45. Dimanche : seulement pour les messes.", prix: "Gratuit (file d'attente)", duree: "30–45 min", moment: "Lundi ou mardi en fin de matinée", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=_IOPlGPQPuM", titre: "Comment un amateur a construit la plus grande coupole du monde (EN)" },
      video2: { url: "https://www.youtube.com/watch?v=FNxa97pJzbk", titre: "L'assassinat de Julien de Médicis, 1478 (EN)" },
      maps: "Cattedrale di Santa Maria del Fiore, Firenze"
    },
    campanile: {
      nom: "Campanile de Giotto", theme: "Duomo", zone: "Duomo",
      resume: "414 marches, et la coupole juste en face.",
      pourquoi: "Remplace la coupole (complète) : on monte moins haut, mais on a la coupole <b>dans la vue</b>, ce qui est mieux pour la photo. En fin de journée, la lumière dorée sur les toits.",
      histoires: [
        "<b>Giotto</b>, le peintre, nommé architecte de la ville à près de 70 ans, n'a vu que le premier niveau : il meurt en 1337. Andrea Pisano puis Francesco Talenti achèvent la tour, qui monte à 84,7 m.",
        "Les bas-reliefs du bas racontent l'histoire de l'humanité par les métiers : le tissage, la navigation, l'astronomie… et Dédale qui vole. Ce sont des copies : les originaux sont au musée de l'Opera.",
        "Depuis mars 2026, la tour subit sa <b>première restauration complète</b> en 700 ans (environ 4 ans), de haut en bas."
      ],
      regarder: ["Les marbres blanc (Carrare), vert (Prato) et rose (Maremme).", "Au sommet, la vue à hauteur du tambour de la coupole et des gens qui sont dessus."],
      pratique: { horaires: "Tous les jours 8h15–18h45 (dernier créneau)", prix: "Giotto Pass 20 € (tour + baptistère + musée + crypte)", duree: "45 min–1h", moment: "Lun 12 vers 16h30–17h", resa: "🟡 À réserver — créneau fixe" },
      liens: [{ url: "https://tickets.duomo.firenze.it/en/", texte: "Réserver le Giotto Pass (officiel)" }],
      maps: "Campanile di Giotto, Firenze"
    },
    battistero: {
      nom: "Baptistère Saint-Jean", theme: "Duomo", zone: "Duomo",
      resume: "Les portes du Paradis, et le concours qui a lancé la Renaissance.",
      pourquoi: "Le plus vieux bâtiment de la place. Inclus dans le Giotto Pass. Les portes se regardent dehors, gratuitement, à toute heure.",
      histoires: [
        "Dante y a été baptisé et l'appelle « mon beau San Giovanni ». Tous les Florentins l'ont été pendant des siècles.",
        "En 1401, concours pour les portes nord : <b>Ghiberti</b>, 23 ans, bat <b>Brunelleschi</b>. Vexé, Brunelleschi part à Rome étudier les ruines antiques… et en revient avec ce qu'il faut pour construire la coupole. Les deux panneaux du concours sont au Bargello, côte à côte.",
        "Ghiberti a passé 27 ans sur les portes est. <b>Michel-Ange</b> les aurait trouvées dignes d'être « les portes du Paradis ». Le nom est resté. Celles du dehors sont des copies, les originales sont au musée."
      ],
      regarder: ["Dans le cadre des portes du Paradis, Ghiberti a glissé son autoportrait : un petit crâne chauve qui vous regarde.", "La coupole de mosaïques (en restauration : en partie cachée pour plusieurs années)."],
      pratique: { horaires: "Tous les jours 8h30–19h30 environ", prix: "Inclus dans le Giotto Pass", duree: "20–30 min", moment: "Après le campanile", resa: "Avec le pass" },
      video: { url: "https://www.youtube.com/watch?v=fWkewBPMKEk", titre: "Ghiberti, les portes du Paradis (Smarthistory, EN)" },
      maps: "Battistero di San Giovanni, Firenze"
    },
    museoopera: {
      nom: "Musée de l'Opera del Duomo", theme: "Duomo", zone: "Duomo",
      resume: "Les originaux, à hauteur d'yeux.",
      pourquoi: "Sous-estimé et inclus dans le Giotto Pass : les vraies portes du Paradis, la Madeleine de Donatello, les outils de Brunelleschi et une Pietà de Michel-Ange.",
      histoires: [
        "La <b>Pietà Bandini</b> : Michel-Ange, près de 80 ans, la sculptait pour son propre tombeau. Insatisfait, il l'a attaquée au marteau. Le Nicodème qui soutient le Christ a son visage.",
        "La salle de la façade reconstitue la façade médiévale de la cathédrale, démolie en 1587 et restée nue jusqu'en 1887."
      ],
      regarder: ["La Marie-Madeleine en bois de Donatello, décharnée.", "Le masque mortuaire de Brunelleschi et ses machines de levage."],
      pratique: { horaires: "Tous les jours 8h30–19h (fermé le 1er mardi du mois)", prix: "Inclus dans le Giotto Pass", duree: "1h", moment: "Lundi matin ou après le campanile", resa: "Avec le pass" },
      maps: "Museo dell'Opera del Duomo, Firenze"
    },
    cappellemedicee: {
      nom: "Chapelles Médicis", theme: "Musées et palais", zone: "San Lorenzo",
      resume: "Le mausolée des Médicis, et Michel-Ange à son plus sombre.",
      pourquoi: "Deux mondes : la chapelle des Princes, démesurée, en marbres et pierres précieuses, et la Nouvelle Sacristie, sobre, avec les quatre allégories de Michel-Ange. Fermé le lundi : dimanche ou mardi.",
      histoires: [
        "La <b>chapelle des Princes</b> a été conçue pour accueillir… le Saint-Sépulcre de Jérusalem, que les Médicis espéraient faire voler. Le projet a échoué ; ils y sont enterrés eux-mêmes.",
        "Dans la Nouvelle Sacristie, la <b>Nuit</b>, le <b>Jour</b>, l'<b>Aurore</b> et le <b>Crépuscule</b>. Un poète avait écrit que la Nuit semblait si vivante qu'il suffisait de la réveiller. Michel-Ange, qui détestait les Médicis revenus au pouvoir, fait répondre la statue : « Il m'est doux de dormir, et plus encore d'être de pierre, tant que durent la honte et le malheur. »",
        "Laurent le Magnifique, le plus grand des Médicis, est enterré là, dans un simple sarcophage sous la Vierge de Michel-Ange, sans monument.",
        "En 1530, Michel-Ange, recherché après le siège de Florence, se serait caché dans une <b>pièce secrète</b> sous la sacristie, dont il a couvert les murs de dessins au charbon (visite spéciale, sur réservation, très limitée)."
      ],
      regarder: ["La mosaïque de pierres dures des armoiries des villes toscanes dans la chapelle des Princes.", "L'inachevé : les visages du Jour et de l'Aurore."],
      pratique: { horaires: "Mar–dim 8h15–18h50, fermé le lundi", prix: "11 € (réservation facultative +4 €)", duree: "1h", moment: "Dimanche matin ou mardi", resa: "Non obligatoire" },
      video: { url: "https://www.youtube.com/watch?v=5gVlGU4zUeY", titre: "Michel-Ange, la Nouvelle Sacristie (Smarthistory, EN)" },
      maps: "Cappelle Medicee, Piazza di Madonna degli Aldobrandini, Firenze"
    },
    sanlorenzo: {
      nom: "San Lorenzo et son quartier", theme: "Quartiers", zone: "San Lorenzo",
      resume: "L'église paroissiale des Médicis, à la façade restée nue.",
      pourquoi: "On y passe pour les Chapelles Médicis et le Mercato Centrale. La façade de briques brutes est une histoire en soi.",
      histoires: [
        "Le pape Léon X (un Médicis) commande la façade à <b>Michel-Ange</b> en 1516. Il passe des années à faire extraire du marbre à Carrare… puis le contrat est annulé. La façade n'a jamais été faite. On peut voir sa maquette en bois à la Casa Buonarroti.",
        "Cosimo l'Ancien est enterré dans la crypte, juste sous le centre de l'église, avec l'inscription « Pater Patriae », père de la patrie."
      ],
      regarder: ["La façade de briques brutes.", "Les étals de cuir autour : beaucoup de qualité médiocre, à regarder plus qu'à acheter."],
      pratique: { horaires: "Basilique lun–sam 10h–17h30, fermée le dimanche", prix: "Payant (quelques euros)", duree: "Passage", moment: "Matin", resa: "Non" },
      maps: "Basilica di San Lorenzo, Firenze"
    },
    medicicriccardi: {
      nom: "Palazzo Medici Riccardi", theme: "Musées et palais", zone: "San Lorenzo",
      resume: "La maison des Médicis, et leur portrait de famille en cortège.",
      pourquoi: "Moins connu, donc calme. La minuscule chapelle des Mages vaut à elle seule la visite : un cortège plein de Médicis, à 1 m de vous. Ouvert le lundi.",
      histoires: [
        "Cosimo l'Ancien avait demandé un projet à Brunelleschi. Il le trouve trop somptueux : « L'envie est une plante qu'il ne faut pas arroser. » Il choisit Michelozzo et une façade austère. Le pouvoir des Médicis, c'était de ne pas en avoir l'air.",
        "Dans la <b>chapelle des Mages</b> de Benozzo Gozzoli (1459), le cortège des Rois mages traverse la Toscane. On y reconnaît les Médicis, l'empereur de Byzance venu au concile de Florence, et un jeune garçon sur un cheval blanc qu'on identifie traditionnellement à <b>Laurent</b>, 10 ans. Gozzoli s'est peint dans la foule, avec sa signature sur son bonnet."
      ],
      regarder: ["Les « fenêtres agenouillées » au rez-de-chaussée, dessinées par Michel-Ange.", "Les anneaux et porte-torches en fer forgé de la façade."],
      pratique: { horaires: "Tous les jours 9h–19h sauf mercredi", prix: "~15 € jusqu'au 1er novembre", duree: "1h", moment: "Lundi après-midi", resa: "Non" },
      maps: "Palazzo Medici Riccardi, Via Cavour 3, Firenze"
    },
    mercatocentrale: {
      nom: "Mercato Centrale", theme: "Marchés", zone: "San Lorenzo",
      resume: "Une halle de fer et de verre : marché en bas, food court en haut.",
      pourquoi: "Le rez-de-chaussée reste un vrai marché (fermé le dimanche). L'étage est un food court touristique mais pratique, ouvert tous les jours. Pour l'ambiance locale, Sant'Ambrogio est mieux.",
      histoires: [
        "Construite en 1874 par Giuseppe Mengoni, l'architecte de la galerie Victor-Emmanuel de Milan, quand Florence était capitale de l'Italie. Mengoni est mort en tombant de l'échafaudage de sa galerie milanaise, la veille de l'inauguration."
      ],
      regarder: ["Au rez-de-chaussée, le comptoir de Nerbone (depuis 1872) et son panino al bollito."],
      pratique: { horaires: "Étage : tous les jours. Rez-de-chaussée : lun–sam matin", prix: "Food court 10–20 €", duree: "30 min", moment: "Fin de matinée", resa: "Non" },
      maps: "Mercato Centrale, Firenze"
    },
    santambrogio: {
      nom: "Marché de Sant'Ambrogio", theme: "Marchés", zone: "Santa Croce",
      resume: "Le marché où font leurs courses les Florentins.",
      pourquoi: "Exactement ce que vous aimez : de l'animation locale, aucun car de touristes, et l'un des meilleurs déjeuners pas chers de la ville (Da Rocco). Lundi matin.",
      histoires: [
        "Halle en fonte de 1873, sur la piazza Ghiberti. Dehors, les maraîchers des environs ; dedans, bouchers, tripiers, fromagers.",
        "Règle non écrite : on <b>ne touche pas</b> les fruits et légumes. On montre, le marchand choisit et vous sert."
      ],
      regarder: ["Les tripiers : lampredotto, trippa, et les têtes de veau.", "L'église Sant'Ambrogio, à côté, avec son miracle eucharistique de 1230."],
      pratique: { horaires: "Lun–sam 7h–14h, fermé le dimanche", prix: "Gratuit", duree: "30–45 min", moment: "Vers 10h–11h", resa: "Non" },
      maps: "Mercato di Sant'Ambrogio, Piazza Lorenzo Ghiberti, Firenze"
    },
    santacroce: {
      nom: "Basilique Santa Croce", theme: "Églises", zone: "Santa Croce",
      resume: "Le panthéon des génies italiens.",
      pourquoi: "À 3 minutes de chez vous. Tombeaux de Michel-Ange, Galilée, Machiavel, Rossini, fresques de Giotto, et la chapelle des Pazzi de Brunelleschi. Le quartier autour est vivant et peu touristique.",
      histoires: [
        "<b>Galilée</b>, condamné par l'Église, n'a d'abord pas eu droit à un tombeau : il a attendu près d'un siècle dans un réduit. Lors de son transfert en 1737, des admirateurs lui ont prélevé trois doigts et une dent. Son <b>majeur</b> est exposé au Museo Galileo, pointé vers le ciel.",
        "Le tombeau de <b>Dante</b> est vide. Exilé par Florence, il est mort à Ravenne, qui refuse depuis 700 ans de rendre le corps. Florence lui a fait un cénotaphe… et une statue géante sur la place.",
        "En 1817, Stendhal sort de Santa Croce le cœur battant, au bord de l'évanouissement devant tant de beauté : c'est l'origine du « <b>syndrome de Stendhal</b> ».",
        "En 1966, l'eau est montée à près de 5 m dans la basilique. Le grand Crucifix de Cimabue, englouti, est devenu le symbole des « anges de la boue », ces volontaires venus du monde entier sauver les œuvres."
      ],
      regarder: ["La plaque du niveau de 1966, sur un pilier.", "Le tombeau de Michel-Ange, face à Santa Croce comme il l'avait voulu : il voulait voir la coupole en sortant de son tombeau au Jugement dernier.", "Sur la place : le disque de marbre de 1565 sur la façade peinte du Palazzo dell'Antella (calcio storico)."],
      pratique: { horaires: "Lun–sam 9h30–17h30, dim 12h30–17h30", prix: "~10 €", duree: "1h", moment: "Lundi 9h30 ou fin d'après-midi", resa: "Non (billetterie en ligne possible)" },
      liens: [{ url: "https://www.santacroceopera.it/en/", texte: "Site officiel" }],
      video: { url: "https://www.youtube.com/watch?v=cpcM38xnX_E", titre: "Les tombeaux de Santa Croce (EN)" },
      maps: "Basilica di Santa Croce, Firenze"
    },
    bargello: {
      nom: "Bargello", theme: "Musées et palais", zone: "Centre",
      resume: "L'ancienne prison, devenue le plus beau musée de sculpture.",
      pourquoi: "Moins de monde que les Offices, et des histoires de potence. Le David de Donatello et les deux panneaux du concours de 1401. Fermé lundi.",
      histoires: [
        "Palais du <b>Podestà</b>, puis siège du chef de la police (le « bargello ») et prison. On exécutait dans la cour, jusqu'à ce que le grand-duc Pierre-Léopold abolisse la peine de mort en 1786 — la Toscane est le premier État au monde à le faire.",
        "Après la conjuration des Pazzi, <b>Botticelli</b> est payé pour peindre les conjurés pendus sur la façade, en guise d'avertissement. <b>Léonard de Vinci</b> a dessiné Bernardo Baroncelli, l'assassin de Julien, pendu ici en 1479 (le dessin est à Bayonne).",
        "<b>Machiavel</b> y a été torturé à l'estrapade en 1513, soupçonné de complot contre les Médicis. Libéré, il écrit Le Prince… et le dédie à un Médicis.",
        "Le <b>David en bronze de Donatello</b> (vers 1440) : le premier nu en pied depuis l'Antiquité. Un adolescent au chapeau de berger, presque provocant."
      ],
      regarder: ["Les deux panneaux du sacrifice d'Isaac de Ghiberti et Brunelleschi, côte à côte : à vous de juger le concours de 1401.", "Les blasons des podestats dans la cour.", "Le Bacchus ivre de Michel-Ange."],
      pratique: { horaires: "Mar–dim 8h15–18h50, fermé le lundi", prix: "12 €", duree: "1h30", moment: "Mardi matin (ou si pluie)", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=6kUUJJV_MNA", titre: "Le David de Donatello (Smarthistory, EN)" },
      maps: "Museo Nazionale del Bargello, Firenze"
    },
    orsanmichele: {
      nom: "Orsanmichele", theme: "Églises", zone: "Centre",
      resume: "Un grenier à blé devenu église, et les statues des corporations.",
      pourquoi: "Sur votre chemin entre la Signoria et le Duomo. Une minute de détour pour les niches extérieures.",
      histoires: [
        "Au départ, c'était le <b>marché aux grains</b>. Une image de la Vierge peinte sur un pilier faisant des miracles, on en a fait une église, et on a stocké le grain à l'étage. Dans les piliers, on voit encore les <b>goulottes</b> par lesquelles le blé descendait.",
        "Chaque <b>corporation</b> (laine, soie, banquiers, médecins…) devait orner une niche extérieure de la statue de son saint. Elles se sont fait concurrence en payant Donatello, Ghiberti, Verrocchio : c'est une compétition artistique en plein air."
      ],
      regarder: ["Les armoiries des corporations en céramique de della Robbia au-dessus des niches.", "Saint Georges de Donatello (copie) côté via de' Calzaiuoli."],
      pratique: { horaires: "Église : extérieur toujours visible ; intérieur horaires variables (fermé le mardi)", prix: "Gratuit", duree: "10 min", moment: "En passant", resa: "Non" },
      maps: "Orsanmichele, Firenze"
    },
    mercatonuovo: {
      nom: "Mercato Nuovo et le Porcellino", theme: "Marchés", zone: "Centre",
      resume: "Le sanglier porte-bonheur et la pierre de la honte.",
      pourquoi: "Touristique, mais 5 minutes suffisent, et le chariot de lampredotto à côté est une vraie adresse.",
      histoires: [
        "Frottez le museau du <b>Porcellino</b> (le sanglier de bronze) et glissez une pièce dans sa gueule : si elle tombe dans la grille, vous reviendrez à Florence.",
        "Au centre de la loggia, une roue de marbre : la « <b>pietra dello scandalo</b> ». Les commerçants en faillite y étaient fessés, pantalons baissés, devant tout le monde. D'où l'expression italienne « rimanere in braghe di tela » (rester en caleçon)."
      ],
      regarder: ["Le museau du sanglier, doré par des millions de mains.", "La roue de marbre au sol."],
      pratique: { horaires: "Toujours (stands en journée)", prix: "Gratuit", duree: "10 min", moment: "En passant", resa: "Non" },
      maps: "Loggia del Mercato Nuovo, Firenze"
    },
    annunziata: {
      nom: "Piazza Santissima Annunziata", theme: "Ponts et places", zone: "San Marco",
      resume: "La place la plus harmonieuse, et la roue des enfants abandonnés.",
      pourquoi: "Calme, élégante, presque sans touristes, le soir comme le matin.",
      histoires: [
        "L'<b>Ospedale degli Innocenti</b> de Brunelleschi (1419) est considéré comme le premier bâtiment de la Renaissance. C'était un orphelinat : à gauche du portique, une petite fenêtre grillagée, la « <b>ruota</b> », permettait de déposer un nouveau-né anonymement. Beaucoup d'Italiens nommés Innocenti ou Esposito descendent de ces enfants.",
        "Les médaillons bleus d'Andrea della Robbia représentent des bébés emmaillotés. On les retrouve aujourd'hui comme logo de la pédiatrie italienne.",
        "Sur le socle de la statue de Ferdinand Ier, un essaim d'<b>abeilles</b> en cercle autour de la reine. Essayez de les compter : on dit qu'on n'y arrive jamais du premier coup."
      ],
      regarder: ["La ruota, à l'extrémité gauche du portique.", "Les abeilles du socle de la statue équestre."],
      pratique: { horaires: "Toujours", prix: "Gratuit", duree: "15 min", moment: "Matin ou nuit", resa: "Non" },
      maps: "Piazza della Santissima Annunziata, Firenze"
    },
    santospirito: {
      nom: "Piazza Santo Spirito (Oltrarno)", theme: "Quartiers", zone: "Oltrarno",
      resume: "La place où sortent les Florentins.",
      pourquoi: "Le meilleur endroit pour un apéro local, des bars simples, des gens assis sur les marches. Et une église de Brunelleschi avec un Michel-Ange de jeunesse.",
      histoires: [
        "La basilique Santo Spirito est le dernier projet de Brunelleschi. Sa façade est restée nue et plate : comme beaucoup d'églises de Florence, l'argent a manqué.",
        "À l'intérieur, un <b>crucifix en bois</b> sculpté par Michel-Ange à 17 ans. En remerciement, le prieur l'autorisait à étudier les cadavres de l'hôpital du couvent, de nuit. C'est là qu'il a appris l'anatomie."
      ],
      regarder: ["La façade nue, magnifique au coucher du soleil.", "Via Maggio : les palais des grandes familles, dont celui de Bianca Cappello, la maîtresse puis épouse de François Ier (morts tous les deux la même nuit, en 1587… empoisonnés ?)."],
      pratique: { horaires: "Place toujours accessible", prix: "Gratuit", duree: "—", moment: "Fin d'après-midi et soir", resa: "Non" },
      maps: "Piazza Santo Spirito, Firenze"
    },
    sanfrediano: {
      nom: "San Frediano", theme: "Quartiers", zone: "Oltrarno",
      resume: "Le quartier populaire des artisans.",
      pourquoi: "Ateliers de restaurateurs de meubles, doreurs, cordonniers, bistrots de quartier. Pour flâner sans plan.",
      histoires: [
        "Longtemps le quartier le plus pauvre de Florence, celui des tanneurs et des lavandières, raconté par Vasco Pratolini dans « Les Filles de San Frediano ».",
        "La <b>Porta San Frediano</b> a encore ses énormes vantaux en bois du XIVe siècle, avec leurs clous de fer."
      ],
      regarder: ["Les ateliers ouverts sur rue, via Toscanella, via dello Sprone, borgo San Frediano.", "La Porta San Frediano et un bout des remparts."],
      pratique: { horaires: "Ateliers : en semaine, journée", prix: "Gratuit", duree: "1h", moment: "Matin en semaine", resa: "Non" },
      maps: "Borgo San Frediano, Firenze"
    },
    brancacci: {
      nom: "Cappella Brancacci", theme: "Églises", zone: "Oltrarno",
      resume: "Les fresques où la peinture de la Renaissance est née.",
      pourquoi: "Masaccio y invente la perspective et le poids des corps en 1425. Petit, intense, 30 minutes. Réservation obligatoire, ouvert le lundi.",
      histoires: [
        "<b>Masaccio</b> meurt à 26 ans sans finir le cycle. Puis les Brancacci, ennemis des Médicis, sont exilés : les fresques restent inachevées 50 ans, et c'est Filippino Lippi qui les termine.",
        "Son <b>Adam et Ève chassés du Paradis</b> : Ève hurle, Adam cache son visage. Aucun peintre n'avait montré une telle douleur. Michel-Ange venait les copier jeune… et c'est ici qu'un rival, Torrigiano, lui a <b>cassé le nez</b> d'un coup de poing. Il en a gardé le profil aplati."
      ],
      regarder: ["Le Tribut : l'ombre portée des personnages, une révolution."],
      pratique: { horaires: "Lun et mer–sam 10h–17h, dim 13h–17h, fermé le mardi", prix: "10–15 €", duree: "30 min", moment: "Lundi", resa: "Obligatoire (10 pers. par créneau)" },
      liens: [{ url: "https://ticketsmuseums.comune.fi.it/4_cappella-brancacci/", texte: "Réserver (musées civiques)" }],
      video: { url: "https://www.youtube.com/watch?v=TPVeLWLbO9k", titre: "Masaccio à la chapelle Brancacci (Smarthistory, EN)" },
      maps: "Cappella Brancacci, Piazza del Carmine 14, Firenze"
    },
    boboli: {
      nom: "Jardins de Boboli (Palazzo Pitti)", theme: "Jardins et vues", zone: "Oltrarno",
      resume: "Le jardin des grands-ducs, grottes, statues et vue.",
      pourquoi: "Une matinée de flânerie, à l'ombre, avec des surprises à chaque allée. Pas besoin de réserver : 10 € au guichet le jour même.",
      histoires: [
        "Le banquier <b>Luca Pitti</b> voulait un palais plus grand que celui des Médicis. Il s'est ruiné en le construisant. Un siècle plus tard, en 1549, <b>Éléonore de Tolède</b>, l'épouse de Cosme Ier, rachète le palais… et y installe les Médicis.",
        "La <b>grotte de Buontalenti</b>, couverte de concrétions, de faux animaux et de stalactites, abritait les Prisonniers de Michel-Ange (aujourd'hui des copies ; les originaux sont à l'Accademia).",
        "La fontaine de Bacchus, à la sortie : c'est en réalité <b>Morgante</b>, le nain de la cour de Cosme Ier, nu, ventru, chevauchant une tortue."
      ],
      regarder: ["L'amphithéâtre et son obélisque égyptien.", "La Kaffeehaus et la vue sur la ville.", "Le jardin des Chevaliers en haut : vue sur les collines et les oliviers."],
      pratique: { horaires: "Tous les jours 8h15–18h30 en octobre (fermé 1er et dernier lundi du mois : pas le 13)", prix: "10 € sur place, 13 € en ligne", duree: "1h30–2h", moment: "Mardi matin", resa: "Non" },
      liens: [{ url: "https://www.uffizi.it/en/boboli-garden", texte: "Infos officielles" }],
      maps: "Giardino di Boboli, Firenze"
    },
    costasangiorgio: {
      nom: "Costa San Giorgio → Forte Belvedere", theme: "Jardins et vues", zone: "Oltrarno",
      resume: "La campagne toscane en pleine ville.",
      pourquoi: "Une ruelle qui monte entre de hauts murs, puis des oliviers, des villas et le silence, à 10 minutes du Ponte Vecchio. Gratuit.",
      histoires: [
        "Au n° 19 de la Costa San Giorgio, une plaque : la maison de <b>Galilée</b>.",
        "Le <b>Forte Belvedere</b> (1590) a officiellement été construit pour défendre la ville. En réalité, ses canons visaient aussi… Florence elle-même, au cas où le peuple se soulèverait contre les Médicis. On dit que le trésor des grands-ducs y était caché.",
        "La via di San Leonardo, avec ses murs de pierre et ses oliviers, c'est la Toscane des tableaux, sans quitter la ville."
      ],
      regarder: ["La plaque de Galilée.", "La petite église San Leonardo in Arcetri et sa chaire romane."],
      pratique: { horaires: "Rues toujours ouvertes (le fort, lui, a des ouvertures variables)", prix: "Gratuit", duree: "1h30–2h jusqu'à San Miniato", moment: "Matin", resa: "Non" },
      maps: "Costa San Giorgio, Firenze"
    },
    sanminiato: {
      nom: "San Miniato al Monte", theme: "Jardins et vues", zone: "Oltrarno",
      resume: "La plus belle église, et la plus belle vue, au-dessus de tout.",
      pourquoi: "Plus calme que le Piazzale Michelangelo juste en dessous, avec une vue plus large. L'intérieur, roman, est l'un des plus beaux de Florence. Gratuit.",
      histoires: [
        "<b>Minias</b>, un prince arménien chrétien, aurait été décapité vers 250 près de l'Arno. La légende dit qu'il a ramassé sa tête, traversé le fleuve et marché jusqu'ici, où il s'est assis pour mourir.",
        "En 1529, pendant le siège de Florence, <b>Michel-Ange</b> dirigeait les fortifications. Le campanile servait de poste d'artillerie : pour le protéger des boulets, il le fit envelopper de <b>matelas</b> de laine.",
        "Les moines olivétains y chantent encore les offices en grégorien, et vendent leur miel et leurs liqueurs à la boutique.",
        "Dans le cimetière des Porte Sante repose Carlo Collodi, l'auteur de <b>Pinocchio</b>."
      ],
      regarder: ["Le pavement de 1207 avec les signes du zodiaque.", "L'aigle doré au sommet de la façade : le symbole de la corporation des marchands de laine, qui finançait l'église."],
      pratique: { horaires: "Lun–sam ~9h30–13h et 15h–19h, dim dès 8h15 (horaires variables)", prix: "Gratuit", duree: "30 min + la vue", moment: "Coucher du soleil (~18h40)", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=ZT2wW1O16IQ", titre: "San Miniato al Monte (EN)" },
      maps: "Basilica di San Miniato al Monte, Firenze"
    },
    piazzalemichelangelo: {
      nom: "Piazzale Michelangelo", theme: "Jardins et vues", zone: "Oltrarno",
      resume: "Le balcon de Florence.",
      pourquoi: "La vue est spectaculaire, mais le parvis est bondé au coucher du soleil. Mieux : coucher du soleil à San Miniato, puis descendre ici à la nuit tombée, quand la ville s'allume.",
      histoires: [
        "Créé en 1869 par Giuseppe Poggi, quand Florence était la capitale de l'Italie et se donnait des airs de Paris. Il devait accueillir un musée Michel-Ange, jamais fait : le bâtiment est devenu une loggia-restaurant.",
        "Le David de bronze au centre est une copie, posée en 1873."
      ],
      regarder: ["De gauche à droite : Santa Croce, le Palazzo Vecchio, la coupole, le campanile, et derrière, Fiesole sur sa colline."],
      pratique: { horaires: "Toujours", prix: "Gratuit", duree: "20 min", moment: "Juste après le coucher du soleil", resa: "Non" },
      maps: "Piazzale Michelangelo, Firenze"
    },
    sanniccolo: {
      nom: "San Niccolò", theme: "Quartiers", zone: "Oltrarno",
      resume: "Le petit quartier au pied de la colline.",
      pourquoi: "Des bars et des trattorias de quartier, des ruelles, et la seule porte de ville restée à sa hauteur d'origine.",
      histoires: [
        "La <b>Porta San Niccolò</b> (1324) est la seule porte de Florence qui n'a pas été rabotée au XVIe siècle : les autres ont été coupées pour que les canons puissent tirer par-dessus."
      ],
      regarder: ["La Porta San Niccolò, puis les rampes de Poggi qui montent au Piazzale.", "La Porta San Miniato, minuscule, dans les remparts."],
      pratique: { horaires: "Toujours", prix: "Gratuit", duree: "—", moment: "Fin de journée", resa: "Non" },
      maps: "Porta San Niccolò, Firenze"
    },
    fiesole: {
      nom: "Fiesole", theme: "Hors de la ville", zone: "Fiesole",
      resume: "Le village étrusque perché au-dessus de Florence.",
      pourquoi: "Une demi-journée hors de la ville, au calme, avec un théâtre romain et la vue sur toute la vallée. Plutôt si vous avez envie de nature et de recul.",
      histoires: [
        "Fiesole est <b>plus ancienne que Florence</b> : une ville étrusque. Les Romains ont fondé Florentia en contrebas en 59 av. J.-C. Pendant des siècles, les deux villes se sont détestées, jusqu'à ce que Florence rase Fiesole en 1125.",
        "Sur le mont Ceceri voisin, Léonard de Vinci aurait fait essayer sa machine volante. Une plaque le rappelle."
      ],
      regarder: ["Le théâtre romain (Ier s. av. J.-C.).", "La montée vers le couvent San Francesco : la plus belle vue."],
      pratique: { horaires: "Zone archéologique ~10h–19h (horaires d'hiver réduits, à vérifier)", prix: "Bus 2 € ; zone archéologique 10 €", duree: "3–4h aller-retour", moment: "Matin", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=KGq4uxTV538", titre: "Fiesole, excursion depuis Florence (EN)" },
      maps: "Piazza Mino da Fiesole, Fiesole"
    },
    buchette: {
      nom: "Les buchette del vino (fenêtres à vin)", theme: "Vin", zone: "Partout",
      resume: "Des petites fenêtres en arc dans les façades, pour vendre le vin.",
      pourquoi: "Un détail à guetter partout en vous promenant (il en reste plus de 150), et quelques-unes servent encore un verre.",
      histoires: [
        "En 1559, <b>Cosme Ier</b> autorise les familles nobles à vendre le vin de leurs domaines directement depuis leur palais, sans taxe. On frappait au guichet, un serviteur prenait la fiasque vide et l'argent, et la rendait pleine.",
        "Pendant la <b>peste de 1630</b>, c'était le commerce sans contact : l'argent était passé dans du vinaigre. En 2020, avec le Covid, plusieurs ont rouvert pour servir des cafés, des glaces et des spritz."
      ],
      regarder: ["Babae (via Santo Spirito 21r) : « l'heure de la buchetta », 19h–20h, sauf lundi.", "En marchant, guettez les petites arcades de pierre à hauteur de poitrine, souvent murées, près des portes des palais."],
      pratique: { horaires: "—", prix: "Un verre ~5–8 €", duree: "—", moment: "Apéro", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=KHLR8RIE_w4", titre: "Les fenêtres à vin de Florence (EN)" },
      maps: "Babae, Via di Santo Spirito 21r, Firenze"
    }
  },

  /* ------------------------------------------------------------------ */
  restos: [
    { id: "vinivecchisapori", nom: "Vini e Vecchi Sapori", zone: "Centre", type: "Trattoria", prix: "25–40 €", horaires: "Midi et soir (12h–15h, 19h–23h)", adresse: "Via dei Magazzini 3r", tel: "+39 055 293045", note: "Minuscule, bondée d'Italiens, à 3 min du logement. Peposo, pâtes au canard. Pas de pizza, pas de cappuccino. Réserver.", tags: ["local"] },
    { id: "anticofattore", nom: "Antico Fattore", zone: "Centre", type: "Trattoria", prix: "30–45 €", horaires: "Mar–dim 12h–15h, 19h–22h30 · fermé lundi", adresse: "Via Lambertesca 1r", tel: "+39 055 288975", note: "Trattoria historique collée aux Offices, ouverte le dimanche. Classiques toscans, ribollita, bistecca.", tags: [] },
    { id: "fratellini", nom: "I Fratellini", zone: "Centre", type: "Panini + verre", prix: "5–10 €", horaires: "En journée", adresse: "Via dei Cimatori 38r", note: "Un trou dans le mur depuis 1875 : panini garnis et un verre de vin, debout dans la ruelle. Les verres se posent sur l'étagère du mur.", tags: ["pas-cher"] },
    { id: "trippaioporcellino", nom: "Chariot à lampredotto du Porcellino", zone: "Centre", type: "Street food", prix: "~5 €", horaires: "Journée", adresse: "Loggia del Mercato Nuovo", note: "Le lampredotto (caillette de bœuf mijotée) en panino, « bagnato » et avec sauce verte. Le vrai casse-croûte florentin.", tags: ["pas-cher"] },
    { id: "mercatocentrale", nom: "Mercato Centrale (1er étage)", zone: "San Lorenzo", type: "Food court", prix: "10–20 €", horaires: "Tous les jours", adresse: "Piazza del Mercato Centrale", note: "Touristique mais pratique le dimanche. Au rez-de-chaussée (lun–sam), <b>Da Nerbone</b> depuis 1872 : panino al bollito ou lampredotto, 5–10 €.", tags: ["pas-cher"] },
    { id: "mario", nom: "Trattoria Mario", zone: "San Lorenzo", type: "Trattoria (midi)", prix: "20–30 € (bistecca en sus)", horaires: "Lun–sam midi seulement · fermé dimanche", adresse: "Via Rosina 2r", tel: "+39 055 218550", note: "Depuis 1953, la cantine des Florentins. Tables partagées, cash, pas de réservation : faire la queue vers 11h45. Bistecca réputée.", tags: ["local"] },
    { id: "darocco", nom: "Da Rocco", zone: "Santa Croce", type: "Comptoir du marché (midi)", prix: "15–20 €", horaires: "Lun–sam 11h30–14h30 · fermé dimanche", adresse: "Marché de Sant'Ambrogio", note: "Le repas le plus honnête du quartier. Primi ~10 €, plats 13–15 €, vin 2–5 €. Arriver à 12h, cash.", tags: ["local", "pas-cher"] },
    { id: "pizzaiuolo", nom: "Il Pizzaiuolo", zone: "Santa Croce", type: "Pizzeria napolitaine", prix: "12–20 €", horaires: "Lun–sam 12h–15h, 19h–23h · fermé dimanche", adresse: "Via de' Macci 113r", tel: "+39 055 241171", note: "Pizzeria de quartier, pâte napolitaine au feu de bois. Réservation conseillée.", tags: ["pas-cher", "local"] },
    { id: "gustapizza", nom: "Gusta Pizza", zone: "Oltrarno", type: "Pizzeria", prix: "8–15 €", horaires: "Mar–dim 12h–15h30, 19h–23h · fermé lundi", adresse: "Via Maggio 46r", tel: "+39 055 285068", note: "Pizza au feu de bois, sans chichis, à 1 min de Santo Spirito. À emporter possible pour manger sur les marches.", tags: ["pas-cher"] },
    { id: "santino", nom: "Il Santino", zone: "Oltrarno", type: "Bar à vin + planches", prix: "20–35 €", horaires: "Tous les jours 12h30–23h", adresse: "Via di Santo Spirito 60r", tel: "+39 055 230 2820", note: "Petite enoteca en briques, petits vignerons toscans, charcuteries, fromages, crostoni. Le petit frère du Santo Bevitore.", tags: ["vin"] },
    { id: "babae", nom: "Babae (buchetta del vino)", zone: "Oltrarno", type: "Fenêtre à vin", prix: "~5–8 € le verre", horaires: "Buchetta 19h–20h · fermé lundi", adresse: "Via di Santo Spirito 21r", note: "On frappe au petit volet en bois, un verre de vin passe par la fenêtre. Tradition de 1559 remise en route.", tags: ["vin"] },
    { id: "volpi", nom: "Le Volpi e l'Uva", zone: "Oltrarno", type: "Bar à vin", prix: "20–40 €", horaires: "Lun–sam 11h–21h · fermé dimanche", adresse: "Piazza dei Rossi 1r", tel: "+39 055 239 8132", note: "Depuis 1992, juste après le Ponte Vecchio. ~45 vins au verre de petits producteurs, fromages et crostini. Pour les amateurs.", tags: ["vin"] },
    { id: "fuoriporta", nom: "Enoteca Fuori Porta", zone: "San Niccolò", type: "Bar à vin + cuisine", prix: "25–40 €", horaires: "Mar–ven 12h–15h30, 19h–23h30 · sam–dim 12h–23h30 · fermé lundi", adresse: "Via del Monte alle Croci 10r", tel: "+39 055 234 2483", note: "L'enoteca de San Niccolò depuis plus de 30 ans : ~600 vins, crostoni (6–10 €), pici au sanglier. Terrasse face à la porte médiévale. Parfait au retour de San Miniato.", tags: ["vin", "local"] },
    { id: "signorvino", nom: "Signorvino", zone: "Oltrarno", type: "Bar à vin avec vue", prix: "20–45 €", horaires: "Journée et soirée", adresse: "Via de' Bardi 46r", note: "Chaîne italienne, mais terrasse au ras de l'Arno face au Ponte Vecchio. Pour la vue à l'apéro.", tags: ["vin", "vue"] },
    { id: "iraddi", nom: "Trattoria I'Raddi", zone: "Oltrarno", type: "Trattoria", prix: "30–55 €", horaires: "Midi et soir (12h30–14h30, 19h30–23h)", adresse: "Via d'Ardiglione 47", tel: "+39 055 211072", note: "Trattoria de quartier dans une rue calme, poutres et nappes. Bistecca, peposo, tagliolini maison. Réserver le soir.", tags: ["local"] },
    { id: "cammillo", nom: "Trattoria Cammillo", zone: "Oltrarno", type: "Trattoria historique", prix: "50–70 €", horaires: "Jeu–lun 12h–14h30, 19h30–22h30 · fermé mar et mer", adresse: "Borgo San Jacopo 57r", tel: "+39 055 212427", note: "Tenue par la même famille depuis 1945. Bistecca de référence, service à l'ancienne. Plus cher. Réserver.", tags: ["plus-cher"] },
    { id: "sostanza", nom: "Trattoria Sostanza", zone: "Santa Maria Novella", type: "Trattoria historique", prix: "50–70 €+", horaires: "Lun–ven 12h30–14h, 19h30–21h45 · fermé week-end", adresse: "Via del Porcellana 25r", tel: "+39 055 212691", note: "Depuis 1869. Tables communes. Les deux plats culte : tortino d'artichauts et pollo al burro. Réserver.", tags: ["plus-cher"] },
    { id: "gelateriadeineri", nom: "Gelateria dei Neri", zone: "Centre", type: "Glacier", prix: "3–5 €", horaires: "Journée et soirée", adresse: "Via dei Neri 9/11r", note: "En bas de chez vous. Glaces artisanales, grand choix de parfums.", tags: ["pas-cher"] },
    { id: "vivoli", nom: "Vivoli", zone: "Centre", type: "Glacier", prix: "3–5 €", horaires: "Journée", adresse: "Via Isola delle Stinche 7r", note: "L'un des plus anciens glaciers de Florence, à 3 min du logement, derrière Santa Croce.", tags: ["pas-cher"] }
  ],

  /* ------------------------------------------------------------------ */
  budget: {
    lignes: [
      ["Réservations (Accademia 48 + Offices 58 + Giotto Pass 40)", "146 €"],
      ["Visites au choix (2 ou 3 parmi Palazzo Vecchio, Chapelles Médicis, Boboli, Santa Croce…)", "50–80 €"],
      ["Petits-déjeuners au comptoir (3 × 2 pers.)", "25–35 €"],
      ["Déjeuners (3 × 2 pers., 15–25 €)", "90–150 €"],
      ["Dîners (4 × 2 pers., 30–50 €)", "240–400 €"],
      ["Apéros, verres de vin, glaces", "60–100 €"],
      ["Transports aéroport (tram ~8 € ou taxi 25–27 € par trajet)", "8–55 €"]
    ],
    total: "≈ 620–970 € pour deux, hors vols et logement",
    conseils: [
      "Le <b>coperto</b> (2–4 €/pers.) sur l'addition est normal : ce n'est pas un pourboire. Le pourboire n'est pas obligatoire (arrondir suffit).",
      "Le café <b>au comptoir</b> coûte 1,20–1,50 € ; assis en terrasse sur une grande place, ça peut tripler.",
      "Le vin de la maison (« vino della casa ») en carafe est en général très correct et bon marché."
    ]
  }
};
