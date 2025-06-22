import type { HarryPotterMovie } from "../Types/movie"

export function createMovie(movie: HarryPotterMovie): HTMLElement {
    const container = document.createElement('div')
    container.classList.add(
        'm-5', 'min-h-screen', 'bg-black/50',
        'rounded-xl', 'shadow-md', 'p-6', 'border-4', 'border-amber-200', 'text-center'
    )

    const title = document.createElement('h2')
    title.textContent = movie.title
    title.classList.add('font-harry', 'text-5xl', 'font-bold', 'mb-4')

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('flex', 'justify-center', 'pt-5', 'pb-5')

    const cover = document.createElement('img')
    cover.src = movie.poster
    cover.alt = `Couverture du film ${movie.title}`
    cover.classList.add('w-80', 'h-auto', 'rounded', 'mb-4')
    imgContainer.appendChild(cover)

    const summary = document.createElement('p')
    summary.textContent = movie.summary
    summary.classList.add('text-lg', 'mb-4', 'italic')

    const releaseDate = document.createElement('p')
    releaseDate.textContent = `Sortie : ${movie.release_date}`
    releaseDate.classList.add('mb-2')

    const directors = document.createElement('p')
    directors.textContent = `Directors : ${movie.directors.join(', ')}`
    directors.classList.add('mb-2')

    const screenwriters = document.createElement('p')
    screenwriters.textContent = `Screenwriters : ${movie.screenwriters.join(', ')}`
    screenwriters.classList.add('mb-2')

    const producers = document.createElement('p')
    producers.textContent = `Producers : ${movie.producers.join(', ')}`
    producers.classList.add('mb-2')

    const cinematographers = document.createElement('p')
    cinematographers.textContent = `Cinematographers : ${movie.cinematographers.join(', ')}`
    cinematographers.classList.add('mb-2')

    const editors = document.createElement('p')
    editors.textContent = `Editors : ${movie.editors.join(', ')}`
    editors.classList.add('mb-2')

    const distributors = document.createElement('p')
    distributors.textContent = `Distributors : ${movie.distributors.join(', ')}`
    distributors.classList.add('mb-2')

    const musicComposers = document.createElement('p')
    musicComposers.textContent = `Music composers : ${movie.music_composers.join(', ')}`
    musicComposers.classList.add('mb-2')

    const runningTime = document.createElement('p')
    runningTime.textContent = `Durée : ${movie.running_time}`
    runningTime.classList.add('mb-2')

    const budget = document.createElement('p')
    budget.textContent = `Budget : ${movie.budget}`
    budget.classList.add('mb-2')

    const boxOffice = document.createElement('p')
    boxOffice.textContent = `Box office : ${movie.box_office}`
    boxOffice.classList.add('mb-2')

    const rating = document.createElement('p')
    rating.textContent = `Note : ${movie.rating}`
    rating.classList.add('mb-2')

    const trailer = document.createElement('a')
    trailer.href = movie.trailer
    trailer.target = '_blank'
    trailer.textContent = 'Voir la bande-annonce'
    trailer.classList.add('text-amber-200', 'underline', 'hover:text-yellow-500', 'block', 'mb-4')

    const wikiLink = document.createElement('a')
    wikiLink.href = movie.wiki
    wikiLink.target = '_blank'
    wikiLink.textContent = 'Voir plus sur le wiki'
    wikiLink.classList.add('text-amber-200', 'underline', 'hover:text-yellow-500')

    container.appendChild(title)
    container.appendChild(imgContainer)
    container.appendChild(summary)
    container.appendChild(releaseDate)
    container.appendChild(directors)
    container.appendChild(screenwriters)
    container.appendChild(producers)
    container.appendChild(cinematographers)
    container.appendChild(editors)
    container.appendChild(distributors)
    container.appendChild(musicComposers)
    container.appendChild(runningTime)
    container.appendChild(budget)
    container.appendChild(boxOffice)
    container.appendChild(rating)
    container.appendChild(trailer)
    container.appendChild(wikiLink)

    return container
}