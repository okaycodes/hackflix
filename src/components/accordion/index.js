import {useContext} from "react"
import {Container, Items, Title, Item, Header, SubTitle, Content, Toggle} from "./styles/accordion"


export default function Accordion({children, ...restProps}){
  return (
        <Container {...restProps}>
            {children}
        </Container>
      )
}

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordion.Items = function AccordionItems({children, ...restProps}){
  return <Items {...restProps}>{children}</Items>
}

Accordion.Item = function AccordionItem({children, ...restProps}){
  return <Item {...restProps}>{children}</Item>
}

Accordion.Header = function AccordionHeader({children,  ...restProps}){
  return <Header {...restProps}>{children}</Header>
}

Accordion.SubTitle = function AccordionSubTitle({children, ...restProps}){
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Accordion.Content = function AccordionContent({children,  ...restProps}){
  return <Content {...restProps}>{children}</Content>
}

Accordion.Toggle = function AccordionToggle({children,  ...restProps}){
  return <Toggle  {...restProps}>{children}</Toggle>
}
