import {useState, useEffect} from "react";
//API
import API from "../API";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = (fetchingMovies, searchTerm) => {

    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            //fetchingMovies decides if we search for movies or series
            let movies;
            if (searchTerm) {
                movies = fetchingMovies ? await API.fetchMovies(searchTerm, page) : await API.fetchShows(searchTerm, page);
            } else {
                movies = fetchingMovies ? await API.fetchMovies(searchTerm, 1) : await API.fetchShows(searchTerm, 1);
                const movies2 = fetchingMovies ? await API.fetchMovies(searchTerm, 2) : await API.fetchShows(searchTerm, 2);
                movies.results.push(...movies2.results.filter((movie, index) => index < 10));
            }
            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));

        } catch (e) {
            setError(true);
        }
        setLoading(false);
    }

    //Initial render and search
    useEffect(() => {
        const search = searchTerm && searchTerm.length>2 ? searchTerm : '';
        setState(initialState);
        fetchMovies(1, search);
    }, [searchTerm]);

    //Render when switching from movies to series
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [fetchingMovies]);

    //Load More
    useEffect(() => {
        if (!isLoadingMore) return;
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    return {state, loading, error, setIsLoadingMore};
};
