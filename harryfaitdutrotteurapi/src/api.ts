export interface Character {
    id: string;
    name: string;
    image?: string;
    house?: string;
}

export interface CharacterDetails extends Character {
    alternateNames: string[];
    species: string;
    gender: string;
    dateOfBirth: string;
    yearOfBirth: number;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: {
        wood: string;
        core: string;
        length: number;
    };
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alternateActors: string[];
    alive: boolean;
}
export interface Film {
    id: string;
    title: string;
    summary: string;
    directors: string[];
    screenwriters: string[];
    producers: string[];
    cinematographers: string[];
    editors: string[];
    distributors: string[];
    music_composers: string[];
    release_date: string;
    running_time: string;
    budget: string;
    box_office: string;
    rating: string;
    trailer: string;
    poster: string;
    wiki: string;
}

interface RawFilm {
    serial: string;
    title: string;
    summary: string;
    directors: string[];
    screenwriters: string[];
    producers: string[];
    cinematographers: string[];
    editors: string[];
    distributors: string[];
    music_composers: string[];
    release_date: string;
    running_time: string;
    budget: string;
    box_office: string;
    rating: string;
    trailer: string;
    poster: string;
    wiki: string;
}

export interface Book {
    id: string;
    serial: string;
    title: string;
    summary: string;
    release_date: string;
    dedication: string;
    pages: string;
    cover: string;
    wiki: string;
}

interface RawBook {
    serial: string;
    title: string;
    summary: string;
    release_date: string;
    dedication: string;
    pages: string;
    cover: string;
    wiki: string;
}


export class ApiService {
    private readonly potterheadApiUrl = '/api/potterhead';
    private readonly hpApiUrl = '/api/hp';

    async getCharacters(): Promise<Character[]> {
        try {
            const response = await fetch(`${this.hpApiUrl}/characters`);
            if (response.ok) {
                const data = await response.json();
                if (data && data.length > 0) {
                    return data;
                }
            }
        } catch (error) {
            console.error(`Échec de la récupération depuis ${this.hpApiUrl}/characters`, error);
        }
        return [];
    }

    async getFilms(): Promise<Film[]> {
        try {
            const response = await fetch(`${this.potterheadApiUrl}/movies`);
            if (response.ok) {
                const data: RawFilm[] = await response.json();
                if (data && data.length > 0) {
                    return data.map((film) => ({
                        id: film.serial,
                        title: film.title,
                        summary: film.summary,
                        directors: film.directors,
                        screenwriters: film.screenwriters,
                        producers: film.producers,
                        cinematographers: film.cinematographers,
                        editors: film.editors,
                        distributors: film.distributors,
                        music_composers: film.music_composers,
                        release_date: film.release_date,
                        running_time: film.running_time,
                        budget: film.budget,
                        box_office: film.box_office,
                        rating: film.rating,
                        trailer: film.trailer,
                        poster: film.poster,
                        wiki: film.wiki,
                    }));
                }
            }
        } catch (error) {
            console.error(`Échec de la récupération depuis ${this.potterheadApiUrl}/movies`, error);
        }
        return [];
    }

    async getCharacterById(id: string): Promise<CharacterDetails | null> {
        if (!id) {
            console.error('L\'ID du personnage est indéfini');
            return null;
        }
        try {
            const response = await fetch(`${this.hpApiUrl}/character/${id}`);
            if (response.ok) {
                const data = await response.json();
                if (data && data.length > 0) {
                    return data[0] as CharacterDetails;
                }
            }
        } catch (error) {
            console.error(`Impossible de récupérer les données pour le personnage avec l'ID ${id}:`, error);
        }
        return null;
    }

    async getFilmById(id: string): Promise<Film | null> {
        if (!id) {
            console.error('L\'ID du film est indéfini');
            return null;
        }
        try {
            const response = await fetch(`${this.potterheadApiUrl}/movies/${id}`);
            if (response.ok) {
                const film: RawFilm = await response.json();
                return {
                    id: film.serial,
                    title: film.title,
                    summary: film.summary,
                    directors: film.directors,
                    screenwriters: film.screenwriters,
                    producers: film.producers,
                    cinematographers: film.cinematographers,
                    editors: film.editors,
                    distributors: film.distributors,
                    music_composers: film.music_composers,
                    release_date: film.release_date,
                    running_time: film.running_time,
                    budget: film.budget,
                    box_office: film.box_office,
                    rating: film.rating,
                    trailer: film.trailer,
                    poster: film.poster,
                    wiki: film.wiki,
                };
            }
        } catch (error) {
            console.error(`Impossible de récupérer les données pour le film avec l'ID ${id}:`, error);
        }
        return null;
    }

    async getBooks(): Promise<Book[]> {
        try {
            const response = await fetch(`${this.potterheadApiUrl}/books`);
            if (response.ok) {
                const data: RawBook[] = await response.json();
                if (data && data.length > 0) {
                    return data.map((book) => ({
                        id: book.serial,
                        serial: book.serial,
                        title: book.title,
                        summary: book.summary,
                        release_date: book.release_date,
                        dedication: book.dedication,
                        pages: book.pages,
                        cover: book.cover,
                        wiki: book.wiki,
                    }));
                }
            }
        } catch (error) {
            console.error(`Échec de la récupération depuis ${this.potterheadApiUrl}/books`, error);
        }
        return [];
    }

    async getBookById(id: string): Promise<Book | null> {
        if (!id) {
            console.error('L\'ID du livre est indéfini');
            return null;
        }
        try {
            const response = await fetch(`${this.potterheadApiUrl}/books/${id}`);
            if (response.ok) {
                const book: RawBook = await response.json();
                return {
                    id: book.serial,
                    serial: book.serial,
                    title: book.title,
                    summary: book.summary,
                    release_date: book.release_date,
                    dedication: book.dedication,
                    pages: book.pages,
                    cover: book.cover,
                    wiki: book.wiki,
                };
            }
        } catch (error) {
            console.error(`Impossible de récupérer les données pour le livre avec l'ID ${id}:`, error);
        }
        return null;
    }
}