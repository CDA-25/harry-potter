import '../style.css'
import { GetMoviesApi } from '../API/getMovies.ts'
import { createMovie } from '../components/createMovie.ts'

const sectionsMovies = document.querySelector('#moovies')

if (sectionsMovies) {
    const apiMovies = new GetMoviesApi()
    apiMovies.getMovie().then((movies) => {
        movies.forEach((movie) => {
            const e = createMovie(movie)
            sectionsMovies.appendChild(e)
        })
    })
} else {
    console.log('#movies non trouvé')
}