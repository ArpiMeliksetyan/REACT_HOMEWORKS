import Header from "./Header/Header";
import SearchForm from "./SearchForm";
import { getMovies } from "../services/fetchData";
import React from "react";
import { useSearchParams } from "react-router-dom";

export default function MovieListPageHeader() {
    const [searchParams] = useSearchParams();

    return (
        <div className="headerContainer">
            <Header/>
            <span className="headerText">FIND YOUR MOVIE</span>
            <SearchForm
                onSearch={() => getMovies({ search: searchParams.get('search'), searchBy: 'title' })}
            />
        </div>
    )
}