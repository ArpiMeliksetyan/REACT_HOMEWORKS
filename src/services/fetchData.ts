import axios from "axios";

interface ISearchParams {
    sortBy?: string,
    sortOrder?: string,
    searchBy?: string,
    filter?: string,
    search?: string,
}

const getMovies = async ({sortBy, sortOrder, searchBy, filter, search}: ISearchParams) => {
    const { data: { data } } = await axios({
        method: 'get',
        url: `http://localhost:4000/movies`,
        params: { sortBy, sortOrder, searchBy, filter, search }
    });

    return data;
}

const getMovieById = async ({id}) => {
    const { data } = await axios({
        method: 'get',
        url: `http://localhost:4000/movies/${id}`,
    });

    return data;
}


export {
    getMovies,
    getMovieById
};