import {Container, Title, Text, ButtonLink, RadioButtonWrapper, RadioButton,
        FormBase,InputContainer, Link} from "./styles/loginHelp"


export default function LoginHelp ({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

LoginHelp.Title = function LoginHelpTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}

LoginHelp.Text = function LoginHelpText({children, ...restProps}){
  return <Text {...restProps}>{children}</Text>
}

LoginHelp.ButtonLink = function LoginHelpButtonLink({children, ...restProps}){
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

LoginHelp.RadioButton = function LoginHelpRadioButton({children, ...restProps}){
  return(
    <>
      <RadioButtonWrapper> {children}
        <RadioButton {...restProps}
          type="radio"
        />
        <span></span>
      </RadioButtonWrapper>
    </>
)}

LoginHelp.FormBase = function LoginHelpFormbase({children, ...restProps}){
  return <FormBase {...restProps}>{children}</FormBase>
}

LoginHelp.Link = function LoginHelpLink({children, ...restProps}){
  return <Link {...restProps}>{children}</Link>
}

LoginHelp.InputContainer = function LoginHelpInputContainer({children, ...restProps}){
  return <InputContainer {...restProps}>{children}</InputContainer>
}
