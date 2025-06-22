export function renderHeader(): string {
  return `
    <header class="bg-black text-white p-4 flex justify-between">
      <h1 class="text-xl font-bold">Harry Potter</h1>
      <nav>
        <a href="#/" class="mr-4 hover:underline">Home</a>
        <a href="#/houses" class="mr-4 hover:underline">Houses</a>
        <a href="#/films" class="mr-4 hover:underline">Movies</a>
        <a href="#/livres" class="hover:underline">Books</a>

      </nav>
    </header>
  `;
}