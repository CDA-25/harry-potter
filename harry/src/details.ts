import './style.css'
import type { PersonnagesInfo } from './class.ts'
import { Personnages } from './class.ts'

async function ChargerDetails() {
    const url = new URL(window.location.href)
    const characterId = url.searchParams.get("id")

    const allCharacters: PersonnagesInfo[] = await (async () => {
        const response = await fetch("https://hp-api.onrender.com/api/characters")
        const data = await response.json()
        return data
    })()

    const data = allCharacters.find(element => element.id === characterId)

    const character = new Personnages(data!)

    const container = document.getElementById('container') as HTMLElement

    const card = document.createElement('div')
    card.classList.add("bg-yellow-500/80", "rounded-3xl", "shadow-xl", "p-8", "max-w-xl", "mx-auto", "mt-50", "mb-6", "text-center")

    const image = document.createElement('img')
    image.src = character.image || "public/beurre.jpeg"
    image.classList.add("w-48", "h-48", "mx-auto", "rounded-full", "mb-4", "object-cover")
    card.appendChild(image)

    const name = document.createElement('h1')
    name.textContent = character.name
    name.classList.add("text-3xl", "font-extrabold", "text-black")
    card.appendChild(name)

    const gender = document.createElement('h3')
    gender.textContent = character.gender
    gender.classList.add("text-xl", "text-gray-500", "mb-4")
    card.appendChild(gender)

    const house = document.createElement('h2')
    house.textContent = character.house || "SDF"
    house.classList.add("text-black", "mb-4", "font-bold")
    card.appendChild(house)

    const species = document.createElement('p')
    species.textContent = "Species: " + character.species
    species.classList.add("text-black", "font-bold", "text-start")
    card.appendChild(species)

    const birth = document.createElement('p')
    birth.textContent = "Birth date: " + character.dateOfBirth
    birth.classList.add("text-black", "font-bold", "text-start")
    card.appendChild(birth)

    const actor = document.createElement('p')
    actor.textContent = "Actor: " + character.actor
    actor.classList.add("text-black", "font-bold", "text-start")
    card.appendChild(actor)

    const patronus = document.createElement('p')
    patronus.textContent = "Patronus: " + character.patronus
    patronus.classList.add("text-black", "font-bold", "text-start")
    card.appendChild(patronus)

    const ancestry = document.createElement('p')
    ancestry.textContent = "Ancestry: " + character.ancestry
    ancestry.classList.add("text-black", "font-bold", "text-start")
    card.appendChild(ancestry)

    const wizard = document.createElement('p')
    wizard.textContent = "Wizard: " + character.wizard
    wizard.classList.add("text-black", "font-bold", "text-start")
    card.appendChild(wizard)

    const student = document.createElement('p')
    student.textContent = "Hogwarts student: " + character.hogwartsStudent
    student.classList.add("text-black", "font-bold", "text-start")
    card.appendChild(student)

    const staff = document.createElement('p')
    staff.textContent = "Hogwarts staff: " + character.hogwartsStaff
    staff.classList.add("text-black", "font-bold", "text-start")
    card.appendChild(staff)

    const alive = document.createElement('p')
    alive.textContent = "Alive: " + character.alive
    alive.classList.add("text-black", "font-bold", "text-start")
    card.appendChild(alive)

    const backButton = document.createElement('button')
    backButton.textContent = 'Retour'
    backButton.classList.add("m-4", "px-10", "py-3", "bg-black", "text-white", "hover:bg-white", "hover:text-black", "font-semibold", "rounded-full", "border-2", "border-black", "transition", "duration-300", "hover:cursor-pointer")
    backButton.addEventListener('click', () => {
        window.history.back()
    })

    container.appendChild(card)
    card.appendChild(backButton)
}

ChargerDetails()