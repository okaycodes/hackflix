import {Container, Inner, Image, Title, SubTitle, Text, Link} from "./styles/registration"


export default function Registration({children, ...restProps}){
  return <Container {...restProps}><Inner>{children}</Inner></Container>
}


Registration.Image = function RegistrationImage({children, ...restProps}){
  return <Image {...restProps} />
}

Registration.Title = function RegistrationTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}

Registration.SubTitle = function RegistrationSubTitle({children, ...restProps}){
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Registration.Text = function RegistrationText({children, ...restProps}){
  return <Text {...restProps}>{children}</Text>
}

Registration.Link = function RegistrationLink({children, ...restProps}){
  return <Link {...restProps}>{children}</Link>
}
