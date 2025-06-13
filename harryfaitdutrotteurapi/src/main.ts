import { ApiService } from './api';
import { CharacterCard } from './characterCard';

class App {
    private readonly apiService = new ApiService();
    private readonly container: HTMLElement | null = document.getElementById('characters-container');
    private readonly houseSelect: HTMLSelectElement | null = document.getElementById('house-select') as HTMLSelectElement;
    private characters: any[] = [];

    public async run() {
        if (!this.container || !this.houseSelect) {
            console.error('Le conteneur ou le sélecteur de maison n\'a pas été trouvé');
            return;
        }

        this.characters = await this.apiService.getCharacters();
        this.populateHouseSelect();
        const urlParams = new URLSearchParams(window.location.search);
        const houseFromUrl = urlParams.get('house');

        if (houseFromUrl) {
            this.houseSelect.value = houseFromUrl;
            const filteredCharacters = this.characters.filter(character => character.house === houseFromUrl);
            this.displayCharacters(filteredCharacters, houseFromUrl);
        } else {
            this.displayCharacters(this.characters, 'all');
        }

        this.houseSelect.addEventListener('change', () => {
            if (this.houseSelect) {
                const selectedHouse = this.houseSelect.value;
                const filteredCharacters = selectedHouse === 'all'
                    ? this.characters
                    : this.characters.filter(character => character.house === selectedHouse);
                this.displayCharacters(filteredCharacters, selectedHouse);
            }
        });
    }

    private populateHouseSelect() {
        const houseTranslations: { [key: string]: string } = {
            "Gryffindor": "Gryffondor",
            "Hufflepuff": "Poufsouffle",
            "Ravenclaw": "Serdaigle",
            "Slytherin": "Serpentard"
        };

        const houses = [...new Set(this.characters.map(character => character.house).filter(house => house))];
        houses.forEach(house => {
            const option = document.createElement('option');
            option.value = house;
            option.textContent = houseTranslations[house as keyof typeof houseTranslations] || house;
            this.houseSelect?.appendChild(option);
        });
    }

    private displayCharacters(characters: any[], houseName: string) {
        if (!this.container) return;
        this.container.innerHTML = ''; // Clear container
        characters.forEach(character => {
            const characterCard = new CharacterCard(character, 'index', houseName === 'all' ? undefined : houseName);
            const cardElement = characterCard.createCard();
            this.container?.appendChild(cardElement);
        });
    }
}

const app = new App();
app.run();