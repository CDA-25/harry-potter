import type { Character } from "./api";

export class CharacterCard {
    private character: Character;
    private houseName?: string;
    private fromPage: string;

    constructor(character: Character, fromPage: string, houseName?: string) {
        this.character = character;
        this.houseName = houseName;
        this.fromPage = fromPage;
    }

    public createCard(): HTMLAnchorElement {
        const card = document.createElement('a');
        let href = `details.html?id=${this.character.id}&from=${this.fromPage}`;
        if (this.houseName) {
            href += `&house=${this.houseName}`;
        }
        card.href = href;
        
        card.className = 'bg-white rounded-lg shadow-md overflow-hidden block hover:shadow-xl transition-shadow duration-300';

        const image = document.createElement('img');
        image.src = this.character.image || 'images/erreur/not_found.jpeg';
        image.alt = this.character.name;
        image.className = 'w-full h-64 object-cover';
        
        const textContainer = document.createElement('div');
        textContainer.className = 'p-4';

        const name = document.createElement('h2');
        name.textContent = this.character.name;
        name.className = 'text-xl font-bold text-gray-800';
        textContainer.appendChild(name);

        if (this.houseName) {
            const house = document.createElement('p');
            house.textContent = this.houseName;
            house.className = 'text-gray-600';
            textContainer.appendChild(house);
        }
        
        card.appendChild(image);
        card.appendChild(textContainer);

        return card;
    }
}