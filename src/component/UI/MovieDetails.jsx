import { useLoaderData } from "react-router"

export const MovieDetails = () => {
    const movieData = useLoaderData()
    console.log(movieData);

    const { Actor, Poster, Title, Runtime, Genre, Type, Year, Plot, BoxOffice, imdbID, Awards, imdbRating, } = movieData


    return (
        <li className="hero-container">
            <div className="main-containers">
                <div className="poster-container">
                    <img src={Poster} className="posters" alt={Title} />
                </div>

                <div className="ticket-containers">
                    <div className="ticket__content">
                        <h4 className="ticket__movie-title">{Title}</h4>
                        <p>{Plot}</p>
                        <p className="ticket__current-price">Type:</p>
                        <p className="ticket__current-price">Type:</p>
                        <button className="ticket__buy-btn">Watch Now</button>
                    </div>
                </div>
            </div>
        </li>
    )
}