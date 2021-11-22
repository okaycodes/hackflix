import styled from "styled-components"
import {Link as ReactRouterLink} from "react-router-dom"


export const Container = styled.div`
  display: flex:
  flex-direction: column;
  background: white;
  width: 100vw;
  border-bottom: solid 1px lightgrey;
  border-top: solid 1px lightgrey;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 340px;
  justify-content: center;
  align-items: center;
  margin: 140px auto;
`

export const Image = styled.img`
  margin-bottom: 1em;
  display: block;
  width: 100%;
  order: -2;
`;

export const Title = styled.h1`
  font-size: 23px;
  font-weight: 600;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 13px;
  text-transform: uppercase;
  order: -1;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 17px;
  font-weight: 400;
`;

export const Link = styled(ReactRouterLink)`
  width: 100%;
  color: white;
  background-color: #e50914;
  padding: 1em;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  border-radius: 3px;


  &:hover{
    background: #f40612;
  }
`;
