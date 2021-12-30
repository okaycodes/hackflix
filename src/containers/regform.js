import {useContext, useState} from "react"
import {useNavigate} from "react-router-dom"
import * as REGEX from './../constants/regex'
import * as ROUTES from "./../constants/routes"
import {Registration, RegForm} from "./../components"
import {formContext} from  "./../contexts/formContext"
import {getFirestore, doc, setDoc} from 'firebase/firestore'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'


export default function RegFormContainer(){
  const {state, dispatch} = useContext(formContext)
  const {email, emailIsActive} = state
  const {password, passwordIsActive} = state
  const emailIsValid = REGEX.EMAIL_VALIDATION.test(email)
  const emailIsEmpty = email.length < 1
  const passwordIsValid = password.length > 6
  const passwordIsEmpty = password.length < 1
  const formIsInvalid = !passwordIsValid || !emailIsValid
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const auth = getAuth()
  const db = getFirestore()


  const handleSignup = (e) =>{
    e.preventDefault()
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then((response)=>{
        localStorage.setItem("isLoggedin", true)
        localStorage.setItem("currentStepUrl", ROUTES.SIGN_UP_HOME)
        navigate(ROUTES.SIGN_UP_HOME)
        // store user in firestore
        setDoc(doc(db, "users", response.user.uid), {email, password, currentStepUrl: ROUTES.SIGN_UP_HOME})
      }).catch(error=>{
          console.error(error)
          alert(error.message)
          setIsLoading(false)

        })
  }

  return(
    <RegForm>
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
