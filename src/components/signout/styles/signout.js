import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 430px;
  margin: 60px auto;
  background: white;
  padding: 2.5em;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Text = styled.p`
`;

export const ButtonLink = styled.button`
  font-size: 18px;
  width: 100%;
  display: flex;
  text-decoration: none;
  justify-content: center;
  background-color: #1e76e8;
  padding: 1em;
  border-radius: 2px;
  color: white;
`;
