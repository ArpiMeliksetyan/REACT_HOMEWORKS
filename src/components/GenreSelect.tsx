import "./GenreSelect.css";
import React from "react";

interface IGenreSelect {
  genreNames: string[];
  selectedGenreName: string;
  onSelect: (value: string) => void;
}

export default function GenreSelect({
  genreNames,
  selectedGenreName,
  onSelect,
}: IGenreSelect) {
  function handleGenreButtonClick(): void {
    onSelect(selectedGenreName);
  }

  return (
    <div role={"GenreSelectComponent"}>
      {genreNames?.map((genreName, index) => (
        <li key={index}  className="genreList">
          <button
              data-cy= "genreButton"
            role={`${index}genreButton`}
            onClick={handleGenreButtonClick}
            className={
              selectedGenreName === genreName
                ? "genreButton selected"
                : "genreButton"
            }
          >
            {genreName}
          </button>
        </li>
      ))}
    </div>
  );
}
