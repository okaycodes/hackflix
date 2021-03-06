import styled from "styled-components";


export const Container = styled.section`
  border-bottom: 8px solid #222;
  color: white;
  padding: 5em;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px){
    padding: 4em 0;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1;
  margin: 0;
  margin-bottom: 1em;
  color: white;
  text-align: center;
  align-self: center;
  max-width: 90%;

  @media (max-width: 700px) {
      font-size: 35px;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 815px;
  width: 90%;
  margin: 0 auto;
`;


export const Item = styled.div`
  margin: .3em;
`;

export const Header = styled.div`
  background-color: #303030;
  padding: 1.5em;
  display: flex;
  justify-content: space-between;

  @media (mad-width:750px){
    padding: 1em;
  }
`;

export const Toggle = styled.div`
  --length: 24px;
  --breadth: 2px;
  height: var(--breadth);
  width: var(--length);
  background: white;
  position: relative;
  align-self: center;
  transform: ${props=> props.isActive && "rotate(45deg)" };
  transition: transform 50ms ease-in-out;

  &:before {
    content: "";
    height: var(--breadth);
    width: var(--length);
    background: white;
    position: absolute;
    transform: rotate(90deg)
    /* height: 23px;
    width: 3px;
    right: 0;
    bottom: 0;
    top: calc((var(--breadth) - var(--length)) / 2);
    left: calc((var(--length) - var(--breadth)) / 2);

    achieved everything above using rotate() */
  }

  @media (max-width: 750px) {
    --length: 17px;
    --breadth: 2px;
  }

`;

export const SubTitle = styled.h2`
  margin: 0;
  font-size: 25px;
  font-weight: 400;

  @media (max-width: 750px){
    font-size: 18px;
  }
`;

export const Content = styled.p`
  font-size: 25px;
  padding: 1em;
  background-color: #303030;
  margin-top: .1em;
  margin-bottom: 0;

  @media (max-width: 750px){
    font-size: 20px;
  }
`;
