import { ApiService } from './api';
import type { Character, CharacterDetails } from './api';

class CharacterDetailsPage {
    private readonly apiService = new ApiService();
    private readonly container: HTMLElement | null = document.getElementById('character-details-container');

    public async init() {
        const urlParams = new URLSearchParams(window.location.search);
        const characterId = urlParams.get('id');
        const house = urlParams.get('house');

        const backLink = document.getElementById('back-link') as HTMLAnchorElement;
        if (house) {
            backLink.href = `index.html?house=${house}`;
        } else {
            backLink.href = 'index.html';
        }
        backLink.textContent = "Retour à l'accueil";

        if (characterId) {
            const character = await this.apiService.getCharacterById(characterId);
            if (character) {
                this.displayCharacterDetails(character);
            }
        }
    }

    private displayCharacterDetails(character: CharacterDetails) {
        if (!this.container) return;

        this.container.innerHTML = ''; // Clear container

        const imageContainer = document.createElement('div');
        imageContainer.className = 'md:w-1/3';

        const image = document.createElement('img');
        image.src = character.image || 'images/erreur/not_found.jpeg';
        image.alt = character.name;
        image.className = 'w-full h-auto rounded-lg shadow-md';
        imageContainer.appendChild(image);

        const infoContainer = document.createElement('div');
        infoContainer.className = 'md:w-2/3 md:pl-8';

        const name = document.createElement('h1');
        name.textContent = character.name;
        name.className = 'text-4xl font-bold mb-4';
        infoContainer.appendChild(name);

        const details = document.createElement('div');
        details.className = 'grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4';

        const createDetail = (label: string, value: any) => {
            const p = document.createElement('p');
            let displayValue = value;
            if (typeof value === 'boolean') {
                displayValue = value ? 'Oui' : 'Non';
            } else if (Array.isArray(value)) {
                displayValue = value.join(', ') || 'N/A';
            } else if (typeof value === 'object' && value !== null) {
                displayValue = Object.entries(value).map(([key, val]) => `${key}: ${val}`).join(', ') || 'N/A';
            }
            p.innerHTML = `<span class="font-bold">${label} :</span> ${displayValue || 'N/A'}`;
            details.appendChild(p);
        }

        createDetail('Noms alternatifs', character.alternateNames);
        createDetail('Espèce', character.species);
        createDetail('Genre', character.gender);
        createDetail('Maison', character.house);
        createDetail('Date de naissance', character.dateOfBirth);
        createDetail('Année de naissance', character.yearOfBirth);
        createDetail('Sorcier', character.wizard);
        createDetail('Ascendance', character.ancestry);
        createDetail('Couleur des yeux', character.eyeColour);
        createDetail('Couleur des cheveux', character.hairColour);
        createDetail('Baguette', character.wand);
        createDetail('Patronus', character.patronus);
        createDetail('Étudiant à Poudlard', character.hogwartsStudent);
        createDetail('Personnel de Poudlard', character.hogwartsStaff);
        createDetail('Acteur', character.actor);
        createDetail('Acteurs alternatifs', character.alternateActors);
        createDetail('En vie', character.alive);

        infoContainer.appendChild(details);

        this.container.appendChild(imageContainer);
        this.container.appendChild(infoContainer);
    }
}

const page = new CharacterDetailsPage();
page.init();