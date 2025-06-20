export default class Tool {
  public element: HTMLElement | null

  constructor() {
    this.element = null
  }

  createElement(name_element: string): this {
    this.element = document.createElement(name_element)
    return this
  }

  textContent(text: string): this {
    if (this.element)
      this.element.textContent = text
    return this
  }

  class(...classes: string[]): this {
    if (this.element)
      this.element.classList.add(...classes)
    return this
  }

  src(src: string): this {
    if (this.element && this.element instanceof HTMLImageElement)
      this.element.src = src
    return this
  }

  alt(alt: string): this {
    if (this.element && this.element instanceof HTMLImageElement)
      this.element.alt = alt
    return this
  }

  appendTo(parent: HTMLElement): this {
    if (this.element)
      parent.appendChild(this.element)
    return this
  }

  placeholder(text: string): this {
    if (this.element && this.element instanceof HTMLInputElement)
      this.element.placeholder = text
    return this
  }

  type(type: string): this {
    if (this.element && this.element instanceof HTMLInputElement)
      this.element.type = type
    return this
  }

  async getCharacters(): Promise<CharacterData[]> {
    const res = await fetch("https://hp-api.onrender.com/api/characters")
    return await res.json()
  }

   async getHouses(): Promise<any> {
    const res = await fetch("https://potterhead-api.vercel.app/api/houses")
    return await res.json()
  }

  async getMovies(): Promise<any> {
    const res = await fetch("https://potterhead-api.vercel.app/api/movies")
    return await res.json()
  }

   async getBooks(): Promise<any> {
    const res = await fetch("https://potterhead-api.vercel.app/api/books")
    return await res.json()
  }
}
