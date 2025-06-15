export class HarryPotter {
  name: string;
  image: string;
  house: string;
  patronus: string;
  actor: string;
  alive: boolean
  id: string | number

  constructor(name: string, image: string, house: string, patronus: string, actor: string, alive: boolean, id: string | number) {
    this.name = name;
    this.image = image;
    this.house = house;
    this.patronus = patronus;
    this.actor = actor;
    this.alive = alive;
    this.id = id;
  }
}

export class Films {
    serial: number;
    title: string;
    summary: string;
    directors: string;
    music_composers: string;
    release_date: string;
    trailer: string;
    poster: string

    constructor(serial: number, title: string, summary: string, directors: string, music_composers: string, release_date: string, trailer: string, poster: string) {
        this.serial = serial;
        this.title = title;
        this.summary = summary;
        this.directors = directors;
        this.music_composers = music_composers;
        this.release_date = release_date;
        this.trailer = trailer;
        this.poster = poster;
    }
}

export class Livres {
    serial: number;
    title: string;
    summary: string;
    pages: number;
    release_date: string;
    wiki: string;
    cover: string

    constructor(serial: number, title: string, summary: string, pages: number, release_date: string, wiki: string, cover: string) {
        this.serial = serial;
        this.title = title;
        this.summary = summary;
        this.pages = pages;
        this.release_date = release_date;
        this.wiki = wiki;
        this.cover = cover;
    }
}