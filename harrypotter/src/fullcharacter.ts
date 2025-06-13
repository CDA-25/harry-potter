// import { Character } from './character'
import './style.css'

const charCard = document.getElementById('char-container')
const id = url.searchParams.get('name')

async function fetchCharacter(id) {
  try {
    const res = await fetch(`https://hp-api.onrender.com/api/characters/${id}`);
    const data: CharacterData[] = await res.json();

    data.forEach((charData) => {
      const character = new Character(charData);
      character.createCard();
    });

  } catch (error) {
    console.error("Erreur lors du fetch des personnages :", error);
  }
}

fetchCharacters();