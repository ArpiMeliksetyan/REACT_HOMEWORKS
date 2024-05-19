import AddMovieForm from "../../components/AddMovieForm";
import MovieListPageHeader from "../../components/MovieListPageHeader";
import '../../pages/MovieListPage.css';
import "../../components/MovieForm.css";
import MovieListPage from "../../components/MovieListPage";
import "../../components/MovieForm.css";
import "../../components/ModalDialog.css";
import { GetServerSideProps } from "next";
import { getMovieById, getMovies } from "../../services/fetchData";



const AddMovie = ({ initialMovies, initialSelectedMovie, searchParams }) => {
    return (
        <MovieListPage initialMovies={initialMovies} initialSelectedMovie={initialSelectedMovie} searchParams={searchParams}>
            <MovieListPageHeader searchParams={searchParams}/>
            <AddMovieForm />
        </MovieListPage>
     );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const searchParams = {
        activeGenre: query?.activeGenre || '',
        sortBy: query?.sortBy || '',
        search: query?.search || '',
    };

    let initialMovies = [];
    let initialSelectedMovie = null;

    try {
        initialMovies = await getMovies({
            ...(searchParams?.activeGenre ? { filter: searchParams?.activeGenre } : {}),
            ...(searchParams?.sortBy ? { sortBy: searchParams?.sortBy, sortOrder: 'desc' } : {}),
            ...(searchParams?.search ? { search: searchParams?.search, searchBy: 'title' } : {}),
        });

        if (query.movieId) {
            initialSelectedMovie = await getMovieById(query.movieId as string);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return {
        props: {
            initialMovies,
            initialSelectedMovie,
            searchParams,
        },
    };
};

export default AddMovie;