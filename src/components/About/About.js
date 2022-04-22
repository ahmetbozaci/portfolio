import Aboutme from './Aboutme';
import Skills from './Skills';
import './About.css';

const About = () => (
  <div className="d-lg-flex about" id="about">
    <Aboutme />
    <Skills />
  </div>
);

export default About;
