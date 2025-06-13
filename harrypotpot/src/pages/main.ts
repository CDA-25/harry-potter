import '../style.css'
import { GetCharacterApi } from '../API/getCharacters.ts'
import { createCard } from '../components/createCardAccueil.ts'


const apiPerso = new GetCharacterApi()
const characters = await apiPerso.getCharacter()

const cardsGrid = document.querySelector('#app')
const selectHouse = document.querySelector('#selectHouse') as HTMLSelectElement

if (cardsGrid && selectHouse) {
  function genererCards(chara: typeof characters) {
    cardsGrid!.innerHTML = ''
    chara.forEach(({ id, name, image }) => {
      const card = createCard({ id, name, image });
      cardsGrid!.appendChild(card);
    })
  }

  genererCards(characters)

  cardsGrid.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const card = target.closest('[id]')
    if (card?.id) {
      localStorage.setItem('selectedCharacterId', card.id)
      window.location.href = 'details.html'
    }
  })


  selectHouse.addEventListener('change', (e) => {
    const selected = (e.target as HTMLSelectElement).value
    if (!selected) {
      genererCards(characters)
      return
    }
    const filtered = characters.filter(chara => chara.house === selected)
    genererCards(filtered)
  })

} else {
  console.log('erreur dans le filtrage')
}