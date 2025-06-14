import { Character } from '../models/Character';

export async function HomePage(): Promise<string> {
  const res = await fetch('https://hp-api.onrender.com/api/characters');
  const data = await res.json();
  const characters = data.map((c: any) => new Character(c));

  return `
    <section class="grid grid-cols-4 gap-4 p-4">
      ${characters.map((character: Character) => `
        <div class="bg-white shadow p-4 rounded cursor-pointer hover:shadow-lg"
             onclick="location.hash = '#/character?name=${encodeURIComponent(character.name)}'">
          <img src="${character.imageUrl}" alt="${character.name}" class="w-full h-60 object-cover mb-2 rounded">
          <h2 class="text-lg font-bold">${character.name}</h2>
          <p class="text-sm text-gray-600">${character.house}</p>
        </div>
      `).join('')}
    </section>
  `;
}