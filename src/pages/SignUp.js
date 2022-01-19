import {SignupHeader, Footer} from "./../components"
import {Outlet} from 'react-router-dom'
import {useContext} from "react"
import { authContext } from "../contexts/authContext"


export default function SignUp({children}){
  const {user} = useContext(authContext)

  // auth is used here for determining logged if user is logged in
  // because it causes the whole page to refresh allowing for UI changes
  // to be rendered in the header that will otherwise not render. the use
  // of nomal href link in linking to this page will have similar effects.

  return (
    <>
      <SignupHeader>
          <SignupHeader.Logo src="./images/misc/logo.svg" alt="Netflix"/>
          {user ? <SignupHeader.SignOutLink /> : <SignupHeader.SignInLink />}
      </SignupHeader>
      <Outlet />
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
