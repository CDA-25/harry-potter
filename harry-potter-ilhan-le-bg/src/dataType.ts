export type typageData = {
    id: string
    name: string
    alternate_names: string[]
    species: string
    gender: string
    house: string
    dateOfBirth: string
    yearOfBirth: number
    wizard: boolean
    ancestry: string
    eyeColour: string
    hairColour: string
    wand:wandaNarra
    patronus: string
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    actor: string
    alternate_actors: string[]
    alive: boolean
    image: string
}

export type wandaNarra = {
    wood: string
    core: string
    length: number
}

export class character {
    id: string
    name: string
    alternateNames: string[]
    species: string
    gender: string
    house: string
    dateOfBirth: string
    yearOfBirth: number
    wizard: boolean
    ancestry: string
    eyeColour: string
    hairColour: string
    wand: wandaNarra
    patronus: string
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    actor: string
    alternateActors: string[]
    alive: boolean
    image: string
    constructor(data: typageData) {
        this.id = data.id
        this.name = data.name
        this.alternateNames = data.alternate_names
        this.species = data.species
        this.gender = data.gender
        this.house = data.house 
        this.dateOfBirth = data.dateOfBirth || "non renseigne"
        this.yearOfBirth = data.yearOfBirth
        this.wizard = data.wizard
        this.ancestry = data.ancestry
        this.eyeColour = data.eyeColour
        this.hairColour = data.hairColour
        this.wand = data.wand
        this.patronus = data.patronus
        this.hogwartsStudent = data.hogwartsStudent
        this.hogwartsStaff = data.hogwartsStaff
        this.actor = data.actor || "non renseigner"
        this.alternateActors = data.alternate_actors
        this.alive = data.alive
        this.image = data.image 
    }
}