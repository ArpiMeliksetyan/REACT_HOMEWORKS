import MovieListPage from "../../components/MovieListPage";
import MovieDetails from "../../components/MovieDetails";
import { GetServerSideProps } from "next";
import { getMoviesData } from "../../lib/getMoviesData";


export default function ({searchParams, initialMovies, initialSelectedMovie}) {
    return (
        <> <MovieDetails/><MovieListPage initialMovies={initialMovies} initialSelectedMovie={initialSelectedMovie} searchParams={searchParams}/> </>
    );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await getMoviesData(context);
    return { props: data };
};