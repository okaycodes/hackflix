import {useContext} from "react"
import * as ROUTES from './../../constants/routes';
import {InputContextProvider, inputContext} from "./../../contexts/inputContext"

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
      <InputContextProvider>
        <Container>{children}</Container>
      </InputContextProvider>
    )
  }

  OptInForm.Message = function OptInFormMessage({children, ...restProps}){
    return <Message {...restProps}>{children}</Message>
  }

  OptInForm.Input = function OptInFormInput({children, animated=true, placeholder, ...restProps}){
    const {email, handleChange, activatedInput, emailIsValid, isEmpty} = useContext(inputContext)
    return(
      <InputWrapper {...restProps}>
        <Label>
          <Input
            placeholder={!animated && placeholder}
            name = "email"
            value ={email}
            onChange={handleChange}
          />
          <Placeholder isEmpty = {isEmpty}>{animated && placeholder}</Placeholder>
        </Label>
        <ErrorMessage>
          {(activatedInput && email.length < 4) ? "Email is required" :
           activatedInput && !emailIsValid && "Please enter a valid email address"}
        </ErrorMessage>
      </InputWrapper>
    )}


  OptInForm.Button = function OptInFormButton({children, ...restProps}){
  return (
        <ButtonLink to={ROUTES.REGISTRATION} {...restProps}>
          {children} <img src="./../../images/icons/chevron-right.png" alt="chevron right" />
        </ButtonLink>
        )
}
