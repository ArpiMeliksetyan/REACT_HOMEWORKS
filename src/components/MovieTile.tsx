import React, { useState } from "react";
import PopupButton from "../assets/images/PopupButton.png"
import ContextMenuModal from "./ContextMenuModal";
import "../components/MovieTile.css"

export default function MovieTile({
                                      movie: {
                                          id,
                                          poster_path: imgUrl,
                                          title: movieName,
                                          release_date: releaseDate,
                                          genres: relevantGenres,
                                          overview: description,
                                          vote_average: rating,
                                          runtime: duration,
                                      },
                                      onClickDetails,
                                      setIsEdited,
                                      isEdited,
                                  }) {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const releaseYear = releaseDate.split('-')[0];
    const movie = {
        id,
        imgUrl,
        movieName,
        releaseDate,
        relevantGenres,
        description,
        rating,
        duration
    }

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
                            src={PopupButton.src}
                            alt="PopupButton"/>
                    </span>
                }
                {(isModalOpen) && <ContextMenuModal  movie={movie} setIsModalOpen={setIsModalOpen} setIsEdited={setIsEdited} isEdited={isEdited}/>}
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