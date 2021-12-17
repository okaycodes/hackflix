import {
  Base,
  Container,
  Title,
  SubTitle,
  InputWrapper,
  Label,
  Input,
  Placeholder,
  Checkbox,
  ErrorMessage,
  Link,
  Text,
  Submit} from "./styles/signinform"

export default function SignInForm({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

SignInForm.Base = function SignInFormBase({children, ...restProps}){
  return <Base {...restProps}>{children}</Base>
}

SignInForm.Title = function SignInFormTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}

SignInForm.SubTitle = function SignInFormSubTitle({children, ...restProps}){
  return <SubTitle {...restProps}>{children}</SubTitle>
}

SignInForm.Input = function SignInForm({children,  animated=true, ...restProps}){
  const {value, isEmpty, isValid, isActivated, placeholder,
        errorMessage1, errorMessage2, minLength} = {...restProps}
  return(
    <InputWrapper {...restProps}>
      <Label>
        <Input {...restProps} placeholder={!animated && placeholder} />
        <Placeholder isEmpty={isEmpty}>{animated && placeholder}</Placeholder>
      </Label>
      <ErrorMessage>
      {((isActivated && !isValid) &&  value.length < minLength) ? errorMessage1:
      (isActivated && !isValid) && errorMessage2}
      </ErrorMessage>
    </InputWrapper>
  )}

  SignInForm.Checkbox = function SignInFormCheckbox({children, ...restProps}){
    const {isActive, isChecked, errorMessage, fontSize} = {...restProps}
    return(
      <>
        <CheckboxWrapper> {children}
          <Checkbox type="checkbox" {...restProps} />
          <span></span>
        </CheckboxWrapper>
        <ErrorMessage fontSize={fontSize}>
          {isActive && !isChecked && errorMessage}
        </ErrorMessage>
      </>
  )}

SignInForm.Link = function SignInFormLink({children, ...restProps}){
  return <Link {...restProps}>{children}</Link>
}

SignInForm.Text = function SignInFormText({children, ...restProps}){
  return <Text {...restProps}>{children}</Text>
}

SignInForm.Submit = function SignInFormSubmit({children, ...restProps}){
  return <Submit {...restProps}>{children}</Submit>
}
