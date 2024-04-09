import React from 'react';
import '../../App.css';

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img
                className="movie-card-image"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <div className="movie-card-content">
                <h2>{movie.title}</h2>
                <p><strong>Original Title:</strong> {movie.original_title}</p>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Genres:</strong> {movie.genres}</p>
                <p><strong>Duration:</strong> {movie.runtime}</p>
                <p><strong>Rating:</strong> {movie.vote_average}</p>
                <p><strong>Overview:</strong> {movie.overview}</p>
                <p><strong>Age Rating:</strong> {movie.adult ? 'For adults' : 'Not exclusively for adults'}</p>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Cast:</strong> {movie.cast}</p>
                <p><strong>Original Language:</strong> {movie.original_language}</p>
                <p><strong>Budget:</strong> {movie.budget}</p>
                {movie.trailer && (
                    <p>
                        <a href={movie.trailer} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
                    </p>
                )}
            </div>
        </div>
    );
}

export default MovieCard;
