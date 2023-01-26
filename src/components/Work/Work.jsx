import React from 'react';
import "./Work.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import weather from "../../images/project_weather.jpg";
import todo from "../../images/project_todo.jpg";
import quiz from "../../images/project_quiz.jpg";
import pokedex from "../../images/project_pokedex.jpg";
import js from "../../images/project_js.jpg";
import calculator from "../../images/project_calculator.jpg";


function ProjectElement({ link, imagen, text }) {
   return (
      <a href={link} target="_blank" style={{backgroundColor: "#303841", textDecoration: "none"}}>
         <div className="border border-3 col">
            <img className="col-12 img-work-project" src={imagen} alt="Proyecto" height="200"  />
            <p id="p-work">
               <span class="arrow-work|">&#60;</span>
               {text}
               <span class="arrow-work">&#47;&#62;</span>
            </p>
         </div>
      </a>
   );
}

export default function Work() {
   return (
      <div id="work" className="d-flex flex-column align-items-center justify-content-center gap-3 pt-5 pb-3" style={{ minHeight: "100vh", backgroundColor: "#45567d" }}>
         <div className="mt-3">
            <h2 id="h2-work"><span>These are some of my projects</span></h2>
         </div>
         <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 col-9" style={{ minHeight: "70vh" }}>
            <ProjectElement link="https://harold2001.github.io/finalProjectLevel3/" imagen={weather} text="Weather App"/>
            <ProjectElement link="https://harold2001.github.io/miniProjectLevel3/" imagen={todo} text="Multi Task App"/>
            <ProjectElement link="https://harold2001.github.io/finalProjectLevel2/" imagen={quiz} text="Quiz App"/>
            <ProjectElement link="https://harold2001.github.io/pokedex/" imagen={pokedex} text="Pokedex App"/>
            <ProjectElement link="https://harold2001.github.io/finalProjectLevel1/" imagen={js} text="Landing Page JS"/>
            <ProjectElement link="https://harold2001.github.io/miniProjectLevel2/" imagen={calculator} text="Caculator App"/>
         </div>
         <div className="col-12 d-flex justify-content-center d-flex align-items-center">
            <a href="#about" id="button-show-work">Show all <MdOutlineKeyboardArrowRight id="arrow-button"/> </a>
         </div>
      </div>
   )
}
