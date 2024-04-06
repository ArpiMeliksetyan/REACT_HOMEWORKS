import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm";
import '../components/Header.css';
import GenreSelect from "../components/GenreSelect";
import SortControl, { CurrentSelection } from "../components/SortControl";
import Dropdown from "../components/Dropdown";
import "./MovieListPage.css";
import MovieTile from "../components/MovieTile";
import MovieDetails from "../components/MovieDetails";
import Footer from "../components/Footer";
import { getAllMovies, getMoviesByActiveGenre, getMoviesByTitle, sortMoviesBy } from "../services/fetchData";

const listOfGenres: string[] = ["ALL", "ADVENTURE", "COMEDY", "HORROR", "CRIME"];
const sortingSearchMap = {
    'RELEASE DATE': 'release_date',
    'TITLE': 'title',
};

export default function MovieListPage() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentSelection, setCurrentSelection] = useState<string>("");
    const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
    const [activeGenre, setActiveGenre] = useState<string>(listOfGenres[0]);
    const [movieIndex, setMovieIndex] = useState<number>();
    const [movies, setMovies] = useState();

    const requestMoviesData = useCallback(async () => {
        const movies = await getAllMovies();
        setMovies(movies);
    }, []);

    const requestMoviesByGenre = useCallback(async (activeGenre) => {
        if (activeGenre === listOfGenres[0]){
            const movies = await getAllMovies();
            setMovies(movies);
        }
        else{
            const movies = await getMoviesByActiveGenre(activeGenre);
            setMovies(movies);
        }

    }, []);

    const requestMovesSortBy = useCallback(async(currentSelection)=> {
        const movies = await sortMoviesBy(sortingSearchMap[currentSelection]);
        setMovies(movies);
    },[])

    const onSearch = useCallback(async (value) => {
        const movies = await getMoviesByTitle(value);
        setMovies(movies);
    }, [])

    function handleClickDetails(index): void {
        setMovieIndex(index);
    }

    function handleSelect(): void {
        setIsOpenDropDown(!isOpenDropDown);
    }


    useEffect(() => {
        requestMoviesData();

    }, [requestMoviesData]);
    useEffect(() => {
        onSearch(searchQuery);
    }, [onSearch, searchQuery]);
    useEffect(() => {
        requestMoviesByGenre(activeGenre);
    }, [activeGenre, requestMoviesByGenre]);
    useEffect(()=> {
        console.log(currentSelection);
        requestMovesSortBy(currentSelection);
    },[currentSelection, requestMovesSortBy])

    return (
        <div>
            {movieIndex >= 0 ? <MovieDetails setMovieIndex={setMovieIndex} movie={movies[movieIndex]}/> :
                <div className="headerContainer">
                    <Header/>
                    <span className="headerText">FIND YOUR MOVIE</span>
                    <SearchForm
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        onSearch={onSearch}
                    />
                </div>
            }
            <div className="result">
                <GenreSelect
                    genreNames={listOfGenres}
                    activeGenre={activeGenre}
                    setActiveGenre={setActiveGenre}
                />
                <SortControl onSelect={handleSelect} currentSelection={currentSelection}/>
            </div>
            {isOpenDropDown && <Dropdown setCurrentSelection={setCurrentSelection}/>}
            <ol className="moviesList">
                {movies?.map((movie, index) =>
                    <MovieTile
                        key={index}
                        movie={movie}
                        onClickDetails={() => handleClickDetails(index)}/>)}
            </ol>
            <Footer/>

        </div>
    )

}