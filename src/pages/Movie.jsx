import { useLoaderData } from "react-router"
import { Card } from "../component/UI/Card";

export const Movie = () => {
    const movieData = useLoaderData();
    console.log(movieData);

    return (
        <>
            <ul className="container grid grid-four--cols gap-4">
                {movieData.Search.map((curMovie) => {
                    return <Card key={curMovie.imdbID} curMovie={curMovie} />
                })}
            </ul>
        </>
    )
}