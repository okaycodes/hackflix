import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"
import {inputContext} from  "./../contexts/inputContext"
import {useContext} from "react"


export default function PaymentFormContainer(){
  const {email, setEmail,
        password, setPassword,
        emailIsValid, passwordIsValid,
        emailIsActivated, setEmailIsActivated,
        passwordIsActivated, setPasswordIsActivated,
        emailErrorMessage, passwordErrorMessage} = useContext(inputContext)

  return(
    <Registration style={{alignItems: "start"}}>
      <Registration.Title>Set up your credit or debit card</Registration.Title>
      <Registration.SubTitle>
        step <span style={{fontWeight: "bold"}}>3</span> of <span style={{fontWeight: "bold"}}>3</span>
      </Registration.SubTitle>
      <Registration.IconWrapper>
        <Registration.IconSecondary src="./../../images/icons/visa-card.png" style={{padding: "6px 2.5px"}}/>
        <Registration.IconSecondary src="./../../images/icons/mastercard_icon.png"/>
        <Registration.IconSecondary src="./../../images/icons/icon_verve.png"/>
      </Registration.IconWrapper>
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
    </Registration>
  )}
