import "./DeleteMovieForm.css"
import React from "react";

interface IDeleteMovieForm {
    handleConfirm: () => void;
    movie: any;
}

export default function DeleteMovieForm({ handleConfirm, movie }: IDeleteMovieForm) {

    return (
        <>
            <div>
                <h3 className="deleteConfirmation">Are you sure you want to delete this movie?</h3>
            </div>
            <div className='deleteButtonContainer'>
                <button className="deleteButton" onClick={handleConfirm}>CONFIRM</button>
            </div>
        </>
    )
}