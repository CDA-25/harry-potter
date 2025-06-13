import type { HarryPotterBook } from "../Types/book"

export function createBook(book: HarryPotterBook): HTMLElement {
    const card = document.createElement('div')
    card.classList.add(
        'm-5', 'min-h-screen', 'bg-black/50',
        'rounded-xl', 'shadow-md', 'p-6', 'border-4', 'border-amber-200', 'text-center', 'text-white'
    )

    const num = document.createElement('h2')
    num.textContent = book.serial
    num.classList.add('font-harry', 'text-5xl', 'font-bold', 'mb-4')

    const title = document.createElement('h2')
    title.textContent = book.title
    title.classList.add('font-harry', 'text-5xl', 'font-bold', 'mb-4')

    const imgCard = document.createElement('div')
    imgCard.classList.add('flex', 'justify-center', 'pt-5', 'pb-5')

    const cover = document.createElement('img')
    cover.src = book.cover
    cover.alt = `Couverture du livre ${book.title}`
    cover.classList.add('w-80', 'h-auto', 'rounded', 'mb-4')
    imgCard.appendChild(cover)

    const summary = document.createElement('p')
    summary.textContent = book.summary
    summary.classList.add('text-lg', 'mb-4', 'italic')

    const releaseDate = document.createElement('p')
    releaseDate.textContent = `Date de sortie : ${book.release_date}`
    releaseDate.classList.add('mb-2')

    const dedication = document.createElement('p')
    dedication.textContent = `Dédicace : ${book.dedication}`
    dedication.classList.add('mb-2')

    const pages = document.createElement('p')
    pages.textContent = `Nombre de pages : ${book.pages}`
    pages.classList.add('mb-2')

    const wikiLink = document.createElement('a')
    wikiLink.href = book.wiki
    wikiLink.target = "_blank"
    wikiLink.textContent = "Voir plus sur le wiki"
    wikiLink.classList.add('text-amber-200', 'underline', 'hover:text-yellow-500', 'block', 'mb-4')

    card.appendChild(num)
    card.appendChild(title)
    card.appendChild(imgCard)
    card.appendChild(summary)
    card.appendChild(releaseDate)
    card.appendChild(dedication)
    card.appendChild(pages)
    card.appendChild(wikiLink)

    return card
}