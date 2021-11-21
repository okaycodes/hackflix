import {Header} from "./../components"


export default function HeaderContainer({children}){
  return(
    <Header>
      <Header.Frame>
        <Header.Logo src="./../../images/misc/logo.svg" alt="Netflix" />
        <Header.ButtonLink />
      </Header.Frame>
      {children}
    </Header>
  )
}
