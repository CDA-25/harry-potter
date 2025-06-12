import '../css/style.css'
import Tool from "./toolbox.ts"
import Character from "./character.ts"
import type { CharacterData } from "./character.ts"

async function main() {
  const data = new Tool()


  const charactersData: CharacterData[] = await data.getCharacters()


  const characters = charactersData.map(data => new Character(data))
  console.log(characters)


  const firstCharacter = characters[1]
  data.createElement("div")
    .textContent(firstCharacter.name)
    .class("character-name")
    .appendTo(document.body)
}

main()


