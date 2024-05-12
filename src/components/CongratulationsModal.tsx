import Success from "../assets/images/Success.png";
import React from "react";
import "../components/CongratulationsModal.css"


export default function CongratulationsModal() {
    return (
        <>
            <img className="successSymbol" src={Success.src} alt="V"/>
            <div className='congratulationText'>
                The Movie has been added to <br/>  database successfully
            </div>
        </>
    )
}