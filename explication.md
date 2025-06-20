# 🧙‍♂️ Explication du Site Harry Potter API

Ce document détaille l'architecture et le fonctionnement du site web qui utilise l'API Harry Potter.

## 🏛️ Architecture Générale

Le site est structuré autour de plusieurs pages HTML, chacune étant contrôlée par un script TypeScript dédié. L'objectif est de séparer les préoccupations : chaque page a son propre rôle et sa propre logique.

- **`index.html` & `src/main.ts`**: La page d'accueil qui affiche la liste de tous les personnages.
- **`maisons.html` & `src/maisons.ts`**: La page qui affiche les logos des quatre maisons de Poudlard.
- **`details.html` & `src/details.ts`**: Une page **unique** qui affiche les détails d'un personnage.
- **`src/api.ts`**: Un service centralisé pour communiquer avec l'API externe Harry Potter.
- **`src/characterCard.ts`**: Un composant réutilisable pour afficher la carte d'un personnage.

## 🗺️ Flux de Navigation

La navigation a été conçue pour être logique et intuitive. Voici les principaux flux :

### 🏠 Depuis la Page d'Accueil (`index.html`)

1.  **Affichage initial** : Le script `src/main.ts` charge et affiche la liste de tous les personnages via le service `ApiService`.
2.  **Filtrage par maison** : L'utilisateur peut sélectionner une maison dans le menu déroulant. Le script filtre alors la liste des personnages pour n'afficher que ceux de la maison sélectionnée.
3.  **Clic sur un personnage** :
    - Un clic sur une carte de personnage redirige vers `details.html`.
    - L'URL contient l'ID du personnage et, si une maison est sélectionnée, le nom de cette maison.
    - **Exemple** : `details.html?id=9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8&house=Gryffindor`
4.  **Retour** : Sur la page `details.html`, le bouton "Retour" ramène toujours à `index.html`, en conservant le filtre de la maison si celui-ci était actif.

### 🏰 Depuis la Page des Maisons (`maisons.html`)

1.  **Affichage initial** : La page affiche les logos des quatre maisons.
2.  **Clic sur une maison** : Le script `src/maisons.ts` affiche la liste des personnages de cette maison sous les logos.
3.  **Clic sur un personnage** :
    - Un clic sur une carte de personnage redirige vers `details.html`.
    - L'URL contient l'ID du personnage, le nom de la maison, et un paramètre `from=maisons` pour indiquer l'origine.
    - **Exemple** : `details.html?id=9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8&from=maisons&house=Gryffindor`
4.  **Retour** : Sur la page `details.html`, grâce au paramètre `from=maisons`, le bouton "Retour" est intelligemment ajusté pour ramener à `maisons.html`, en réaffichant la liste des personnages de la maison.

## 🧩 Composants Clés

### `ApiService` (`src/api.ts`)

- 📞 **Rôle** : Gérer toutes les communications avec l'API externe.
- **Fonctionnalités** :
  - `getCharacters()`: Récupère la liste de tous les personnages.
  - `getCharacterById(id)`: Récupère les détails d'un personnage spécifique.
- **Avantage** : Centralise la logique d'API. Si l'API change, les modifications ne se font qu'à un seul endroit.

### `CharacterCard` (`src/characterCard.ts`)

- 🃏 **Rôle** : Créer l'élément HTML pour la carte d'un personnage.
- **Intelligence** : Ce composant est réutilisable et son comportement s'adapte. Il accepte un paramètre `fromPage` qui lui indique s'il est appelé depuis `index.html` ou `maisons.html`, et ajuste le lien de destination en conséquence.

### `details.ts`

- 📄 **Rôle** : Gérer la page de détails d'un personnage.
- **Logique de retour** : C'est ici que la magie du retour s'opère. Le script lit le paramètre `from` de l'URL et modifie le lien du bouton "Retour" pour assurer une expérience utilisateur fluide et cohérente.