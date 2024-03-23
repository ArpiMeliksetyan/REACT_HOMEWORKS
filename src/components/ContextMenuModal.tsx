import React from 'react';
import "./ContextMenuModal.css"
import closeButton from "../assets/images/closeButton.png"

export default function ContextMenuModal({ setIsModalOpen }) {
    function handleCloseButton() {
        setIsModalOpen(false);
    }

    return (
        <div className="contextMenu">
            <button
               className="closeButton"
                onClick={handleCloseButton}>
                <img className="closeButtonImg" src={closeButton} alt="X"/>
            </button>
            <div className="editAndDeleteContainer">
                <button className="contextMenuModalButton selectedContextMenuButton">Edit</button>
                <button className="contextMenuModalButton selectedContextMenuButton">Delete</button>
            </div>

        </div>
    );
};