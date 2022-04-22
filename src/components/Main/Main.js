import './Main.css';

const Main = () => (
  <div className="main" id="main">
    <h1 className="mb-4">
      Hello, I am
      <br />
      Ahmet Bozacı
    </h1>
    <p className="lead">
      I am a software developer!
      <br />
      I can help you build a product, feature or website. Look
      <br />
      through some of
      my work and experience!
      <br />
      <br />
      If you like what you see and have project you need code,
      <br />
      dont hesitate
      to
      {' '}
      <a href="#contact" className="text-decoration-none">
        contact me
      </a>
    </p>
  </div>
);

export default Main;
