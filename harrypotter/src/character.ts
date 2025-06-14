export type CharacterData = {
  id: any;
  name: string;
  house: string;
  actor: string;
  image: string;
  patronus: string;
  alternate_names: [];
  alive: boolean;
  gender: string;
}

const cardContainer = document.getElementById('card-container');
if (cardContainer) {
  cardContainer.className = "grid grid-cols-4 gap-10 ml-10 mr-10";
}

const charContainer = document.getElementById('char-container');
if (charContainer) {
  charContainer.className = ""
}

export class Character {
  id: any;
  name: string;
  house: string;
  actor: string;
  image: string;
  patronus: string;
  alternate_names: [];
  alive: boolean;
  gender: string;

  constructor(data: CharacterData) {
    this.id = data.id;
    this.name = data.name;
    this.house = data.house;
    this.actor = data.actor;
    this.image = data.image;
    this.patronus = data.patronus;
    this.alternate_names = data.alternate_names;
    this.alive = data.alive;
    this.gender = data.gender;
  }
  createCard() {
    const card = document.createElement('div');
    card.addEventListener('click', () => {
    window.location.href = `/fullcharacter.html?name=${this.id}`
    })
    card.className = 'bg-blue-950 hover:bg-blue-900 transition ease-in-out duration-300 rounded-[12px] flex flex-col py-[25px] mt-10';
    
    const imgEl = document.createElement('img');
    if (this.image === '') {
      if (this.gender === 'female') {
        console.log('meuf')
        imgEl.src = '/src/assets/img/PPPablette.png'
      } else {
        imgEl.src = '/src/assets/img/PPPablo.png'
      }
    } else {
      imgEl.src = this.image
    }
    imgEl.className = 'w-[500px] h-[500px] mx-auto'
    card.appendChild(imgEl)

    const nameEl = document.createElement('h2');
    nameEl.className = "text-center font-bold pt-2"
    nameEl.textContent = this.name;
    card.appendChild(nameEl);

    const lateralLine = document.createElement('div')
    lateralLine.className = "border-b-1 border-white ml-5 mr-5 mt-1"
    card.appendChild(lateralLine)

    const infoBtn = document.createElement('button')
    infoBtn.textContent = "Plus d'infos"
    infoBtn.className = "mt-2 text-black hover:font-bold bg-white w-30 mx-auto rounded-[12px] transition ease-in-out duration-300"
    card.appendChild(infoBtn)

    cardContainer?.appendChild(card);
  }

  createCompleteCard() {
    const card = document.createElement('div');
    card.className = 'bg-blue-950 hover:bg-blue-900 transition ease-in-out duration-300 rounded-[12px] flex py-[25px] mt-10 mx-20 justify-start';
    
    const imgEl = document.createElement('img');
    if (this.image === '') {
      if (this.gender === 'female') {
        console.log('meuf')
        imgEl.src = '/src/assets/img/PPPablette.png'
      } else {
        imgEl.src = '/src/assets/img/PPPablo.png'
      }
    } else {
      imgEl.src = this.image
    }
    imgEl.className = 'w-[400px] h-[500px] ml-10 rounded-2xl'
    card.appendChild(imgEl)

    const infos = document.createElement('div')
    infos.className = "mr-20 ml-20"
    card.appendChild(infos)

    const nameEl = document.createElement('h2');
    nameEl.className = "font-bold pt-2 pb-2"
    nameEl.textContent = "Nom : " + this.name;
    infos.appendChild(nameEl);

    const lateralLine1 = document.createElement('div')
    lateralLine1.className = "border-b-1 border-white mt-1"
    infos.appendChild(lateralLine1)

    const akas = document.createElement('div')
    akas.className = "flex font-bold pt-2 pb-2 items-center"
    akas.textContent = "AkA : "
    this.alternate_names.forEach((name) => {
      const aliasEl = document.createElement('h2');
      aliasEl.className = "text-center font-bold pt-2 pb-2";
      aliasEl.textContent = ` | ${name} `;
      akas.appendChild(aliasEl);
    });
    infos.appendChild(akas)

    const lateralLine2 = document.createElement('div')
    lateralLine2.className = "border-b-1 border-white mt-1"
    infos.appendChild(lateralLine2)

    const patronus = document.createElement('h2');
    patronus.className = "font-bold pt-2 pb-2"
    patronus.textContent = "Patronus : " + this.patronus;
    infos.appendChild(patronus);

    const lateralLine3 = document.createElement('div')
    lateralLine3.className = "border-b-1 border-white mt-1"
    infos.appendChild(lateralLine3)

    const house = document.createElement('h2');
    house.className = "font-bold pt-2 pb-2"
    house.textContent = "Maison : " + this.house;
    infos.appendChild(house);

    const lateralLine4 = document.createElement('div')
    lateralLine4.className = "border-b-1 border-white mt-1"
    infos.appendChild(lateralLine4)

    const alive = document.createElement('h2');
    alive.className = "font-bold pt-2 pb-2"
    if (this.alive === true) {
      alive.textContent = "Actuellement en vie";
    } else if (this.gender === "female") {
      alive.textContent = "Actuellement morte";
    } else {
      alive.textContent = "Actuellement mort";
    }
    infos.appendChild(alive);

    const lateralLine5 = document.createElement('div')
    lateralLine5.className = "border-b-1 border-white mt-1"
    infos.appendChild(lateralLine5)

    const croque = document.createElement('h2');
    croque.className = "font-bold pt-2 pb-2"
    if (this.alive === true) {
      if (this.gender === 'female') {
        croque.textContent = 'Ryad lui lèche les pieds'
      } else {
        croque.textContent = 'Pablo lui lèche le fruit sec'
      }
    }
    infos.appendChild(croque);

    charContainer?.appendChild(card);
  }
}