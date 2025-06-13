import '../style.css'
import './main.ts'
import { GetCharacterApi } from '../API/getCharacters.ts'
import type { CharacterFull } from '../Types/characters.ts'
import { createDetailsContainer } from '../components/createDetails.ts'

const api = new GetCharacterApi()
const characters = await api.getCharacter()

const detailsCharacter = document.querySelector('#appDetails')
const characterId = localStorage.getItem('selectedCharacterId')
const btnRetour = document.querySelector('#btnRetour')


if (!characterId) {
    console.log('#appDetails non trouvé')
} else {
    const character = characters.find(c => c.id === characterId || c.name === characterId)
    if (character && detailsCharacter) {
        const details = createDetailsContainer(character as CharacterFull)
        detailsCharacter.appendChild(details)
    }
    if (btnRetour) {
        btnRetour.addEventListener('click', () => {
            window.location.href = '../index.html'
        })
    } else {
        console.log('Bouton #btnRetour non trouvé')
    }
}

