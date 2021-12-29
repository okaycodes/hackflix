import {Header, LoginHelp, Selectbtn} from "./../components"
import {useState, useRef} from "react"


export default function LoginHelpPage(){
  /*
  navigate is called inside the setTimeout and handleSignOut instead of the link because
  the link is a button and not a react-router Link
  */

  return (
    <>
    <Header dontShowOnSmallViewPort src={"signout-bg"}>
      <Header.Frame>
        <Header.Logo src="./../../images/misc/logo.svg" alt="Netflix" />
        <Header.SignInLink />
      </Header.Frame>
      <LoginHelp>
        <LoginHelp.Title>Forgot Email/Password</LoginHelp.Title>
        <LoginHelp.Text>How would you like to reset your password?</LoginHelp.Text>
        <LoginHelp.RadioButton value="email">Email</LoginHelp.RadioButton>
        <LoginHelp.RadioButton value="text message">Text Message(SMS)</LoginHelp.RadioButton>
        <LoginHelp.Text>We will send you an email with instructions on how to reset
        your password.</LoginHelp.Text>
        <Selectbtn />
        <LoginHelp.ButtonLink >Email me</LoginHelp.ButtonLink>
      </LoginHelp>
    </Header>
    </>
  )
}
