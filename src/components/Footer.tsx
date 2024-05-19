import netflixroutlette from "../assets/images/netflixroulette.png";
import "./Footer.css";
import React from "react";

export default function Footer(){
    return (
        <div className='footer'>
            <img src={netflixroutlette.src} alt="netflixroutlette"/>
        </div>
    )
}