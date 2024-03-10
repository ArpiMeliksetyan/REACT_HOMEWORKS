import { IMovie } from "./Movies";
import "./MovieDetails.css"

export default function MovieDetails({
                                         movie: {
                                             imgUrl,
                                             movieName,
                                             releaseYear,
                                             rating,
                                             duration,
                                             description,
                                             relevantGenres
                                         }
                                     }: IMovie) {
    return (
        <div className="movieDetailsContainer">
            <img src={imgUrl} alt={movieName}/>
            <div className="movieDescriptionContainer">
                <div className="movieTitleContainer">
                    <h1 className="movieTitle">{movieName}</h1>
                    <span className="movieRating">{rating}</span>
                </div>
                <span className="movieGenre">
                    {relevantGenres?.join(', ')}
                </span>
                <div className="movieYearAndDurationContainer">
                    <p className="movieYear">{releaseYear}</p>
                    <p>{duration}</p>
                </div>
                <p className="movieDesc">{description}</p>
            </div>
        </div>
    )
}

