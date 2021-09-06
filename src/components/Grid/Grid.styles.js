import styled from "styled-components";

export const Wrapper = styled.div`
  
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;
  
  h1 {
    color: var(--medGrey);
    text-align: center;
    font-size: var(--fontVeryBig);
    @media screen and(max-width: 768px){
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: 25% 25% 25%;
  grid-gap: 2rem;

  @media screen and (max-width: 768px){
    display: block;
    grid-template-columns: auto;
  }
`;