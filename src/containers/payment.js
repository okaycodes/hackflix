import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"


export default function PaymentStepContainer(){
  return(
    <Registration>
      <Registration.Title>Set your payment</Registration.Title>
      <Registration.SubTitle style={{textAlign: "center"}}>
        step <span style={{fontWeight: "bold"}}>3</span> of <span style={{fontWeight: "bold"}}>3</span>
      </Registration.SubTitle>
      <Registration.Icon  style={{width:"45px"}}  src="./../../images/icons/lock.png"/>
      <Registration.Text>Your membership starts as soon as you set up payment.</Registration.Text>
      <Registration.Text>No commitments.<br />Cancel online anytime.</Registration.Text>
    </Registration>
  )}
