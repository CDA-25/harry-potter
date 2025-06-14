export async function BookDetailPage(id: string): Promise<string> {
  const res = await fetch('https://potterhead-api.vercel.app/api/books');
  const data = await res.json();

  const book = data.find((b: any) => b.serial === id);

  if (!book) {
    return `<p class="text-red-500">Livre introuvable </p>`;
  }

  return `
    <div class="p-4">
      <button onclick="window.history.back()" class="mb-4 text-blue-600 hover:underline">← Retour</button>
      <div class="bg-white shadow rounded p-4">
        <img src="${book.cover}" alt="${book.title}" class="w-64 mx-auto mb-4">
        <h1 class="text-2xl font-bold">${book.title}</h1>
        <p class="text-lg text-gray-600 mb-2">Author : ${book.author||'J. K. Rowling'}</p>
        <p class="text-md text-gray-700">Release date : ${book.release_date||'Inconnue'}</p>
        <p class="text-md text-gray-600 mt-4">${book.summary}</p>
      </div>
    </div>
  `;
}
