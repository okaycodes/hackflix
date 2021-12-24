import styled from "styled-components"
import {Link as ReachRouterLink} from  "react-router-dom"


export const Container = styled.div`
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 1.5em 2em;

  @media (max-width: 740px) {
    padding: 1em;
  }
  @media (max-width: 500px) {
    padding: 0 1em;
  }
`;

export const Logo = styled.img`
  height: 45px;
  width: 167px;
  margin-right: 40px;

  @media (max-width: 500px) {
     height: 45px;
     width: 75px;
  }

`;

export const Link = styled.p`
`;

export const SignInLink = styled(ReachRouterLink)`
  display: block;
  height: fit-content;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  font-weight: 500;
  color: black;
  font-size: 20px;

  &:hover {
      text-decoration: underline;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const SignOutLink = styled(SignInLink)`
`;
