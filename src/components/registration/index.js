import {Container, Inner, Icon, Image, Title, SubTitle, Text, ButtonLink,
        List, ListItem, ListText, ListIcon, SecureIcon, CardsIcon, CardsPaymentLink,
        IconWrapper} from "./styles/registration"


export default function Registration({children, ...restProps}){
  return(
      <Container {...restProps}>
        <Inner {...restProps}>{children}</Inner>
      </Container>
)}


Registration.Image = function RegistrationImage({children, ...restProps}){
  return <Image {...restProps} />
}

Registration.Icon = function RegistrationIcon({children, ...restProps}){
  return <Icon {...restProps} />
}

Registration.IconWrapper = function RegistrationIconWrapper({children, ...restProps}){
  return  <IconWrapper {...restProps}>{children}</IconWrapper>
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

Registration.ButtonLink = function RegistrationButtonLink({children, ...restProps}){
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Registration.SecureIcon = function RegistratinSecureIcon({children, ...restProps}){
  return <SecureIcon {...restProps}>{children}</SecureIcon>
}

Registration.CardsPaymentLink = function RegistrationCardsPaymentLink({children, ...restProps}){
  return <CardsPaymentLink {...restProps}>{children}</CardsPaymentLink>
}

Registration.CardsIcon = function RegistrationCardsIcon({children, ...restProps}){
  return <CardsIcon {...restProps} />
}

Registration.List = function RegistrationList({children, ...restProps}){
  return <List {...restProps}>{children}</List>
}

Registration.ListItem = function RegistrationListItem({children, ...restProps}){
  return <ListItem {...restProps}>{children}</ListItem>
}

Registration.ListText = function RegistrationListText({children, ...restProps}){
  return <ListText {...restProps}>{children}</ListText>
}

Registration.ListIcon = function RegistrationListIcon({children, ...restProps}){
  return <ListIcon {...restProps}>{children}</ListIcon>
}
