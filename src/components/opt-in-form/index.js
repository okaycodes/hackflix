import {Container, Message, Label, InputWrapper, Input, Placeholder, Button} from "./styles/opt-in-form"

export default function OptInForm({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

OptInForm.Message = function OptInFormMessage({children, ...restProps}){
  return <Message {...restProps}>{children}</Message>
}

OptInForm.Input = function OptInFormInput({children, animated=true, placeholder, ...restProps}){
  return(
    <InputWrapper {...restProps}>
      <Label>
        <Input placeholder={!animated && placeholder}/>
        <Placeholder>{animated && placeholder}</Placeholder>
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
