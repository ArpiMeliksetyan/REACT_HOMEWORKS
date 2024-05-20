import AddMovieForm from "../../components/AddMovieForm";
import MovieListPageHeader from "../../components/MovieListPageHeader";
import '../../pages/MovieListPage.css';
import "../../components/MovieForm.css";
import MovieListPage from "../../components/MovieListPage";
import "../../components/MovieForm.css";
import "../../components/ModalDialog.css";



export default function (){
    return (
        <MovieListPage>
            <MovieListPageHeader />
            <AddMovieForm />
        </MovieListPage>
     );
}