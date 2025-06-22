import type { HarryPotterBook } from "../Types/book"

export class GetBooksApi {
    async getBook(): Promise<HarryPotterBook[]> {
        const res = await fetch("https://potterhead-api.vercel.app/api/books")
        const data: HarryPotterBook[] = await res.json()
        return data
    }
}