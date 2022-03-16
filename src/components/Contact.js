/** @format */

import ContactForm from './ContactForm';

const Contact = () => (
  <div className="pb-5">
    <h2>CONTACT</h2>
    <div
      id="contact"
      className="d-lg-flex justify-content-between m-sm-auto"
    >
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
