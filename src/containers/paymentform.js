import {Registration} from "./../components"
// import * as ROUTES from "./../constants/routes"



export default function PaymentFormContainer(){

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
    </Registration>
  )}
