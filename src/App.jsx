import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";

function App() {

  return (
    <div className="App">
      <HashRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary position-absolute start-0 end-0" style={{zIndex:"30", backgroundColor:"blueviolet"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Harold Carazas
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/presentation">Who am I?</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/projects">What are my projects?</NavLink>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Would you like to hire me?
                  </a>
                  <form action="" className="dropdown-menu p-1">
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">Mi correo:</span>
                      <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" value="hcarazasnires@gmail.com" disabled></input>
                    </div>
                  </form>
                </li>

              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </HashRouter>



    </div>
  )
}

export default App
