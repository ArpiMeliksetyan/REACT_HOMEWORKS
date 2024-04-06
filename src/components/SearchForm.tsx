import React from "react";
import "./SearchForm.css";
import { useSearchParams } from "react-router-dom";

interface ISearchForm {
    onSearch: (value: string) => void;
}

export default function SearchForm({
                                       onSearch,
                                   }: ISearchForm) {

    const [searchParams, setSearchParams] = useSearchParams();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setSearchParams((prev) => {
            prev.set("search", event.target.value);
            if (!event.target.value){
                prev.delete("search");
            }
            return prev;
        });
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLElement>): void {
        if (event.key === "Enter") {
            onSearch(searchParams.get('search'));
        }
    }

    function handleSearchButtonClick(): void {
        onSearch(searchParams.get('search'));
    }

    return (
        <div
            className="searchFormContainer" role={"SearchFormComponent"}>
            <input
                role={"SearchInput"}
                className="searchInput searchInputText"
                type="text"
                value={searchParams.get('search')}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder='What do you want to watch?'
            />
            <button
                role={"SearchButton"}
                className="searchButton searchButtonText"
                onClick={handleSearchButtonClick}
            >
                SEARCH
            </button>
        </div>
    );
}
