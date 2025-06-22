// Ca ne crée pas de film, ça dit juste à TypeScript ce que doit contenir un film
// Les interfaces permettent de décrire les données, on va les utiliser pour typer les variables
export interface MovieInterface {
  title: string;
  summary: string;
  producers: string[];
  trailer: string;
  poster: string;
  box_office: string;
  release_date: string;
}

// Les propriétés de la classe et de l'interface doit avoir les mêmes noms
export class Movie {
  title: string;
  summary: string;
  producers: string[];
  trailer: string;
  poster: string;
  box_office: string;
  release: string;

  constructor(
    // données recues de l'API
    movieName: string,
    summary: string,
    producers: string[],
    trailer: string,
    poster: string,
    box_office: string,
    release_date: string
  ) {
    this.title = movieName; //converti
    this.summary = summary;
    this.producers = producers;
    this.trailer = trailer;
    this.poster = poster;
    this.box_office = box_office;
    this.release = release_date; // converti
  }
}

// Une interface ne contient que la forme (la structure), pas de code, pas de valeur, ni this. C'est une sorte de contrat de type.
// En typescript une interface est indépendante, pas de this. ni d'affectation
// this n'est utilisé que dans une classe ou une méthode, pas dans une interface.

//   const movies : Movies = {
//     movieName : title,
//     summary : summary,
//     producers : producers,
//     trailer : trailer,
//     poster : poster,
//     box_office : box_office,
//     release : release,
//   };
// }k
