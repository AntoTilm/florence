/* =====================================================================
   Petit lexique : personnages, familles, événements, mots à comprendre.
   ---------------------------------------------------------------------
   Dans tous les textes du site, la première apparition d'un mot de
   « mots » devient cliquable (souligné en pointillé) et ouvre une bulle
   avec l'explication et des liens pour en savoir plus.

   - mots  : les façons dont le mot apparaît dans les textes (sensible
             aux majuscules ; les plus longs sont testés en premier)
   - texte : l'explication courte (HTML autorisé : <b>, <i>)
   - liens : pour aller plus loin (liens vérifiés le 9 octobre 2026)
   - lieu  : (facultatif) fiche du site à ouvrir depuis la bulle

   aLire : liens « pour aller plus loin » ajoutés en bas des fiches de lieux.
   ===================================================================== */
(function () {
  const W = (t) => ({ texte: "Wikipédia", url: "https://fr.wikipedia.org/wiki/" + t });
  const WEN = (t) => ({ texte: "Wikipédia (en anglais)", url: "https://en.wikipedia.org/wiki/" + t });

  window.FLO.lexique = {
    /* ----------------------------- Les Médicis ----------------------------- */
    medicis: {
      titre: "Les Médicis", sous: "Famille · 1434–1737", mots: ["Médicis", "Medici"],
      texte: "Des banquiers qui ont tenu Florence pendant trois siècles : d'abord en coulisses, sans titre officiel (Cosme l'Ancien, Laurent le Magnifique), puis comme ducs (1532) et grands-ducs de Toscane (1569). Des papes (Léon X, Clément VII) et deux reines de France (Catherine et Marie). Chassés deux fois (1494 et 1527), revenus deux fois. Leurs <i>palle</i>, les boules rouges sur fond d'or, sont partout : sur les façades, les plafonds, les grilles. Leur nombre varie selon les époques : comptez-les.",
      liens: [W("Maison_de_Médicis")]
    },
    cosme: {
      titre: "Cosme l'Ancien", sous: "1389–1464", mots: ["Cosme l'Ancien"],
      texte: "Le banquier le plus riche d'Europe, et le vrai fondateur du pouvoir des Médicis. Exilé en 1433 par la famille rivale des Albizzi, il revient un an plus tard, acclamé, et ne quittera plus le pouvoir, sans jamais prendre de titre. Mécène de Brunelleschi, Donatello, Fra Angelico et Michelozzo. À sa mort, la ville grave sur sa tombe à San Lorenzo : <i>Pater Patriae</i>, « père de la patrie ».",
      liens: [W("Cosme_de_Médicis")]
    },
    laurent: {
      titre: "Laurent le Magnifique", sous: "1449–1492", mots: ["Laurent le Magnifique", "Laurent de Médicis"],
      texte: "Petit-fils de Cosme l'Ancien, poète, diplomate, piètre banquier. Il survit en 1478 à la conjuration des Pazzi, où son frère Julien est tué. Il protège Botticelli et accueille dans son palais un adolescent de 15 ans qui sculpte dans son jardin : Michel-Ange. Sa mort, en 1492, laisse le champ libre à Savonarole. Il est enterré dans la Sagrestia Nuova de San Lorenzo, sous la Vierge de Michel-Ange, sans tombeau à son nom.",
      liens: [W("Laurent_de_Médicis")]
    },
    julien: {
      titre: "Julien de Médicis", sous: "1453–1478", mots: ["Julien de Médicis"],
      texte: "Le frère cadet de Laurent, beau, adulé, champion des tournois. Le dimanche 26 avril 1478, pendant la grand-messe à la cathédrale, il est poignardé de 19 coups (dit-on) par les conjurés Pazzi. Un mois plus tard naît son fils naturel, Jules, élevé par Laurent : il deviendra le pape Clément VII.",
      liens: [W("Julien_de_Médicis_(1453-1478)")]
    },
    cosme1: {
      titre: "Cosme Ier", sous: "1519–1574 · duc puis grand-duc", mots: ["Cosme Ier"],
      texte: "Issu d'une branche cadette, il devient duc à 17 ans (1537) après l'assassinat de son cousin, le duc Alexandre. On le croyait manipulable : il gouverne en monarque absolu pendant 37 ans. Il installe sa cour au Palazzo Vecchio puis au palais Pitti, fait construire les Offices et le corridor de Vasari, conquiert Sienne et obtient du pape le titre de grand-duc de Toscane (1569). Son épouse, Éléonore de Tolède, est celle qui a acheté le palais Pitti.",
      liens: [W("Cosme_Ier_de_Toscane")]
    },
    francois: {
      titre: "François Ier de Médicis", sous: "1541–1587 · grand-duc", mots: ["François Ier"],
      texte: "Le fils de Cosme Ier, à ne pas confondre avec le roi de France. Taciturne, passionné d'alchimie et de sciences, il passe ses nuits dans son studiolo du Palazzo Vecchio et crée la Tribune des Offices. Il épouse en secondes noces sa maîtresse vénitienne, Bianca Cappello. Tous deux meurent à un jour d'intervalle en octobre 1587 : empoisonnés par son frère Ferdinand selon la légende ; la science hésite encore (arsenic pour une étude de 2006, paludisme pour une autre de 2010).",
      liens: [W("François_Ier_de_Médicis")]
    },
    bianca: {
      titre: "Bianca Cappello", sous: "1548–1587", mots: ["Bianca Cappello"],
      texte: "Fille d'une grande famille vénitienne, elle s'enfuit à 15 ans à Florence avec un modeste employé de banque. Devenue la maîtresse du futur grand-duc François Ier, elle l'épouse après la mort de la grande-duchesse. Les Florentins la détestaient. Sa mort, le lendemain de celle de son mari, a nourri des siècles de rumeurs d'empoisonnement.",
      liens: [W("Bianca_Cappello")]
    },
    ferdinand: {
      titre: "Ferdinand Ier de Médicis", sous: "1549–1609 · grand-duc", mots: ["Ferdinand Ier"],
      texte: "Cardinal à Rome, il succède en 1587 à son frère François Ier, mort subitement, puis renonce à la pourpre (1588) pour épouser Christine de Lorraine. Bon gestionnaire : il développe le port de Livourne, fonde l'atelier des pierres dures (<i>pietre dure</i>) et chasse en 1593 les bouchers du Ponte Vecchio pour y installer les orfèvres. Sa statue équestre trône sur la piazza Santissima Annunziata.",
      liens: [W("Ferdinand_Ier_de_Médicis")]
    },
    annamaria: {
      titre: "Anna Maria Luisa de Médicis", sous: "1667–1743 · la dernière Médicis", mots: ["Anna Maria Luisa"],
      texte: "Sœur du dernier grand-duc, mort sans héritier en 1737. La Toscane passe aux Lorraine, mais elle signe avec eux le « Pacte de famille » : tableaux, statues, bibliothèques et joyaux des Médicis ne quitteront jamais Florence. C'est grâce à elle que les Offices, le palais Pitti et les trésors de la ville sont encore là. Chaque 18 février, jour de sa mort, Florence lui rend hommage et plusieurs musées sont gratuits.",
      liens: [W("Anne-Marie-Louise_de_Médicis")]
    },
    pazzi: {
      titre: "La conjuration des Pazzi", sous: "26 avril 1478", mots: ["conjuration des Pazzi", "Pazzi"],
      texte: "Les Pazzi, banquiers rivaux des Médicis, montent un complot avec le soutien du pape Sixte IV et de l'archevêque de Pise, Francesco Salviati. Le coup est porté pendant la grand-messe du dimanche 26 avril 1478 dans la cathédrale (et non à Pâques, comme on le lit souvent). Julien de Médicis est tué ; Laurent, blessé au cou, se barricade dans la sacristie. La ville se soulève pour les Médicis : Salviati est pendu le soir même à une fenêtre du Palazzo Vecchio, en habits d'archevêque. La famille Pazzi est bannie, ses armoiries effacées… sauf sur la chapelle qu'elle avait commandée à Santa Croce.",
      liens: [W("Conjuration_des_Pazzi")]
    },

    /* ---------------------- Politique, religion, histoire ---------------------- */
    savonarole: {
      titre: "Savonarole", sous: "1452–1498", mots: ["Savonarole"],
      texte: "Moine dominicain de Ferrare, prieur du couvent San Marco. Ses sermons apocalyptiques contre le luxe, l'art païen et les Médicis remplissent la cathédrale. Après l'expulsion des Médicis (1494), il domine la République : bûchers des vanités, police des mœurs confiée à des bandes d'enfants. Excommunié par le pape Borgia, abandonné par la ville, il est pendu puis brûlé sur la piazza della Signoria le 23 mai 1498. Une plaque ronde dans le pavé marque l'endroit.",
      liens: [W("Jérôme_Savonarole")]
    },
    vanites: {
      titre: "Le bûcher des vanités", sous: "1497 et 1498", mots: ["bûcher des vanités", "bûchers des vanités", "Bûcher des vanités"],
      texte: "Pendant le carnaval de 1497, les jeunes partisans de Savonarole font du porte-à-porte pour collecter miroirs, fards, parfums, cartes à jouer, instruments de musique, livres et tableaux « impudiques ». Le tout est entassé en pyramide sur la piazza della Signoria et brûlé. Selon Vasari, le peintre Fra Bartolomeo y apporta lui-même ses dessins de nus ; on raconte aussi que Botticelli y aurait jeté certaines de ses toiles, mais aucun document ne le prouve. Un an plus tard, c'est Savonarole qui brûlait au même endroit.",
      liens: [W("Bûcher_des_Vanités")]
    },
    guelfes: {
      titre: "Guelfes et Gibelins", sous: "XIIe–XIVe siècle", mots: ["Guelfes", "Gibelins", "guelfes", "gibelins", "guelfe", "gibelin"],
      texte: "Les deux partis qui ont déchiré l'Italie médiévale : les Guelfes soutenaient le pape, les Gibelins l'empereur germanique. Florence est guelfe, sa voisine Sienne gibeline. Une fois les Gibelins chassés, les Guelfes se sont divisés à leur tour, en Blancs et en Noirs. Dante, Guelfe blanc, a été exilé en 1302 quand les Noirs ont pris le pouvoir. Les tours rasées de la ville, et les rues étroites du quartier de Dante, datent de ces guerres de clans.",
      liens: [W("Guelfes_et_gibelins")]
    },
    arti: {
      titre: "Les Arti, corporations de Florence", sous: "XIIIe–XVIe siècle", mots: ["Arte della Lana", "Arte di Calimala", "Calimala", "corporations", "corporation"],
      texte: "Depuis 1293, seuls les membres d'une corporation (<i>arte</i>) pouvaient gouverner. Sept « arts majeurs » (drapiers de Calimala, laine, change, soie, juges et notaires, médecins et apothicaires, pelletiers) et quatorze mineurs. Immensément riches, ils financent les chantiers : la laine paie la cathédrale et sa coupole, Calimala le baptistère et ses portes. Chacun a sa niche et sa statue à Orsanmichele. Dante s'est inscrit chez les médecins et apothicaires pour pouvoir faire de la politique.",
      liens: [WEN("Guilds_of_Florence")]
    },
    siege: {
      titre: "Le siège de Florence", sous: "1529–1530", mots: ["siège de Florence"],
      texte: "Après avoir chassé les Médicis une deuxième fois (1527), Florence redevient République. Le pape Clément VII, un Médicis, s'allie à Charles Quint pour la reprendre. Pendant dix mois, la ville affamée résiste ; Michel-Ange dirige les fortifications et protège le campanile de San Miniato avec des matelas de laine contre les boulets. Florence capitule en août 1530 : c'est la fin de la République, et le début des ducs Médicis.",
      liens: [W("Siège_de_Florence")]
    },
    crue1966: {
      titre: "La crue de l'Arno", sous: "4 novembre 1966", mots: ["inondation de 1966", "crue de 1966", "1966"],
      texte: "Après des jours de pluie, l'Arno déborde dans la nuit : jusqu'à 5 mètres d'eau boueuse et de mazout à Santa Croce, 35 morts, des milliers d'œuvres et des centaines de milliers de livres anciens noyés. Le Crucifix de Cimabue perd l'essentiel de sa peinture et devient le symbole du désastre. Des milliers de jeunes venus de toute l'Europe, les « anges de la boue » (<i>angeli del fango</i>), sauvent livres et tableaux à mains nues. Des petites plaques sur les façades indiquent encore le niveau de l'eau : cherchez-les.",
      liens: [WEN("1966_flood_of_the_Arno")]
    },
    georgofili: {
      titre: "L'attentat de la via dei Georgofili", sous: "27 mai 1993", mots: ["via dei Georgofili", "Georgofili"],
      texte: "En pleine nuit, une voiture piégée par la Mafia sicilienne explose derrière les Offices, à deux pas de votre logement : cinq morts, dont une fillette de 9 ans et un bébé de 50 jours, la tour médiévale des Pulci effondrée, des salles du musée soufflées. Cosa Nostra voulait faire plier l'État en frappant son patrimoine. Un olivier et une plaque rappellent les victimes, via dei Georgofili.",
      liens: [WEN("Via_dei_Georgofili_bombing")]
    },
    opera: {
      titre: "L'Opera del Duomo", sous: "depuis 1296", mots: ["Opera del Duomo"],
      texte: "L'« œuvre » de la cathédrale : l'institution créée en 1296 pour construire puis entretenir Santa Maria del Fiore, longtemps gérée par la corporation de la laine. C'est elle qui a commandé le David à Michel-Ange et lancé le concours de la coupole. Elle existe toujours : elle gère la cathédrale, ses billets, et le musée où sont gardés les originaux.",
      liens: [W("Museo_dell%27Opera_del_Duomo_(Florence)")], lieu: "museoopera"
    },
    oltrarno: {
      titre: "L'Oltrarno", sous: "« au-delà de l'Arno »", mots: ["Oltrarno"],
      texte: "La rive gauche, en face du centre. Le quartier des artisans (doreurs, encadreurs, restaurateurs de meubles), avec Santo Spirito, San Frediano et le palais Pitti. Plus populaire, plus calme et plus local que la rive droite : c'est là que les Florentins sortent le soir.",
      liens: [W("Oltrarno")]
    },
    grandtour: {
      titre: "Le Grand Tour", sous: "XVIIe–XIXe siècle", mots: ["Grand Tour"],
      texte: "Le voyage d'éducation des jeunes aristocrates européens, surtout anglais : un ou deux ans à travers la France et l'Italie pour voir les antiques et les maîtres. Florence était une étape obligée, et la Tribune des Offices le passage le plus admiré. Le mot « touriste » vient de là.",
      liens: [W("Grand_Tour")]
    },

    /* ----------------------------- Art et mots ----------------------------- */
    renaissance: {
      titre: "La Renaissance", sous: "XVe–XVIe siècle", mots: ["Renaissance"],
      texte: "La « renaissance » de l'Antiquité : on redécouvre les auteurs et les ruines romaines, on met l'homme et la nature au centre, on invente la perspective. Florence en est le berceau ; on la fait souvent commencer en 1401, avec le concours pour les portes du baptistère que gagne Ghiberti contre Brunelleschi.",
      liens: [W("Renaissance_italienne")]
    },
    siecles: {
      titre: "Trecento, Quattrocento, Cinquecento", sous: "les siècles en italien", mots: ["Quattrocento", "Trecento", "Cinquecento"],
      texte: "Les Italiens comptent les siècles par centaines : le <i>Trecento</i> (les années 1300, le XIVe siècle : Giotto, Dante), le <i>Quattrocento</i> (le XVe : Brunelleschi, Donatello, Botticelli) et le <i>Cinquecento</i> (le XVIe : Léonard, Michel-Ange, Raphaël, puis le maniérisme).",
      liens: [W("Quattrocento")]
    },
    manierisme: {
      titre: "Le maniérisme", sous: "vers 1520–1600", mots: ["maniérisme", "maniériste", "maniéristes"],
      texte: "Après Léonard, Michel-Ange et Raphaël, comment faire mieux ? En exagérant leur « manière » : corps allongés, poses tordues, couleurs acides, espaces impossibles. Pontormo, Rosso Fiorentino, Bronzino, Parmigianino. Longtemps jugé décadent, aujourd'hui adoré.",
      liens: [W("Maniérisme")]
    },
    perspective: {
      titre: "La perspective", sous: "inventée à Florence", mots: ["perspective"],
      texte: "Vers 1415, Brunelleschi se poste dans le portail de la cathédrale avec un panneau peint du baptistère, percé d'un trou : on regarde par le trou, dans un miroir, et la peinture se superpose exactement au vrai bâtiment. Il vient de démontrer les règles de la perspective. Masaccio les applique en peinture, Alberti les met par écrit en 1435.",
      liens: [W("Perspective_(représentation)")]
    },
    fresque: {
      titre: "La fresque", sous: "technique", mots: ["fresques", "fresque"],
      texte: "<i>A fresco</i>, « sur le frais » : le peintre pose ses pigments dilués à l'eau sur un enduit de chaux encore humide ; en séchant, la chaux les emprisonne. Il faut finir chaque morceau dans la journée : ces « journées » (<i>giornate</i>) se devinent en lumière rasante, comme des pièces de puzzle. Dessous, l'esquisse au pigment rouge s'appelle la <i>sinopia</i>.",
      liens: [W("Fresque")]
    },
    paradis: {
      titre: "Les portes du Paradis", sous: "Ghiberti · 1425–1452", mots: ["portes du Paradis", "Porte du Paradis", "porte du Paradis"],
      texte: "La porte est du baptistère : dix grands panneaux de bronze doré, des scènes de l'Ancien Testament en perspective. Ghiberti y a passé 27 ans. Michel-Ange aurait dit qu'elles étaient dignes d'être les portes du Paradis. Les originaux, restaurés après la crue de 1966, sont au musée de l'Opera ; sur le baptistère, ce sont des copies. Cherchez la petite tête chauve de Ghiberti dans l'encadrement.",
      liens: [W("Porte_du_Paradis")], lieu: "battistero"
    },
    corridor: {
      titre: "Le corridor de Vasari", sous: "1565", mots: ["corridor de Vasari", "couloir de Vasari", "Corridor de Vasari", "Couloir de Vasari", "corridor vasarien"],
      texte: "Un passage couvert d'environ 750 m, du Palazzo Vecchio au palais Pitti, par les Offices et au-dessus du Ponte Vecchio, rouvert en décembre 2024 après huit ans de fermeture. Construit par Vasari en cinq mois pour le mariage de François Ier de Médicis : les Médicis pouvaient traverser la ville sans croiser leurs sujets. Au-dessus du pont, ils ne supportaient pas l'odeur des bouchers : Ferdinand Ier les remplace par des orfèvres en 1593.",
      liens: [W("Corridor_de_Vasari")]
    },
    divinecomedie: {
      titre: "La Divine Comédie", sous: "Dante · vers 1304–1321", mots: ["Divine Comédie"],
      texte: "Le voyage de Dante à travers l'Enfer, le Purgatoire et le Paradis, en cent chants. Écrite en exil, et en toscan plutôt qu'en latin : c'est elle qui a fait du florentin la langue italienne. Dante y règle ses comptes : il place en Enfer plusieurs Florentins de son temps, et même un pape encore vivant.",
      liens: [W("Divine_Comédie")]
    },
    beatrice: {
      titre: "Béatrice Portinari", sous: "1266–1290", mots: ["Béatrice"],
      texte: "Dante la croise à 9 ans, la revoit à 18, et ne s'en remettra jamais. Elle épouse un banquier et meurt à 24 ans. Dans la Divine Comédie, c'est elle qui le guide au Paradis. La tradition la dit enterrée dans la petite église Santa Margherita de' Cerchi, où des amoureux glissent encore des lettres dans un panier.",
      liens: [W("Béatrice_Portinari")]
    },

    /* -------------------------- Artistes et savants -------------------------- */
    michelange: {
      titre: "Michel-Ange", sous: "1475–1564", mots: ["Michel-Ange"],
      texte: "Florentin, formé chez Ghirlandaio, accueilli à 15 ans par Laurent le Magnifique. Le David à 26 ans, la chapelle Sixtine à Rome, la Sagrestia Nuova de San Lorenzo, les fortifications de la ville pendant le siège. Il se disait sculpteur avant tout. Mort à Rome à 88 ans : son neveu fait sortir le corps en cachette, dans un ballot de marchandises, pour l'enterrer à Santa Croce.",
      liens: [W("Michel-Ange")]
    },
    brunelleschi: {
      titre: "Filippo Brunelleschi", sous: "1377–1446", mots: ["Brunelleschi"],
      texte: "Orfèvre de formation, il perd le concours de 1401 face à Ghiberti, part étudier les ruines à Rome, et revient avec une idée folle : couvrir la cathédrale d'une coupole de 45 m de large sans cintre en bois pour la soutenir pendant le chantier. Double coque, briques en arête de poisson, machines de levage inventées pour l'occasion : il y parvient (1420–1436). On lui doit aussi la perspective, l'hôpital des Innocents, San Lorenzo et Santo Spirito. Il est enterré sous sa cathédrale.",
      liens: [W("Filippo_Brunelleschi")]
    },
    ghiberti: {
      titre: "Lorenzo Ghiberti", sous: "1378–1455", mots: ["Ghiberti"],
      texte: "À 23 ans, il gagne contre Brunelleschi le concours de 1401 pour la porte nord du baptistère (21 ans de travail), puis enchaîne avec la porte est, les « portes du Paradis » (27 ans). Son atelier a formé Donatello et Uccello. Son autoportrait, crâne chauve et regard malin, est caché dans l'encadrement des deux portes.",
      liens: [W("Lorenzo_Ghiberti")]
    },
    donatello: {
      titre: "Donatello", sous: "vers 1386–1466", mots: ["Donatello"],
      texte: "Le plus grand sculpteur du Quattrocento. Son David en bronze (Bargello) est le premier nu masculin sculpté en pied depuis l'Antiquité ; sa Marie-Madeleine en bois (musée de l'Opera), décharnée, est bouleversante. Ami de Cosme l'Ancien, qui l'entretenait : il a demandé à être enterré près de lui, à San Lorenzo.",
      liens: [W("Donatello")]
    },
    giotto: {
      titre: "Giotto", sous: "vers 1267–1337", mots: ["Giotto"],
      texte: "Le peintre qui a donné aux saints un corps, un poids et des émotions, et rompu avec les icônes byzantines. À la fin de sa vie, la ville lui confie le chantier de la cathédrale : il dessine le campanile. Vasari raconte que Cimabue l'aurait découvert enfant, berger, en train de dessiner un mouton sur un rocher ; et qu'au messager du pape qui lui demandait un échantillon, il a tracé un cercle parfait à main levée.",
      liens: [W("Giotto_di_Bondone")]
    },
    cimabue: {
      titre: "Cimabue", sous: "vers 1240–1302", mots: ["Cimabue"],
      texte: "Le dernier grand peintre « à la grecque » (byzantin) et, selon la tradition, le maître de Giotto. Dante le cite comme l'exemple d'une gloire vite éclipsée. Son grand Crucifix de Santa Croce, ravagé par la crue de 1966, est devenu le symbole du désastre et de la restauration.",
      liens: [W("Cimabue")]
    },
    masaccio: {
      titre: "Masaccio", sous: "1401–1428", mots: ["Masaccio"],
      texte: "Il a révolutionné la peinture en quelques années : volumes, lumière venant d'une seule direction, émotions vraies (Adam et Ève chassés du Paradis, à la chapelle Brancacci). Mort à Rome à 26 ans, peut-être empoisonné. Son surnom veut dire à peu près « Thomas le négligé ».",
      liens: [W("Masaccio")]
    },
    lippi: {
      titre: "Filippo Lippi", sous: "vers 1406–1469", mots: ["Filippo Lippi", "Lippi"],
      texte: "Moine carmélite… et grand séducteur. À 50 ans, il enlève une jeune religieuse, Lucrezia Buti, qui lui sert de modèle pour ses Vierges ; Cosme l'Ancien obtient du pape qu'ils soient relevés de leurs vœux. Leur fils, Filippino Lippi, sera peintre à son tour et achèvera les fresques de la chapelle Brancacci. Filippo a formé Botticelli.",
      liens: [W("Filippo_Lippi")]
    },
    uccello: {
      titre: "Paolo Uccello", sous: "1397–1475", mots: ["Uccello"],
      texte: "Obsédé par la perspective. Vasari raconte que sa femme l'appelait le soir pour venir se coucher, et qu'il répondait : « Oh, quelle douce chose que cette perspective ! » Son surnom, « l'oiseau », viendrait de son amour des oiseaux : trop pauvre pour en avoir, il les peignait.",
      liens: [W("Paolo_Uccello")]
    },
    fraangelico: {
      titre: "Fra Angelico", sous: "vers 1395–1455", mots: ["Fra Angelico"],
      texte: "Moine dominicain et peintre : il a peint une fresque dans chaque cellule du couvent San Marco, pour la méditation de ses frères. Douceur des couleurs, lumière d'aube. Béatifié en 1982, il est le patron des artistes.",
      liens: [W("Fra_Angelico")]
    },
    verrocchio: {
      titre: "Andrea del Verrocchio", sous: "vers 1435–1488", mots: ["Verrocchio"],
      texte: "Orfèvre, sculpteur, peintre, et surtout chef du meilleur atelier de Florence, où se sont formés Léonard de Vinci et le Pérugin. C'est lui qui a fondu et hissé en 1471 la boule de cuivre doré au sommet de la coupole, avec le jeune Léonard comme apprenti.",
      liens: [W("Andrea_del_Verrocchio")]
    },
    botticelli: {
      titre: "Sandro Botticelli", sous: "vers 1445–1510", mots: ["Botticelli"],
      texte: "Élève de Filippo Lippi, peintre favori du cercle de Laurent le Magnifique : la Naissance de Vénus, le Printemps. Puis vient Savonarole, et sa peinture devient sombre et tourmentée. Il meurt pauvre et oublié ; on ne l'a redécouvert qu'au XIXe siècle. Il est enterré à Ognissanti, l'église des Vespucci ; la légende dit qu'il voulait reposer aux pieds de Simonetta.",
      liens: [W("Sandro_Botticelli")]
    },
    simonetta: {
      titre: "Simonetta Vespucci", sous: "vers 1453–1476", mots: ["Simonetta"],
      texte: "Génoise mariée à un Vespucci (parent d'Amerigo, qui a donné son nom à l'Amérique), proclamée la plus belle femme de Florence. Julien de Médicis porte ses couleurs au tournoi de 1475. Elle meurt de tuberculose à 22 ou 23 ans ; toute la ville suit son cercueil, ouvert. La tradition voit son visage dans les femmes de Botticelli.",
      liens: [W("Simonetta_Vespucci")]
    },
    leonard: {
      titre: "Léonard de Vinci", sous: "1452–1519", mots: ["Léonard de Vinci", "Léonard"],
      texte: "Né à Vinci, à une quarantaine de kilomètres de Florence, fils illégitime d'un notaire. Apprenti chez Verrocchio, il peint à Florence l'Annonciation et l'Adoration des Mages (Offices). Puis il part à Milan (1482). Revenu à Florence en 1500, il commence en 1503 la Bataille d'Anghiari dans la salle des Cinq-Cents, face à Michel-Ange qui devait peindre le mur d'en face. Aucun des deux n'a terminé. Il meurt en France, à Amboise.",
      liens: [W("Léonard_de_Vinci")]
    },
    raphael: {
      titre: "Raphaël", sous: "1483–1520", mots: ["Raphaël"],
      texte: "Né à Urbino, il passe quatre ans à Florence (1504–1508) pour étudier Léonard et Michel-Ange, et y peint ses Madones les plus douces. Ensuite, Rome et les chambres du Vatican. Mort à 37 ans, le jour de son anniversaire, enterré au Panthéon.",
      liens: [W("Raphaël_(peintre)")]
    },
    titien: {
      titre: "Titien", sous: "vers 1488–1576", mots: ["Titien"],
      texte: "Le grand peintre de Venise : là où les Florentins misent sur le dessin, les Vénitiens misent sur la couleur. Peintre des papes, des doges et de Charles Quint, qui aurait ramassé son pinceau tombé par terre.",
      liens: [W("Titien")]
    },
    pontormo: {
      titre: "Pontormo", sous: "1494–1557", mots: ["Pontormo"],
      texte: "Le plus étrange des maniéristes : couleurs acidulées, corps sans poids, espaces sans sol. Hypocondriaque et solitaire, il notait dans un journal ce qu'il mangeait chaque jour ; on raconte qu'il montait chez lui par une échelle qu'il retirait derrière lui.",
      liens: [W("Pontormo")]
    },
    cellini: {
      titre: "Benvenuto Cellini", sous: "1500–1571", mots: ["Cellini"],
      texte: "Orfèvre génial et aventurier : duels, meurtres, évasion du château Saint-Ange, tout est raconté (et enjolivé) dans son autobiographie. Pour la fonte du Persée, le métal se figeait : il raconte avoir jeté dans le four toute sa vaisselle d'étain. Son buste trône au milieu du Ponte Vecchio, parmi les orfèvres.",
      liens: [W("Benvenuto_Cellini")]
    },
    giambologna: {
      titre: "Jean de Bologne (Giambologna)", sous: "1529–1608", mots: ["Jean de Bologne", "Giambologna"],
      texte: "Un Flamand de Douai venu étudier à Rome, retenu à Florence par les Médicis, dont il devient le sculpteur officiel. L'Enlèvement des Sabines (Loggia dei Lanzi), le Mercure volant (Bargello), la statue équestre de Cosme Ier. Ses corps en spirale obligent à tourner autour.",
      liens: [W("Jean_de_Bologne")]
    },
    ammannati: {
      titre: "Bartolomeo Ammannati", sous: "1511–1592", mots: ["Ammannati"],
      texte: "Architecte et sculpteur de Cosme Ier : la cour du palais Pitti, le pont Santa Trinita, et la fontaine de Neptune, que les Florentins ont aussitôt surnommée <i>il Biancone</i>, « le grand blanc ». On disait : « Ammannato, Ammannato, che bel marmo hai rovinato ! » (« quel beau marbre tu as gâché ! »).",
      liens: [W("Bartolomeo_Ammannati")]
    },
    buontalenti: {
      titre: "Bernardo Buontalenti", sous: "1531–1608", mots: ["Buontalenti"],
      texte: "L'ingénieur-architecte touche-à-tout des Médicis : la Tribune des Offices, la grande grotte de Boboli, le fort du Belvédère, des feux d'artifice et des machines de théâtre. La légende florentine lui attribue l'invention du <i>gelato</i> ; un parfum de glace porte son nom.",
      liens: [W("Bernardo_Buontalenti")]
    },
    arnolfo: {
      titre: "Arnolfo di Cambio", sous: "vers 1240–1310", mots: ["Arnolfo"],
      texte: "Architecte et sculpteur, auteur du premier projet de la cathédrale (1296). On lui attribue aussi le Palazzo Vecchio et Santa Croce : en une génération, il a dessiné le visage gothique de Florence.",
      liens: [W("Arnolfo_di_Cambio")]
    },
    dellarobbia: {
      titre: "Les della Robbia", sous: "XVe–XVIe siècle", mots: ["della Robbia", "Della Robbia"],
      texte: "Luca della Robbia invente vers 1440 la terre cuite émaillée : blanche sur fond bleu, brillante, inaltérable, et bien moins chère que le marbre. Son neveu Andrea et ses fils en font une entreprise familiale. Les bébés emmaillotés de l'hôpital des Innocents, c'est eux.",
      liens: [W("Luca_della_Robbia")]
    },
    michelozzo: {
      titre: "Michelozzo", sous: "1396–1472", mots: ["Michelozzo"],
      texte: "L'architecte de Cosme l'Ancien. Cosme avait refusé un projet de Brunelleschi, trop grandiose, pour son palais : « l'envie est une plante qu'il ne faut pas arroser ». Michelozzo a donc construit le palais Medici, sobre dehors et somptueux dedans, ainsi que le couvent San Marco.",
      liens: [W("Michelozzo")]
    },
    vasari: {
      titre: "Giorgio Vasari", sous: "1511–1574", mots: ["Vasari"],
      texte: "Peintre et architecte de Cosme Ier (les Offices, le corridor, les grandes fresques du Palazzo Vecchio), mais surtout auteur des <i>Vies des meilleurs peintres, sculpteurs et architectes</i> (1550) : le premier livre d'histoire de l'art. C'est la source de la plupart des anecdotes sur les artistes de la Renaissance, à prendre avec un grain de sel : il aimait les belles histoires et ses amis florentins.",
      liens: [W("Giorgio_Vasari")]
    },
    dante: {
      titre: "Dante Alighieri", sous: "1265–1321", mots: ["Dante"],
      texte: "Poète et homme politique : prieur de Florence en 1300, il est condamné deux ans plus tard à l'exil par le parti adverse, et au bûcher s'il revient. Il ne reverra jamais sa ville, écrit la Divine Comédie en exil et meurt à Ravenne. Florence réclame ses restes depuis sept siècles ; Ravenne refuse. Son tombeau à Santa Croce est vide.",
      liens: [W("Dante_Alighieri")]
    },
    machiavel: {
      titre: "Nicolas Machiavel", sous: "1469–1527", mots: ["Machiavel"],
      texte: "Secrétaire de la République florentine pendant 14 ans, diplomate auprès des rois et de César Borgia. Au retour des Médicis (1512), il est arrêté, torturé, puis relégué dans sa petite ferme près de San Casciano. Il y écrit <i>Le Prince</i>, dédié à un Médicis, pour retrouver un emploi. Ça n'a pas marché. Sa tombe est à Santa Croce.",
      liens: [W("Nicolas_Machiavel")]
    },
    galilee: {
      titre: "Galilée", sous: "1564–1642", mots: ["Galilée"],
      texte: "Mathématicien de Pise. En 1610, il découvre au télescope quatre satellites de Jupiter et les baptise « astres médicéens » : il obtient aussitôt le poste de philosophe des Médicis. Condamné par l'Inquisition en 1633 pour avoir défendu que la Terre tourne autour du Soleil, il finit ses jours assigné à résidence à Arcetri, sur la colline au sud de Florence. Il n'a eu droit à un vrai tombeau à Santa Croce qu'en 1737.",
      liens: [W("Galilée_(savant)")]
    },
    artemisia: {
      titre: "Artemisia Gentileschi", sous: "1593–vers 1656", mots: ["Artemisia"],
      texte: "Fille du peintre Orazio Gentileschi, élève du style du Caravage. Violée à 17 ans par son professeur, elle obtient un procès où c'est elle qu'on soumet à la torture des poucettes pour vérifier son témoignage. À Florence, elle devient la première femme admise à l'Accademia del Disegno et peint pour les Médicis. Ses héroïnes, Judith en tête, ne détournent jamais les yeux.",
      liens: [W("Artemisia_Gentileschi")]
    },
    caravage: {
      titre: "Le Caravage", sous: "1571–1610", mots: ["Caravage"],
      texte: "Lombard installé à Rome : des modèles pris dans la rue, des pieds sales, une lumière de projecteur qui découpe les corps dans le noir (le clair-obscur). Une vie de rixes : il tue un homme en 1606, fuit à Naples, Malte, en Sicile, et meurt à 38 ans en essayant de rentrer à Rome gracié.",
      liens: [W("Le_Caravage")]
    },

    /* ------------------------------- À table ------------------------------- */
    lampredotto: {
      titre: "Le lampredotto", sous: "street food florentine", mots: ["lampredotto", "Lampredotto"],
      texte: "La caillette, le quatrième estomac du bœuf, mijotée des heures dans un bouillon de légumes. On la sert dans un petit pain rond dont le chapeau est trempé dans le bouillon (<i>bagnato</i>), avec sauce verte et sauce piquante. Vendu depuis des siècles par les <i>trippai</i>, les tripiers ambulants. Le nom viendrait de sa ressemblance avec la lamproie.",
      liens: [W("Lampredotto")]
    },
    bistecca: {
      titre: "La bistecca alla fiorentina", sous: "le plat de fête", mots: ["bistecca alla fiorentina", "bistecca", "Bistecca"],
      texte: "Une côte de bœuf avec l'os en T (filet d'un côté, faux-filet de l'autre), épaisse de trois ou quatre doigts, grillée sur la braise, sel et poivre seulement. Elle se commande au poids (1 à 1,5 kg pour deux) et se mange saignante : demander « à point » n'est pas une option. La légende dit que le mot viendrait de voyageurs anglais criant « beef steak ! » lors d'une fête des Médicis.",
      liens: [W("Bistecca_alla_fiorentina")]
    },
    chianti: {
      titre: "Le Chianti", sous: "entre Florence et Sienne", mots: ["Chianti Classico", "Chianti"],
      texte: "Les collines entre Florence et Sienne, et leur vin à base de sangiovese. Le coq noir sur le col marque le Chianti Classico, la zone historique. Légende : pour fixer leur frontière, Florence et Sienne font partir chacune un cavalier au premier chant du coq. Les Florentins choisissent un coq noir et l'affament : il chante bien avant l'aube, et Florence gagne presque tout le territoire.",
      liens: [W("Chianti_(vin)")]
    }
  };

  /* Liens « pour aller plus loin » ajoutés en bas des fiches de lieux. */
  window.FLO.aLire = {
    accademia: [WEN("Galleria_dell%27Accademia")],
    offices: [W("Galerie_des_Offices")],
    palazzovecchio: [W("Palazzo_Vecchio")],
    duomo: [W("Cathédrale_Santa_Maria_del_Fiore")],
    museoopera: [W("Museo_dell%27Opera_del_Duomo_(Florence)")],
    campanile: [W("Campanile_de_Giotto")],
    battistero: [W("Baptistère_Saint-Jean_de_Florence"), { texte: "Les portes du Paradis (Wikipédia)", url: "https://fr.wikipedia.org/wiki/Porte_du_Paradis" }],
    santacroce: [W("Basilique_Santa_Croce_de_Florence")],
    cappellemedicee: [W("Chapelles_des_Médicis")],
    bargello: [W("Musée_national_du_Bargello")],
    sanminiato: [W("Basilique_San_Miniato_al_Monte")],
    santafelicita: [W("Église_Santa_Felicita_de_Florence")],
    pontevecchio: [W("Ponte_Vecchio"), { texte: "Le corridor de Vasari (Wikipédia)", url: "https://fr.wikipedia.org/wiki/Corridor_de_Vasari" }],
    santatrinita: [W("Pont_Santa_Trinita")],
    signoria: [W("Piazza_della_Signoria"), { texte: "La Loggia dei Lanzi (Wikipédia)", url: "https://fr.wikipedia.org/wiki/Loggia_dei_Lanzi" }],
    orsanmichele: [W("Orsanmichele")],
    mercatonuovo: [WEN("Porcellino")],
    dante: [W("Maison_de_Dante"), { texte: "Dante Alighieri (Wikipédia)", url: "https://fr.wikipedia.org/wiki/Dante_Alighieri" }],
    museogalileo: [W("Musée_Galilée")],
    annunziata: [W("Piazza_della_Santissima_Annunziata")],
    medicicriccardi: [W("Palais_Medici-Riccardi")],
    sanlorenzo: [W("Basilique_San_Lorenzo_de_Florence")],
    mercatocentrale: [WEN("Mercato_Centrale")],
    costasangiorgio: [WEN("Forte_di_Belvedere")],
    piazzalemichelangelo: [W("Piazzale_Michelangelo")],
    boboli: [W("Jardin_de_Boboli"), { texte: "Le palais Pitti (Wikipédia)", url: "https://fr.wikipedia.org/wiki/Palais_Pitti" }],
    santospirito: [W("Basilique_Santo_Spirito")],
    brancacci: [W("Chapelle_Brancacci")],
    buchette: [WEN("Wine_window")],
    fiesole: [W("Fiesole")]
  };
})();
