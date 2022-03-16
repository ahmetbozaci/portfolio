import {
  FaGithub, FaLinkedin, FaTwitter, FaMailBulk,
} from 'react-icons/fa';
import { Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => (
  <div className="text-center lead">
    <Nav className="justify-content-center">
      <Nav.Link href="mailto:ahmt9417@gmail.com"><FaMailBulk size={32} /></Nav.Link>
      <Nav.Link href="https://github.com/ahmetbozaci"><FaGithub size={32} /></Nav.Link>
      <Nav.Link href="https://www.linkedin.com/in/ahmetbozaci/" className="px-3"><FaLinkedin size={32} /></Nav.Link>
      <Nav.Link href="https://twitter.com/ahmtbozaci"><FaTwitter size={32} /></Nav.Link>
    </Nav>
    <hr className="w-50 m-auto my-4" />
    <p className="text-muted">&copy; 2022 Ahmet Bozaci</p>
  </div>
);

export default Footer;
