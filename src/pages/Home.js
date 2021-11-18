import JumbotronContainer from "./../containers/jumbotron"
import FooterContainer from "./../containers/footer"
import AccordionContainer from "./../containers/accordion"
import HeaderContainer from "./../containers/header"
import {OptInForm} from "./../components"


export default function Home (){
  return (
    <>
      <HeaderContainer>
        <OptInForm>
          <OptInForm.Message>Ready to watch? Enter your email to create or restart your
           membership.</OptInForm.Message>
          <OptInForm.Input />
          <OptInForm.Button>Get Started</OptInForm.Button>
        </OptInForm>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  )
}
