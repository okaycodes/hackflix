import {Container, Inner, Base, Input, InputWrapper, Label, Placeholder,
        InputIcon, Icon, ErrorMessage, Checkbox, CheckboxWrapper,Button,
        ButtonLink, Spinner, ChangePlan, Text, Link} from "./styles/regform"


export default function RegForm({children, ...restProps}){
  return <Container{...restProps}>
            <Inner>{children}</Inner>
        </Container>
}

RegForm.Base = function RegFormBase({children, ...restProps}){
  return<Base {...restProps}>{children}</Base>
}

RegForm.Input = function RegFormInput({children,  animated=true, ...restProps}){
  const {value, isEmpty, isValid, isActivated, placeholder,
        errorMessage1, errorMessage2, minLength} = {...restProps}
  return(
    <InputWrapper {...restProps}>
      <Label>
        <Input {...restProps} placeholder={!animated ? placeholder : ""} />
        <Placeholder isEmpty={isEmpty}>{animated && placeholder}</Placeholder>
        <InputIcon>{children}</InputIcon>
      </Label>
      <ErrorMessage>
      {((isActivated && !isValid) &&  value.length < minLength) ? errorMessage1:
      (isActivated && !isValid) && errorMessage2}
      </ErrorMessage>
    </InputWrapper>
  )}
/* writing the conditionality for placeholder
<code>placeholder={!animated ? placeHolder : ""}</code> is extremely important.
without writing it that way, if animated is made true, a bug is thrown where the
placeholder using my usual pattern {!animated && placeholder} will get a boolean
<false> returned to it. the warning is shown in the console.
*/
RegForm.Icon = function RegFormIcon({...restProps}){
  return <Icon {...restProps} />
}

RegForm.Spinner = function RegFormSpinner({...restProps}){
  return<Spinner src="./../../../images/misc/spinner.png" {...restProps} />
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

RegForm.Button = function RegFormButton({children, ...restProps}){
  return <Button {...restProps}>{children}</Button>
}

RegForm.ButtonLink = function RegFormButtonLink({children, ...restProps}){
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

RegForm.Text = function RegFormText({children, ...restProps}){
  return <Text {...restProps}>{children}</Text>
}

RegForm.Link = function RegFormLink({children, ...restProps}){
  return <Link {...restProps}>{children}</Link>
}

RegForm.ChangePlan = function RegFormChangePlan({children, ...restProps}){
  return <ChangePlan {...restProps}>{children}</ChangePlan>
}
