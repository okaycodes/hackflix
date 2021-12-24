import {Container, Logo, SignInLink, SignOutLink} from "./styles/signupheader"
import * as ROUTES from './../../constants/routes';
import {Link as ReactRouterLink} from "react-router-dom"

export default function SignupHeader({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

SignupHeader.Logo = function SignupHeaderLogo({...restProps}){
  return <ReactRouterLink to={ROUTES.HOME} {...restProps}><Logo {...restProps} /></ReactRouterLink>
}

SignupHeader.SignInLink = function SignupHeaderSignInLink({children, ...restProps}){
  return <SignInLink to={ROUTES.SIGN_IN} {...restProps}>Sign In</SignInLink>
}

SignupHeader.SignOutLink = function SignupHeaderSignOutLink({children, ...restProps}){
  return <SignOutLink to={ROUTES.SIGN_OUT} {...restProps}>Sign Out</SignOutLink>
}
