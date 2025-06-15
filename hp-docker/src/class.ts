export type CharacterData = {
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

export class Character {
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

    constructor(data: CharacterData) {
        this.id = data.id
        this.name = data.name
        this.alternate_names = data.alternate_names
        this.species = data.species
        this.gender = data.gender
        this.house = data.house || "Non renseigné"
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
        this.actor = data.actor || "Non renseigné"
        this.alive = data.alive
        this.image = data.image
    }
}

export type BookData = {
    serial: string
    title: string
    summary: string
    release_date: string
    dedication: string
    pages: string
    cover: string
    wiki: string
}

export class Book {
    serial: string
    title: string
    summary: string
    release_date: string
    dedication: string
    pages: string
    cover: string
    wiki: string

    constructor(data: BookData) {
        this.serial = data.serial
        this.title = data.title
        this.summary = data.summary
        this.release_date = data.release_date
        this.dedication = data.dedication
        this.pages = data.pages
        this.cover = data.cover
        this.wiki = data.wiki
    }
}

export type MovieData = {
    serial: string
    title: string
    summary: string
    directors: string[]
    screenwriters: string[]
    producers: string[]
    cinematographers: string[]
    editors: string[]
    distributors: string[]
    music_composers: string[]
    release_date: string
    running_time: string
    budget: string
    box_office: string
    rating: string
    trailer: string
    poster: string
    wiki: string
}

export class Movie {
    serial: string
    title: string
    summary: string
    directors: string[]
    screenwriters: string[]
    producers: string[]
    cinematographers: string[]
    editors: string[]
    distributors: string[]
    music_composers: string[]
    release_date: string
    running_time: string
    budget: string
    box_office: string
    rating: string
    trailer: string
    poster: string
    wiki: string

    constructor(data: MovieData) {
        this.serial = data.serial
        this.title = data.title
        this.summary = data.summary
        this.directors = data.directors
        this.screenwriters = data.screenwriters
        this.producers = data.producers
        this.cinematographers = data.cinematographers
        this.editors = data.editors
        this.distributors = data.distributors
        this.music_composers = data.music_composers
        this.release_date = data.release_date
        this.running_time = data.running_time
        this.budget = data.budget
        this.box_office = data.box_office
        this.rating = data.rating
        this.trailer = data.trailer
        this.poster = data.poster
        this.wiki = data.wiki
    }
}