# Florence · 10–13 octobre 2026

Carnet de voyage publié sur https://antotilm.github.io/florence/ : parcours à pied jour par jour (étapes, trajets, ce qu'on voit en chemin), guides de visite des musées salle par salle avec photos, histoires des lieux, réservations, restaurants par gamme de prix et plats à goûter.

## Fichiers

- `donnees.js` : **tout le contenu** (réservations, check-list, jours et étapes, lieux et guides, restos, plats, budget, photos). C'est le seul fichier à modifier.
- `index.html` (mise en page et styles) et `app.js` (affichage) : rien à changer normalement.
- `sw.js` : rend le site consultable hors ligne une fois ouvert. Changer `VERSION` à chaque publication.

Les photos viennent de Wikimedia Commons (liens vérifiés le 7 octobre 2026). Le bouton « Télécharger les photos » de l'accueil les garde dans le téléphone pour le hors-ligne.

## Mettre à jour

1. Modifier `donnees.js` (ex. passer une réservation de `statut: "todo"` à `statut: "ok"`).
2. Dans `sw.js`, incrémenter `VERSION` (`florence-v4`, `florence-v5`…).
3. Lancer `publier.bat` depuis `E:\Website`.

Ouvrir `index.html` directement dans un navigateur fonctionne aussi, sans serveur.
