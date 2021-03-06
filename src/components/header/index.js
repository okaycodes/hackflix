import {Container, Background, Logo, ButtonLink} from "./style/header"
import * as ROUTES from './../../constants/routes';
import {Link as ReactRouterLink} from "react-router-dom"

export default function Header({bg=true, children, ...restProps}){
  return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({...restProps}){
  return <ReactRouterLink to={ROUTES.HOME} {...restProps}><Logo {...restProps} /></ReactRouterLink>
}

Header.SignInLink = function HeaderButtonLink({children, ...restProps}){
  return <ButtonLink to={ROUTES.SIGN_IN} {...restProps}>Sign In</ButtonLink>
}

Header.SignOutLink = function HeaderSignOutLink({children, ...restProps}){
  return <ButtonLink to={ROUTES.SIGN_OUT} {...restProps}>Sign Out</ButtonLink>
}
