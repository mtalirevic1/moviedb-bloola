import React from "react";
//Styles
import {Wrapper, Content, Text} from "./BannerImage.styles";

const BannerImage = ({image, title, isMovie}) => (
  <Wrapper image={image}>
      <Content>
          <Text>
              <h2>{`Top Rated ${isMovie ? 'Movie' : 'Series'}`}</h2>
              <h1>{title}</h1>
          </Text>
      </Content>
  </Wrapper>
);

export default BannerImage;
