import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"


export default function RegCompleteContainer(){
  const checkList = ["No commitments, cancel anytime.", "Everything on Netflix for one low price.",
    "No ads and no extra fees. Ever."]
  return(
    <Registration small={true}>
      <Registration.Title>Choose your plan.</Registration.Title>
      <Registration.SubTitle order="-1">
        step <span style={{fontWeight: "bold"}}>2</span> of <span style={{fontWeight: "bold"}}>3</span>
      </Registration.SubTitle>
      <Registration.Icon  order="-2" width="45px" src="./../../images/icons/check-mark-circle-line.svg"/>
      <Registration.List>
      {checkList.map(item => {
        return(
          <Registration.ListItem>
            <Registration.Icon  order="-2" width="20px" src="./../../images/icons/check-mark-line.svg"/>
            <Registration.Text margin=".6em">{item}</Registration.Text>
          </Registration.ListItem>
        )
      })}
      <Registration.Link to={ROUTES.SIGN_UP_HOME}>Next</Registration.Link>
      </Registration.List>
    </Registration>
  )}
