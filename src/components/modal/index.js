import {Container, Header, Wrapper, Text, Icon, Image} from "./styles/modal"

export default function Modal ({children, ...restProps}){
  return <Container {...restProps}>{children}</Container>
}

Modal.Header = function ModalHeader({children, ...restProps}){
  return <Header {...restProps}>{children}</Header>
}

Modal.Wrapper = function ModalWrapper({children, ...restProps}){
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Modal.Text = function ModalText({children, ...restProps}){
  return <Text {...restProps}>{children}</Text>
}

Modal.Icon = function ModalIcon({children, ...restProps}){
  return <Icon {...restProps}>{children}</Icon>
}

Modal.Image = function ModalImage({children, ...restProps}){
  return <Image {...restProps}>{children}</Image>
}
