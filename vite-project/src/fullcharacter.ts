import { HarryPotter } from "./HarryPotter.ts"

// Récupère l'ID dans l'URL
console.log("ID récupéré");
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
console.log(name)


async function findCharacterById(id: any) {
  try {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    const data = await response.json();

    const character = data.find((element: any) => element.id === id);

    if (!character) {
      console.error("Personnage non trouvé.");
      return;
    }

    const fullCharacter = new HarryPotter(
      character.name,
      character.image,
      character.house,
      character.patronus,
      character.actor,
      character.alive,
      character.id
    );
    console.log(fullCharacter)

    // Crée l'affichage
    displayFullCharacter(fullCharacter);

  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
  }
}

findCharacterById(name)

function displayFullCharacter(character: HarryPotter) {
  const container = document.querySelector("#characterCard");
  if (!container) {
    console.error("Conteneur non trouvé !");
    return;
  }

  // Efface le contenu précédent s’il y en a
  container.innerHTML = "";

  const img = document.createElement("img");
  img.src = character.image || "http://localhost:3000/images/remy.webp";
  img.alt = character.name;
  img.className = "w-60 mx-auto mb-4 rounded shadow-md";

  const name = document.createElement("h2");
  name.textContent = character.name;
  name.className = "text-3xl font-bold text-center mb-4";

  const house = document.createElement("p");
  house.textContent = `Maison : ${character.house || "Inconnue"}`;

  const patronus = document.createElement("p");
  patronus.textContent = `Patronus : ${character.patronus || "Inconnu"}`;

  const actor = document.createElement("p");
  actor.textContent = `Interprété par : ${character.actor || "Inconnu"}`;

  const alive = document.createElement("p");
  alive.textContent = character.alive ? "Vivant(e)" : "Décédé(e)";

  const backBtn = document.createElement("button");
  backBtn.textContent = "← Retour";
  backBtn.className =
    "mt-6 mb-10 px-4 py-2 bg-[#5c4033] text-[#f4f1ea] rounded shadow hover:bg-[#3b2f2f] hover:shadow-lg transition block mx-auto";

  // Quand on clique dessus, on revient à la page précédente
  backBtn.addEventListener("click", () => {
    history.back();
  });

  container.appendChild(backBtn);


  container.appendChild(img);
  container.appendChild(name);
  container.appendChild(house);
  container.appendChild(patronus);
  container.appendChild(actor);
  container.appendChild(alive);
}
