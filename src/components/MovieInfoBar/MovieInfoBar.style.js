import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--darkBlue);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  
  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-justify: inter-word;
    background: var(--medBlue);
    border-radius: 20px;
    margin: 0 20px;
    flex: 1;
    padding: 10px;
    :first-child{
      margin-left: 0;
    }
    
    :last-child{
      margin-right: 0;
    }
    
    @media screen and (max-width: 768px){
      display: block;
      
      .column{
        margin: 20px 0;
      }
    }
  }
`;
