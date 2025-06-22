import './style.css'
import type { PersonnagesInfo } from './class.ts'
import { Personnages } from './class.ts'

async function chargerPersonnages(): Promise<void> {
  const api: PersonnagesInfo[] = await (async () => {
    const response = await fetch("https://hp-api.onrender.com/api/characters", { method: "GET" })
    const personnages = await response.json()
    return personnages
  })()

  
  api.forEach((personnage) => {
    const perso = new Personnages(personnage)
    
    const container: HTMLElement = document.getElementById("container")!

    const card = document.createElement('div')
    card.classList.add(
      "border-2",
      "rounded-3xl",
       "border-black",
        "bg-white",
         "opacity-60",
          "shadow-lg",
           "items-center",
            "text-center",
             "flex",
              "flex-col",
               "w-50",
                "hover:scale-110",
                 "transition",
                  "duration-300",
                   "hover:-translate-y-1",
                    "hover:cursor-pointer",
                     "m-5",
                      "p-7",
                       "hover:opacity-100")
    
    const name = document.createElement('h2')
    name.classList.add("text-black", "mb-4", "font-bold")
    name.textContent = perso.name
    card.appendChild(name)
    
    const img = document.createElement('img')
    img.src = perso.image || "public/beurre.jpeg"
    img.classList.add("w-32", "h-32", "mb-4", "object-cover", "rounded-full")
    card.appendChild(img)

    const house = document.createElement('p')
    house.textContent = perso.house 
    house.classList.add("text-black", "mb-4", "font-bold")
    card.appendChild(house)
    
    card.addEventListener('click', () => {
        window.location.href = "./details.html?id=" + perso.id 
    })

    container.appendChild(card)
  })
}

chargerPersonnages()

