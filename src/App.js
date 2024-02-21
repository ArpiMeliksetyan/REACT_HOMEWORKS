import './App.css';
import SearchForm from "./components/SearchForm";
import Counter from "./components/Counter";
import GenreSelect from "./components/GenreSelect";
import React from "react";
function App() {

    const listOfGenres = ['Comedy', 'Melodrama', 'Fantasy'];
    const initialValue = 0;

    function onSearch() {
        console.log('Search');
    }

    function onSelect() {
        console.log('Select');
    }



    return (
        <div>
            <Counter initialValue={initialValue}/>
            <SearchForm initialSearchQuery='What do you want to watch?' onSearch={onSearch}/>
            <GenreSelect genreNames={listOfGenres} selectedGenreName={listOfGenres[1]} onSelect={onSelect}/>
        </div>
    );
}

export default App;
