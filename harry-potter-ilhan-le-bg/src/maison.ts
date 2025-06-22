import './style.css';
import { ToolBox } from './toolBox.ts';

const header  = ToolBox.createHeader(["header", "flex", "items-center", "justify-between", "border-b-4", "border-yellow-700", "text-white", "font-serif", "bg-red-900", "p-5"])
//ToolBox.createImage("/src/img/logoAbiPotter.webp", "headerImage", header)
ToolBox.createH1("Abi Potter", ["h1Header", "text-2xl", "font-bold", "text-yellow-500", "flex", "items-center", "gap-2"], header)
const divButtonHeader = ToolBox.createDiv(["divButtonHeader", "gap-6", "text-xl", "mr-15"], header)
ToolBox.createButtonA("Accueil", ["buttonAccueilHeader", "gap-1", "hover:text-yellow-400", "transition", "mr-5"], divButtonHeader)
ToolBox.createButtonA("Les maisons", ["buttonMaisonHeader", "gap-1", "hover:text-yellow-400", "transition", "mr-5"], divButtonHeader)
ToolBox.createButtonA("Les Films", ["buttonFilmHeader", "gap-1", "hover:text-yellow-400", "transition", "mr-5"], divButtonHeader)
ToolBox.createButtonA("Les Livres", ["buttonLivreHeader", "gap-1", "hover:text-yellow-400", "transition", "mr-5"], divButtonHeader)

const dataMaison = [
    {houseName: "Gryffindor", textHouse: "Force, Courage et Détermination", embleme: "Animal emblématique : le Lion"},
    {houseName: "Serpentard", textHouse: "Ambition, Ruse et Détermination", embleme: "Animal emblématique : le Serpent"},
    {houseName: "Serdaigle", textHouse: "Sagesse, Esprit et Créavité", embleme: "Animal emblématique : l'Aigle"},
    {houseName: "Poufsouffle", textHouse: "Loyauté, Justice et Persévérance", embleme: "Animal emblématique : le Blaireau"},
];

function createCardMaison(tabData: {houseName: string, textHouse: string, embleme: string}[]) {
    const cards: HTMLElement[] = [];
    for (let i = 0; i<tabData.length; i++) {
        let colorClass = "";
        switch (tabData[i].houseName) {
            case "Gryffindor":
                colorClass = "border-red-700 text-red-800 hover:bg-red-200 hover:text-black hover:cursor-pointer";
                break;
            case "Serpentard":
                colorClass = "border-green-700 text-green-800 hover:bg-green-200 hover:text-black hover:cursor-pointer";
                break;
            case "Serdaigle":
                colorClass = "border-blue-700 text-blue-800 hover:bg-blue-200 hover:text-black hover:cursor-pointer";
                break;
            case "Poufsouffle":
                colorClass = "border-yellow-500 text-yellow-600 hover:bg-yellow-200 hover:text-black hover:cursor-pointer";
                break;
        }
        const divCardHouse = ToolBox.createDiv(["grid", "grid-cols-1", "gap-0", "p-4", "bg-gray-50", "font-sans", "border-2"])
        divCardHouse.classList.add(...colorClass.split(" "));
        ToolBox.createH2(tabData[i].houseName, ["text-xl", "font-bold", "flex", "items-center"], divCardHouse)
        ToolBox.createP(tabData[i].textHouse, ["text-sm", "text-gray-700"], divCardHouse)
        ToolBox.createP(tabData[i].embleme, ["text-xs", "text-gray-500", "italic"], divCardHouse)
        divCardHouse.addEventListener("click", () => {
            window.location.href = "/houseCharacter.html"
            console.log(tabData[i].houseName)
        })
        cards.push(divCardHouse)
    }
    return cards;
}

const cardMaison = createCardMaison(dataMaison)
const coneteneur = ToolBox.createDiv(["grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "p-6", "bg-gray-50", "min-h-screen", "font-sans"]);
cardMaison.forEach(card => coneteneur.appendChild(card))

document.body.prepend(header, coneteneur)