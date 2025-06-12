export type BookData = {
  _id: string
  title: string
  published: string
  pages: number
  authors: string[]
  synopsis: string
  cover: string
}

export default class Book {
  id: string
  title: string
  published: string
  pages: number
  authors: string[]
  synopsis: string
  cover: string

  constructor(data: BookData) {
    this.id = data._id
    this.title = data.title
    this.published = data.published
    this.pages = data.pages
    this.authors = data.authors
    this.synopsis = data.synopsis
    this.cover = data.cover
  }
}