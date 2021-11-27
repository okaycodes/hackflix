import {Container,
        Inner,
        Plans,
        Item,
        Title,
        Row,
        Header,
        Icon,
        Text,
        IconsContainer,
        IconUnit,
        StepContainer,
        Terms,
        Link,
        ButtonLink} from "./styles/planform"

export default function PlanForm({children, ...restProps}){
  return(
    <Container {...restProps}>
      <Inner{...restProps}>{children}</Inner>
    </Container>
)}

PlanForm.Plans = function PlanFormPlans({children, ...restProps}){
  return <Plans {...restProps}>{children}</Plans>
}

PlanForm.Item = function PlanFormItem({children, ...restProps}){
  return <Item {...restProps}>{children}</Item>
}

PlanForm.Title = function PlanFormTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}

PlanForm.Row = function PlanFormRow({children, ...restProps}){
  return <Row {...restProps}>{children}</Row>
}

PlanForm.Header = function PlanFormHeader({children, ...restProps}){
  return <Header {...restProps}>{children}</Header>
}

PlanForm.Icon = function PlanFormHeader({...restProps}){
  return <Icon {...restProps} />
}

PlanForm.Text = function PlanFormText({children, ...restProps}){
  return <Text {...restProps}>{children}</Text>
}

PlanForm.IconsContainer = function PlanFormIconsContainer({children, ...restProps}){
  return <IconsContainer {...restProps}>{children}</IconsContainer>
}

PlanForm.IconUnit = function PlanFormIconUnit({children, ...restProps}){
  return <IconUnit {...restProps}>{children}</IconUnit>
}

PlanForm.StepContainer = function PlanFormStepContainer({children, ...restProps}){
  return <StepContainer {...restProps}>{children}</StepContainer>
}

PlanForm.Terms = function PlanFormTerms({children, ...restProps}){
  return <Terms {...restProps}>{children}</Terms>
}

PlanForm.Link = function PlanFormLink({children, ...restProps}){
  return <Link {...restProps}>{children}</Link>
}

PlanForm.ButtonLink = function PlanFormButtonLink({children, ...restProps}){
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}
