import {Header} from "./../components"
import { authContext } from "../contexts/authContext"
import { useContext } from "react"

export default function HeaderContainer({children}){
  const {user} = useContext(authContext)

  return(
    <Header>
      <Header.Frame>
        <Header.Logo src="./images/misc/logo.svg" alt="Netflix" />
        {user ? <Header.SignOutLink/>: <Header.SignInLink/>}
      </Header.Frame>
      {children}
    </Header>
  )
}
