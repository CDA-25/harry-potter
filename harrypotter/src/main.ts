import './style.css';
import { Movie } from './movies.ts';
import { Book, type BookInterface } from './books.ts';

async function happyMovie() {
  const url = 'https://potterhead-api.vercel.app/api/movies';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur : ${response.status}`);
    }

    // Là on dit à TypeScript que data est un tableau d'objets de type Movie
    const data: MovieInterface[] = await response.json();
    //console.log(data);

    const tabMovies: Movie[] = [];

    data.forEach((movie: MovieInterface) => {
      const movieName = movie.title;
      const summary = movie.summary;
      const producers = movie.producers;
      const trailer = movie.trailer;
      const poster = movie.poster;
      const box_office = movie.box_office;
      const release = movie.release_date;
      //console.log(trailer);

      const newMov = new Movie(
        movieName,
        summary,
        producers,
        trailer,
        poster,
        box_office,
        release
      );
      tabMovies.push(newMov);

      // Créer une div pour les films
      const divMovie = document.createElement('div');
      divMovie.className =
        'bg-white text-black rounded-lg shadow-md p-4 hover:scale-115 overflow-hidden hover:bg-black hover:text-white transition-transform duration-300';

      // Pour l'image dans la div
      const pictureMovie = document.createElement('img');
      pictureMovie.src = poster;
      pictureMovie.alt = `Affiche de ${movieName}`;
      pictureMovie.className = 'w-full h-170 object-cover rounded mb-4';
      divMovie.appendChild(pictureMovie);

      const divInfo = document.createElement('div');
      divInfo.className = 'p-4';

      // titre film
      const titleH2 = document.createElement('h2');
      titleH2.className = 'text-lg font-bold mb-2';
      titleH2.textContent = `${movieName} (${release})`;
      divInfo.appendChild(titleH2);

      const summaryMovie = document.createElement('p');
      // summaryMovie.textContent =
      //   summary.length > 200 ? summary.slice(0, 200) + '...' : summary;
      if (summary.length > 200) {
        summaryMovie.textContent = summary.slice(0, 200) + '...';
      } else summaryMovie.textContent = summary;

      // summaryMovie.textContent = `Resum : ${summary}`;
      summaryMovie.className = 'text-sm mb-3';
      divInfo.appendChild(summaryMovie);

      // Titre producteurs
      const prodName = document.createElement('h3');
      prodName.className = 'text-sm font-semibold mb-1';
      prodName.textContent = 'Producteurs :';
      divInfo.appendChild(prodName);

      const producersList = document.createElement('ul');
      producersList.className = 'list-disc list-inside text-sm mb-3';

      for (const name of producers) {
        //console.log(name);
        const li = document.createElement('li');
        li.textContent = name;
        producersList.appendChild(li);
      }
      divInfo.appendChild(producersList);

      if (trailer) {
        const trailerWatch = document.createElement('a');
        trailerWatch.href = trailer;
        trailerWatch.target = '_blank';
        trailerWatch.rel = 'noopener noreferrer';
        trailerWatch.textContent = 'Voir la bande annonce';
        trailerWatch.className =
          'mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition';
        divInfo.appendChild(trailerWatch);
      }
      divMovie.appendChild(divInfo);

      const container = document.querySelector('.movies_container');
      container.appendChild(divMovie);
    });
  } catch (err) {
    console.error(err.message);
  }
}
happyMovie();

async function happyBook() {
  const url = 'https://potterhead-api.vercel.app/api/books';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur : ${response.status}`);
    }

    // Là on dit à TypeScript que data est un tableau d'objets de type Book
    const data: BookInterface[] = await response.json();
    //console.log(data);

    const tabBooks: Book[] = [];

    data.forEach((book: BookInterface) => {
      const bookName = book.title;
      const summary = book.summary;
      const wiki = book.wiki;
      const poster = book.cover;
      const release = book.release_date;
      const pages = book.pages;
      //console.log(trailer);

      const newBook = new Book(bookName, summary, wiki, poster, release, pages);
      tabBooks.push(newBook);

      // Créer une div pour les films
      const divBook = document.createElement('div');
      divBook.className =
        'bg-white text-black rounded-lg shadow-md p-4 hover:scale-115 overflow-hidden hover:bg-black hover:text-white transition-transform duration-300';

      // Pour l'image dans la div
      const pictureBook = document.createElement('img');
      pictureBook.src = poster;
      pictureBook.alt = `Affiche de ${bookName}`;
      pictureBook.className = 'w-full h-170 object-cover rounded mb-4';
      divBook.appendChild(pictureBook);

      const divInfo = document.createElement('div');
      divInfo.className = 'p-4';

      // titre livre
      const titleH2 = document.createElement('h2');
      titleH2.className = 'text-lg font-bold mb-2';
      titleH2.textContent = `${bookName} (${release})`;
      divInfo.appendChild(titleH2);

      const summaryBook = document.createElement('p');
      if (summary.length > 200) {
        summaryBook.textContent = summary.slice(0, 200) + '...';
      } else summaryBook.textContent = summary;
      // summaryBook.textContent = `Resum : ${summary}`;
      summaryBook.className = 'text-sm mb-3';
      divInfo.appendChild(summaryBook);

      // Lien vers wiki
      if (wiki) {
        const wikiLink = document.createElement('a');
        const wikiLink2 = document.createElement('a');

        wikiLink.href = wiki;
        wikiLink.target = '_blank';
        wikiLink.rel = 'noopener noreferrer';
        wikiLink.textContent = 'Voir la Fandom';
        wikiLink2.textContent = 'Voir plus';
        wikiLink.className =
          'mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition';
        divInfo.appendChild(wikiLink);
      }

      // Afficher nombres de pages
      const pagesP = document.createElement('p');
      pagesP.textContent = `Nombres de pages : ${pages}`;
      pagesP.className = 'text-sm mb-2';
      divInfo.appendChild(pagesP);

      divBook.appendChild(divInfo);
      const container = document.querySelector('.books_container');
      container.appendChild(divBook);
    });
  } catch (err) {
    console.error(err.message);
  }
}

happyBook();

// On va maintenant faire le principe du Single Page Application (utilisé par React, Vue, Svelte, ...)
// Sur la page d'accueil, on est dans index.html et il y a 4 parties qui representent les maisons.
// Lors d'un évènement (cliquer sur une maison), On affiche les personnages appartenants à cette maison.
// Utiliser select

// quand on clique sur une maison, on affiche tous ceux appartenant à cette maison. Trie les personnages qui sont dans cette maison

async function fetchHouses(/*params:type*/) {
  //const url = 'https://potterhead-api.vercel.app/api/houses';
  const url = 'https://potterhead-api.vercel.app/api/characters';
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

      // Nom personnage
      const nameCharacter = document.createElement('h2');
      nameCharacter.textContent = name;
      div.appendChild(nameCharacter);

      // Image Personnage
      const img = document.createElement('img');
      // Au lieu du if else : img.src = character.image || '../images/not_found.png';

      if (character.image) {
        img.src = character.image;
        img.alt = name;
      } else {
        img.src = '../images/not_found.png';
        img.alt = name;
      }
      div.appendChild(img);

      const name = character.name;
      // Lien vers le personnage
      const linkCharacter = document.createElement('a');
      linkCharacter.href = `personnage.html?name=${encodeURIComponent(name)}`;
      linkCharacter.textContent = 'Voir le personnage';
      linkCharacter.className = 'btn-link';
      div.appendChild(linkCharacter);

      document.querySelector('.characters_container')?.appendChild(div);
    });
  } catch (error) {
    error.message;
  }
}
fetchHouses();

//`potterhead-api.vercel.app/api/characters/${name}`
