import type { CharacterFull } from '../Types/characters.ts'

export class GetCharacterApi {
    async getCharacter(): Promise<CharacterFull[]> {
        const res = await fetch("https://hp-api.onrender.com/api/characters")
        const data: CharacterFull[] = await res.json()
        return data
    }
}
