import {useContext} from "react"
import {InputContextProvider, inputContext} from "./../../contexts/inputContext"
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
        ListItem} from "./styles/registration"


export default function Registration({children, ...restProps}){
  return(
    <InputContextProvider>
      <Container {...restProps}>
        <Inner {...restProps}>{children}</Inner>
      </Container>
    </InputContextProvider>
)}


Registration.Image = function RegistrationImage({children, ...restProps}){
  return <Image {...restProps} />
}

Registration.Icon = function RegistrationIcon({children, ...restProps}){
  return <Icon {...restProps} />
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

Registration.Input = function OptInFormInput({children, animated=true, placeholder, ...restProps}){
  const {email, handleChange, activatedInput, emailIsValid, isEmpty} = useContext(inputContext)
  return(
    <InputWrapper {...restProps}>
      <Label>
        <Input
          placeholder={!animated && placeholder}
          name = "email"
          value ={email}
          onChange={handleChange}
        />
        <Placeholder isEmpty = {isEmpty}>{animated && placeholder}</Placeholder>
      </Label>
      <ErrorMessage>
        {(activatedInput && email.length < 4) ? "Email is required" :
         activatedInput && !emailIsValid && "Please enter a valid email address"}
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
