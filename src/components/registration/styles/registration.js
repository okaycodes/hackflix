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
  justify-content: center;
  align-items: center;
  margin: 140px auto;
  max-width: ${props=>props.small ? "340px" : "440px"};
`;

export const Image = styled.img`
  margin-bottom: 1em;
  display: block;
  width: 100%;
  order: -2;
`;

export const Icon = styled.img`
  display: inline-block;
  filter: invert(11%) sepia(74%) saturate(6242%) hue-rotate(352deg) brightness(104%) contrast(104%);
  margin-right: .6em;
  order: -2;
  width: 25px;
`;

export const IconSecondary = styled.img`
  display: inline-block;
  margin: 0;
  margin-right: .4em;
  width: 40px;
  height: 25px;
  border: solid .2px lightgrey;
  border-radius: 3px;
`;

export const IconWrapper = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-size: 23px;
  font-weight: 600;
  margin: 0;
`;

export const SubTitle = styled.p`
  width: 100%;
  font-size: 13px;
  text-transform: uppercase;
  order: -1;
`;

export const Text = styled.p`
  font-weight: 400;
  margin: 0;
  color: ${props=>props.color};
  font-size: ${props=>props.fontSize || "17px"};
  margin-top: ${props=>props.marginTop || "1em"};
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

export const InputIcon = styled.span`
  position: absolute;
  top: 13px;
  right: 0;
`;
// inputIcon is used only in the CVV field of the paymentform

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


export const Link = styled(ReactRouterLink)`
  width: 100%;
  color: white;
  background-color: #e50914;
  padding: 1em;
  font-size: ${props=>props.fontSize || "16px"};
  text-decoration: none;
  text-align: center;
  border-radius: 3px;
  margin-top: 20px;
  cursor: pointer;


  &:hover, &:focus{
    background: #f40612;
  }
`;

export const LinkSecondary = styled(ReactRouterLink)`
  width: 100%;
  color: black;
  padding: 1.1em;
  font-size: 18px;
  text-decoration: none;
  border-radius: 6px;
  border: solid 2px lightgrey;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover, &:focus{
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  margin-top: 1.5em;
`;
