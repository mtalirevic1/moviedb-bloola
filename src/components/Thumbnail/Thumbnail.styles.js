import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 0;
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  animation: animateThumbnail 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumbnail {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const TitleBox = styled.div`
  width: 100%;
  max-width: 720px;
  border-radius: 0 0 10px 10px;
  min-height: 50px;
  height: fit-content;
  padding: 20px;
  font-size: var(--fontBig);
  background: var(--darkBlue);
  text-align: center;
  color: var(--white);
`;
