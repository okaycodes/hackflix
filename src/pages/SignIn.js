import {useContext, useState} from "react"
import {Header, SignInForm} from "./../components"
import {inputContext} from "./../contexts/inputContext"
import * as REGEX from './../constants/regex';
import * as ROUTES from './../constants/routes';


export default function SignIn({children, ...restProps}){
  const {state, dispatch} = useContext(inputContext)
  const {email, emailIsActive} = state
  const {signInPassword, signInPasswordIsActive} = state
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(true)
  const [checkboxIsActive, setCheckboxIsActive] = useState(false)
  const [checkboxIsHovered, setCheckboxIsHovered] = useState(false)

  const handleChange=()=>{
      setCheckboxIsChecked(prev=>!prev)
      setCheckboxIsActive(true)
    }

  const handleBlur=()=>{!checkboxIsHovered && setCheckboxIsActive(false)}
/* it was necessary to add the !isHovered condition to the checkbox because
of a weird behaviour of checkboxes in react where the blur event is called
whenever the box is clicked (onMouseDown) and then it is focused later causing
a flash of unneeded behavior. In this case a flash of grey background anytime it
is clicked before the required white.
*/


  // console.log(checkboxIsActive, checkboxIsChecked)


  const emailIsValid = REGEX.EMAIL_VALIDATION.test(email)
  const emailIsEmpty = email.length < 1
  const passwordIsValid = signInPassword.length > 6
  const passwordIsEmpty = signInPassword.length < 1

  return(
    <Header dontShowOnSmallViewPort>
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
          <SignInForm.ButtonLink to="#">Sign In</SignInForm.ButtonLink>

          <SignInForm.FlexBox justifyContent="space-between">
            <SignInForm.Checkbox
              type="checkbox"
              value={checkboxIsChecked}
              onBlur={handleBlur}
              onChange={handleChange}
              onMouseEnter={()=>setCheckboxIsHovered(true)}
              onMouseLeave={()=>setCheckboxIsHovered(false)}
              isActive={checkboxIsActive}
              isHovered={checkboxIsHovered}
              >Remember me</SignInForm.Checkbox>
            <SignInForm.Link to="#">Need help?</SignInForm.Link>
          </SignInForm.FlexBox>

          <SignInForm.FlexBox justifyContent="start">
            <SignInForm.Icon src="./../../images/icons/FB-icon.png"/>
            <SignInForm.Link to="#" color="grey">Login with Facebook</SignInForm.Link>
          </SignInForm.FlexBox>

          <SignInForm.FlexBox justifyContent="start">
            <SignInForm.Text>New to Netflix?</SignInForm.Text>
            <SignInForm.Link fontSize="16px" color="white" to={`./../${ROUTES.REGISTRATION}`}>
              Sign up now.</SignInForm.Link>
          </SignInForm.FlexBox>

          <SignInForm.Text fontSize="13px">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <SignInForm.Link to="#" color="#0071eb">Learn more</SignInForm.Link>
          </SignInForm.Text>
        </SignInForm.Base>
      </SignInForm>
    </Header>
  )
}
