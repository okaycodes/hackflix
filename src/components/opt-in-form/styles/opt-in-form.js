import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Message = styled.p`

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


export const InputWrapper = styled.div`
  position: relative;
  --size: 16px;
`;

export const Label = styled.label`

`;

export const Placeholder = styled.span`
  font-size: 16px;
  color: grey;
  transition: all .15s ease-in-out;
`;

export const Input = styled.input`
  position: absolute;
  font-size: var(--size);
  padding: 1em;
  padding-left: .7em;
  margin: 0;
  width: 400px;
  outline: none;

  &:focus{
    border: none;
    border-bottom: solid 2px orange;
  }

  & ~ ${Placeholder}{
    position: absolute;
    top: var(--size);
    left: 10px;
  }

  &:focus + ${Placeholder},
  &:not(:placeholder-shown) + ${Placeholder}{
    font-size: 12px;
    font-weight: bold;
    top: 0;
    color: grey;
    user-select: none;
  }
`;


export const Button = styled.button`

`;

export const Image = styled.img`
  
`;
