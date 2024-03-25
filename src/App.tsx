import "./App.css";
import React, { useState } from "react";
import GenreSelect from "./components/GenreSelect";
import MovieTile from "./components/MovieTile";
import { movies } from "./components/Movies";
import MovieDetails from "./components/MovieDetails"
import SortControl, { CurrentSelection } from "./components/SortControl";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const sortingTypes = ['RELEASE DATE', 'TITLE'];

function App() {
    const [movieIndex, setMovieIndex] = useState<number>();
    const [currentSelection, setCurrentSelection] = useState<CurrentSelection>(CurrentSelection.RELEASE_DATE);
    const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
    const listOfGenres: string[] = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

    function onSelect(): void {
        console.log("Select");
    }

    function handleClickDetails(index): void {
        console.log('1111');
        setMovieIndex(index);
    }

    function handleSelect(): void {
        setIsOpenDropDown(!isOpenDropDown);
    }


    return (
        <div role={"AppComponent"}>
            {movieIndex >= 0 ? <MovieDetails setMovieIndex={setMovieIndex} movie={movies[movieIndex]}/> : <Header/>}
            <div className="result">
                <GenreSelect
                    genreNames={listOfGenres}
                    selectedGenreName={listOfGenres[1]}
                    onSelect={onSelect}
                />
                <SortControl onSelect={handleSelect} currentSelection={currentSelection}/>
                {isOpenDropDown && <Dropdown setCurrentSelection={setCurrentSelection}/>}
            </div>
            <ol className="moviesList">
                {movies.map((movie, index) =>
                    <MovieTile
                        key={index}
                        movie={movie}
                        onClickDetails={() => handleClickDetails(index)}/>)}
            </ol>
            <Footer/>
        </div>
    );
}

export default App;
