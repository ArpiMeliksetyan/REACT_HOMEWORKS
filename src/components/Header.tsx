import "./Header.css";
import SearchForm from "./SearchForm";
import netflixroulette from "../assets/images/netflixroulette.png"
import ModalDialog from "./ModalDialog";
import MovieForm from "./MovieForm";
import React, {useState} from "react";

export default function Header() {
    const [isAddMovie, setIsAddMovie] = useState<boolean>(false);

    function onSearch(value: string): void {
        console.log(value);
    }

    function handleOnClick():void {
        setIsAddMovie(true);
    }

    function handleOnClose():void {
        setIsAddMovie(false);
    }

    return (
        <div className="headerContainer">
            <div className="header">
                <img src={netflixroulette} className="headerLogo" alt="netflixroulette"/>
                <button onClick={handleOnClick} className="addButton">+ ADD MOVIE</button>
                {isAddMovie && <ModalDialog title='ADD MOVIE' onClose={handleOnClose}><MovieForm/></ModalDialog>}
            </div>
            <span className="headerText">FIND YOUR MOVIE</span>
            <SearchForm
                initialSearchQuery="What do you want to watch?"
                onSearch={onSearch}
            />
        </div>
    )
}