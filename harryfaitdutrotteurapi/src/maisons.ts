import { ApiService } from './api';
import type { Character } from './api';
import { CharacterCard } from './characterCard';

class HousesPage {
    private apiService = new ApiService();
    private houseCards: NodeListOf<HTMLElement> = document.querySelectorAll('.house-card');
    private charactersGrid: HTMLElement | null = document.getElementById('characters-grid');
    private houseNameTitle: HTMLElement | null = document.getElementById('house-name');
    private characters: Character[] = [];
    private selectedHouse: string | null = null;
    private houseTranslations: { [key: string]: string } = {
        "Gryffindor": "Gryffondor",
        "Slytherin": "Serpentard",
        "Hufflepuff": "Poufsouffle",
        "Ravenclaw": "Serdaigle"
    };
    private readonly menuBtn: HTMLElement | null = document.getElementById('menu-btn');
    private readonly mobileMenu: HTMLElement | null = document.getElementById('mobile-menu');

    constructor() {
        this.setupMenu();
    }

    public async run() {
        this.characters = await this.apiService.getCharacters();
        this.houseCards.forEach(card => {
            const houseName = card.dataset.house;
            if (houseName) {
                card.addEventListener('click', () => this.toggleCharacters(houseName));
            }
        });

        const urlParams = new URLSearchParams(window.location.search);
        const houseFromUrl = urlParams.get('house');
        if (houseFromUrl) {
            this.toggleCharacters(houseFromUrl);
        }
    }

    private toggleCharacters(houseName: string) {
        if (this.selectedHouse === houseName && !window.location.search.includes('house')) {
            if (this.charactersGrid) this.charactersGrid.innerHTML = '';
            if (this.houseNameTitle) this.houseNameTitle.textContent = '';
            this.selectedHouse = null;
        } else {
            const houseCharacters = this.characters.filter(c => c.house === houseName);
            this.displayCharacters(houseCharacters, this.charactersGrid, houseName);
            if (this.houseNameTitle) {
                this.houseNameTitle.textContent = this.houseTranslations[houseName] || houseName;
            }
            this.selectedHouse = houseName;
        }
    }

    private displayCharacters(characters: Character[], container: HTMLElement | null, houseName: string) {
        if (!container) return;
        container.innerHTML = ''; // Clear container
        characters.forEach(character => {
            const characterCard = new CharacterCard(character, 'maisons', houseName);
            const cardElement = characterCard.createCard();
            container.appendChild(cardElement);
        });
    }

    private setupMenu() {
        if (this.menuBtn && this.mobileMenu) {
            this.menuBtn.addEventListener('click', () => {
                this.mobileMenu?.classList.toggle('hidden');
            });
        }
    }
}

const page = new HousesPage();
page.run();