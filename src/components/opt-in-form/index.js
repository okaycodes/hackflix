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
        <Container>{children}</Container>
    )
  }

  OptInForm.Message = function OptInFormMessage({children, ...restProps}){
    return <Message {...restProps}>{children}</Message>
  }

  OptInForm.Input = function OptInFormInput({children, animated=true, placeholder, ...restProps}){
    const {email, setEmail, emailIsValid, setEmailIsValid, emailIsActivated, setEmailIsActivated,
          emailErrorMessage} = useContext(inputContext)
    const isValid = emailIsValid

      return (
        <InputWrapper {...restProps}>
          <Label>
            <Input
              name="email"
              value={email}
              isValid ={isValid}
              isEmpty = {email.length < 1}
              isActivated={emailIsActivated}
              errorMessage={emailErrorMessage}
              onChange={(event)=>{
                setEmail(event.target.value)
              }}
              onBlur={(event)=>{
                setEmailIsActivated(email.length>=1 && true)
              }}
            />
            <Placeholder isEmpty = {email.length < 1}>{animated && placeholder}</Placeholder>
          </Label>
          <ErrorMessage errorColor="orange">
            {(!isValid &&  email.length < 4) ? "Email is required":!isValid && emailErrorMessage}
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
