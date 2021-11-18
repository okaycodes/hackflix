import JumbotronContainer from "./../containers/jumbotron"
import FooterContainer from "./../containers/footer"
import AccordionContainer from "./../containers/accordion"
import HeaderContainer from "./../containers/header"
import {Feature} from "./../components"

export default function Home (){
  return (
    <>
      <HeaderContainer>
        <Feature />
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  )
}
