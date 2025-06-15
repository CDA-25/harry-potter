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

const dataJson = localStorage.getItem("selectedCharacter");

if (dataJson) {
    const data = JSON.parse(dataJson)
    const char = new character(data);

    const main = ToolBox.createDiv([
        "characterDetail",
        "p-6",
        "text-center",
        "min-h-screen",
        "bg-gray-100", // ✅ fond plus doux
        "flex",
        "items-center",
        "justify-center"
    ]);

    ToolBox.createImage(char.image, [
        "imageCharacter",
        "w-48",
        "h-64",
        "object-cover",
        "rounded-xl",  
        "mr-50",
        "shadow-lg",
        "border-4",
        "border-gray-300",
        "mb-4" 
    ], main);

    const divDansDiv = ToolBox.createDiv([
        "divDansDiv",
        "bg-white",
        "rounded-3xl",
        "shadow-2xl",
        "p-8",
        "max-w-md",
        "w-full",
        "space-y-5"
    ], main);


    ToolBox.createH2(char.name, [
        "nomCharacter",
        "text-3xl",
        "font-extrabold",
        "text-gray-800",
        "tracking-wide"
    ], divDansDiv);

    const divData = ToolBox.createDiv([
        "divData",
        "space-y-2",
        "text-left",
        "text-gray-700"
    ], divDansDiv);

    ToolBox.createP(`Espece : ${char.species}`, ["species", "text-lg", "font-medium"], divData);
    ToolBox.createP(`Genre : ${char.gender}`, ["gender", "text-lg", "font-medium"], divData);
    ToolBox.createP(`Maison : ${char.house}`, ["genre", "text-lg", "font-medium"], divData);
    ToolBox.createP(`Date de naissance : ${char.dateOfBirth}`, ["dateDeNaissance", "text-lg", "font-medium"], divData);
    ToolBox.createP(`Sorcier : ${char.wizard}`, ["sorcier", "text-lg", "font-medium"], divData);
    ToolBox.createP(`Baguette magique : ${char.wand.core}, ${char.wand.length}, ${char.wand.wood}`, ["baguette", "text-lg", "font-medium"], divData);
    ToolBox.createP(`Ancetre : ${char.ancestry}`, ["ancetre", "text-lg", "font-medium"], divData);
    ToolBox.createP(`Acteur : ${char.actor}`, ["acteur", "text-lg", "font-medium"], divData);

    const buttonBack = document.createElement("button")
    buttonBack.textContent = "RETOUR"
    buttonBack.classList.add("bg-black", "text-white", "m-4", "px-10", "py-3", "rounded-full")
    buttonBack.addEventListener("click", () => {
        window.history.back()
    });
    divDansDiv.appendChild(buttonBack)

    document.body.append(main)
} else {
    ToolBox.createP("Aucun personnage sélectionné.", ["text-red-600", "text-center", "p-6"], document.body);
}



document.body.prepend(header)