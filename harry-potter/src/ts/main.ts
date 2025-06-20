import '../css/style.css'
import Tool from "./toolbox.ts"
import Character from "./character.ts"
import type { CharacterData } from "./character.ts"

const container = document.querySelector("#characters-container") as HTMLElement

async function displayCharacters() {
  const tool = new Tool()
  const data: CharacterData[] = await tool.getCharacters()

  data.forEach((charData) => {
    const character = new Character(charData)

    const card = new Tool()
      .createElement("div")
      .class("bg-white", "rounded-xl", "shadow-md", "p-4", "flex", "flex-col", "items-center", "text-center", "w-50")

    new Tool()
      .createElement("img")
      .src(character.image || "/public/logo.png")
      .alt(character.name)
      .class("w-32", "h-32", "rounded-full", "mb-4", "object-cover")
      .appendTo(card.element!)

    new Tool()
      .createElement("h2")
      .textContent(character.name)
      .class("text-lg", "font-bold", "mb-1")
      .appendTo(card.element!)

    new Tool()
      .createElement("p")
      .textContent(character.house)
      .class("text-sm", "text-indigo-600", "mb-1")
      .appendTo(card.element!)

    new Tool()
      .createElement("p")
      .textContent(`Interprété par ${character.actor}`)
      .class("text-sm", "text-gray-500")
      .appendTo(card.element!)

    card.appendTo(container)
  })
}

displayCharacters()


