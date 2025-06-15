import "./style.css";
import { Livres } from "./HarryPotter.ts"


async function livresData() {
    const url = 'https://potterhead-api.vercel.app/api/books';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur : ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        let tabLivres: Livres[] = [];

        function afficherLivres() {
            const container = document.querySelector('#containerLivres');
            if (!container) {
                console.error('Le conteneur #containerLivres est introuvable dans le DOM.');
                return;
            }

            data.forEach((element: { serial: number, title: string, summary: string, pages: number, release_date: string, wiki: string, cover: string }) => {
                const livre_serial = element.serial;
                const livre_title = element.title;
                const livre_summary = element.summary;
                const livre_pages = element.pages;
                const livre_release_date = element.release_date;
                const livre_wiki = element.wiki;
                const livre_cover = element.cover

                const livreCard = new Livres(livre_serial, livre_title, livre_summary, livre_pages, livre_release_date, livre_wiki, livre_cover);
                tabLivres.push(livreCard);

                console.log(tabLivres)

                const newLivreDiv = document.createElement('div');
                newLivreDiv.classList.add("bg-[#f8eac7]", "text-[#f8f4ed]", "border", "border-[#4b3621]", "rounded-2xl", "shadow-xl", "p-6", "m-4", "w-72", "transition", "transform", "hover:scale-105", "hover:shadow-2xl");

                const livreH2 = document.createElement('h2');
                livreH2.className = 'cinzel text-lg font-bold text-center text-[#2e1d12] mb-4 tracking-wide';
                livreH2.textContent = `${livre_title}`;
                newLivreDiv.appendChild(livreH2);

                const livreCover = document.createElement('img');
                livreCover.src = livre_cover;
                livreCover.alt = livre_title;
                livreCover.className = 'w-full h-80 object-cover mb-4';
                newLivreDiv.appendChild(livreCover);

                const afficherLivre = document.createElement('button');
                afficherLivre.className = "px-4 py-2 bg-[#4b3621] text-[#fdf6e3] rounded-md font-semibold shadow hover:bg-[#2e1d12] hover:shadow-lg transition block mx-auto";
                afficherLivre.textContent = 'Voir la fiche du livre';

                afficherLivre.addEventListener('click', () => {
                    window.location.href = `/fichelivre.html?name=${encodeURIComponent(livre_serial)}livre`;
                });

                newLivreDiv.appendChild(afficherLivre);
                container.appendChild(newLivreDiv);
            });
        }
        afficherLivres()

    }
    catch (err) {
        console.error('Erreur lors de la récupération des données :', err);
    }
}

livresData()
