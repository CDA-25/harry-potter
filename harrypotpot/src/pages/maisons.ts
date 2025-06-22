import '../style.css'
import { GetHouseApi } from '../API/getHouse'
import { createHouse } from '../components/createHouse'

const sectionsMaisons = document.querySelector("#houses")
const apiMaison = new GetHouseApi()
apiMaison.getHouse().then((houses => {
    houses.forEach((house) => {
        const e = createHouse(house)
        sectionsMaisons?.appendChild(e)
    })
    if (sectionsMaisons) {
        sectionsMaisons.addEventListener('click', () => {
            window.open('https://harrypotter.fandom.com/fr/wiki/Maisons_de_Poudlard', '_blank')
        })
    } else {
        console.log('#sectionsMaisons pas trouvé')
    }

}))