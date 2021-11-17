import {Container, Background, Logo, ButtonLink} from "./style/header"
import * as ROUTES from './../../constants/routes';
import {Link as ReactRouterLink} from "react-router-dom"

export default function Header({bg=true, children, ...restProps}){
  return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({children, ...restProps}){
  return <Container>{children}</Container>
}

Header.Logo = function HeaderLogo({children, ...restProps}){
  return <ReactRouterLink to={ROUTES.HOME}><Logo {...restProps}/></ReactRouterLink>
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
  return <ButtonLink to={ROUTES.SIGN_IN}>Sign In</ButtonLink>
}
