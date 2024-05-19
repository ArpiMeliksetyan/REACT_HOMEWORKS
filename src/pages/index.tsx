import { GetServerSideProps } from 'next';
import MovieListPage from "../components/MovieListPage";
import MovieListPageHeader from "../components/MovieListPageHeader";
import "../index.css";
import { getMoviesData } from "../lib/getMoviesData";

interface IndexProps {
    initialMovies: any[];
    initialSelectedMovie: any | null;
    searchParams: {
        activeGenre?: string;
        sortBy?: string;
        search?: string;
    };
}

const HomePage: React.FC<IndexProps> = ({ initialMovies, initialSelectedMovie, searchParams }) => {
    return (
        <>
            <MovieListPageHeader searchParams={searchParams}/>
            <MovieListPage initialMovies={initialMovies} initialSelectedMovie={initialSelectedMovie} searchParams={searchParams} />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await getMoviesData(context);
    return { props: data };
};
export default HomePage;
