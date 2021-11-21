import {Header} from "./../../components"

export default function SignUp({children}){
  return (
      <Header bg={false}>
        <Header.Frame backgroundColor="white" padding="50px 30px" margin="0 auto" >
          <Header.Logo
            signupEdit={{
              dimension:"height: 45px; width: 167px"}}
            src="./../../images/misc/logo.svg" alt="Netflix"/>
          <Header.ButtonLink />
        </Header.Frame>
        {children}
      </Header>
  )
}
