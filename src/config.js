// Configuration for TMDB API

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

const MOVIE_SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const MOVIE_TOP_RATED_BASE_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;

const TV_SEARCH_BASE_URL = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=`;
const TV_TOP_RATED_BASE_URL = `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US`;

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
    MOVIE_SEARCH_BASE_URL,
    MOVIE_TOP_RATED_BASE_URL,
    TV_SEARCH_BASE_URL,
    TV_TOP_RATED_BASE_URL,
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
};
