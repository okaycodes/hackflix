import {useContext} from "react"
import * as ROUTES from './../../constants/routes';
import * as REGEX from './../../constants/regex';

import {firebaseContext} from "./../../contexts/firebaseContext"

import {
        Container,
        Message,
        Label,
        InputWrapper,
        Input,
        Placeholder,
        ErrorMessage,
        ButtonLink} from "./styles/opt-in-form"

  export default function OptInForm({children, ...restProps}){
    return (
        <Container>{children}</Container>
    )
  }

  OptInForm.Message = function OptInFormMessage({children, ...restProps}){
    return <Message {...restProps}>{children}</Message>
  }

  OptInForm.Input = function OptInFormInput({children, animated=true, placeholder, ...restProps}){
    const {state, dispatch} = useContext(firebaseContext)
    const {email, emailIsActive, emailErrorMessage} = state
    const emailIsValid = REGEX.EMAIL_VALIDATION.test(email)
    const isEmpty = email.length < 1

      return (
        <InputWrapper {...restProps}>
          <Label>
            <Input name="email"
              value={email}
              isValid ={emailIsValid}
              isEmpty = {isEmpty}
              isActivated={emailIsActive}
              errorMessage={emailErrorMessage}
              onChange={(event) =>{dispatch(
                {type: "input", payload: {[event.target.name]:event.target.value} }
              )}}
              onBlur={()=>!isEmpty &&
                dispatch({type:"blurred", payload: {emailIsActive: true}})}
            />
            <Placeholder isEmpty = {isEmpty}>{animated && placeholder}</Placeholder>
          </Label>
          <ErrorMessage errorColor="orange">
            {emailIsActive &&  email.length < 4 ?
              "Email is required":
              emailIsActive && !emailIsValid ?
              "Enter a valid email address": ""}
          </ErrorMessage>
        </InputWrapper>
    )}


  OptInForm.Button = function OptInFormButton({children, ...restProps}){
    const {state, dispatch} = useContext(firebaseContext)
    const {email} = state
    const emailIsValid = REGEX.EMAIL_VALIDATION.test(email)
    const isEmpty = email.length<1;

  return (
        <ButtonLink
          {...restProps}
          to={!isEmpty && emailIsValid && `./${ROUTES.REGISTRATION}`}
          onClick={()=> !emailIsValid && dispatch("focusOut")}>
          {children} <img src="./../../images/icons/chevron-right.png" alt="chevron right" />
        </ButtonLink>
        )
}
