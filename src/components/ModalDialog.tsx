import { createPortal } from "react-dom";
import "./ModalDialog.css"
import closeButton from "../assets/images/closeButton.png"

export default function ModalDialog({ isDeleted, title, children, onClose }) {
    return (
        <>
            {createPortal(
                <div className={isDeleted ? "deleteModalDialog" : "modalDialog"}>
                    <div className="dialogHeader">
                        <h1 className='dialogTitle'>{title}</h1>
                        <img className="modalCloseButton" onClick={onClose} src={closeButton} alt="closeButton"/>
                    </div>
                    {children}
                </div>,
                document.body)}
        </>
    )
}