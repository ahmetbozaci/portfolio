// import { Container } from 'react-bootstrap';
import ProjectCovid from './Projects/ProjectCovid';
import ProjectMathMagician from './Projects/ProjectMathMagician';
import './Style/Work.css';

const Work = () => (
  <div className="work" id="work">
    <h3 className="pb-4">Work</h3>
    <div className="d-flex justify-content-around">
      <ProjectMathMagician />
      <ProjectCovid />
    </div>
  </div>

);

export default Work;
