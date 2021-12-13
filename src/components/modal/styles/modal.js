import styled from "styled-components"

export const Container = styled.div`
  display: ${props=>props.display};
  background: white;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: .97;
  z-index: 10;
`;

export const Header = styled.div`
  display: flex;
  justify-content: end;
  padding: 1.5em 1.5em 3em;
`;


export const Wrapper = styled.div`
  max-width: 270px;
  margin: 0 auto;
`;

export const Text = styled.p`
  font-weight: 400;
  text-align: center;
  margin: 0;
  padding: 0 .5em;
  line-height: 1.4;
`;

export const Icon = styled.img`
  display: inline-block;
  width: 16px;
  cursor: pointer;
`;

export const Image = styled.img`
  margin: 0 auto;
  max-width: 200px;
`;
