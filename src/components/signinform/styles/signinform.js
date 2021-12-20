import styled from "styled-components"
import {Link  as ReactRouterLink} from "react-router-dom"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,.6);
  width: 100%;
  max-width: 450px;
  min-height: 660px;
  border-radius: 5px;
  margin: auto;
  padding: 30px 68px 40px;
  margin-bottom: 100px;


  @media (max-width: 740px) {
    max-width: 100%;
    padding: 0px 40px 0px;
    min-height: auto;
  }
`;
// rgba is used to define background-color because that way the opacity is not
// inherited by the children elements

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;

  @media (max-width: 740px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 32px;
`;

export const SubTitle = styled.h2`
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: .6em;
`;

export const Label = styled.label`
`;
// label was initially added for styling purposes but now its there for semantic reasons

export const Placeholder = styled.span`
  position: absolute;
  left: 10px;
  transition: all .15s ease-in-out;
  top: ${props=> props.isEmpty ? "16px":"4px"};
  font-size: ${props => props.isEmpty ? "16px" : "11px"};
  color: ${props=>(props.initialValue && !props.isActivated) ? "black": "grey"};
`;

export const Input = styled.input`
  display: block;
  font-size: 16px;
  color: white;
  padding: 1.5em 1em .5em;
  padding-left: 10px;
  margin: 0;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: #303030;
  border-bottom: ${props=>props.isActivated && !props.isValid && "solid 2px orange"};

   &:focus{
     outline: none;
     background-color: #4d4d4d;
   }

  &:focus +  ${Placeholder}{
    font-size: 12px;
    top: 4px;
    color: grey;
    user-select: none;
  }
`;

export const CheckboxWrapper = styled.label`
  flex: auto;
  display: block;
  position: relative;
  padding-left: 21px;
  /* this padding shifts the checkbox label from the edge of the checkbox */
  margin-top: 13px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: #bfbfbf;
  height: 32px;
`;
/* in the sigInForm, the Checkbox is used in one case in a flex box alongside the Link
 flex uto is set here so that the checkbox  can grow to occupy all the space left by the Link
 whereas the Link is set such that it  only occupies the space occupied by its content.
 the checkbox  in other forms is set at 100% width
 */

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  & ~ span{
    position: absolute;
    left: 0;
    top: -1.5px;
    height: 17px;
    width: 17px;
    border-radius: 2px;
    background-color: ${props=>props.isActive ? "white" : "grey"};
  }

  & ~ span:after{
    display: none;
    content: "";
    position: absolute;
    height: 3.5px;
    width: 9px;
    top: 5px;
    left: 2.5px;
    border: solid black;
    border-width: 2.5px 2.5px 0 0;
    transform: rotate(135deg);
  }

  ${CheckboxWrapper} &:checked~span:after{
    display: block;
  }
`;

export const ErrorMessage = styled.p`
  text-align: left;
  margin-left: .4em;
  color: orange;
  font-size: 13px;
`;

export const Link = styled(ReactRouterLink)`
  flex: 0 auto;
  font-weight: 500;
  text-decoration: none;
  color: ${props=>props.color || "#bfbfbf"};
  font-size: ${props=>props.fontSize || "13px"};

  &:hover,
  &:focus{
    text-decoration: underline;
  }
`;
/* in the sigInForm, the Link is used in one case in a flex box alongside the checkbox
 flex 0 auto is set here so that the link only occupies the space occupied by its content
 whereas the checkbox is set such that it can grow to occupy all the space left by the Link
 */

export const ButtonLink = styled(ReactRouterLink)`
  width: 100%;
  color: white;
  background-color: #e50914;
  padding: .8em;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  margin-top: ${props=>props.marginTop || "20px"};

  &:hover, &:focus{
    background: #f40612;
`;

export const Icon = styled.img`
  display: inline-block;
  width: 20px;
  margin-right: .5em;
`;

export const Text = styled.p`
  color: grey;
  font-size: ${props=>props.fontSize || "16"};
  & > ${Link},
  & ~ ${Link}{
    margin-left: .3em;
  }
  /* these selectors( & > Link) is used to select two cases of links
  (Sign up now and learn more to give them a fitting margin) */
`;

export const Submit = styled.button`
`;

export const FlexBox = styled.div`
 display: flex;
 align-items: center;
 justify-content: ${props=>props.justifyContent || "center"}
`;
