import { Character } from './classes'
import type { CharacterData } from './classes';
import './style.css'

async function fetchCharacters() {
  try {
    const res = await fetch('https://hp-api.onrender.com/api/characters');
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