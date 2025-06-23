class HarryPotterBooksApp {
  private books: any[] = [];
  private container: HTMLElement;
  private searchInput: HTMLInputElement;

  constructor() {
    this.container = document.getElementById('cards-container')!;
    this.searchInput = document.getElementById('search') as HTMLInputElement;
    this.init();
  }

  async init() {
    await this.fetchBooks();
    this.displayBooks(this.books);
    this.setupSearch();
    this.setupScrollButtons();
  }

  async fetchBooks() {
    try {
      const response = await fetch('https://potterhead-api.vercel.app/api/books');
      this.books = await response.json();
    } catch (error) {
      console.error("Erreur lors du chargement des livres :", error);
    }
  }

  displayBooks(books: any[]) {
    this.container.innerHTML = '';

    const uniqueBooks = books.filter((book, index, self) =>
      index === self.findIndex((b) => b.title === book.title)
    );

    uniqueBooks.forEach((book) => {
      const image = book.cover || 'https://via.placeholder.com/400x500';
      const title = book.title || 'Titre inconnu';
      const author = book.author || 'Auteur inconnu';
      const releaseDate = book.release_date || 'Date inconnue';
      const pages = book.pages ? `${book.pages} pages` : 'Nombre de pages inconnu';

      const card = document.createElement('div');
      card.className = `
        bg-[#530404] hover:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300
        overflow-hidden border border-gray-200
      `;

      card.innerHTML = `
        <img class="rounded w-full h-64 object-cover mb-4" src="${image}" alt="${title}" />
        <div class="text-center text-white">
          <h2 class="text-xl font-bold mb-2">${title}</h2>
          <p class="text-sm mb-1">Auteur : ${author}</p>
          <p class="text-sm mb-1">Date de sortie : ${releaseDate}</p>
          <p class="text-sm">${pages}</p>
        </div>
      `;

      this.container.appendChild(card);
    });
  }

  setupSearch() {
    this.searchInput.addEventListener('input', () => {
      const query = this.searchInput.value.toLowerCase();
      const filtered = this.books.filter((book) =>
        book.title.toLowerCase().includes(query)
      );
      this.displayBooks(filtered);
    });
  }

  private setupScrollButtons() {
    const btnTop = document.getElementById('scroll-top')!;
    const btnMiddle = document.getElementById('scroll-middle')!;
    const btnBottom = document.getElementById('scroll-bottom')!;

    btnTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    btnMiddle.addEventListener('click', () => {
      const middle = document.body.scrollHeight / 2;
      window.scrollTo({ top: middle, behavior: 'smooth' });
    });

    btnBottom.addEventListener('click', () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  }
}

new HarryPotterBooksApp();
