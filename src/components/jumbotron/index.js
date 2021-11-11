

export default function Jumbotron ({children, direction="row", ...restProps}){
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

Jumbotron.Container({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Title({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}

Jumbotron.Subtitle({children, ...restProps}){
  return <SubTitle {...restProps}>{children}</SubTitle>
}
