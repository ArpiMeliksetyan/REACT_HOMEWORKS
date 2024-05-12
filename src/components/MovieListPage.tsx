import React, { useState, useEffect, useCallback } from "react";
import './Header.css';
import GenreSelect, { listOfGenres } from "./GenreSelect";
import SortControl from "./SortControl";
import Dropdown from "./Dropdown";
import "../pages/MovieListPage.css";
import MovieTile from "./MovieTile";
import Footer from "./Footer";
import { getMovieById, getMovies } from "../services/fetchData";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import ModalDialog from "./ModalDialog";
import EditMovieForm from "./EditMovieForm";
import { mapBackendMovieToUIMovie } from "../helpers/mapper";


export default function MovieListPage() {
    const [isEdited, setIsEdited] = useState<boolean>(false);
    const searchParams = useSearchParams();
    const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
    const [movies, setMovies] = useState();
    const [selectedMovie, setSelectedMovie] = useState();
    const params = useParams();

    const router = useRouter();

    const activeGenre = searchParams.get('activeGenre');
    const sortBy = searchParams.get('sortBy');
    const search = searchParams.get('search');


    const requestMovies = useCallback(async () => {
        const movies = await getMovies({
            ...(activeGenre && activeGenre !== listOfGenres[0] ? { filter: activeGenre } : {}),
            ...(sortBy ? { sortBy, sortOrder: 'desc' } : {}),
            ...(search ? { search, searchBy: 'title' } : {}),

        });
        setMovies(movies);
    }, [activeGenre, search, sortBy])


    function handleSelect(): void {
        setIsOpenDropDown(!isOpenDropDown);
    }

    function handleClickDetails(id): void {
        router.push(`/${id}`);
    }

    useEffect(() => {
        requestMovies();
    }, [requestMovies]);

    function handleOnCloseForm(event): void {
        event.stopPropagation();
        setIsEdited(false);
        router.push("/");
    }

    const requestMovieById = useCallback(async () => {
        if (params?.movieId) {
            const movie = await getMovieById(params.movieId as string);
            setSelectedMovie(movie);
        }
    }, [isEdited, params?.movieId]);

    useEffect(() => {
        requestMovieById();
    }, [requestMovieById]);

    function handleOnClose(): void {
        setIsEdited(false);
        router.push('/');
    }


    return (
        <div>
            {isEdited && selectedMovie && <ModalDialog title='EDIT MOVIE' onClose={handleOnCloseForm}><EditMovieForm
                movie={mapBackendMovieToUIMovie(selectedMovie)} handleOnClose={handleOnClose}
                setIsEdited={setIsEdited}/></ModalDialog>}
            <div className="result">
                <GenreSelect/>
                <SortControl onSelect={handleSelect}/>
            </div>
            {isOpenDropDown && <Dropdown/>}
            <ol className="moviesList">
                {Array.isArray(movies) && movies?.map((movie) =>
                    <MovieTile
                        key={movie.id}
                        movie={movie}
                        onClickDetails={() => handleClickDetails(movie.id)}
                        setIsEdited={setIsEdited}
                    />
                )}
            </ol>
            <Footer/>
        </div>
    )

}