import {Container, Inner, Row, Title, Item, Link, Location} from './styles/footer'

export default function Footer({children, ...restProps}){
  return <Container {...restProps}><Inner {...restProps}>{children}</Inner></Container>
}

Footer.Row = function FooterRow({children, ...restProps}){
  return <Row {...restProps}>{children}</Row>
}

Footer.Title = function FooterTitle({children, ...restProps}){
  return <Title {...restProps}>{children}</Title>
}

Footer.Item = function FooterItem({children, ...restProps}){
  return <Item {...restProps}>{children}</Item>
}

Footer.Link = function FooterLink({children, ...restProps}){
  return <Link {...restProps}>{children}</Link>
}

Footer.Location = function FooterLocation({children, ...restProps}){
  return <Location {...restProps}>{children}</Location>
}
