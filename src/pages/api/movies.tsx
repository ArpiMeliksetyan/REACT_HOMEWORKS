import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const BASE_URL = 'http://localhost:4000/movies';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body, query: { id } } = req;

    try {
        switch (method) {
            case 'GET':
                if (id) {
                    // Handle getMovieById
                    const movieByIdResponse = await axios.get(`${BASE_URL}/${id}`);
                    res.status(200).json(movieByIdResponse.data);
                } else {
                    // Handle getMovies
                    const { sortBy, sortOrder, searchBy, filter, search } = req.query;
                    const moviesResponse = await axios.get(BASE_URL, {
                        params: { sortBy, sortOrder, searchBy, filter, search }
                    });
                    res.status(200).json(moviesResponse.data.data);
                }
                break;
            case 'POST':
                // Handle addMovie
                const addResponse = await axios.post(BASE_URL, body);
                res.status(200).json(addResponse.data);
                break;
            case 'PUT':
                // Handle editMovie
                const editResponse = await axios.put(BASE_URL, body);
                res.status(200).json(editResponse.data);
                break;
            default:
                res.setHeader('Allow', ['GET', 'POST', 'PUT']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error handling movie request:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
