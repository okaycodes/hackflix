import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"


export default function RegistrationContainer(){
  return(
  <Registration maxWidth="340">
    <Registration.Title>Finish setting up your account</Registration.Title>
    <Registration.SubTitle style={{textAlign: "center", order: -1}}>
      step <span style={{fontWeight: "bold"}}>1</span> of <span style={{fontWeight: "bold"}}>3</span>
    </Registration.SubTitle>
    <Registration.Image src="./../../images/icons/devices.png" alt="Devices"/>
    <Registration.Text style={{alignSelf: "center", textAlign: "center"}}>
      Netflix is personalized for you. Create a
      password to watch on any device at any time.
    </Registration.Text>
    <Registration.ButtonLink to={`../../${ROUTES.REG_FORM}`}>Next</Registration.ButtonLink>
  </Registration>
)}
