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
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 150px;
  text-align: ${props=>props.textAlign};
  margin-top: ${props=>props.marginTop};
  max-width: ${props=>props.maxWidth || "340px"};
`;

export const Image = styled.img`
  margin-bottom: 1em;
  display: block;
  width: 100%;
  order: -2;
`;

export const Icon = styled.img`
  display: inline-block;
  filter: invert(11%) sepia(74%) saturate(6242%) hue-rotate(352deg) brightness(104%) contrast(104%);
  order: -2;
  margin-right: ${props=>props.marginRight};
  width: ${props=>props.width || "25px"};
`;

export const IconWrapper = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
`;

export const SubTitle = styled.p`
  width: 100%;
  font-size: 13px;
  text-transform: uppercase;
  order: -1;
  margin-top: 3em;
  & span{
    font-weight: bold;
  }
`;

export const Text = styled.p`
  margin: 0;
  line-height: ${props=>props.lineHeight};
  margin-right: ${props=>props.marginRight};
  font-size: ${props=>props.fontSize || "17px"};
  margin-top:  ${props=>props.marginTop || "1em"};
  font-weight: ${props=>props.fontWeight || "400"};
`;

export const ButtonLink = styled(ReactRouterLink)`
  width: 100%;
  color: white;
  background-color: #e50914;
  padding: .8em;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  border-radius: 3px;
  font-size: 24px;
  margin-top: ${props=>props.marginTop || "20px"};

  &:hover, &:focus{
    background: #f40612;
  }
`;

export const SecureIconWrapper = styled.div`

`;

export const SecureIcon = styled.img`
  display: inline-block;
  margin: 2.5px;
  width: 12px;
  height: auto;
  filter: invert(77%) sepia(61%) saturate(423%) hue-rotate(352deg) brightness(92%) contrast(95%);
  margin-left: 5px;
`;

export const CardsIcon = styled.img`
  display: inline-block;
  margin: 0;
  margin-right: .4em;
  width: 40px;
  height: 25px;
  border: solid .2px lightgrey;
  border-radius: 3px;
  padding: ${props=>props.padding}
`;

export const CardsPaymentLink = styled(ReactRouterLink)`
  width: 100%;
  color: black;
  padding: .9em;
  font-size: 18px;
  text-decoration: none;
  border-radius: 6px;
  border: solid 2px lightgrey;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  padding: ${props=> props.padding || 0 };
`;

export const ListItem = styled.li`
  display: flex;
  margin-top: ${props=>props.marginTop || "1.5em"};
`;

export const ListText = styled.p`
  font-weight: 400;
  margin: 0;
  font-size: 18px;
  text-align: left;
`;

export const ListIcon = styled.img`
  display: inline-block;
  margin-right: .6em;
  width: 25px;
  filter: invert(11%) sepia(74%) saturate(6242%) hue-rotate(352deg) brightness(104%) contrast(104%);
`;
