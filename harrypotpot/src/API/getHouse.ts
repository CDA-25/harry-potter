export class GetHouseApi {
    async getHouse(): Promise<string[]> {
        const res = await fetch("https://potterhead-api.vercel.app/api/houses")
        const data: string[] = await res.json()
        return data
    }
}