import styled from "styled-components"

export const Container = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom: 8px solid #222;
  padding: 150px 45px;
`;

export const Title = styled.h1`
  max-width: 600px;
  font-size: 46px;
  margin: auto;
  margin-bottom: .5em;

  @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  margin: auto;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const Text = styled.p`
`
