import React, { Fragment } from 'react';
import "./Nav.css";

export default function Nav() {
   return (
      <Fragment>
         <header className="position-fixed start-0 end-0">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#be3144" }}>
               <div className="container-fluid d-lg-flex">
                  <a className="navbar-brand" href="#about">
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
                  <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent">
                     <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                           <a className="nav-link a-nav" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link a-nav" href="#work">Work</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link a-nav" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item dropdown">
                           <a
                              className="nav-link dropdown-toggle a-nav"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                           >
                              Would you like to hire me?
                           </a>
                           <div className="dropdown-menu p-1 border-0 m-0" style={{width:"330px", backgroundImage: "linear-gradient(62deg, #3a3d40 0%, #181719 100%)", left:"-18%"}}>
                              <div className="input-group bg-transparent border-0">
                                 <span className="input-group-text bg-transparent text-white border-0" id="basic-addon1">Mi correo:</span>
                                 <input type="text" className="form-control bg-transparent text-white border-0" aria-label="Username" aria-describedby="basic-addon1" id="correo-nav" value="hcarazasnires@gmail.com" disabled />
                              </div>
                           </div>
                        </li>

                     </ul>
                  </div>
               </div>
            </nav>
         </header>
      </Fragment>
   )
}
