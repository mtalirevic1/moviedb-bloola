import React from "react";
import {useParams} from "react-router-dom"
//Config
import {IMAGE_BASE_URL, POSTER_SIZE} from "../config";
//Components
import Grid from "./Grid";
import SpinCircle from "./SpinCircle"
import BreadCrumb from "./BreadCrumb"
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from "./Actor";
//Hook
import {useMovieFetch} from "../hooks/useMovieFetch";
//Image
import NoImage from '../images/no_image.png';

const Movie = ({fetchingMovies: fm}) => {
    const {movieId} = useParams();
    const {state: movie, loading, error} = useMovieFetch(movieId, fm);

    if (loading) return <SpinCircle/>
    if (error) return <div>Something went wrong...</div>;

    return (
        <>
            <BreadCrumb movieTitle={fm ? movie.original_title : movie.name}/>
            <MovieInfo movie={movie} fm={fm}/>
            {fm && (<MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />)}
            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                    />
                ))}
            </Grid>
        </>
    )
};

export default Movie;
