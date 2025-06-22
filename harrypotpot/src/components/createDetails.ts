import type { CharacterFull } from "../Types/characters"

export function createDetailsContainer(character: CharacterFull): HTMLElement {
    const details = document.createElement('div')
    details.classList.add('m-5', 'min-h-screen', 'min-w-[70vw]', 'rounded-xl', 'shadow-md', 'p-6', 'text-center', 'm-5', 'bg-black/50', 'rounded-xl', 'shadow-md', 'border-4', 'border-amber-200', 'text-white')
    details.id = `character-${character.name.toLowerCase().replace(/\s+/g, '-')}`
    details.id = "appDetails"

    const title = document.createElement('h2')
    title.textContent = character.name
    title.classList.add('font-harry', 'text-5xl', 'font-bold', 'mb-4', 'text-center')

    const altNames = document.createElement('h3')
    altNames.textContent = character.alternate_names.join(', ') || 'Aucun'
    altNames.classList.add('text-3xl', 'mb-2', 'italic', 'text-center')

    const house = document.createElement('p')
    house.textContent = `Maison : ${character.house || 'Inconnue'}`

    const birth = document.createElement('p')
    birth.textContent = `Date de naissance : ${character.dateOfBirth || 'Inconnue'} (${character.yearOfBirth || 'Inconnue'})`

    const species = document.createElement('p')
    species.textContent = `Espèce : ${character.species}`

    const gender = document.createElement('p')
    gender.textContent = `Genre : ${character.gender}`

    const ancestry = document.createElement('p')
    ancestry.textContent = `Ascendance : ${character.ancestry || 'Inconnue'}`

    const wand = document.createElement('p')
    wand.textContent = `Baguette : bois: ${character.wand.wood || 'inconnu'}, cœur: ${character.wand.core || 'inconnu'}, longueur: ${character.wand.length || 'inconnue'}`

    const patronus = document.createElement('p')
    patronus.textContent = `Patronus : ${character.patronus || 'Aucun'}`

    const role = document.createElement('p')
    role.textContent = character.hogwartsStaff
        ? 'Rôle : membre du personnel de Poudlard'
        : character.hogwartsStudent
            ? 'Rôle : élève à Poudlard'
            : 'Rôle : inconnu'

    const actor = document.createElement('p')
    actor.textContent = `Interprété par : ${character.actor || 'Inconnu'}`

    const altActors = document.createElement('p')
    altActors.textContent = `Acteurs alternatifs : ${character.alternate_actors.join(', ') || 'Aucun'}`

    const alive = document.createElement('p')
    alive.textContent = `Statut : ${character.alive ? 'Vivant·e' : 'Décédé·e'}`

    const containerImg = document.createElement('div')
    containerImg.classList.add('flex', 'justify-center', 'pt-5', 'pb-5')
    const img = document.createElement('img')
    if (character.image) {
        img.src = character.image
        img.alt = character.name
    } else {
        img.src = "./public/vieille-sorciere-grincheuse-dans-robe-noire-chapeau-sorciere_1166109-11600.avif"
        img.alt = "une illustration de vieille sorcière"
    }
    img.classList.add('w-80', 'h-auto', 'rounded', 'mb-4')

    containerImg.appendChild(img)
    details.appendChild(title)
    details.appendChild(altNames)
    details.appendChild(containerImg)
    details.appendChild(house)
    details.appendChild(birth)
    details.appendChild(species)
    details.appendChild(gender)
    details.appendChild(ancestry)
    details.appendChild(wand)
    details.appendChild(patronus)
    details.appendChild(role)
    details.appendChild(actor)
    details.appendChild(altActors)
    details.appendChild(alive)

    return details
}