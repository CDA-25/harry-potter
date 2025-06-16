export interface BookInterface {
  title: string;
  summary: string;
  wiki: string;
  cover: string;
  release_date: string;
  pages: number;
}

// Les propriétés de la classe et de l'interface doit avoir les mêmes noms
export class Book {
  title: string;
  summary: string;
  wiki: string;
  cover: string;
  release: string;
  pages: number;

  constructor(
    // données recues de l'API
    title: string,
    summary: string,
    wiki: string,
    cover: string,
    release_date: string,
    pages: number
  ) {
    this.title = title;
    this.summary = summary;
    this.wiki = wiki;
    this.cover = cover;
    this.release = release_date;
    this.pages = pages;
  }
}
