import './style.css'


let currentURL: string = window.location.pathname

switch (currentURL) {
  case "/accueil.html": {
    console.log("accueil")

    break;
  }

  case "/perso.html": {
    document.body.classList.add("bg-gray-800")


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
          "justify-between",
          "items-center",
          "w-200",
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
        bookPage.textContent = `${order}, ${pages}, ${title}, ${release}}`


        

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

}












