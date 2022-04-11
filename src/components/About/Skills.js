/* eslint-disable no-unused-vars */
import {
  FaHtml5, FaCss3Alt, FaReact, FaGithub,
  FaGitSquare, FaChrome,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { BsFillBootstrapFill } from 'react-icons/bs';
import {
  SiRubyonrails, SiNetlify, SiHeroku, SiTestin,
} from 'react-icons/si';
import { DiRuby, DiResponsive } from 'react-icons/di';
import { Badge } from 'react-bootstrap';

const Skills = () => (
  <div>
    <div className="pb-4">
      <h3 className="pb-3">Languages</h3>
      <div className="list-unstyled">
        <Badge bg="danger" className="me-2">
          HTML
          <FaHtml5 size={20} className="ps-1" />
        </Badge>
        <Badge bg="primary" className="me-2">
          CSS
          <FaCss3Alt size={20} className="ps-1" />
        </Badge>
        <Badge bg="warning" className="me-2">
          JavaScript
          <IoLogoJavascript size={20} className="ps-1" />
        </Badge>
        <Badge bg="danger">
          Ruby
          <DiRuby size={20} className="ps-1" />
        </Badge>
      </div>
    </div>
    <hr />
    <div className="py-4">
      <h3 className="pb-3">Frameworks</h3>
      <div className="">
        <Badge bg="danger" className="me-2">
          Ruby on Rails
          <SiRubyonrails size={20} className="ps-1" />
        </Badge>
        <Badge bg="info" className="me-2">
          React.js
          <FaReact size={20} className="ps-1" />
        </Badge>
        <Badge bg="primary">
          Bootstrap
          <BsFillBootstrapFill size={20} className="ps-1" />
        </Badge>
      </div>
    </div>
    <hr />
    <div className="pt-4">
      <h3 className="pb-3">Tools</h3>
      <div className="pb-2">
        <Badge bg="dark" className="my-2 me-2">
          Github
          <FaGithub size={20} className="ps-1" />
        </Badge>
        <Badge bg="danger">
          Git
          <FaGitSquare size={20} className="ps-1" />
        </Badge>
        <Badge bg="info" className="m-2">
          Netlify
          <SiNetlify size={20} className="ps-1" />
        </Badge>
        <Badge bg="dark">
          Heroku
          <SiHeroku size={20} className="ps-1" />
        </Badge>
        <Badge bg="success" className="m-2">
          Rspec
          <SiTestin size={20} className="ps-1" />
        </Badge>
        <Badge bg="success">
          TDD
          <SiTestin size={20} className="ps-1" />
        </Badge>
        <Badge bg="warning" className="m-2">
          Mobile/Responsive Development
          <DiResponsive size={20} className="ps-1" />
        </Badge>
        <Badge bg="danger">
          Chrome DevTools
          <FaChrome size={20} className="ps-1" />
        </Badge>
      </div>
    </div>
  </div>
);

export default Skills;
