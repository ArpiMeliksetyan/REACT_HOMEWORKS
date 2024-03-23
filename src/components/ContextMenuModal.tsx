import React from 'react';
import "./ContextMenuModal.css"
import closeButton from "../assets/images/closeButton.png"
import MovieForm from "./MovieForm";
import ModalDialog from "./ModalDialog";
import { useState } from "react";
import DeleteMovieForm from "./DeleteMovieForm";

export default function ContextMenuModal({ movie, setIsModalOpen }) {

    const [isEdited, setIsEdited] = useState<boolean>(false);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);

    function handleCloseButton(event) {
        event.stopPropagation();
        setIsModalOpen(false);
    }

    function handleEditClick(event) {
        event.stopPropagation();
        setIsEdited(true);
    }

    function handleDeleteClick(event) {
        event.stopPropagation();
        setIsDeleted(true);
    }

    function handleOnCloseForm(event): void {
        event.stopPropagation();
        setIsEdited(false);
        setIsDeleted(false);
    }

    function handleSubmit(): void {
        console.log('SUBMITTED');
    }

    function handleConfirm(): void {
        console.log('CONFIRMED');
    }

    return (
        <div className="contextMenu">
            <button
                className="closeButton"
                onClick={handleCloseButton}>
                <img className="closeButtonImg" src={closeButton} alt="X"/>
            </button>
            <div className="editAndDeleteContainer">
                <button onClick={handleEditClick} className="contextMenuModalButton selectedContextMenuButton">Edit
                </button>
                <button onClick={handleDeleteClick}
                        className="contextMenuModalButton selectedContextMenuButton">Delete
                </button>
            </div>

            {isEdited && <ModalDialog title='EDIT MOVIE' onClose={handleOnCloseForm}><MovieForm movie={movie}
                                                                                                handleSubmit={handleSubmit}/></ModalDialog>}
            {isDeleted &&  <ModalDialog  isDeleted='true' title='DELETE MOVIE' onClose={handleOnCloseForm}><DeleteMovieForm movie={movie}
                                                                                                  handleConfirm={handleConfirm}/></ModalDialog>}
        </div>
    );
};