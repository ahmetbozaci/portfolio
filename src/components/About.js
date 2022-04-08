import Skills from './Skills';
import './Style/About.css';

const About = () => (
  <div className="d-flex justify-content-between about" id="about">
    <div className="align-self-center">
      <h3>About me</h3>
      <p>Contact with me write something about yourself</p>
      <a
        className="btn btn-primary"
        href="https://docs.google.com/document/d/e/2PACX-1vQa2q2dZIhcpw-obVNM-sKlyAhUjiBtPY27evjWxVusNbrBKugVYsHRcwItwOJql9jZv4sh3XgV9j73/pub"
      >
        Get my resume
      </a>
    </div>
    <Skills />
  </div>
);

export default About;
