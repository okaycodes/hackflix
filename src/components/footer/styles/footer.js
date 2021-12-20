import styled from "styled-components"


export const Container = styled.div`
  background-color: ${props=>props.backgroundColor};
  /* position: absolute;
  width: 100%;
  bottom: 0; */
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  color: #757575;
  max-width: 1100px;
  padding: ${props => props.padding ? props.padding : "5em 3em"};
  margin: 0 auto;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: space-between;
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 1em;
`;

export const Item = styled.div`
  margin: 1em 0;
`;

export const Link = styled.a`
  display: flex;
  text-decoration: none;
  color: inherit;
  margin-bottom: 1em;
  cursor: pointer;
  font-size: 14px;

  &:hover{
    text-decoration: underline;
  }
`;

export const Location = styled.p`
  margin: 0;
`;
