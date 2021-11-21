import {Header} from "./../components"
import {Routes, Route} from 'react-router-dom'

export default function SignUp({children}){
  return (
    <>
      <Header bg={false}>
        <Header.Frame backgroundColor="white" padding="50px 30px" margin="0 auto" >
          <Header.Logo height="45px" width="167px"
            src="./../../images/misc/logo.svg" alt="Netflix"/>
          <Header.ButtonLink />
        </Header.Frame>
      </Header>

      
    </>
  )
}
