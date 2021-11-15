import {Container, Message, Wrapper, Input, Placeholder, Button} from "./styles/opt-in-form"

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
    <>
      <Input placeholder="Email address"/>
      <Placeholder >Email address</Placeholder>
    </>)
}

OptInForm.Button = function OptInButton({children, ...restProps}){
  return <Button {...restProps}>{children}</Button>
}
