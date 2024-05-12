import MovieListPage from "../../components/MovieListPage";
import MovieListPageHeader from "../../components/MovieListPageHeader";
import '../../pages/MovieListPage.css';
import '../../components/MovieForm.css';
import '../../components/ModalDialog.css';

export default function () {
    return (
        <>
            <MovieListPageHeader/>
            <MovieListPage/>
        </>

    );
}