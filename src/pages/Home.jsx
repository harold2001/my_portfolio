import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import photo from "../images/Harold's_photo.jpg"

function Button({ text }) {
   return (
      <Fragment>
         <button className="btn col-5 m-2" style={{ backgroundColor: "blueviolet", color: "white" }}>{text}</button>
      </Fragment>
   )
}

export default function Home() {
   return (
      <div className="d-flex justify-content-center  text-center align-items-center" style={{ minHeight: "100vh" }}>
         <div className="card mt-5" style={{ width: "18rem" }}>
            <img src={photo} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">Hi! I'm Harold Carazas</h5>
               <p className="card-text">
                  If you would like to know more about me, just click on one of these buttons.
               </p>
               <div className="d-flex">
                  <Button
                     text={"Who am I?"}
                  />
                  <Button
                     text={"Who are your projects?"}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}
