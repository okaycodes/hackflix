import styled from "styled-components"
import {Link as ReactRouterLink} from "react-router-dom"


export const Container = styled.div`
  display: flex:
  flex-direction: column;
  background: white;
  width: 100vw;
  border-bottom: solid 1px lightgrey;
  border-top: solid 1px lightgrey;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: start;
  margin: 30px auto 160px;
  max-width: 440px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 17px;
  color: ${props=>props.color};
  font-weight: ${props=>props.fontWeight};
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: #0f6bdb;
  font-weight: 600;

  &:hover, &:focus{
    text-decoration: underline;
  }
`;


export const InputWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  position: relative;
  margin-top: .6em;
  --size: 20px;
`;

export const Label = styled.label`
`;

export const Placeholder = styled.span`
  font-size: ${props => props.isEmpty ? "16px" : "12px"};
  font-weight: ${props => !props.isEmpty && "600"};
  position: absolute;
  top: ${props=> props.isEmpty ? "20px":"4px"};
  left: 10px;
  color: grey;
  transition: all .15s ease-in-out;
  /* props is used to move the placeholder top when the field is not empty */
`;

export const Input = styled.input`
  display: block;
  font-size: 16px;
  padding: 1em;
  padding-left: 10px;
  margin: 0;
  width: 100%;
  height: 60px;
  border: ${props=>{
    return !props.isActivated ?
    "solid grey 1px" : props.isActivated && !props.isValid ?
    "solid 1px #a82b28" : "solid 1px green"}};
  border-radius: 2px;

   &:focus{
     outline: none;
     border: ${props=>props.isActivated && props.isValid ? "solid 1px green":"solid #2983f0 1px"};
   }

  &:focus +  ${Placeholder}{
    font-size: 12px;
    font-weight: 600;
    top: 4px;
    color: grey;
    user-select: none;
  }
`;

export const Icon = styled.img`
  display: inline-block;
  width: 36px;
  filter: invert(85%) sepia(21%) saturate(17%) hue-rotate(119deg) brightness(93%) contrast(95%);
  opacity: .6;
`;

export const InputIcon = styled.span`
  position: absolute;
  top: 13px;
  right: 10px;
  cursor: pointer;
`;
// inputIcon and Icon is used only in the CVV field of the paymentform
// inputIcon act as a wrapper for regformIcon which is rendered as its child elemnent
/* in regform index.js, RegForm.Input takes a child (which is not proper I know)
and this child or children is passed into the InputIcon so technically anything
passed as a child to the input field when it's being called (in this intended case
the Regform.Icon) gets rendered in and by InputIcon.
*/

export const Modal = styled.div`
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

export const ErrorMessage = styled.div`
  text-align: left;
  color: #a82b28;
  font-size: ${props=>props.fontSize || "14px"};
`;

export const CheckboxWrapper = styled.label`
  width: 100%;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-top: 25px;
  cursor: pointer;
  font-size: 16px;
  align-self: start;
  height: 32px;
`;

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  & ~ span{
    position: absolute;
    top: -5px;
    /* top is set to negative to better center the box */
    left: 0;
    height: 27px;
    width: 27px;
    border: solid 1px black;
  }

  ${CheckboxWrapper} &:checked~span{
    background-color: white;
  }

  & ~ span:after{
    display: none;
    content: "";
    position: absolute;
    height: 8px;
    width: 15px;
    top: 3.5px;
    left: 2.5px;
    border: solid #2983f0;
    border-width: 4px 4px 0 0;
    transform: rotate(135deg);
  }

  ${CheckboxWrapper} &:checked~span:after{
    display: block;
  }
`;

export const ChangePlan = styled.div`
  width: 100%;
  display: flex;
  background: #f7f7f7;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  margin-top: 1em;
  border-radius: 7px;
`;
