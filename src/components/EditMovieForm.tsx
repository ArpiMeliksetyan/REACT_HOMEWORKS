import "./MovieForm.css";
import MovieForm from "./MovieForm";


export default function EditMovieForm({movie, setIsEdited, handleOnClose}) {
    return (
        <MovieForm isAddMovie={false} movie={movie} handleOnClose={handleOnClose} setIsEdited={setIsEdited}/>
    )
}