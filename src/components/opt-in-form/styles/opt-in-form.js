import styled, {css} from "styled-components"
import {Link} from "react-router-dom"

export const Container = styled.div`
  width: 90%;
  max-width: 700px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em auto;
  color: white;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Message = styled.p`
  text-align: center;
  font-size: 20px;

  @media (max-width: 950px) {
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
`;

export const Label = styled.label`
`;

export const Placeholder = styled.span`
  position: absolute;
  left: 20px;
  color: grey;
  transition: all .15s ease-in-out;
  top: ${props=> props.isEmpty ? "20px":"4px"};
  font-weight: ${props => !props.isEmpty && "600"};
  font-size: ${props => props.isEmpty ? "16px" : "12px"};
`;
/* props is used to move the placeholder top when the field is not empty */

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
  border-bottom: ${props=>props.isActivated && !props.isValid && "solid 2px orange"};
  /* removed position absolute on the input element so that display
    flex can work. the label is therefore technically attached to
    the container.
   */

   &:focus{
    border:  ${props=>{
       return !props.isActivated ?
       "solid #2983f0 1.5px" : props.isActivated && props.isValid ?
       "solid 1px green" :"" }};
    border-bottom: ${props=>props.isActivated && !props.isValid && "solid 2px orange"};
  }

  &:focus +  ${Placeholder}{
    font-size: 12px;
    font-weight: 600;
    top: 4px;
    color: grey;
    user-select: none;
  }
  /*
  css is used to move the placeholder to the top on focus.
  it is important to note that the :not(:placeholder-shown) is not fully supported
  and so the javascript solution is better for this particular functionality.
   */

   @media (max-width: 950px) {
     border-radius: 3px;
     height: auto;
     & ~ ${Placeholder}{
       top: ${props=> props.isEmpty ? "17px":"4px"};
     }
   }
`;

export const ErrorMessage = styled.div`
  text-align: left;
  margin-left: .4em;
  color: orange;
`;

const sharedButtonStyle = css`
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
  text-decoration: none;
  border-radius: 0 3px 3px 0;
  border: none;

  &:hover{
    background-color: #f40612;
  }

  & > img{
    width: 20px;
    filter: brightness(0) invert(1)
  }

  @media (max-width: 950px) {
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

export const ButtonLink = styled.button`
  ${sharedButtonStyle}
`;

export const Navigate = styled(Link)`
  ${sharedButtonStyle}  
`;