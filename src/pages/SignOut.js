import {Header, SignOut, Footer} from "./../components"
import * as ROUTES from "./../constants/routes"
import {getAuth} from "firebase/auth"
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"


export default function SignOutPage(){
  const auth = getAuth();
  const navigate = useNavigate()
  /*
  navigate is called inside the setTimeout and handleSignOut instead of because
  the link is a buttona and not a react-router Link
  */



  const timeout = setTimeout(function () {
    navigate(ROUTES.HOME)
  }, 30000);

  const handleSignOut =()=>{
    auth.signOut().then(data=>{
      console.log(data)
      clearTimeout(timeout)
    })
  }

  return (
    <>
    <Header dontShowOnSmallViewPort src={"signout-bg"}>
      <Header.Frame>
        <Header.Logo src="./../../images/misc/logo.svg" alt="Netflix" />
        <Header.ButtonLink />
      </Header.Frame>
      <SignOut>
        <SignOut.Title>Leaving So Soon?</SignOut.Title>
        <SignOut.Text>Just so you know, you don't always need to sign out of Netflix.
        It's only necessary if you're on a shared or public computer.</SignOut.Text>

        <SignOut.Text>You will be redirected to Netflix.com in 30 seconds.</SignOut.Text>
        <SignOut.ButtonLink onClick={handleSignOut}>Go Now</SignOut.ButtonLink>
      </SignOut>
      <Footer backgroundColor="rgba(0,0,0, 0.7)" padding="2em 3em">
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
    </Header>
    </>
  )
}
