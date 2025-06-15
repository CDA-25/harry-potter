import './style.css';
import { ToolBox } from './toolBox.ts';
import { character } from './dataType.ts';
import type { typageData } from './dataType.ts';

const header  = ToolBox.createHeader(["header", "flex", "items-center", "justify-between", "border-b-4", "border-yellow-700", "text-white", "font-serif", "bg-red-900", "p-5"])
//ToolBox.createImage("/src/img/logoAbiPotter.webp", "headerImage", header)
ToolBox.createH1("Abi Potter", ["h1Header", "text-2xl", "font-bold", "text-yellow-500", "flex", "items-center", "gap-2"], header)
const divButtonHeader = ToolBox.createDiv(["divButtonHeader", "gap-6", "text-xl", "mr-15"], header)
ToolBox.createButtonA("Accueil", ["buttonAccueilHeader", "gap-1", "hover:text-yellow-400", "transition", "mr-5"], divButtonHeader)
ToolBox.createButtonA("Les maisons", ["buttonMaisonHeader", "gap-1", "hover:text-yellow-400", "transition", "mr-5"], divButtonHeader)
ToolBox.createButtonA("Les Films", ["buttonFilmHeader", "gap-1", "hover:text-yellow-400", "transition", "mr-5"], divButtonHeader)
ToolBox.createButtonA("Les Livres", ["buttonLivreHeader", "gap-1", "hover:text-yellow-400", "transition", "mr-5"], divButtonHeader)



document.body.prepend(header)