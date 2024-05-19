import React, { useCallback, useEffect, useState } from "react";
import netflixroulette from "../../assets/images/netflixroulette.png";
import ModalDialog from "../ModalDialog";
import { Outlet, useNavigate, useOutletContext, useParams } from "react-router-dom";
import CongratulationsModal from "../CongratulationsModal";
import { getMovieById } from "../../services/fetchData";
import { mapBackendMovieToUIMovie } from "../../helpers/mapper";

const Header = () => {
    const [selectedMovie, setSelectedMovie] = useState();
    const [isAddMovie, setIsAddMovie] = useState<boolean>(false);
    const [isAddedMovie, setIsAddedMovie] = useState<boolean>(false);
    const { isEdited, setIsEdited } = useOutletContext();
    const navigate = useNavigate();

    const movieId = window.location.pathname.split("/")[1];

    function handleOnClick(): void {
        setIsAddMovie(true);
        navigate('/new');
    }

    function handleOnClose(): void {
        setIsAddMovie(false);
        navigate('/');
    }

    function handleOnCloseCongratulations(): void {
        setIsAddedMovie(false);
        navigate('/');
    }

    function handleOnCloseForm(event): void {
        event.stopPropagation();
        setIsEdited(false);
        navigate("/");
    }

    const requestMovieById = useCallback(async () => {
        const movie = await getMovieById({ id: movieId });
        setSelectedMovie(movie);
    }, [movieId]);

    useEffect(() => {
        requestMovieById();
    }, [requestMovieById]);

    return (
        <div className="header">
            <img src={netflixroulette} className="headerLogo" alt="netflixroulette"/>
            <button onClick={handleOnClick} className="addButton">+ ADD MOVIE</button>
            {isAddMovie && <ModalDialog title='ADD MOVIE' onClose={handleOnClose}><Outlet
                context={{ handleOnClose, setIsAddedMovie }}/></ModalDialog>}
            {isAddedMovie && <ModalDialog title='CONGRATULATIONS !' isAdded={true}
                                          onClose={handleOnCloseCongratulations}><CongratulationsModal/></ModalDialog>}
            {isEdited && selectedMovie && <ModalDialog title='EDIT MOVIE' onClose={handleOnCloseForm}>
                <Outlet context={{ movie: mapBackendMovieToUIMovie(selectedMovie), handleOnClose, setIsEdited }}/>
            </ModalDialog>}
        </div>
    )

}

export default Header;