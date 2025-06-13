import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

import { ToolBox } from './toolBox.ts'

const header  = ToolBox.createHeader("header")
//ToolBox.createImage("/src/img/logoAbiPotter.webp", "headerImage", header)
ToolBox.createH1("Abi Potter", "h1Header text-white", header)
const divButtonHeader = ToolBox.createDiv("divButtonHeader", header)
ToolBox.createButtonA("Accueil", "buttonAccueilHeader", divButtonHeader)
ToolBox.createButtonA("Les maisons", "buttonMaisonHeader", divButtonHeader)
ToolBox.createButtonA("Les Films", "buttonFilmHeader", divButtonHeader)
ToolBox.createButtonA("Les Livres", "buttonLivreHeader", divButtonHeader)

const section1 = ToolBox.createSection("sectionAccueil")
ToolBox.createImage("/src/img/panoramaHarryPotter.jpg", "imageSectionAccueil", section1)
ToolBox.createH2("Bienvenue dans le monde magique de Abi Potter", "h2Section", section1)
ToolBox.createP("Decouvrez l'univers extraordinaire de la magie", "pSectionAccueil", section1)


document.body.prepend(header, section1)


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
