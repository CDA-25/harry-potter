import type { CardAccueil } from "../Types/characters"

export function createCard(character: CardAccueil): HTMLElement {
    const card = document.createElement('div')
    card.classList.add('relative', 'rounded-[15px]', 'border-2', 'border-black', 'shadow-[0_0_8px_2px_rgba(0,0,0,0.7)]', 'bg-white', 'h-130', 'text-center', 'transition-all', 'duration-300', 'hover:scale-105', 'cursor-pointer')
    card.id = character.id
    const title = document.createElement('h2')
    title.classList.add('absolute', 'bottom-0', 'left-1/2', 'w-full', '-translate-x-1/2', 'font-harry', 'font-bold', 'text-blue-950', 'pb-2', 'bg-white/80', 'border-b-2', 'rounded-b-[5px]')
    title.textContent = character.name.toUpperCase()
    const img = document.createElement('img')
    img.classList.add('w-full', 'h-full', 'object-cover', 'rounded-[15px]')
    if (character.image) {
        img.src = character.image
        img.alt = character.name
    } else {
        img.src = "./public/vieille-sorciere-grincheuse-dans-robe-noire-chapeau-sorciere_1166109-11600.avif"
        img.alt = "une illustration de vieille sorcière"
    }

    card.appendChild(title)
    card.appendChild(img)

    return card

}




