import {SignupHeader, Footer} from "./../components"
import {Routes, Route, Navigate, Outlet} from 'react-router-dom'
import RegistrationContainer from "./../containers/registration"
import {getAuth, onAuthStateChanged} from "firebase/auth"
import {useState} from "react"



/*====================
COME BACK TO THIS
=====================*/
// import * as ROUTES from "./../constants/routes"

export default function SignUp({children}){
  const [isLoggedin, setIsLoggedin] = useState(false)
  const auth = getAuth()

  onAuthStateChanged(auth, (user)=>{
    user && setIsLoggedin(true)
  })
  // auth is used here for determining logged if user is logged in
  // because it causes the whole page to refresh allowing for UI changes
  // to be rendered in the header that will otherwise not render. the use
  // of nomal href link in linking to this page will have similar effects.

  return (
    <>
      <SignupHeader>
          <SignupHeader.Logo src="./../../images/misc/logo.svg" alt="Netflix"/>
          {isLoggedin ? <SignupHeader.SignOutLink /> : <SignupHeader.SignInLink />}
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
