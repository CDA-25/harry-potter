import { ApiService } from './api';
import type { Book } from './api';

class BookDetailsPage {
    private readonly apiService = new ApiService();
    private readonly bookDetailsContainer: HTMLElement | null = document.getElementById('book-details');

    public async init() {
        if (!this.bookDetailsContainer) {
            console.error('Le conteneur des détails du livre n\'a pas été trouvé');
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const bookId = params.get('id');

        if (!bookId) {
            this.bookDetailsContainer.innerHTML = '<p class="text-center text-red-500">ID du livre manquant.</p>';
            return;
        }

        const book = await this.apiService.getBookById(bookId);

        if (!book) {
            this.bookDetailsContainer.innerHTML = '<p class="text-center">Livre non trouvé.</p>';
            return;
        }

        this.displayBookDetails(book);
    }

    private displayBookDetails(book: Book) {
        if (!this.bookDetailsContainer) return;

        this.bookDetailsContainer.innerHTML = ''; // Clear container

        const imageContainer = document.createElement('div');
        imageContainer.className = 'md:w-1/3';

        const image = document.createElement('img');
        image.src = book.cover || 'images/erreur/not_found.jpeg';
        image.alt = book.title;
        image.className = 'w-full h-auto rounded-lg shadow-md';
        imageContainer.appendChild(image);

        const infoContainer = document.createElement('div');
        infoContainer.className = 'md:w-2/3 md:pl-8';

        const name = document.createElement('h1');
        name.textContent = book.title;
        name.className = 'text-4xl font-bold mb-4';
        infoContainer.appendChild(name);

        const details = document.createElement('div');
        details.className = 'grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4';

        const createDetail = (label: string, value: any) => {
            const p = document.createElement('p');
            p.innerHTML = `<span class="font-bold">${label} :</span> ${value || 'N/A'}`;
            details.appendChild(p);
        }

        createDetail('Numéro de série', book.serial);
        createDetail('Date de sortie', new Date(book.release_date).toLocaleDateString('fr-FR'));
        createDetail('Dédicace', book.dedication);
        createDetail('Nombre de pages', book.pages);
        createDetail('Résumé', book.summary);

        if (book.wiki) {
            const wikiLink = document.createElement('a');
            wikiLink.href = book.wiki;
            wikiLink.textContent = 'Voir le wiki';
            wikiLink.target = '_blank';
            wikiLink.className = 'text-blue-500 hover:underline';
            const p = document.createElement('p');
            p.appendChild(wikiLink);
            details.appendChild(p);
        }

        infoContainer.appendChild(details);

        this.bookDetailsContainer.appendChild(imageContainer);
        this.bookDetailsContainer.appendChild(infoContainer);
    }
}

const page = new BookDetailsPage();
page.init();