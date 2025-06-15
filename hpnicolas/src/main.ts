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
      "bg-red-800"
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

      constructor(name: string, birth: string, gender: string) {
        this.name = name;
        this.birth = birth;
        this.gender = gender;
      }

      display(): void {
        let name: string = this.name
        let birth: string = this.birth
        let gender: string = this.gender

        
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
          "w-[200px]",
          "h-[250px]",
          "rounded",
          "m-10"
        )

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
          char.dateOfBirth = "inkonuanh"
        }
        
        if (!char.gender) {
          char.gender = "inkonuanh"
        }  
        
        return new Perso(char.name, char.dateOfBirth, char.gender);
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