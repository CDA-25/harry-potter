function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const characterName = getQueryParam('id');
const container = document.getElementById('character-detail');
const backBtn = document.getElementById('back-btn');

if (!characterName) {
    container.innerHTML = '<p class="text-yellow-300">ID de personnage manquant dans l’URL.</p>';
} else {
    fetch('https://hp-api.onrender.com/api/characters')
    .then(response => {
        if (!response.ok) throw new Error('Erreur lors du chargement des personnages');
        return response.json();
    })
    .then(characters => {
        const decodedName = decodeURIComponent(characterName);
        const character = characters.find(c => c.name === decodedName);

        if (!character) {
        container.innerHTML = '<p class="text-red-300">Personnage non trouvé.</p>';
        return;
        }

        container.innerHTML = `
        <div class="flex flex-col md:flex-row gap-6 items-start">
            <img src="${character.image || 'https://via.placeholder.com/600x800'}"
                alt="${character.name}"
                class="w-full md:w-64 rounded-lg shadow-lg" />

            <div class="flex flex-col gap-2">
            <h1 class="text-4xl font-bold mb-2">${character.name}</h1>

            <p class="flex gap-2 text-lg"><span class="font-semibold">Maison :</span> <span>${character.house || 'Inconnue'}</span></p>
            <p class="flex gap-2 text-lg"><span class="font-semibold">Espèce :</span> <span>${character.species || 'Inconnue'}</span></p>
            <p class="flex gap-2 text-lg"><span class="font-semibold">Date de naissance :</span> <span>${character.dateOfBirth || 'Inconnue'}</span></p>
            <p class="flex gap-2 text-lg"><span class="font-semibold">Patronus :</span> <span>${character.patronus || 'Inconnu'}</span></p>
            <p class="flex gap-2 text-lg"><span class="font-semibold">Acteur :</span> <span>${character.actor || 'Inconnu'}</span></p>
            </div>
        </div>
        `;
    })
    .catch(err => {
        container.innerHTML = `<p class="text-red-300">Erreur : ${err.message}</p>`;
    });
}

backBtn.addEventListener('click', () => {
    window.location.href = 'personnage.html';
});
