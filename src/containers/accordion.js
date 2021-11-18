import Accordion from "./../components/accordion/index"
import {OptInForm} from "./../components"
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
        <OptInForm>
          <OptInForm.Message>Ready to watch? Enter your email to create or restart
          your membership.</OptInForm.Message>
          <OptInForm.Input />
          <OptInForm.Button>Get Started</OptInForm.Button>
        </OptInForm>
    </Accordion>
  )
}
