import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const ActiveWrapper = styled(Wrapper)`
  background: var(--medGrey);
  color: var(--darkGrey);
  :hover{
    opacity: 1;
  }
  cursor: auto;
`;