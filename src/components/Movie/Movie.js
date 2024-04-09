import React from 'react';
import useMovies from '../../hooks/useMovies';
import MovieCard from './MovieCard';
import '../../App.css';

function Movie() {
    const movieList = useMovies();

    return (
        <div className="movie-list">
            {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default Movie;
