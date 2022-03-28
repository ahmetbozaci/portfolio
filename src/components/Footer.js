import {
  FaGithub, FaLinkedin, FaTwitter, FaMailBulk,
} from 'react-icons/fa';
import { Nav } from 'react-bootstrap';
import './Style/Footer.css';

const Footer = () => (
  <div className="text-center lead footer text-light p">
    <Nav className="justify-content-center">
      <Nav.Link href="mailto:ahmt9417@gmail.com">
        <FaMailBulk size={25} className="text-light" />
      </Nav.Link>
      <Nav.Link href="https://github.com/ahmetbozaci"><FaGithub size={25} className="text-light" /></Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/ahmetbozaci/"><FaLinkedin size={32} className="text-light" /></Nav.Link>
      <Nav.Link href="https://twitter.com/ahmtbozaci"><FaTwitter size={25} className="text-light" /></Nav.Link>
    </Nav>
    <hr className="w-50 m-auto my-2" />
    <p className="my-2">&copy; 2022 Ahmet Bozaci</p>
  </div>
);

export default Footer;
