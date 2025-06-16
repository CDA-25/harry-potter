async function fetchCharactersDetails() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur ${response.status}`);
    }

    const characters = await response.json();
    //console.log(characters);

    // const tabCharacters = [];
    characters.forEach((character) => {
      const div = document.createElement('div');
      div.className = 'card';

      const name = character.name;

      // Nom personnage
      const nameCharacter = document.createElement('h2');
      nameCharacter.textContent = name;
      div.appendChild(nameCharacter);

      // Noms alternatives
      const nameAlt = document.createElement('h3');
      for (const alt of alternate_names) {
        nameAlt.textContent = character.altername_names;
      }
      div.appendChild(nameAlt);

      // Date of birth peut être null
      const dateOfB = document.createElement('p');
      dateOfB.textContent = character.dateOfBirth || 'non définie';

      // Espèce
      character.species;

      // Gender if woman --> logo woman else if --> male
      if (character.gender === 'female') {
        // créer une image puis imageGenre.src = './images/female.png else if imageGenre.src = './images/male.png
      }

      // House
      else const house = document.createElement('p');
      house.textContent = `Maison : ${character.house}`;
      if (character.house === 'Hufflepuff') {
        const imgHouse = '../images/hufflepuff.jpg';
      } else if (character.house === 'Slytherin') {
        const imgHouse = '../images/slytherin.jpg';
      } else if (character.house === 'Ravenclaw') {
        const imgHouse = '../images/ravenclaw.jpg';
      } else if (character.house === 'Gryffindor') {
        const imgHouse = '../images/gryffindor.jpg';
      } else {
        const imgHouse = '../images/not_found.jpg';
      }

      // Alive
      if (character.alive) {
        const aliveChara = document.createElement('p');
        aliveChara.textContent = 'En vie';
        div.appendChild(aliveChara);
      }

      // Actor
      character.actor;

      // Image personnage
      const imgCharac = document.createElement('img');
      imgCharac.alt = character.image;
      imgCharac.src = character.image;
      div.appendChild(imgCharac);

      // Lien vers le personnage
      const linkCharacter = document.createElement('a');
      linkCharacter.href = `personnage.html?name=${encodeURIComponent(name)}`;
      linkCharacter.textContent = 'Voir le personnage';
      linkCharacter.className = 'btn-link';
      div.appendChild(linkCharacter);

      document.querySelector('.character_container')?.appendChild(div);
    });
  } catch (error) {
    error.message;
  }
}
fetchCharactersDetails();
