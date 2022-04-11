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
    <div className="">
      <h3 className="pb-3">Languages</h3>
      <div className="d-flex list-unstyled gap-2">
        <Badge bg="danger">
          HTML
          <FaHtml5 size={20} className="px-1" />
        </Badge>
        <Badge bg="primary">
          CSS
          <FaCss3Alt size={20} className="px-1" />
        </Badge>
        <Badge bg="warning">
          JavaScript
          <IoLogoJavascript size={20} className="px-1" />
        </Badge>
        <Badge bg="danger">
          Ruby
          <DiRuby size={20} className="px-1" />
        </Badge>
      </div>
    </div>
    <hr />
    <div className="">
      <h3 className="pb-3">Frameworks</h3>
      <div className="d-flex gap-2">
        <Badge bg="danger">
          Ruby on Rails
          <SiRubyonrails size={20} className="px-1" />
        </Badge>
        <Badge bg="info">
          React.js
          <FaReact size={20} className="px-1" />
        </Badge>
        <Badge bg="primary">
          Bootstrap
          <BsFillBootstrapFill size={20} className="px-1" />
        </Badge>
      </div>
    </div>
    <hr />
    <div className="">
      <h3 className="pb-3">Tools</h3>
      <div className="d-flex list-unstyled gap-2 pb-2">
        <Badge bg="dark">
          Github
          <FaGithub size={20} className="px-1" />
        </Badge>
        <Badge bg="danger">
          Git
          <FaGitSquare size={20} className="px-1" />
        </Badge>
        <Badge bg="info">
          Netlify
          <SiNetlify size={20} className="px-1" />
        </Badge>
        <Badge bg="dark">
          Heroku
          <SiHeroku size={20} className="px-1" />
        </Badge>
        <Badge bg="success">
          Rspec
          <SiTestin size={20} className="px-1" />
        </Badge>
      </div>
      <div className="d-flex list-unstyled gap-2">
        <Badge bg="success">
          TDD
          <SiTestin size={20} className="px-1" />
        </Badge>
        <Badge bg="warning">
          Mobile/Responsive Development
          <DiResponsive size={20} className="px-1" />
        </Badge>
        <Badge bg="danger">
          Chrome DevTools
          <FaChrome size={20} className="px-1" />
        </Badge>
      </div>
    </div>
  </div>
);

export default Skills;
