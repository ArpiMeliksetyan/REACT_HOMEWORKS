import React, { useEffect, useState } from "react";
import netflixroulette from "../../assets/images/netflixroulette.png";
import ModalDialog from "../ModalDialog";
import CongratulationsModal from "../CongratulationsModal";
import {  useRouter } from "next/navigation";
import AddMovieForm from "../AddMovieForm";
import '../Header.css';

const Header = () => {
    const [isAddMovie, setIsAddMovie] = useState<boolean>(false);
    const [isAddedMovie, setIsAddedMovie] = useState<boolean>(false);
    const router = useRouter();


    function handleOnClick(): void {
        setIsAddMovie(true);
    }

    useEffect(() => {
        if (isAddMovie) {
            router.push('/new');
        }
    }, []);


    function handleOnClose(): void {
        setIsAddMovie(false);
        router.push('/');
    }

    function handleOnCloseCongratulations(): void {
        setIsAddedMovie(false);
        router.push('/');
    }

    return (
        <div className="header">
            <img src={netflixroulette.src} className="headerLogo" alt="netflixroulette"/>
            <button onClick={handleOnClick} className="addButton">+ ADD MOVIE</button>
            {isAddMovie &&
                <ModalDialog title='ADD MOVIE' onClose={handleOnClose}><AddMovieForm handleOnClose={handleOnClose}
                                                                                     setIsAddedMovie={setIsAddedMovie}/></ModalDialog>}
            {isAddedMovie && <ModalDialog title='CONGRATULATIONS !' isAdded={true}
                                          onClose={handleOnCloseCongratulations}><CongratulationsModal/></ModalDialog>}
        </div>
    )

}

export default Header;