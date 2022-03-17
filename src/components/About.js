import './About.css';

const About = () => (
  <div
    style={{ backgroundColor: 'yellow' }}
    className="d-flex justify-content-between about"
  >
    <div>
      <h3>About me</h3>
      <p>Contact with me write something about yourself</p>
      <a
        className="btn btn-primary"
        href="https://docs.google.com/document/d/e/2PACX-1vQa2q2dZIhcpw-obVNM-sKlyAhUjiBtPY27evjWxVusNbrBKugVYsHRcwItwOJql9jZv4sh3XgV9j73/pub"
      >
        Get my resume
      </a>

    </div>
    <div>
      <div className="list-unstyled">
        <h4>Languages</h4>
        <ul className="d-flex list-unstyled justify-content-around">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Ruby</li>
        </ul>
      </div>
      <div>
        <h4>Frameworks</h4>
        <ul className="d-flex list-unstyled justify-content-around">
          <li>Ruby on Rails</li>
          <li>React.js</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div>
        <h4>Tools</h4>
        <ul className="d-flex list-unstyled justify-content-around">
          <li>Git</li>
          <li>Github</li>
          <li>Rspec</li>
          <li>Netlify</li>
          <li>Heroku</li>
          <li>Mobile/Responsive Development</li>
          <li>Chrome Dev Tools</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
