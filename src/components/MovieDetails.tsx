import "./MovieDetails.css"
import SearchButton from "../assets/images/SearchButton.png"
import { useEffect, useState, useCallback } from "react";
import { getMovieById } from "../services/fetchData";
import { useNavigate, useParams } from "react-router-dom";

export default function MovieDetails() {
    const [selectedMovie, setSelectedMovie] = useState();
    const { movieId } = useParams();
    const navigate = useNavigate();


    const requestMovieById = useCallback(async () => {
        const movie = await getMovieById({id:  movieId });
        setSelectedMovie(movie);
    }, [movieId]);

    useEffect(() => {
        requestMovieById();
    }, [requestMovieById]);

    function handleOnClick() {
        navigate('/');
    }

    const releaseYear = selectedMovie?.release_date.split('-')[0];
    const movieDurationInHours = Math.floor(selectedMovie?.runtime / 60);
    const moveDurationInMinutes = selectedMovie?.runtime % 60;
    const movieTotalDuration = `${movieDurationInHours}h ${moveDurationInMinutes}min`

    return (
        selectedMovie &&
        <div className="mainContainer">
            <div className="movieHeader">
                <span onClick={handleOnClick} className="mainLogo">netflixroutlette</span>
                <button className='movieSearchButton'>
                    <img src={SearchButton} alt="searchButton"/>
                </button>

            </div>

            <div className="movieDetailsContainer">
                <img src={selectedMovie.poster_path} alt={selectedMovie.title}/>
                <div className="movieDescriptionContainer">
                    <div className="movieTitleContainer">
                        <h1 className="movieTitle">{selectedMovie.title}</h1>
                        <span className="movieRating">{selectedMovie.vote_average}</span>
                    </div>
                    <span className="movieGenre">
                    {selectedMovie.genres?.join(', ')}
                </span>
                    <div className="movieYearAndDurationContainer">
                        <p className="movieYear">{releaseYear}</p>
                        <p>{movieTotalDuration}</p>
                    </div>
                    <p className="movieDesc">{selectedMovie.overview}</p>
                </div>
            </div>
        </div>

    )
}

