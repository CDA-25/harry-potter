import "./style.css";
import { Films } from "./HarryPotter.ts"

const url = 'https://potterhead-api.vercel.app/api/movies';

const params = new URLSearchParams(window.location.search);
const serial = params.get("name");
console.log(serial)

async function ficheComplete() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur : ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        const fiche = data.find((element: any) => element.serial === serial);

        const fullMovie = new Films(
            fiche.serial,
            fiche.title,
            fiche.summary,
            fiche.directors,
            fiche.music_composers,
            fiche.release_date,
            fiche.trailer,
            fiche.poster
        )

        console.log(fullMovie)

        const container = document.querySelector("#filmContainer");

        if (!container) {
            console.error("Conteneur non trouvé !");
            return;
        }

        const img = document.createElement("img");
        img.src = fullMovie.poster;
        img.alt = fullMovie.title;
        img.className = "w-60 mx-auto mb-4 rounded shadow-md";

        container.appendChild(img)

        const title = document.createElement("h2");
        title.textContent = fiche.title;
        title.className = "text-3xl font-bold text-center mb-4";

        container.appendChild(title)

        const summary = document.createElement("p");
        summary.textContent = `Synopsis : ${fiche.summary || "Inconnue"}`;

        container.appendChild(summary)

        const director = document.createElement("p");
        director.textContent = `Réalisateur : ${fiche.directors || "Inconnu"}`;

        container.appendChild(director)

        const music = document.createElement("p");
        music.textContent = `Compositeur(s) de la BO : ${fiche.music_composers || "Inconnu"}`;

        container.appendChild(music)

        const date = document.createElement("p");
        date.textContent = `Date de sortie : ${fiche.release_date || "Inconnu"}`;

        container.appendChild(date)

        const trailer = document.createElement("a");
        trailer.href = fiche.trailer
        trailer.classList = "font-bold italic"
        trailer.textContent = `Clique ici pour voir le trailer !`

        container.appendChild(trailer)


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

ficheComplete()