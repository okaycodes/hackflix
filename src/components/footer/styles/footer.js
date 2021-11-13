import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #757575;
  max-width: 1100px;
  padding: 2em 3em;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-self: center;
  justify-items: space-between;
`;

export const Title = styled.div`
  font-size: 16px;
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
`;

export const Location = styled.p`
  margin: 0;
`;
