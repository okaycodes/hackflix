import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"

export default function RegFormContainer(){
  return(
    <Registration>
      <Registration.Title>Create a password to start your membership</Registration.Title>
      <Registration.SubTitle order="-1" alignLeft={true}>
        step <span style={{fontWeight: "bold"}}>1</span> of <span style={{fontWeight: "bold"}}>3</span>
      </Registration.SubTitle>
      <Registration.Text alignLeft={true}>Just a few more steps and you're done!
      We hate paperwork, too.</Registration.Text>
      <Registration.Input placeholder="Email address"/>
      <Registration.Input placeholder="Add a password"/>
      <Registration.Checkbox />
      <Registration.Link to={ROUTES.SIGN_UP_HOME}>Next</Registration.Link>
    </Registration>
)}
