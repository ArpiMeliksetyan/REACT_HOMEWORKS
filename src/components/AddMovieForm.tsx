import "./MovieForm.css";
import MovieForm from "./MovieForm";


export default function AddMovieForm({handleOnClose, setIsAddedMovie}) {
    return (
        <MovieForm isAddMovie={true}  handleOnClose={handleOnClose} setIsAddedMovie={setIsAddedMovie} />
    )
}