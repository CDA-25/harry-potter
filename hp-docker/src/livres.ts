import './style.css'
import type { BookData } from './class'
import { Book } from './class'

async function displayBooks() {
    const fetchAPI: BookData[] = await (async () => {
        const res = await fetch("https://potterhead-api.vercel.app/api/books", {method: "GET"})
        const data = await res.json()
        return data
    })()

    fetchAPI.forEach((BookData) => {
        const book = new Book(BookData)

        const container = document.querySelector('.container-books') as HTMLElement

        const card = document.createElement('div')
        card.classList.add("bg-amber-950","opacity-40", "border-2", "border-black", "rounded-2xl", "shadow-lg", "p-4", "flex", "flex-col", "items-center", "text-center", "w-50", "hover:scale-110", "transition", "duration-300", "hover:-translate-y-1", "hover:cursor-pointer", "m-5", "p-7", "hover:opacity-100")
        
        const cover = document.createElement('img')
        cover.src = book.cover
        cover.classList.add("w-32", "h-32", "mb-4", "object-cover", "rounded-xl")
        card.appendChild(cover)

        const title = document.createElement('h2')
        title.textContent = book.title
        title.classList.add("text-lg", "font-bold", "mb-2", "text-yellow-300")
        card.appendChild(title)



        container.appendChild(card)

        card.addEventListener("click", function() {
        window.location.href = "./details.html?id=" + book.serial
    })
    })
}
displayBooks()

async function displayBookDetails() {
    const url = new URL(window.location.href)
    const bookId = url.searchParams.get('id')

    const allBooks: BookData[] = await (async () => {
        const res = await fetch("https://potterhead-api.vercel.app/api/books")
        const data = await res.json()
        return data
    })()

    const data = allBooks.find(elem => elem.serial === bookId)

    const book = new Book(data)

    const container = document.querySelector('.container-detailed-card') as HTMLElement

    const card = document.createElement('div')
    card.classList.add("bg-amber-950/95", "rounded-3xl", "shadow-xl", "p-8", "max-w-2xl", "mx-auto", "mt-50", "mb-6", "text-center")

    const cover = document.createElement('img')
    cover.src = book.cover
    cover.classList.add("w-48", "h-48", "mx-auto", "rounded-3xl", "mb-4", "object-cover")
    card.appendChild(cover)
    
    const title = document.createElement('h2')
    title.textContent = book.title
    title.classList.add("text-3xl", "font-extrabold", "text-yellow-300")
    card.appendChild(title)

    const release = document.createElement('h3')
    release.textContent = book.release_date
    release.classList.add("text-xl", "text-yellow-600", "mb-4")
    card.appendChild(release)

    const detailsList = document.createElement('ul')
    detailsList.classList.add("text-left", "space-y-4", "text-white/90")

    const details = [
        `Summary: ${book.summary}`,
        `Dedication: ${book.dedication}`,
        `Pages: ${book.pages}`,
        `Wiki: ${book.wiki}`
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
    body.classList.add('bg-books')
}
displayBookDetails()