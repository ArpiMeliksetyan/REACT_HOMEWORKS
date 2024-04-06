import React, { useState } from "react";
import netflixroulette from "../../assets/images/netflixroulette.png";
import ModalDialog from "../ModalDialog";
import MovieForm from "../MovieForm";

const  Header =  () => {
    const [isAddMovie, setIsAddMovie] = useState<boolean>(false);
    function handleOnClick():void {
        setIsAddMovie(true);
    }

    function handleOnClose():void {
        setIsAddMovie(false);
    }

    return (
        <div className="header">
            <img src={netflixroulette} className="headerLogo" alt="netflixroulette"/>
            <button onClick={handleOnClick} className="addButton">+ ADD MOVIE</button>
            {isAddMovie && <ModalDialog title='ADD MOVIE' onClose={handleOnClose}><MovieForm/></ModalDialog>}
        </div>
    )

}

export default Header;