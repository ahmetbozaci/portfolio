import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiJest } from 'react-icons/si';
import { Card, Badge } from 'react-bootstrap';
import covid from '../../assets/images/covid.png';

const ProjectMathMagician = () => (
  <Card style={{ width: '30rem' }}>
    <Card.Img variant="top" src={covid} />
    <Card.Body>
      <Card.Title>Math Magicians</Card.Title>
      <Card.Text>
        Math magicians is a website for all fans of mathematics.
        It is a Single Page App (SPA) that allows
        users to make simple calculations and read a random math-related quote.
      </Card.Text>
    </Card.Body>
    <Card.Body>
      <Card.Link className="text-decoration-none" href="https://github.com/ahmetbozaci/math_magicians">Repository Link</Card.Link>
      <Card.Link className="text-decoration-none" href="https://math-magicians-react.netlify.app/">Live Link</Card.Link>
    </Card.Body>
    <Card.Body className="text-center">
      <Badge bg="danger" className="mx-1">
        HTML
        <FaHtml5 size={20} className="px-1" />
      </Badge>
      <Badge bg="primary" className="mx-1">
        CSS
        <FaCss3Alt size={20} className="px-1" />
      </Badge>
      <Badge bg="info" className="mx-1">
        React
        <FaReact size={20} className="px-1" />
      </Badge>
      <Badge bg="warning" className="mx-1">
        JavaScript
        <IoLogoJavascript size={20} className="px-1" />
      </Badge>
      <Badge bg="dark" className="mx-1">
        React Jest
        <SiJest size={20} className="px-1" />
      </Badge>
    </Card.Body>
  </Card>
);

export default ProjectMathMagician;
