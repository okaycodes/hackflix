import {Registration, Modal, PlanForm} from "./../components"
import * as REGEX from './../constants/regex';
import {inputContext} from  "./../contexts/inputContext"
import {useContext, useState} from "react"

// import * as ROUTES from "./../constants/routes"



export default function PaymentFormContainer(){
  const {state, dispatch} = useContext(inputContext)
  const {firstName, firstNameIsActive} = state
  const {lastName, lastNameIsActive} = state
  const {cardNumber, cardNumberIsActive} = state
  const {expirationDate, expirationDateIsActive} = state
  const {securityCode, securityCodeIsActive} = state
  const {checkboxIsChecked, checkboxIsActive} = state
  const cardNumberIsValid = REGEX.CARD_NUMBER_VALIDATION.test(cardNumber)
  const expirationDateIsValid = REGEX.DATE_VALIDATION.test(expirationDate)
  const securityCodeIsValid = REGEX.CVV_VALIDATION.test(securityCode)
  const filterGrey = "invert(85%) sepia(21%) saturate(17%) hue-rotate(119deg) brightness(93%) contrast(95%)"

  const [cvvDisplay, setCVVDisplay] = useState("none")

  function handleClick(){
    setCVVDisplay(prev=>prev==="block" ? "none":"block")
  }

  return(
    <>
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
          isValid ={firstName.length>=1}
          isEmpty = {firstName.length<1}
          isActivated={firstNameIsActive}
          errorMessage1="Please enter a first name"
          minLength={1}
          onChange={(event)=>dispatch({type: "input", payload: {firstName: event.target.value}})}
          onBlur={(event)=>dispatch({type:"blurred", payload: {firstNameIsActive: true}})}
        />

        <Registration.Input
          placeholder="Last name"
          name="lastName"
          value={lastName}
          isValid ={lastName.length>=0}
          isEmpty = {lastName.length<1}
          isActivated={lastNameIsActive}
          onChange={(event)=>dispatch({type: "input", payload:{lastName: event.target.value}})}
          onBlur={(event)=> dispatch({type:"blurred", payload: {lastNameIsActive: true}})}
        />

        <Registration.Input
          placeholder="Card number"
          name="cardNumber"
          value={cardNumber}
          isValid ={cardNumberIsValid}
          isEmpty = {cardNumber.length<1}
          isActivated={cardNumberIsActive}
          errorMessage1="Please enter a card number"
          errorMessage2="Please enter a valid credit card number"
          minLength={1}
          onChange={(event)=>dispatch({type: "input", payload: {cardNumber: event.target.value}})}
          onBlur={(event)=>dispatch({type:"blurred", payload: {cardNumberIsActive: true}})}
        />

        <Registration.Input
          placeholder="Expiration date (MM/YY)"
          name="expirationDate"
          value={expirationDate}
          isValid ={expirationDateIsValid}
          isEmpty = {expirationDate.length<1}
          isActivated={expirationDateIsActive}
          errorMessage1="Please enter an expiration month"
          errorMessage2="Please enter a valid expiration month"
          minLength={1}
          onChange={(event)=>dispatch({type: "input", payload: {expirationDate: event.target.value}})}
          onBlur={(event)=>dispatch({type:"blurred", payload: {expirationDateIsActive: true}})}
        />

        <Registration.Input
          placeholder="Security code (CVV)"
          name="securityCode"
          value={securityCode}
          isValid ={securityCodeIsValid}
          isEmpty = {securityCode.length<1}
          isActivated={securityCodeIsActive}
          errorMessage1="Please enter a security code (CVV)"
          errorMessage2="Please enter a valid CVV code"
          minLength={1}
          onChange={(event)=>dispatch({type: "input", payload: {securityCode: event.target.value}})}
          onBlur={(event)=>dispatch({type: "blurred", payload: {securityCodeIsActive: true}})}
        >
          <Registration.Icon
            style={{width:"36px", filter: filterGrey, opacity: .6}}
            src="./../../images/icons/cvv.svg"
            onClick={handleClick}/>
        </Registration.Input>

        <Registration.Input
        placeholder="plan goes here"></Registration.Input>

        <Registration.Text fontSize="13.2px" color='grey'>Your payments will be processed
          internationally. Additional bank fees may apply.</Registration.Text>

        <Registration.Text align="left" fontSize="13.2px" color='grey' marginTop="4em">
         By checking the checkbox below, you agree to our <PlanForm.Link to="#">Terms of Use, Privacy
         Statement</PlanForm.Link>, and that you are over 18. Netflix will automatically continue
         your membership and charge the membership fee (currently ₦3,600/month)
         to your payment method until you cancel. You may cancel at any time
         to avoid future charges.</Registration.Text>
        <Registration.Checkbox
          isActive={checkboxIsActive}
          isChecked={checkboxIsChecked}
          errorMessage="You must agree to the terms and conditions to continue."
          fontSize="16px"
          onClick={()=>{
            dispatch({type: 'check'})}
          }>
          I agree
        </Registration.Checkbox>
        <Registration.Link to="#" marginTop="2em" fontSize="23px">Start Membership</Registration.Link>
      </Registration>
      <Modal display={cvvDisplay}>
        <Modal.Header>
          <Modal.Icon src="./../../images/icons/close-slim.png" onClick={handleClick}/>
        </Modal.Header>
        <Modal.Wrapper>
          <Modal.Text align="center" width="271px">Your card's security code (CVV)
          is the 3 or 4 digit number located on the back of most cards.</Modal.Text>
          <Modal.Image src="./../../images/misc/cvv1.png"/>
          <Modal.Image src="./../../images/misc/cvv21.png"/>
        </Modal.Wrapper>
      </Modal>
    </>
  )}
