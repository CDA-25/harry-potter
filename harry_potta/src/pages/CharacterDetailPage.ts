import { Character } from '../models/Character';

export async function CharacterDetailPage(name: string): Promise<string> {
  const res = await fetch('https://hp-api.onrender.com/api/characters');
  const data = await res.json();
  const charData = data.find((c: any) => c.name === name);
  if (!charData) return '<p>Personnage introuvable</p>';

  const character = new Character(charData);
  return `
    <section class="p-8">
      <button onclick="location.hash = '#/'" class="mb-4 text-blue-600 underline">← Retour</button>
      <div class="flex gap-8">
        <img src="${character.imageUrl}" class="w-64 h-auto rounded shadow" />
        <div>
          <h2 class="text-3xl font-bold">${character.name}</h2>
          <p class="text-gray-700">${character.description}</p>
        </div>
      </div>
    </section>
  `;
}
