import './style.css'
import type { MovieData } from './class.ts'
import { Movie } from './class.ts'

async function displayMovies() {
    const fetchAPI: MovieData[] = await (async () => {
        const res = await fetch("https://potterhead-api.vercel.app/api/movies", { method: "GET" })
        const data = await res.json()
        return data
    })()

    fetchAPI.forEach((MovieData) => {
        const movie = new Movie(MovieData)

        const container = document.querySelector('.container-movies') as HTMLElement

        const card = document.createElement('div')
        card.classList.add("opacity-60", "border-2", "border-black", "bg-red-900", "rounded-2xl", "shadow-lg", "p-4", "flex", "flex-col", "items-center", "text-center", "w-50", "hover:scale-110", "transition", "duration-300", "hover:-translate-y-1", "hover:cursor-pointer", "m-5", "p-7", "hover:opacity-100")

        const poster = document.createElement('img')
        poster.src = movie.poster
        poster.classList.add("w-32", "h-32", "mb-4", "object-cover", "rounded-xl")
        card.appendChild(poster)

        const title = document.createElement('h2')
        title.textContent = movie.title
        title.classList.add("text-lg", "font-bold", "mb-2", "text-white")
        card.appendChild(title)

        container.appendChild(card)

        card.addEventListener("click", function () {
            window.location.href = "./details.html?name=" + movie.title
        })
    })
}
displayMovies()

async function displayMovieDetails() {
    const url = new URL(window.location.href)
    const movieIdName = url.searchParams.get('name')

    const allMovie: MovieData[] = await (async () => {
        const res = await fetch("https://potterhead-api.vercel.app/api/movies")
        const data = await res.json()
        return data
    })()

    const data = allMovie.find(elem => elem.title === movieIdName)

    const movie = new Movie(data)

    const container = document.querySelector('.container-detailed-card') as HTMLElement
    const card = document.createElement('div')
    card.classList.add("bg-red-950/95", "rounded-3xl", "shadow-xl", "p-8", "max-w-2xl", "mx-auto", "mt-50", "mb-6", "text-center")

    const poster = document.createElement('img')
    poster.src = movie.poster
    poster.classList.add("w-48", "h-48", "mx-auto", "rounded-3xl", "mb-4", "object-cover")
    card.appendChild(poster)

    const title = document.createElement('h2')
    title.textContent = movie.title
    title.classList.add("text-3xl", "font-extrabold", "text-white", "mb-4")
    card.appendChild(title)

    const detailsList = document.createElement('ul')
    detailsList.classList.add("text-left", "space-y-4", "text-white/90")

    const details = [
        `Summary: ${movie.summary}`,
        `Directors: ${movie.directors}`,
        `Screenwriters: ${movie.screenwriters}`,
        `Producers: ${movie.producers}`,
        `Cinematographers: ${movie.cinematographers}`,
        `Editors: ${movie.editors}`,
        `Distributors: ${movie.distributors}`,
        `Music composers: ${movie.music_composers}`,
        `Release date: ${movie.release_date}`,
        `Running time: ${movie.running_time}`,
        `Budget: ${movie.budget}`,
        `Box office: ${movie.box_office}`,
        `Rating: ${movie.rating}`,
        `Trailer: ${movie.trailer}`,
        `Wiki: ${movie.wiki}`
    ]

    details.forEach(text => {
        const li = document.createElement('li')
        li.textContent = text
        detailsList.appendChild(li)
    })

    const backButton = document.createElement('button')
    backButton.textContent = 'Retour'
    backButton.classList.add("m-4", "px-10", "py-3", "bg-black", "text-yellow-300", "hover:bg-yellow-300", "hover:text-black", "font-semibold", "rounded-full", "border-2", "border-black", "transition", "duration-300", "hover:cursor-pointer")
    backButton.addEventListener('click', () => {
        window.history.back()
    })

    card.appendChild(detailsList)
    container.appendChild(card)
    card.appendChild(backButton)

    const body = document.getElementById('body') as HTMLElement
    body.classList.remove('bg-default')
    body.classList.add('bg-movies')
}
displayMovieDetails()
