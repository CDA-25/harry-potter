export async function MovieDetailPage(id: string): Promise<string> {
  const res = await fetch('https://potterhead-api.vercel.app/api/movies');
  const data = await res.json();

  const movie = data.find((m: any) => m.serial === id);

  if (!movie) {
    return `<p class="text-red-500 p-4">Film introuvable ❌</p>`;
  }

  const releaseYear = new Date(movie.releaseDate).getFullYear();

  return `
    <div class="p-4">
      <button onclick="window.history.back()" class="mb-4 text-blue-600 hover:underline">← Retour</button>
      <div class="bg-white shadow rounded p-4">
        <img src="${movie.cover}" alt="${movie.title}" class="w-96 mx-auto mb-4 rounded">
        <h1 class="text-3xl font-bold mb-2">${movie.title}</h1>
        <p class="text-gray-600 text-lg mb-1">Réalisé par : ${movie.director}</p>
        <p class="text-gray-600 text-lg mb-1">Durée : ${movie.duration}</p>
        <p class="text-gray-600 text-lg mb-1">Sortie : ${releaseYear}</p>
        <p class="mt-4 text-gray-800">${movie.synopsis}</p>
      </div>
    </div>
  `;
}
