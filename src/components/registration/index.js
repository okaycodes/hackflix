import {Container,
        Inner,
        Icon,
        Image,
        Title,
        SubTitle,
        Text,
        Link,
        Label,
        InputWrapper,
        Input,
        Placeholder,
        ErrorMessage,
        CheckboxWrapper,
        Checkbox,
        List,
        ListItem,
        IconSecondary,
        LinkSecondary,
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

Registration.IconSecondary = function RegistrationIconSecondary({children, ...restProps}){
  return <IconSecondary {...restProps} />
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

Registration.Link = function RegistrationLink({children, ...restProps}){
  return <Link {...restProps}>{children}</Link>
}

Registration.LinkSecondary = function RegistrationLinkSecondary({children, ...restProps}){
  return <LinkSecondary {...restProps}>{children}</LinkSecondary>
}

Registration.Input = function RegistrationInput({children,  errorColor="#a82b28", animated=true, ...restProps}){
  const {value, isEmpty, isValid, isActivated, placeholder,
        errorMessage1, errorMessage2, minLength} = {...restProps}
  return(
    <InputWrapper {...restProps}>
      <Label>
        <Input {...restProps} placeholder={!animated && placeholder} errorColor={errorColor}/>
        <Placeholder isEmpty={isEmpty}>{animated && placeholder}</Placeholder>
      </Label>
      <ErrorMessage errorColor={errorColor}>
      {((isActivated && !isValid) &&  value.length < minLength) ? errorMessage1:
      (isActivated && !isValid) && errorMessage2}
      </ErrorMessage>
    </InputWrapper>
  )}

Registration.Checkbox = function RegistrationCheckbox({children, ...restProps}){
  return(
    <CheckboxWrapper> Please do not email me Netflix special offers.
      <Checkbox type="checkbox" {...restProps}>{children}</Checkbox>
      <span></span>
    </CheckboxWrapper>
)}

Registration.List = function RegistrationList({children, ...restProps}){
  return <List {...restProps}>{children}</List>
}

Registration.ListItem = function RegistrationListItem({children, ...restProps}){
  return <ListItem {...restProps}>{children}</ListItem>
}
