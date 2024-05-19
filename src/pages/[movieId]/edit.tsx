import MovieListPage from "../../components/MovieListPage";
import MovieListPageHeader from "../../components/MovieListPageHeader";
import '../../pages/MovieListPage.css';
import '../../components/MovieForm.css';
import '../../components/ModalDialog.css';
import { GetServerSideProps } from "next";
import { getMoviesData } from "../../lib/getMoviesData";

export default function ({searchParams, initialMovies, initialSelectedMovie}) {
    return (
        <>
            <MovieListPageHeader searchParams={searchParams}/>
            <MovieListPage searchParams={searchParams} initialMovies={initialMovies} initialSelectedMovie={initialSelectedMovie}/>
        </>

    );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await getMoviesData(context);
    return { props: data };
};