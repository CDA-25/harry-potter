import './style.css'
class Character {
  image: string
  name: string
  house: string

  constructor(image: string, name: string, house: string) {
    this.image = image
    this.name = name
    this.house = house
  }
}

const app = document.querySelector<HTMLDivElement>('#app')!

function header(): void {
  const headerDiv: HTMLDivElement = document.createElement('div')
  headerDiv.className = 'header py-10 bg-blue-900 fixed top-0 right-0 left-0 z-50'

  const linkAccueil: HTMLAnchorElement = document.createElement('a')
  linkAccueil.href = ''
  linkAccueil.className = 'px-8 text-2xl text-white'
  linkAccueil.textContent = 'Accueil'

  const linkMaison: HTMLAnchorElement = document.createElement('a')
  linkMaison.href = ''
  linkMaison.className = 'px-8 text-2xl text-white'
  linkMaison.textContent = 'Maisons'

  const linkFilms: HTMLAnchorElement = document.createElement('a')
  linkFilms.href = ''
  linkFilms.className = 'px-8 text-2xl text-white'
  linkFilms.textContent = 'Films'

  const linkLivres: HTMLAnchorElement = document.createElement('a')
  linkLivres.href = ''
  linkLivres.className = 'px-8 text-2xl text-white'
  linkLivres.textContent = 'Livres'

  headerDiv.appendChild(linkAccueil)
  headerDiv.appendChild(linkMaison)
  headerDiv.appendChild(linkFilms)
  headerDiv.appendChild(linkLivres)
  app.appendChild(headerDiv)
}

const mainDiv: HTMLDivElement = document.createElement('div')
mainDiv.className = 'grid grid-cols-5 gap-6 p-10'

const h1: HTMLHeadingElement = document.createElement('h1')
h1.className = 'flex items-center justify-center text-5xl pt-10 drop-shadow-[0_0_5px_white] mt-30'
h1.textContent = "Élève de l'école de Poudlard"

header()
app.appendChild(h1)
app.appendChild(mainDiv)

async function callAPI(): Promise<any[]> {
  const res = await fetch("https://hp-api.onrender.com/api/characters")
  return await res.json()
}

async function displayCharacters(): Promise<void> {
  const dataPure = await callAPI()

  const chars: Character[] = dataPure.map((char: any) =>
    new Character(char.image, char.name, char.house)
  )

  chars.forEach(char => {
    const card: HTMLDivElement = document.createElement("div")
    card.className =
      "bg-black bg-opacity-50 rounded-lg p-6 m-4 max-w-xs text-white shadow-lg flex flex-col items-center justify-center border-4 border-white-500 hover:bg-sky-700 hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"

    const nameElem: HTMLHeadingElement = document.createElement("h2")
    nameElem.textContent = char.name
    nameElem.className = "text-2xl font-bold mb-2"

    const img: HTMLImageElement = document.createElement("img")
    img.src = char.image
    img.alt = `Portrait de ${char.name}`
    img.className = "w-32 h-32 rounded-full object-cover mb-4"

    const houseElem: HTMLParagraphElement = document.createElement("p")
    houseElem.textContent = `Maison : ${char.house}`
    houseElem.className = "text-lg"

    card.appendChild(img)
    card.appendChild(nameElem)
    card.appendChild(houseElem)

    mainDiv.appendChild(card)

    card.addEventListener("click", (): void => {
      characterDetail(char)
    })
  })
}

displayCharacters()
class DetailCharacter {
  image: string
  name: string
  house: string
  alternateName: string
  birth: string
  yearBirth: number
  espece: string
  genre: string
  ancetre: string
  hair: string
  eye: string
  isAlive: boolean
  actor: string

  constructor(image: string,name: string,house: string,alternateName: string,birth: string,yearBirth: number,espece: string,genre: string,ancetre: string,hair: string,eye: string,isAlive: boolean,actor: string) {
    this.image = image
    this.name = name
    this.house = house
    this.alternateName = alternateName
    this.birth = birth
    this.yearBirth = yearBirth
    this.espece = espece
    this.genre = genre
    this.ancetre = ancetre
    this.hair = hair
    this.eye = eye
    this.isAlive = isAlive
    this.actor = actor
  }
}

function characterDetail(char: Character): void {
  while (app.firstChild) {
    app.removeChild(app.firstChild)
  }

  header()

  const h1: HTMLHeadingElement = document.createElement('h1')
  h1.className = 'flex items-center justify-center text-5xl pt-10 drop-shadow-[0_0_5px_white] mt-30'
  h1.textContent = 'Détail du sorcier !'

  const card: HTMLDivElement = document.createElement("div")
  card.className =
    "bg-black bg-opacity-50 rounded-lg p-6 m-4 max-w-xs text-white shadow-lg flex flex-col items-center justify-center border-4 border-white-500 hover:bg-sky-700 hover:cursor-pointer transition-transform duration-300 transform hover:scale-105"

  app.appendChild(h1)
  app.appendChild(card)
}

const footer = document.createElement('footer')
footer.className = 'bg-blue-900 text-white text-center py-4'
footer.textContent = 'Petitjean Quentyn'

app.appendChild(footer)
