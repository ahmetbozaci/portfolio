import {
  Nav, Navbar,
} from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import './Style/NavigationBar.css';

const NavigationBar = () => (
  <Navbar bg="" expand="lg" fixed="top" variant="dark" className="navigationbar">
    <Navbar.Brand href="#home">
      <img
        alt="logo"
        src={logo}
        width="30"
        height="30"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="text-right">
      <Nav className="me-auto" />
      <Nav>
        <Nav.Link href="#main">Home</Nav.Link>
        <Nav.Link href="#work">Work</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
