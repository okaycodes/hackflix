import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"


export default function RegStepContainer(){
  const checkList = ["No commitments, cancel anytime.", "Everything on Netflix for one low price.",
    "No ads and no extra fees. Ever."]
  return(
    <Registration small={true}>
      <Registration.Title>Choose your plan.</Registration.Title>
      <Registration.SubTitle style={{textAlign: "center"}}>
        step <span style={{fontWeight: "bold"}}>2</span> of <span style={{fontWeight: "bold"}}>3</span>
      </Registration.SubTitle>
      <Registration.Icon  style={{width:"45px"}}  src="./../../images/icons/check-mark-circle-line.svg"/>
      <Registration.List>
      {checkList.map(item => {
        return(
          <Registration.ListItem>
            <Registration.Icon src="./../../images/icons/check-mark-line.svg"/>
            <Registration.Text style={{marginTop: 0}}>{item}</Registration.Text>
          </Registration.ListItem>
        )
      })}
      </Registration.List>
      <Registration.Link to={`./../${ROUTES.PLAN_FORM}`}>Next</Registration.Link>
    </Registration>
  )}
