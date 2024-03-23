import React, { useState } from "react";
import "./SearchForm.css";

interface ISearchForm {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    onSearch: (value: string) => void;
}

export default function SearchForm({
                                       searchQuery,
                                       setSearchQuery,
                                       onSearch,
                                   }: ISearchForm) {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setSearchQuery(event.target.value);
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLElement>): void {
        if (event.key === "Enter") {
            onSearch(searchQuery);
        }
    }

    function handleSearchButtonClick(): void {
        onSearch(searchQuery);
    }

    return (
        <div
            className="searchFormContainer" role={"SearchFormComponent"}>
            <input
                role={"SearchInput"}
                className="searchInput searchInputText"
                type="text"
                value={searchQuery}
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
