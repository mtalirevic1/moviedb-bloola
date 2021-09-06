import {useState, useEffect} from "react";
import API from "../API";

//Also fetches series if isMovie is false
export const useMovieFetch = (movieId, isMovie) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);
                //Check if a movie or series has to be fetched
                const movie = isMovie ? await API.fetchMovie(movieId) : await API.fetchShow(movieId);
                const credits = isMovie ? await API.fetchMovieCredits(movieId) : await API.fetchShowCredits(movieId);
                //Get directors
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });

                setLoading(false);
            } catch (error) {
                setError(true);
            }
        }
        fetchMovie();
    }, [movieId, isMovie]);

    return {state, loading, error};
}
