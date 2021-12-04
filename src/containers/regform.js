import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"
import {inputContext} from  "./../contexts/inputContext"
import {useContext} from "react"

/*================================================
COME BACK TO THIS valid fields and activate button
==================================================*/

export default function RegFormContainer(){
  const {email, password,
        emailIsValid, passwordIsValid,
        emailIsActivated,
        passwordIsActivated,
        handleChange, handleBlur, handleClick} = useContext(inputContext)

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
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage="Please enter a valid email address"
      />

      <Registration.Input
        placeholder="Add a password"
        name="password"
        value={password}
        isValid ={passwordIsValid}
        isEmpty={password.length < 1}
        isActivated={passwordIsActivated}
        onChange={handleClick}
        onBlur={handleBlur}
        errorMessage= "Password should be between 6 and 60 characters"
      />
      <Registration.Checkbox />

      <Registration.Link to={ROUTES.SIGN_UP_HOME}>Next</Registration.Link>
    </Registration>
)}
