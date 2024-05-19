import axios from "axios";

interface ISearchParams {
    sortBy?: string,
    sortOrder?: string,
    searchBy?: string,
    filter?: string,
    search?: string,
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

const getMovies = async ({ sortBy, sortOrder, searchBy, filter, search }: ISearchParams) => {
    const { data: { data } } = await axios({
        method: 'get',
        url: `http://localhost:4000/movies`,
        params: { sortBy, sortOrder, searchBy, filter, search }
    });

    return data;
}

const getMovieById = async ({ id }) => {
    const { data } = await axios({
        method: 'get',
        url: `http://localhost:4000/movies/${id}`,
    });

    return data;
}

const addMovie = async (movie: IBackendMovie) => {
    const { data } = await axios({
        method: 'post',
        url: `http://localhost:4000/movies`,
        data: movie,
    });

    return data;
}

const editMovie = async (movie: IBackendMovie) => {
    const { data } = await axios({
        method: 'put',
        url: `http://localhost:4000/movies`,
        data: movie,
    });
    return data;

}


export {
    getMovies,
    getMovieById,
    addMovie,
    editMovie,
    IBackendMovie,
};