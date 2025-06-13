import { ApiService } from './api';

class FilmsPage {
    private readonly apiService = new ApiService();
    private readonly filmsContainer: HTMLElement | null = document.getElementById('films-container');
    private readonly menuBtn: HTMLElement | null = document.getElementById('menu-btn');
    private readonly mobileMenu: HTMLElement | null = document.getElementById('mobile-menu');

    public init() {
        this.displayFilms();
        this.setupMenu();
    }

    private setupMenu() {
        if (this.menuBtn && this.mobileMenu) {
            this.menuBtn.addEventListener('click', () => {
                this.mobileMenu?.classList.toggle('hidden');
            });
        }
    }

    private async displayFilms() {
        if (!this.filmsContainer) return;

        const films = await this.apiService.getFilms();
        if (films.length === 0) {
            this.filmsContainer.innerHTML = '<p class="text-center col-span-full">Aucun film trouvé.</p>';
            return;
        }

        this.filmsContainer.innerHTML = films.map(film => `
            <a href="film_details.html?id=${film.id}" class="bg-white rounded-lg shadow-md overflow-hidden block hover:shadow-xl transition-shadow duration-300">
                <img src="${film.poster}" alt="Affiche du film ${film.title}" class="w-full h-96 object-cover">
                <div class="p-4">
                    <h2 class="text-xl font-bold text-gray-800">${film.title}</h2>
                    <p class="text-gray-600">Date de sortie : ${new Date(film.release_date).toLocaleDateString('fr-FR')}</p>
                </div>
            </a>
        `).join('');
    }
}

const page = new FilmsPage();
page.init();