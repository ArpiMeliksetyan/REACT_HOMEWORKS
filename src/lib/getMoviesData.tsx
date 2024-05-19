import { GetServerSidePropsContext } from 'next';
import { getMovies, getMovieById } from '../services/fetchData';

export async function getMoviesData(context: GetServerSidePropsContext) {
    const { query } = context;
    const searchParams = {
        activeGenre: query.activeGenre || '',
        sortBy: query.sortBy || '',
        search: query.search || '',
    };

    let initialMovies = [];
    let initialSelectedMovie = null;

    try {
        initialMovies = await getMovies({
            ...(searchParams.activeGenre ? { filter: searchParams.activeGenre } : {}),
            ...(searchParams.sortBy ? { sortBy: searchParams.sortBy, sortOrder: 'desc' } : {}),
            ...(searchParams.search ? { search: searchParams.search, searchBy: 'title' } : {}),
        });

        if (query.movieId) {
            initialSelectedMovie = await getMovieById(query.movieId as string);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return {
        initialMovies,
        initialSelectedMovie,
        searchParams,
    };
}
