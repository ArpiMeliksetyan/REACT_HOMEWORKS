import "./Header.css";
import SearchForm from "./SearchForm";
import React from "react";

export default function Header() {

    function onSearch(value: string): void {
        console.log(value);
    }


    return (
        <div className="headerContainer">

            <span className="headerText">FIND YOUR MOVIE</span>
            <SearchForm
                initialSearchQuery="What do you want to watch?"
                onSearch={onSearch}
            />
        </div>
    )
}