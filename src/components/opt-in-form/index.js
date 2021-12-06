import {useContext} from "react"
import * as ROUTES from './../../constants/routes';
import {inputContext} from "./../../contexts/inputContext"

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
    const {state, dispatch} = useContext(inputContext)
    const {email, emailIsActive, emailErrorMessage} = state
    const emailIsValid = /[^@]+@[^@]+\.[^@]+/.test(email)
    const isEmpty = false

      return (
        <InputWrapper {...restProps}>
          <Label>
            <Input name="email"
              value={email}
              isValid ={emailIsValid}
              isEmpty = {isEmpty}
              isActivated={emailIsActive}
              errorMessage={emailErrorMessage}
              onChange={(event) =>{dispatch({ type: "fill", payload: event.target.value })}}
              onBlur={()=>!isEmpty && dispatch({type:"focusOut"})}
            />
            <Placeholder isEmpty = {isEmpty}>{animated && placeholder}</Placeholder>
          </Label>
          <ErrorMessage errorColor="orange">
            {((!emailIsValid && emailIsActive) &&  email.length < 4) ? "Email is required":(!emailIsValid && emailIsActive) && emailErrorMessage}
          </ErrorMessage>
        </InputWrapper>
    )}


  OptInForm.Button = function OptInFormButton({children, ...restProps}){
    const {state, dispatch} = useContext(inputContext)
    const {email, emailIsValid} = state
    const isEmpty = email.length<1;


    /*==========================
    COME BACK TO THIS handleClick
    ============================*/

  return (
        <ButtonLink
          {...restProps}
          to={"#"}
          onClick={()=>dispatch("signup")}>
          {children} <img src="./../../images/icons/chevron-right.png" alt="chevron right" />
        </ButtonLink>
        )
}
