import './App.css';
import { Container } from 'react-bootstrap';
import {
  NavigationBar, Footer, Work, Main, Contact,
} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Container id="Home">
    <NavigationBar />
    <Main />
    <Work />
    <Contact />
    <Footer />
  </Container>
);
export default App;
