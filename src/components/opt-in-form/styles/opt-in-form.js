import styled from "styled-components"

export const Container = styled.div`

`;

export const Message = styled.p`

`;

export const Wrapper = styled.div`

`;


export const Placeholder = styled.label`
  display: none;
`;

export const Input = styled.input`
  font-size: 16px;
  margin: 0;
  width: 400px;
  height: 50px;

  &:focus::placeholder{
    font-size: 0;
  }

  &:focus + ${Placeholder},
  &:not(:placeholder-shown) + ${Placeholder}{
    display: inline-block;
    font-size: 12px;
    color: grey;
    transform: translate(-395px, -16px);
    user-select: none;
  }
`;

export const Button = styled.button`

`;
