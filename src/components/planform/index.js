import {Container, Inner, Item, Title, Row, Header, Icon} from "./styles/planform"

export default function PlanForm({children, ...restProps}){
  return(
    <Container {...restProps}>
      <Inner{...restProps}>{children}</Inner>
    </Container>
)}

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
