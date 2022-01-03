import {Global, Container, Inner, Title, Text, Button} from "./styles/not-found"


export default function NotFound({children, ...restProps}){
    return <Container {...restProps}><Inner>{children}</Inner></Container>
}

NotFound.Global = function NotFoundGlobal({children, ...restProps}){
    return <Global {...restProps}>{children}</Global>
}

NotFound.Title = function NotFoundTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

NotFound.Text = function NotFoundText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

NotFound.Button = function NotFoundButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}