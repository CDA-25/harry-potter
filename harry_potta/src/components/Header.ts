export function renderHeader(): string {
  return `
    <header class="bg-black text-white p-4 flex justify-between">
      <h1 class="text-xl font-bold">Harry Potter</h1>
      <nav>
        <a href="#/" class="mr-4 hover:underline">Accueil</a>
        <a href="#/houses" class="mr-4 hover:underline">Maisons</a>
        <a href="#/films" class="mr-4 hover:underline">Films</a>
        <a href="#/livres" class="hover:underline">Livres</a>
      </nav>
    </header>
  `;
}