import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"
import {inputContext} from  "./../contexts/inputContext"
import {useContext} from "react"


export default function PaymentFormContainer(){
  const {email, setEmail,
        firstName,firstNameIsActivated,firstNameErrorMessage,
        handleBlur, handleChange,

        lastName, setLastName,
        lastNameIsValid, setLastNameIsValid,
        lastNameIsActivated, setLastNameIsActivated,
        lastNameErrorMessage,

        cardNumber, setCardNumber,
        cardNumberIsValid, setCardNumberIsValid,
        cardNumberIsActivated, setCardNumberIsActivated,
        cardNumberErrorMessage,

        expirationDate, setExpirationDate,
        securityCode, setSecurityCode,
        emailIsValid,
        emailIsActivated, setEmailIsActivated,
        emailErrorMessage} = useContext(inputContext)

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
        placeholder="First name"
        name="firstName"
        value={firstName}
        isValid ={firstName.length>1}
        isEmpty = {firstName.length < 1}
        isActivated={firstNameIsActivated}
        errorMessage={firstNameErrorMessage}
        onChange={()=>handleChange}
        onBlur={()=>handleBlur}
      />
      <Registration.Input
        placeholder="Last name"
        name="lastName"
        value={lastName}
        isValid ={emailIsValid}
        isEmpty = {email.length < 1}
        isActivated={emailIsActivated}
        errorMessage={emailErrorMessage}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Registration.Input
        placeholder="Card number"
        name="cardNumber"
        value={cardNumber}
        isValid ={cardNumber>1}
        isEmpty = {cardNumber.length < 1}
        isActivated={emailIsActivated}
        errorMessage={emailErrorMessage}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Registration.Input
        placeholder="Expiration date (MM/YY)"
        name="expirationDate"
        value={expirationDate}
        isValid ={expirationDate > 1}
        isEmpty = {email.length < 1}
        isActivated={emailIsActivated}
        errorMessage={emailErrorMessage}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Registration.Input
        placeholder="Security Code (CVV)"
        name="securityCode"
        value={securityCode}
        isValid ={securityCode.length===2 && typeof securityCode==="number"}
        isEmpty = {securityCode.length < 1}
        isActivated={emailIsActivated}
        errorMessage={emailErrorMessage}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </Registration>
  )}
