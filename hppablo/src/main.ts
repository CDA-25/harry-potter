import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#nav')!.innerHTML = `
  <nav class="text-white mr-4 -mt-3 flex justify-between items-center">
    <img class="relative w-32 mt-3 -pt-20 ml-2 " src="/src/image/texteHP.png" alt="Texte Harry Potter" /> 
    <ul class="flex space-x-6">
      <li><a href="/index.html" class="hover:text-yellow-600">Accueil</a></li>
      <li><a href="/personnage.html" class="hover:text-yellow-600">Personnages</a></li>
      <li><a href="/maison.html" class="hover:text-yellow-600">Maisons</a></li>
      <li><a href="#" class="hover:text-yellow-600">Contact</a></li>
    </ul>
    
  </nav>
  <img class="w-full mt-2" src="/src/image/banner 1.png" alt="image château" />
`

document.querySelector<HTMLDivElement>('#S-2')!.innerHTML = `<section class="bg-[#530404] py-20 px-6 text-center">
    <h1 class="text-3xl font-bold text-white mb-12">
      Vers quelle maison ton cœur penche-t-il ?
    </h1>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
    
      
      <div class="bg-white shadow-lg rounded-2xl p-15 flex flex-col items-center">
        <img src="/src/image/logoG.png" alt="Logo Gryffondor" class="w-44 h-44 object-contain mb-4" />
        <h2 class="text-2xl font-bold text-red-700 mb-2">Gryffondor</h2>
        <button class="bg-red-700 text-white font-bold py-2 px-24 rounded hover:bg-red-800 transition">
          Rejoindre
        </button>
      </div>
    
       
      <div class="bg-white shadow-lg rounded-2xl p-15 flex flex-col items-center">
        <img src="/src/image/logoS.png" alt="Logo Serpentard" class="w-44 h-44 object-contain mb-4" />
        <h2 class="text-2xl font-bold text-green-700 mb-2">Serpentard</h2>
        <button class="bg-green-700 text-white font-bold py-2 px-24 rounded hover:bg-green-800 transition">
          Rejoindre
        </button>
      </div>
    
       
      <div class="bg-white shadow-lg rounded-2xl p-15 flex flex-col items-center">
        <img src="/src/image/logoP.png" alt="Logo Poufsouffle" class="w-44 h-44  object-contain mb-4" />
        <h2 class="text-2xl font-bold text-yellow-600 mb-2">Poufsouffle</h2>
        <button class="bg-yellow-600 text-white font-bold py-2 px-24 rounded hover:bg-yellow-700 transition">
          Rejoindre
        </button>
      </div>
    
        
      <div class="bg-white shadow-lg rounded-2xl p-15 flex flex-col items-center">
        <img src="/src/image/logoSE.png" alt="Logo Serdaigle" class="w-44 h-44  object-contain mb-4" />
        <h2 class="text-2xl font-bold text-blue-700 mb-2">Serdaigle</h2>
        <button class="bg-blue-700 text-white font-bold py-2 px-24 rounded hover:bg-blue-800 transition">
          Rejoindre
        </button>
      </div>
    
    </div>
    </section>
`

















setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
