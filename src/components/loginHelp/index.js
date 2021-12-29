import {Container, Title, Text, ButtonLink, RadioButtonWrapper, RadioButton,
        Input, Select, Option} from "./styles/loginHelp"
import {useState, useRef} from "react"



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
          name="password reset"
        />
        <span></span>
      </RadioButtonWrapper>
    </>
)}

LoginHelp.Input = function LoginHelpInput({children, ...restProps}){
  return <Input {...restProps}>{children}</Input>
}

LoginHelp.Select = function LoginHelpSelect({children, ...restProps}){
  const selectRef = useRef(null)
  return(
    <Select {...restProps} ref={selectRef}
      onClick={()=>console.log(selectRef.current.options[selectRef.current.selectedIndex].innerHTML)}>
       <option value="volvo">Volvo</option>
       <option value="saab">Saab</option>
       <option value="mercedes">Mercedes</option>
       <option value="audi">Audi</option>
       <option value="volvo">Delta</option>
    </Select>)
}

LoginHelp.Option = function LoginHelpOption({children, ...restProps}){
  return <Option {...restProps}>{children}</Option>
}
