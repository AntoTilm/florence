/* =====================================================================
   Florence · 10–13 octobre 2026 — TOUT LE CONTENU DU SITE EST ICI
   ---------------------------------------------------------------------
   Pour modifier le site : changer ce fichier, puis lancer publier.bat
   depuis E:\Website (et incrémenter VERSION dans sw.js). Voir README.md.

   - reservations : statut "ok" (réservé), "todo" (à réserver), "info"
   - jours[].etapes : le parcours du jour, dans l'ordre.
       aller     : le trajet à pied pour arriver à l'étape (+ ce qu'on voit en chemin)
       regarder  : les détails à repérer sur place (img = clé de la photo, voir photos en bas)
       detours   : petits détours qui valent la peine
       repas     : les choix pour manger (gamme 1 = €, 2 = €€, 3 = €€€ ; reco: true = mon conseil)
       autres    : les autres options du créneau (tags "pluie" = plan B s'il pleut)
   - lieux : fiches détaillées ; guide = visite guidée salle par salle (musées)
   - restos : carnet d'adresses par gamme de prix ; plats : que goûter
   Vérifications web : 6–7 octobre 2026. Re-vérifier les horaires la veille.
   ===================================================================== */

window.FLO = {
  maj: "7 octobre 2026",

  voyage: {
    titre: "Florence",
    dates: "Sam 10 → mar 13 octobre 2026",
    voyageurs: "Antoine & Charlotte",
    logement: { adresse: "Via dei Neri 16, 50122 Firenze", note: "Derrière les Offices, entre la piazza della Signoria et Santa Croce. Offices 2 min, Ponte Vecchio 5 min, Duomo 10 min." },
    aller: "Sam 10/10 · Vueling Bruxelles → Florence, atterrissage vers 20h00",
    retour: "Mar 13/10 · vol vers 18h00 — quitter le logement vers 15h10",
    tram: "Tram T2 aéroport ↔ arrêt Unità : ~20 min, toutes les 5–10 min. Ticket 2 € (90 min, depuis le 1er août 2026), à valider à bord. Sans contact accepté au valideur, mais une seule validation par carte : prenez chacun votre carte, ou achetez deux tickets au distributeur de l'arrêt.",
    meteo: "https://www.3bmeteo.com/meteo/firenze",
    soleil: "Coucher du soleil vers 18h40"
  },

  checklist: [
    "Billets Accademia (e-mail « Stampa@Casa ») enregistrés sur les deux téléphones",
    "Billets PDF des Offices (code CoopCulture 6R325YDT) enregistrés",
    "Giotto Pass réservé (créneau du campanile lundi 16h30–17h)",
    "Osteria dell'Enoteca réservée (lundi 20h)",
    "Vineria Sonora et Cibrèo Trattoria réservés (dimanche soir)",
    "Vini e Vecchi Sapori réservé (samedi ~21h30) — sinon plan B Fuori Porta",
    "Hôte prévenu : arrivée vers 21h, valises gardées mardi jusqu'à 15h",
    "Deux cartes sans contact pour le tram (une validation par carte), ou tickets au distributeur",
    "Un peu de liquide (marché, Da Rocco, lampredotto : souvent cash)",
    "Météo de lundi et mardi regardée (plans pluie prêts)",
    "Photos du site téléchargées pour le hors-ligne (bouton plus bas, en Wi-Fi)",
    "Site ajouté à l'écran d'accueil du téléphone"
  ],

  reservations: [
    { statut: "ok", titre: "Galleria dell'Accademia — le David", quand: "Dim 11 · entrée 8h15", detail: "Arriver vers 8h05, via Ricasoli 58–60. 2 billets nominatifs, 48 €. Commande B-ticket n° 24288201 (billets dans l'e-mail « Stampa@Casa »). Non remboursable.", lieu: "accademia" },
    { statut: "ok", titre: "Galerie des Offices", quand: "Dim 11 · entrée 13h45", detail: "Sortie vers 16h30. 2 billets, 58 €. Code CoopCulture 6R325YDT (PDF par e-mail). Si les PDF n'arrivent pas : etickets@coopculture.it.", lieu: "offices" },
    { statut: "todo", titre: "Giotto Pass — campanile + baptistère + musée + crypte", quand: "Lun 12 · créneau tour 16h30–17h", detail: "20 €/pers. Le créneau de la tour est fixe et non modifiable. Réserver dès que la météo de lundi est claire. Tour en restauration (échafaudage) : terrasse ouverte, vue un peu réduite.", lien: "https://tickets.duomo.firenze.it/en/", lienTexte: "Billetterie officielle du Duomo", lieu: "campanile" },
    { statut: "todo", titre: "Bistecca — Osteria dell'Enoteca", quand: "Lun 12 · 20h", detail: "Via Romana 70r. Fermée le mardi. Compter 70–90 €/pers. avec vin. Plan B : Cammillo (+39 055 212427), puis I'Raddi (+39 055 211072).", tel: "+39 055 228 6018", lien: "http://www.osteriadellenoteca.com/", lienTexte: "Site du restaurant", resto: "enoteca" },
    { statut: "todo", titre: "Vineria Sonora (vins nature)", quand: "Dim 11 · ~18h45", detail: "Via degli Alfani 39r. Ouverte le dimanche dès 17h, fermée le lundi. Table pour l'apéritif.", tel: "+39 333 199 9093", resto: "sonora" },
    { statut: "todo", titre: "Dîner — Cibrèo Trattoria", quand: "Dim 11 · ~20h30", detail: "Via de' Macci 122r, 10 min à pied de la Vineria Sonora. Ouverte tous les jours, et elle prend maintenant les réservations (booking@cibreo.com).", tel: "+39 055 234 1100", resto: "cibreo" },
    { statut: "todo", titre: "Dîner d'arrivée — Vini e Vecchi Sapori", quand: "Sam 10 · ~21h30", detail: "Via dei Magazzini 3r, 3 min du logement. Cuisine jusqu'à 22h30 : préciser à la réservation que vous arrivez de l'aéroport. Plan B sans réservation : Fuori Porta (cuisine non-stop jusqu'à 23h30).", tel: "+39 055 293045", resto: "vinivecchisapori" },
    { statut: "info", titre: "Gustarium (pizza al taglio)", quand: "Dim 11 · 12h00 pile", detail: "Pas de réservation. Ouvert du mardi au dimanche, le midi seulement (12h–15h30), et tout est souvent vendu vers 13h : être devant à l'ouverture.", resto: "gustarium" }
  ],

  /* ------------------------------------------------------------------ */
  jours: [
    {
      id: "sam", court: "Sam 10", date: "2026-10-10",
      titre: "Arrivée et Florence la nuit",
      intro: "Atterrissage vers 20h. Ce soir, pas de visite : le tram, une arrivée à pied par le Duomo illuminé, un dîner tardif à 3 minutes du logement, puis la boucle des ponts quand la ville se vide.",
      carte: { depart: "Piazza dell'Unità Italiana, Firenze", etapes: ["Piazza del Duomo, Firenze", "Piazza della Signoria, Firenze"], arrivee: "Via dei Neri 16, Firenze" },
      etapes: [
        {
          heure: "20h00", titre: "De l'aéroport au centre en tram", type: "transport",
          texte: "Sortie du hall des arrivées : l'arrêt <b>Peretola Aeroporto</b> du tram T2 est juste devant. Prenez le tram vers le centre (panneau « Unità » ou « San Marco ») et descendez à <b>Unità</b>, ~20 min. Ticket <b>2 €</b> (90 min) : au distributeur de l'arrêt (carte acceptée) ou en passant votre carte sans contact sur le valideur à bord — <b>une validation par carte</b>, donc chacun la sienne.",
          regarder: [
            { titre: "Où descendre", texte: "Depuis 2025, le T2 continue jusqu'à San Marco, au nord du centre. Pour vous, <b>Unità</b> reste l'arrêt idéal : c'est de là que l'arrivée à pied est la plus belle, droit vers le Duomo." }
          ]
        },
        {
          heure: "20h40", titre: "L'arrivée à pied : le Duomo surgit", type: "balade",
          aller: { duree: "15–18 min avec les valises", via: "Piazza dell'Unità → via de' Panzani → via de' Cerretani → piazza San Giovanni → via de' Calzaiuoli → piazza della Signoria → via dei Leoni → via dei Neri", vers: "Via dei Neri 16, Firenze" },
          texte: "C'est la plus belle façon d'entrer dans Florence : la rue est étroite, ordinaire, puis au bout de la via de' Cerretani la coupole apparaît d'un coup, éclairée, énorme. Ensuite, c'est une ligne droite à travers 700 ans d'histoire jusqu'à chez vous.",
          regarder: [
            { titre: "La Berta, une tête de pierre sur un clocher", img: "smmaggiore", texte: "Via de' Cerretani, à gauche, l'église <b>Santa Maria Maggiore</b>. Levez les yeux vers le campanile : une tête de femme en marbre est encastrée dans le mur. Les Florentins l'appellent « la Berta ». Pour les uns, une marchande de légumes qui aurait donné toutes ses économies pour payer la cloche ; pour d'autres, une sorcière pétrifiée. En réalité, c'est un portrait romain récupéré au Moyen Âge et monté là comme une curiosité." },
            { titre: "La coupole de Brunelleschi", img: "duomo", texte: "45 m de diamètre, environ quatre millions de briques, et aucun échafaudage posé au sol : Brunelleschi l'a montée de 1420 à 1436 avec deux coques emboîtées et des briques en arête de poisson qui se tiennent seules pendant que le mortier sèche. Personne ne savait faire une telle portée depuis le Panthéon de Rome." },
            { titre: "La colonne de saint Zanobi", img: "zanobi", texte: "Côté nord du baptistère, une colonne isolée porte un arbre sculpté. En 429, quand on transporta le corps de l'évêque Zanobi, le cercueil aurait frôlé un orme mort qui se couvrit aussitôt de feuilles, en plein janvier. La colonne marque l'endroit, et chaque 26 janvier les Florentins y accrochent encore une couronne." },
            { titre: "La Loggia del Bigallo", img: "bigallo", texte: "La petite loggia gothique à l'angle de la via de' Calzaiuoli appartenait à une confrérie charitable. Les enfants perdus ou abandonnés y étaient montrés à la foule quelques jours, dans l'espoir qu'un parent les reconnaisse. Une fresque de 1386 (aujourd'hui à l'intérieur) montre des mères qui déposent leurs bébés et d'autres qui les récupèrent." },
            { titre: "La via de' Calzaiuoli", texte: "La « rue des chaussetiers » relie en ligne droite la cathédrale (le pouvoir de Dieu) à la piazza della Signoria (le pouvoir de la commune). Au XIXe siècle, on l'a élargie en rasant ses maisons-tours : c'est pour ça qu'elle paraît si régulière." },
            { titre: "Orsanmichele, l'église-grenier", img: "orsanmichele", texte: "Le gros cube de pierre à mi-chemin était un marché au grain. Une image de la Vierge peinte sur un pilier faisant des miracles, on l'a transformé en église et on a gardé le grain à l'étage. Chaque corporation (laine, soie, banquiers, médecins…) a payé la statue de son saint dans une niche extérieure : Donatello, Ghiberti, Verrocchio se sont fait concurrence en pleine rue." },
            { titre: "Le disque de Savonarole", img: "savonarole", texte: "Piazza della Signoria, devant la fontaine de Neptune, cherchez dans le pavé une plaque ronde en granit. Le 23 mai 1498, le moine Girolamo Savonarola, qui avait fait brûler ici miroirs, livres et tableaux dans son « bûcher des vanités », y fut pendu puis brûlé. Chaque 23 mai, on y dépose encore des pétales de rose." },
            { titre: "Pourquoi « via dei Leoni »", texte: "Derrière le Palazzo Vecchio, la République gardait de <b>vrais lions</b> en cage, symbole vivant de la ville (le lion, le « Marzocco »). Une naissance de lionceau était un bon présage, une mort un mauvais. Cosme Ier les fera déménager au XVIe siècle, mais la rue a gardé leur nom." },
            { titre: "Les deux crues, en bas de chez vous", texte: "Via dei Neri, à l'angle de la <b>via San Remigio</b> : deux petites plaques indiquent la hauteur de l'eau lors des crues de <b>1333</b> et du <b>4 novembre 1966</b>. La seconde est plus haute que vous : ce jour-là, l'Arno a recouvert le quartier de Santa Croce sous près de 5 m d'eau, de boue et de mazout." }
          ]
        },
        {
          heure: "~21h30", titre: "Dîner tardif", type: "repas",
          texte: "Après le voyage, on mange à deux pas. Vini e Vecchi Sapori est l'adresse rêvée pour un premier soir, mais la cuisine ferme à 22h30 : réservez en précisant votre heure d'arrivée. Sans réservation, Fuori Porta sert jusqu'à 23h30.",
          repas: [
            { resto: "vinivecchisapori", reco: true, texte: "Minuscule osteria derrière le Palazzo Vecchio, pleine de Florentins. Prenez les <b>pappardelle au canard</b>, leur plat le plus célèbre, des crostini de foie, et le <b>tiramisu à la framboise</b>." },
            { resto: "pizzaiuolo", texte: "La pizzeria napolitaine que les Florentins citent en premier, via de' Macci (10 min). Margherita ou diavola, et les fusilli à la ricotta pour commencer. Réserver le samedi, et s'attendre à attendre un peu." },
            { resto: "fuoriporta", texte: "Le plan B sans stress : l'enoteca de San Niccolò (12 min le long de l'Arno), cuisine non-stop jusqu'à 23h30. Crostoni chauds, planches, un verre parmi 600 vins. La balade de nuit se fait ensuite dans l'autre sens." }
          ]
        },
        {
          heure: "~22h45", titre: "La boucle des ponts, de nuit", type: "balade", principal: true,
          aller: { duree: "40–50 min en flânant", via: "Piazza della Signoria → cour des Offices → lungarno → Ponte Vecchio → via Por Santa Maria → borgo Santi Apostoli → Ponte Santa Trinita → lungarno → via dei Neri", vers: "Ponte Santa Trinita, Firenze" },
          texte: "La ville est presque vide, les boutiques du Ponte Vecchio sont fermées : c'est le moment. Cette boucle passe par un meurtre qui a coupé Florence en deux pendant un siècle, un pont repêché pierre par pierre dans le fleuve, et la plus belle vue sur le Ponte Vecchio.",
          regarder: [
            { titre: "La cour des Offices, la nuit", texte: "Le long couloir entre le Palazzo Vecchio et l'Arno est bordé de statues de Toscans illustres, posées au XIXe siècle : Dante, Pétrarque, Boccace, Machiavel, Léonard, Michel-Ange, Galilée, Amerigo Vespucci… Vide et éclairée, la cour ressemble à un décor de théâtre qui ouvre sur le fleuve." },
            { titre: "Le couloir de Vasari, au-dessus de vos têtes", img: "corridor", texte: "Le passage couvert qui part des Offices et file sur le Ponte Vecchio a été construit en <b>cinq mois</b> en 1565 pour le mariage de François Ier de Médicis : la famille pouvait aller du palais du gouvernement à sa résidence du Palazzo Pitti sans jamais croiser le peuple." },
            { titre: "Le Ponte Vecchio sans la foule", img: "pontevecchiosoir", texte: "Jusqu'en 1593, le pont était occupé par des bouchers et des tanneurs qui jetaient leurs déchets dans l'Arno. Le grand-duc Ferdinand Ier, qui passait au-dessus par son couloir, n'en supportait plus l'odeur : il les remplaça par des orfèvres. Ils y sont toujours. En août 1944, c'est le seul pont de Florence que les Allemands n'ont pas fait sauter." },
            { titre: "Le buste de Cellini", img: "cellini", texte: "Au milieu du pont, le buste de Benvenuto Cellini, orfèvre, sculpteur du Persée, bagarreur et auteur de mémoires où il se vante de tout, y compris de meurtres. La grille autour était couverte de cadenas d'amoureux ; c'est désormais interdit, et puni d'une amende." },
            { titre: "La tour des Amidei : le meurtre de Pâques 1216", img: "amidei", texte: "En sortant du pont, via Por Santa Maria, à droite, une tour médiévale ornée de deux têtes de lion. Le matin de Pâques 1216, le jeune Buondelmonte dei Buondelmonti, qui avait rompu ses fiançailles avec une fille Amidei pour épouser une Donati, passa le pont en habit blanc sur un cheval blanc. Les Amidei et leurs alliés l'attendaient là, au pied d'une statue de Mars, et le tuèrent. Les chroniqueurs (et Dante, dans l'Enfer) y voient le début de la guerre entre Guelfes et Gibelins, qui a déchiré Florence pendant plus d'un siècle." },
            { titre: "Santi Apostoli et les pierres de Jérusalem", img: "santiapostoli", texte: "Prenez le borgo Santi Apostoli, puis la petite piazza del Limbo (ancien cimetière des enfants morts sans baptême). L'église Santi Apostoli garde des éclats de pierre du Saint-Sépulcre, rapportés de la première croisade par un certain Pazzino de' Pazzi. Chaque dimanche de Pâques, ils servent encore à allumer le feu qui fait « exploser » le char devant le Duomo (le Scoppio del Carro). Oui, les Pazzi : la même famille qui assassinera un Médicis en 1478." },
            { titre: "Ponte Santa Trinita : LA vue", img: "santatrinitapont", texte: "Le plus élégant des ponts (1569, Ammannati, peut-être sur un dessin de Michel-Ange). Dynamité en 1944, il a été reconstruit en 1958 avec ses pierres d'origine <b>repêchées dans l'Arno</b>. La statue du Printemps, à un angle, a longtemps attendu sa tête : on ne l'a retrouvée dans le fleuve qu'en 1961. D'ici, la vue sur le Ponte Vecchio illuminé est la carte postale de Florence." }
          ],
          detours: [
            { titre: "La colonne de la Justice", duree: "+3 min", texte: "Piazza Santa Trinita, une colonne de granit venue des thermes de Caracalla, à Rome, offerte par le pape à Cosme Ier. Elle est plantée à l'endroit où il aurait appris, en 1537, sa victoire de Montemurlo sur les exilés républicains : la fin de tout espoir de chasser les Médicis." },
            { titre: "Une glace en rentrant", duree: "en bas de chez vous", texte: "La <b>Gelateria dei Neri</b> (via dei Neri) ferme tard. Un petit pot pour finir la soirée." }
          ]
        }
      ]
    },
    {
      id: "dim", court: "Dim 11", date: "2026-10-11",
      titre: "Le David, les Médicis, les Offices et Dante",
      intro: "Le seul réveil matinal du séjour (le David à 8h15, c'était le seul créneau). Ensuite, une matinée sans billet sur les traces des Médicis, la pizza de Gustarium à l'ouverture, les Offices, une pause, et le soir la Florence de Dante jusqu'au quartier étudiant, pour un verre chez Vineria Sonora et un dîner au Cibrèo. Le dimanche, la cathédrale n'est ouverte que pour les messes et beaucoup de commerces ferment : le programme en tient compte.",
      carte: { depart: "Via dei Neri 16, Firenze", etapes: ["Galleria dell'Accademia, Firenze", "Palazzo Medici Riccardi, Firenze", "Galleria degli Uffizi, Firenze"], arrivee: "Via degli Alfani 39, Firenze" },
      etapes: [
        {
          heure: "7h50", titre: "Vers le David, dans la ville vide", type: "balade",
          aller: { duree: "15 min", via: "Via dei Neri → piazza della Signoria → via de' Calzaiuoli → piazza del Duomo → via Ricasoli", vers: "Galleria dell'Accademia, Via Ricasoli 58, Firenze" },
          texte: "À cette heure-ci, Florence appartient aux balayeurs et aux livreurs. La piazza del Duomo est vide, la lumière rase le marbre. Pas le temps de s'asseoir pour le petit-déjeuner : un cornetto et un cappuccino <b>debout au comptoir</b> d'un bar de la via Ricasoli (1,5–3 €), on se rattrape après.",
          regarder: [
            { titre: "Le « Sasso di Dante »", texte: "Côté sud de la piazza del Duomo, sur la façade d'une maison, une plaque de marbre indique « Sasso di Dante ». La tradition veut que Dante venait s'asseoir sur une pierre à cet endroit, les soirs d'été, pour regarder monter la cathédrale." },
            { titre: "Le Canto de' Bischeri", texte: "À l'angle de la place et de la via dell'Oriuolo, le « coin des Bischeri ». Selon la tradition, cette famille refusa de vendre ses maisons pour laisser place au chantier du Duomo, fit monter les prix… et finit par tout perdre. Depuis, en florentin, un <i>bischero</i>, c'est un imbécile. Les Florentins l'utilisent encore tous les jours." },
            { titre: "Un dernier regard en arrière", texte: "Via Ricasoli, retournez-vous : la rue est parfaitement alignée sur la coupole, qui la ferme comme un décor." }
          ]
        },
        {
          heure: "8h15", titre: "Le David, les Prisonniers de Michel-Ange", type: "visite", lieu: "accademia",
          resa: "Accademia · entrée 8h15 — réservé (B-ticket 24288201)",
          texte: "Arrivez à 8h05 avec les billets sur le téléphone. La stratégie : <b>filez directement au David</b> sans vous arrêter, pendant que la salle est presque vide, puis revenez sur vos pas pour les Prisonniers, les plâtres et les instruments. Compter 1h–1h15.",
          regarder: [
            { titre: "Le David, 5,17 m", img: "david", texte: "Pas le vainqueur : l'<b>instant d'avant</b> le combat. Sourcils froncés, fronde sur l'épaule gauche, pierre cachée dans la main droite. La tête et les mains sont volontairement trop grandes : la statue devait être hissée sur la cathédrale et vue d'en bas." },
            { titre: "Les Prisonniers qui sortent du marbre", img: "atlas", texte: "Dans la galerie qui mène au David, quatre géants inachevés semblent se battre pour sortir de la pierre. Ils étaient prévus pour le tombeau du pape Jules II à Rome, qui ne fut jamais terminé." },
            { titre: "Un mariage florentin en 1450", img: "cassone", texte: "Dans la salle du Colosse, un coffre de mariage peint (le « cassone Adimari ») montre une noce devant le baptistère : robes à traîne, chapeaux extravagants, musiciens. Une photo de la mode florentine du Quattrocento, peinte par le frère de Masaccio." }
          ]
        },
        {
          heure: "9h30", titre: "Petit-déjeuner, puis sur les traces des Médicis", type: "balade",
          aller: { duree: "≈ 2h avec les arrêts (2 km)", via: "Piazza San Marco → via Cavour → Palazzo Medici Riccardi → San Lorenzo → piazza del Duomo → piazza della Repubblica → Mercato Nuovo → via dei Cimatori", vers: "Gustarium, Via dei Cimatori 24r, Firenze" },
          texte: "Une matinée sans billet : on suit la famille Médicis à la trace, de leur couvent préféré à leur palais, puis à leur église. Petit-déjeuner assis cette fois, dans un bar de la piazza San Marco ou de la via Cavour. Objectif : être devant Gustarium à <b>12h00</b>.",
          regarder: [
            { titre: "San Marco, le couvent de Cosme… et de Savonarole", texte: "Le couvent au fond de la place a été reconstruit aux frais de <b>Cosme l'Ancien</b>, le banquier le plus riche d'Europe, qui s'y était réservé une cellule pour prier (et se faire pardonner l'usure). Soixante ans plus tard, son prieur était <b>Savonarole</b> : c'est ici que la foule assiégea le couvent et l'arrêta, le 8 avril 1498. À l'intérieur, les cellules sont peintes par Fra Angelico (musée, horaires du dimanche variables)." },
            { titre: "Le Palazzo Medici Riccardi", img: "medicicriccardi", texte: "La maison de famille, via Cavour. Cosme avait demandé un projet à Brunelleschi, puis l'a refusé : trop somptueux, il aurait attiré l'envie. Il choisit Michelozzo et une façade de forteresse. C'est à une fenêtre de ce palais qu'en avril 1478 <b>Laurent le Magnifique</b>, blessé au cou, se montra à la foule pour prouver qu'il avait survécu à la conjuration des Pazzi. Au rez-de-chaussée, à l'angle, les « fenêtres agenouillées » ont été dessinées par Michel-Ange pour fermer l'ancienne loggia." },
            { titre: "San Lorenzo, la façade qui n'existe pas", img: "sanlorenzo", texte: "L'église paroissiale des Médicis a toujours sa façade de briques brutes. Le pape Léon X (un Médicis) l'avait commandée à Michel-Ange en 1516 ; il passa des années à faire extraire du marbre à Carrare, puis le contrat fut annulé. Cosme l'Ancien est enterré dans la crypte, juste sous le centre de l'église, avec le titre de « Pater Patriae », père de la patrie." },
            { titre: "Les portes du Paradis", img: "paradis", texte: "En repassant devant le baptistère, côté cathédrale : les portes dorées de Ghiberti (copies ; les originales sont au musée de l'Opera, que vous verrez lundi). Dans le cadre, cherchez un petit crâne chauve qui vous regarde : c'est l'autoportrait de Ghiberti, très fier de lui." },
            { titre: "Piazza della Repubblica, l'ancien forum", texte: "La colonne de l'Abondance marque le carrefour de la ville romaine, Florentia. Au XIXe siècle, quand Florence était capitale de l'Italie, on a rasé ici le vieux marché et le ghetto juif pour faire cette place « moderne ». L'inscription de l'arc se félicite d'avoir rendu le quartier « à une vie nouvelle » ; les Florentins de l'époque l'ont beaucoup moins aimée. Le café <b>Gilli</b> y sert depuis 1733." },
            { titre: "Le sanglier du Mercato Nuovo", img: "porcellino", texte: "Frottez le museau du « Porcellino » et glissez une pièce dans sa gueule : si elle tombe dans la grille, vous reviendrez à Florence. Au centre de la loggia, une roue de marbre au sol, la « pierre du scandale » : les commerçants en faillite y étaient fessés en public, pantalon baissé." }
          ],
          detours: [
            { titre: "Les Chapelles Médicis", duree: "+1h, 11 €", lieu: "cappellemedicee", texte: "Ouvertes le dimanche (fermées lundi). Le mausolée de marbre des grands-ducs et la Nouvelle Sacristie de Michel-Ange. Magnifique, mais ce serait la troisième visite de la journée : seulement si l'envie est forte. Sinon, mardi en cas de pluie." },
            { titre: "La chapelle des Mages", duree: "+45 min, ~15 €", lieu: "medicicriccardi", texte: "Dans le Palazzo Medici Riccardi : une minuscule chapelle où toute la famille Médicis défile en cortège des Rois mages, peinte par Benozzo Gozzoli. On y reconnaît Laurent enfant sur un cheval blanc." }
          ]
        },
        {
          heure: "12h00", titre: "Déjeuner : la pizza de Gustarium", type: "repas",
          texte: "Gustarium ouvre à midi et vend tout en une heure : soyez devant la porte à l'ouverture. C'est à 3 minutes des Offices, idéal avant 13h45.",
          repas: [
            { resto: "gustarium", reco: true, texte: "Votre incontournable. Pizza al taglio au poids, pâte légère et alvéolée façon focaccia, garnitures de saison. Prenez 3 ou 4 petites parts différentes à partager, et laissez le patron vous expliquer ses pâtes (il adore ça)." },
            { resto: "ino", texte: "Si Gustarium est complet ou déjà vidé : 'Ino, à 2 min, des panini de schiacciata garnis de produits d'artisans toscans. On mange debout dans la ruelle." },
            { resto: "anticofattore", texte: "Pour un vrai repas assis : la trattoria historique collée aux Offices, ouverte le dimanche. Ribollita, pappa al pomodoro." }
          ]
        },
        {
          heure: "13h45", titre: "Botticelli, Michel-Ange, Léonard, Caravage", type: "visite", lieu: "offices",
          resa: "Offices · entrée 13h45 — réservé (CoopCulture 6R325YDT)",
          texte: "Présentez-vous vers 13h30 à l'entrée des billets réservés, PDF sur le téléphone. Compter 2h30–3h. Depuis juin 2026, la <b>Naissance de Vénus</b> et le <b>Printemps</b> de Botticelli se font face pour la première fois, dans des salles rénovées. Le parcours salle par salle, avec les photos de ce qu'il faut voir, est dans le guide.",
          regarder: [
            { titre: "La Naissance de Vénus", img: "venus", texte: "Vénus arrive sur sa coquille, poussée par le souffle de Zéphyr. La tradition veut que son visage soit celui de Simonetta Vespucci, la beauté de Florence, morte à 22 ans." },
            { titre: "Le Tondo Doni de Michel-Ange", img: "doni", texte: "Sa seule peinture sur bois achevée, dans le cadre qu'il a dessiné lui-même. Le client a voulu marchander : il a fini par payer le double." },
            { titre: "La Méduse du Caravage", img: "meduse", texte: "Peinte sur un vrai bouclier de parade, au moment exact où la tête vient d'être tranchée. Le visage serait celui du peintre." }
          ]
        },
        {
          heure: "16h30", titre: "Via dei Georgofili, puis pause", type: "pause",
          aller: { duree: "2 min", via: "Sortie des Offices → via Lambertesca → via dei Georgofili → via dei Neri", vers: "Via dei Georgofili, Firenze" },
          texte: "En sortant, faites quelques pas dans la <b>via dei Georgofili</b>, juste derrière les Offices. Dans la nuit du 27 mai 1993, une voiture piégée de la mafia y a explosé : cinq morts, dont une petite fille de 9 ans et un bébé de 50 jours, la Torre dei Pulci effondrée, des tableaux des Offices criblés d'éclats. Un olivier et une plaque gardent leur mémoire. Ensuite, deux minutes et vous êtes au logement : douche, jambes en l'air.",
          autres: [
            { titre: "Encore de l'énergie : le doigt de Galilée", tags: ["pluie"], lieux: ["museogalileo"], texte: "Le <b>Museo Galileo</b> est à 2 min (ouvert le dimanche jusqu'à 18h, 14 €). Les vraies lunettes de Galilée, et son majeur droit, prélevé sur son corps en 1737 et exposé sous une cloche de verre, pointé vers le ciel." }
          ]
        },
        {
          heure: "18h00", titre: "La Florence de Dante, en montant vers le nord", type: "balade",
          aller: { duree: "45 min en flânant (1,8 km)", via: "Via dei Neri → via del Proconsolo → via Dante Alighieri → via dello Studio → piazza del Duomo → via dei Servi → piazza SS. Annunziata → via degli Alfani", vers: "Vineria Sonora, Via degli Alfani 39r, Firenze" },
          texte: "Le quartier où Dante est né en 1265, puis le Duomo à la tombée du jour, la plus belle perspective sur la coupole, et la place la plus harmonieuse de la ville. On arrive au quartier universitaire juste à l'heure de l'apéritif.",
          regarder: [
            { titre: "La Badia et sa cloche", img: "badia", texte: "Via del Proconsolo, le clocher pointu de la Badia Fiorentina, la plus ancienne abbaye de la ville. Sa cloche rythmait la journée de la Florence médiévale ; Dante, exilé, s'en souvient au chant XV du Paradis comme du temps où la ville vivait « sobre et pudique ». En face, le <b>Bargello</b>, l'ancienne prison : en 1479 on pendit à sa fenêtre l'assassin de Julien de Médicis, et Léonard de Vinci, dans la foule, dessina le pendu." },
            { titre: "La tour de la Châtaigne", img: "castagna", texte: "Via Dante Alighieri, une petite tour carrée : en 1282, avant que le Palazzo Vecchio existe, c'est ici que se réunissaient les Prieurs qui gouvernaient la ville. On y votait avec des <b>châtaignes</b> glissées dans un sac : d'où son nom, « Torre della Castagna »." },
            { titre: "La « maison de Dante »", texte: "Juste à côté, la Casa di Dante. Attention : c'est une reconstitution du début du XXe siècle, à l'endroit supposé de la maison des Alighieri. Le vrai trésor est trois pas plus loin." },
            { titre: "Santa Margherita de' Cerchi, l'église de Dante", img: "smcerchi", texte: "Une minuscule église dans une ruelle. La tradition y place le mariage de Dante avec Gemma Donati et la sépulture de la famille Portinari, celle de <b>Béatrice</b>, l'amour de sa vie qu'il n'a presque jamais approchée. Près de la tombe, un panier recueille les lettres que des amoureux du monde entier écrivent à Béatrice." },
            { titre: "Le Duomo à la tombée du jour", img: "duomo", texte: "Le marbre blanc vient de Carrare, le vert de Prato, le rose de la Maremme. La façade que vous voyez date seulement de 1887 : pendant trois siècles, la cathédrale est restée avec une façade nue, l'ancienne ayant été démolie en 1587." },
            { titre: "La via dei Servi", texte: "La rue qui part du chevet de la cathédrale vers le nord : retournez-vous au milieu, c'est la vue la plus célèbre de la coupole, cadrée entre les palais." },
            { titre: "Piazza Santissima Annunziata", img: "innocenti", texte: "L'<b>Ospedale degli Innocenti</b> de Brunelleschi (1419) est souvent présenté comme le premier bâtiment de la Renaissance. C'était un orphelinat : à gauche du portique, une petite fenêtre, la « ruota », permettait de déposer un nouveau-né anonymement. Beaucoup d'Italiens nommés Innocenti, Nocentini ou Degl'Innocenti descendent de ces enfants. Les médaillons bleus de della Robbia montrent des bébés emmaillotés." },
            { titre: "Les abeilles de Ferdinand", img: "ferdinando", texte: "Sur le socle de la statue équestre de Ferdinand Ier, un essaim d'abeilles tourne autour de la reine, avec la devise « Maiestate tantum ». On dit qu'on n'arrive jamais à les compter du premier coup. Essayez." },
            { titre: "La Rotonda de Brunelleschi", img: "rotonda", texte: "Via degli Alfani, à l'angle de la via del Castellaccio : un octogone de pierre resté inachevé pendant cinq siècles. Brunelleschi l'a commencé en 1434 ; l'argent est parti dans une guerre contre Lucques et le chantier s'est arrêté. Il n'a été couvert qu'au XXe siècle. Un peu plus loin, au n° 78, l'<b>Opificio delle Pietre Dure</b>, l'atelier des marqueteries de pierre fondé par les Médicis, est devenu le grand laboratoire de restauration d'Italie." }
          ]
        },
        {
          heure: "18h45", titre: "Apéritif chez Vineria Sonora", type: "apero", resto: "sonora",
          texte: "Votre incontournable. Une vineria de quartier tenue par des passionnés de vins nature, avec une vraie collection de vinyles. Laissez-les choisir : un pét-nat toscan pour commencer, puis un vin orange ou un rouge de petit vigneron. Quelques charcuteries et fromages pour accompagner. Le dîner suit à 10 minutes.",
          repas: [
            { resto: "sonora", reco: true, texte: "Réserver (+39 333 199 9093). Dites ce que vous aimez, ils trouvent la bouteille." }
          ]
        },
        {
          heure: "20h30", titre: "Dîner au Cibrèo", type: "repas",
          aller: { duree: "10 min", via: "Via degli Alfani → borgo Pinti → via dei Pilastri → via de' Macci", vers: "Cibrèo Trattoria, Via de' Macci 122r, Firenze" },
          texte: "Le Cibrèo, c'est l'histoire de Fabio Picchi, un cuisinier florentin qui a ouvert en 1979 face au marché de Sant'Ambrogio et en a fait une petite maison de la cuisine toscane : trattoria, restaurant, café et théâtre. Pas d'effort financier ce soir : on le garde pour la bistecca de lundi.",
          repas: [
            { resto: "cibreo", reco: true, texte: "La trattoria, le côté simple de la maison. Commandez la <b>pappa al pomodoro</b>, le <b>pâté du Cibrèo</b> (foies de volaille), le <b>lampredotto in umido</b>, et le gâteau au fromage à la marmelade d'oranges amères." },
            { resto: "mercatocentrale", texte: "Plus simple et sans réservation : l'étage du Mercato Centrale (12 min), ouvert tous les jours. Comptoirs de pâtes fraîches, de pizza, de lampredotto." },
            { resto: "sonora", texte: "Ou rester chez Sonora et transformer l'apéritif en dîner de planches." }
          ]
        },
        {
          heure: "22h15", titre: "Retour par Santa Croce", type: "balade",
          aller: { duree: "12 min", via: "Via de' Macci → via di San Giuseppe → piazza Santa Croce → via de' Benci → via dei Neri", vers: "Via dei Neri 16, Firenze" },
          texte: "La piazza Santa Croce de nuit, presque vide, avec la façade éclairée de la basilique que vous visitez demain matin.",
          regarder: [
            { titre: "L'étoile sur la façade", texte: "Au-dessus du portail central, une grande étoile à six branches. La façade date de 1863 ; son architecte, Niccolò Matas, était né dans la communauté juive d'Ancône, et une tradition tenace dit qu'il y a placé l'étoile de David et qu'on l'a enterré pour cela sous les marches, et non dans l'église. Les historiens discutent encore de ce qui relève de la légende." }
          ]
        }
      ]
    },
    {
      id: "lun", court: "Lun 12", date: "2026-10-12",
      titre: "Santa Croce, le marché, le Duomo et la bistecca",
      intro: "Le lundi, les grands musées d'État sont fermés (Offices, Accademia, Pitti, Bargello, Chapelles Médicis). C'est le jour de la Florence des Florentins : le panthéon de Santa Croce, le vrai marché, puis tout le complexe du Duomo avec le Giotto Pass, et le soir, l'Oltrarno jusqu'à la bistecca. La cathédrale ferme à 15h45 : elle passe avant le campanile.",
      carte: { depart: "Via dei Neri 16, Firenze", etapes: ["Basilica di Santa Croce, Firenze", "Mercato di Sant'Ambrogio, Firenze", "Piazza del Duomo, Firenze"], arrivee: "Osteria dell'Enoteca, Via Romana 70r, Firenze" },
      etapes: [
        {
          heure: "9h15", titre: "Café au comptoir, dans votre rue", type: "pause",
          texte: "<b>Ditta Artigianale</b>, au 32 de la via dei Neri, est l'une des premières adresses de café de spécialité de Florence. Sinon, n'importe quel bar : on commande au comptoir, on boit debout, on paie en sortant. Un « caffè », c'est un espresso ; le cappuccino se boit le matin, jamais après un repas (les Italiens vous regarderont avec tendresse si vous le faites).",
          regarder: [
            { titre: "La Loggia del Grano, au bout de votre rue", img: "loggiagrano", texte: "Au bout de la via dei Neri, côté Offices, une loggia de 1619 avec une fontaine et le buste du grand-duc Cosme II : c'était le marché au grain construit pour les Médicis. Ses arcades ont été fermées plus tard, et l'ensemble a longtemps abrité un cinéma." }
          ]
        },
        {
          heure: "9h30", titre: "Santa Croce, le panthéon de l'Italie", type: "visite", lieu: "santacroce",
          aller: { duree: "4 min", via: "Via dei Neri → via de' Benci → piazza Santa Croce", vers: "Basilica di Santa Croce, Firenze" },
          texte: "Ouvre à 9h30, environ 10 €, compter 1h–1h15 avec la chapelle Pazzi et le musée. Entrée sur le côté gauche de la basilique. Michel-Ange, Galilée, Machiavel, Rossini, un cénotaphe de Dante, les fresques de Giotto, et le crucifix de Cimabue noyé par la crue de 1966. Le guide de visite est dans la fiche.",
          regarder: [
            { titre: "Sur la place : le disque de 1565", img: "antella", texte: "La façade peinte du Palazzo dell'Antella, côté droit de la place. Sous ses fenêtres, un disque de marbre de 1565 marque la ligne médiane du terrain du <b>calcio storico</b>, un mélange de football, de rugby et de lutte en costumes Renaissance qui se joue encore ici chaque mois de juin, entre les quatre quartiers de la ville." },
            { titre: "Dante, qui n'est pas enterré là", img: "dantestatue", texte: "La grande statue sur les marches (1865, pour les 600 ans de sa naissance) regarde la ville qui l'a exilé. Florence l'a condamné à mort en 1302 ; il est mort à Ravenne en 1321, et Ravenne refuse depuis 700 ans de rendre le corps. Dans l'église, son tombeau est vide." },
            { titre: "Michel-Ange face à Galilée", img: "tombemichelange", texte: "Le tombeau de Michel-Ange (par Vasari) est le premier à droite en entrant. Michel-Ange avait voulu être enterré ici pour, au Jugement dernier, voir en premier la coupole de Brunelleschi par la porte ouverte. Galilée lui fait face dans l'allée de gauche : il est né l'année de la mort de Michel-Ange, en 1564." },
            { titre: "Le crucifix noyé de Cimabue", img: "cimabue", texte: "Au musée, le grand crucifix peint par Cimabue vers 1280. Le 4 novembre 1966, il a passé des heures sous l'eau boueuse et perdu une grande partie de sa peinture. Il est devenu le symbole des « anges de la boue », les volontaires du monde entier venus sauver les œuvres. Il est désormais accroché à un système qui peut le hisser en cas de nouvelle crue." }
          ]
        },
        {
          heure: "11h00", titre: "Via de' Macci, jusqu'au marché", type: "balade",
          aller: { duree: "8 min", via: "Piazza Santa Croce → via di San Giuseppe → via de' Macci → piazza Ghiberti", vers: "Mercato di Sant'Ambrogio, Firenze" },
          texte: "On quitte la Florence des cartes postales pour le quartier où vivent les Florentins : boulangeries, artisans, le Cibrèo d'hier soir, et au bout le marché couvert.",
          regarder: [
            { titre: "Le chariot de lampredotto", texte: "À l'angle de la via de' Macci et du borgo La Croce, le chariot de la famille <b>Pollini</b> sert depuis près de 30 ans des panini de lampredotto, la caillette de bœuf mijotée. À goûter maintenant ou après le marché (voir l'onglet Manger)." },
            { titre: "Sant'Ambrogio et son miracle", texte: "La petite église de la place garde le souvenir d'un miracle de 1230 : un prêtre aurait laissé du vin dans le calice, et l'aurait retrouvé le lendemain changé en sang. Le sculpteur Verrocchio, maître de Léonard de Vinci, y est enterré." },
            { titre: "La coupole verte de la synagogue", img: "synagogue", texte: "En regardant vers le nord-est depuis le marché, une coupole de cuivre vert : le Tempio Maggiore, la grande synagogue construite en 1874–1882, quand les Juifs florentins sont enfin sortis du ghetto. Minée par les Allemands en 1944, elle a survécu." }
          ]
        },
        {
          heure: "11h15", titre: "Le marché de Sant'Ambrogio", type: "balade", lieu: "santambrogio",
          texte: "Le vrai marché des Florentins (lun–sam 7h–14h), sous une halle de fonte de 1873. Dehors, les maraîchers des environs ; dedans, bouchers, tripiers, fromagers. Règle d'or : on ne touche pas les fruits et légumes, on montre, le marchand choisit pour vous. Idéal pour rapporter un morceau de pecorino ou de finocchiona (le saucisson au fenouil).",
          regarder: [
            { titre: "Le marché", img: "santambrogio", texte: "Construit en 1873 par Giuseppe Mengoni, l'architecte de la galerie Victor-Emmanuel de Milan (il mourra en tombant d'un échafaudage de cette galerie, la veille de son inauguration). Le même homme a dessiné le Mercato Centrale." }
          ]
        },
        {
          heure: "12h00", titre: "Déjeuner au marché", type: "repas",
          texte: "Arrivez à midi pile chez Da Rocco, avant les employés du quartier : tables partagées, plats du jour, cash. C'est le déjeuner le plus honnête de Florence.",
          repas: [
            { resto: "darocco", reco: true, texte: "Le comptoir à l'intérieur de la halle. Ribollita ou pappa al pomodoro, bollito, polpette, le plat du jour et un quart de vin de la maison : 15–20 € par personne." },
            { resto: "semel", texte: "Plus rapide : des panini d'auteur, debout sur la place. Le menu change chaque jour (âne braisé, hareng et pecorino…). Pas de modification." },
            { resto: "lortone", texte: "Pour s'asseoir plus confortablement : le bistrot que le guide Michelin recommande, face au marché. Pici à l'aglione, gnudi, tagliatelle au ragù de sanglier." }
          ]
        },
        {
          heure: "13h45", titre: "La cathédrale (gratuite, avant 15h45)", type: "visite", lieu: "duomo",
          aller: { duree: "12 min", via: "Via Pietrapiana → borgo degli Albizi → via del Proconsolo → piazza del Duomo", vers: "Cattedrale di Santa Maria del Fiore, Firenze" },
          texte: "Entrée gratuite (lun–sam 10h15–15h45), la file avance vite en début d'après-midi en semaine. Compter 30–45 min. L'intérieur est sobre, mais chargé d'histoires : un mercenaire anglais peint en statue, une horloge qui tourne à l'envers, Dante en exil, et le chœur où les Pazzi ont poignardé Julien de Médicis.",
          regarder: [
            { chemin: true, titre: "Le borgo degli Albizi", texte: "La plus belle rue de palais du quartier porte le nom des <b>Albizi</b>, la famille qui gouvernait Florence avant les Médicis. En 1433, ce sont eux qui firent arrêter et exiler Cosme l'Ancien ; un an plus tard, Cosme revenait et c'est Rinaldo degli Albizi qui partait en exil, pour toujours. Au n° 18, le Palazzo Valori est couvert de bustes d'illustres Florentins que les habitants ont surnommés « i Visacci », les vilaines têtes." },
            { titre: "Le mercenaire de papier", img: "hawkwood", texte: "Mur de gauche : un chevalier sur son cheval, en trompe-l'œil vert. C'est <b>John Hawkwood</b>, condottiere anglais qui servit Florence. La ville lui avait promis un monument équestre en marbre ; elle lui a offert une fresque de Paolo Uccello (1436). Beaucoup moins cher." },
            { titre: "L'horloge qui tourne à l'envers", img: "horloge", texte: "Au revers de la façade, l'horloge d'Uccello (1443) n'a qu'une aiguille, tourne dans le sens inverse des nôtres et compte 24 heures : la journée commençait au coucher du soleil. Elle fonctionne toujours." },
            { titre: "Dante devant Florence", img: "dantemichelino", texte: "Le tableau de Domenico di Michelino (1465) : Dante, en dehors des murs de la ville qui l'a chassé, tient la Divine Comédie ouverte. Derrière lui, l'Enfer et la montagne du Purgatoire. La ville lui rendait hommage… sans jamais récupérer ses os." },
            { titre: "Le chœur du 26 avril 1478", img: "medaillepazzi", texte: "Sous la coupole, à la messe de Pâques 1478, au signal de l'élévation, les conjurés de la famille Pazzi, soutenus par le pape, poignardent <b>Julien de Médicis</b> (19 coups). Son frère Laurent, blessé au cou, se réfugie dans la sacristie nord et ferme ses lourdes portes de bronze. La vengeance sera terrible : les conjurés pendus aux fenêtres du Palazzo Vecchio, l'archevêque de Pise compris. Cette médaille fut frappée pour l'occasion : Laurent en haut, Julien assassiné en bas." },
            { titre: "Le Jugement dernier, vu d'en bas", img: "jugement", texte: "L'intérieur de la coupole est peint d'un immense Jugement dernier (Vasari et Zuccari, 1572–1579), plus de 3 600 m². Cherchez les damnés et les diables vers le bas : c'est la partie la plus vivante." }
          ]
        },
        {
          heure: "14h45", titre: "Le musée de l'Opera del Duomo", type: "visite", lieu: "museoopera",
          resa: "Inclus dans le Giotto Pass",
          aller: { duree: "2 min", via: "Derrière la cathédrale, piazza del Duomo 9", vers: "Museo dell'Opera del Duomo, Firenze" },
          texte: "Le musée le plus sous-estimé de Florence, et il est compris dans votre pass. Les vraies portes du Paradis, une Pietà que Michel-Ange a voulu détruire, la Madeleine de Donatello, et les outils de Brunelleschi. Compter 1h15. Le guide est dans la fiche.",
          regarder: [
            { titre: "La Pietà Bandini", img: "pietabandini", texte: "Michel-Ange, près de 80 ans, la sculptait pour son propre tombeau. Le Nicodème qui soutient le Christ a son visage. Insatisfait, il l'a attaquée au marteau : il manque la jambe gauche du Christ." },
            { titre: "La Madeleine de Donatello", img: "madeleine", texte: "En bois, décharnée, couverte de ses seuls cheveux : une sainte qui a fait pénitence au désert. Une sculpture d'une modernité saisissante, vers 1455." },
            { titre: "Les originaux des portes du Paradis", img: "paradis", texte: "Restaurés, derrière une vitre, dans une grande salle qui reconstitue la place médiévale. 27 ans de travail de Ghiberti." }
          ]
        },
        {
          heure: "16h30", titre: "Le campanile de Giotto au soleil couchant", type: "visite", lieu: "campanile",
          resa: "Giotto Pass · créneau 16h30–17h — À RÉSERVER", resaTodo: true,
          texte: "Présentez-vous 10 min avant votre créneau. 414 marches, trois paliers pour souffler, 45 min–1h aller-retour. Vous montez moins haut que dans la coupole, mais vous avez la coupole <b>dans la vue</b>, avec la lumière dorée de fin de journée. La tour est en restauration (échafaudage) : la terrasse est ouverte, la vue un peu réduite par endroits.",
          regarder: [
            { titre: "Le campanile", img: "campanile", texte: "Giotto, le peintre, nommé architecte de la ville à près de 70 ans, n'en a vu que le premier niveau : il meurt en 1337. Andrea Pisano puis Francesco Talenti achèvent la tour (84,7 m). En bas, les bas-reliefs racontent l'histoire de l'humanité par ses métiers : tissage, navigation, astronomie, et même Dédale qui vole." }
          ],
          autres: [
            { titre: "S'il pleut à verse", tags: ["pluie"], texte: "Le créneau n'est pas modifiable. Sous une petite pluie, montez quand même (escalier couvert, terrasse exposée). Sous l'orage, sacrifiez la tour et gardez le baptistère et le musée, inclus dans le même pass." }
          ]
        },
        {
          heure: "17h30", titre: "Le baptistère Saint-Jean", type: "visite", lieu: "battistero",
          resa: "Inclus dans le Giotto Pass",
          texte: "Le plus vieux bâtiment de la place, où Dante et presque tous les Florentins ont été baptisés pendant des siècles. Ouvert jusqu'au début de soirée. Compter 20–30 min. La coupole de mosaïques est en restauration : une partie est masquée.",
          regarder: [
            { titre: "Le baptistère", img: "baptistere", texte: "À l'intérieur, le tombeau de l'antipape Jean XXIII (Baldassare Cossa), sculpté par Donatello et Michelozzo : un pape déposé, enterré ici grâce à son banquier… Giovanni de' Medici. Dans les mosaïques, cherchez le diable qui dévore les damnés : on dit qu'il a impressionné le jeune Dante." }
          ]
        },
        {
          heure: "18h15", titre: "Le Ponte Vecchio au coucher du soleil", type: "balade",
          aller: { duree: "12 min", via: "Piazza del Duomo → via de' Calzaiuoli → via Por Santa Maria → Ponte Vecchio → piazza dei Rossi", vers: "Le Volpi e l'Uva, Piazza dei Rossi 1r, Firenze" },
          texte: "Le soleil se couche vers 18h40 : arrêtez-vous au milieu du Ponte Vecchio, côté aval, l'Arno devient doré entre le Ponte Santa Trinita et les collines.",
          regarder: [
            { titre: "La tour qui a dit non aux Médicis", texte: "Au bout du pont, côté Oltrarno, la <b>Torre dei Mannelli</b>. En 1565, la famille refusa de la démolir pour laisser passer le couloir de Vasari. Même Cosme Ier n'a pas insisté : le couloir contourne la tour sur des consoles, et on le voit très bien depuis le pont." }
          ]
        },
        {
          heure: "18h45", titre: "Apéritif chez Le Volpi e l'Uva", type: "apero", resto: "volpi",
          texte: "Juste après le pont, sur une petite place cachée. Ouvert depuis 1992, l'un des premiers bars à vin d'Italie à ne servir que de petits producteurs. Une quarantaine de vins au verre. Ferme à 21h : parfait avant la bistecca.",
          repas: [
            { resto: "volpi", reco: true, texte: "Un verre de Chianti Classico ou de vin de petit vigneron, et un crostino chaud : saucisse à la truffe, ou fromage fondu au jambon. Pas trop, il reste la bistecca." }
          ]
        },
        {
          heure: "19h35", titre: "Vers la via Romana", type: "balade",
          aller: { duree: "15 min", via: "Piazza dei Rossi → via Guicciardini → piazza Pitti → piazza San Felice → via Romana", vers: "Osteria dell'Enoteca, Via Romana 70r, Firenze" },
          texte: "La rue des grands-ducs : le couloir de Vasari au-dessus de vos têtes, puis le palais qui a ruiné son constructeur, un poète anglais, et un musée de cire anatomique.",
          regarder: [
            { titre: "Santa Felicita et la loge secrète", img: "santafelicita", texte: "La petite église à gauche, sur sa place. Le couloir de Vasari traverse sa façade : à l'intérieur, une loge grillagée permettait aux Médicis d'assister à la messe sans être vus. Vous y entrerez demain matin pour la Déposition de Pontormo." },
            { titre: "Le Palazzo Pitti", img: "pitti", texte: "Le banquier Luca Pitti voulait un palais plus grand que celui des Médicis, avec des fenêtres aussi larges que leurs portes. Il s'est ruiné. En 1549, Éléonore de Tolède, l'épouse de Cosme Ier, l'a racheté… et y a installé les Médicis. Ironie complète." },
            { titre: "Casa Guidi", img: "casaguidi", texte: "Piazza San Felice, à l'angle de la via Maggio : les poètes anglais <b>Elizabeth Barrett et Robert Browning</b>, enfuis ensemble contre l'avis du père d'Elizabeth, ont vécu ici de 1847 à sa mort en 1861. Une plaque, sur la façade, la remercie d'avoir fait de sa poésie « un anneau d'or entre l'Italie et l'Angleterre »." },
            { titre: "La Specola", img: "specola", texte: "Au n° 17 de la via Romana, l'un des plus anciens musées scientifiques ouverts au public (1775). Il abrite des centaines de modèles anatomiques en cire, d'un réalisme dérangeant, commandés par le grand-duc pour enseigner la médecine sans cadavres." }
          ]
        },
        {
          heure: "20h00", titre: "LA bistecca alla fiorentina", type: "repas",
          resa: "Osteria dell'Enoteca · 20h — À RÉSERVER", resaTodo: true,
          texte: "Le gros effort financier du voyage. La bistecca se commande <b>au poids</b> (compter 1–1,2 kg pour deux), coupée épaisse de deux doigts, avec l'os, et se mange <b>saignante</b> : ne demandez pas « bien cuite », on vous le refusera poliment. Juste du sel, de l'huile, et un Chianti Classico.",
          repas: [
            { resto: "enoteca", reco: true, texte: "Viande toscane du Val di Chiana, grillée simplement. Avant : la <b>terrine de foies de volaille au vin santo</b>, ou la morue fondante sur polenta grillée ; les <b>tortelli aux fèves et pecorino</b> si vous avez encore faim. Après : tiramisu ou crème brûlée au café, et le <b>limoncello maison</b>. Les mêmes propriétaires tiennent l'Enoteca Pitti Gola e Cantina, en face du palais Pitti : la cave est sérieuse." },
            { resto: "cammillo", texte: "Plan B si l'Enoteca est complète : la trattoria de la même famille depuis 1945, borgo San Jacopo. Service à l'ancienne, bistecca solide." },
            { resto: "iraddi", texte: "Plan B moins cher : trattoria de quartier dans une rue calme de l'Oltrarno. Bonne bistecca, peposo." }
          ]
        },
        {
          heure: "22h15", titre: "Retour par la via Maggio", type: "balade",
          aller: { duree: "20 min", via: "Via Romana → via Maggio → Ponte Santa Trinita → via Por Santa Maria → via Vacchereccia → piazza della Signoria → via dei Neri", vers: "Via dei Neri 16, Firenze" },
          texte: "La digestion par la rue des palais de l'Oltrarno, puis l'Arno de nuit.",
          regarder: [
            { titre: "La maison de Bianca Cappello", texte: "Via Maggio, au n° 26, une façade couverte de décors gravés (sgraffites). Elle fut offerte à Bianca Cappello, une Vénitienne en fuite devenue la maîtresse du grand-duc François Ier, puis sa femme. En octobre 1587, ils meurent tous les deux, à quelques heures d'intervalle, dans leur villa de Poggio a Caiano. Paludisme, disait-on ; empoisonnement, murmurait-on. Des analyses récentes ont penché pour l'arsenic." }
          ]
        }
      ]
    },
    {
      id: "mar", court: "Mar 13", date: "2026-10-13",
      titre: "La campagne en pleine ville, jusqu'à San Miniato",
      intro: "Check-out, valises confiées à l'hôte, et une dernière matinée à pied : une Déposition de Pontormo, une ruelle entre les murs et les oliviers, la plus belle église de Florence tout en haut, puis la descente vers San Niccolò pour un déjeuner au comptoir de Zeb. Départ du logement vers 15h10, en tram. S'il pleut, trois plans B au sec plus bas.",
      carte: { depart: "Via dei Neri 16, Firenze", etapes: ["Chiesa di Santa Felicita, Firenze", "Forte di Belvedere, Firenze", "Basilica di San Miniato al Monte, Firenze"], arrivee: "Zeb, Via San Miniato 2r, Firenze" },
      etapes: [
        {
          heure: "9h00", titre: "Check-out et valises", type: "pause",
          texte: "Demandez à l'hôte de garder les valises jusqu'à 15h. Sinon, des consignes à la journée existent dans le centre (Bounce, Radical Storage : réservation sur leur appli). Un dernier café au comptoir de la via dei Neri."
        },
        {
          heure: "9h30", titre: "Santa Felicita et la Déposition de Pontormo", type: "visite", lieu: "santafelicita",
          aller: { duree: "7 min", via: "Via dei Neri → piazza del Pesce → Ponte Vecchio → via Guicciardini → piazza Santa Felicita", vers: "Chiesa di Santa Felicita, Firenze" },
          texte: "Gratuit, ouverte le matin (lun–sam 9h30–12h30). Un quart d'heure suffit, mais c'est l'un des tableaux les plus étranges de la Renaissance. Gardez quelques pièces : l'éclairage des chapelles est souvent payant.",
          regarder: [
            { titre: "La Déposition de Pontormo", img: "pontormo", texte: "Première chapelle à droite (chapelle Capponi, dessinée par Brunelleschi). Pas de croix, pas de paysage : des corps aux couleurs acidulées, rose, bleu ciel, vert d'eau, qui semblent flotter sans poids. Pontormo a travaillé trois ans (1525–1528) enfermé derrière une palissade, sans laisser entrer personne. Le personnage barbu à droite, qui vous regarde, serait son autoportrait." },
            { titre: "La loge des Médicis", texte: "Levez les yeux vers la contre-façade : la fenêtre grillagée au-dessus de l'entrée appartient au couloir de Vasari. Les grands-ducs y suivaient la messe sans descendre parmi les fidèles." }
          ]
        },
        {
          heure: "9h50", titre: "La montée : Costa San Giorgio et les remparts", type: "balade", lieu: "costasangiorgio",
          aller: { duree: "45 min en montée douce, avec les arrêts", via: "Costa de' Magnoli → Costa San Giorgio → Porta San Giorgio → via di Belvedere (le long des remparts) → Porta San Miniato → via del Monte alle Croci", vers: "Basilica di San Miniato al Monte, Firenze" },
          texte: "À dix minutes du Ponte Vecchio, la ville disparaît : une ruelle pavée qui grimpe entre de hauts murs, des villas, des oliviers, puis les remparts médiévaux qui dégringolent la colline. Ça monte, mais par paliers.",
          regarder: [
            { titre: "La maison de Galilée", texte: "Costa San Giorgio, au n° 19, une plaque : Galilée a vécu dans cette maison. Il venait de découvrir les lunes de Jupiter et les avait baptisées « astres médicéens » pour s'attirer la protection des Médicis. Ça a marché : en 1610, il s'installe à Florence comme mathématicien et philosophe du grand-duc." },
            { titre: "La Porta San Giorgio", texte: "La plus ancienne porte de la ville encore debout (1324). Côté campagne, un bas-relief de saint Georges terrassant le dragon. Elle n'a jamais été rabotée : vous voyez la vraie hauteur des portes médiévales." },
            { titre: "Le Forte Belvedere", img: "belvedere", texte: "La forteresse en étoile construite par Buontalenti en 1590. Officiellement, pour défendre la ville. En réalité, ses canons pouvaient aussi viser Florence elle-même et protéger le Palazzo Pitti, juste en dessous, si le peuple se soulevait contre les Médicis. On disait que le trésor des grands-ducs y était caché." },
            { titre: "La via di Belvedere", texte: "La route longe les remparts du XIVe siècle, crénelés, avec des oliviers de l'autre côté. C'est la Toscane des tableaux, sans quitter la ville. Au bout, la minuscule <b>Porta San Miniato</b>, puis la montée finale par la via del Monte alle Croci." }
          ]
        },
        {
          heure: "10h45", titre: "San Miniato al Monte", type: "visite", lieu: "sanminiato",
          texte: "Gratuit, ouvert le matin. La plus belle église romane de Florence, et la plus belle vue, au-dessus de tout. La façade et son aigle doré viennent d'être restaurés (mai 2026). Compter 30–45 min avec la vue et le cimetière. Le guide est dans la fiche.",
          regarder: [
            { titre: "La façade", img: "sanminiato", texte: "Marbre blanc et vert en motifs géométriques, au sommet un aigle doré qui tient un ballot de laine : le symbole de la corporation des marchands de drap, l'Arte di Calimala, qui finançait l'église." },
            { titre: "Le sol de 1207", texte: "Au milieu de la nef, un tapis de marbre marqueté avec les signes du zodiaque, des lions et des colombes. Il a plus de 800 ans : regardez où vous marchez." },
            { titre: "La boutique des moines", texte: "Les moines olivétains, qui chantent encore les offices en grégorien, vendent leur miel, leurs liqueurs et leurs tisanes. Un souvenir qui a du sens." }
          ]
        },
        {
          heure: "11h45", titre: "La descente : Piazzale Michelangelo et San Niccolò", type: "balade",
          aller: { duree: "25 min", via: "San Miniato → escalier vers le viale Galileo → Piazzale Michelangelo → rampes du Poggi → Porta San Niccolò → via di San Niccolò", vers: "Zeb, Via San Miniato 2r, Firenze" },
          texte: "On redescend par le grand balcon de la ville, puis par les escaliers et les grottes artificielles des rampes, jusqu'au petit quartier de San Niccolò.",
          regarder: [
            { titre: "Le Piazzale Michelangelo", img: "piazzale", texte: "Créé en 1869 par l'architecte Giuseppe Poggi, quand Florence était capitale de l'Italie et se donnait des airs de Paris. Il devait accueillir un musée Michel-Ange, jamais fait. De gauche à droite : Santa Croce, le Palazzo Vecchio, la coupole, le campanile, et Fiesole sur sa colline au fond." },
            { titre: "La Porta San Niccolò", img: "portasanniccolo", texte: "La seule porte de la ville qui a gardé sa hauteur d'origine (1324). Au XVIe siècle, on a rabaissé toutes les autres pour que les canons puissent tirer par-dessus ; celle-ci, protégée par la colline, a été épargnée." }
          ]
        },
        {
          heure: "12h30", titre: "Dernier déjeuner à San Niccolò", type: "repas",
          texte: "Zeb ne prend pas de réservation le midi : arrivez vers 12h30, on s'assoit au comptoir face à la cuisine. Pas de stress pour l'horaire : vous êtes à 15 minutes du logement.",
          repas: [
            { resto: "zeb", reco: true, texte: "Un comptoir façon bar à sushis, une mère et son fils, et une ardoise qui change chaque jour. Prenez ce que Giuseppina recommande : pici, ribollita, <b>peposo</b> (bœuf mijoté au poivre et au vin), trippa. Gâteau aux pommes, amandes et pignons pour finir." },
            { resto: "fuoriporta", texte: "Juste à côté, face à la porte médiévale (mar–ven 12h–15h30) : crostoni, pâtes, et un dernier verre parmi 600 vins." },
            { resto: "delfagioli", texte: "S'il pleut et que vous êtes resté au centre : la trattoria familiale à 3 min du logement (lun–ven). Pici à l'aglione, bœuf braisé, cantucci maison." }
          ]
        },
        {
          heure: "14h00", titre: "Une dernière glace, et les valises", type: "balade",
          aller: { duree: "15 min", via: "Via di San Niccolò → Ponte alle Grazie → via de' Benci → via Isola delle Stinche (Vivoli) → via dei Neri", vers: "Vivoli, Via Isola delle Stinche 7r, Firenze" },
          texte: "Retour par le Ponte alle Grazie. Vivoli, l'un des plus anciens glaciers de Florence, est sur le chemin. Récupérez les valises vers 14h45.",
          regarder: [
            { titre: "Le pont des recluses", texte: "Le Ponte alle Grazie médiéval portait de petites maisons et des chapelles. Selon la tradition, des femmes s'y étaient fait emmurer dans de minuscules cellules pour vivre en prière ; on les appelait « le Murate ». Elles ont fini par déménager dans un couvent de la via Ghibellina, devenu ensuite prison, puis aujourd'hui un café littéraire. Le pont actuel date de 1957 : l'ancien a sauté en 1944." },
            { titre: "Le dernier gelato", texte: "Chez Vivoli, l'« affogato » : une boule de glace noyée dans un espresso. Ou une glace au riz, la spécialité d'autrefois." }
          ]
        },
        {
          heure: "15h10", titre: "Départ : tram T2 vers l'aéroport", type: "transport",
          aller: { duree: "18 min à pied avec les valises", via: "Via dei Neri → piazza della Signoria → via de' Calzaiuoli → piazza del Duomo → via de' Cerretani → piazza dell'Unità", vers: "Fermata tramvia Unità, Firenze" },
          texte: "Un dernier passage devant le Duomo. À <b>Unità</b>, tram T2 direction <b>Aeroporto</b> (~20 min). Ticket 2 € à valider (distributeur, ou une carte sans contact par personne). Arrivée à l'aéroport vers 16h, large pour un vol vers 18h."
        }
      ],
      autres: [
        { titre: "Jardins de Boboli", tags: ["calme", "medicis", "vue"], lieux: ["boboli"], texte: "À la place de San Miniato : 10 € au guichet, ouverts dès 8h15. 1h30–2h : l'amphithéâtre, la grotte de Buontalenti, le nain Morgante sur sa tortue, la vue du haut." },
        { titre: "Bargello : la sculpture et les potences", tags: ["pluie", "art"], lieux: ["bargello"], texte: "Ouvert le mardi dès 8h15, 12 €, 1h30. Les deux David de Donatello, les panneaux du concours de 1401, le Bacchus ivre de Michel-Ange. L'ancienne prison où l'on pendait les conjurés." },
        { titre: "Palazzo Vecchio : les intrigues", tags: ["pluie", "medicis"], lieux: ["palazzovecchio"], texte: "Ouvert le mardi 9h–19h, 18 €, 1h30. La cellule de Cosme, le Studiolo secret, le Léonard peut-être caché sous la fresque de Vasari." },
        { titre: "Chapelles Médicis", tags: ["pluie", "medicis", "art"], lieux: ["cappellemedicee"], texte: "Si vous ne les avez pas faites dimanche : ouvertes le mardi, 11 €, 1h. La Nuit et le Jour de Michel-Ange. Déjeuner ensuite chez Da Nerbone, au Mercato Centrale, à 3 min." }
      ]
    }
  ],

  /* ------------------------------------------------------------------ */
  lieux: {
    accademia: {
      nom: "Galleria dell'Accademia — le David", theme: "Musées et palais", zone: "San Marco", img: "davidtribune",
      resume: "Le David, et les Prisonniers qui sortent du marbre.",
      pourquoi: "Aucune photo ne prépare à la taille (5,17 m) ni à la tension du regard. Réservé dimanche 8h15, la meilleure heure : la salle est presque vide pendant un quart d'heure.",
      guide: {
        duree: "1h–1h15",
        conseil: "Ne vous arrêtez nulle part en entrant : suivez « David » jusqu'au fond de la galerie, profitez de la tribune presque vide, faites le tour complet de la statue, puis revenez sur vos pas. Le reste du musée se visite à contre-courant de la foule qui arrive.",
        etapes: [
          { salle: "Tribune (au fond)", titre: "Le David", oeuvres: [
            { nom: "David", auteur: "Michel-Ange", date: "1501–1504", img: "david", texte: "Le bloc, surnommé « le Géant », avait été entamé puis abandonné par deux sculpteurs ; il traînait depuis près de 40 ans dans la cour de l'Opera del Duomo. Michel-Ange, 26 ans, l'obtient en 1501 et en tire le David en trois ans. Ce n'est pas le vainqueur avec la tête de Goliath : c'est <b>l'instant d'avant</b>, le regard qui jauge l'ennemi. Pour la République florentine, qui venait de chasser les Médicis, c'était un manifeste : le petit peuple libre qui tient tête aux tyrans. Installé devant le Palazzo Vecchio en 1504, il y est resté jusqu'en 1873 (une copie l'a remplacé), et cette tribune a été construite exprès pour lui." },
            { nom: "À regarder de près", texte: "Les veines gonflées de la main droite, qui tient la pierre. La fronde qui passe dans le dos (faites le tour). La jambe d'appui, tendue, et le tronc d'arbre qui la soutient discrètement. La tête et les mains, trop grandes : la statue devait être vue d'en bas, hissée sur un contrefort de la cathédrale. En 1991, un homme a frappé le pied gauche au marteau et cassé un orteil : regardez bien, la restauration est invisible." }
          ] },
          { salle: "Galerie des Prisonniers", titre: "Les corps qui sortent de la pierre", oeuvres: [
            { nom: "Les quatre Prisonniers (ou Esclaves)", auteur: "Michel-Ange", date: "vers 1520–1530", img: "atlas", texte: "Prévus pour le tombeau géant du pape Jules II à Rome, réduit puis jamais achevé. Le neveu de Michel-Ange les a donnés à Cosme Ier, qui les a placés dans la grotte de Boboli jusqu'en 1909. Michel-Ange disait que la statue est déjà dans le bloc : le sculpteur ne fait qu'enlever le superflu. Ici, on voit le travail s'arrêter en chemin : un dos poli, une épaule encore brute, un visage pas encore sorti (l'« Atlas » n'a pas de tête, seulement un bloc)." },
            { nom: "Le Prisonnier qui s'éveille", auteur: "Michel-Ange", img: "eveil", texte: "Le plus saisissant : un corps qui s'arrache à la pierre comme d'un sommeil. On voit les traces de la gradine, le ciseau à dents, sur toute la surface." },
            { nom: "Le Jeune Prisonnier", auteur: "Michel-Ange", img: "prisonnierjeune", texte: "Le bras replié sur le visage, comme pour se protéger. Le corps est presque fini, la tête encore prisonnière." },
            { nom: "Saint Matthieu", auteur: "Michel-Ange", date: "1503", img: "saintmatthieu", texte: "Le seul commencé d'une série de douze apôtres commandée pour la cathédrale. Michel-Ange est parti à Rome pour Jules II, et Matthieu est resté à mi-chemin." }
          ] },
          { salle: "Gipsoteca (salle des plâtres)", titre: "Les petits points noirs", oeuvres: [
            { nom: "Les plâtres de Lorenzo Bartolini", date: "XIXe siècle", texte: "Une salle remplie de modèles en plâtre de sculptures du XIXe. Regardez les petits points noirs qui les couvrent : ce sont des clous de repère, qui servaient à reporter chaque mesure du plâtre vers le bloc de marbre. Le contraire de Michel-Ange, qui attaquait directement la pierre." }
          ] },
          { salle: "Salle du Colosse (rez-de-chaussée)", titre: "Un plâtre géant et une noce de 1450", oeuvres: [
            { nom: "L'Enlèvement des Sabines, modèle en plâtre", auteur: "Jean de Bologne", date: "vers 1580", img: "sabines", texte: "Le modèle à taille réelle de la statue en marbre qui est sous la Loggia dei Lanzi (photo). Trois corps en spirale, sans « face » principale : il faut tourner autour. L'artiste n'avait pas de sujet en tête, il voulait juste prouver qu'il savait sculpter trois corps imbriqués ; on a trouvé le titre après." },
            { nom: "Le cassone Adimari", auteur: "Lo Scheggia (le frère de Masaccio)", date: "vers 1450", img: "cassone", texte: "Un panneau de coffre de mariage : un cortège de noce devant le baptistère, sous un dais rouge. Robes à traîne, coiffures extravagantes, musiciens qui soufflent dans leurs trompettes. La mode florentine du Quattrocento, prise sur le vif." }
          ] },
          { salle: "Musée des instruments de musique", titre: "Stradivarius et l'inventeur du piano", oeuvres: [
            { nom: "Les instruments des Médicis", texte: "Une quarantaine d'instruments des collections des grands-ducs, dont un alto de <b>Stradivari</b> fait pour les Médicis, et un épinette ovale de <b>Bartolomeo Cristofori</b>, le facteur de la cour qui a inventé le piano-forte vers 1700, à Florence." }
          ] }
        ]
      },
      histoires: [
        "Le David a été transporté de l'atelier à la piazza della Signoria en 1504 dans une cage de bois roulant sur des rondins : 4 jours pour quelques centaines de mètres, et des jets de pierres de partisans des Médicis la nuit.",
        "En 1527, pendant une émeute contre les Médicis, un banc jeté d'une fenêtre du Palazzo Vecchio lui a cassé le bras gauche en trois morceaux. Le jeune Giorgio Vasari et un ami ont ramassé les morceaux."
      ],
      pratique: { horaires: "Mar–dim 8h15–18h50, fermé le lundi", prix: "24 € (réservé)", duree: "1h–1h15", moment: "Votre créneau : dim 8h15", resa: "✅ Réservé — B-ticket n° 24288201" },
      video: { url: "https://www.youtube.com/watch?v=QdlP8ai8trw", titre: "Le David et la République florentine (Smarthistory, EN)" },
      maps: "Galleria dell'Accademia, Via Ricasoli 58, Firenze"
    },

    offices: {
      nom: "Galerie des Offices (Uffizi)", theme: "Musées et palais", zone: "Centre", img: "venus",
      resume: "La plus grande collection de la Renaissance, à 2 minutes de chez vous.",
      pourquoi: "Botticelli, Léonard, Michel-Ange, Raphaël, Titien, Caravage dans un seul bâtiment. Réservé dimanche 13h45. Depuis juin 2026, les salles Botticelli rénovées mettent la Naissance de Vénus et le Printemps face à face pour la première fois.",
      guide: {
        duree: "2h30–3h",
        conseil: "Montez directement au 2e étage. Suivez le couloir est (statues antiques, plafonds peints de grotesques) dans l'ordre chronologique : des fonds d'or gothiques à Botticelli, puis Léonard. Faites une pause à la fenêtre au bout du couloir, face à l'Arno. Ensuite le couloir ouest (Michel-Ange, Raphaël), puis le 1er étage (Titien, Caravage). Les numéros de salle peuvent changer : fiez-vous aux noms des artistes. Pause possible au café sur le toit de la Loggia dei Lanzi.",
        etapes: [
          { salle: "Salle 2", titre: "Le face-à-face des trois Vierges", oeuvres: [
            { nom: "La Maestà d'Ognissanti", auteur: "Giotto", date: "vers 1310", img: "maestagiotto", texte: "Trois grandes Vierges en majesté dans la même salle : Cimabue, Duccio, Giotto. Comparez. Chez Giotto, la Vierge a un vrai corps sous sa robe, un genou qui avance, un trône en perspective ; les anges regardent vraiment. C'est le début de la peinture moderne. Dante l'avait vu : « Cimabue croyait tenir le champ de la peinture, et maintenant c'est Giotto qu'on acclame »." }
          ] },
          { salle: "Salle 3", titre: "L'or de Sienne", oeuvres: [
            { nom: "L'Annonciation", auteur: "Simone Martini", date: "1333", img: "annonciationmartini", texte: "Les mots de l'ange sortent littéralement de sa bouche, gravés dans l'or : « Ave gratia plena ». Marie recule, effarouchée, en serrant son manteau. Une élégance siennoise qui n'a rien à voir avec la solidité de Giotto." }
          ] },
          { salle: "Salles 5–6", titre: "Le gothique international", oeuvres: [
            { nom: "L'Adoration des Mages", auteur: "Gentile da Fabriano", date: "1423", img: "gentile", texte: "Commandée par Palla Strozzi, l'homme le plus riche de Florence (avant que les Médicis ne l'exilent). De l'or en relief partout, des chevaux, des chiens, des singes, des faucons : un cortège de luxe. Regardez la prédelle en bas, avec une des premières scènes de nuit de la peinture." }
          ] },
          { salle: "Salles 7–8", titre: "Une bataille, un duc sans nez et une nonne enlevée", oeuvres: [
            { nom: "La Bataille de San Romano", auteur: "Paolo Uccello", date: "vers 1438", img: "sanromano", texte: "Un des trois panneaux (les autres sont à Londres et au Louvre) qui décoraient la chambre de <b>Laurent le Magnifique</b> : il les avait obtenus, plus ou moins de force, de la famille qui les avait commandés. Uccello était obsédé par la perspective : lances brisées au sol alignées vers le point de fuite, chevaux comme des jouets." },
            { nom: "Le Duc et la Duchesse d'Urbino", auteur: "Piero della Francesca", date: "vers 1473–1475", img: "ducsurbino", texte: "Federico da Montefeltro est toujours peint de profil gauche : il avait perdu l'œil droit et l'arête du nez dans un tournoi. Son épouse, Battista Sforza, est très pâle : elle est morte à 26 ans en donnant naissance à l'héritier, et le portrait est posthume. Ils se regardent pour l'éternité." },
            { nom: "La Vierge à l'Enfant avec deux anges (la « Lippina »)", auteur: "Filippo Lippi", date: "vers 1465", img: "lippina", texte: "Le modèle serait Lucrezia Buti, une jeune religieuse que le moine-peintre Filippo Lippi a enlevée de son couvent. Le scandale fut énorme, Cosme de Médicis s'en mêla, le pape finit par les relever de leurs vœux. Leur fils, Filippino, deviendra peintre et élève de… Botticelli, lui-même élève de Filippo." }
          ] },
          { salle: "Salles Botticelli (rénovées en juin 2026)", titre: "Vénus et le Printemps, face à face", oeuvres: [
            { nom: "La Naissance de Vénus", auteur: "Botticelli", date: "vers 1485", img: "venus", texte: "Vénus, née de l'écume, arrive sur une coquille. À gauche, Zéphyr et une nymphe soufflent ; à droite, une Heure lui tend un manteau brodé de fleurs. Le cou trop long, l'épaule qui tombe, la pose impossible : Botticelli se moque du réalisme, il veut la grâce. La tradition veut que le visage soit celui de Simonetta Vespucci, la plus belle femme de Florence, aimée (platoniquement ?) de Julien de Médicis, morte de tuberculose à 22 ans. Botticelli a demandé à être enterré à ses pieds, à l'église d'Ognissanti. Il l'est." },
            { nom: "Le Printemps (Primavera)", auteur: "Botticelli", date: "vers 1480", img: "primavera", texte: "Lisez-le de droite à gauche : Zéphyr, bleu, attrape la nymphe Chloris, qui se transforme en Flora, la robe couverte de fleurs. Au centre, Vénus ; au-dessus, Cupidon tire à l'aveugle sur les trois Grâces qui dansent. À gauche, Mercure chasse les nuages avec son caducée. Le sol est un tapis de plusieurs centaines de plantes, presque toutes identifiables. Peint pour un cousin de Laurent le Magnifique, probablement pour un mariage." },
            { nom: "Les Madones de Botticelli", auteur: "Botticelli", texte: "Autour des deux chefs-d'œuvre, les Madones rondes (le Magnificat, la Grenade) : le même visage que Vénus. Le nouvel accrochage les rapproche exprès. Plus tard, Botticelli tombera sous l'influence de Savonarole, et selon Vasari il aurait jeté certaines de ses toiles « païennes » au bûcher des vanités." }
          ] },
          { salle: "Salle 35 — Léonard", titre: "Léonard à 20 ans", oeuvres: [
            { nom: "Le Baptême du Christ", auteur: "Verrocchio et Léonard", date: "1470–1475", img: "bapteme", texte: "Le tableau de l'atelier de Verrocchio, où Léonard était apprenti. L'ange de gauche, de profil, c'est lui. Selon Vasari, en voyant cet ange, Verrocchio aurait décidé de ne plus jamais toucher un pinceau, humilié par son élève." },
            { nom: "L'Annonciation", auteur: "Léonard de Vinci", date: "vers 1472–1476", img: "annonciationleo", texte: "Léonard a une vingtaine d'années. Les ailes de l'ange sont étudiées sur de vrais oiseaux (on les a d'ailleurs allongées plus tard, maladroitement). Au fond, les montagnes bleuissent dans la brume : la perspective atmosphérique, son invention. Dans la même salle, son <b>Adoration des Mages</b> inachevée, un chaos génial resté à l'état de dessin." }
          ] },
          { salle: "La Tribune (salle 18)", titre: "Le coffre à bijoux des Médicis", oeuvres: [
            { nom: "La Tribune", auteur: "Buontalenti", date: "1584", img: "tribuna", texte: "Une salle octogonale qu'on regarde depuis le seuil : coupole incrustée de milliers de coquillages de nacre, sol de marbres précieux, et au centre la Vénus Médicis antique. François Ier y rangeait ses plus grands trésors. C'était l'étape obligée du « Grand Tour » des aristocrates européens au XVIIIe siècle." }
          ] },
          { salle: "La fenêtre sur l'Arno", titre: "La pause", oeuvres: [
            { nom: "La vue", texte: "Au bout du couloir, la fenêtre donne sur le Ponte Vecchio et le couloir de Vasari, qui part juste sous vos pieds et file au-dessus des boutiques. Prenez cinq minutes." }
          ] },
          { salle: "Salle 41 — Michel-Ange et Raphaël", titre: "Les deux génies dans la même salle", oeuvres: [
            { nom: "Le Tondo Doni", auteur: "Michel-Ange", date: "1505–1506", img: "doni", texte: "Sa seule peinture sur bois achevée, faite pour le mariage du riche marchand Agnolo Doni, dans un cadre que Michel-Ange a dessiné. La Vierge, musclée comme un athlète, se tord pour passer l'Enfant à Joseph : on reconnaît le futur peintre de la chapelle Sixtine. Selon Vasari, Doni a voulu payer 40 ducats au lieu de 70 ; Michel-Ange a renvoyé le tableau et exigé 140. Doni a payé." },
            { nom: "La Madone au chardonneret", auteur: "Raphaël", date: "vers 1505", img: "cardellino", texte: "Un cadeau de mariage, lui aussi. En 1547, la maison du propriétaire s'est effondrée dans un glissement de terrain et le tableau s'est brisé en 17 morceaux ; on l'a recollé, puis restauré pendant dix ans (2008). Dans la même salle, Raphaël a peint les portraits… d'Agnolo et Maddalena Doni, les clients de Michel-Ange." }
          ] },
          { salle: "1er étage — Titien et le maniérisme", titre: "La Vénus qui choqua Mark Twain", oeuvres: [
            { nom: "La Vénus d'Urbin", auteur: "Titien", date: "1538", img: "venusurbino", texte: "Un tableau privé pour le duc d'Urbino : une femme nue, qui vous regarde droit dans les yeux, un petit chien endormi à ses pieds (la fidélité), deux servantes qui fouillent un coffre de mariage au fond. Mark Twain, en visite, la trouva « le tableau le plus immonde » du monde. Manet s'en est inspiré pour son Olympia." },
            { nom: "La Madone au long cou", auteur: "Parmigianino", date: "1534–1540", img: "longcou", texte: "Si elle est exposée : le maniérisme poussé à l'extrême. Un cou de cygne, des doigts interminables, un Enfant géant et, au fond, une colonne qui ne soutient rien. Le tableau est resté inachevé." }
          ] },
          { salle: "Salles du Caravage (1er étage)", titre: "Le Caravage et Artemisia", oeuvres: [
            { nom: "Méduse", auteur: "Le Caravage", date: "vers 1597", img: "meduse", texte: "Peinte sur un vrai bouclier de parade, offert par un cardinal au grand-duc Ferdinand Ier. L'instant exact où la tête vient d'être tranchée : la bouche crie encore, le sang gicle. Le visage serait celui du Caravage lui-même." },
            { nom: "Bacchus", auteur: "Le Caravage", date: "vers 1596", img: "bacchuscara", texte: "Un jeune homme un peu éméché, des ongles sales, des fruits qui pourrissent dans la coupe. Dans le reflet de la carafe de vin, en bas à gauche, une restauration a révélé un minuscule autoportrait du peintre à son chevalet." },
            { nom: "Judith décapitant Holopherne", auteur: "Artemisia Gentileschi", date: "vers 1620", img: "judithartemisia", texte: "Le tableau le plus violent du musée. Artemisia avait été violée à 17 ans par son professeur, Agostino Tassi ; au procès, à Rome, c'est elle qu'on a torturée pour vérifier son témoignage. Elle s'installe ensuite à Florence et devient la première femme admise à l'Accademia del Disegno. Ici, Judith ne détourne pas les yeux." }
          ] }
        ]
      },
      histoires: [
        "« Uffizi » veut dire « bureaux » : Vasari a construit le bâtiment en 1560 pour les administrations de Cosme Ier. Les collections ont pris l'étage du dessus.",
        "En 1737 meurt le dernier Médicis. Sa sœur, Anna Maria Luisa, signe le « Pacte de famille » : toutes les œuvres resteront à Florence, pour toujours, « pour l'ornement de l'État et l'utilité du public ». Sans elle, la collection aurait fini à Vienne.",
        "Le 27 mai 1993, la bombe de la via dei Georgofili, juste derrière, a soufflé des salles entières. Plusieurs tableaux ont été détruits ou criblés d'éclats ; certains sont exposés avec leurs blessures."
      ],
      pratique: { horaires: "Mar–dim 8h15–18h30, fermé le lundi", prix: "29 € en prévente (réservé)", duree: "2h30–3h", moment: "Votre créneau : dim 13h45", resa: "✅ Réservé — code 6R325YDT" },
      video: { url: "https://www.youtube.com/watch?v=XBrAu6cBTN0", titre: "La Naissance de Vénus aux Offices (Smarthistory, EN)" },
      maps: "Galleria degli Uffizi, Firenze"
    },

    palazzovecchio: {
      nom: "Palazzo Vecchio", theme: "Musées et palais", zone: "Centre", img: "palazzovecchio",
      resume: "L'hôtel de ville depuis 700 ans, et le palais des intrigues.",
      pourquoi: "Le meilleur endroit pour les Médicis et leurs intrigues : chaque salle a son histoire de pouvoir, d'exil et de secrets. Plan B pluie mardi matin (ouvert 9h–19h).",
      guide: {
        duree: "1h30 (+45 min pour la tour)",
        conseil: "Suivez le parcours fléché du musée. Si vous voulez les passages secrets (escalier du duc d'Athènes, Studiolo vu de l'intérieur), il existe des visites « percorsi segreti » sur réservation.",
        etapes: [
          { salle: "Cour", titre: "Une cour peinte pour une mariée", oeuvres: [
            { nom: "La cour de Michelozzo", texte: "Les murs sont peints de vues de villes autrichiennes : en 1565, on a voulu que Jeanne d'Autriche, qui épousait François de Médicis, se sente chez elle en arrivant. Au centre, un angelot au dauphin d'après Verrocchio." }
          ] },
          { salle: "Salle des Cinq-Cents", titre: "Cerca trova", oeuvres: [
            { nom: "La salle", img: "marciano", texte: "Construite en 1494 pour le Grand Conseil de 500 citoyens voulu par Savonarole. Cosme Ier l'a transformée en salle du trône et Vasari a couvert le plafond de 39 panneaux à sa gloire. Sur les murs, des batailles où Florence écrase Pise et Sienne." },
            { nom: "« Cerca trova »", auteur: "Vasari", texte: "En 1503, Léonard de Vinci avait commencé ici la <b>Bataille d'Anghiari</b>, et Michel-Ange la Bataille de Cascina en face : le duel du siècle. Aucune n'a été finie. Soixante ans plus tard, Vasari peint par-dessus. Dans sa Bataille de Marciano, un minuscule drapeau vert porte les mots « Cerca trova », cherche et tu trouveras. En 2012, des chercheurs ont percé de petits trous dans la fresque et trouvé des traces de pigments derrière ; les sondages ont été arrêtés. Le Léonard est peut-être encore là." },
            { nom: "Le Génie de la Victoire", auteur: "Michel-Ange", date: "1532–1534", img: "genie", texte: "Prévu, lui aussi, pour le tombeau de Jules II. Un jeune homme écrase un vieillard. On a voulu y voir Michel-Ange vieux, vaincu par l'amour d'un jeune Romain." }
          ] },
          { salle: "Studiolo de François Ier", titre: "Le cabinet secret de l'alchimiste", oeuvres: [
            { nom: "Le Studiolo", img: "studiolo", texte: "Une petite pièce sans fenêtre, entièrement peinte. Derrière les panneaux, des armoires où le prince mélancolique rangeait ses trésors, ses pierres, ses fioles : François Ier passait ses nuits à faire de l'alchimie. Une porte dérobée mène à un escalier caché. On le voit depuis l'entrée." }
          ] },
          { salle: "Appartements et salle des Lys", titre: "Judith et Machiavel", oeuvres: [
            { nom: "Judith et Holopherne", auteur: "Donatello", date: "vers 1460", img: "judithdonatello", texte: "L'original. Commandé par les Médicis pour leur jardin, il a été confisqué quand ils ont été chassés en 1495 et posé devant le palais comme avertissement : voilà ce qui arrive aux tyrans. Le même message que le David, dix ans plus tard." },
            { nom: "Le bureau de Machiavel", texte: "Dans la Chancellerie, un buste et un portrait de Nicolas Machiavel, qui travailla ici comme secrétaire de la République de 1498 à 1512. Chassé au retour des Médicis, torturé, il écrira Le Prince… et le dédiera à un Médicis." },
            { nom: "Le masque mortuaire de Dante", texte: "Un masque de plâtre, au visage creusé. Son authenticité est discutée, mais c'est l'image de Dante que Florence s'est choisie." }
          ] },
          { salle: "Salle des Cartes", titre: "Le monde connu en 1560", oeuvres: [
            { nom: "La garde-robe de Cosme", texte: "Une pièce couverte d'armoires peintes de 53 cartes du monde connu, avec au centre un énorme globe terrestre. C'était la garde-robe de Cosme Ier : la carte du monde servait de porte d'armoire." }
          ] },
          { salle: "La tour (billet séparé)", titre: "La cellule de Cosme l'Ancien", oeuvres: [
            { nom: "L'Alberghetto", texte: "En 1433, Cosme l'Ancien, l'homme le plus riche de Florence, y est enfermé par ses rivaux, les Albizi. Craignant le poison, il refuse de manger jusqu'à ce que son geôlier goûte les plats. Il achète sa liberté, part en exil… et revient un an plus tard pour gouverner trente ans. En 1498, Savonarole y passera ses dernières semaines. La tour est fermée s'il pleut." }
          ] }
        ]
      },
      histoires: [
        "La tour est volontairement décentrée : Arnolfo di Cambio l'a bâtie sur une tour plus ancienne, celle des Foraboschi, pour économiser.",
        "Le 26 avril 1478, après l'attentat contre les Médicis, les conjurés tentent de prendre le palais. Ils sont pendus à ses fenêtres le soir même, l'archevêque de Pise compris, toujours en habits."
      ],
      pratique: { horaires: "Tous les jours 9h–19h, jeudi 9h–14h. Tour 9h–17h (fermée s'il pleut).", prix: "Musée 18 €, tour 20 € (tarifs 2026)", duree: "1h30 (+45 min la tour)", moment: "Mardi matin s'il pleut", resa: "Non obligatoire. Visites « parcours secrets » sur réservation." },
      liens: [{ url: "https://ticketsmuseums.comune.fi.it/", texte: "Billetterie des musées civiques" }],
      video: { url: "https://www.youtube.com/watch?v=n5Xb9Ivcco0", titre: "Palazzo Vecchio : pourquoi c'est à voir (EN)" },
      video2: { url: "https://www.youtube.com/watch?v=TW5RMNY0Q7U", titre: "Les passages secrets du Palazzo Vecchio (EN)" },
      maps: "Palazzo Vecchio, Firenze"
    },

    duomo: {
      nom: "Cathédrale Santa Maria del Fiore", theme: "Duomo", zone: "Duomo", img: "duomo",
      resume: "La coupole que personne ne savait construire, et le lieu d'un assassinat.",
      pourquoi: "L'extérieur est l'un des plus beaux bâtiments du monde. L'intérieur, gratuit, est sobre mais plein d'histoires. Lundi 13h45.",
      guide: {
        duree: "30–45 min",
        conseil: "Faites le tour dans le sens des aiguilles d'une montre : contre-façade (horloge), mur gauche (Hawkwood, Dante), puis le chœur sous la coupole. La crypte de Santa Reparata est incluse dans le Giotto Pass.",
        etapes: [
          { salle: "Contre-façade", titre: "L'heure italienne", oeuvres: [
            { nom: "L'horloge de Paolo Uccello", date: "1443", img: "horloge", texte: "Une seule aiguille, qui tourne à l'envers, et 24 heures : la journée commençait au coucher du soleil (« l'heure italienne »). Les quatre têtes aux coins sont des prophètes. Elle marche toujours." }
          ] },
          { salle: "Mur de gauche", titre: "Un mercenaire et un exilé", oeuvres: [
            { nom: "Monument à John Hawkwood", auteur: "Paolo Uccello", date: "1436", img: "hawkwood", texte: "Le condottiere anglais (« Giovanni Acuto » pour les Florentins) avait servi la ville pendant des années. On lui avait promis un monument équestre en marbre ; on lui a peint un trompe-l'œil vert qui imite le bronze. Beaucoup moins cher, et c'est devenu un chef-d'œuvre." },
            { nom: "Dante et la Divine Comédie", auteur: "Domenico di Michelino", date: "1465", img: "dantemichelino", texte: "Dante devant les murs de Florence, la ville qui l'a exilé, avec le livre ouvert qui l'éclaire. À gauche, la porte de l'Enfer ; derrière, la montagne du Purgatoire. Un hommage tardif : Florence n'a jamais récupéré son corps." }
          ] },
          { salle: "Sous la coupole", titre: "Le 26 avril 1478", oeuvres: [
            { nom: "La conjuration des Pazzi", img: "medaillepazzi", texte: "À la messe de Pâques, au moment de l'élévation, Bernardo Baroncelli et Francesco de' Pazzi poignardent Julien de Médicis (19 coups). Laurent, blessé au cou, saute par-dessus la balustrade du chœur et s'enferme dans la sacristie nord derrière ses portes de bronze (de Luca della Robbia). La médaille de Bertoldo montre les deux scènes : Laurent en haut, Julien assassiné en bas." },
            { nom: "Le Jugement dernier", auteur: "Vasari et Zuccari", date: "1572–1579", img: "jugement", texte: "Plus de 3 600 m² peints à 90 m de haut. Brunelleschi voulait une coupole couverte d'or et de mosaïques ; les Florentins de l'époque ont trouvé cette fresque trop chargée et ont proposé de la gratter. Elle est restée." },
            { nom: "Le soleil sur le sol", texte: "Dans la lanterne de la coupole, un petit trou installé en 1475 par l'astronome Toscanelli projette un rayon de soleil sur une plaque de marbre au sol, au solstice d'été : la cathédrale servait aussi de gigantesque cadran solaire." }
          ] },
          { salle: "Crypte de Santa Reparata (pass)", titre: "Sous la cathédrale, une autre cathédrale", oeuvres: [
            { nom: "Les fouilles", texte: "Les restes de l'ancienne cathédrale paléochrétienne, avec ses mosaïques au sol. Et une simple dalle : la tombe de <b>Brunelleschi</b>, honneur rarissime pour un artisan." }
          ] }
        ]
      },
      histoires: [
        "Commencée en 1296, la cathédrale est restée avec un trou de 45 m au-dessus du chœur pendant des décennies : personne ne savait couvrir une telle portée. Brunelleschi, orfèvre de formation, gagna le concours de 1418. Selon Vasari, il défia ses rivaux de faire tenir un œuf debout ; personne n'y arrivant, il cassa la pointe et le posa. « On aurait pu le faire ! » — « Oui, et vous auriez su construire la coupole si je vous avais montré mon plan. »",
        "Sa coupole tient sans cintre en bois grâce à deux coques emboîtées et des briques posées en arête de poisson, qui se bloquent mutuellement pendant que le mortier sèche. Il a aussi inventé les machines de levage pour monter les matériaux, tirées par des bœufs qui n'avaient jamais besoin de faire demi-tour."
      ],
      pratique: { horaires: "Lun–sam 10h15–15h45. Dimanche : messes seulement.", prix: "Gratuit (crypte avec le Giotto Pass)", duree: "30–45 min", moment: "Lundi 13h45", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=_IOPlGPQPuM", titre: "Comment un amateur a construit la plus grande coupole du monde (EN)" },
      video2: { url: "https://www.youtube.com/watch?v=FNxa97pJzbk", titre: "L'assassinat de Julien de Médicis, 1478 (EN)" },
      maps: "Cattedrale di Santa Maria del Fiore, Firenze"
    },

    museoopera: {
      nom: "Musée de l'Opera del Duomo", theme: "Duomo", zone: "Duomo", img: "pietabandini",
      resume: "Les originaux, à hauteur d'yeux.",
      pourquoi: "Sous-estimé et inclus dans le Giotto Pass : les vraies portes du Paradis, la Madeleine de Donatello, une Pietà de Michel-Ange et les outils de Brunelleschi. Lundi 14h45.",
      guide: {
        duree: "1h–1h15",
        conseil: "Commencez par la grande salle du Paradis (rez-de-chaussée), puis montez : Michel-Ange, Donatello, les cantorie, Brunelleschi. Finissez par la terrasse, avec la coupole à portée de main.",
        etapes: [
          { salle: "Salle du Paradis", titre: "La place médiévale reconstituée", oeuvres: [
            { nom: "La façade d'Arnolfo", texte: "Une salle immense reconstitue la façade médiévale de la cathédrale, démolie en 1587, avec ses statues d'origine. En face, les portes originales du baptistère." },
            { nom: "Les portes du Paradis (originaux)", auteur: "Ghiberti", date: "1425–1452", img: "paradis", texte: "Dix panneaux de bronze doré, de l'Ancien Testament. Ghiberti y abandonne les cadres gothiques pour de vraies scènes en perspective, avec des dizaines de personnages. Michel-Ange les aurait trouvées dignes d'être les portes du Paradis. La crue de 1966 en avait arraché plusieurs panneaux ; la restauration a duré plus de vingt ans." }
          ] },
          { salle: "Salle de la Pietà", titre: "La statue que Michel-Ange voulait détruire", oeuvres: [
            { nom: "La Pietà Bandini", auteur: "Michel-Ange", date: "vers 1547–1555", img: "pietabandini", texte: "Faite pour son propre tombeau. Le vieil homme encapuchonné qui soutient le Christ, Nicodème, a les traits de Michel-Ange. Mécontent (un défaut du marbre, ou une crise), il l'a frappée au marteau : il manque la jambe gauche du Christ. Un élève a recollé ce qu'il pouvait." }
          ] },
          { salle: "Salle Donatello", titre: "La sainte décharnée et le « Zuccone »", oeuvres: [
            { nom: "Marie-Madeleine pénitente", auteur: "Donatello", date: "vers 1455", img: "madeleine", texte: "En bois de peuplier, les yeux creux, couverte de ses seuls cheveux après trente ans de désert. Une sculpture d'une modernité saisissante. Endommagée par la crue de 1966, sa restauration a révélé des traces de dorure dans les cheveux." },
            { nom: "Le prophète Habacuc, dit « lo Zuccone »", auteur: "Donatello", texte: "Le « gros crâne chauve », prévu pour le campanile. Selon Vasari, Donatello lui hurlait en le sculptant : « Parle, parle donc ! » tant il le trouvait vivant." }
          ] },
          { salle: "Salle de Brunelleschi", titre: "Les outils du génie", oeuvres: [
            { nom: "Le chantier de la coupole", texte: "Les maquettes en bois de la lanterne, les poulies et les outils du chantier, et le masque mortuaire de Brunelleschi. On comprend comment il a fait." }
          ] }
        ]
      },
      pratique: { horaires: "Tous les jours ~8h30–19h (fermé le 1er mardi du mois)", prix: "Inclus dans le Giotto Pass", duree: "1h–1h15", moment: "Lundi 14h45", resa: "Avec le pass" },
      maps: "Museo dell'Opera del Duomo, Firenze"
    },

    campanile: {
      nom: "Campanile de Giotto", theme: "Duomo", zone: "Duomo", img: "campanile",
      resume: "414 marches, et la coupole juste en face.",
      pourquoi: "Remplace la coupole (complète) : on monte moins haut, mais on a la coupole dans la vue, ce qui est mieux pour la photo. En fin de journée, la lumière dorée sur les toits.",
      histoires: [
        "Giotto, le peintre, nommé architecte de la ville à près de 70 ans, n'a vu que le premier niveau : il meurt en 1337. Andrea Pisano puis Francesco Talenti achèvent la tour, qui monte à 84,7 m.",
        "Les bas-reliefs du bas racontent l'histoire de l'humanité par les métiers : le tissage, la navigation, l'astronomie… et Dédale qui vole. Ce sont des copies : les originaux sont au musée de l'Opera.",
        "Depuis mars 2026, la tour subit sa première restauration complète en 700 ans (environ 4 ans), de haut en bas."
      ],
      regarder: ["Les marbres blanc (Carrare), vert (Prato) et rose (Maremme).", "Au sommet, la vue à hauteur du tambour de la coupole, et les gens minuscules sur sa terrasse."],
      pratique: { horaires: "Tous les jours, créneaux jusqu'à ~18h45", prix: "Giotto Pass 20 € (tour + baptistère + musée + crypte)", duree: "45 min–1h", moment: "Lun 12 vers 16h30–17h", resa: "🟡 À réserver — créneau fixe" },
      liens: [{ url: "https://tickets.duomo.firenze.it/en/", texte: "Réserver le Giotto Pass (officiel)" }],
      maps: "Campanile di Giotto, Firenze"
    },

    battistero: {
      nom: "Baptistère Saint-Jean", theme: "Duomo", zone: "Duomo", img: "baptistere",
      resume: "Les portes du Paradis, le concours qui a lancé la Renaissance, et un pape déchu.",
      pourquoi: "Le plus vieux bâtiment de la place. Inclus dans le Giotto Pass. Les portes se regardent dehors, gratuitement, à toute heure.",
      histoires: [
        "Dante y a été baptisé et l'appelle « mon beau Saint-Jean ». Presque tous les Florentins l'ont été pendant des siècles.",
        "En 1401, concours pour les portes nord : Ghiberti, 23 ans, bat Brunelleschi. Vexé, Brunelleschi part à Rome étudier les ruines antiques… et en revient avec ce qu'il faut pour construire la coupole. Les deux panneaux du concours sont au Bargello, côte à côte.",
        "À l'intérieur, le tombeau de l'antipape Jean XXIII (Baldassare Cossa, déposé en 1415), sculpté par Donatello et Michelozzo. Il avait pour banquier et ami Giovanni de' Medici, le père de Cosme, qui a obtenu cette place d'honneur. Le pape régnant a protesté contre l'inscription « autrefois pape » ; Florence ne l'a pas changée."
      ],
      regarder: ["Dans le cadre des portes du Paradis (côté cathédrale), Ghiberti a glissé son autoportrait : un petit crâne chauve qui vous regarde.", "Dans la coupole de mosaïques, le grand Christ du Jugement et, en dessous, Satan qui dévore les damnés (en partie masqué par la restauration).", "Le sol en marqueterie avec un zodiaque."],
      pratique: { horaires: "Tous les jours jusqu'en début de soirée", prix: "Inclus dans le Giotto Pass", duree: "20–30 min", moment: "Lundi 17h30, après le campanile", resa: "Avec le pass" },
      video: { url: "https://www.youtube.com/watch?v=fWkewBPMKEk", titre: "Ghiberti, les portes du Paradis (Smarthistory, EN)" },
      maps: "Battistero di San Giovanni, Firenze"
    },

    santacroce: {
      nom: "Basilique Santa Croce", theme: "Églises", zone: "Santa Croce", img: "santacroce",
      resume: "Le panthéon des génies italiens, à 4 minutes de chez vous.",
      pourquoi: "Michel-Ange, Galilée, Machiavel, Rossini, les fresques de Giotto et la chapelle Pazzi de Brunelleschi. Le quartier autour est vivant et peu touristique. Lundi 9h30.",
      guide: {
        duree: "1h–1h15",
        conseil: "Remontez l'allée de droite (tombeaux), traversez le transept (chapelles de Giotto), redescendez par l'allée de gauche (Galilée), puis sortez dans le cloître vers la chapelle Pazzi et le musée (Cimabue).",
        etapes: [
          { salle: "Allée de droite", titre: "Les tombeaux", oeuvres: [
            { nom: "Le tombeau de Michel-Ange", auteur: "Vasari", date: "1564–1578", img: "tombemichelange", texte: "Mort à Rome à 88 ans, Michel-Ange voulait être enterré à Florence. Le pape refusait de rendre le corps : son neveu l'a fait sortir de Rome caché dans un ballot de marchandises. Les trois femmes assises sont la Peinture, la Sculpture et l'Architecture." },
            { nom: "Le cénotaphe de Dante", date: "1829", texte: "Un tombeau vide. Ravenne garde le corps depuis 1321 ; quand Florence l'a réclamé, en 1519, les moines de Ravenne avaient caché les os dans un mur. On ne les a retrouvés qu'en 1865." },
            { nom: "Le tombeau de Machiavel", date: "1787", texte: "Avec l'épitaphe « Tanto nomini nullum par elogium » : aucun éloge n'est à la hauteur d'un tel nom." },
            { nom: "L'Annonciation Cavalcanti", auteur: "Donatello", date: "vers 1435", img: "cavalcanti", texte: "En pierre dorée, juste après Machiavel. Marie, surprise, se retourne à moitié pour fuir puis s'arrête. Un des plus beaux moments de Donatello, souvent ignoré." }
          ] },
          { salle: "Transept et chœur", titre: "Giotto", oeuvres: [
            { nom: "Les chapelles Bardi et Peruzzi", auteur: "Giotto", date: "vers 1320–1325", texte: "À droite du chœur, deux chapelles peintes par Giotto, la vie de saint François (Bardi) et des deux saints Jean (Peruzzi). La chapelle Bardi sort d'une restauration de quatre ans : le cycle est de nouveau entièrement visible. Regardez la Mort de saint François : les frères qui se penchent sur le corps, chacun avec sa douleur." },
            { nom: "La chapelle Baroncelli", auteur: "Taddeo Gaddi", texte: "Dans le transept droit : l'Annonciation aux bergers, une des premières scènes de nuit de la peinture occidentale, avec l'ange qui éclaire les bergers éblouis." }
          ] },
          { salle: "Allée de gauche", titre: "Galilée, enfin", oeuvres: [
            { nom: "Le tombeau de Galilée", date: "1737", img: "tombegalilee", texte: "Condamné par l'Église en 1633, Galilée n'eut d'abord pas droit à un tombeau : son corps a attendu près d'un siècle dans un réduit près du clocher. Lors du transfert ici, en 1737, des admirateurs lui ont prélevé trois doigts et une dent. Son majeur est au Museo Galileo, à 2 min de chez vous." },
            { nom: "Le crucifix du « paysan »", auteur: "Donatello", texte: "Dans une chapelle du transept gauche, un Christ en bois très réaliste. Selon Vasari, son ami Brunelleschi lui dit qu'il avait mis un paysan sur la croix. Vexé, Donatello le mit au défi de faire mieux ; quand il vit le crucifix de Brunelleschi (à Santa Maria Novella), il en lâcha les œufs qu'il portait dans son tablier." }
          ] },
          { salle: "Cloître", titre: "La chapelle des Pazzi", oeuvres: [
            { nom: "La chapelle Pazzi", auteur: "Brunelleschi", date: "à partir de 1429", img: "pazzi", texte: "Un chef-d'œuvre de la Renaissance, tout en gris et blanc, géométrie pure. Commandée par Andrea de' Pazzi… la famille qui, une génération plus tard, tentera d'assassiner les Médicis. Après l'échec, le nom des Pazzi fut effacé de la ville ; la chapelle, elle, est restée." }
          ] },
          { salle: "Musée (ancien réfectoire)", titre: "La crue de 1966", oeuvres: [
            { nom: "Le crucifix de Cimabue", auteur: "Cimabue", date: "vers 1280", img: "cimabue", texte: "Le 4 novembre 1966, l'eau monte ici à près de 5 m. Le crucifix, gorgé de boue, perd une grande partie de sa peinture (la photo le montre avant). Il est devenu le symbole de la crue et des « anges de la boue ». Cherchez aussi, sur un mur, la ligne qui marque la hauteur de l'eau." },
            { nom: "La Cène", auteur: "Taddeo Gaddi", texte: "Sur tout le mur du fond de l'ancien réfectoire : les moines mangeaient sous le regard des apôtres." }
          ] }
        ]
      },
      histoires: [
        "En 1817, Stendhal sort de Santa Croce le cœur battant, au bord de l'évanouissement devant tant de beauté : c'est l'origine du « syndrome de Stendhal ».",
        "La façade néogothique ne date que de 1863. Son architecte, Niccolò Matas, y aurait placé une étoile de David et, juif, aurait été enterré sous les marches plutôt que dans l'église. Les historiens discutent encore de la part de légende."
      ],
      pratique: { horaires: "Lun–sam 9h30–17h30, dim 12h30–17h45", prix: "≈ 10 €", duree: "1h–1h15", moment: "Lundi 9h30", resa: "Non (billetterie en ligne possible)" },
      liens: [{ url: "https://www.santacroceopera.it/en/", texte: "Site officiel" }],
      video: { url: "https://www.youtube.com/watch?v=cpcM38xnX_E", titre: "Les tombeaux de Santa Croce (EN)" },
      maps: "Basilica di Santa Croce, Firenze"
    },

    cappellemedicee: {
      nom: "Chapelles Médicis", theme: "Musées et palais", zone: "San Lorenzo", img: "chapelleprinces",
      resume: "Le mausolée des Médicis, et Michel-Ange à son plus sombre.",
      pourquoi: "Deux mondes : la chapelle des Princes, démesurée, en marbres et pierres précieuses, et la Nouvelle Sacristie, sobre, avec les quatre allégories de Michel-Ange. Ouvertes du mardi au dimanche : option dimanche matin, ou mardi s'il pleut.",
      guide: {
        duree: "1h",
        conseil: "On entre par la crypte (tombes des grands-ducs), on monte à la chapelle des Princes, puis un couloir mène à la Nouvelle Sacristie. Gardez la sacristie pour la fin.",
        etapes: [
          { salle: "Chapelle des Princes", titre: "La démesure", oeuvres: [
            { nom: "La chapelle des Princes", date: "à partir de 1604", img: "chapelleprinces", texte: "Les grands-ducs y ont englouti des fortunes en marbres et pierres dures (jaspe, lapis-lazuli, nacre) ; l'Opificio delle Pietre Dure a été créé en partie pour elle. Les 16 blasons des villes toscanes sont en marqueterie de pierre. Elle devait accueillir… le Saint-Sépulcre de Jérusalem, que les Médicis espéraient faire voler. Le projet a échoué." }
          ] },
          { salle: "Nouvelle Sacristie", titre: "La Nuit qui ne veut pas se réveiller", oeuvres: [
            { nom: "La Nuit", auteur: "Michel-Ange", date: "1526–1531", img: "nuit", texte: "Sur le tombeau de Julien, duc de Nemours : la Nuit, le Jour ; en face, sur celui de Laurent, duc d'Urbino : l'Aurore et le Crépuscule. Un poète écrivit que la Nuit semblait si vivante qu'il suffisait de la réveiller. Michel-Ange, qui détestait les Médicis revenus au pouvoir, fit répondre la statue : « Il m'est doux de dormir, et plus encore d'être de pierre, tant que durent la honte et le malheur ; ne pas voir, ne pas sentir est ma chance. Ne me réveille pas, parle bas. »" },
            { nom: "Laurent le Magnifique, sans monument", texte: "Le plus grand des Médicis et son frère Julien, assassiné en 1478, sont dans un simple sarcophage sous la Vierge à l'Enfant de Michel-Ange, contre le mur de l'entrée. Le grand tombeau prévu pour eux n'a jamais été fait." }
          ] }
        ]
      },
      histoires: [
        "En 1530, Michel-Ange, recherché pour avoir défendu la République pendant le siège, se serait caché plusieurs semaines dans une pièce secrète sous la sacristie, dont il a couvert les murs de dessins au charbon (visite spéciale, sur réservation, très limitée).",
        "Dans la crypte repose Anna Maria Luisa, la dernière Médicis, qui a légué toutes les collections de la famille à Florence en 1737."
      ],
      pratique: { horaires: "Mar–dim 8h15–18h50, fermé le lundi", prix: "11 €", duree: "1h", moment: "Dimanche matin ou mardi", resa: "Non obligatoire" },
      video: { url: "https://www.youtube.com/watch?v=5gVlGU4zUeY", titre: "Michel-Ange, la Nouvelle Sacristie (Smarthistory, EN)" },
      maps: "Cappelle Medicee, Piazza di Madonna degli Aldobrandini, Firenze"
    },

    bargello: {
      nom: "Bargello", theme: "Musées et palais", zone: "Centre", img: "daviddonatello",
      resume: "L'ancienne prison, devenue le plus beau musée de sculpture.",
      pourquoi: "Moins de monde que les Offices, et des histoires de potence. Plan B pluie mardi matin (ouvert dès 8h15, fermé le lundi).",
      guide: {
        duree: "1h30",
        conseil: "Commencez par la cour, montez par le grand escalier au salon de Donatello (1er étage), puis redescendez à la salle de Michel-Ange (rez-de-chaussée).",
        etapes: [
          { salle: "La cour", titre: "Les blasons et la potence", oeuvres: [
            { nom: "La cour du Podestà", texte: "Les murs sont couverts des blasons des magistrats qui ont gouverné ici. Au centre se dressait l'échafaud : on exécutait dans la cour jusqu'en 1786, quand le grand-duc Pierre-Léopold fit brûler les instruments de torture et abolit la peine de mort. La Toscane fut le premier État au monde à le faire." }
          ] },
          { salle: "Salon de Donatello", titre: "Le premier nu depuis l'Antiquité", oeuvres: [
            { nom: "David (bronze)", auteur: "Donatello", date: "vers 1440", img: "daviddonatello", texte: "Le premier nu en pied fondu en bronze depuis l'Antiquité. Un adolescent au chapeau de berger, la main sur la hanche, le pied sur la tête de Goliath, presque provocant. Il était dans la cour du palais Médicis." },
            { nom: "Saint Georges", auteur: "Donatello", date: "1416", img: "saintgeorges", texte: "L'original de la statue de la corporation des armuriers à Orsanmichele. Le regard tendu vers l'ennemi annonce le David de Michel-Ange." },
            { nom: "Le concours de 1401 : le panneau de Ghiberti", auteur: "Ghiberti", img: "isaacghiberti", texte: "Les deux panneaux du concours pour les portes du baptistère sont côte à côte. Celui de Ghiberti : élégant, fondu presque d'un seul bloc, donc plus léger en bronze et moins cher. Le jury l'a choisi." },
            { nom: "Le concours de 1401 : le panneau de Brunelleschi", auteur: "Brunelleschi", img: "isaacbrunelleschi", texte: "Plus dramatique : l'ange saisit le bras d'Abraham au moment où le couteau touche la gorge d'Isaac. Vexé d'avoir perdu, Brunelleschi abandonna la sculpture pour l'architecture… et construisit la coupole. À vous de juger." }
          ] },
          { salle: "Salle de Michel-Ange", titre: "Un dieu ivre et un tyrannicide", oeuvres: [
            { nom: "Bacchus", auteur: "Michel-Ange", date: "1496–1497", img: "bacchusmichelange", texte: "Sa première grande statue, à 21 ans, pour un cardinal romain qui l'a refusée : trop réaliste, ce dieu qui titube, les yeux vagues. Derrière lui, un petit satyre lui vole son raisin." },
            { nom: "Le Tondo Pitti", auteur: "Michel-Ange", img: "tondopitti", texte: "Un médaillon de marbre où la Vierge semble sortir de la pierre brute, comme les Prisonniers de l'Accademia." },
            { nom: "Mercure volant", auteur: "Jean de Bologne", img: "mercure", texte: "Un dieu en équilibre sur un souffle de vent (sorti de la bouche de Zéphyr) : la statue la plus copiée du monde." }
          ] }
        ]
      },
      histoires: [
        "Palais du Podestà, puis siège du chef de la police (le « bargello ») et prison. Après la conjuration des Pazzi, Botticelli fut payé pour peindre les conjurés pendus sur la façade, en guise d'avertissement. En 1479, Bernardo Baroncelli, l'assassin de Julien, y fut pendu à une fenêtre : Léonard de Vinci, dans la foule, dessina le corps (le dessin est à Bayonne).",
        "Machiavel y a été torturé à l'estrapade en 1513, soupçonné de complot contre les Médicis. Libéré, il écrit Le Prince… et le dédie à un Médicis."
      ],
      pratique: { horaires: "Mar–dim 8h15–18h50, fermé le lundi", prix: "12 €", duree: "1h30", moment: "Mardi matin (ou si pluie)", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=6kUUJJV_MNA", titre: "Le David de Donatello (Smarthistory, EN)" },
      maps: "Museo Nazionale del Bargello, Firenze"
    },

    sanminiato: {
      nom: "San Miniato al Monte", theme: "Jardins et vues", zone: "Oltrarno", img: "sanminiato",
      resume: "La plus belle église, et la plus belle vue, au-dessus de tout.",
      pourquoi: "Plus calme que le Piazzale Michelangelo juste en dessous, avec une vue plus large. L'intérieur, roman, est l'un des plus beaux de Florence. Gratuit. Façade fraîchement restaurée (mai 2026). Mardi matin.",
      guide: {
        duree: "30–45 min",
        conseil: "Entrez, avancez sur le pavement, descendez à la crypte, remontez au chœur surélevé par les escaliers latéraux, finissez par la sacristie et la chapelle du cardinal du Portugal (à gauche en entrant).",
        etapes: [
          { salle: "Nef", titre: "Le tapis de marbre", oeuvres: [
            { nom: "Le pavement de 1207", texte: "Marqueterie de marbre avec les signes du zodiaque, des lions, des colombes. Plus de 800 ans sous les pieds des fidèles." },
            { nom: "La chapelle du cardinal du Portugal", texte: "Un prince portugais mort à Florence à 25 ans, en 1459. Sa famille lui a offert une chapelle Renaissance parfaite : tombeau de Rossellino, plafond en céramique bleue de Luca della Robbia." }
          ] },
          { salle: "Crypte et chœur", titre: "Là où repose Minias", oeuvres: [
            { nom: "La crypte", texte: "La partie la plus ancienne (XIe siècle), une forêt de colonnes. La légende dit que Minias, un prince arménien chrétien décapité vers 250 près de l'Arno, ramassa sa tête, traversa le fleuve et monta jusqu'ici pour mourir." },
            { nom: "La mosaïque de l'abside", date: "1297", texte: "Le Christ entre la Vierge et saint Minias, qui tend sa couronne." },
            { nom: "La sacristie", auteur: "Spinello Aretino", date: "1387", texte: "La vie de saint Benoît en fresques aux couleurs encore vives." }
          ] },
          { salle: "Dehors", titre: "Le cimetière et la vue", oeuvres: [
            { nom: "Les Porte Sante", texte: "Le cimetière monumental autour de l'église. Carlo Collodi, l'auteur de Pinocchio, y est enterré." },
            { nom: "Le campanile et les matelas", texte: "En 1529, pendant le siège de Florence, Michel-Ange dirigeait les fortifications. Le campanile servait de poste d'artillerie : pour le protéger des boulets, il le fit envelopper de matelas de laine." }
          ] }
        ]
      },
      pratique: { horaires: "Lun–sam ~9h30–13h et 15h–19h (horaires monastiques, variables)", prix: "Gratuit", duree: "30–45 min + la vue", moment: "Mardi vers 10h45", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=ZT2wW1O16IQ", titre: "San Miniato al Monte (EN)" },
      maps: "Basilica di San Miniato al Monte, Firenze"
    },

    santafelicita: {
      nom: "Santa Felicita", theme: "Églises", zone: "Oltrarno", img: "santafelicita",
      resume: "Une Déposition irréelle, et la loge secrète des Médicis.",
      pourquoi: "Gratuit, 15 minutes, juste après le Ponte Vecchio. L'un des tableaux les plus étranges de la Renaissance, et le couloir de Vasari qui traverse l'église. Mardi 9h30.",
      histoires: [
        "Pontormo a peint la Déposition (1525–1528) enfermé derrière une palissade pendant trois ans, sans laisser entrer personne, pas même le commanditaire, Ludovico Capponi.",
        "Le couloir de Vasari passe sur le portique de l'église : une loge grillagée, à l'intérieur, permettait aux grands-ducs de suivre la messe sans être vus."
      ],
      regarder: ["La Déposition de Pontormo, première chapelle à droite : les couleurs acidulées, les corps sans poids, et le barbu à droite qui serait l'autoportrait du peintre.", "En face, l'Annonciation du même Pontormo, de part et d'autre de la fenêtre.", "La fenêtre grillagée de la loge des Médicis, au-dessus de l'entrée."],
      pratique: { horaires: "Lun–sam 9h30–12h30, 15h30–17h30, fermé le dimanche", prix: "Gratuit", duree: "15 min", moment: "Mardi 9h30", resa: "Non" },
      maps: "Chiesa di Santa Felicita, Firenze"
    },

    pontevecchio: {
      nom: "Ponte Vecchio", theme: "Ponts et places", zone: "Centre", img: "pontevecchio",
      resume: "Le pont aux bijoutiers, et le passage secret des Médicis au-dessus.",
      pourquoi: "Le symbole de Florence, et le seul pont épargné en 1944. Bondé en journée : traversez-le de nuit (samedi) ou au coucher du soleil (lundi), et regardez-le surtout depuis le Ponte Santa Trinita.",
      histoires: [
        "Jusqu'en 1593, le pont était occupé par des bouchers et des tanneurs qui jetaient leurs déchets dans l'Arno. Le grand-duc Ferdinand Ier, qui passait au-dessus par son couloir privé, n'en supportait plus l'odeur : il les a expulsés et remplacés par des orfèvres. Ils y sont toujours.",
        "Le couloir de Vasari, au-dessus des boutiques, a été construit en cinq mois en 1565 pour le mariage de François Ier : les Médicis pouvaient aller du Palazzo Vecchio au Palazzo Pitti sans jamais se mêler au peuple. Côté Oltrarno, la famille Mannelli a refusé de démolir sa tour : le couloir la contourne sur des consoles.",
        "Le matin de Pâques 1216, à l'entrée du pont côté ville, le jeune Buondelmonte fut assassiné par les Amidei pour avoir rompu ses fiançailles. Pour les chroniqueurs, c'est le début de la guerre entre Guelfes et Gibelins.",
        "Août 1944 : les Allemands en retraite font sauter tous les ponts de Florence, sauf celui-ci. À la place, ils dynamitent les maisons médiévales des deux côtés pour bloquer l'accès."
      ],
      regarder: ["Au milieu, le buste de Benvenuto Cellini, le plus célèbre orfèvre de la ville.", "Les petites fenêtres rondes du couloir, au-dessus des boutiques.", "Les boutiques en encorbellement, soutenues par des poutres au-dessus de l'eau.", "Via Por Santa Maria, la tour des Amidei et ses deux têtes de lion."],
      pratique: { horaires: "Toujours accessible", prix: "Gratuit", duree: "10 min", moment: "La nuit, ou au coucher du soleil", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=yRc_YbhejXk", titre: "Pourquoi les Médicis ont transformé ce pont (EN)" },
      video2: { url: "https://www.youtube.com/watch?v=QNSh4V1MhYU", titre: "Les passages secrets du couloir de Vasari (EN)" },
      maps: "Ponte Vecchio, Firenze"
    },
    santatrinita: {
      nom: "Ponte Santa Trinita", theme: "Ponts et places", zone: "Centre", img: "santatrinitapont",
      resume: "Le plus élégant des ponts, et la meilleure vue sur le Ponte Vecchio.",
      pourquoi: "Calme, et c'est d'ici qu'on a la carte postale du Ponte Vecchio, surtout la nuit.",
      histoires: [
        "Ses trois arches elliptiques (1569, Ammannati) ont une courbe si particulière qu'on soupçonne un dessin de Michel-Ange.",
        "Dynamité en 1944, il a été reconstruit à l'identique en 1958 avec ses pierres d'origine repêchées dans l'Arno, et des blocs neufs taillés dans la même carrière de Boboli.",
        "La statue du Printemps a été retrouvée sans sa tête. La ville a promis une récompense : la tête n'a été repêchée qu'en 1961, et remise en place sous les applaudissements."
      ],
      regarder: ["Les quatre statues des saisons aux angles.", "Le Printemps : la ligne de recollage du cou.", "Piazza Santa Trinita, la colonne de la Justice venue des thermes de Caracalla."],
      pratique: { horaires: "Toujours", prix: "Gratuit", duree: "10 min", moment: "Nuit ou coucher du soleil", resa: "Non" },
      maps: "Ponte Santa Trinita, Firenze"
    },
    signoria: {
      nom: "Piazza della Signoria & Loggia dei Lanzi", theme: "Ponts et places", zone: "Centre", img: "signoria",
      resume: "La place du pouvoir, un musée de sculptures en plein air.",
      pourquoi: "Tout s'est joué ici : les assemblées du peuple, les bûchers, les révoltes contre les Médicis. On y passe plusieurs fois par jour depuis votre logement.",
      histoires: [
        "Le 23 mai 1498, le moine Savonarole, qui avait fait brûler ici les « vanités » (miroirs, livres, tableaux) un an plus tôt, y est pendu puis brûlé. Une plaque ronde dans le pavé, devant la fontaine de Neptune, marque l'endroit.",
        "Le David de Michel-Ange se dressait ici, devant le palais, de 1504 à 1873 (c'est une copie aujourd'hui). En 1527, pendant une émeute, un banc jeté d'une fenêtre lui a cassé le bras en trois.",
        "Le Neptune d'Ammannati déplut tellement que les Florentins le surnommèrent « il Biancone » (le gros blanc) et chantaient : « Ammannato, Ammannato, che bel marmo hai rovinato ! » (quel beau marbre tu as gâché).",
        "Sous la Loggia, le Persée de Cellini (1554). Pendant la fonte, le métal figeait : Cellini, fiévreux, a jeté dans le four toute la vaisselle d'étain de sa maison. La statue est sortie entière."
      ],
      regarder: [
        "Sur la façade du Palazzo Vecchio, à droite de la porte, à l'angle avec la via della Ninna : un profil d'homme gravé dans la pierre, « l'Importuno di Michelangelo ». La légende dit que Michel-Ange l'a gravé dans son dos, sans regarder, pour se débarrasser d'un bavard.",
        "L'arrière de la tête de Persée : Cellini y a caché son autoportrait (barbe et visage dans les cheveux du casque).",
        "La plaque de Savonarole dans le pavé, près de la fontaine.",
        "Sous la Loggia, l'Enlèvement des Sabines de Jean de Bologne (le modèle en plâtre est à l'Accademia)."
      ],
      photos: ["persee", "neptune", "importuno", "lanzi", "sabines"],
      pratique: { horaires: "Toujours", prix: "Gratuit", duree: "20 min", moment: "La nuit ou avant 10h", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=1H-pDhiB9yo", titre: "Rick Steves : les lieux des Médicis (EN, court)" },
      maps: "Piazza della Signoria, Firenze"
    },
    orsanmichele: {
      nom: "Orsanmichele", theme: "Églises", zone: "Centre", img: "orsanmichele",
      resume: "Un grenier à blé devenu église, et les statues des corporations.",
      pourquoi: "Sur votre chemin entre la Signoria et le Duomo. Une minute de détour pour les niches extérieures.",
      histoires: [
        "Au départ, c'était le marché aux grains. Une image de la Vierge peinte sur un pilier faisant des miracles, on en a fait une église, et on a stocké le grain à l'étage. Dans les piliers, on voit encore les goulottes par lesquelles le blé descendait.",
        "Chaque corporation (laine, soie, banquiers, médecins…) devait orner une niche extérieure de la statue de son saint. Elles se sont fait concurrence en payant Donatello, Ghiberti, Verrocchio : une compétition artistique en plein air. Les originaux sont au musée, à l'étage, ou au Bargello."
      ],
      regarder: ["Les armoiries des corporations en céramique de della Robbia au-dessus des niches.", "Saint Georges de Donatello (copie ; l'original est au Bargello)."],
      pratique: { horaires: "Extérieur toujours visible ; intérieur horaires variables", prix: "Gratuit", duree: "10 min", moment: "En passant", resa: "Non" },
      maps: "Orsanmichele, Firenze"
    },
    mercatonuovo: {
      nom: "Mercato Nuovo et le Porcellino", theme: "Marchés", zone: "Centre", img: "porcellino",
      resume: "Le sanglier porte-bonheur et la pierre de la honte.",
      pourquoi: "Touristique, mais 5 minutes suffisent, et le chariot de lampredotto à côté est une vraie adresse.",
      histoires: [
        "Frottez le museau du Porcellino (le sanglier de bronze, copie de l'original de Pietro Tacca) et glissez une pièce dans sa gueule : si elle tombe dans la grille, vous reviendrez à Florence.",
        "Au centre de la loggia, une roue de marbre : la « pietra dello scandalo ». Les commerçants en faillite y étaient fessés, pantalons baissés, devant tout le monde. D'où l'expression italienne « rimanere in braghe di tela » (rester en caleçon)."
      ],
      regarder: ["Le museau du sanglier, doré par des millions de mains.", "La roue de marbre au sol."],
      pratique: { horaires: "Toujours (stands en journée)", prix: "Gratuit", duree: "10 min", moment: "En passant", resa: "Non" },
      maps: "Loggia del Mercato Nuovo, Firenze"
    },
    dante: {
      nom: "Le quartier de Dante", theme: "Quartiers", zone: "Centre", img: "smcerchi",
      resume: "La Badia, la tour de la Châtaigne et l'église de Béatrice.",
      pourquoi: "Cinq minutes de chez vous, quelques ruelles où Dante est né et a grandi. Sur le chemin du dimanche soir.",
      histoires: [
        "Dante Alighieri naît ici en 1265. Prieur de la ville en 1300, il est exilé en 1302 par la faction adverse et condamné au bûcher s'il revient. Il ne reverra jamais Florence et meurt à Ravenne en 1321, après avoir écrit la Divine Comédie, où il place plusieurs de ses ennemis florentins en Enfer.",
        "La cloche de la Badia rythmait la vie de la Florence médiévale. Dante s'en souvient avec nostalgie au chant XV du Paradis. En 1373, Boccace donna tout près les premières lectures publiques de la Comédie.",
        "La Torre della Castagna fut le premier siège des Prieurs (1282). On y votait avec des châtaignes.",
        "À Santa Margherita de' Cerchi, la tradition place le mariage de Dante avec Gemma Donati, et la tombe des Portinari, la famille de Béatrice. Un panier recueille les lettres des amoureux à Béatrice."
      ],
      regarder: ["Le clocher pointu de la Badia, via del Proconsolo.", "La petite tour carrée de la Castagna.", "La Casa di Dante : une reconstitution du XXe siècle, pas la vraie maison.", "Le panier de lettres à Béatrice, près de la tombe des Portinari."],
      photos: ["badia", "castagna", "smcerchi"],
      pratique: { horaires: "Rues toujours accessibles ; Santa Margherita : horaires variables", prix: "Gratuit (Casa di Dante payante)", duree: "20 min", moment: "Dimanche vers 18h", resa: "Non" },
      maps: "Chiesa di Santa Margherita de' Cerchi, Firenze"
    },
    museogalileo: {
      nom: "Museo Galileo", theme: "Musées et palais", zone: "Centre", img: "doigtgalilee",
      resume: "Les lunettes de Galilée, et son doigt.",
      pourquoi: "À 2 minutes du logement, sur les quais. Le musée des instruments scientifiques des Médicis : globes, astrolabes, les deux seules lunettes de Galilée conservées. Plan B pluie, ou fin de journée.",
      histoires: [
        "En 1737, lors du transfert du corps de Galilée dans son tombeau de Santa Croce, des admirateurs lui ont prélevé trois doigts et une dent. Le majeur de la main droite est exposé ici, sous une cloche de verre, pointé vers le ciel.",
        "Galilée avait baptisé les lunes de Jupiter « astres médicéens » pour obtenir la protection des Médicis. Les instruments exposés viennent de leur collection."
      ],
      regarder: ["Les deux lunettes de Galilée.", "L'objectif fêlé avec lequel il a découvert les lunes de Jupiter.", "Le doigt, dans son reliquaire."],
      photos: ["museogalileo", "doigtgalilee"],
      pratique: { horaires: "Mar–dim 9h30–18h, lundi 9h30–13h", prix: "14 €", duree: "1h", moment: "Dim 16h30 ou s'il pleut", resa: "Non" },
      maps: "Museo Galileo, Piazza dei Giudici 1, Firenze"
    },
    annunziata: {
      nom: "Piazza Santissima Annunziata", theme: "Ponts et places", zone: "San Marco", img: "innocenti",
      resume: "La place la plus harmonieuse, et la roue des enfants abandonnés.",
      pourquoi: "Calme, élégante, presque sans touristes. Sur le chemin du dimanche soir.",
      histoires: [
        "L'Ospedale degli Innocenti de Brunelleschi (1419) est considéré comme le premier bâtiment de la Renaissance. C'était un orphelinat : à gauche du portique, une petite fenêtre, la « ruota », permettait de déposer un nouveau-né anonymement. Beaucoup d'Italiens nommés Innocenti ou Esposito descendent de ces enfants.",
        "Les médaillons bleus d'Andrea della Robbia représentent des bébés emmaillotés.",
        "Sur le socle de la statue de Ferdinand Ier, un essaim d'abeilles en cercle autour de la reine. On dit qu'on n'arrive jamais à les compter du premier coup."
      ],
      regarder: ["La ruota, à l'extrémité gauche du portique.", "Les abeilles du socle de la statue équestre.", "Les deux fontaines de Pietro Tacca, avec leurs monstres marins."],
      photos: ["innocenti", "ferdinando", "annunziata"],
      pratique: { horaires: "Toujours", prix: "Gratuit", duree: "15 min", moment: "Matin ou soir", resa: "Non" },
      maps: "Piazza della Santissima Annunziata, Firenze"
    },
    medicicriccardi: {
      nom: "Palazzo Medici Riccardi", theme: "Musées et palais", zone: "San Lorenzo", img: "medicicriccardi",
      resume: "La maison des Médicis, et leur portrait de famille en cortège.",
      pourquoi: "Moins connu, donc calme. La minuscule chapelle des Mages vaut à elle seule la visite. Détour possible dimanche matin.",
      histoires: [
        "Cosme l'Ancien avait demandé un projet à Brunelleschi. Il le trouve trop somptueux et choisit Michelozzo et une façade austère. Le pouvoir des Médicis, c'était de ne pas en avoir l'air.",
        "Dans la chapelle des Mages de Benozzo Gozzoli (1459), le cortège des Rois mages traverse la Toscane. On y reconnaît les Médicis, l'empereur de Byzance venu au concile de Florence, et un jeune garçon sur un cheval blanc qu'on identifie traditionnellement à Laurent, 10 ans. Gozzoli s'est peint dans la foule, avec sa signature sur son bonnet.",
        "En avril 1478, après l'attentat du Duomo, Laurent blessé se montra à une fenêtre du palais pour rassurer la foule."
      ],
      regarder: ["Les « fenêtres agenouillées » au rez-de-chaussée, dessinées par Michel-Ange.", "Les anneaux et porte-torches en fer forgé de la façade."],
      photos: ["medicicriccardi", "mages"],
      pratique: { horaires: "Tous les jours 9h–19h sauf mercredi", prix: "~15 €", duree: "45 min–1h", moment: "Dimanche matin", resa: "Non" },
      maps: "Palazzo Medici Riccardi, Via Cavour 3, Firenze"
    },
    sanlorenzo: {
      nom: "San Lorenzo et son quartier", theme: "Quartiers", zone: "San Lorenzo", img: "sanlorenzo",
      resume: "L'église paroissiale des Médicis, à la façade restée nue.",
      pourquoi: "On y passe dimanche matin, sur les traces des Médicis. La façade de briques brutes est une histoire en soi.",
      histoires: [
        "Le pape Léon X (un Médicis) commande la façade à Michel-Ange en 1516. Il passe des années à faire extraire du marbre à Carrare… puis le contrat est annulé. La façade n'a jamais été faite.",
        "Cosme l'Ancien est enterré dans la crypte, juste sous le centre de l'église, avec l'inscription « Pater Patriae », père de la patrie."
      ],
      regarder: ["La façade de briques brutes.", "Les étals de cuir autour : beaucoup de qualité médiocre, à regarder plus qu'à acheter."],
      pratique: { horaires: "Basilique lun–sam 10h–17h30, fermée aux visites le dimanche", prix: "Payant (quelques euros)", duree: "Passage", moment: "Dimanche matin (extérieur)", resa: "Non" },
      maps: "Basilica di San Lorenzo, Firenze"
    },
    mercatocentrale: {
      nom: "Mercato Centrale", theme: "Marchés", zone: "San Lorenzo", img: "mercatocentrale",
      resume: "Une halle de fer et de verre : marché en bas, comptoirs en haut.",
      pourquoi: "Le rez-de-chaussée reste un vrai marché (lun–sam) avec Da Nerbone, depuis 1872. L'étage est un food court pratique, ouvert tous les jours. Pour l'ambiance locale, Sant'Ambrogio est mieux.",
      histoires: [
        "Construite en 1874 par Giuseppe Mengoni, l'architecte de la galerie Victor-Emmanuel de Milan, quand Florence était capitale de l'Italie. Mengoni est mort en tombant de l'échafaudage de sa galerie milanaise, la veille de l'inauguration."
      ],
      regarder: ["Au rez-de-chaussée, le comptoir de Da Nerbone et son panino al bollito « bagnato »."],
      pratique: { horaires: "Étage : tous les jours. Rez-de-chaussée : lun–sam en journée", prix: "10–20 €", duree: "30 min", moment: "Midi", resa: "Non" },
      maps: "Mercato Centrale, Firenze"
    },
    santambrogio: {
      nom: "Marché de Sant'Ambrogio", theme: "Marchés", zone: "Santa Croce", img: "santambrogio",
      resume: "Le marché où font leurs courses les Florentins.",
      pourquoi: "De l'animation locale, aucun car de touristes, et l'un des meilleurs déjeuners pas chers de la ville (Da Rocco). Lundi matin.",
      histoires: [
        "Halle en fonte de 1873, sur la piazza Ghiberti. Dehors, les maraîchers des environs ; dedans, bouchers, tripiers, fromagers.",
        "Règle non écrite : on ne touche pas les fruits et légumes. On montre, le marchand choisit et vous sert."
      ],
      regarder: ["Les tripiers : lampredotto, trippa, et les têtes de veau.", "L'église Sant'Ambrogio, à côté, avec son miracle eucharistique de 1230 et la tombe de Verrocchio."],
      pratique: { horaires: "Lun–sam 7h–14h, fermé le dimanche", prix: "Gratuit", duree: "30–45 min", moment: "Lundi vers 11h", resa: "Non" },
      maps: "Mercato di Sant'Ambrogio, Piazza Lorenzo Ghiberti, Firenze"
    },
    costasangiorgio: {
      nom: "Costa San Giorgio → Forte Belvedere", theme: "Jardins et vues", zone: "Oltrarno", img: "belvedere",
      resume: "La campagne toscane en pleine ville.",
      pourquoi: "Une ruelle qui monte entre de hauts murs, puis des oliviers, des villas et le silence, à 10 minutes du Ponte Vecchio. Gratuit. Mardi matin.",
      histoires: [
        "Au n° 19 de la Costa San Giorgio, une plaque : la maison de Galilée.",
        "Le Forte Belvedere (1590) a officiellement été construit pour défendre la ville. En réalité, ses canons visaient aussi Florence elle-même, au cas où le peuple se soulèverait contre les Médicis. On dit que le trésor des grands-ducs y était caché.",
        "La Porta San Giorgio (1324) est la plus ancienne porte de la ville encore debout, avec son saint Georges terrassant le dragon."
      ],
      regarder: ["La plaque de Galilée.", "La Porta San Giorgio et son bas-relief.", "Les remparts crénelés le long de la via di Belvedere."],
      pratique: { horaires: "Rues toujours ouvertes (le fort a des ouvertures variables)", prix: "Gratuit", duree: "45 min jusqu'à San Miniato", moment: "Matin", resa: "Non" },
      maps: "Costa San Giorgio, Firenze"
    },
    piazzalemichelangelo: {
      nom: "Piazzale Michelangelo", theme: "Jardins et vues", zone: "Oltrarno", img: "piazzale",
      resume: "Le balcon de Florence.",
      pourquoi: "La vue est spectaculaire, mais le parvis est bondé au coucher du soleil. Mardi en fin de matinée, en descendant de San Miniato, c'est plus calme.",
      histoires: [
        "Créé en 1869 par Giuseppe Poggi, quand Florence était la capitale de l'Italie et se donnait des airs de Paris. Il devait accueillir un musée Michel-Ange, jamais fait : le bâtiment est devenu une loggia-restaurant.",
        "Le David de bronze au centre est une copie, posée en 1873."
      ],
      regarder: ["De gauche à droite : Santa Croce, le Palazzo Vecchio, la coupole, le campanile, et derrière, Fiesole sur sa colline."],
      pratique: { horaires: "Toujours", prix: "Gratuit", duree: "20 min", moment: "Mardi vers 11h45", resa: "Non" },
      maps: "Piazzale Michelangelo, Firenze"
    },
    sanniccolo: {
      nom: "San Niccolò", theme: "Quartiers", zone: "Oltrarno", img: "portasanniccolo",
      resume: "Le petit quartier au pied de la colline.",
      pourquoi: "Des bars et des trattorias de quartier, des ruelles, et la seule porte de ville restée à sa hauteur d'origine. Déjeuner du mardi.",
      histoires: [
        "La Porta San Niccolò (1324) est la seule porte de Florence qui n'a pas été rabotée au XVIe siècle : les autres ont été coupées pour que les canons puissent tirer par-dessus."
      ],
      regarder: ["La Porta San Niccolò, puis les rampes de Poggi qui montent au Piazzale.", "La Porta San Miniato, minuscule, dans les remparts."],
      pratique: { horaires: "Toujours", prix: "Gratuit", duree: "—", moment: "Mardi midi", resa: "Non" },
      maps: "Porta San Niccolò, Firenze"
    },
    boboli: {
      nom: "Jardins de Boboli (Palazzo Pitti)", theme: "Jardins et vues", zone: "Oltrarno", img: "boboli",
      resume: "Le jardin des grands-ducs : grottes, statues et vue.",
      pourquoi: "Alternative à San Miniato mardi matin : une flânerie à l'ombre, avec des surprises à chaque allée. Pas besoin de réserver : 10 € au guichet le jour même.",
      histoires: [
        "Le banquier Luca Pitti voulait un palais plus grand que celui des Médicis. Il s'est ruiné en le construisant. Un siècle plus tard, Éléonore de Tolède, l'épouse de Cosme Ier, rachète le palais… et y installe les Médicis.",
        "La grotte de Buontalenti, couverte de concrétions, de faux animaux et de stalactites, abritait les Prisonniers de Michel-Ange (aujourd'hui des copies ; les originaux sont à l'Accademia).",
        "La fontaine de Bacchus, près de la sortie : c'est en réalité Morgante, le nain de la cour de Cosme Ier, nu, ventru, chevauchant une tortue."
      ],
      regarder: ["L'amphithéâtre et son obélisque égyptien.", "La grotte de Buontalenti.", "Le jardin des Chevaliers en haut : vue sur les collines et les oliviers."],
      photos: ["boboli", "grotte", "bacchino", "pitti"],
      pratique: { horaires: "Tous les jours 8h15–18h30 en octobre (fermé les 1er et dernier lundis du mois)", prix: "10 € sur place, 13 € en ligne", duree: "1h30–2h", moment: "Mardi matin", resa: "Non" },
      liens: [{ url: "https://www.uffizi.it/en/boboli-garden", texte: "Infos officielles" }],
      maps: "Giardino di Boboli, Firenze"
    },
    santospirito: {
      nom: "Piazza Santo Spirito (Oltrarno)", theme: "Quartiers", zone: "Oltrarno", img: "santospirito",
      resume: "La place où sortent les Florentins.",
      pourquoi: "Le meilleur endroit pour un verre local, des gens assis sur les marches. Et une église de Brunelleschi avec un Michel-Ange de jeunesse.",
      histoires: [
        "La basilique Santo Spirito est le dernier projet de Brunelleschi. Sa façade est restée nue et plate : comme beaucoup d'églises de Florence, l'argent a manqué.",
        "À l'intérieur, un crucifix en bois sculpté par Michel-Ange à 17 ans. En remerciement, le prieur l'autorisait à étudier les cadavres de l'hôpital du couvent, de nuit. C'est là qu'il a appris l'anatomie."
      ],
      regarder: ["La façade nue, magnifique au coucher du soleil.", "Via Maggio : les palais des grandes familles, dont celui de Bianca Cappello."],
      pratique: { horaires: "Place toujours accessible", prix: "Gratuit", duree: "—", moment: "Fin d'après-midi et soir", resa: "Non" },
      maps: "Piazza Santo Spirito, Firenze"
    },
    brancacci: {
      nom: "Cappella Brancacci", theme: "Églises", zone: "Oltrarno", img: "expulsion",
      resume: "Les fresques où la peinture de la Renaissance est née.",
      pourquoi: "Hors programme, pour les curieux : Masaccio y invente la perspective et le poids des corps en 1425. Petit, intense, 30 minutes. Réservation obligatoire, fermée le mardi.",
      histoires: [
        "Masaccio meurt à 26 ans sans finir le cycle. Puis les Brancacci, ennemis des Médicis, sont exilés : les fresques restent inachevées 50 ans, et c'est Filippino Lippi qui les termine.",
        "Son Adam et Ève chassés du Paradis : Ève hurle, Adam cache son visage. Aucun peintre n'avait montré une telle douleur. Michel-Ange venait les copier jeune… et c'est ici qu'un rival, Torrigiano, lui a cassé le nez d'un coup de poing."
      ],
      regarder: ["Le Tribut : l'ombre portée des personnages, une révolution."],
      photos: ["expulsion", "tribut"],
      pratique: { horaires: "Lun et mer–sam 10h–17h, dim 13h–17h, fermé le mardi", prix: "15 € (tarif 2026)", duree: "30 min", moment: "Lundi, si l'envie est là", resa: "Obligatoire (10 pers. par créneau)" },
      liens: [{ url: "https://ticketsmuseums.comune.fi.it/4_cappella-brancacci/", texte: "Réserver (musées civiques)" }],
      video: { url: "https://www.youtube.com/watch?v=TPVeLWLbO9k", titre: "Masaccio à la chapelle Brancacci (Smarthistory, EN)" },
      maps: "Cappella Brancacci, Piazza del Carmine 14, Firenze"
    },
    buchette: {
      nom: "Les buchette del vino (fenêtres à vin)", theme: "Vin", zone: "Partout", img: "buchetta",
      resume: "Des petites fenêtres en arc dans les façades, pour vendre le vin.",
      pourquoi: "Un détail à guetter partout en vous promenant (il en reste plus de 150), et quelques-unes servent encore un verre.",
      histoires: [
        "En 1559, Cosme Ier autorise les familles nobles à vendre le vin de leurs domaines directement depuis leur palais, sans taxe. On frappait au guichet, un serviteur prenait la fiasque vide et l'argent, et la rendait pleine.",
        "Pendant la peste de 1630, c'était le commerce sans contact : l'argent était passé dans du vinaigre. En 2020, avec le Covid, plusieurs ont rouvert pour servir des cafés, des glaces et des spritz."
      ],
      regarder: ["Babae (via Santo Spirito 21r) sert encore un verre par sa fenêtre en début de soirée.", "En marchant, guettez les petites arcades de pierre à hauteur de poitrine, souvent murées, près des portes des palais."],
      pratique: { horaires: "—", prix: "Un verre ~5–8 €", duree: "—", moment: "Apéro", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=KHLR8RIE_w4", titre: "Les fenêtres à vin de Florence (EN)" },
      maps: "Babae, Via di Santo Spirito 21r, Firenze"
    },
    fiesole: {
      nom: "Fiesole", theme: "Hors de la ville", zone: "Fiesole", img: "fiesole",
      resume: "Le village étrusque perché au-dessus de Florence.",
      pourquoi: "Hors programme : une demi-journée de recul, avec un théâtre romain et la vue sur toute la vallée. Pour une prochaine fois, ou si l'envie de campagne est forte.",
      histoires: [
        "Fiesole est plus ancienne que Florence : une ville étrusque. Les Romains ont fondé Florentia en contrebas en 59 av. J.-C. Pendant des siècles, les deux villes se sont détestées, jusqu'à ce que Florence rase Fiesole en 1125.",
        "Sur le mont Ceceri voisin, Léonard de Vinci aurait fait essayer sa machine volante. Une plaque le rappelle."
      ],
      regarder: ["Le théâtre romain (Ier s. av. J.-C.).", "La montée vers le couvent San Francesco : la plus belle vue."],
      pratique: { horaires: "Zone archéologique, horaires d'automne à vérifier", prix: "Bus 7 depuis San Marco ; zone archéologique ~10 €", duree: "3–4h aller-retour", moment: "Matin", resa: "Non" },
      video: { url: "https://www.youtube.com/watch?v=KGq4uxTV538", titre: "Fiesole, excursion depuis Florence (EN)" },
      maps: "Piazza Mino da Fiesole, Fiesole"
    }
  },

  /* ------------------------------------------------------------------
     RESTOS — gamme : 1 = € (moins de 20 €/pers.), 2 = €€ (25–50 €), 3 = €€€ (50 € et plus), 0 = douceurs (glaces, cafés)
     prio: true = vos trouvailles · prog: true = au programme · quand = où ça tombe dans le programme
     ------------------------------------------------------------------ */
  gammes: [
    { n: 1, nom: "€ Petit budget", sous: "Moins de 20 €/pers. Comptoirs, street food, pizza." },
    { n: 2, nom: "€€ Trattorias & bars à vin", sous: "25–50 €/pers. Le cœur de la cuisine florentine." },
    { n: 3, nom: "€€€ Se faire plaisir", sous: "50 €/pers. et plus. La bistecca et les grandes maisons." },
    { n: 0, nom: "🍦 Glaces & cafés", sous: "Les meilleures glaces et les cafés historiques." }
  ],

  restos: [
    /* ---------- € ---------- */
    { id: "gustarium", gamme: 1, prio: true, prog: true, nom: "Gustarium", zone: "Centre", type: "Pizza al taglio", prix: "8–15 €", quand: "Dim 11 · 12h00",
      horaires: "Mar–dim 12h–15h30 (jusqu'à épuisement, souvent vers 13h) · fermé lundi", adresse: "Via dei Cimatori 24r",
      pourquoi: "Votre trouvaille, et les avis sont unanimes : une pâte légère, alvéolée, qui « fond en bouche », des farines choisies, des garnitures de saison. Le patron explique chaque pizza avec passion et ferme quand tout est vendu.",
      commander: ["3–4 petites parts différentes, au poids, à partager", "Une pizza à la farine complète si elle est proposée", "Un verre de vin"],
      astuce: "Être devant à 12h00 pile. Peu de places assises." },
    { id: "darocco", gamme: 1, prog: true, nom: "Da Rocco", zone: "Santa Croce", type: "Comptoir du marché (midi)", prix: "15–20 €", quand: "Lun 12 · 12h00",
      horaires: "Lun–sam ~11h–14h30 · fermé dimanche", adresse: "Marché de Sant'Ambrogio (dans la halle)",
      pourquoi: "Le repas le plus honnête de Florence : la cantine des marchands et des employés du quartier, tables partagées, plats du jour écrits à la main.",
      commander: ["Ribollita ou pappa al pomodoro", "Bollito (bouilli) ou polpette", "Un quart de vin de la maison"],
      astuce: "Arriver à midi, payer en liquide." },
    { id: "nerbone", gamme: 1, nom: "Da Nerbone", zone: "San Lorenzo", type: "Comptoir du marché", prix: "5–12 €", quand: "Mar 13 midi (si Chapelles Médicis)",
      horaires: "Lun–sam 8h–15h · fermé dimanche", adresse: "Mercato Centrale, rez-de-chaussée",
      pourquoi: "Depuis 1872 au même comptoir, au milieu des bouchers. La référence du panino au lampredotto et au bouilli, où les ouvriers côtoient les touristes.",
      commander: ["Panino al lampredotto « bagnato », salsa verde e piccante", "Ou panino al bollito", "Un verre de rouge au comptoir"],
      astuce: "La file avance vite. Commander d'abord, puis chercher une place au comptoir d'en face." },
    { id: "pollini", gamme: 1, nom: "Lampredotto Pollini (chariot)", zone: "Santa Croce", type: "Street food", prix: "~5 €", quand: "Lun 12 · en allant au marché",
      horaires: "En journée, en semaine (horaires de chariot, variables)", adresse: "Via de' Macci, angle borgo La Croce",
      pourquoi: "Un chariot tenu par la même famille depuis près de 30 ans, cité par le Gambero Rosso parmi les meilleurs de la ville.",
      commander: ["Lampredotto « bagnato » (pain trempé dans le bouillon)", "Avec salsa verde et un peu de piccante"] },
    { id: "semel", gamme: 1, nom: "Semel", zone: "Sant'Ambrogio", type: "Panini d'auteur", prix: "5–8 €", quand: "Lun 12 · option midi",
      horaires: "Lun–sam 11h30–14h30 · fermé dimanche", adresse: "Piazza Lorenzo Ghiberti 44r",
      pourquoi: "Un comptoir minuscule face au marché, où Marco compose chaque jour une poignée de panini avec des produits de grande qualité. On mange debout sur la place, avec un petit verre de vin.",
      commander: ["Le panino du jour, tel quel (il refuse les modifications)", "S'il y en a : l'âne braisé (stracotto di ciuco), ou hareng et pecorino"] },
    { id: "trippaioporcellino", gamme: 1, nom: "Il Trippaio del Porcellino", zone: "Centre", type: "Street food", prix: "~5 €", quand: "Dim 11 · en passant",
      horaires: "En journée", adresse: "Loggia del Mercato Nuovo",
      pourquoi: "Un chariot historique au pied du sanglier : tripes et lampredotto, avec un verre de vin de la maison.",
      commander: ["Panino al lampredotto", "Trippa alla fiorentina en barquette"] },
    { id: "ino", gamme: 1, nom: "'Ino", zone: "Centre", type: "Panini gourmets", prix: "8–12 €", quand: "Dim 11 · plan B de Gustarium",
      horaires: "Tous les jours, en journée (~11h–17h, à vérifier)", adresse: "Via de' Georgofili 3r",
      pourquoi: "Des panini de schiacciata garnis uniquement de produits d'artisans toscans (charcuteries, fromages, sauces). À 2 min des Offices.",
      commander: ["Le panino du jour", "Un verre de vin"] },
    { id: "fratellini", gamme: 1, nom: "I Fratellini", zone: "Centre", type: "Panini + verre", prix: "5–10 €", quand: "Lun ou mar, en passant",
      horaires: "En journée · fermé le dimanche selon plusieurs sources", adresse: "Via dei Cimatori 38r",
      pourquoi: "Un trou dans le mur depuis 1875 : une trentaine de petits panini et un verre de vin, debout dans la ruelle. On pose son verre sur l'étagère du mur d'en face.",
      commander: ["Deux petits panini différents", "Un verre de Chianti"] },
    { id: "casadelvino", gamme: 1, nom: "Casa del Vino", zone: "San Lorenzo", type: "Fiaschetteria", prix: "5–15 €", quand: "Option, près du Mercato Centrale",
      horaires: "Lun–sam en journée (jusqu'en début de soirée ven–sam) · fermé dimanche", adresse: "Via dell'Ariento 16r",
      pourquoi: "Une vraie fiaschetteria d'autrefois, familiale depuis des générations, où l'on boit debout avec les marchands du quartier.",
      commander: ["Schiacciata à la finocchiona et au pecorino", "Un verre de vin au comptoir"] },
    { id: "pizzaiuolo", gamme: 1, nom: "Il Pizzaiuolo", zone: "Santa Croce", type: "Pizzeria napolitaine", prix: "12–20 €", quand: "Sam 10 · option dîner",
      horaires: "Lun–sam midi et soir · fermé dimanche", adresse: "Via de' Macci 113r", tel: "+39 055 241171",
      pourquoi: "La pizzeria tenue par un Napolitain que beaucoup de Florentins citent en premier. Pâte au feu de bois, ambiance de quartier.",
      commander: ["Fusilli c'a ricotta pour commencer", "Margherita ou diavola", "Babà ou pastiera en dessert"],
      astuce: "Réserver le samedi, et prévoir un peu d'attente." },
    { id: "gustapizza", gamme: 1, nom: "Gusta Pizza", zone: "Oltrarno", type: "Pizzeria", prix: "8–15 €", quand: "Option, Oltrarno",
      horaires: "Mar–dim midi et soir · fermé lundi", adresse: "Via Maggio 46r", tel: "+39 055 285068",
      pourquoi: "Pizza au feu de bois sans chichis, à 1 min de Santo Spirito. À emporter pour manger sur les marches de la place.",
      commander: ["Margherita", "Une pizza du jour"] },
    { id: "sabatino", gamme: 1, nom: "Trattoria Sabatino", zone: "Oltrarno", type: "Trattoria familiale", prix: "15–25 €", quand: "Option en semaine",
      horaires: "Lun–ven midi et soir · fermé le week-end", adresse: "Via Pisana 2r (Porta San Frediano)",
      pourquoi: "Depuis 1956, menu tapé à la machine, prix d'un autre temps, zéro touriste.",
      commander: ["Pasta e fagioli", "Gnocchi au ragù", "Rosbif", "Cantucci"] },
    { id: "mario", gamme: 1, nom: "Trattoria Mario", zone: "San Lorenzo", type: "Trattoria (midi)", prix: "20–30 € (bistecca en sus)", quand: "Option en semaine",
      horaires: "Lun–sam midi seulement · fermé dimanche", adresse: "Via Rosina 2r",
      pourquoi: "Depuis 1953, la cantine des Florentins derrière le Mercato Centrale. Tables partagées, cash, pas de réservation : faire la queue vers 11h45.",
      commander: ["Ribollita", "Trippa", "La bistecca, moins chère qu'ailleurs"] },
    { id: "mercatocentrale", gamme: 1, nom: "Mercato Centrale (1er étage)", zone: "San Lorenzo", type: "Comptoirs", prix: "10–20 €", quand: "Dim 11 · plan B du soir",
      horaires: "Tous les jours, jusqu'au soir", adresse: "Piazza del Mercato Centrale",
      pourquoi: "Touristique mais pratique le dimanche soir : des comptoirs de pâtes fraîches, de pizza, de lampredotto, sous la grande verrière.",
      commander: ["Des pâtes fraîches", "Un lampredotto si vous ne l'avez pas encore goûté"] },

    /* ---------- €€ ---------- */
    { id: "vinivecchisapori", gamme: 2, prog: true, nom: "Vini e Vecchi Sapori", zone: "Centre", type: "Osteria", prix: "25–40 €", quand: "Sam 10 · ~21h30",
      horaires: "Lun–sam 12h–14h30, 19h–22h30 · fermé dimanche", adresse: "Via dei Magazzini 3r", tel: "+39 055 293045",
      pourquoi: "Minuscule, bondée d'Italiens, à 3 min du logement, derrière le Palazzo Vecchio. Une cuisine de saison simple et parfaite ; une cheffe étoilée de la ville y recommande les pâtes au canard.",
      commander: ["Pappardelle au canard (leur plat le plus célèbre)", "Crostini de foies de volaille", "Haricots cuits « al fiasco »", "Tiramisu à la framboise"],
      astuce: "Pas de pizza, pas de cappuccino. Réserver." },
    { id: "cibreo", gamme: 2, prog: true, nom: "Cibrèo Trattoria (« il Cibreino »)", zone: "Sant'Ambrogio", type: "Trattoria", prix: "30–45 €", quand: "Dim 11 · ~20h30",
      horaires: "Tous les jours 12h30–14h30, 19h–22h30", adresse: "Via de' Macci 122r", tel: "+39 055 234 1100",
      pourquoi: "Le côté simple de la maison fondée en 1979 par Fabio Picchi, aujourd'hui tenue par son fils. Recommandée par le guide Michelin et le Gambero Rosso. Cuisine florentine de famille, pain sec et soupes, abats.",
      commander: ["Pappa al pomodoro", "Pâté du Cibrèo (foies de volaille)", "Lampredotto in umido", "Gâteau au fromage et marmelade d'oranges amères"],
      astuce: "Réservations possibles maintenant (booking@cibreo.com) : la salle est petite." },
    { id: "zeb", gamme: 2, prog: true, nom: "Zeb", zone: "San Niccolò", type: "Comptoir de cuisine toscane", prix: "25–40 €", quand: "Mar 13 · 12h30",
      horaires: "Midi tous les jours sauf mercredi (12h30–15h) · pas de réservation le midi", adresse: "Via San Miniato 2r",
      pourquoi: "Une adresse familiale (une mère et son fils) que le guide Michelin classe parmi les meilleures tables abordables de Florence. On s'assoit sur des tabourets autour d'un long comptoir, comme dans un bar à sushis, face à la cuisine. Ardoise qui change chaque jour.",
      commander: ["Pici (pâtes roulées à la main)", "Peposo ou trippa", "Ribollita s'il fait frais", "Gâteau aux pommes, amandes et pignons"] },
    { id: "sonora", gamme: 2, prio: true, prog: true, nom: "Vineria Sonora", zone: "San Marco", type: "Bar à vins nature + vinyles", prix: "20–35 €", quand: "Dim 11 · ~18h45",
      horaires: "Mar–dim dès 17h jusque tard · fermé lundi", adresse: "Via degli Alfani 39r", tel: "+39 333 199 9093",
      pourquoi: "Votre incontournable : le bar à vins nature du quartier universitaire, avec une vraie collection de vinyles et une petite cave à emporter. Les guides locaux la décrivent comme un « temple » du vin nature.",
      commander: ["Un pét-nat toscan pour commencer", "Un vin orange ou un rouge de petit vigneron (laissez-les choisir)", "Charcuteries et fromages"] },
    { id: "volpi", gamme: 2, prog: true, nom: "Le Volpi e l'Uva", zone: "Oltrarno", type: "Bar à vin", prix: "20–40 €", quand: "Lun 12 · 18h45",
      horaires: "Lun–sam 11h–21h · fermé dimanche", adresse: "Piazza dei Rossi 1r", tel: "+39 055 239 8132",
      pourquoi: "Depuis 1992, un pionnier : uniquement de petits producteurs, souvent bio. Une quarantaine de vins au verre, un lieu de pèlerinage pour les sommeliers, caché derrière le Ponte Vecchio.",
      commander: ["Crostino chaud à la saucisse truffée", "Asiago fondu au jambon", "Les fromages français du patron"] },
    { id: "fuoriporta", gamme: 2, nom: "Enoteca Fuori Porta", zone: "San Niccolò", type: "Bar à vin + cuisine", prix: "25–40 €", quand: "Sam 10 (plan B) · Mar 13 midi",
      horaires: "Mar–ven 12h–15h30, 19h–23h30 · sam–dim 12h–23h30 · fermé lundi", adresse: "Via del Monte alle Croci 10r", tel: "+39 055 234 2483",
      pourquoi: "L'enoteca de San Niccolò depuis plus de 30 ans : environ 600 vins, terrasse face à la porte médiévale, là où les Florentins aiment finir le week-end.",
      commander: ["Crostoni chauds (6–10 €)", "Pici au sanglier", "Planche de fromages"] },
    { id: "lortone", gamme: 2, nom: "L'Ortone", zone: "Sant'Ambrogio", type: "Trattoria contemporaine", prix: "35–50 €", quand: "Lun 12 · option midi",
      horaires: "Midi tous les jours (12h15–14h30), aussi le soir", adresse: "Piazza Lorenzo Ghiberti 87r", tel: "+39 055 234 0804",
      pourquoi: "Face au marché de Sant'Ambrogio, une trattoria moderne recommandée par le Michelin et le Gambero Rosso : les classiques toscans avec un peu de technique.",
      commander: ["Pici all'aglione", "Gnudi", "Tagliatelle au ragù de sanglier", "Coccoli (beignets) au jambon et stracchino"] },
    { id: "delfagioli", gamme: 2, nom: "Del Fagioli", zone: "Santa Croce", type: "Trattoria familiale", prix: "25–40 €", quand: "Mar 13 midi s'il pleut",
      horaires: "Lun–ven 12h30–14h30, 19h30–22h30 · fermé le week-end", adresse: "Corso dei Tintori 47r", tel: "+39 055 244285",
      pourquoi: "À 3 minutes du logement. Une trattoria rustique et familiale, « référence historique » de la ville pour le guide Michelin. Nappes, carafes, et les Florentins du quartier.",
      commander: ["Pici all'aglione", "Pappa al pomodoro", "Bœuf braisé aux haricots verts", "Cantucci maison"] },
    { id: "magazzino", gamme: 2, nom: "Osteria Tripperia Il Magazzino", zone: "Oltrarno", type: "Osteria des abats", prix: "35–45 €", quand: "Option, Oltrarno",
      horaires: "Midi et soir (à vérifier)", adresse: "Piazza della Passera 2", tel: "+39 055 215969",
      pourquoi: "Tenue par Luca Cai, surnommé le « roi du lampredotto ». Le temple des tripes florentines, dans un ancien entrepôt voûté, sur la plus jolie petite place de l'Oltrarno.",
      commander: ["Polpette de lampredotto", "Raviolis au lampredotto", "Carpaccio de langue", "Trippa alla fiorentina"] },
    { id: "anticofattore", gamme: 2, nom: "Antico Fattore", zone: "Centre", type: "Trattoria historique", prix: "30–45 €", quand: "Dim 11 midi · option",
      horaires: "Mar–dim 12h–15h, 19h–22h30 · fermé lundi", adresse: "Via Lambertesca 1r", tel: "+39 055 288975",
      pourquoi: "La trattoria historique collée aux Offices, ouverte le dimanche.",
      commander: ["Ribollita", "Pappa al pomodoro", "Pâtes maison"] },
    { id: "sostanza", gamme: 2, nom: "Trattoria Sostanza", zone: "Santa Maria Novella", type: "Trattoria historique", prix: "40–50 €", quand: "Option lun–ven",
      horaires: "Lun–ven 12h30–14h, 19h30–21h45 · fermé le week-end", adresse: "Via del Porcellana 25r", tel: "+39 055 212691",
      pourquoi: "Ouverte en 1869, surnommée « il Troia » par les Florentins. Tables communes, murs couverts de photos, et deux plats culte qu'on ne trouve nulle part ailleurs.",
      commander: ["Pollo al burro (poulet au beurre)", "Tortino de carciofi (omelette soufflée aux artichauts)", "Tortellini in brodo", "Gâteau meringué"],
      astuce: "Réserver, toujours complet." },
    { id: "iraddi", gamme: 2, nom: "Trattoria I'Raddi", zone: "Oltrarno", type: "Trattoria", prix: "30–55 €", quand: "Lun 12 · plan B bistecca",
      horaires: "Midi et soir", adresse: "Via d'Ardiglione 47", tel: "+39 055 211072",
      pourquoi: "Trattoria de quartier dans une rue calme, poutres et nappes. Le plan B moins cher pour la bistecca.",
      commander: ["Bistecca", "Peposo", "Tagliolini maison"] },
    { id: "santobevitore", gamme: 2, nom: "Il Santo Bevitore & Il Santino", zone: "Oltrarno", type: "Trattoria + bar à vin", prix: "35–50 €", quand: "Option, Santo Spirito",
      horaires: "Il Santino : tous les jours 12h30–23h", adresse: "Via di Santo Spirito 64r et 60r", tel: "+39 055 211264",
      pourquoi: "Recommandés par le Michelin et le Gambero Rosso. Le Santo Bevitore pour un vrai repas toscan ; son petit frère Il Santino pour un verre et une planche, sans réservation.",
      commander: ["Terrine de foies de volaille", "Ribollita", "Pigeon rôti", "Cantucci et vin santo"] },
    { id: "pittigola", gamme: 2, nom: "Enoteca Pitti Gola e Cantina", zone: "Oltrarno", type: "Bar à vin", prix: "30–50 €", quand: "Option, en face du Palazzo Pitti",
      horaires: "Mer–lun 13h–23h · fermé mardi", adresse: "Piazza de' Pitti 16", tel: "+39 055 212704",
      pourquoi: "Le bar à vin des propriétaires de l'Osteria dell'Enoteca, installé dans une ancienne librairie face au palais Pitti. Spécialistes des vieux Sangiovese et Brunello.",
      commander: ["Un Brunello ou un vieux Chianti Classico au verre", "Charcuteries et fromages"] },

    /* ---------- €€€ ---------- */
    { id: "enoteca", gamme: 3, prio: true, prog: true, nom: "Osteria dell'Enoteca", zone: "Oltrarno", type: "Osteria · bistecca", prix: "70–90 €", quand: "Lun 12 · 20h",
      horaires: "Midi 12h–14h30, soir 19h–23h · fermé mardi", adresse: "Via Romana 70r", tel: "+39 055 228 6018",
      pourquoi: "Votre choix pour la bistecca. Quatre amis passionnés de vin (ceux de Pitti Gola e Cantina) ont ouvert « l'endroit où ils aimeraient manger ». Viande du Val di Chiana, grillée simplement, service attentionné, cave de petits producteurs.",
      commander: ["Bistecca alla fiorentina (≈ 1–1,2 kg pour deux, saignante)", "Terrine de foies de volaille, réduction de vin santo", "Morue fondante sur polenta grillée", "Tortelli aux fèves et pecorino", "Tiramisu ou crème brûlée au café", "Le limoncello maison"],
      astuce: "Réserver maintenant. Demandez au sommelier un Chianti Classico de petit domaine." },
    { id: "cammillo", gamme: 3, nom: "Trattoria Cammillo", zone: "Oltrarno", type: "Trattoria historique", prix: "50–70 €", quand: "Lun 12 · plan B bistecca",
      horaires: "Jeu–lun midi et soir · fermé mardi et mercredi", adresse: "Borgo San Jacopo 57r", tel: "+39 055 212427",
      pourquoi: "Tenue par la même famille depuis 1945. Nappes blanches, service à l'ancienne, un peu désordonné. Bistecca de référence.",
      commander: ["Bistecca", "Pâtes aux cèpes en saison", "Sauge frite", "Légumes sautés"] },
    { id: "bucalapi", gamme: 3, nom: "Buca Lapi", zone: "Santa Maria Novella", type: "Cave historique · bistecca", prix: "60–80 €", quand: "Option",
      horaires: "Le soir (à vérifier)", adresse: "Via del Trebbio 1r",
      pourquoi: "Depuis 1880 dans les caves voûtées du palais Antinori, murs couverts d'affiches de voyage. Bistecca de bœuf marchigiano maturé 21 jours, épaisse de 4–5 cm, grillée au charbon de bois d'olivier.",
      commander: ["Bistecca alla fiorentina", "Haricots à l'huile d'olive"] },
    { id: "oradaria", gamme: 3, nom: "Ora d'Aria", zone: "Centre", type: "Gastronomique (1 étoile Michelin)", prix: "180–200 €", quand: "La folie, à 2 min",
      horaires: "À vérifier · réservation indispensable", adresse: "Via dei Georgofili 11r", tel: "+39 055 200 1699",
      pourquoi: "Pour mémoire : la table étoilée de Marco Stabile, juste derrière les Offices. Cuisine toscane réinventée, menus dégustation. Hors budget de ce voyage, mais c'est la référence du quartier.",
      commander: ["Un menu dégustation"] },

    /* ---------- Glaces & cafés ---------- */
    { id: "gelateriadeineri", gamme: 0, nom: "Gelateria dei Neri", zone: "Centre", type: "Glacier", prix: "3–5 €", quand: "En bas de chez vous",
      horaires: "Journée et soirée", adresse: "Via dei Neri",
      pourquoi: "Dans votre rue, ouverte tard. Glaces artisanales, grand choix ; certains guides locaux la préfèrent même à Vivoli.",
      commander: ["Pistache", "Les parfums de saison du jour"] },
    { id: "vivoli", gamme: 0, nom: "Vivoli", zone: "Centre", type: "Glacier historique", prix: "3–6 €", quand: "Mar 13 · 14h",
      horaires: "Journée", adresse: "Via Isola delle Stinche 7r",
      pourquoi: "L'un des plus anciens glaciers de Florence, né d'une laiterie, à 3 min du logement. Une des rares avec des places assises.",
      commander: ["L'affogato « Gran Crema Caffè » (glace noyée dans l'espresso)", "La glace au riz", "Les sorbets de fruits de saison"] },
    { id: "passera", gamme: 0, nom: "Gelateria della Passera", zone: "Oltrarno", type: "Glacier (Tre Coni)", prix: "3–5 €", quand: "Dans l'Oltrarno",
      horaires: "Journée et soirée", adresse: "Via Toscanella 15r (piazza della Passera)",
      pourquoi: "Distinguée « Tre Coni » par le Gambero Rosso, la plus haute note. Minuscule, une dizaine de parfums par jour, lait de fermes biodynamiques.",
      commander: ["Monnalisa (miel de châtaignier, pomme, noix, raisins au vin santo, fleur d'oranger)", "Pellegrino Artusi (crème au safran)", "Carezza (miel, camomille, lait d'amande)"] },
    { id: "bondi", gamme: 0, nom: "I Gelati del Bondi", zone: "San Lorenzo", type: "Glacier (Tre Coni)", prix: "3–5 €", quand: "Près du Mercato Centrale",
      horaires: "Journée et soirée", adresse: "Via Nazionale 61r",
      pourquoi: "Également « Tre Coni » au Gambero Rosso, depuis 1982.",
      commander: ["Caramel au beurre salé", "Sésame noir", "Huile d'olive"] },
    { id: "sbrino", gamme: 0, nom: "Sbrino — Gelatificio Contadino", zone: "Oltrarno", type: "Glacier", prix: "3–5 €", quand: "Dans l'Oltrarno",
      horaires: "Journée et soirée", adresse: "Via dei Serragli 32r",
      pourquoi: "Des ingrédients qui viennent pour la plupart des fermes des propriétaires.",
      commander: ["Zabaione au marsala", "Speculoos", "Orange-Campari"] },
    { id: "ditta", gamme: 0, nom: "Ditta Artigianale", zone: "Centre", type: "Café de spécialité", prix: "2–6 €", quand: "Lun 12 · 9h15",
      horaires: "Journée", adresse: "Via dei Neri 32",
      pourquoi: "Dans votre rue : l'une des premières adresses de café de spécialité de Florence, du barista primé Francesco Sanapo.",
      commander: ["Un cappuccino", "Un filtre (V60) si vous aimez le café"] },
    { id: "gilli", gamme: 0, nom: "Caffè Gilli", zone: "Centre", type: "Café historique", prix: "1,50 € au comptoir, beaucoup plus assis", quand: "Dim 11 · en passant",
      horaires: "Journée et soirée", adresse: "Piazza della Repubblica",
      pourquoi: "Ouvert en 1733, boiseries et lustres. Le décor vaut le café ; restez au comptoir, la terrasse est très chère.",
      commander: ["Un espresso au comptoir", "Un chocolat chaud épais en saison"] }
  ],

  plats: [
    { nom: "La bistecca alla fiorentina", texte: "Une côte en T (filet d'un côté, faux-filet de l'autre), épaisse de trois doigts, grillée sur la braise et servie saignante. Elle se vend au poids, rarement moins d'1 kg pour deux. Méfiez-vous des prix au kilo trop bas affichés devant les restaurants.", ou: ["enoteca", "cammillo", "bucalapi"] },
    { nom: "Le lampredotto", texte: "Le quatrième estomac du bœuf, mijoté des heures dans un bouillon. Servi dans un petit pain dont le haut est trempé dans le bouillon (« bagnato »), avec une sauce verte aux herbes et un peu de piment. Le casse-croûte des Florentins depuis le Moyen Âge.", ou: ["pollini", "nerbone", "trippaioporcellino", "cibreo"] },
    { nom: "La ribollita", texte: "La soupe « rebouillie » : pain rassis, chou noir, haricots blancs, légumes, cuite une première fois puis réchauffée le lendemain. Plat d'automne et d'hiver.", ou: ["darocco", "zeb", "anticofattore"] },
    { nom: "La pappa al pomodoro", texte: "Une soupe épaisse de pain, tomate, ail, basilic et huile d'olive. Elle se mange tiède, presque comme une purée.", ou: ["cibreo", "darocco", "delfagioli"] },
    { nom: "Les crostini di fegatini", texte: "Des toasts tartinés de pâté de foies de volaille aux câpres, anchois et vin santo. L'antipasto de toutes les tables florentines.", ou: ["vinivecchisapori", "enoteca", "cibreo"] },
    { nom: "Le peposo", texte: "Du bœuf mijoté longuement au poivre noir et au vin rouge. La tradition dit que c'était le plat des ouvriers des fours de l'Impruneta, qui cuisaient les briques de la coupole de Brunelleschi : on laissait la marmite dans le four pendant la cuisson des tuiles.", ou: ["zeb", "iraddi", "magazzino"] },
    { nom: "Les pici all'aglione", texte: "De gros spaghettis roulés à la main, avec une sauce tomate à l'aglione, l'ail géant et doux du Val di Chiana.", ou: ["lortone", "delfagioli", "zeb"] },
    { nom: "Les pappardelle au canard ou au sanglier", texte: "De larges rubans de pâtes fraîches avec un ragù de canard (anatra) ou de sanglier (cinghiale), la viande de chasse de l'automne toscan.", ou: ["vinivecchisapori", "fuoriporta"] },
    { nom: "La trippa alla fiorentina", texte: "Des tripes en lanières mijotées à la tomate et servies avec du parmesan. Moins impressionnant qu'on ne croit.", ou: ["magazzino", "zeb", "trippaioporcellino"] },
    { nom: "La schiacciata", texte: "La focaccia florentine, fine, huilée et bien salée. En panino avec de la finocchiona (saucisson au fenouil) et du pecorino, c'est le sandwich parfait.", ou: ["ino", "fratellini", "casadelvino"] },
    { nom: "Les cantucci et le vin santo", texte: "Des biscuits secs aux amandes qu'on trempe dans un petit verre de vin santo, vin doux de raisins séchés. La fin de repas classique.", ou: ["delfagioli", "santobevitore"] },
    { nom: "Le gelato Buontalenti", texte: "Une crème glacée simple (lait, crème, œufs, sucre). La légende attribue l'invention de la glace moderne à Bernardo Buontalenti, l'architecte des Médicis… celui du Forte Belvedere et de la grotte de Boboli.", ou: ["vivoli", "gelateriadeineri"] },
    { nom: "Le Chianti Classico et son coq noir", texte: "Le vin des collines entre Florence et Sienne. La légende du coq noir : pour fixer la frontière, chaque ville devait faire partir un cavalier au premier chant du coq. Les Florentins affamèrent leur coq noir, qui chanta bien avant l'aube : leur cavalier partit plus tôt et gagna presque tout le Chianti.", ou: ["volpi", "pittigola", "enoteca"] }
  ],

  /* ------------------------------------------------------------------ */
  budget: {
    lignes: [
      ["Réservations (Accademia 48 + Offices 58 + Giotto Pass 40)", "146 €"],
      ["Visites sur place (Santa Croce, et une option : Palazzo Vecchio, Boboli, Bargello ou Chapelles Médicis)", "20–60 €"],
      ["Tram aéroport (4 trajets à 2 €)", "8 €"],
      ["Cafés et petits-déjeuners au comptoir", "25–35 €"],
      ["Déjeuners (Gustarium, Da Rocco, Zeb)", "90–140 €"],
      ["Dîners (Vini e Vecchi Sapori, Sonora + Cibrèo, la bistecca)", "330–420 €"],
      ["Apéros, verres de vin, glaces", "50–80 €"]
    ],
    total: "≈ 670–890 € pour deux, hors vols et logement",
    conseils: [
      "Le <b>coperto</b> (2–4 €/pers.) sur l'addition est normal : ce n'est pas un pourboire. Le pourboire n'est pas obligatoire (arrondir suffit).",
      "Le café <b>au comptoir</b> coûte 1,20–1,50 € ; assis en terrasse sur une grande place, ça peut tripler.",
      "Le vin de la maison (« vino della casa ») en carafe est en général très correct et bon marché.",
      "La bistecca est facturée au poids : demandez le prix au kilo et le poids avant de commander."
    ]
  },

  /* ------------------------------------------------------------------
     PHOTOS (Wikimedia Commons, vérifiées le 7 octobre 2026). u = vignette 500 px, f = fichier Commons (crédits : auteur et licence sur la page du fichier)
     ------------------------------------------------------------------ */
  photos: {
    david: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/%27David%27_by_Michelangelo_Fir_JBU004.jpg/500px-%27David%27_by_Michelangelo_Fir_JBU004.jpg", f: "'David'_by_Michelangelo_Fir_JBU004.jpg" },
    davidtribune: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/David_at_the_Galleria_dell%27Accademia_%2861351%29.jpg/500px-David_at_the_Galleria_dell%27Accademia_%2861351%29.jpg", f: "David_at_the_Galleria_dell'Accademia_(61351).jpg" },
    prisonnierjeune: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/%27Young_Slave%27_by_Michelangelo_-_JBU_02.jpg/500px-%27Young_Slave%27_by_Michelangelo_-_JBU_02.jpg", f: "'Young_Slave'_by_Michelangelo_-_JBU_02.jpg" },
    atlas: { u: "https://upload.wikimedia.org/wikipedia/commons/9/97/Michelangelo_-_Atlas.jpg", f: "Michelangelo_-_Atlas.jpg" },
    eveil: { u: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Michelangelo_-_Awakening_slave.jpg", f: "Michelangelo_-_Awakening_slave.jpg" },
    saintmatthieu: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/%27St_Matthew%27_by_Michelangelo_-_JBU_02.jpg/500px-%27St_Matthew%27_by_Michelangelo_-_JBU_02.jpg", f: "'St_Matthew'_by_Michelangelo_-_JBU_02.jpg" },
    sabines: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/SabinesAlternativeView.jpg/500px-SabinesAlternativeView.jpg", f: "SabinesAlternativeView.jpg" },
    cassone: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Cassone_adimari_02.jpg/500px-Cassone_adimari_02.jpg", f: "Cassone_adimari_02.jpg" },
    venus: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/500px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg", f: "Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg" },
    primavera: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/500px-Botticelli-primavera.jpg", f: "Botticelli-primavera.jpg" },
    annonciationleo: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Annunciation_%28Leonardo_c._1472%E2%80%931476%29.jpg/500px-Annunciation_%28Leonardo_c._1472%E2%80%931476%29.jpg", f: "Annunciation_(Leonardo_c._1472–1476).jpg" },
    bapteme: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/The_Baptism_of_Christ_%28Verrocchio_and_Leonardo%29.jpg/500px-The_Baptism_of_Christ_%28Verrocchio_and_Leonardo%29.jpg", f: "The_Baptism_of_Christ_(Verrocchio_and_Leonardo).jpg" },
    doni: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Tondo_Doni_2015.png/500px-Tondo_Doni_2015.png", f: "Tondo_Doni_2015.png" },
    cardellino: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Raffaello_Sanzio_-_Madonna_del_Cardellino_-_Google_Art_Project.jpg/500px-Raffaello_Sanzio_-_Madonna_del_Cardellino_-_Google_Art_Project.jpg", f: "Raffaello_Sanzio_-_Madonna_del_Cardellino_-_Google_Art_Project.jpg" },
    venusurbino: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg/500px-Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg", f: "Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg" },
    meduse: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Caravaggio_-_Medusa_-_Google_Art_Project.jpg/500px-Caravaggio_-_Medusa_-_Google_Art_Project.jpg", f: "Caravaggio_-_Medusa_-_Google_Art_Project.jpg" },
    bacchuscara: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Bacchus_by_Caravaggio_1.jpg/500px-Bacchus_by_Caravaggio_1.jpg", f: "Bacchus_by_Caravaggio_1.jpg" },
    judithartemisia: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Judit_decapitando_a_Holofernes%2C_por_Artemisia_Gentileschi.jpg/500px-Judit_decapitando_a_Holofernes%2C_por_Artemisia_Gentileschi.jpg", f: "Judit_decapitando_a_Holofernes,_por_Artemisia_Gentileschi.jpg" },
    maestagiotto: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Giotto%2C_1267_Around-1337_-_Maest%C3%A0_-_Google_Art_Project.jpg/500px-Giotto%2C_1267_Around-1337_-_Maest%C3%A0_-_Google_Art_Project.jpg", f: "Giotto,_1267_Around-1337_-_Maestà_-_Google_Art_Project.jpg" },
    annonciationmartini: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Simone_Martini_%E2%80%94_Annunciation_with_St._Margaret_and_St._Ansanus.jpg/500px-Simone_Martini_%E2%80%94_Annunciation_with_St._Margaret_and_St._Ansanus.jpg", f: "Simone_Martini_—_Annunciation_with_St._Margaret_and_St._Ansanus.jpg" },
    ducsurbino: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Piero_della_Francesca_-_Portraits_of_the_Duke_and_Duchess_of_Urbino%2C_Federico_da_Montefeltro_and_Battista_Sforza_-_Google_Art_Project.jpg/500px-Piero_della_Francesca_-_Portraits_of_the_Duke_and_Duchess_of_Urbino%2C_Federico_da_Montefeltro_and_Battista_Sforza_-_Google_Art_Project.jpg", f: "Piero_della_Francesca_-_Portraits_of_the_Duke_and_Duchess_of_Urbino,_Federico_da_Montefeltro_and_Battista_Sforza_-_Google_Art_Project.jpg" },
    sanromano: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Battle_of_San_Romano%2C_by_Paolo_Uccello_%28Uffizi_Gallery%2C_Florence%29.jpg/500px-Battle_of_San_Romano%2C_by_Paolo_Uccello_%28Uffizi_Gallery%2C_Florence%29.jpg", f: "Battle_of_San_Romano,_by_Paolo_Uccello_(Uffizi_Gallery,_Florence).jpg" },
    lippina: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Madonna_and_Child_with_two_Angels_%28by_Filippo_Lippi%29_%E2%80%93_Galleria_degli_Uffizi%2C_Florence.jpg/500px-Madonna_and_Child_with_two_Angels_%28by_Filippo_Lippi%29_%E2%80%93_Galleria_degli_Uffizi%2C_Florence.jpg", f: "Madonna_and_Child_with_two_Angels_(by_Filippo_Lippi)_–_Galleria_degli_Uffizi,_Florence.jpg" },
    gentile: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Gentile_da_Fabriano_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg/500px-Gentile_da_Fabriano_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg", f: "Gentile_da_Fabriano_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg" },
    tribuna: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Tribuna_uffizi.jpg/500px-Tribuna_uffizi.jpg", f: "Tribuna_uffizi.jpg" },
    longcou: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Parmigianino_-_Madonna_and_Child_with_Angels%2C_known_as_the_Madonna_with_the_Long_Neck.jpg/500px-Parmigianino_-_Madonna_and_Child_with_Angels%2C_known_as_the_Madonna_with_the_Long_Neck.jpg", f: "Parmigianino_-_Madonna_and_Child_with_Angels,_known_as_the_Madonna_with_the_Long_Neck.jpg" },
    palazzovecchio: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Piazza_della_signoria%2C_palazzo_vecchio%2C_veduta_01.jpg/500px-Piazza_della_signoria%2C_palazzo_vecchio%2C_veduta_01.jpg", f: "Piazza_della_signoria,_palazzo_vecchio,_veduta_01.jpg" },
    marciano: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Giorgio_Vasari_-_The_battle_of_Marciano_in_Val_di_Chiana_-_Google_Art_Project.jpg/500px-Giorgio_Vasari_-_The_battle_of_Marciano_in_Val_di_Chiana_-_Google_Art_Project.jpg", f: "Giorgio_Vasari_-_The_battle_of_Marciano_in_Val_di_Chiana_-_Google_Art_Project.jpg" },
    studiolo: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Vista_del_Studiolo_de_Francisco_I.jpg/500px-Vista_del_Studiolo_de_Francisco_I.jpg", f: "Vista_del_Studiolo_de_Francisco_I.jpg" },
    judithdonatello: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Giuditta_di_donatello_04.JPG/500px-Giuditta_di_donatello_04.JPG", f: "Giuditta_di_donatello_04.JPG" },
    genie: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Palazzo_vecchio%2C_michelangelo%2C_genio_della_vittoria_01.1.jpg/500px-Palazzo_vecchio%2C_michelangelo%2C_genio_della_vittoria_01.1.jpg", f: "Palazzo_vecchio,_michelangelo,_genio_della_vittoria_01.1.jpg" },
    importuno: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Piazza_della_signoria_angolo_via_della_ninna%2C_palazzo_vecchio%2C_cantonata_con_testa_scolpita_02.jpg/500px-Piazza_della_signoria_angolo_via_della_ninna%2C_palazzo_vecchio%2C_cantonata_con_testa_scolpita_02.jpg", f: "Piazza_della_signoria_angolo_via_della_ninna,_palazzo_vecchio,_cantonata_con_testa_scolpita_02.jpg" },
    signoria: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Piazza_Signoria_-_Firenze.jpg/500px-Piazza_Signoria_-_Firenze.jpg", f: "Piazza_Signoria_-_Firenze.jpg" },
    persee: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Perseus_%28Benvenuto_Cellini%29_2013_February.jpg/500px-Perseus_%28Benvenuto_Cellini%29_2013_February.jpg", f: "Perseus_(Benvenuto_Cellini)_2013_February.jpg" },
    neptune: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Firenze%2C_fontana_del_nettuno_%28dopo_il_restauro_del_2020%29_di_giorno%2C_01.jpg/500px-Firenze%2C_fontana_del_nettuno_%28dopo_il_restauro_del_2020%29_di_giorno%2C_01.jpg", f: "Firenze,_fontana_del_nettuno_(dopo_il_restauro_del_2020)_di_giorno,_01.jpg" },
    lanzi: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Firenze%2C_loggia_dei_lanzi_%282020%29_01.jpg/500px-Firenze%2C_loggia_dei_lanzi_%282020%29_01.jpg", f: "Firenze,_loggia_dei_lanzi_(2020)_01.jpg" },
    savonarole: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Savonarola%27s_execution_memorial%2C_Piazza_della_Signoria%2C_Florence_%2826073214863%29.jpg/500px-Savonarola%27s_execution_memorial%2C_Piazza_della_Signoria%2C_Florence_%2826073214863%29.jpg", f: "Savonarola's_execution_memorial,_Piazza_della_Signoria,_Florence_(26073214863).jpg" },
    duomo: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/500px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg", f: "Cattedrale_di_Santa_Maria_del_Fiore_–_Il_Duomo_di_Firenze.jpg" },
    campanile: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/CampanileGiotto-01.jpg/500px-CampanileGiotto-01.jpg", f: "CampanileGiotto-01.jpg" },
    baptistere: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Baptistery%2C_Florence.jpg/500px-Baptistery%2C_Florence.jpg", f: "Baptistery,_Florence.jpg" },
    paradis: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Lorenzo_ghiberti%2C_porta_del_paradiso%2C_1425-52%2C_00.JPG/500px-Lorenzo_ghiberti%2C_porta_del_paradiso%2C_1425-52%2C_00.JPG", f: "Lorenzo_ghiberti,_porta_del_paradiso,_1425-52,_00.JPG" },
    hawkwood: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Paolo_uccello%2C_Monumento_equestre_di_John_Hawkwood%2C_1436%2C_01.JPG/500px-Paolo_uccello%2C_Monumento_equestre_di_John_Hawkwood%2C_1436%2C_01.JPG", f: "Paolo_uccello,_Monumento_equestre_di_John_Hawkwood,_1436,_01.JPG" },
    horloge: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Clock_24_hours_Florence_Cathedral.jpg/500px-Clock_24_hours_Florence_Cathedral.jpg", f: "Clock_24_hours_Florence_Cathedral.jpg" },
    dantemichelino: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Dante_Domenico_di_Michelino_Duomo_Florence.jpg/500px-Dante_Domenico_di_Michelino_Duomo_Florence.jpg", f: "Dante_Domenico_di_Michelino_Duomo_Florence.jpg" },
    jugement: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/03_2015_Giudizio_Universale-Cristo-Giorgio_Vasari-Federico_Zuccari-Cupola-Santa_Maria_del_Fiore_%28Firenze%29_Photo_Paolo_Villa_FOTO9275bis.JPG/500px-03_2015_Giudizio_Universale-Cristo-Giorgio_Vasari-Federico_Zuccari-Cupola-Santa_Maria_del_Fiore_%28Firenze%29_Photo_Paolo_Villa_FOTO9275bis.JPG", f: "03_2015_Giudizio_Universale-Cristo-Giorgio_Vasari-Federico_Zuccari-Cupola-Santa_Maria_del_Fiore_(Firenze)_Photo_Paolo_Villa_FOTO9275bis.JPG" },
    pietabandini: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Pieta_Bandini_Opera_Duomo_Florence_n01.jpg/500px-Pieta_Bandini_Opera_Duomo_Florence_n01.jpg", f: "Pieta_Bandini_Opera_Duomo_Florence_n01.jpg" },
    madeleine: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Donatello%2C_maria_maddalena_02.JPG/500px-Donatello%2C_maria_maddalena_02.JPG", f: "Donatello,_maria_maddalena_02.JPG" },
    zanobi: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Terrazze_del_duomo%2C_vedute_sulla_colonna_di_san_zanobi.JPG/500px-Terrazze_del_duomo%2C_vedute_sulla_colonna_di_san_zanobi.JPG", f: "Terrazze_del_duomo,_vedute_sulla_colonna_di_san_zanobi.JPG" },
    bigallo: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Loggia_del_bigallo_31.JPG/500px-Loggia_del_bigallo_31.JPG", f: "Loggia_del_bigallo_31.JPG" },
    medaillepazzi: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Bertoldo_di_giovanni%2C_medaglia_della_congiura_dei_pazzi_%28lorenzo%29%2C_1478.JPG/500px-Bertoldo_di_giovanni%2C_medaglia_della_congiura_dei_pazzi_%28lorenzo%29%2C_1478.JPG", f: "Bertoldo_di_giovanni,_medaglia_della_congiura_dei_pazzi_(lorenzo),_1478.JPG" },
    santacroce: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Bas%C3%ADlica_de_la_Santa_Cruz%2C_Florencia%2C_Italia%2C_2022-09-18%2C_DD_95.jpg/500px-Bas%C3%ADlica_de_la_Santa_Cruz%2C_Florencia%2C_Italia%2C_2022-09-18%2C_DD_95.jpg", f: "Basílica_de_la_Santa_Cruz,_Florencia,_Italia,_2022-09-18,_DD_95.jpg" },
    tombemichelange: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Tomb_of_Michelangelo_by_Vasari%2C_Basilica_of_Santa_Croce%2C_Florence_%281%29.jpg/500px-Tomb_of_Michelangelo_by_Vasari%2C_Basilica_of_Santa_Croce%2C_Florence_%281%29.jpg", f: "Tomb_of_Michelangelo_by_Vasari,_Basilica_of_Santa_Croce,_Florence_(1).jpg" },
    tombegalilee: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Tomb_of_Galileo_Galilei%2C_Santa_Croce%2C_Florence%2C_224128.jpg/500px-Tomb_of_Galileo_Galilei%2C_Santa_Croce%2C_Florence%2C_224128.jpg", f: "Tomb_of_Galileo_Galilei,_Santa_Croce,_Florence,_224128.jpg" },
    pazzi: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Florence%2C_Santa_Croce%2C_Cappella_dei_Pazzi%2C_1440s-70s.jpg/500px-Florence%2C_Santa_Croce%2C_Cappella_dei_Pazzi%2C_1440s-70s.jpg", f: "Florence,_Santa_Croce,_Cappella_dei_Pazzi,_1440s-70s.jpg" },
    cimabue: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Crucifix._Cimabue._Santa_Croce_before_1966.jpg/500px-Crucifix._Cimabue._Santa_Croce_before_1966.jpg", f: "Crucifix._Cimabue._Santa_Croce_before_1966.jpg" },
    cavalcanti: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Donatello%2C_Annunciazione_Cavalcanti%2C_1435_circa_01.jpg/500px-Donatello%2C_Annunciazione_Cavalcanti%2C_1435_circa_01.jpg", f: "Donatello,_Annunciazione_Cavalcanti,_1435_circa_01.jpg" },
    dantestatue: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Statue_Dante_Alighieri_Piazza_Santa_Croce_-_Florence_%28IT52%29_-_2022-08-31_-_3.jpg/500px-Statue_Dante_Alighieri_Piazza_Santa_Croce_-_Florence_%28IT52%29_-_2022-08-31_-_3.jpg", f: "Statue_Dante_Alighieri_Piazza_Santa_Croce_-_Florence_(IT52)_-_2022-08-31_-_3.jpg" },
    antella: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Palazzo_dell%27Antella%2C_ext._01.JPG/500px-Palazzo_dell%27Antella%2C_ext._01.JPG", f: "Palazzo_dell'Antella,_ext._01.JPG" },
    chapelleprinces: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Capella_dels_M%C3%A8dici_o_dels_Pr%C3%ADnceps%2C_San_Lorenzo%2C_Flor%C3%A8ncia.jpg/500px-Capella_dels_M%C3%A8dici_o_dels_Pr%C3%ADnceps%2C_San_Lorenzo%2C_Flor%C3%A8ncia.jpg", f: "Capella_dels_Mèdici_o_dels_Prínceps,_San_Lorenzo,_Florència.jpg" },
    nuit: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Sagrestia_nuova%2C_notte%2C_01.jpg/500px-Sagrestia_nuova%2C_notte%2C_01.jpg", f: "Sagrestia_nuova,_notte,_01.jpg" },
    sanlorenzo: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Firenze_Basilica_di_San_Lorenzo_Esterno_Lato_Nord_1.jpg/500px-Firenze_Basilica_di_San_Lorenzo_Esterno_Lato_Nord_1.jpg", f: "Firenze_Basilica_di_San_Lorenzo_Esterno_Lato_Nord_1.jpg" },
    mages: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Cappella_dei_magi%2C_corteo_con_lorenzo%2C_piero_e_giovanni_de%27_medici.jpg/500px-Cappella_dei_magi%2C_corteo_con_lorenzo%2C_piero_e_giovanni_de%27_medici.jpg", f: "Cappella_dei_magi,_corteo_con_lorenzo,_piero_e_giovanni_de'_medici.jpg" },
    medicicriccardi: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Palazzo_Medici_Riccardi-Florence.jpg/500px-Palazzo_Medici_Riccardi-Florence.jpg", f: "Palazzo_Medici_Riccardi-Florence.jpg" },
    mercatocentrale: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Mercato_centrale_di_san_lorenzo_01.jpg/500px-Mercato_centrale_di_san_lorenzo_01.jpg", f: "Mercato_centrale_di_san_lorenzo_01.jpg" },
    daviddonatello: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Donatello%2C_David%2C_bronze%2C_1435-40%2C_Florence%2C_Bargello%2C_detail.jpg/500px-Donatello%2C_David%2C_bronze%2C_1435-40%2C_Florence%2C_Bargello%2C_detail.jpg", f: "Donatello,_David,_bronze,_1435-40,_Florence,_Bargello,_detail.jpg" },
    bacchusmichelange: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Michelangelo_Bacchus.jpg/500px-Michelangelo_Bacchus.jpg", f: "Michelangelo_Bacchus.jpg" },
    isaacghiberti: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Lorenzo_ghiberti%2C_sacrificio_di_isacco%2C_1401%2C_02.jpg/500px-Lorenzo_ghiberti%2C_sacrificio_di_isacco%2C_1401%2C_02.jpg", f: "Lorenzo_ghiberti,_sacrificio_di_isacco,_1401,_02.jpg" },
    isaacbrunelleschi: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Filippo_brunelleschi%2C_sacrificio_di_isacco%2C_1401%2C_02.jpg/500px-Filippo_brunelleschi%2C_sacrificio_di_isacco%2C_1401%2C_02.jpg", f: "Filippo_brunelleschi,_sacrificio_di_isacco,_1401,_02.jpg" },
    mercure: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Mercurio_volante%2C_Giambologna%2C_Bargello_Florenz-01.jpg/500px-Mercurio_volante%2C_Giambologna%2C_Bargello_Florenz-01.jpg", f: "Mercurio_volante,_Giambologna,_Bargello_Florenz-01.jpg" },
    saintgeorges: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/St._Georg%2C_Donatello%2C_1416-17%2C_Bargello_Florenz-01.jpg/500px-St._Georg%2C_Donatello%2C_1416-17%2C_Bargello_Florenz-01.jpg", f: "St._Georg,_Donatello,_1416-17,_Bargello_Florenz-01.jpg" },
    tondopitti: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Michelangelo_Tondo_Pitti%2C_Bargello.jpg/500px-Michelangelo_Tondo_Pitti%2C_Bargello.jpg", f: "Michelangelo_Tondo_Pitti,_Bargello.jpg" },
    pontevecchio: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Ponte_Vecchio_from_Ponte_alle_Grazie.jpg/500px-Ponte_Vecchio_from_Ponte_alle_Grazie.jpg", f: "Ponte_Vecchio_from_Ponte_alle_Grazie.jpg" },
    pontevecchiosoir: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Ponte_Vecchio_at_dusk_1.JPG/500px-Ponte_Vecchio_at_dusk_1.JPG", f: "Ponte_Vecchio_at_dusk_1.JPG" },
    cellini: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Florence_-_Benvenuto_Cellini_Bust.jpg/500px-Florence_-_Benvenuto_Cellini_Bust.jpg", f: "Florence_-_Benvenuto_Cellini_Bust.jpg" },
    corridor: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/The_Vasari_Corridor_Bridge%2C_Via_della_Ninna%2C_Florence.jpg/500px-The_Vasari_Corridor_Bridge%2C_Via_della_Ninna%2C_Florence.jpg", f: "The_Vasari_Corridor_Bridge,_Via_della_Ninna,_Florence.jpg" },
    santatrinitapont: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Ponte_Santa_Trinita_seen_from_Ponte_Vecchio.jpg/500px-Ponte_Santa_Trinita_seen_from_Ponte_Vecchio.jpg", f: "Ponte_Santa_Trinita_seen_from_Ponte_Vecchio.jpg" },
    amidei: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Via_por_santa_maria_9r-11r%2C_torre_degli_amidei%2C_02.jpg/500px-Via_por_santa_maria_9r-11r%2C_torre_degli_amidei%2C_02.jpg", f: "Via_por_santa_maria_9r-11r,_torre_degli_amidei,_02.jpg" },
    santiapostoli: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Piazza_del_limbo%2C_chiesa_dei_ss._apostoli%2C_01%2C0.jpg/500px-Piazza_del_limbo%2C_chiesa_dei_ss._apostoli%2C_01%2C0.jpg", f: "Piazza_del_limbo,_chiesa_dei_ss._apostoli,_01,0.jpg" },
    orsanmichele: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Torre_di_arnolfo%2C_veduta_orsanmichele_33-edit.jpg/500px-Torre_di_arnolfo%2C_veduta_orsanmichele_33-edit.jpg", f: "Torre_di_arnolfo,_veduta_orsanmichele_33-edit.jpg" },
    porcellino: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Logge_del_mercato_nuovo%2C_il_porcellino.jpg/500px-Logge_del_mercato_nuovo%2C_il_porcellino.jpg", f: "Logge_del_mercato_nuovo,_il_porcellino.jpg" },
    smmaggiore: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Via_de%27_cerretani%2C_chiesa_di_santa_maria_maggiore%2C_01.jpg/500px-Via_de%27_cerretani%2C_chiesa_di_santa_maria_maggiore%2C_01.jpg", f: "Via_de'_cerretani,_chiesa_di_santa_maria_maggiore,_01.jpg" },
    innocenti: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Florence%2C_Piazza_SS_Annunziata_with_Ospedale_degli_Innocenti_%281419-39%29_and_part_of_SS_Annunziata_%281601%29.jpg/500px-Florence%2C_Piazza_SS_Annunziata_with_Ospedale_degli_Innocenti_%281419-39%29_and_part_of_SS_Annunziata_%281601%29.jpg", f: "Florence,_Piazza_SS_Annunziata_with_Ospedale_degli_Innocenti_(1419-39)_and_part_of_SS_Annunziata_(1601).jpg" },
    ferdinando: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/FerdinandodeMedici.jpg/500px-FerdinandodeMedici.jpg", f: "FerdinandodeMedici.jpg" },
    rotonda: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Rotonda_del_brunelleschi_12.JPG/500px-Rotonda_del_brunelleschi_12.JPG", f: "Rotonda_del_brunelleschi_12.JPG" },
    synagogue: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Synagogue_Florence_Italy.JPG/500px-Synagogue_Florence_Italy.JPG", f: "Synagogue_Florence_Italy.JPG" },
    santambrogio: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Mercato_di_sant%27ambrogio.JPG/500px-Mercato_di_sant%27ambrogio.JPG", f: "Mercato_di_sant'ambrogio.JPG" },
    castagna: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Via_dante_alighieri%2C_angolo_piazza_san_martino%2C_torre_della_castagna%2C_01%2C0.jpg/500px-Via_dante_alighieri%2C_angolo_piazza_san_martino%2C_torre_della_castagna%2C_01%2C0.jpg", f: "Via_dante_alighieri,_angolo_piazza_san_martino,_torre_della_castagna,_01,0.jpg" },
    badia: { u: "https://upload.wikimedia.org/wikipedia/commons/d/da/Badia_Fiorentina_ingresso.JPG", f: "Badia_Fiorentina_ingresso.JPG" },
    smcerchi: { u: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Santa_Margherita_de%27_Cerchi.JPG", f: "Santa_Margherita_de'_Cerchi.JPG" },
    doigtgalilee: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Middle_finger_of_Galileo%27s_right_hand%2C_Museo_Galileo%2C_Florence%2C_Inv._2432%2C_224103.jpg/500px-Middle_finger_of_Galileo%27s_right_hand%2C_Museo_Galileo%2C_Florence%2C_Inv._2432%2C_224103.jpg", f: "Middle_finger_of_Galileo's_right_hand,_Museo_Galileo,_Florence,_Inv._2432,_224103.jpg" },
    museogalileo: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Museo_Galileo_palazzo.jpg/500px-Museo_Galileo_palazzo.jpg", f: "Museo_Galileo_palazzo.jpg" },
    loggiagrano: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Loggia_del_grano_e_complesso_dell%27ex-cinema_capitol_%282021%29_01.jpg/500px-Loggia_del_grano_e_complesso_dell%27ex-cinema_capitol_%282021%29_01.jpg", f: "Loggia_del_grano_e_complesso_dell'ex-cinema_capitol_(2021)_01.jpg" },
    pitti: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Palazzo_Pitti_nel_tardo_pomeriggio.jpg/500px-Palazzo_Pitti_nel_tardo_pomeriggio.jpg", f: "Palazzo_Pitti_nel_tardo_pomeriggio.jpg" },
    boboli: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Jard%C3%ADn_de_B%C3%B3boli%2C_Florencia%2C_Italia%2C_2022-09-19%2C_DD_26.jpg/500px-Jard%C3%ADn_de_B%C3%B3boli%2C_Florencia%2C_Italia%2C_2022-09-19%2C_DD_26.jpg", f: "Jardín_de_Bóboli,_Florencia,_Italia,_2022-09-19,_DD_26.jpg" },
    grotte: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Firenze-boboligrotta.jpg/500px-Firenze-boboligrotta.jpg", f: "Firenze-boboligrotta.jpg" },
    bacchino: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Bacchino_8.jpg/500px-Bacchino_8.jpg", f: "Bacchino_8.jpg" },
    belvedere: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Forte_belvedere%2C_edificio_principale_07.JPG/500px-Forte_belvedere%2C_edificio_principale_07.JPG", f: "Forte_belvedere,_edificio_principale_07.JPG" },
    sanminiato: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/San_Miniato_al_Monte%2C_exterior%2C_Florencia%2C_Italia%2C_2019_01_cropped.jpg/500px-San_Miniato_al_Monte%2C_exterior%2C_Florencia%2C_Italia%2C_2019_01_cropped.jpg", f: "San_Miniato_al_Monte,_exterior,_Florencia,_Italia,_2019_01_cropped.jpg" },
    piazzale: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Blick_auf_und_vom_Piazzale_Michelangelo_%28LM28908%29.jpg/500px-Blick_auf_und_vom_Piazzale_Michelangelo_%28LM28908%29.jpg", f: "Blick_auf_und_vom_Piazzale_Michelangelo_(LM28908).jpg" },
    portasanniccolo: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Torre_di_san_niccol%C3%B2%2C_vista_dalle_rampe_del_poggi%2C_06.jpg/500px-Torre_di_san_niccol%C3%B2%2C_vista_dalle_rampe_del_poggi%2C_06.jpg", f: "Torre_di_san_niccolò,_vista_dalle_rampe_del_poggi,_06.jpg" },
    santospirito: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Chiesa_Santo_Spirito%2C_Firenze.jpg/500px-Chiesa_Santo_Spirito%2C_Firenze.jpg", f: "Chiesa_Santo_Spirito,_Firenze.jpg" },
    expulsion: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Masaccio-TheExpulsionOfAdamAndEveFromEden-Restoration.jpg/500px-Masaccio-TheExpulsionOfAdamAndEveFromEden-Restoration.jpg", f: "Masaccio-TheExpulsionOfAdamAndEveFromEden-Restoration.jpg" },
    tribut: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/The_Tribute_Money_by_Masaccio.jpg/500px-The_Tribute_Money_by_Masaccio.jpg", f: "The_Tribute_Money_by_Masaccio.jpg" },
    santafelicita: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Santa_Felicita_%28Florence%29.jpg/500px-Santa_Felicita_%28Florence%29.jpg", f: "Santa_Felicita_(Florence).jpg" },
    pontormo: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Jacopo_Pontormo_-_Kreuzabnahme_Christi.jpg/500px-Jacopo_Pontormo_-_Kreuzabnahme_Christi.jpg", f: "Jacopo_Pontormo_-_Kreuzabnahme_Christi.jpg" },
    specola: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Zoologia_La_Specola_-_wax_anatomical_models.JPG/500px-Zoologia_La_Specola_-_wax_anatomical_models.JPG", f: "Zoologia_La_Specola_-_wax_anatomical_models.JPG" },
    casaguidi: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Piazza_San_Felice_8_angolo_via_Mazzetta_e_via_Maggio%2C_palazzo_guidi%2C_00.jpg/500px-Piazza_San_Felice_8_angolo_via_Mazzetta_e_via_Maggio%2C_palazzo_guidi%2C_00.jpg", f: "Piazza_San_Felice_8_angolo_via_Mazzetta_e_via_Maggio,_palazzo_guidi,_00.jpg" },
    fiesole: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Fiesole%2C_area_archeologica%2C_teatro_19.jpg/500px-Fiesole%2C_area_archeologica%2C_teatro_19.jpg", f: "Fiesole,_area_archeologica,_teatro_19.jpg" },
    buchetta: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Florenz_-_Ehem._Verkaufsfenster_f%C3%BCr_Wein.jpg/500px-Florenz_-_Ehem._Verkaufsfenster_f%C3%BCr_Wein.jpg", f: "Florenz_-_Ehem._Verkaufsfenster_für_Wein.jpg" },
    annunziata: { u: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Santissima_Annunziata_2013-09-17.jpg/500px-Santissima_Annunziata_2013-09-17.jpg", f: "Santissima_Annunziata_2013-09-17.jpg" }
  }
};
