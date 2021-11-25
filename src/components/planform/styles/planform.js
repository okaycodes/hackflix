import styled from "styled-components"


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: white;
  color: black;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 auto;
  width: 90%;
  max-width: 946px;

`;

export const Item = styled.div`
  /* border: solid magenta; */
  display: flex;
  flex-direction: column;
  text-align: center;
  &:nth-child(1){
    text-align: left;
  }

  &:nth-child(1):nth-child(1){
    background: none;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;

export const Row = styled.p`
  border-bottom: solid 1px grey;
  &:nth-child(5){
    border-bottom: none;
  }
`;

export const Icon = styled.img`
  filter: invert(11%) sepia(74%) saturate(6242%) hue-rotate(352deg) brightness(104%) contrast(104%);
`;
