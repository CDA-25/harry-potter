import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1 class="text-red-500 text-3xl font-bold underline">ANA DE ARMAS LA REINE LA GOAT TOUT POUR ELLE LA PLUS BELLE EPOUSE MOI SLP TOUT MON SALAIRE NUMERICA POUR OIT PAR PITIER </h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

// class headers {
//   logo: string;
//   nomAppli: string;
//   constructor() {
//     this.logo = "/src/img/ana.webp";
//     this.nomAppli = "ana la reine je te bouffe les pieds bae";
//   }
// addLogo(): HTMLImageElement {
//   const logoo = document.createElement("img")
//   logoo.classList.add("logoHeader")
//   logoo.src = this.logo
//   return logoo;
// }

// addAppliName(): HTMLHeadingElement {
//   const name = document.createElement("h2")
//   name.classList.add("appliNameHeader")
//   name.textContent = this.nomAppli
//   return name;
// }

// addButton() {
//   for (let i = 0; i<4; i++) {
//     const button = document.createElement("button")
//     button.classList.add("buttonHeader")
//   }
// }

// createHeader(): HTMLElement {
//   const header = document.createElement("header")
//   header.classList.add("header")
//   header.append(this.addLogo(), this.addAppliName())
//   return header;
// }
// }

// const headerPageAccueil = new headers()


import { ToolBox } from './toolBox.ts'

const header  = ToolBox.createHeader("header")
ToolBox.createImage("/src/img/ana.webp", "headerImage", header)
ToolBox.createH1("Abi Potter", "h1Header", header)
const divButtonHeader = ToolBox.createDiv("divButtonHeader", header)
ToolBox.createButtonA("Accueil", "buttonAccueilHeader", divButtonHeader)
ToolBox.createButtonA("Les maisons", "buttonMaisonHeader", divButtonHeader)
ToolBox.createButtonA("Les Films", "buttonFilmHeader", divButtonHeader)
ToolBox.createButtonA("Les Livres", "buttonLivreHeader", divButtonHeader)


document.body.prepend(header)


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
