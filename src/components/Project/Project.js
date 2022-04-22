import ProjectCovid from './Projects/ProjectCovid';
import ProjectMathMagician from './Projects/ProjectMathMagician';
import './Project.css';

const Project = () => (
  <div className="work" id="work">
    <h3 className="pb-4">Project</h3>
    <div className="d-flex justify-content-around">
      <ProjectMathMagician />
      <ProjectCovid />
    </div>
  </div>

);

export default Project;
