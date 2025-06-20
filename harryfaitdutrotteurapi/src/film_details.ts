import { ApiService } from './api';
import type { Film } from './api';

class FilmDetailsPage {
    private readonly apiService = new ApiService();
    private readonly container: HTMLElement | null = document.getElementById('film-details-container');

    public async init() {
        const urlParams = new URLSearchParams(window.location.search);
        const filmId = urlParams.get('id');

        if (filmId) {
            const film = await this.apiService.getFilmById(filmId);
            if (film) {
                this.displayFilmDetails(film);
            }
        }
    }

    private displayFilmDetails(film: Film) {
        if (!this.container) return;

        this.container.innerHTML = ''; // Clear container

        const imageContainer = document.createElement('div');
        imageContainer.className = 'md:w-1/3';

        const image = document.createElement('img');
        image.src = film.poster || 'images/erreur/not_found.jpeg';
        image.alt = film.title;
        image.className = 'w-full h-auto rounded-lg shadow-md';
        imageContainer.appendChild(image);

        const infoContainer = document.createElement('div');
        infoContainer.className = 'md:w-2/3 md:pl-8';

        const name = document.createElement('h1');
        name.textContent = film.title;
        name.className = 'text-4xl font-bold mb-4';
        infoContainer.appendChild(name);

        const details = document.createElement('div');
        details.className = 'grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4';

        const createDetail = (label: string, value: any) => {
            const p = document.createElement('p');
            let displayValue = value;
            if (typeof value === 'boolean') {
                displayValue = value ? 'Oui' : 'Non';
            } else if (Array.isArray(value)) {
                displayValue = value.join(', ') || 'N/A';
            } else if (typeof value === 'object' && value !== null) {
                displayValue = Object.entries(value).map(([key, val]) => `${key}: ${val}`).join(', ') || 'N/A';
            }
            p.innerHTML = `<span class="font-bold">${label} :</span> ${displayValue || 'N/A'}`;
            details.appendChild(p);
        }

        createDetail('Date de sortie', new Date(film.release_date).toLocaleDateString('fr-FR'));
        createDetail('Résumé', film.summary);
        createDetail('Réalisateurs', film.directors);
        createDetail('Scénaristes', film.screenwriters);
        createDetail('Producteurs', film.producers);
        createDetail('Compositeurs', film.music_composers);
        createDetail('Durée', film.running_time);
        createDetail('Budget', film.budget);
        createDetail('Box-office', film.box_office);
        createDetail('Note', film.rating);

        if (film.trailer) {
            const trailerLink = document.createElement('a');
            trailerLink.href = film.trailer;
            trailerLink.textContent = 'Voir la bande-annonce';
            trailerLink.target = '_blank';
            trailerLink.className = 'text-blue-500 hover:underline';
            const p = document.createElement('p');
            p.appendChild(trailerLink);
            details.appendChild(p);
        }

        if (film.wiki) {
            const wikiLink = document.createElement('a');
            wikiLink.href = film.wiki;
            wikiLink.textContent = 'Voir le wiki';
            wikiLink.target = '_blank';
            wikiLink.className = 'text-blue-500 hover:underline';
            const p = document.createElement('p');
            p.appendChild(wikiLink);
            details.appendChild(p);
        }

        infoContainer.appendChild(details);

        this.container.appendChild(imageContainer);
        this.container.appendChild(infoContainer);
    }
}

const page = new FilmDetailsPage();
page.init();