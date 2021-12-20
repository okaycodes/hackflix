import {useContext, useState} from "react"
import {Header, SignInForm, Footer} from "./../components"
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

  const emailIsValid = REGEX.EMAIL_VALIDATION.test(email)
  const emailIsEmpty = email.length < 1
  const passwordIsValid = signInPassword.length > 6
  const passwordIsEmpty = signInPassword.length < 1
  // signInPassword is added to context, destructured from state and used here
  // because this passwordfield unlike others take an initial value

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
            errorMessage1 = "Please enter a valid email address or phone number"
            onChange={(event)=>dispatch({type: "input", payload: {email: event.target.value}})}
            onBlur={()=>dispatch({type:"blurred", payload: {emailIsActive: true}})}
          />
          <SignInForm.Input
            type="password"
            placeholder="Password"
            name="signInPassword"
            value={signInPassword}
            isValid ={passwordIsValid}
            isEmpty={passwordIsEmpty}
            isActivated={signInPasswordIsActive}
            minLength={4}
            initialValue={true}
            errorMessage1 = "Password must be between 4 and 60 characters"
            onChange={(event) =>{dispatch(
              {type: "input", payload:{signInPassword: event.target.value}}
            )}}
            onBlur={()=>
              dispatch({type:"blurred", payload: {signInPasswordIsActive: true}})}
          />
          <SignInForm.ButtonLink
            to="#"
            disabled={!passwordIsValid && !emailIsValid}>
            Sign In
          </SignInForm.ButtonLink>

          <SignInForm.FlexBox justifyContent="space-between">
            <SignInForm.Checkbox
              type="checkbox"
              value={checkboxIsChecked}
              onBlur={handleBlur}
              onChange={handleChange}
              defaultChecked={checkboxIsChecked}
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
      <Footer backgroundColor="rgba(0,0,0, 0.7)" padding="2em 3em">
        <Footer.Title>Questions? Contact Us</Footer.Title>
        <Footer.Row>
          <Footer.Link href="#">FAQs</Footer.Link>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
        </Footer.Row>
      </Footer>
    </Header>
  )
}
