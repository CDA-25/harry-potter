export class ToolBox {
    constructor() {
    }

    static createHeader(className: string[]) {
        const header = document.createElement("header")
        header.classList.add(...className)
        return header;
    }

    static createDiv(className: string[], parent: HTMLElement | null= null) {
        const newDiv = document.createElement("div")
        newDiv.classList.add(...className)
        if (parent) {
            parent.appendChild(newDiv)
        }
        return newDiv;
    }

    static createSection(className: string[], parent: HTMLElement | null= null) {
        const section = document.createElement("section")
        section.classList.add(...className)
        if (parent) {
            parent.appendChild(section)
        }
        return section;
    }

    static createImage(image: string, className: string[], parent: HTMLElement | null= null) {
        const img =  document.createElement("img")
        img.src = image || ("/src/img/ana.webp");
        img.classList.add(...className)
        if (parent) {
            parent.appendChild(img);
        }
        return img;
    }

    static createH1(h1: string, className: string[], parent: HTMLElement | null= null) {
        const h22 = document.createElement("h1")
        h22.textContent =  h1;
        h22.classList.add(...className)
        if (parent) {
            parent.appendChild(h22)
        }
        return h22;
    }

    static createButtonA(buttonName: string, className: string[], parent: HTMLElement | null= null) {
        const bouton = document.createElement("a")
        bouton.textContent = buttonName
        bouton.classList.add(...className)
        if (parent) {
            parent.appendChild(bouton)
        }
        return bouton;
    }

    static createH2(h2: string, className: string[], parent: HTMLElement | null= null) {
        const h22 = document.createElement("h1")
        h22.textContent =  h2;
        h22.classList.add(...className)
        if (parent) {
            parent.appendChild(h22)
        }
        return h22;
    }

    static createP(paragraphe: string, className: string[], parent: HTMLElement | null= null) {
        const p = document.createElement("p")
        p.textContent = paragraphe;
        p.classList.add(...className)
        if (parent) {
            parent.appendChild(p)
        }
        return p;
    }

    static async getCharacters(): Promise<any> {
        const res = await fetch("https://hp-api.onrender.com/api/characters")
        return await res.json()
    }

    static async getHouses(): Promise<any> {
        const res = await fetch("https://potterhead-api.vercel.app/api/houses")
        return await res.json()
    }

    static async getMovies(): Promise<any> {
        const res = await fetch("https://potterhead-api.vercel.app/api/movies")
        return await res.json()
    }

    static async getBooks(): Promise<any> {
        const res = await fetch("https://potterhead-api.vercel.app/api/books")
        return await res.json()
    }
}
