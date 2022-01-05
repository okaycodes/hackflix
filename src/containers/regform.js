import {useContext, useState, useEffect} from "react"
import * as REGEX from './../constants/regex'
import * as ROUTES from "./../constants/routes"
import {Registration, RegForm, SignInForm} from "./../components"
import {formContext} from  "./../contexts/formContext"
import {authContext} from  "./../contexts/authContext"



export default function RegFormContainer(){
  const {state, dispatch} = useContext(formContext)
  const {signup, error} = useContext(authContext)
  const {email, emailIsActive} = state
  const {password, passwordIsActive} = state
  const emailIsValid = REGEX.EMAIL_VALIDATION.test(email)
  const emailIsEmpty = email.length < 1
  const passwordIsValid = password.length > 6
  const passwordIsEmpty = password.length < 1
  const formIsInvalid = !passwordIsValid || !emailIsValid
  const [isLoading, setIsLoading] = useState(false)

  const handleSignup = (e) =>{
    e.preventDefault()
    setIsLoading(true)
    signup(email, password)
  }

  useEffect(()=>{
    if(error){
      setIsLoading(false)
    }
  },[error])

  return(
    <RegForm>
    <SignInForm.LoginErrorMessage backgroundColor="#ffa00a">
      {error  &&
        <SignInForm.FlexBox>
        <SignInForm.Icon src="../../../images/icons/warning-icon.svg"fontSize="16px" />

          <SignInForm.Text fontSize="16px">
            <span>Looks like that account already exists.</span>
            <SignInForm.Link onClick={()=>dispatch({type: "emptySignupForm"})} to={ROUTES.SIGN_IN}>
            Sign into that account</SignInForm.Link> or try using a different email.
          </SignInForm.Text>
        </SignInForm.FlexBox>
      }
    </SignInForm.LoginErrorMessage>
      <Registration.Title>Create a password to start your membership</Registration.Title>
      <Registration.SubTitle>
        step <span>1</span> of <span>3</span>
      </Registration.SubTitle>
      <Registration.Text lineHeight="1.7">Just a few more steps and you're done!
      We hate paperwork, too.</Registration.Text>
      <RegForm.Base  onSubmit={handleSignup}>
        <RegForm.Input
          placeholder="Email address"
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

        <RegForm.Input
          type="password"
          placeholder="Add a password"
          name="password"
          value={password}
          isValid ={passwordIsValid}
          isEmpty={passwordIsEmpty}
          isActivated={passwordIsActive}
          minLength={1}
          errorMessage1 = "Password is required!"
          errorMessage2 = "Password must be between 6 and 60 characters"
          onChange={(event) =>{dispatch(
            {type: "input", payload: {password: event.target.value} }
          )}}
          onBlur={()=>dispatch({type:"blurred", payload: {passwordIsActive: true}})}
        />
        <RegForm.Checkbox>Please do not email me Netflix special offers</RegForm.Checkbox>
        <RegForm.Button
          type="submit"
          disabled={formIsInvalid}
          onClick={()=> {formIsInvalid &&
            dispatch({type:"invalidForm", payload:{passwordIsActive: true, emailIsActive: true}})
          }}
        >{isLoading ? <RegForm.Spinner/> : "Next"}</RegForm.Button>
      </RegForm.Base>
    </RegForm>
)}
