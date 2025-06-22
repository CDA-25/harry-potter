import './style.css'

class Header {
    display: string
    href: string

    constructor(
      display: string
    ) {
      this.display = display
      this.href = `/${display.toLowerCase()}.html`
    }
    classOutput() {
      return this
    }
  }


function header() {
  
  let headerNav = document.createElement("nav")
  headerNav.id = "headerNav"
  headerNav.classList.add(
    "bg-amber-400",
    "flex",
    "justify-around",
    "items-center",
    "w-[100%]",
    "h-[2rem]"
  )
  document.body.appendChild(headerNav)
  
  let headerMenus = [
    "Accueil", 
    "Perso", 
    "Books", 
    "Movies"
  ]

  headerMenus.forEach(element => {
    let menu = new Header(element)
    menu = menu.classOutput()
    
    let linkDiv = document.createElement("div")
    linkDiv.id = `navLink${menu.display}`
    headerNav.appendChild(linkDiv)
    
    let link = document.createElement("a")
    link.href = menu.href
    link.textContent = menu.display
    linkDiv.appendChild(link)

  })
}

header()


let currentURL: string = window.location.pathname

switch (currentURL) {
  case "/accueil.html":
  case "/": {
    let homePage = document.createElement("div")
    homePage.id = "homePage"
    homePage.classList.add(
      "bg-red-800",
      "h-[300px]",
      "flex",
      "items-center",
      "justify-center"
    )
    homePage.textContent = "c'est l'accueil."
    document.body.appendChild(homePage)

    break;
  }

  case "/perso.html": {
    document.body.classList.add(
      "bg-gray-800",
      "flex",
      "justify-around",
      "flex-wrap"
    )

    class Perso {
      name: string;
      birth: string;
      gender: string;
      image: string;
      house: string;
      species: string;
      isWizard: boolean;

      constructor(
        name: string, 
        birth: string, 
        gender: string,
        image: string,
        house: string,
        species: string,
        isWizard: boolean
      ) 
      {
        this.name = name;
        this.birth = birth;
        this.gender = gender;
        this.image = image
        this.house = house
        this.species = species
        this.isWizard = isWizard
      }

      display(): void {
        let name: string = this.name
        let birth: string = this.birth
        let gender: string = this.gender
        let image: string = this.image
        let house: string = this.house
        let species: string = this.species
        let isWizard: boolean = this.isWizard

        
        let divPerso = document.createElement("div")
        divPerso.id = "perso"
        divPerso.classList.add(
          "bg-blue-200",
          "p-[15px]",
          "border",
          "flex",
          "justify-around",
          "flex-wrap",
          "items-center",
          "w-[300px]",
          "h-[400px]",
          "rounded",
          "m-10"
        )

        // function createDOMElement(type: string, id: string, content: string, parent: HTMLElement) {
        //   let element = document.createElement(type)
        //   element.id = id
        //   element.textContent = content
        //   parent.appendChild(element)
        // }

        // createDOMElement("div", "houseContent", this.house, document.getElementById("perso")!)


          let nameContent = document.createElement("div")
          nameContent.id = "nameContent"
          nameContent.textContent = name
          divPerso.appendChild(nameContent)

          let birthContent = document.createElement("div")
          birthContent.id = "birthContent"
          birthContent.textContent = birth
          divPerso.appendChild(birthContent)

          let genderContent = document.createElement("div")
          genderContent.id = "genderContent"
          genderContent.textContent = gender
          divPerso.appendChild(genderContent)

          let speciesContent = document.createElement("div")
          speciesContent.id = "speciesContent"
          speciesContent.textContent = species
          divPerso.appendChild(speciesContent)

          let houseContent = document.createElement("div")
          houseContent.id = "houseContent"
          houseContent.textContent = house
          divPerso.appendChild(houseContent)

          let imageContent = document.createElement("div")
          imageContent.id = "imageContent"

          let img = document.createElement("img")
          img.id = "img"
          img.classList.add(
            "rounded-[10px]",
            "w-[200px]",
            "h-[250px]"
          )
          img.src = image
          imageContent.appendChild(img)
          divPerso.appendChild(imageContent)
        
          document.body.appendChild(divPerso)
      }
    }

    const fetchAPIChar = async (): Promise<any[]> => {
      const res = await fetch("https://hp-api.onrender.com/api/characters");
      const chars = await res.json();
      return chars;
    };

    const charsList = async () => {
      const rawChars = await fetchAPIChar();

      const persos: Perso[] = rawChars.map((char: any) => {
        if (!char.dateOfBirth) {
          char.dateOfBirth = null
        }
        
     
        
        //   switch (char.gender) {
        //   case "male": char.gender = "Homme" ; break
        //   case "female": char.gender = "Femme" ; break
        //   default: char.gender = null
        // }

        

        switch (char.gender) {
          case "male": char.gender = "Homme" ; break
          case "female": char.gender = "Femme" ; break
          default: char.gender = null
        }

        switch (char.house) {
          case "Gryffindor": char.house = "Gryffondor" ; break
          case "Hufflepuff": char.house = "Pouffsoufle" ; break
          case "Ravenclaw": char.house = "Serdaigle" ; break
          case "Slytherin": char.house = "Serpentard" ; break
          default: char.house = null ; break
          
        }

        switch (char.species) {
          case "human": char.species = "Humain" ; break
          case "half-giant": char.species = "Demi-Géant" ; break
          case "werewolf": char.species = "Loup-Garou" ; break
          case "cat": char.species = "Chat" ; break
          case "goblin": char.species = "Gobelin" ; break
          case "ghost": char.species = "Fantôme" ; break
          case "half-human": char.species = "Demi-Humain" ; break
          case "elf": char.species = "Elfe" ; break
          case "centaur": char.species = "Centaure" ; break
          case "giant": char.species = "Géant" ; break
          case "house-elf": char.species = "Elfe de Maison" ; break
          case "hat": char.species = "Choixpeau" ; break
          case "hippogriff": char.species = "Hippogriffe" ; break
          case "arcomentula": char.species = "Arcomentule" ; break
          case "serpent": char.species = "Basilik" ; break
          case "cephalopod": char.species = "Céphalopode" ; break
          case "dragon": char.species = "Wyverne" ; break
          case "selkie": char.species = "Selkie" ; break
          case "three-headed dog": char.species = "Iench à trois têtes" ; break
          case "dog": char.species = "Chien" ; break
          case "poltergeist": char.species = "Esprit-Frappeur" ; break
          case "toad": char.species = "Crapeau" ; break
          case "owl": char.species = "Chouette" ; break
          case "snake": char.species = "Serpent" ; break
          default: null
        }

        if (!char.image) {
          switch (char.gender) {
            case "Femme": {
              if (char.wizard === true) {
                char.image = "https://media.istockphoto.com/id/1409060868/fr/vectoriel/sorci%C3%A8re-volant-sur-un-balai-sur-fond-de-pleine-lune.jpg?s=612x612&w=0&k=20&c=E8XFzc27ACKH5utYgfQu6btbhk8yapZXtXa6qvIZ0Hc="
              } else {
                char.image = "https://previews.123rf.com/images/jemastock/jemastock1712/jemastock171207459/91868647-young-woman-profile-cartoon-icon-vector-illustration-graphic-design.jpg"
                
              } break
            } case "Homme" : {
              if (char.wizard === true) {
                char.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEr1REhhYBVYKVC_lu6X_-JWU2ghqzRyBvw&s"
              } else {
                char.image = "https://previews.123rf.com/images/jemastock/jemastock1712/jemastock171201347/90912902-young-man-happy-cartoon-icon-vector-illustration-graphic-design.jpg"
              }
            } break
            default: char.image = "https://media.istockphoto.com/id/1023347350/fr/photo/point-dinterrogation-3d-point-rouge-dinterrogation-demandant-signe-de-ponctuation-isol%C3%A9e.jpg?s=612x612&w=0&k=20&c=eVZrCH5I73a5W_2TZ0tlrWdK68UAoXZPaytoZyGoj90="
          }
          

          
          
          
       
          
        }


        console.log(char)
        return new Perso(char.name, char.dateOfBirth, char.gender, char.image, char.house, char.species, char.wizard);
      });

      persos.forEach(p => p.display());
    };

    charsList();
    break;
  }

  case "/books.html": {
  
    class Book {
      order: number
      pages: number
      title: string
      release: string
      cover: string

      constructor(
        order: number,
        pages: number,
        title: string,
        release: string,
        cover: string
      ) {
        this.order = order,
        this.pages = pages,
        this.title = title,
        this.release = release,
        this.cover = cover
      }
      display() {
        let order = this.order
        let pages = this.pages
        let title = this.title
        let release = this.release
        let cover = this.cover

        let bookPage = document.createElement("div")
        bookPage.id = "books"
        bookPage.classList.add("bg-blue-100")
        bookPage.textContent = `${order}, ${pages}, ${title}, ${release}` 

        let imageDiv = document.createElement("div")
        imageDiv.id = "imgDiv"
        document.body.appendChild(bookPage)

        let image = document.createElement("img")
        image.src = cover
        image.id = "bookimg"
        image.classList.add("w-100")
        imageDiv.appendChild(image)
        bookPage.appendChild(imageDiv)
        document.body.appendChild(bookPage)
       
      }

    }
      
    const fetchAPIBooks = async (): Promise<any[]> => {
      const res = await fetch("https://potterhead-api.vercel.app/api/books");
      const books = await res.json();
      console.log(books)
      return books;
    };
  
    

    const charsList = async () => {
      const data = await fetchAPIBooks();

      const books: Book[] = data.map((book: any) => {
        
        
      return new Book(book.serial, book.pages, book.title, book.release_date, book.cover);
      });

      books.forEach(p => p.display());
    };

    charsList();


    break;
  }
  default: {
    let notFound = document.createElement("div")
    notFound.id = "notFound"
    notFound.classList.add(
      "bg-orange-200",
      "text-[3rem]",
      "flex",
      "justify-center"
      
    )
    notFound.textContent = "Cette page n'a pas été trouvée. Peut-être qu'elle est cachée pour les moldus.."
    document.body.appendChild(notFound)
  }

}