import "./GenreSelect.css";
import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const listOfGenres: string[] = ["ALL", "ADVENTURE", "COMEDY", "HORROR", "CRIME"];

export default function GenreSelect() {

    // const [searchParams, setSearchParams] = useSearchParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();


    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    );

    function handleGenreButtonClick(genreName: string): void {
        router.push(pathname + '?' + createQueryString("activeGenre", genreName))

        // setSearchParams((prev) => {
        //     prev.set("activeGenre", genreName);
        //     return prev;
        // });
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
