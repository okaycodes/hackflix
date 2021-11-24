import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"
import {useState, useEffect} from "react"
import {inputContext} from  "./../contexts/inputContext"
import {useContext} from "react"

export default function RegFormContainer(){
  const {email, setEmail,
        password, setPassword,
        emailIsValid, setEmailIsValid,
        passwordIsValid, setPasswordIsValid,
        emailIsActivated, setEmailIsActivated,
        passwordIsActivated, setPasswordIsActivated,
        emailErrorMessage, passwordErrorMessage} = useContext(inputContext)

  return(
    <Registration>
      <Registration.Title>Create a password to start your membership</Registration.Title>
      <Registration.SubTitle order="-1" alignLeft={true}>
        step <span style={{fontWeight: "bold"}}>1</span> of <span style={{fontWeight: "bold"}}>3</span>
      </Registration.SubTitle>
      <Registration.Text alignLeft={true}>Just a few more steps and you're done!
      We hate paperwork, too.</Registration.Text>
      <Registration.Input
        placeholder="Email address"
        name="email"
        value={email}
        isValid ={emailIsValid}
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

      <Registration.Input
        placeholder="Add a password"
        name="password"
        value={password}
        isValid ={passwordIsValid}
        isEmpty={password.length < 1}
        isActivated={passwordIsActivated}
        errorMessage={passwordErrorMessage}
        onChange={(event)=>{
          setPassword(event.target.value)
        }}
        onBlur={(event)=>{
          setPasswordIsActivated(password.length>=1 && true)
        }}
      />
      <Registration.Checkbox />
      <Registration.Link to={ROUTES.SIGN_UP_HOME}>Next</Registration.Link>
    </Registration>
)}