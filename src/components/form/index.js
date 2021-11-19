import {
  Base,
  Container,
  Title,
  SubTitle,
  Label,
  Input,
  Placeholder,
  Link,
  Message,
  Submit} from "styles/form"

export default function Form({children, ...restProps}){
  return <Base {...restProps}>{children}</Base>
}

Form.Title = function FormTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}

Form.SubTitle = function FormSubTitle({children, ...restProps}){
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Form.Input = function FormInput({children, ...restProps}){
  return (
    <InputWrapper>
      <Label>
        <Input />
        <Placeholder 
      </Label>
    </InputWrapper>
  )
}
