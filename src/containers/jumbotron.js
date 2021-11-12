import Jumbotron from "./../components/jumbotron/index"
import jumboData from '../fixtures/jumbo.json';

export default function JumbotronContainer(){
  return(
    <Jumbotron.Container>
      {jumboData.map(item=>{
        return (
        <Jumbotron>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt}/>
          </Jumbotron.Pane>
        </Jumbotron>)
      })}
    </Jumbotron.Container>
  )
}
