import './App.css';
import {
  NavigationBar, Footer, Work, Main, Contact,
} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <NavigationBar />
    <Main />
    <Work />
    <Contact />
    <Footer />
  </div>
);
export default App;
