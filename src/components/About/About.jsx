import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./About.css";

export default function About() {
   return (
      <section id="about" className="d-flex flex-column justify-content-center text-center align-items-center col-12" style={{ minHeight: "100vh", backgroundImage: "linear-gradient(62deg, #3a3d40 0%, #181719 100%)" }}>
         <h1 className="text-white" id="h1-about">Hey I am Harold</h1>
         <small id="small-about">a web developer</small>
      </section>
   )
}
