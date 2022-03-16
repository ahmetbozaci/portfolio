import {
  Nav, Navbar, Container,
} from 'react-bootstrap';

const NavigationBar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Ahmet Bozaci</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="text-right">
        <Nav className="me-auto" />
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Work</Nav.Link>
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
