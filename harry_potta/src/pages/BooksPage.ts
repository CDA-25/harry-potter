export async function BooksPage(): Promise<string> {
  const res = await fetch('https://potterhead-api.vercel.app/api/books');

  const text = await res.text(); // Récupère la réponse brute
  console.log('Réponse brute :', text); // Affiche dans la console

  try {
    const data = JSON.parse(text); // Essaie de parser
    return `
      <section class="grid grid-cols-4 gap-4 p-4">
        ${data.map((book: any) => `
          <a href="#/book?id=${book.serial}">
  <div class="bg-white shadow p-4 rounded cursor-pointer hover:scale-105 transition">
    <img src="${book.cover}" alt="${book.title}" class="w-full h-72 object-cover mb-2 rounded">
    <h2 class="text-lg font-bold">${book.title}</h2>
    <p class="text-sm text-gray-600">${book.author}</p>
  </div>
</a>

        `).join('')}
      </section>
    `;
  } catch (error) {
    console.error('Erreur de parsing JSON', error);
    return `<p class="text-red-500">Erreur lors du chargement des livres</p>`;
  }
}
