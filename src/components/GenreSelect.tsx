import "./GenreSelect.css";
import React from "react";
import { useSearchParams } from "react-router-dom";
export const listOfGenres: string[] = ["ALL", "ADVENTURE", "COMEDY", "HORROR", "CRIME"];

export default function GenreSelect() {

    const [searchParams, setSearchParams] = useSearchParams();

    function handleGenreButtonClick(genreName: string): void {
        setSearchParams((prev) => {
            prev.set("activeGenre", genreName);
            return prev;
        });
    }
    return (
        <div className="genreContainer" role={"GenreSelectComponent"}>
            {listOfGenres?.map((genreName, index) => (
                <li key={index} className="genreList">
                    <button
                        data-cy="genreButton"
                        role={`${index}genreButton`}
                        onClick={()=>handleGenreButtonClick(genreName)}
                        className={
                            (searchParams.get('activeGenre') ?? listOfGenres[0]) === genreName
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
