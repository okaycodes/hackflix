import {Container, Title, Text, ButtonLink} from "./styles/signout"



export default function SignOut ({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

SignOut.Title = function SignOutTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}

SignOut.Text = function SignOutText({children, ...restProps}){
  return <Text {...restProps}>{children}</Text>
}

SignOut.ButtonLink = function SignOutButtonLink({children, ...restProps}){
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}
