import './style.css'
import type { CharacterData } from './class.ts'
import { Character } from './class.ts'

let allCharacters: CharacterData[] = [] 

async function fetchCharacters(): Promise<CharacterData[]> {
    const res = await fetch("https://potterhead-api.vercel.app/api/characters")
    return await res.json()
}

function renderCharacters(characters: CharacterData[]) {
    const container = document.querySelector('.cards-container') as HTMLElement
    container.textContent = ""

    characters.forEach((CharacterData) => {
        const character = new Character(CharacterData)

        const card = document.createElement('div')
        card.classList.add("bg-white", "border-2", "opacity-70", "rounded-2xl", "shadow-lg", "p-4", "flex", "flex-col", "items-center", "text-center", "w-50", "hover:scale-110", "transition", "duration-300", "hover:-translate-y-1", "hover:opacity-100", "hover:cursor-pointer")

        const image = document.createElement('img')
        image.src = character.image || "/src/assets/img/horse.jpeg"
        image.classList.add("w-32", "h-32", "rounded-2xl", "mb-4", "object-cover")
        card.appendChild(image)

        const name = document.createElement('h3')
        name.textContent = character.name
        name.classList.add("text-lg", "font-bold", "mb-1")
        card.appendChild(name)

        const actor = document.createElement('p')
        actor.textContent = "Acteur: " + character.actor
        actor.classList.add("text-sm", "text-gray-500", "mb-1")
        card.appendChild(actor)

        const house = document.createElement('p')
        house.textContent = "Maison: " + character.house
        house.classList.add("text-sm", "text-indigo-600", "mb-1")
        card.appendChild(house)

        card.addEventListener("click", function () {
            window.location.href = "./details.html?id=" + character.id
        })

        container.appendChild(card)
    })
}

function setupHouseFilter() {
    const select = document.getElementById("house-filter") as HTMLSelectElement

    select.addEventListener("change", () => {
        const selected = select.value.toLowerCase()

        if (selected === "") {
            renderCharacters(allCharacters) 
        } else {
            const filtered = allCharacters.filter(elem => elem.house.toLowerCase() === selected)
            renderCharacters(filtered)
        }
    })
}

async function displayCharacters() {
    allCharacters = await fetchCharacters()
    renderCharacters(allCharacters)
    setupHouseFilter()
}

displayCharacters()
