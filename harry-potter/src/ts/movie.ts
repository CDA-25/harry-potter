export type MovieData = {
  _id: string
  title: string
  released: string
  runtime: number
  director: string
  producers: string[]
  screenwriter: string
  cast: string[]
  poster: string
}

export default class Movie {
  id: string
  title: string
  released: string
  runtime: number
  director: string
  producers: string[]
  screenwriter: string
  cast: string[]
  poster: string

  constructor(data: MovieData) {
    this.id = data._id
    this.title = data.title
    this.released = data.released
    this.runtime = data.runtime
    this.director = data.director
    this.producers = data.producers
    this.screenwriter = data.screenwriter
    this.cast = data.cast
    this.poster = data.poster
  }
}