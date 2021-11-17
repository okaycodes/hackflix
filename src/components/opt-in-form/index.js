import {Container, Message, Wrapper, Label, InputWrapper, Input, Placeholder, Button} from "./styles/opt-in-form"

export default function OptInForm({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

OptInForm.Message = function OptInFormMessage({children, ...restProps}){
  return <Message {...restProps}>{children}</Message>
}

OptInForm.Wrapper = function OptInFormWrapper({children, ...restProps}){
  return <Wrapper {...restProps}>{children}</Wrapper>
}

OptInForm.Input = function OptInFormInput({children, ...restProps}){
  return(
    <InputWrapper>
      <Label>
        <Input placeholder=""/>
        <Placeholder>Email address</Placeholder>
      </Label>
    </InputWrapper>
  )}

OptInForm.Button = function OptInFormButton({children, ...restProps}){
  return (
      <Button {...restProps}>
          {children} <img src="./../../images/icons/chevron-right.png" alt="chevron right" />
      </Button>
        )
}
