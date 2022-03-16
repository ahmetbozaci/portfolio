import './App.css';
import {
  NavigationBar, Footer, Work, About, Contact,
} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div id="Home">
    <NavigationBar />
    <About />
    <Work />
    <Contact />
    <Footer />
  </div>
);
export default App;
