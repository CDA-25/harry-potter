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

const header = document.createElement("header");
header.classList.add("headerMaGueule")




setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
