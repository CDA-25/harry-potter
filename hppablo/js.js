// Fonction asynchrone qui récupère et affiche les noms des Pokémons
async function getPokemonNames() {
    // URL de l'API Pokémon
    const url = 'https://hp-api.onrender.com/api/characters';
    try {
        // Faire la requête à l'API
        const response = await fetch(url);
        // Convertir la réponse en JSON
        const data = await response.json();
        // Extraire seulement les noms des Pokémons
        const names = data.map(pokemon => pokemon.name);
        // Afficher les noms dans la console
        console.log(names);
    } catch (error) {
        // Gérer les erreurs
        console.error('Erreur lors de la récupération des données:', error);
    }
}

// Exécuter la fonction
getPokemonNames();