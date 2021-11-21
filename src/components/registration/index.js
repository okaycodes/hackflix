import {Container, Image, Title, SubTitle, Text, Link} from "./styles/registration"


export default function Registration({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}


Registration.Image = RegistrationImage({children, ...restProps}){
  return <Image {...restProps} />
}

Registration.Title = RegistrationTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}

Registration.SubTitle = RegistrationSubTitle({children, ...restProps}){
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Registration.Text = RegistrationText({children, ...restProps}){
  return <Text {...restProps}>{children}</Text>
}

Registration.Link = RegistrationLink({children, ...restProps}){
  return <Link {...restProps}>{children}</Link>
}
