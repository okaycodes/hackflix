import Accordion from "./../components/accordion/index"
import faqsData from "./../fixtures/faqs.json"



export default function AccordionContainer(){

  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Items>
          {faqsData.map((item, index)=>{
            return (
              <Accordion.Item key={item.id}>
                <Accordion.Header index={index}>
                  <Accordion.SubTitle>{item.header}</Accordion.SubTitle>
                  <Accordion.Toggle index={index}></Accordion.Toggle>
                </Accordion.Header>
                <Accordion.Content index={index}>{item.body}</Accordion.Content>
              </Accordion.Item>)
            })}
        </Accordion.Items>
        
    </Accordion>
  )
}
