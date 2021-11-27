import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"
import {inputContext} from  "./../contexts/inputContext"
import {useContext} from "react"

/*================================================
COME BACK TO THIS valid fields and activate button
==================================================*/

export default function RegFormContainer(){
  const {email, setEmail,
        password, setPassword,
        emailIsValid, passwordIsValid,
        emailIsActivated, setEmailIsActivated,
        passwordIsActivated, setPasswordIsActivated,
        emailErrorMessage, passwordErrorMessage} = useContext(inputContext)

  return(
    <Registration>
      <Registration.Title>Create a password to start your membership</Registration.Title>
      <Registration.SubTitle style={{order:-1}}>
        step <span style={{fontWeight: "bold"}}>1</span> of <span style={{fontWeight: "bold"}}>3</span>
      </Registration.SubTitle>
      <Registration.Text>Just a few more steps and you're done!
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
