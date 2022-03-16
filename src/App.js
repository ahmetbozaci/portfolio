import './App.css';
import {
  NavigationBar, Footer, Work, About, Contact,
} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
    <NavigationBar />
    <About />
    <Work />
    <Contact />
    <Footer />
  </>
);
export default App;
