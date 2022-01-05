import JumbotronContainer from "./../containers/jumbotron"
import FooterContainer from "./../containers/footer"
import AccordionContainer from "./../containers/accordion"
import HeaderContainer from "./../containers/header"
import {OptInForm, Feature} from "./../components"
import * as ROUTES from './../constants/routes';
import { useContext } from "react"
import {authContext} from  "./../contexts/authContext"


export default function Home (){
  const {user, currentStepUrl} = useContext(authContext)

  return (
    <>
      <HeaderContainer>
        <Feature>
          {user && <Feature.SubTitle>Welcome back!</Feature.SubTitle>}
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          { user ?
            <OptInForm>
              <OptInForm.WelcomeBackBtn to={currentStepUrl}>Finish Sign Up</OptInForm.WelcomeBackBtn>
            </OptInForm>
            :
            <OptInForm>
              <OptInForm.Message>Ready to watch? Enter your email to create or restart your
               membership.</OptInForm.Message>
              <OptInForm.Input placeholder="Email address"/>
              <OptInForm.Button to={ROUTES.REGISTRATION}>Get Started</OptInForm.Button>
            </OptInForm>
         }
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  )
}
