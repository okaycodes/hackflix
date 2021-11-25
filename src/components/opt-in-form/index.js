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
    const {email, emailIsValid, emailIsActivated, emailErrorMessage, handleChange, handleBlur} = useContext(inputContext)
    const isValid = emailIsValid
    const isEmpty = email.length < 1;

      return (
        <InputWrapper {...restProps}>
          <Label>
            <Input name="email"
              value={email}
              isValid ={isValid}
              isEmpty = {isEmpty}
              isActivated={emailIsActivated}
              errorMessage={emailErrorMessage}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Placeholder isEmpty = {isEmpty}>{animated && placeholder}</Placeholder>
          </Label>
          <ErrorMessage errorColor="orange">
            {(!isValid &&  email.length < 4) ? "Email is required":!isValid && emailErrorMessage}
          </ErrorMessage>
        </InputWrapper>
    )}


  OptInForm.Button = function OptInFormButton({children, ...restProps}){
    const {email, emailIsValid, handleClick} = useContext(inputContext)
    const isEmpty = email.length<1;


    /*==========================
    COME BACK TO THIS handleClick
    ============================*/

  return (
        <ButtonLink
          {...restProps}
          to={emailIsValid && !isEmpty && ROUTES.REGISTRATION}
          onClick={handleClick}
          >
          {children} <img src="./../../images/icons/chevron-right.png" alt="chevron right" />
        </ButtonLink>
        )
}
