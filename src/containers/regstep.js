import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"


export default function RegStepContainer(){
  const checkList = ["No commitments, cancel anytime.", "Everything on Netflix for one low price.",
    "No ads and no extra fees. Ever."]
  return(
    <Registration marginTop="120px" textAlign="center">
      <Registration.Title>Choose your plan.</Registration.Title>
      <Registration.SubTitle textAlign="center">
        step <span>2</span> of <span>3</span>
      </Registration.SubTitle>
      <Registration.Icon  style width="50px"  src="./images/icons/check-mark-circle-line.svg"/>
      <Registration.List padding="0 1.5em">
      {checkList.map((item, index) => {
        return(
          <Registration.ListItem key={index}>
            <Registration.ListIcon src="./images/icons/check-mark-line.svg"/>
            <Registration.ListText>{item}</Registration.ListText>
          </Registration.ListItem>
        )
      })}
      </Registration.List>
      <Registration.NavigateLink to={`./../${ROUTES.PLAN_FORM}`}>Next</Registration.NavigateLink>

    </Registration>
  )}
