import {Container, Background, Logo, Link} from "./style/header"
import {Link as ReachRouterLink} from "react-router-dom"

export default function Header({bg=true, children, ...restProps}){
  return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({children, ...restProps}){
  return <Container>{children}</Container>
}

Header.Logo = function HeaderLogo({children, to, ...restProps}){
  return <ReachRouterLink to={to}><Logo {...restProps}/></ReachRouterLink>
}
