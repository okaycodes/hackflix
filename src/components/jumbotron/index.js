import {Container, Pane, Title, SubTitle, Image,}

export default function Jumbotron ({children, direction="row", ...restProps}){
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

Jumbotron.Container = JumbotronContainer({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Pane = JumbotronPane({children, ...restProps}){
  return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title= JumbotronTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}

Jumbotron.Subtitle = JumbotronSubtitle({children, ...restProps}){
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = JumbotronImage({chilren, ...restProps}){
  return <Image />
}
