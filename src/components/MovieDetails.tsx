import "./MovieDetails.css"
import { IMovie } from "./Movies";
import SearchButton from "../assets/images/SearchButton.png"
interface IMovieDetails{
    movie: IMovie
    setMovieIndex:  (value: (((prevState: (number | undefined)) => (number | undefined)) | number | undefined)) => void;
}

export default function MovieDetails({
                                         movie: {
                                             imgUrl,
                                             movieName,
                                             releaseYear,
                                             rating,
                                             duration,
                                             description,
                                             relevantGenres
                                         },
                                         setMovieIndex,
                                     }: IMovieDetails) {
    function handleOnClick(){
        setMovieIndex(-1);
    }
    return (
        <div className="mainContainer">
            <div className="movieHeader">
                <span  onClick={handleOnClick} className="mainLogo">netflixroutlette</span>
                <button className='movieSearchButton'>
                    <img src={SearchButton} alt="searchButton"/>
                </button>

            </div>

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
        </div>

    )
}

