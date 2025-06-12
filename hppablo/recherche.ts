class HarryPotterApp {
  private characters: any[] = [];
  private container: HTMLElement;
  private searchInput: HTMLInputElement;

  constructor() {
    this.container = document.getElementById('cards-container')!;
    this.searchInput = document.getElementById('search') as HTMLInputElement;
    this.init();
  }

  async init() {
    await this.fetchCharacters();
    this.displayCharacters(this.characters);
    this.setupSearch();
    this.setupHouseButtons();
    this.setupScrollButtons(); // Ajouté ici
  }

  async fetchCharacters() {
    try {
      const response = await fetch('https://hp-api.onrender.com/api/characters');
      this.characters = await response.json();
    } catch (error) {
      console.error("Erreur lors du chargement des personnages :", error);
    }
  }

  private houseColor(house: string): string {
    switch (house) {
      case 'Gryffindor':
        return 'bg-red-600';
      case 'Slytherin':
        return 'bg-green-700';
      case 'Hufflepuff':
        return 'bg-yellow-500';
      case 'Ravenclaw':
        return 'bg-blue-600';
      default:
        return 'bg-gray-500';
    }
  }

  displayCharacters(characters: any[]) {
    this.container.innerHTML = '';

    const uniqueCharacters = characters.filter((char, index, self) =>
      index === self.findIndex((c) => c.name === char.name)
    );

    uniqueCharacters.forEach((char) => {
      const isHuman = char.species === 'human' ? 'HUMAIN' : 'NON-HUMAIN';
      const house = char.house || 'Aucune maison';
      const houseClass = this.houseColor(char.house);

      const card = document.createElement('div');
      card.className = `
        bg-[#530404] hover:bg-gray-900  p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300
        overflow-hidden border border-gray-200
      `;

      card.innerHTML = `
        <img class="rounded w-full h-64 object-cover"
             src="${char.image || 'https://via.placeholder.com/400x500'}"
             alt="${char.name}" />
        <div class="p-4 text-center">
          <h2 class="text-xl font-bold text-white mb-1">${char.name}</h2>
          <p class="text-sm text-white inline-block px-2 py-1 rounded-full 
                     ${isHuman === 'HUMAIN' ? 'bg-green-500' : 'bg-red-500'}">
            ${isHuman}
          </p>
          <p class="text-sm mt-2 text-white ${houseClass} inline-block px-3 py-1 rounded-full">
            ${house}
          </p>
        </div>
      `;

      this.container.appendChild(card);
    });
  }

  setupSearch() {
    this.searchInput.addEventListener('input', () => {
      const query = this.searchInput.value.toLowerCase();
      const filtered = this.characters.filter((char) =>
        char.name.toLowerCase().includes(query)
      );
      this.displayCharacters(filtered);
    });
  }

  private setupHouseButtons() {
    const buttons = document.querySelectorAll<HTMLButtonElement>('#house-buttons button');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const selectedHouse = button.dataset.house;
        const filtered = this.characters.filter((char) => char.house === selectedHouse);
        this.displayCharacters(filtered);
      });
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

new HarryPotterApp();
