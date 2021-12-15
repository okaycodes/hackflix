import styled from "styled-components"
import {Link as ReactRouterLink} from "react-router-dom"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: white;
  color: black;
  border-bottom: solid 1px lightgrey;
  border-top: solid 1px lightgrey;
`;

export const StepContainer = styled.section`
  background: white;
  display: flex;
  flex-direction: column;
  padding-left: 1em;
`;

export const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  width: 90%;
  max-width: 946px;
  margin-top: 2em;
`;

export const Plans = styled.div`
  position: relative;
  display: grid;
  margin: 0 auto;
  width: 100%;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns:  2fr repeat(4, 1fr);
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  margin: 1em 0;
  background: white;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 610px) {
    grid-template-columns:  repeat(4, 1fr);
    grid-gap: .5em;
  }
`;

export const Title = styled.h1`
  font-size: 17px;
  width: 120px;
  height: 120px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props=>props.isActive ? "#e50914" : "#dc0914b3"};
  color: white;
  border-radius: 2px;
  text-align: center;
  /* &:before{
    content: "";
    position: absolute;
    background: green;
    width: 150px;
    opacity: .2;
    bottom: 0;
    top: 0px;
  }
  this was used to wrap the entire column so that onClick on anywhere under
  the title works on that title within the container but that relied on
  the larger container not having position relative or sticky on it.
  to make the header stick however I had to had position sticky to it which
  rendered the above pseudoelement invalid. I instead use javascript (activeIndex)
  to perform the same function (select all element on the column on click)
  */

  &:after{
    content: "";
    position: absolute;
    background: ${props=>props.isActive && "#e50914"};
    width: 15px;
    height: 15px;
    top: 112.5px;
    /* top value is the height of the title minus half the height of its after */
    transform: rotate(45deg)
  }

  &:nth-child(1){
    background: none;
  }
  &:nth-child(1):before{
    display: none;
  }
  &:nth-child(1):after{
    background: none;
  }

  @media (max-width:950px) {
    width: 90px;
    height: 90px;

    &:after{
      width: 10px;
      height: 10px;
      top: 85px;
    }
  }

  @media (max-width: 610px) {
    width: 100%;
    height: 75px;
    font-size: 12px;

    &:after{
      width: 20px;
      height: 20px;
      top: 65px;
    }

    &:nth-child(1){
      display: none;
    }
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns:  2fr repeat(4,  minmax(90px, 1fr));
  border-bottom: solid 1px lightgrey;
  &:nth-child(5){
    border-bottom: none;
  }

  @media (max-width: 610px) {
    grid-template-columns:  repeat(4, 1fr);
  }
`;

// 2fr is used to allow the title column adjust alongside the others(changed from a fixed width)
/*
minmax is used in the above to ensure the content is not distorted below certain
width when larger contents e.g. 4K+HDR might command more space than others displacing
others from the center */

export const ItemTitle=styled.div`
`;

export const Item = styled.div`
  text-align: center;
  padding: 1em;
  font-weight: 600;
  color: ${props=>props.isActive ? "#e50914" : props.color || "#707070"};

  &:nth-child(1){
    text-align: left;
    opacity: 1;
    font-weight: 400;
  }

  @media (max-width: 610px) {
    font-size: 12px;
    &:nth-child(1){
      grid-column: 1/-1;
      text-align: center;
    }
  }
`;

export const Icon = styled.img`
  display: block;
  width: 26px;
  filter: ${props=>props.isActive ?
    "invert(11%) sepia(74%) saturate(6242%) hue-rotate(352deg) brightness(104%) contrast(104%)" :
    "invert(50%) sepia(0%) saturate(1201%) hue-rotate(135deg) brightness(85%) contrast(82%)"
  };
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: solid blue;
  padding: 1em;
`;

export const IconUnit = styled.div`
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 12px;
  margin: 0;
  color: ${props=>props.isActive ? "#e50914" : "#707070"};
  font-weight: 550;
`;

export const Terms = styled.p`
  font-size: 13px;
  max-width: 770px;
  font-weight: 400;
  margin: 0;
  color: #707070;
  margin-top: 1em;
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: #2983f0;

  &:hover, &:focus{
    text-decoration: underline;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  width: 100%;
  max-width: 440px;
  margin: 20px auto 170px;
  color: white;
  background-color: #e50914;
  font-size: 24px;
  text-decoration: none;
  text-align: center;
  border-radius: 3px;
  padding: .7em;

  &:hover, &:focus{
    background: #f40612;
  }
`;
