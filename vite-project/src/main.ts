import "./style.css";
import { HarryPotter } from "./HarryPotter.ts"


async function HarryPotterData() {
  const url = 'https://hp-api.onrender.com/api/characters';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur : ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    let tabHarryPotter: HarryPotter[] = [];

    const selectHouse = document.getElementById("house") as HTMLSelectElement;

    // On lit la maison depuis l'URL
    const params = new URLSearchParams(window.location.search);
    const selectedHouseFromUrl = params.get("house");

    // Si une maison est dans l'URL, on la sélectionne dans la liste déroulante
    if (selectedHouseFromUrl && selectHouse) {
      selectHouse.value = selectedHouseFromUrl;
    }

    // Fonction d'affichage des personnages
    function renderCharacters(filteredCharacters: any[]) {
      const container = document.querySelector('#HarryPotter_container');
      if (!container) {
        console.error('Le conteneur #HarryPotter_container est introuvable dans le DOM.');
        return;
      }

      container.innerHTML = ""; // On vide le container avant d'ajouter les nouvelles cartes

      filteredCharacters.forEach((element: { name: string; image: string; house: string; patronus: string; actor: string; alive: boolean; id: string | number }) => {
        const hp_name = element.name;
        const hp_image = element.image;
        const hp_house = element.house;
        const hp_patronus = element.patronus;
        const hp_actor = element.actor;
        const hp_alive = element.alive;
        const hp_id = element.id;

        const hpCard = new HarryPotter(hp_name, hp_image, hp_house, hp_patronus, hp_actor, hp_alive, hp_id);
        tabHarryPotter.push(hpCard);

        const newHpDiv = document.createElement('div');
        newHpDiv.classList.add("bg-[#f8eac7]", "text-[#f8f4ed]", "border-2", "border-[#5c4033]", "rounded-xl", "shadow-md", "p-4", "font-serif", "text-[#3b2f2f]", "hover:shadow-lg", "transition", "m-5");

        const HpH2 = document.createElement('h2');
        HpH2.className = 'cinzel text-xl font-bold text-center text-gray-800 mb-2';
        HpH2.textContent = `${hp_name}`;
        newHpDiv.appendChild(HpH2);

        const HpImage = document.createElement('img');
        if (hp_image === "") {
          HpImage.src = 'http://localhost:3000/images/remy.webp';
        } else {
          HpImage.src = hp_image;
        }
        HpImage.alt = hp_name;
        HpImage.className = 'w-50 h-70 mx-auto mb-4 border border-[#5c4033] shadow-inner rounded-md';
        newHpDiv.appendChild(HpImage);

        const afficherCarte = document.createElement('button');
        afficherCarte.className = "px-4 py-2 bg-[#4b3621] text-[#fdf6e3] rounded-md font-semibold shadow hover:bg-[#2e1d12] hover:shadow-lg transition block mx-auto";
        afficherCarte.textContent = 'Voir la carte complète';

        afficherCarte.addEventListener('click', () => {
          window.location.href = `/fullcharacter.html?name=${encodeURIComponent(hp_id)}`;
        });

        newHpDiv.appendChild(afficherCarte);
        container.appendChild(newHpDiv);
      });
    }

    // Si une maison est sélectionnée dans l'URL, on filtre, sinon on affiche tout
    let initialCharacters;
    if (selectedHouseFromUrl) {
      initialCharacters = data.filter((character: any) => character.house === selectedHouseFromUrl);
    } else {
      initialCharacters = data;
    }

    renderCharacters(initialCharacters);

    // Événement sur le <select> pour modifier l'URL et recharger la page
    selectHouse.addEventListener("change", () => {
      const selectedHouse = selectHouse.value;

      // Redirection avec le bon paramètre ?house=...
      if (selectedHouse) {
        window.location.href = `/?house=${encodeURIComponent(selectedHouse)}`;
      } else {
        window.location.href = `/`;
      }
    });

  } catch (err) {
    console.error('Erreur lors de la récupération des données :', err);
  }
}

HarryPotterData();




/////////////////////////////////////////////


