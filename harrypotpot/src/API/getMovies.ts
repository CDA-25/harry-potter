import type { HarryPotterMovie } from '../Types/movie.ts'

export class GetMoviesApi {
    async getMovie(): Promise<HarryPotterMovie[]> {
        const res = await fetch("https://potterhead-api.vercel.app/api/movies")
        const data: HarryPotterMovie[] = await res.json()
        return data
    }
}