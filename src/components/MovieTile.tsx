import React, { useState } from "react";
import PopupButton from "../assets/images/PopupButton.png"
import ContextMenuModal from "./ContextMenuModal";
import "../components/MovieTile.css"
import { IMovie } from "./Movies";


export interface IMovieTile {
    movie: IMovie,
    onClickDetails: () => void,

}

export default function MovieTile({
                                      movie: { imgUrl, movieName, releaseYear, relevantGenres },
                                      onClickDetails
                                  }: IMovieTile) {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function handleOnMouseOver() {
        setIsFocused(true);
    }

    function handleOnMouseOut() {
        setIsFocused(false);
    }

    function handlePopupClick(event) {
        event.stopPropagation();
        setIsModalOpen(true);
    }

    return (
        <li className="movieButtonContainer">
            <button
                className="movieTileButton"
                onMouseOver={handleOnMouseOver}
                onMouseOut={handleOnMouseOut}
                onClick={onClickDetails}>

                <img
                    className="movieImage"
                    src={imgUrl}
                    alt={movieName}/>
                {isFocused &&
                    <span
                        className="popupButton"
                        onClick={handlePopupClick}>
                        <img
                            className="popupImagine"
                            src={PopupButton}
                            alt="PopupButton"/>
                    </span>
                }
                {(isModalOpen) && <ContextMenuModal setIsModalOpen={setIsModalOpen}/>}
                <div className="movieDetails">
                    <span className="movieName">{movieName}</span>
                    <span className="movieReleaseYear">{releaseYear}</span>
                </div>
                <span className="relevantGenre">
                    {relevantGenres?.join(', ')}
                </span>
            </button>
        </li>
    )
}