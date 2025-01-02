# SpaceInvader 🎮

SpaceInvader est un jeu d'arcade développé dans le cadre de mes projets en BTS SIO SLAM. Le jeu reprend le concept classique de Space Invaders où le joueur doit défendre son vaisseau contre une horde d'aliens.


## 🛠️ Technologies utilisées

- **HTML5** : Structure de l'interface, avec la balise `<canvas>` pour le rendu du jeu.
- **CSS3** : Design et styles (non inclus dans les fichiers partagés ici, mais personnalisable via `style.css`).
- **JavaScript (ES6)** : Mécanique et logique du jeu.
- **jQuery** : Gestion des événements et simplification de la manipulation DOM.


## 🎮 Fonctionnalités principales

- **Vaisseau spatial** :
  - Déplacement horizontal avec les touches `Q` (gauche) et `D` (droite).
  - Double tir avec la barre d'espace.
- **Aliens** :
  - Génération d'aliens en groupes (3 rangées par 5 colonnes).
  - Déplacement horizontal et descente progressive à chaque rebond sur les bords.
  - Réinitialisation après collision avec le joueur ou descente complète.
- **Score et niveaux** :
  - Gain de points pour chaque alien détruit.
  - Passage au niveau suivant après avoir éliminé tous les aliens.
  - Affichage du score, des vies restantes et du niveau actuel.
- **Gestion des vies** :
  - Perte d'une vie si les aliens atteignent le bas de l'écran.
  - Fin du jeu lorsque les vies tombent à 0.


## 📂 Structure des fichiers

- `index.html` : Page principale contenant le canvas et les ressources du jeu.
- `script.js` : Script JavaScript contenant la logique principale.
- `jquery.js` : Bibliothèque jQuery pour la gestion des événements et des animations.
- `style.css` : (Non inclus ici) Personnalisation possible de l'apparence.


## 🔧 Installation et exécution

### Prérequis
- Un navigateur moderne supportant HTML5 et JavaScript.

