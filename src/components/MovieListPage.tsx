import React, { useState, useEffect, useCallback } from "react";
import GenreSelect, { listOfGenres } from "./GenreSelect";
import SortControl from "./SortControl";
import Dropdown from "./Dropdown";
import "../pages/MovieListPage.css";
import MovieTile from "./MovieTile";
import Footer from "./Footer";
import { getMovies, getMovieById } from "../services/fetchData";
import { useRouter } from "next/router";
import ModalDialog from "./ModalDialog";
import EditMovieForm from "./EditMovieForm";
import { mapBackendMovieToUIMovie } from "../helpers/mapper";

interface MovieListPageProps {
    initialMovies: any[];
    initialSelectedMovie: any | null;
    searchParams: {
        activeGenre?: string;
        sortBy?: string;
        search?: string;
    };
}

const MovieListPage: React.FC<MovieListPageProps> = ({ initialMovies, initialSelectedMovie, searchParams }) => {
    const [isEdited, setIsEdited] = useState(false);
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const [movies, setMovies] = useState(initialMovies);
    const [selectedMovie, setSelectedMovie] = useState(initialSelectedMovie);
    const router = useRouter();
    const params = router?.query;

    const activeGenre = searchParams?.activeGenre || '';
    const sortBy = searchParams?.sortBy || '';
    const search = searchParams?.search || '';

    const requestMovies = useCallback(async () => {
        const movies = await getMovies({
            ...(activeGenre && activeGenre !== listOfGenres[0] ? { filter: activeGenre } : {}),
            ...(sortBy ? { sortBy, sortOrder: 'desc' } : {}),
            ...(search ? { search, searchBy: 'title' } : {}),
        });
        setMovies(movies);
    }, [activeGenre, sortBy, search]);

    const requestMovieById = useCallback(async () => {
        if (params?.movieId) {
            const movie = await getMovieById(params.movieId as string);
            setSelectedMovie(movie);
        }
    }, [isEdited, params?.movieId]);

    useEffect(() => {
        requestMovies();
    }, [requestMovies]);

    useEffect(() => {
        requestMovieById();
    }, [requestMovieById]);

    function handleSelect() {
        setIsOpenDropDown(!isOpenDropDown);
    }

    function handleClickDetails(id) {
        router.push(`/movies/${id}`);
    }

    function handleOnCloseForm(event) {
        event.stopPropagation();
        setIsEdited(false);
        router.push("/movies");
    }

    function handleOnClose() {
        setIsEdited(false);
        router.push('/movies');
    }

    return (
        <div>
            {isEdited && selectedMovie && (
                <ModalDialog title='EDIT MOVIE' onClose={handleOnCloseForm}>
                    <EditMovieForm
                        movie={mapBackendMovieToUIMovie(selectedMovie)}
                        handleOnClose={handleOnClose}
                        setIsEdited={setIsEdited}
                    />
                </ModalDialog>
            )}
            <div className="result">
                <GenreSelect />
                <SortControl onSelect={handleSelect} />
            </div>
            {isOpenDropDown && <Dropdown />}
            <ol className="moviesList">
                {Array.isArray(movies) && movies.map((movie) => (
                    <MovieTile
                        key={movie.id}
                        movie={movie}
                        onClickDetails={() => handleClickDetails(movie.id)}
                        setIsEdited={setIsEdited}
                    />
                ))}
            </ol>
            <Footer />
        </div>
    );
};

export default MovieListPage;
