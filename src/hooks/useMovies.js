import { useEffect, useState } from 'react';
import { getMoviesWithDetails } from '../utils/movieUtils';


function useMovies() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getMoviesWithDetails();
            setMovieList(movies);
        };

        fetchMovies();
    }, []);

    return movieList;
}

export default useMovies;
