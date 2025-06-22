export function createHouse(house: string): HTMLElement {
    const contenairMaison = document.createElement('div')
    contenairMaison.classList.add('flex', 'justify-center', 'items-center', 'bg-contain', 'bg-center', 'bg-no-repeat', 'm-5', 'w-full', 'h-full', 'transition-all', 'duration-300', 'hover:scale-105', 'cursor-pointer')
    const name = document.createElement('h1')
    name.classList.add('font-harry', 'text-center', 'text-6xl', 'text-white', 'bg-black/60')
    name.textContent = house
    if (house === "Gryffindor") {
        contenairMaison.classList.add('bg-[url("./public/Gryffondor.png")]')
    }
    if (house === "Ravenclaw") {
        contenairMaison.classList.add('bg-[url("./public/Serdaigle.png")]')
    }
    if (house === "Slytherin") {
        contenairMaison.classList.add('bg-[url("./public/Serpentard.png")]')
    }
    if (house === "Hufflepuff") {
        contenairMaison.classList.add('bg-[url("./public/Hufflepuff.png")]')
    }
    contenairMaison.appendChild(name)
    return contenairMaison
}