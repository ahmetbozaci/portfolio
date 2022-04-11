import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <h2 className="pb-4">CONTACT</h2>
    <div className="d-lg-flex justify-content-between">
      <div className="align-self-center">
        <h3 className="text-line py-4">
          Interested in working with me or
          <br />
          perhaps just talk?
        </h3>
        <p className="pb-4">
          Reach me on social media, by filling out the contact form or
          <br />
          by sending and email to
          <span> ahmt9417@gmail.com</span>
        </p>
      </div>
      <ContactForm />
    </div>
  </div>
);

export default Contact;
