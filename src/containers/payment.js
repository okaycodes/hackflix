import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"

/*====================
COME BACK TO THIS
=====================*/
// refactor out long inline styles declarations

export default function PaymentStepContainer(){

  return(
    <Registration maxWidth= "500px" marginTop="40px" textAlign="center">
      <Registration.Title>Set your payment</Registration.Title>
      <Registration.SubTitle> step <span>3</span> of <span>3</span></Registration.SubTitle>
      <Registration.Icon width="50px"  src="./images/icons/lock.png"/>
      <Registration.Text>
        Your membership starts as<br/> soon as you set up<br/> payment.
      </Registration.Text >
      <Registration.Text fontWeight="bold" fontSize="18px">
        No commitments.<br />Cancel online anytime.
      </Registration.Text>
      <Registration.IconWrapper
        style={{width: "100%", justifyContent: "right", alignItems: "end", marginTop: "20px", padding: "0"}}>
        <Registration.Text fontSize="13px">
          Secure Server
        </Registration.Text>
        <Registration.SecureIcon src="./images/icons/lock.svg" />
      </Registration.IconWrapper>
      <Registration.CardsPaymentLink to={`./../../${ROUTES.PAYMENT_FORM}`}>
        <div style={{display: "flex"}}>
          <Registration.Text marginTop="0" marginRight="1em">
            Credit or Debit Card
          </Registration.Text>
          <Registration.IconWrapper>
            <Registration.CardsIcon src="./images/icons/visa-card.png" padding="6px 2.5px"/>
            <Registration.CardsIcon src="./images/icons/mastercard_icon.png"/>
            <Registration.CardsIcon src="./images/icons/icon_verve.png"/>
          </Registration.IconWrapper>
        </div>
        <Registration.CardsIcon
          src="./images/icons/netflix-chevron-right.png"
          style={{height: "19px", width: "19px", border: "none", margin:0}}/>
      </Registration.CardsPaymentLink>
    </Registration>
  )}
