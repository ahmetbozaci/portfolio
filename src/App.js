/* eslint-disable no-unused-vars */
import './App.css';
import {
  NavigationBar,
  Footer,
  Work,
  Main,
  Contact, About,
} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <NavigationBar />
    <Main />
    {/* <Work /> */}
    <About />
    <Contact />
    <Footer />
  </div>
);
export default App;
