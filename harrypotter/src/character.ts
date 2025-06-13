export type CharacterData = {
  id: any;
  name: string;
  house: string;
  actor: string;
  image: string;
  patronus: string;
  alternate_names: string;
  alive: boolean;
}

const cardContainer = document.getElementById('card-container');
cardContainer.className = "grid grid-cols-4 gap-10 ml-10 mr-10"

export class Character {
  id: any;
  name: string;
  house: string;
  actor: string;
  image: string;
  patronus: string;
  alternate_names: string;
  alive: boolean;

  constructor(data: CharacterData) {
    this.id = data.id;
    this.name = data.name;
    this.house = data.house;
    this.actor = data.actor;
    this.image = data.image;
    this.patronus = data.patronus;
    this.alternate_names = data.alternate_names;
    this.alive = data.alive;
  }
  createCard() {
    const card = document.createElement('div');
    card.addEventListener('click', () => {
    window.location.href = `/fullcharacter.html?name=${this.id}`
    })
    card.className = 'card';
    const nameEl = document.createElement('h2');
    nameEl.className = ""
    nameEl.textContent = this.name;
    card.appendChild(nameEl);

    const imgEl = document.createElement('img');
    if (this.image === '') {
      imgEl.src = '/src/assets/img/PPPablo.jpeg'
    } else {
      imgEl.src = this.image
    }
    imgEl.className = 'min-w-100 min-h-100 max-w-100 max-h-100'
    card.appendChild(imgEl)

    cardContainer?.appendChild(card);
  }
}