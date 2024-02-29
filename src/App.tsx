import "./App.css";
import SearchForm from "./components/SearchForm";
import Counter from "./components/Counter";
import GenreSelect from "./components/GenreSelect";
import React from "react";
function App() {
  const listOfGenres: string[] = ["Comedy", "Melodrama", "Fantasy"];
  const initialValue: number = 0;

  function onSearch(value: string): void {
    console.log(value);
  }

  function onSelect(): void {
    console.log("Select");
  }

  return (
    <div>
      <Counter initialValue={initialValue} />
      <SearchForm
        initialSearchQuery="What do you want to watch?"
        onSearch={onSearch}
      />
      <GenreSelect
        genreNames={listOfGenres}
        selectedGenreName={listOfGenres[1]}
        onSelect={onSelect}
      />
    </div>
  );
}

export default App;
