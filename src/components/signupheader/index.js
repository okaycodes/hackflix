import {Container, Logo, ButtonLink} from "./styles/signupheader"
import * as ROUTES from './../../constants/routes';
import {Link as ReactRouterLink} from "react-router-dom"

export default function SignupHeader({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

SignupHeader.Logo = function SignupHeaderLogo({...restProps}){
  return <ReactRouterLink to={ROUTES.HOME} {...restProps}><Logo {...restProps} /></ReactRouterLink>
}

SignupHeader.ButtonLink = function SignupHeaderButtonLink({children, ...restProps}){
  return <ButtonLink to={ROUTES.SIGN_IN} {...restProps}>Sign In</ButtonLink>
}
