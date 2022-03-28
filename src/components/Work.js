// import { Container } from 'react-bootstrap';
import ProjectCovid from './Projects/ProjectCovid';
import ProjectMathMagician from './Projects/ProjectMathMagician';
import './Style/Work.css';

const Work = () => (
  <div className="work">
    <h3>Work Section</h3>
    <div className="d-flex justify-content-around my-5" id="work">
      <ProjectMathMagician />
      <ProjectCovid />
    </div>
  </div>

);

export default Work;
