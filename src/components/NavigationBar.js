import {
  Nav, Navbar, Container,
} from 'react-bootstrap';
import logo from '../assets/images/logo.png';

const NavigationBar = () => (
  <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        {' '}
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
        />
        {' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="text-right">
        <Nav className="me-auto" />
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
