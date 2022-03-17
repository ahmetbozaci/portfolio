import { Form, Button } from 'react-bootstrap';

const ContactForm = () => (
  <Form
    className="w-50"
    action="https://formspree.io/f/xnqwzglq"
    method="POST"
  >
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Whats your name?</Form.Label>
      <Form.Control type="text" placeholder="Name*" name="name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Your email address</Form.Label>
      <Form.Control type="email" placeholder="Email*" name="email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Label>Type your message here</Form.Label>
      <Form.Control
        as="textarea"
        rows="5"
        maxLength="200"
        placeholder="Message*"
        name="message"
      />
      <Form.Text className="text-muted">0/200</Form.Text>
    </Form.Group>
    <div className="">
      <Button variant="primary" type="submit">
        Send message
      </Button>
    </div>
  </Form>
);
export default ContactForm;
