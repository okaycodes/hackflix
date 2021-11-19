import {Form} from "./../components"

export default function FormContainer(){
  return(
      <Form>
        <Form.Container>
          <Form.Title>Sign In</Form.Title>
          <Form.Input placeholder="Email or phone number" />
          <Form.Input placeholder="Password" />
          <Form.Submit>Sign In</Form.Submit>
          <Form.Checkbox>Remeber me</Form.Checkbox>
          <Form.Link>Need help?<Form.Link>
          <Form.Link>
        </Form.Container>
      </Form>
  )
}
