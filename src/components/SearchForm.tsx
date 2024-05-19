import React, { useCallback } from "react";
import "../components/SearchForm.css";
import { useRouter } from "next/router";

interface ISearchForm {
    onSearch: (value: string) => void;
    searchParams: {
        search?: string;
    };
}

const SearchForm: React.FC<ISearchForm> = ({ onSearch, searchParams }) => {
    const router = useRouter();

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        const newSearchParams = new URLSearchParams(router.query as any);
        if (searchValue) {
            newSearchParams.set("search", searchValue);
        } else {
            newSearchParams.delete("search");
        }

        router.replace({
            pathname: router.pathname,
            query: newSearchParams.toString() ? newSearchParams : undefined as any,
        });

        onSearch(searchValue);
    }, [router, onSearch]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (typeof window !== "undefined") {
            event.preventDefault();
            const form = event.currentTarget;
            const searchInput = form.querySelector('input[name="search"]') as HTMLInputElement;
            const searchTerm = searchInput.value;

            const url = new URL(window.location.href);
            url.searchParams.set('search', searchTerm);
            window.history.pushState({}, '', url.toString());
            onSearch(searchTerm);

        }
    };

    return (
        <form action="/" method="GET" onSubmit={handleSubmit} className="searchFormContainer" role="SearchFormComponent">
            <input
                role="SearchInput"
                className="searchInput searchInputText"
                type="text"
                name="search"
                defaultValue={searchParams.search || ''}
                onChange={handleChange}
                placeholder="What do you want to watch?"
            />
            <button
                role="SearchButton"
                className="searchButton searchButtonText"
                type="submit"
            >
                SEARCH
            </button>
        </form>
    );
};

export default SearchForm;

