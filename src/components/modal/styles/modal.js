import styled from "styled-components"

export const Container = styled.div`
  display: ${props=>props.display};
  background: white;
  position: fixed;
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
  max-width: 440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: 400;
  margin: 0;
  padding: 0 .5em;
  line-height: 1.4;
  width: ${props=>props.width};
  text-align: ${props=>props.align};
  font-size: ${props=>props.fontSize}
`;

export const Icon = styled.img`
  display: inline-block;
  width: 16px;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 130px;
  width: 200px;
  margin: 35px auto 0;
  max-width: 200px;
  border-radius: 8px;
`;
