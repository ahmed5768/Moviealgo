// import { meta } from "@eslint/js";

export const GetApiData = async () => {
    try {
        const fetchApi = await fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`
        )
        const data = fetchApi.json()
        return data
    } catch (error) {
        console.log(error);

    }
}