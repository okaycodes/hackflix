import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"


export default function RegistrationContainer(){
  return(
  <Registration small={true}>
    <Registration.Title>Finish setting up your account</Registration.Title>
    <Registration.SubTitle order="-1">
      step <span style={{fontWeight: "bold"}}>1</span> of <span style={{fontWeight: "bold"}}>3</span>
    </Registration.SubTitle>
    <Registration.Image order="-2" src="./../../images/icons/devices.png" alt="Devices"/>
    <Registration.Text>Netflix is personalized for you. Create a
    password to watch on any device at any time.</Registration.Text>
    <Registration.Link to={`../../${ROUTES.REG_FORM}`}>Next</Registration.Link>
  </Registration>
)}
