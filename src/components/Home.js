//Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config"
//Components
import BannerImage from "./BannerImage";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import SpinCircle from "./SpinCircle";
import SearchBar from "./SearchBar"
import Button from "./Button";
//Hook
import {useHomeFetch} from "../hooks/useHomeFetch";

//Image
import NoImage from "../images/no_image.jpg";

const Home = ({fetchingMovies, setFetchingMovies}) => {

    const {state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch(fetchingMovies);

    if (error) return <div>Something went wrong ...</div>;

    return (
        <>
            {state.results[0] ?
                ((!searchTerm || (searchTerm && searchTerm.length<3)) &&
                    <BannerImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                        title={state.results[0].original_title}
                        text={state.results[0].overview}
                    />
                ) : null
            }
            <SearchBar setSearchTerm={setSearchTerm} fm={fetchingMovies}/>
            <Button text='Movies' callback={() => setFetchingMovies(true)}/>
            <Button text='Series' callback={() => setFetchingMovies(false)}/>
            <Grid
                header={state.results.length > 0 ?
                    (searchTerm ?
                        (searchTerm.length < 3 ?
                            `Top 30 ${fetchingMovies ? 'movies' : 'series'}` :
                            `Search results for: "${searchTerm}"`)
                        : `Top 30 ${fetchingMovies ? 'movies' : 'series'}`)
                    : (loading) ?
                        ''
                        : 'No results'}>
                {state.results.map(movie => (
                    <Thumbnail
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId={movie.id}
                        movieName={fetchingMovies ? movie.title : movie.name}
                    />
                ))}
            </Grid>
            {loading && <SpinCircle/>}
            {state.page < state.total_pages && !loading && searchTerm && (
                <Button text='Load More' callback={() => setIsLoadingMore(true)}/>
            )}
        </>
    );
};

export default Home;