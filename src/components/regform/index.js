import {Container, Inner, Input, InputWrapper, Label, Placeholder, InputIcon, Icon, ErrorMessage,
        Checkbox, CheckboxWrapper, ChangePlan, Text, Link} from "./styles/regform"


export default function RegForm({children, ...restProps}){
  return <Container{...restProps}>
            <Inner {...restProps}>{children}</Inner>
        </Container>
}

RegForm.Input = function RegFormInput({children,  animated=true, ...restProps}){
  const {value, isEmpty, isValid, isActivated, placeholder,
        errorMessage1, errorMessage2, minLength} = {...restProps}
  return(
    <InputWrapper {...restProps}>
      <Label>
        <Input {...restProps} placeholder={!animated && placeholder} />
        <Placeholder isEmpty={isEmpty}>{animated && placeholder}</Placeholder>
        <InputIcon>{children}</InputIcon>
      </Label>
      <ErrorMessage>
      {((isActivated && !isValid) &&  value.length < minLength) ? errorMessage1:
      (isActivated && !isValid) && errorMessage2}
      </ErrorMessage>
    </InputWrapper>
  )}

RegForm.Icon = function RegFormIcon({...restProps}){
  return <Icon {...restProps} />
}

RegForm.Checkbox = function RegFormCheckbox({children, ...restProps}){
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

RegForm.Text = function RegFormText({children, ...restProps}){
  return <Text {...restProps}>{children}</Text>
}

RegForm.Link = function RegFormLink({children, ...restProps}){
  return <Link {...restProps}>{children}</Link>
}

RegForm.ChangePlan = function RegFormChangePlan({children, ...restProps}){
  return <ChangePlan {...restProps}>{children}</ChangePlan>
}
