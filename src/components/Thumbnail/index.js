import React from "react";
import {Link} from "react-router-dom";
//Styles
import {Image, TitleBox, Wrapper} from "./Thumbnail.styles";

const Thumbnail = ({image, movieId, movieName, clickable}) => (
    <Wrapper>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumbnail'/>
                <TitleBox>{movieName}</TitleBox>
            </Link>
        ) : (
            <>
            <Image src={image} alt='movie-thumbnail'/>
            <TitleBox>{movieName}</TitleBox>
            </>
        )}
    </Wrapper>
);

export default Thumbnail;