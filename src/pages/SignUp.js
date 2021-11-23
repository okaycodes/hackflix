import {Header, Footer} from "./../components"
import {Routes, Route} from 'react-router-dom'
import RegistrationContainer from "./../containers/registration"
import RegFormContainer from "./../containers/regform"
import RegCompleteContainer from "./../containers/regcomplete"
import * as ROUTES from "./../constants/routes"

export default function SignUp({children}){
  return (
    <>
      <Header bg={false}>
        <Header.Frame backgroundColor="white" padding="50px 30px" margin="0 auto" >
          <Header.Logo height="45px" width="167px"
            src="./../../images/misc/logo.svg" alt="Netflix"/>
          <Header.ButtonLink buttonSecondary={true}/>
        </Header.Frame>
      </Header>

    <Routes>
      <Route exact path="/" element={<RegCompleteContainer />} />
      <Route exact path="/registration" element={<RegistrationContainer />}/>
      <Route exact path="/regform" element={<RegFormContainer />} />
    </Routes>

    <Footer backgroundColor="#ededed" padding="2em 3em">
      <Footer.Title>Questions? Contact Us</Footer.Title>
      <Footer.Row>
        <Footer.Link href="#">FAQs</Footer.Link>
        <Footer.Link href="#">Help Center</Footer.Link>
        <Footer.Link href="#">Terms of Use</Footer.Link>
        <Footer.Link href="#">Privacy</Footer.Link>
        <Footer.Link href="#">Cookie Preferences</Footer.Link>
        <Footer.Link href="#">Corporate Information</Footer.Link>
      </Footer.Row>
    </Footer>
    </>
  )
}
