import React from "react";
//Styles
import {Wrapper, Image} from "./Actor.styles";

//Shows an actor of a movie/series
const Actor = ({name, character, imageUrl}) => (
  <Wrapper>
      <Image src={imageUrl} alt='actor-thumb' />
      <h3>{name}</h3>
      <p>{character}</p>
  </Wrapper>
);

export default Actor;
