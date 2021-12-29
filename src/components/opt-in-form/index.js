import {useContext} from "react"
import {useNavigate} from "react-router-dom"
import * as REGEX from './../../constants/regex';

import {formContext} from "./../../contexts/formContext"

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
    const {state, dispatch} = useContext(formContext)
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
              onChange={(event) =>{
                const {name, value} = event.target
                dispatch({type: "input", payload: {[name]:value} }
              )}}
              onBlur={()=>!isEmpty &&
                dispatch({type:"blurred", payload: {emailIsActive: true}})}
            />
            <Placeholder isEmpty = {isEmpty}>{animated && placeholder}</Placeholder>
          </Label>
          <ErrorMessage errorColor="#e87c03">
            {emailIsActive &&  email.length < 4 ?
              "Email is required":
              emailIsActive && !emailIsValid ?
              "Enter a valid email address": ""}
          </ErrorMessage>
        </InputWrapper>
    )}


  OptInForm.Button = function OptInFormButton({children, to, ...restProps}){
    const {state} = useContext(formContext)
    const {email} = state
    const navigate = useNavigate()
    const emailIsValid = REGEX.EMAIL_VALIDATION.test(email)
    const isEmpty = email.length<1;

  return (
        <ButtonLink
          {...restProps}
          disabled={isEmpty || !emailIsValid}
          onClick={()=>navigate(to)}
        >
          {children} <img src="./../../images/icons/chevron-right.png" alt="chevron right" />
        </ButtonLink>
        )
}
