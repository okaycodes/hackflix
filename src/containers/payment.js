import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"


export default function PaymentStepContainer(){
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
      <Registration.LinkSecondary to="#">
          Credit or Debit Card
          <Registration.IconSecondary src="./../../images/icons/visa-card.png" style={{padding: "6px 2.5px"}}/>
          <Registration.IconSecondary src="./../../images/icons/mastercard_icon.png"/>
          <Registration.IconSecondary src="./../../images/icons/icon_verve.png"/>
          <Registration.IconSecondary src="./../../images/icons/chevron-right-sharp.png"/>
      </Registration.LinkSecondary>
    </Registration>
  )}
