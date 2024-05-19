import Header from "./Header/Header";
import SearchForm from "./SearchForm";
import { getMovies } from "../services/fetchData";
import React, { useCallback } from "react";

interface MovieListPageHeaderProps {
    searchParams: {
        activeGenre?: string;
        sortBy?: string;
        search?: string;
    };
}

const MovieListPageHeader: React.FC<MovieListPageHeaderProps> = ({ searchParams }) => {
    const handleSearch = useCallback(async (searchTerm: string) => {
        await getMovies({ search: searchTerm, searchBy: 'title' });
    }, []);



    return (
        <div className="headerContainer">
            <Header/>
            <span className="headerText">FIND YOUR MOVIE</span>
            <SearchForm
                onSearch={handleSearch}
                searchParams={searchParams}
            />
        </div>
    )
}

export default MovieListPageHeader;