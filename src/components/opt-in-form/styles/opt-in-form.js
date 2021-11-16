import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 550px;
  margin: 0 auto;
  color: white;
`;

export const Message = styled.p`

`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  display: block;
  font-size: var(--size);
  padding: 1em;
  padding-left: .7em;
  margin: 0;
  width: 400px;
  outline: none;
  border: solid grey 1px;
  /* removed position absolute on the input element so that display
    flex can work. the label is therefore technically attached to
    the container.
   */

   &:focus{
     border-bottom: solid 1px orange;
   }

  & ~ ${Placeholder}{
    position: absolute;
    top: var(--size);
    left: 10px;
  }

  &:focus +  ${Placeholder},
  &:not(:placeholder-shown) + ${Placeholder}{
    font-size: 12px;
    font-weight: bold;
    top: 0;
    color: grey;
    user-select: none;
  }
  /*
  it is important to note that the :not(:placeholder-shown) is not fully supported
  and so a javascript solution might be better for that particular functionality.
   */
`;


export const Button = styled.button`
  color: white;
  font-size: 16px;
  width: 150px;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border: solid red 1px;
  background-color: red;
  cursor: pointer;

  &:hover{
    background-color: darkred;
  }
`;

export const Image = styled.img`
  width: 16px;
  height: auto;
  max-width: 100%;
  filter: brightness(0) invert(1)
`;
