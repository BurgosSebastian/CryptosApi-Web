import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import JoinUs from './components/Joinus';
import Nosotros from './components/Nosotros';
import Tabla from './components/Table';
import { BrowserRouter } from 'react-router-dom';



function App() {

 


  return (
    <BrowserRouter>
      <Nav></Nav>
      <Home></Home>
      <Tabla></Tabla>
      <Nosotros></Nosotros>
      <JoinUs></JoinUs>
      <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;
