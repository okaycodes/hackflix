import styled from "styled-components"

export const Container = styled.div`
  width: 90%;
  max-width: 700px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em auto;
  color: white;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Message = styled.p`
  text-align: center;
  font-size: 20px;

  @media (max-width: 1000px) {
      max-width: 400px;
    font-size: 23px;
  }

  @media (max-width: 700px) {
      max-width: 400px;
    font-size: 18px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  position: relative;
  --size: 20px;
`;

export const Label = styled.label`
`;

export const Placeholder = styled.span`
  font-size: ${props => props.isEmpty ? "16px" : "11px"};
  font-weight: ${props => !props.isEmpty && "500"};
  position: absolute;
  top: var(--size);
  left: var(--size);
  ${props => !props.isEmpty && "top: 4px"};
  color: grey;
  transition: all .15s ease-in-out;
  /* props is used to move the placeholder top when the field is not empty
  top is also declared twice to allow for use of the --size variable for
  easier edits in the future 
  */
`;

export const Input = styled.input`
  display: block;
  font-size: 16px;
  padding: 1em;
  padding-left: 20px;
  margin: 0;
  width: 100%;
  height: 60px;
  outline: none;
  border: solid grey 1px;
  border-radius: 3px 0 0 3px;
  /* removed position absolute on the input element so that display
    flex can work. the label is therefore technically attached to
    the container.
   */

   &:focus{
     border-bottom: solid 2px orange;
   }

  &:focus +  ${Placeholder}{
    font-size: 11px;
    font-weight: 500;
    top: 4px;
    color: grey;
    user-select: none;
  }
  /*
  css is used to move the placeholder to the top on focus.
  it is important to note that the :not(:placeholder-shown) is not fully supported
  and so the javascript solution is better for this particular functionality.
   */

   @media (max-width: 1000px) {
     border-radius: 3px;
     height: auto;
     & ~ ${Placeholder}{
       top: 17px;
     }
   }
`;

export const ErrorMessage = styled.div`
  text-align: left;
  margin-left: .4em;
  color: orange;
`;



export const Button = styled.button`
  color: white;
  font-size: 23px;
  width: 30%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: .7em;
  align-items: center;
  border: solid red 1px;
  background-color: #e50914;
  cursor: pointer;
  border-radius: 0 3px 3px 0;

  &:hover{
    background-color: #f40612;
  }

  & > img{
    width: 20px;
    filter: brightness(0) invert(1)
  }

  @media (max-width: 1000px) {
    align-self: center;
    margin: 1em;
    font-size: 16px;
    border-radius: 3px;
    width: 140px;
    height: auto;

    & > img{
      width: 16px;
    }
  }
`;
