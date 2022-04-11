import {
  FaGithub, FaLinkedin, FaTwitter, FaMailBulk,
} from 'react-icons/fa';
import { Nav } from 'react-bootstrap';
import './Style/Footer.css';

const Footer = () => (
  <div className="text-center footer text-light pb-1">
    <Nav className="justify-content-center">
      <Nav.Link href="mailto:ahmt9417@gmail.com">
        <FaMailBulk size={17} className="text-light" />
      </Nav.Link>
      <Nav.Link href="https://github.com/ahmetbozaci"><FaGithub size={17} className="text-light" /></Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/ahmetbozaci/"><FaLinkedin size={17} className="text-light" /></Nav.Link>
      <Nav.Link href="https://twitter.com/ahmtbozaci"><FaTwitter size={15} className="text-light" /></Nav.Link>
    </Nav>
    <hr className="w-50 m-auto my-2" />
    <span>&copy; 2022 Ahmet Bozaci</span>
  </div>
);

export default Footer;
