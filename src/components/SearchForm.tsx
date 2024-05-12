import React, { useCallback } from "react";
import "../components/SearchForm.css";
import { useSearchParams, usePathname, useRouter, } from "next/navigation";

interface ISearchForm {
    onSearch: (value: string) => void;
}

export default function SearchForm({
                                       onSearch,
                                   }: ISearchForm) {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            if (!value){
                params.delete(name);
                return '';
            }

            params.set(name, value);
            return params.toString();

        },
        [searchParams]
    );

    function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const newSearchParams = createQueryString("search", event.target.value);
        router.push(pathname + newSearchParams? ('?' + newSearchParams) : '');

        // setSearchParams((prev) => {
        //     prev.set("search", event.target.value);
        //     if (!event.target.value){
        //         prev.delete("search");
        //     }
        //     return prev;
        // });
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
