import "./style.css";
import { Films } from "./HarryPotter.ts"

async function FilmsData() {
  const url = 'https://potterhead-api.vercel.app/api/movies';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur : ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    let tabFilms: Films[] = [];

    function afficherFilms() {
      const container = document.querySelector('#containerFilms');
      if (!container) {
        console.error('Le conteneur #containerFilms est introuvable dans le DOM.');
        return;
      }

      data.forEach((element: { serial: number, title: string, summary: string, directors: string, music_composers: string, release_date: string, trailer: string, poster: string }) => {
        const film_serial = element.serial;
        const film_title = element.title;
        const film_summary = element.summary;
        const film_directors = element.directors;
        const film_music_composers = element.music_composers;
        const film_release_date = element.release_date;
        const film_trailer = element.trailer;
        const film_poster = element.poster

        const filmCard = new Films(film_serial, film_title, film_summary, film_directors, film_music_composers, film_release_date, film_trailer, film_poster);
        tabFilms.push(filmCard);

        console.log(tabFilms)

        const newFilmDiv = document.createElement('div');
        newFilmDiv.classList.add("bg-[#f8eac7]", "text-[#f8f4ed]", "border", "border-[#4b3621]", "rounded-2xl", "shadow-xl", "p-6", "m-4", "w-72", "transition", "transform", "hover:scale-105", "hover:shadow-2xl");

        const filmH2 = document.createElement('h2');
        filmH2.className = 'cinzel text-lg font-bold text-center text-[#2e1d12] mb-4 tracking-wide';
        filmH2.textContent = `${film_title}`;
        newFilmDiv.appendChild(filmH2);

        const filmPoster = document.createElement('img');
        filmPoster.src = film_poster;
        filmPoster.alt = film_title;
        filmPoster.className = 'w-full h-80 object-cover mb-4';
        newFilmDiv.appendChild(filmPoster);

        const afficherFilm = document.createElement('button');
        afficherFilm.className = "px-4 py-2 bg-[#4b3621] text-[#fdf6e3] rounded-md font-semibold shadow hover:bg-[#2e1d12] hover:shadow-lg transition block mx-auto";
        afficherFilm.textContent = 'Voir la fiche du film';

        afficherFilm.addEventListener('click', () => {
          window.location.href = `/fichefilm.html?name=${encodeURIComponent(film_serial)}`;
        });

        newFilmDiv.appendChild(afficherFilm);
        container.appendChild(newFilmDiv);
      });
    }
    afficherFilms()
  }
  catch (err) {
    console.error('Erreur lors de la récupération des données :', err);
  }
}

FilmsData()