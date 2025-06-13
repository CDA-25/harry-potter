import '../style.css'
import { GetCharacterApi } from '../API/getCharacters.ts'
import { createCard } from '../components/createCardAccueil.ts'


const apiPerso = new GetCharacterApi()
const characters = await apiPerso.getCharacter()

const cardsGrid = document.querySelector('#app')

if (cardsGrid) {
  characters.forEach(({ id, name, image }) => {
    const card = createCard({ id, name, image });
    cardsGrid.appendChild(card);
  })

  cardsGrid.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const card = target.closest('[id]')
    if (card?.id) {
      localStorage.setItem('selectedCharacterId', card.id)
      window.location.href = 'details.html'
    }
  })
} else {
  console.log('#app non trouvé')
}

//  filter cards of people of the house.
