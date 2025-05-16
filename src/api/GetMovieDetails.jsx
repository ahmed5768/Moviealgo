export const GetMovieDetails = async ({ params }) => {
    const id = params.movieId
    console.log(params);

    try {
        const fetchApi = await fetch(
            `https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
        )
        const data = fetchApi.json()
        return data
    } catch (error) {
        console.log(error);

    }
}