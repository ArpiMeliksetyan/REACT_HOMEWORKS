import { createPortal } from "react-dom";
import "./ModalDialog.css";
import closeButton from "../assets/images/closeButton.png";
import React from "react";

interface IModalDialog {
    isDeleted?: string;
    title: string;
    children: any;
    onClose: (event: any) => void;
    isAdded?: boolean;
}
export default function ModalDialog({ isDeleted, title, children, onClose, isAdded }: IModalDialog) {


    return (
        <>
            {createPortal(
                <div
                    className={isDeleted ? "deleteModalDialog" : isAdded ? "congratulationsModalDialog" : "modalDialog"}>
                    <div className="dialogHeader">
                        <h1 className={isAdded ? 'congratulationsDialogTitle' : 'dialogTitle'}>{title}</h1>
                        <img className="modalCloseButton" onClick={onClose} src={closeButton.src} alt="closeButton"/>
                    </div>
                    {children}
                </div>,
                document.body)}
        </>
    )
}