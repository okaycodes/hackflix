import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"

/*====================
COME BACK TO THIS
=====================*/
// refactor out long inline styles declarations

export default function PaymentStepContainer(){
  const filterGrey = "invert(85%) sepia(21%) saturate(17%) hue-rotate(119deg) brightness(93%) contrast(95%)"
  const filterYellow = "invert(77%) sepia(61%) saturate(423%) hue-rotate(352deg) brightness(92%) contrast(95%)"
  return(
    <Registration style={{textAlign: "center", justifyContent: "center"}}>
      <Registration.Title>Set your payment</Registration.Title>
      <Registration.SubTitle>
        step <span style={{fontWeight: "bold"}}>3</span> of <span style={{fontWeight: "bold"}}>3</span>
      </Registration.SubTitle>
      <Registration.Icon  style={{width:"45px"}}  src="./../../images/icons/lock.png"/>
      <Registration.Text >
        Your membership starts as<br/> soon as you set up<br/> payment.
      </Registration.Text>
      <Registration.Text style={{fontWeight: "bold"}}>
        No commitments.<br />Cancel online anytime.
      </Registration.Text>
      <Registration.IconWrapper
        style={{width: "100%",
                justifyContent: "right",
                alignItems: "end",
                marginTop: "20px",
                padding: "0"}}>
        <Registration.Text style={{fontSize: "13px", marginRight: "5px"}}>Secure Server</Registration.Text>
        <Registration.IconSecondary
          src="./../../images/icons/lock.svg"
          style={{margin: "2.5px", width: "12px", height: "auto", border: "none", filter: filterYellow}}/>
      </Registration.IconWrapper>
      <Registration.LinkSecondary to={`./../../${ROUTES.PAYMENT_FORM}`}>
          Credit or Debit Card
          <Registration.IconWrapper>
            <Registration.IconSecondary src="./../../images/icons/visa-card.png" style={{padding: "6px 2.5px"}}/>
            <Registration.IconSecondary src="./../../images/icons/mastercard_icon.png"/>
            <Registration.IconSecondary src="./../../images/icons/icon_verve.png"/>
          </Registration.IconWrapper>
          <Registration.IconSecondary
            src="./../../images/icons/chevron-right.svg"
            style={{height: "30px", border: "none", filter: filterGrey}}/>
      </Registration.LinkSecondary>
    </Registration>
  )}
