import "./MovieForm.css";
import MovieForm from "./MovieForm";
import { useOutletContext } from "react-router-dom";


export default function EditMovieForm() {
    return (
        <MovieForm isAddMovie={false}/>
    )
}