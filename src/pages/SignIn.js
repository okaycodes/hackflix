import {useContext} from "react"
import {Header, SignInForm} from "./../components"
import {inputContext} from "./../contexts/inputContext"
import * as REGEX from './../constants/regex';

export default function SignIn({children, ...restProps}){
  const {state, dispatch} = useContext(inputContext)
  const {email, emailIsActive} = state
  const {signInPassword, signInPasswordIsActive} = state
  const emailIsValid = REGEX.EMAIL_VALIDATION.test(email)
  const emailIsEmpty = email.length < 1
  const passwordIsValid = signInPassword.length > 6
  const passwordIsEmpty = signInPassword.length < 1

  return(
    <Header>
      <Header.Frame>
        <Header.Logo src="./../../images/misc/logo.svg" alt="Netflix" />
      </Header.Frame>
      <SignInForm>
        <SignInForm.Title>Sign In</SignInForm.Title>
        <SignInForm.Base>
          <SignInForm.Input
            placeholder="Email or phone number"
            name="email"
            value={email}
            isValid ={emailIsValid}
            isEmpty = {emailIsEmpty}
            isActivated={emailIsActive}
            minLength={5}
            errorMessage1 = "Email is required!"
            errorMessage2 = "Please enter a valid email address"
            onChange={(event) =>
              dispatch({type: "input", payload: {email: event.target.value}})}
            onBlur={(event)=> email.length >= 1 &&
              dispatch({type:"blurred", payload: {emailIsActive: true}})}
          />
          <SignInForm.Input
            type="password"
            placeholder="Add a password"
            name="password"
            value={signInPassword}
            isValid ={passwordIsValid}
            isEmpty={passwordIsEmpty}
            isActivated={signInPasswordIsActive}
            minLength={1}
            errorMessage1 = "Password is required!"
            errorMessage2 = "Password must be between 6 and 60 characters"
            onChange={(event) =>{dispatch(
              {type: "input", payload: {password: event.target.value} }
            )}}
            onBlur={()=> passwordIsEmpty ?
              dispatch({type: "emptyPassword"}) :
              dispatch({type:"blurred", payload: {passwordIsActive: true}})}
          />
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <SignInForm.Checkbox type="checkbox"/>
            <SignInForm.Link to="#">Need help?</SignInForm.Link>
          </div>
        </SignInForm.Base>
      </SignInForm>
    </Header>
  )
}
