import styled from "styled-components"


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: white;
  color: black;
`;

export const Inner = styled.div`
  position: relative;
  display: grid;
  margin: 0 auto;
  width: 90%;
  max-width: 946px;
  background: none;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns:  300px repeat(4, 1fr);
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

export const Title = styled.h1`
  font-size: 18px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
  color: white;
  border-radius: 3px;
  color: ${props=>props.color};
  text-align: center;
  opacity: ${props=>props.isActive ? "1" : ".7"};
  position: static;
  z-index: 1;

  &:before{
    content: "";
    position: absolute;
    /* background: green; */
    width: 150px;
    opacity: 0.1;
    bottom: 0;
    top: 0px;
  }

  &:nth-child(1){
    background: none;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns:  300px repeat(4, 1fr);
  border-bottom: solid 1.5px grey;
  &:nth-child(5){
    border-bottom: none;
  }
`;

export const Item = styled.div`
  color: ${props=>props.color};
  text-align: center;
  padding: 1em;
  font-weight: 600;
  opacity: .6;

  &:nth-child(1){
    text-align: left;
    opacity: 1;
    font-weight: 400;
  }
`;

export const Icon = styled.img`
  width: 100%;
  filter: invert(11%) sepia(74%) saturate(6242%) hue-rotate(352deg) brightness(104%) contrast(104%);
`;
