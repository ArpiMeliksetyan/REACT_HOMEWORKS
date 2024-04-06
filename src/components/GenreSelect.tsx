import "./GenreSelect.css";
import React from "react";

interface IGenreSelect {
    genreNames: string[];
    selectedGenreName: string;
}

export default function GenreSelect({
                                        genreNames,
                                        setActiveGenre,
                                        activeGenre
                                    }: IGenreSelect) {
    function handleGenreButtonClick(genreName: string): void {
        setActiveGenre(genreName);
    }
    return (
        <div className="genreContainer" role={"GenreSelectComponent"}>
            {genreNames?.map((genreName, index) => (
                <li key={index} className="genreList">
                    <button
                        data-cy="genreButton"
                        role={`${index}genreButton`}
                        onClick={()=>handleGenreButtonClick(genreName)}
                        className={
                            activeGenre === genreName
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
