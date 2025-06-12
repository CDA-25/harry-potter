import './style.css'
const cardContainer = document.getElementById('card-container')

class HpCharacter {
  name: string;
  image: string;
  house: string;
  patronus: string;
  actor: string;
  alive: boolean

  constructor(name: string, image: string, house: string, patronus: string, actor: string, alive: boolean) {
    this.name = name;
    this.image = image;
    this.house = house;
    this.patronus = patronus;
    this.actor = actor;
    this.alive = alive;
  }
}

function showCard() {
    fetch('https://potterhead-api.vercel.app/api/characters')
    .then(response => response.json())
    .then(data => {
        const card = document.createElement('div')
        card.className = ''
        cardContainer?.appendChild(card)

        const name = document.createElement('h2')
        name.textContent = data.name
        card.appendChild(name)
    })
    .catch(error => console.error('Erreur :', error));

    
}

showCard()