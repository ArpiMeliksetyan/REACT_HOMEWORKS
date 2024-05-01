import { IMovie } from "../components/Movies";
import { IBackendMovie } from "../services/fetchData";

export function mapUIMovieToBackendMovie(movie: IMovie): IBackendMovie {
    return {
        poster_path: movie.imgUrl,
        title: movie.movieName,
        release_date: movie.releaseYear,
        genres: movie.relevantGenres,
        overview: movie.description,
        vote_average: Number(movie.rating),
        runtime: Number(movie.duration),
    }
};

export function mapBackendMovieToUIMovie(movie: IBackendMovie): IMovie {
    return {
        imgUrl: movie.poster_path,
        movieName: movie.title,
        releaseYear: movie.release_date,
        relevantGenres: movie.genres,
        description: movie.overview,
        rating: movie.vote_average,
        duration: String(movie.runtime),
    }
}