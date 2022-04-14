import {
  Nav, Navbar,
} from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import './NavigationBar.css';

const NavigationBar = () => (
  <Navbar expand="lg" fixed="top" variant="dark" className="navigationbar py-1" collapseOnSelect>
    <Navbar.Brand href="#home">
      <img
        alt="logo"
        src={logo}
        width="50"
        height="50"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" data-toggle="collapse" />
    <Navbar.Collapse id="basic-navbar-nav" className="text-right lead">
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
