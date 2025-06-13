class HarryPotterFilmsApp {
  private films: any[] = [];
  private container: HTMLElement;
  private searchInput: HTMLInputElement;

  constructor() {
    this.container = document.getElementById('films-container')!;
    this.searchInput = document.getElementById('search-films') as HTMLInputElement;
    this.init();
  }

  async init() {
    await this.fetchFilms();
    this.displayFilms(this.films);
    this.setupSearch();
    this.setupScrollButtons();
  }

  async fetchFilms() {
    try {
      const response = await fetch('https://potterhead-api.vercel.app/api/movies');
      if (!response.ok) throw new Error('Erreur lors du chargement des films');
      this.films = await response.json();
    } catch (error) {
      console.error("Erreur lors du chargement des films :", error);
    }
  }

  displayFilms(films: any[]) {
    this.container.innerHTML = '';

    films.forEach((film) => {
      const poster = film.poster || "https://via.placeholder.com/400x600?text=Pas+d%27image";
      const title = film.title || 'Titre inconnu';
      const year = film.release_date || 'Année inconnue';
      const director = film.directors || 'Réalisateur inconnu';
      const description = film.summary || 'Aucune description';

      const card = document.createElement('div');
      card.className = `
        bg-red-900 hover:bg-red-800 p-5 rounded-2xl shadow-lg transition-shadow duration-300
        border border-red-700 flex flex-col
      `;

      card.innerHTML = `
        <img class="rounded-md w-full h-72 object-cover mb-4" src="${poster}" alt="${title}" />
        <h2 class="text-xl font-bold mb-2">${title}</h2>
        <p class="text-sm mb-1"><strong>Année :</strong> ${year}</p>
        <p class="text-sm mb-1"><strong>Réalisateur :</strong> ${director}</p>
        <p class="text-sm" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
          ${description}
        </p>
      `;

      this.container.appendChild(card);
    });
  }

  setupSearch() {
    this.searchInput.addEventListener('input', () => {
      const query = this.searchInput.value.toLowerCase();
      const filtered = this.films.filter(film =>
        film.title.toLowerCase().includes(query)
      );
      this.displayFilms(filtered);
    });
  }

  setupScrollButtons() {
    const btnTop = document.getElementById('scroll-top')!;
    const btnMiddle = document.getElementById('scroll-middle')!;
    const btnBottom = document.getElementById('scroll-bottom')!;

    btnTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    btnMiddle.addEventListener('click', () => window.scrollTo({ top: document.body.scrollHeight / 2, behavior: 'smooth' }));
    btnBottom.addEventListener('click', () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
  }
}

new HarryPotterFilmsApp();
