import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  align-items: center;
  /* direction prop is destructured below and returned */
  flex-direction: ${({direction})=>direction};
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  color: white;
  padding: 50px 5%;
  overflow: hidden;
  align-items: center;
  border-bottom: 8px solid #222;
  margin: 0 auto;

  `;

export const Container = styled.div`
  background-color: black;

  @media(max-width: 1000px){
    /* Item is destructured because it is a child of Container? */
    ${Item}:last-of-type h2{
      margin-bottom: 50px;
    }
  }

`;

export const Pane = styled.div`
    width: 50%;

    @media (max-width: 1000px){
      width: 100%;
      text-align: center;
    }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
      font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

   @media (max-width: 600px) {
       font-size: 18px;
   }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
