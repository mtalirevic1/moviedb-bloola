import React from "react";
//Components
import Thumbnail from "../Thumbnail";
//Config
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config";
//Image
import NoImage from "../../images/no_image.jpg"
//Styles
import {Wrapper, Content, Text} from "./MovieInfo.styles";

const MovieInfo = ({movie, fm}) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumbnail
                image={
                    movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                }
                clickable={false}
                alt="movie-thumbnail"
            />
            <Text>
                <h1>{fm ? movie.title : movie.name}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>
                <div className="rating-directors">
                    <div>
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        {fm && (<h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>)}
                        {fm && movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
);

export default MovieInfo;
