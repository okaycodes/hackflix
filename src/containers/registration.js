import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"


export default function RegistrationContainer(){
  return(
  <Registration maxWidth="340px" textAlign="center" marginTop="125px">
    <Registration.Title>Finish setting up your account</Registration.Title>
    <Registration.SubTitle>
      step <span>1</span> of <span>3</span>
    </Registration.SubTitle>
    <Registration.Image src="./images/icons/devices.png" alt="Devices"/>
    <Registration.Text fontSize="18px">
      Netflix is personalized for you. <br/> Create a
      password to watch on any device at any time.
    </Registration.Text>
    <Registration.NavigateLink to= {`../../${ROUTES.REG_FORM}`}>Next</Registration.NavigateLink>
  </Registration>
)}
