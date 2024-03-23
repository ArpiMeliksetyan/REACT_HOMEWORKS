import axios from "axios";

const getAllMovies = async () => {
    const { data: { data } } = await axios({
        method: 'get',
        url: `http://localhost:4000/movies`,
    });
    return data;
};

const getMoviesByTitle = async (value: string) => {
    const { data: {data} } = await axios({
        method: 'get',
        url: `http://localhost:4000/movies?search=${value}&searchBy=title`,
    });
    return data;
};

const getMoviesByActiveGenre = async (activeGenre: string) => {
    const currentGenre = activeGenre.charAt(0).toUpperCase() + activeGenre.slice(1).toLowerCase();
    const { data: {data} } = await axios({
        method: 'get',
        url: `http://localhost:4000/movies?filter=${[currentGenre, 'Drama']}`,
    });
    return data;
};

const sortMoviesBy = async (sortValue) => {
    const { data: {data} } = await axios({
        method: 'get',
        url: `http://localhost:4000/movies?sortBy=${sortValue}&sortOrder=desc`,
    });
    return data;
};


export {
    getAllMovies,
    getMoviesByTitle,
    getMoviesByActiveGenre,
    sortMoviesBy,
};