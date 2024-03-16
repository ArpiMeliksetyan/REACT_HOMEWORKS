import "./App.css";
import React from "react";
import SearchForm from "./components/SearchForm";
import Counter from "./components/Counter";
import GenreSelect from "./components/GenreSelect";

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
    <div role={"AppComponent"}>
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
