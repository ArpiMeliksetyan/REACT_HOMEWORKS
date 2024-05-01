import { createPortal } from "react-dom";
import "./ModalDialog.css"
import closeButton from "../assets/images/closeButton.png"
import React from "react";


export default function ModalDialog({ isDeleted, title, children, onClose, isAdded }) {


    return (
        <>
            {createPortal(
                <div
                    className={isDeleted ? "deleteModalDialog" : isAdded ? "congratulationsModalDialog" : "modalDialog"}>
                    <div className="dialogHeader">
                        <h1 className={isAdded ? 'congratulationsDialogTitle' : 'dialogTitle'}>{title}</h1>
                        <img className="modalCloseButton" onClick={onClose} src={closeButton} alt="closeButton"/>
                    </div>
                    {children}
                </div>,
                document.body)}
        </>
    )
}