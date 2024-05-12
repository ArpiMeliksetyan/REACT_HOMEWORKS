import axios from "axios";

interface ISearchParams {
    sortBy?: string,
    sortOrder?: string,
    searchBy?: string,
    filter?: string,
    search?: string | string[],
}

interface IBackendMovie {
    id?: string | number,
    poster_path: string,
    title: string,
    release_date: number,
    genres: string[],
    overview: string,
    vote_average: number,
    runtime: number,
}

const BASE_URL = 'http://localhost:4000/movies';

const getMovies = async ({ sortBy, sortOrder, searchBy, filter, search }: ISearchParams) => {
    try {
        const { data: { data } } = await axios.get(BASE_URL, {
            params: { sortBy, sortOrder, searchBy, filter, search }
        });
        return data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw new Error('Error fetching movies');
    }
};
const getMovieById = async (id: string | number) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${id}`);
        return data;
    } catch (error) {
        console.error(`Error fetching movie with ID ${id}:`, error);
        throw new Error(`Error fetching movie with ID ${id}`);
    }
};

const addMovie = async (movie: IBackendMovie) => {
    try {
        const { data } = await axios.post(BASE_URL, movie);
        return data;
    } catch (error) {
        console.error('Error adding movie:', error);
        throw new Error('Error adding movie');
    }
};

const editMovie = async (movie: IBackendMovie) => {
    try {
        const { data } = await axios.put(BASE_URL, movie);
        return data;
    } catch (error) {
        console.error('Error editing movie:', error);
        throw new Error('Error editing movie');
    }
};

// const getMovies = async ({ sortBy, sortOrder, searchBy, filter, search }: ISearchParams) => {
//     const { data: { data } } = await axios({
//         method: 'get',
//         url: `http://localhost:4000/movies`,
//         params: { sortBy, sortOrder, searchBy, filter, search }
//     });
//
//     return data;
// }

// const getMovieById = async ({ id }) => {
//     const { data } = await axios({
//         method: 'get',
//         url: `http://localhost:4000/movies/${id}`,
//     });
//
//     return data;
// }

// const addMovie = async (movie: IBackendMovie) => {
//     const { data } = await axios({
//         method: 'post',
//         url: `http://localhost:4000/movies`,
//         data: movie,
//     });
//
//     return data;
// }

// const editMovie = async (movie: IBackendMovie) => {
//     const { data } = await axios({
//         method: 'put',
//         url: `http://localhost:4000/movies`,
//         data: movie,
//     });
//     return data;
//
// }


export {
    getMovies,
    getMovieById,
    addMovie,
    editMovie,
    IBackendMovie,
};