import {SignupHeader as LoginHelpHeader, Header, LoginHelp, Selectbtn,
  SignInForm as LoginHelpForm, Footer, RegForm as LoginHelpInput} from "./../components"
import {useState, useContext} from "react"
import {selectContext} from "./../contexts/selectContext"
import * as REGEX from './../constants/regex'




export default function LoginHelpPage(){
  const [recoveryMethod, setRecoveryMethod] = useState("email")
  const {state} = useContext(selectContext)
  const {dialCode} = state
  const [email, setEmail] = useState("")
  const [emailIsActive, setEmailIsActive] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(dialCode)
  const [phoneNumberIsActive, setPhoneNumberIsActive] = useState(false)
  const emailIsEmpty = email.length < 1
  const phoneNumberIsEmpty = phoneNumber.length < 1
  const emailIsValid = REGEX.EMAIL_VALIDATION.test(email)
  const phoneNumberIsValid = REGEX.PHONE_NUMBER_VALIDATION.test(phoneNumber)



  /*
  navigate is called inside the setTimeout and handleSignOut instead of the link because
  the link is a button and not a react-router Link
  */

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(recoveryMethod==="text message" && phoneNumberIsValid){
      console.log(dialCode, phoneNumber)
    }else if (recoveryMethod==="email" && emailIsValid){
      console.log(email)
    }
  }

  return (
    <>
    <Header dontShowOnSmallViewPort src={"signout-bg"}>
      <Header.Frame>
        <Header.Logo src="./../../images/misc/logo.svg" alt="Netflix" />
        <LoginHelpHeader.SignInLink style={{color: "#e50914"}}/>
      </Header.Frame>
      <LoginHelp>
        <LoginHelp.Title>Forgot Email/Password</LoginHelp.Title>
        <LoginHelp.Text>How would you like to reset your password?</LoginHelp.Text>
        <LoginHelp.RadioButton
          value="email"
          name="password reset"
          onChange={(e)=>setRecoveryMethod(e.target.value)}
          checked={recoveryMethod === "email"}
        >
          Email
        </LoginHelp.RadioButton>
        <LoginHelp.RadioButton
          value="text message"
          name="password reset"
          onChange={(e)=>setRecoveryMethod(e.target.value)}
          checked={recoveryMethod === "text message"}
        >
          Text Message(SMS)
        </LoginHelp.RadioButton>
        <LoginHelp.Text>We will send you an email with instructions on how to reset
        your password.</LoginHelp.Text>


        <LoginHelp.FormBase onSubmit={handleSubmit}>
            {recoveryMethod === "text message" ?
            <LoginHelp.InputContainer>
              <Selectbtn />
              <LoginHelpInput.Input
                animated={false}
                name="phone number"
                value={phoneNumber}
                isValid ={phoneNumberIsValid}
                isEmpty = {phoneNumberIsEmpty}
                isActivated={phoneNumberIsActive}
                minLength={6}
                errorMessage1 = "phone number is required!"
                errorMessage2 = "Please enter a phone number"
                onChange={(e)=>setPhoneNumber(e.target.value)}
                onBlur={(event)=> phoneNumber.length >= 1 && setPhoneNumberIsActive(true)}
                style={{height:"45px", width: "200px", marginTop:"0"}}
              />
            </LoginHelp.InputContainer>
              :
              <LoginHelpInput.Input
                placeholder="name@example.com"
                animated={false}
                name="email"
                value={email}
                isValid ={emailIsValid}
                isEmpty = {emailIsEmpty}
                isActivated={emailIsActive}
                minLength={5}
                errorMessage1 = "Email is required!"
                errorMessage2 = "Please enter a valid email address"
                onChange={(e)=>setEmail(e.target.value)}
                onBlur={(event)=> email.length >= 1 && setEmailIsActive(true)}
                style={{height:"45px", marginTop:"0"}}
              />

            }
          <LoginHelp.ButtonLink>{recoveryMethod==="email" ? "Email me" : "Text me"}</LoginHelp.ButtonLink>
        </LoginHelp.FormBase>
        <LoginHelp.Link to="#">I don't remember my email or phone</LoginHelp.Link>
      </LoginHelp>
      <LoginHelpForm.Text fontSize="16px" style={{maxWidth: "460px", margin: "1em auto 3em"}}>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <LoginHelpForm.Link to="#"
          color="inherit"
          fontSize="inherit"
          style={{fontWeight: "inherit"}}
        >Learn more</LoginHelpForm.Link>
      </LoginHelpForm.Text>
    </Header>
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
    </>
  )
}
