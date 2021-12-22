import {Registration, Modal, PlanForm, RegForm} from "./../components"
import * as REGEX from './../constants/regex';
import * as ROUTES from './../constants/routes';
import {firebaseContext} from  "./../contexts/firebaseContext"
import {useContext, useState} from "react"

// import * as ROUTES from "./../constants/routes"



export default function PaymentFormContainer(){
  const {state, dispatch} = useContext(firebaseContext)
  const {firstName, firstNameIsActive} = state
  const {lastName, lastNameIsActive} = state
  const {cardNumber, cardNumberIsActive} = state
  const {expirationDate, expirationDateIsActive} = state
  const {securityCode, securityCodeIsActive} = state
  const {checkboxIsChecked, checkboxIsActive} = state
  const {planName, planPrice} = state
  const cardNumberIsValid = REGEX.CARD_NUMBER_VALIDATION.test(cardNumber)
  const expirationDateIsValid = REGEX.DATE_VALIDATION.test(expirationDate)
  const securityCodeIsValid = REGEX.CVV_VALIDATION.test(securityCode)

  const [cvvDisplay, setCVVDisplay] = useState("none")

  function handleClick(){
    setCVVDisplay(prev=>prev==="block" ? "none":"block")
  }

  return(
    <>
      <RegForm>
        <Registration.Title>Set up your credit or debit card</Registration.Title>
        <Registration.SubTitle>
          step <span>3</span> of <span>3</span>
        </Registration.SubTitle>
        <Registration.IconWrapper>
          <Registration.CardsIcon src="./../../images/icons/visa-card.png" padding="6px 2.5px"/>
          <Registration.CardsIcon src="./../../images/icons/mastercard_icon.png"/>
          <Registration.CardsIcon src="./../../images/icons/icon_verve.png"/>
        </Registration.IconWrapper>

        <RegForm.Input
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

        <RegForm.Input
          placeholder="Last name"
          name="lastName"
          value={lastName}
          isValid ={lastName.length>=0}
          isEmpty = {lastName.length<1}
          isActivated={lastNameIsActive}
          onChange={(event)=>dispatch({type: "input", payload:{lastName: event.target.value}})}
          onBlur={(event)=> dispatch({type:"blurred", payload: {lastNameIsActive: true}})}
        />

        <RegForm.Input
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

        <RegForm.Input
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

        <RegForm.Input
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
          <RegForm.Icon
            src="./../../images/icons/cvv.svg"
            onClick={handleClick}/>
        </RegForm.Input>

        <RegForm.ChangePlan>
          <div>
            <RegForm.Text fontWeight="bold">{planPrice}</RegForm.Text>
            <RegForm.Text color="#707070">{planName} Plan</RegForm.Text>
          </div>
          <RegForm.Link to={`./../../${ROUTES.PLAN_FORM}`}>Change</RegForm.Link>
        </RegForm.ChangePlan>

        <PlanForm.Terms>Your payments will be processed
          internationally. Additional bank fees may apply.</PlanForm.Terms>
        <PlanForm.Terms>
         By checking the checkbox below, you agree to our <PlanForm.Link to="#">Terms of Use, Privacy
         Statement</PlanForm.Link>, and that you are over 18. Netflix will automatically continue
         your membership and charge the membership fee (currently {planPrice})
         to your payment method until you cancel. You may cancel at any time
         to avoid future charges.</PlanForm.Terms>

        <RegForm.Checkbox
          isActive={checkboxIsActive}
          isChecked={checkboxIsChecked}
          errorMessage="You must agree to the terms and conditions to continue."
          fontSize="16px"
          onClick={()=>{
            dispatch({type: 'check'})}
          }>
          I agree
        </RegForm.Checkbox>
        <Registration.ButtonLink to="#" marginTop="2em" fontSize="23px">Start Membership</Registration.ButtonLink>
      </RegForm>
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
