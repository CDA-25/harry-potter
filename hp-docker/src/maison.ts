import './style.css'
import type { CharacterData } from './class.ts'
import { Character } from './class.ts'

async function fetchCharacters(): Promise<CharacterData[]> {
    const res = await fetch("https://potterhead-api.vercel.app/api/characters")
    return await res.json()
}

async function displayCharactersByHouse(house: string) {
    const container = document.querySelector('.container-characters') as HTMLElement
    container.classList.add("grid", "grid-cols-4", "bg-neutral-900", "gap-10", "mx-15", "p-15", "rounded-xl", "max-h-auto", "mt-5", "mb-6", "inset-ring-3", "inset-ring-red-950")
    container.classList.remove("mb-86")
    container.textContent = ''

    const allCharacters = await fetchCharacters()
    const charactersInHouse = allCharacters.filter(elem => elem.house.toLowerCase() === house.toLowerCase())

    charactersInHouse.forEach(data => {
        const character = new Character(data)

        const card = document.createElement('div')
        card.classList.add("bg-white/80", "opacity-60", "rounded-3xl", "shadow-xl", "p-6", "w-60", "h-80", "text-center", "hover:scale-105", "transition", "duration-300", "cursor-pointer", "hover:opacity-100")

        const image = document.createElement('img')
        image.src = character.image || "/src/assets/img/horse.jpeg"
        image.classList.add("w-32", "h-32", "mx-auto", "rounded-2xl", "object-cover", "mb-4")
        card.appendChild(image)

        const name = document.createElement('h2')
        name.textContent = character.name
        name.classList.add("text-xl", "font-bold", "text-black")
        card.appendChild(name)

        const gender = document.createElement('h3')
        gender.textContent = character.gender
        gender.classList.add("text-base", "text-gray-600")
        card.appendChild(gender)

        card.addEventListener('click', () => {
            window.location.href = `./details.html?id=${character.id}`
        })

        container.appendChild(card)
        container.classList.remove('mb-131')
    })
}

function setupHouseButtons() {
    const buttons = document.querySelectorAll(".house-btn")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const house = (button as HTMLElement).dataset.house
            if (!house) return 

            buttons.forEach(btn => {
                btn.classList.remove("text-yellow-300", "scale-130", "-translate-y-1.5")
            })
            
            button.classList.add("text-yellow-300", "scale-130", "-translate-y-1.5")
            displayCharactersByHouse(house)
        })
    })
}

setupHouseButtons()
