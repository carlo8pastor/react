import { formatRuntime, getLanguageFullName } from './formatting.js';
import '../App.css';
import '../index.css';


const API_KEY = 'd17f4fce1773d642f23563b737b4f7b3';
const BASE_URL = 'https://api.themoviedb.org/3';



const fetchAPI = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};


export const getMoviesWithDetails = async () => {
    const moviesWithDetails = [];


    for (let page = 1; page <= 2; page++) {

        const moviesResult = await fetchAPI(`${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`);


        if (moviesResult && moviesResult.results) {

            const detailPromises = moviesResult.results.map(async (movie) => {

                const details = await fetchAPI(`${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}`);
                const credits = await fetchAPI(`${BASE_URL}/movie/${movie.id}/credits?api_key=${API_KEY}`);
                const videos = await fetchAPI(`${BASE_URL}/movie/${movie.id}/videos?api_key=${API_KEY}`);

                const director = credits && credits.crew ? credits.crew.find(member => member.job === 'Director') : null;
                const trailer = videos && videos.results ? videos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube') : null;

                return {
                    ...movie,
                    director: director ? director.name : 'N/A',
                    cast: credits ? credits.cast.map(actor => actor.name).join(', ') : 'N/A',
                    genres: details ? details.genres.map(genre => genre.name).join(', ') : 'N/A',
                    runtime: details ? formatRuntime(details.runtime) : 'N/A',
                    vote_average: details ? `${details.vote_average}/10` : 'N/A',
                    original_language: details ? getLanguageFullName(details.original_language) : 'N/A',
                    budget: details && details.budget ? `$${details.budget.toLocaleString()}` : 'N/A',
                    trailer: trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null,
                    adult: details ? details.adult : false,
                };
            });
            const moviesDetails = await Promise.all(detailPromises);
            moviesWithDetails.push(...moviesDetails);
        }
    }
    return moviesWithDetails;
};
