import {
    MOVIE_SEARCH_BASE_URL,
    MOVIE_TOP_RATED_BASE_URL,
    TV_SEARCH_BASE_URL,
    TV_TOP_RATED_BASE_URL,
    API_URL,
    API_KEY
} from './config';

const apiSettings = {
    fetchMovies: async (searchTerm, page) => {
        const endpoint = searchTerm
            ? `${MOVIE_SEARCH_BASE_URL}${searchTerm}&page=${page}`
            : `${MOVIE_TOP_RATED_BASE_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchMovie: async movieId => {
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        return await (await fetch(endpoint)).json();
    },
    fetchMovieCredits: async (movieId) => {
        const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        return await (await fetch(creditsEndpoint)).json();
    },
    fetchShows: async (searchTerm, page) => {
        const endpoint = searchTerm
            ? `${TV_SEARCH_BASE_URL}${searchTerm}&page=${page}`
            : `${TV_TOP_RATED_BASE_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchShow: async showID => {
        const endpoint = `${API_URL}tv/${showID}?api_key=${API_KEY}`;
        return await (await fetch(endpoint)).json();
    },
    fetchShowCredits: async (showId) => {
        const creditsEndpoint = `${API_URL}tv/${showId}/credits?api_key=${API_KEY}`;
        return await (await fetch(creditsEndpoint)).json();
    },
}

export default apiSettings;
