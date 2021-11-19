import JumbotronContainer from "./../containers/jumbotron"
import FooterContainer from "./../containers/footer"
import AccordionContainer from "./../containers/accordion"
import HeaderContainer from "./../containers/header"
import {OptInForm, Feature} from "./../components"


export default function Home (){
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
          <OptInForm>
            <OptInForm.Message>Ready to watch? Enter your email to create or restart your
             membership.</OptInForm.Message>
            <OptInForm.Input placeholder="Email address"/>
            <OptInForm.Button>Get Started</OptInForm.Button>
          </OptInForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  )
}
