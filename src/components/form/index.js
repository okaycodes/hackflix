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
  Error,
  Link,
  Text,
  Submit} from "./styles/form"

export default function Form({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

Form.Base = function FormBase({children, ...restProps}){
  return <Base {...restProps}>{children}</Base>
}

Form.Title = function FormTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}

Form.SubTitle = function FormSubTitle({children, ...restProps}){
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Form.Input = function FormInput({children, animated=true, placeholder, error,  ...restProps}){
  return (
    <InputWrapper  {...restProps}>
      <Label>
        <Input placeholder={!animated && placeholder}/>
        <Placeholder>{animated && placeholder}</Placeholder>
      </Label>
      <Error>{error}</Error>
    </InputWrapper>
  )
}

Form.Checkbox = function FormCheckbox({children, ...restProps}){
  return <Checkbox {...restProps}>{children}</Checkbox>
}

Form.Link = function FormLink({children, ...restProps}){
  return <Link {...restProps}>{children}</Link>
}

Form.Text = function FormText({children, ...restProps}){
  return <Text {...restProps}>{children}</Text>
}

Form.Submit = function FormSubmit({children, ...restProps}){
  return <Submit {...restProps}>{children}</Submit>
}
