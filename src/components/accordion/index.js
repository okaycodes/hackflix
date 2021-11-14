import {useContext} from "react"
import {Container, Items, Title, Item, Header, SubTitle, Content, Toggle} from "./styles/accordion"
import {AccordionContextProvider, accordionContext} from "./../../contexts/accordionContext"


export default function Accordion({children, ...restProps}){
  return (
      <AccordionContextProvider>
        <Container {...restProps}>
            {children}
        </Container>
      </AccordionContextProvider>)
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


Accordion.Header = function AccordionHeader({children, index, ...restProps}){
  const {toggle} = useContext(accordionContext)
  return <Header onClick={()=>toggle(index)}{...restProps}>{children}</Header>
}

Accordion.SubTitle = function AccordionSubTitle({children, ...restProps}){
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Accordion.Content = function AccordionContent({children, index, ...restProps}){
  const {activeIndex} = useContext(accordionContext)
  const isActive = activeIndex === index
  return isActive && <Content {...restProps}>{children}</Content>
}

Accordion.Toggle = function AccordionToggle({children, index, ...restProps}){
  const {activeIndex} = useContext(accordionContext)
  const isActive = activeIndex === index
  return <Toggle isActive={isActive} {...restProps}>{children}</Toggle>
}
