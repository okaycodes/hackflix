import {Header} from "./../components"

export default function HeaderContainer({children}){

  const isLoggedin = localStorage.getItem("isLoggedin")

  return(
    <Header>
      <Header.Frame>
        <Header.Logo src="./../../images/misc/logo.svg" alt="Netflix" />
        {isLoggedin ? <Header.SignOutLink/>: <Header.SignInLink/>}
      </Header.Frame>
      {children}
    </Header>
  )
}
