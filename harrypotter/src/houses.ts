import { Houseslist } from './classes';
import './style.css'

async function fetchHouses() {
  try {
    const response = await fetch('https://potterhead-api.vercel.app/api/houses');
    const data: string[] = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des maisons:', error);
  }
}

async function displayHouses() {
    const houses = await fetchHouses();
    if (houses !== undefined) {
        houses.forEach((house) => {
            const finalHouse = new Houseslist(house);
            finalHouse.createHouseCard();
        })
    }
}

displayHouses();