import styled from "styled-components"
import {Link as ReachRouterLink} from  "react-router-dom"

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({src}) => src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'});
  @media (min-width: 1100px) {
    ${({dontShowOnSmallViewPort})=> dontShowOnSmallViewPort && "background: none"}
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0 auto;
  height: 64px;
  padding: 50px 56px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${props => props.backgroundColor};
  padding: ${props =>  props.padding};

  a{
      display: flex;
  }

  @media (max-width: 950px) {
      padding: 50px 40px;
  }
`;

export const Logo = styled.img`
  height: ${props=> props.height ? props.height : "32px"};
  width: ${props=> props.width ? props.width : "108px"};
  margin-right: 40px;

  @media (min-width: 950px) {
     height: ${props=> props.height ? props.height : "44px"};
     width: ${props=> props.width ? props.width : "134px"};
  }

`;

export const Link = styled.p`
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
      background: #f40612;
  }
`;
