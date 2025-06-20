import { ApiService } from './api';

class LivresPage {
    private readonly apiService = new ApiService();
    private readonly booksContainer: HTMLElement | null = document.getElementById('books-container');
    private readonly menuBtn: HTMLElement | null = document.getElementById('menu-btn');
    private readonly mobileMenu: HTMLElement | null = document.getElementById('mobile-menu');

    public init() {
        this.displayBooks();
        this.setupMenu();
    }

    private setupMenu() {
        if (this.menuBtn && this.mobileMenu) {
            this.menuBtn.addEventListener('click', () => {
                this.mobileMenu?.classList.toggle('hidden');
            });
        }
    }

    private async displayBooks() {
        if (!this.booksContainer) return;

        const books = await this.apiService.getBooks();
        if (books.length === 0) {
            this.booksContainer.innerHTML = '<p class="text-center col-span-full">Aucun livre trouvé.</p>';
            return;
        }

        this.booksContainer.innerHTML = books.map(book => `
            <a href="livre_details.html?id=${book.id}" class="bg-white rounded-lg shadow-md overflow-hidden block hover:shadow-xl transition-shadow duration-300">
                <img src="${book.cover}" alt="Couverture du livre ${book.title}" class="w-full h-96 object-contain">
                <div class="p-4">
                    <h2 class="text-xl font-bold text-gray-800">${book.title}</h2>
                    <p class="text-gray-600">Date de sortie : ${new Date(book.release_date).toLocaleDateString('fr-FR')}</p>
                </div>
            </a>
        `).join('');
    }
}

const page = new LivresPage();
page.init();