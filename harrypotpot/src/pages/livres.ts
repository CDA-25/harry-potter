import '../style.css'
import { GetBooksApi } from '../API/getBooks.ts'
import { createBook } from '../components/createBook.ts'

const sectionBooks = document.querySelector('#books')

if (sectionBooks) {
    const apiBooks = new GetBooksApi()
    apiBooks.getBook().then((books) => {
        books.forEach((book) => {
            const c = createBook(book)
            sectionBooks.appendChild(c)
        })
    })
} else {
    console.log('#books non trouvé')
}