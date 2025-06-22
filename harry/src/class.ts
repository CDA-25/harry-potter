export type PersonnagesInfo = {
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
    wand: {
        wood: string
        core: string
        length: number
    }
    patronus: string
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    actor: string
    alive: boolean
    image: string
}
export class Personnages {
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
    wand: {
        wood: string
        core: string
        length: number
    }
    patronus: string
    hogwartsStudent: boolean
    hogwartsStaff: boolean
    actor: string
    alive: boolean
    image: string

    constructor(data: PersonnagesInfo) {
        this.id = data.id
        this.name = data.name
        this.alternate_names = data.alternate_names
        this.species = data.species
        this.gender = data.gender
        this.house = data.house || "SDF"
        this.dateOfBirth = data.dateOfBirth
        this.yearOfBirth = data.yearOfBirth
        this.wizard = data.wizard
        this.ancestry = data.ancestry
        this.eyeColour = data.eyeColour
        this.hairColour = data.hairColour
        this.wand = data.wand
        this.patronus = data.patronus
        this.hogwartsStudent = data.hogwartsStudent
        this.hogwartsStaff = data.hogwartsStaff
        this.actor = data.actor || "figurant chef"
        this.alive = data.alive
        this.image = data.image
    }
}