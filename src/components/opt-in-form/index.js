import {useContext} from "react"
import * as ROUTES from './../../constants/routes';
import {OptInContextProvider, optInContext} from "./../../contexts/optInContext"

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
      <OptInContextProvider>
        <Container>{children}</Container>
      </OptInContextProvider>
    )
  }

  OptInForm.Message = function OptInFormMessage({children, ...restProps}){
    return <Message {...restProps}>{children}</Message>
  }

  OptInForm.Input = function OptInFormInput({children, animated=true, placeholder, ...restProps}){
    const {email, handleChange, activatedInput, emailIsValid, isEmpty} = useContext(optInContext)
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
        <ButtonLink to={ROUTES.SIGN_UP} {...restProps}>
          {children} <img src="./../../images/icons/chevron-right.png" alt="chevron right" />
        </ButtonLink>
        )
}
