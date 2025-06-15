import './style.css';
import { ToolBox } from './toolBox.ts';
import { character } from './dataType';
import type { typageData } from './dataType';

const header  = ToolBox.createHeader(["header", "flex", "items-center", "justify-between", "border-b-4", "border-yellow-700", "text-white", "font-serif", "bg-red-900", "p-5"])
//ToolBox.createImage("/src/img/logoAbiPotter.webp", "headerImage", header)
ToolBox.createH1("Abi Potter", ["h1Header", "text-2xl", "font-bold", "text-yellow-500", "flex", "items-center", "gap-2"], header)
const divButtonHeader = ToolBox.createDiv(["divButtonHeader", "gap-6", "text-xl", "mr-15"], header)
ToolBox.createButtonA("Accueil", ["buttonAccueilHeader", "gap-1", "hover:text-yellow-400", "transition", "mr-5"], divButtonHeader)
const buttonMaison = ToolBox.createButtonA("Les maisons", ["buttonMaisonHeader", "gap-1", "hover:text-yellow-400", "transition", "mr-5"], divButtonHeader)
buttonMaison.addEventListener("click", () => {
    window.location.href = "/maison.html";
})
ToolBox.createButtonA("Les Films", ["buttonFilmHeader", "gap-1", "hover:text-yellow-400", "transition", "mr-5"], divButtonHeader)
ToolBox.createButtonA("Les Livres", ["buttonLivreHeader", "gap-1", "hover:text-yellow-400", "transition", "mr-5"], divButtonHeader)

const section1 = ToolBox.createSection(["sectionAccueil", "relative", "h-[90vh]", "flex", "justify-center", "items-center", "text-white"])
ToolBox.createImage("/src/img/harryOttoman.webp", ["imageSectionAccueil", "absolute", "inset-0", "w-full", "h-full", "bg-cover", "-z-10", "opacity-95", "mx-auto", "max-w-full"], section1)
ToolBox.createDiv(["divImageOverlay", "absolute", "inset-0", "bg-black", "opacity-10", "-z-10"], section1)
const divTextSection = ToolBox.createDiv(["textOnImageSection"], section1)
ToolBox.createH2("Bienvenue dans le monde magique de Abi Potter", ["h2Section" ,"text-4xl", "font-bold", "mb-4","font-serif"], divTextSection)
ToolBox.createP("Decouvrez l'univers extraordinaire de la magie", ["pSectionAccueil", "text-center", "text-lg", "md:text-xl", "mb-6", "font-light"], divTextSection)

const sectionCharacter = ToolBox.createSection(["sectionCharacter"])

async function creeCardCharactere() {
    const data : typageData[] = await ToolBox.getCharacters()
    const div4card = ToolBox.createDiv(["div4card", "grid", "grid-cols-2", "sm:grid-cols-3", "lg:grid-cols-4", "gap-6", "p-4"])
    data.forEach(element => {
        const characters = new character(element)
        const newDiv = ToolBox.createDiv(["divCharacterCard", "bg-white", "rounded-x1", "shadow-md", "p-4", "text-center", "hover:scale-105", "transition-transform", "duration-200"], div4card)
        ToolBox.createImage(characters.image, ["imageCharacter", "w-32", "h-32", "object-cover", "mx-auto", "rounded-full"], newDiv)
        ToolBox.createH2(characters.name, ["nameCharacter", "mt-4", "font-semibold", "text-gray-800"], newDiv)
        newDiv.addEventListener("click", () => {
            console.log("Redirection vers character.html");
            localStorage.setItem("selectedCharacter", JSON.stringify(element));
            window.location.href = "/character.html";
        });
        return sectionCharacter.append(div4card)
    });
}

creeCardCharactere();

document.body.prepend(header, section1, sectionCharacter)
