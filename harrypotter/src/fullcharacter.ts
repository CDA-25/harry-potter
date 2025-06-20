import './style.css';
import { Character } from './classes';
import type { CharacterData } from './classes';

// const charCard = document.getElementById('char-container');
const url = new URL(window.location.href);

const id = url.searchParams.get('name');

async function fetchCharacter(name: string) {
  try {
    console.log(name)
    const res = await fetch(`https://hp-api.onrender.com/api/character/${name}`);
    const data: CharacterData[] = await res.json();
    const character = new Character(data[0]);
    character.createCompleteCard();

  } catch (error) {
    console.error("Erreur lors du fetch des personnages :", error);
  }
}

if (id) {
  fetchCharacter(id);
} else {
  console.warn("Aucun paramètre 'name' trouvé dans l'URL.");
}