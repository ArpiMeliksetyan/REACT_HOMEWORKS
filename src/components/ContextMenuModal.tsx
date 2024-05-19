import React from 'react';
import "./ContextMenuModal.css"
import closeButton from "../assets/images/closeButton.png"
import ModalDialog from "./ModalDialog";
import { useState } from "react";
import DeleteMovieForm from "./DeleteMovieForm";
import { useNavigate } from "react-router-dom";

export default function ContextMenuModal({ movie, setIsModalOpen, setIsEdited }) {

    const [isDeleted, setIsDeleted] = useState<boolean>(false);
    const navigate = useNavigate();

    function handleOnClose(event) {
        event.stopPropagation();
        setIsModalOpen(false);
    }

    function handleEditClick(event) {
        event.stopPropagation();
        setIsEdited(true);
        navigate(`/${movie.id}/edit`)
    }

    function handleDeleteClick(event) {
        event.stopPropagation();
        setIsDeleted(true);
    }

    function handleOnCloseForm(event): void {
        event.stopPropagation();
        setIsDeleted(false);
    }

    function handleConfirm(): void {
        console.log('CONFIRMED');
    }

    return (
        <div className="contextMenu">
            <button
                className="closeButton"
                onClick={handleOnClose}>
                <img className="closeButtonImg" src={closeButton} alt="X"/>
            </button>
            <div className="editAndDeleteContainer">
                <button onClick={handleEditClick} className="contextMenuModalButton selectedContextMenuButton">Edit
                </button>
                <button onClick={handleDeleteClick}
                        className="contextMenuModalButton selectedContextMenuButton">Delete
                </button>
            </div>
            {isDeleted &&
                <ModalDialog isDeleted='true' title='DELETE MOVIE' onClose={handleOnCloseForm}><DeleteMovieForm
                    movie={movie}
                    handleConfirm={handleConfirm}/></ModalDialog>}
        </div>
    );
};