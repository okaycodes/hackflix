import styled from "styled-components"

export const Container = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin: 1em auto;
  color: white;
`;

export const Message = styled.p`
  text-align: center;
  font-size: 20px;

  @media (max-width: 700px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;


export const InputWrapper = styled.div`
  width: 70%;
  position: relative;
  --size: 20px;

  @media (max-width: 700px) {
    align-self: center;
    width: 80%
  }
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
  font-size: 16px;
  padding: 1em;
  padding-left: 20px;
  margin: 0;
  width: 100%;
  height: 100%;
  outline: none;
  border: solid grey 1px;
  border-radius: 3px 0 0 3px;
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
    left: var(--size);
  }

  &:focus +  ${Placeholder},
  &:not(:placeholder-shown) + ${Placeholder}{
    font-size: 12px;
    font-weight: bold;
    top: 4px;
    color: grey;
    user-select: none;
  }
  /*
  it is important to note that the :not(:placeholder-shown) is not fully supported
  and so a javascript solution might be better for that particular functionality.
   */

   @media (max-width: 700px) {
     border-radius: 3px;
   }
`;


export const Button = styled.button`
  color: white;
  font-size: 23px;
  width: 30%;
  display: flex;
  justify-content: space-between;
  padding: .7em;
  align-items: center;
  border: solid red 1px;
  background-color: red;
  cursor: pointer;
  border-radius: 0 3px 3px 0;

  &:hover{
    background-color: darkred;
  }

  & > img{
    width: 20px;
    filter: brightness(0) invert(1)
  }

  @media (max-width: 700px) {
    align-self: center;
    margin: 1em;
    font-size: 17px;
    border-radius: 3px;
    width: 140px;

    & > img{
      width: 17px;
    }
  }
`;
