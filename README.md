# Florence · 10–13 octobre 2026

Carnet de voyage publié sur https://antotilm.github.io/florence/ : programme jour par jour avec options par créneau, réservations, fiches des lieux (histoires, anecdotes, vidéos, Maps) et bonnes adresses.

## Fichiers

- `donnees.js` : **tout le contenu** (réservations, jours, créneaux, options, lieux, restos, budget). C'est le seul fichier à modifier.
- `index.html` (mise en page et styles) et `app.js` (affichage) : rien à changer normalement.
- `sw.js` : rend le site consultable hors ligne une fois ouvert. Changer `VERSION` à chaque publication.

## Mettre à jour

1. Modifier `donnees.js` (ex. passer une réservation de `statut: "todo"` à `statut: "ok"`).
2. Dans `sw.js`, incrémenter `VERSION` (`florence-v2`, `florence-v3`…).
3. Lancer `publier.bat` depuis `E:\Website`.

Ouvrir `index.html` directement dans un navigateur fonctionne aussi, sans serveur.
