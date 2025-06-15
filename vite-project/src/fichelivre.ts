import "./style.css";
import { Livres } from "./HarryPotter.ts"

const url = 'https://potterhead-api.vercel.app/api/books';

const params = new URLSearchParams(window.location.search);
const serial = params.get("name");
console.log(serial)

async function ficheLivre() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur : ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        const fiche = data.find((element: any) => `${element.serial}livre` === serial);

        const fullLivre = new Livres(
            fiche.serial,
            fiche.title,
            fiche.summary,
            fiche.pages,
            fiche.release_date,
            fiche.wiki,
            fiche.cover
        )

        console.log(fullLivre)

        const container = document.querySelector("#livreContainer");

        if (!container) {
            console.error("Conteneur non trouvé !");
            return;
        }

        const img = document.createElement("img");
        img.src = fullLivre.cover;
        img.alt = fullLivre.title;
        img.className = "w-60 mx-auto mb-4 rounded shadow-md";

        container.appendChild(img)

        const title = document.createElement("h2");
        title.textContent = fiche.title;
        title.className = "text-3xl font-bold text-center mb-4";

        container.appendChild(title)

        const summary = document.createElement("p");
        summary.textContent = `Synopsis : ${fiche.summary || "Inconnue"}`;

        container.appendChild(summary)

        const pages = document.createElement("p");
        pages.textContent = `Nombre de pages : ${fiche.pages}`;

        container.appendChild(pages)

        const date = document.createElement("p");
        date.textContent = `Date de sortie : ${fiche.release_date || "Inconnu"}`;

        container.appendChild(date)

        const wiki = document.createElement("a");
        wiki.href = fiche.wiki
        wiki.classList = "font-bold italic"
        wiki.textContent = `Clique ici pour voir la fiche wikipedia !`

        container.appendChild(wiki)


        const backBtn = document.createElement("button");
        backBtn.textContent = "← Retour";
        backBtn.className =
            "mt-6 mb-10 px-4 py-2 bg-[#5c4033] text-[#f4f1ea] rounded shadow hover:bg-[#3b2f2f] hover:shadow-lg transition block mx-auto";

        backBtn.addEventListener("click", () => {
            history.back();
        })

        container.appendChild(backBtn)


    }
    catch (err) {
        console.error('Erreur lors de la récupération des données :', err);
    }
}

ficheLivre()