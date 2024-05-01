import React, { useState, useEffect, useCallback } from "react";
import '../components/Header.css';
import GenreSelect, { listOfGenres } from "../components/GenreSelect";
import SortControl from "../components/SortControl";
import Dropdown from "../components/Dropdown";
import "./MovieListPage.css";
import MovieTile from "../components/MovieTile";
import Footer from "../components/Footer";
import { getMovies } from "../services/fetchData";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";


export default function MovieListPage() {
    const [isEdited, setIsEdited] = useState<boolean>(false);
    const [searchParams] = useSearchParams();
    const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
    const [movies, setMovies] = useState();
    const navigate = useNavigate();

    const activeGenre = searchParams.get('activeGenre');
    const sortBy = searchParams.get('sortBy');
    const search = searchParams.get('search');


    const requestMovies = useCallback(async () => {
        const movies = await getMovies({
            ...(activeGenre && activeGenre !== listOfGenres[0] ? { filter: searchParams.get('activeGenre') } : {}),
            ...(sortBy ? { sortBy: searchParams.get('sortBy'), sortOrder: 'desc' } : {}),
            ...(search ? { search: searchParams.get('search'), searchBy: 'title' } : {}),

        });
        setMovies(movies);
    }, [searchParams])


    function handleSelect(): void {
        setIsOpenDropDown(!isOpenDropDown);
    }

    function handleClickDetails(id): void {
        navigate(`/${id}`)
    }

    useEffect(() => {
        requestMovies();
    }, [requestMovies])

    return (
        <div>
            <Outlet context={{movies, isEdited, setIsEdited}}/>
            <div className="result">
                <GenreSelect/>
                <SortControl onSelect={handleSelect}/>
            </div>
            {isOpenDropDown && <Dropdown/>}
            <ol className="moviesList">
                {movies?.map((movie) =>
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