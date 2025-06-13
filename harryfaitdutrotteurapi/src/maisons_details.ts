import { ApiService } from './api';
import { CharacterCard } from './characterCard';
import type { Character } from './api';

class HouseDetailsPage {
    private readonly apiService = new ApiService();
    private readonly container: HTMLElement | null = document.getElementById('house-characters-container');
    private readonly houseNameElement: HTMLElement | null = document.getElementById('house-name');

    public async init() {
        const urlParams = new URLSearchParams(window.location.search);
        const houseName = urlParams.get('house');

        if (houseName && this.houseNameElement) {
            this.houseNameElement.textContent = houseName;
        }

        if (houseName) {
            const allCharacters = await this.apiService.getCharacters();
            const houseCharacters = allCharacters.filter(character => character.house === houseName);
            this.displayCharacters(houseCharacters, houseName);
        }
    }

    private displayCharacters(characters: Character[], houseName: string) {
        if (!this.container) return;

        this.container.innerHTML = ''; // Clear container

        characters.forEach(character => {
            const characterCard = new CharacterCard(character, houseName);
            const cardElement = characterCard.createCard();
            this.container?.appendChild(cardElement);
        });
    }
}

const page = new HouseDetailsPage();
page.init();