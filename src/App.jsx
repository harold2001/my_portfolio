import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <div className="App">
      <Nav />
      <About />
      <Work />
      <Contact/>
    </div>
  )
}

export default App
