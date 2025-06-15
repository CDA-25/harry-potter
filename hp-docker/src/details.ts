import './style.css'
import type { CharacterData } from './class.ts'
import { Character } from './class.ts'


async function displayCharacterDetails() {
    const url = new URL(window.location.href)
    const characterId = url.searchParams.get('id')

    const allCharacters: CharacterData[] = await (async () => {
        const res = await fetch("https://potterhead-api.vercel.app/api/characters")
        const data = await res.json()
        return data
    })()

    const data = allCharacters.find(elem => elem.id === characterId)

    const character = new Character(data)

    const container = document.querySelector('.container-detailed-card') as HTMLElement

    const card = document.createElement('div')
    card.classList.add("bg-white/80", "rounded-3xl", "shadow-xl", "p-8", "max-w-xl", "mx-auto", "mt-50", "mb-6", "text-center")

    const image = document.createElement('img')
    image.src = character.image || "/src/assets/img/horse.jpeg"
    image.classList.add("w-48", "h-48", "mx-auto", "rounded-3xl", "mb-4", "object-cover")
    card.appendChild(image)

    const name = document.createElement('h2')
    name.textContent = character.name
    name.classList.add("text-3xl", "font-extrabold", "text-black")
    card.appendChild(name)

    const gender = document.createElement('h3')
    gender.textContent = character.gender
    gender.classList.add("text-xl", "text-gray-500", "mb-4")
    card.appendChild(gender)

    const detailsList = document.createElement('ul')
    detailsList.classList.add("text-left", "space-y-2", "text-gray-900")

    const details = [
        `Nickname: ${character.alternate_names || 'Non renseigné'}`,
        `Actor: ${character.actor || 'Non renseigné'}`,
        `House: ${character.house || 'Non renseigné'}`,
        `Birth date: ${character.dateOfBirth || 'Non renseigné'}`,
        `Species: ${character.species || 'Non renseigné'}`,
        `Eye color: ${character.eyeColour || 'Non renseigné'}`,
        `Hair color: ${character.hairColour || 'Non renseigné'}`,
        `Patronus: ${character.patronus || 'Non renseigné'}`,
        `Ancestry: ${character.ancestry || 'Non renseigné'}`,
        `Wand: (Wood: ${character.wand.wood || 'Non renseigné'}), (Core: ${character.wand.core || 'Non renseigné'}), (Length: ${character.wand.length || 'Non renseigné'})`,
        `Student: ${character.hogwartsStudent ? 'Yes' : 'No'}`,
        `Staff: ${character.hogwartsStaff ? 'Yes' : 'No'}`,
        `Alive: ${character.alive ? 'Yes' : 'No'}`
    ]

    details.forEach(text => {
        const li = document.createElement('li')
        li.textContent = text
        detailsList.appendChild(li)
    })

    const backButton = document.createElement('button')
    backButton.textContent = 'Retour'
    backButton.classList.add("m-4", "px-10", "py-3", "bg-black", "text-yellow-300", "hover:bg-yellow-300", "hover:text-black", "font-semibold", "rounded-full", "border-2", "border-black", "transition", "duration-300", "hover:cursor-pointer")
    backButton.addEventListener('click', () => {
        window.history.back()
    })

    card.appendChild(detailsList)
    container.appendChild(card)
    card.appendChild(backButton)

    const body = document.getElementById('body') as HTMLElement

    const house = character.house.toLowerCase()
        switch (house) {
            case 'gryffindor':
                body.classList.remove('bg-default')
                body.classList.add('bg-gryffindor', 'bg-cover')
                break
            case 'slytherin':
                body.classList.remove('bg-default')
                body.classList.add('bg-slytherin')
                break
            case 'ravenclaw':
                body.classList.remove('bg-default')
                body.classList.add('bg-ravenclaw')
                break
            case 'hufflepuff':
                body.classList.remove('bg-default')
                body.classList.add('bg-hufflepuff')
                break
            default:
                break
        }
}

displayCharacterDetails()
