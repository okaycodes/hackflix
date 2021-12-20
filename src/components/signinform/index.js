import {
  Base,
  Container,
  Title,
  SubTitle,
  InputWrapper,
  Label,
  Input,
  Placeholder,
  CheckboxWrapper,
  Checkbox,
  ErrorMessage,
  Link,
  ButtonLink,
  Icon,
  Text,
  Submit,
  FlexBox} from "./styles/signinform"

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
        errorMessage1, errorMessage2, minLength, initialValue} = {...restProps}
  return(
    <InputWrapper {...restProps}>
      <Label>
        <Input {...restProps} placeholder={!animated ? placeholder: ""} />
        <Placeholder
          isEmpty={isEmpty}
          isActivated={isActivated}
          initialValue={initialValue}
        >
          {animated && placeholder}
        </Placeholder>
      </Label>
      <ErrorMessage>
      {((isActivated && !isValid) &&  value.length < minLength) ? errorMessage1:
      (isActivated && !isValid) && errorMessage2}
      </ErrorMessage>
    </InputWrapper>
  )}

  SignInForm.Checkbox = function SignInFormCheckbox({children, ...restProps}){
    return(
      <>
        <CheckboxWrapper {...restProps}>{children}
          <Checkbox{...restProps}/>
          <span></span>
        </CheckboxWrapper>
      </>
  )}

SignInForm.Link = function SignInFormLink({children, ...restProps}){
  return <Link {...restProps}>{children}</Link>
}

SignInForm.ButtonLink = function SignInFormButtonLink({children, ...restProps}){
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

SignInForm.Icon = function SignInFormIcon({...restProps}){
  return <Icon {...restProps} />
}

SignInForm.Text = function SignInFormText({children, ...restProps}){
  return <Text {...restProps}>{children}</Text>
}

SignInForm.Submit = function SignInFormSubmit({children, ...restProps}){
  return <Submit {...restProps}>{children}</Submit>
}

SignInForm.FlexBox = function SignInFormFlexBox({children, ...restProps}){
  return <FlexBox {...restProps}>{children}</FlexBox>
}
