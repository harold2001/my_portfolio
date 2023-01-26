import React, { Fragment } from 'react';
import "./Contact.css";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaFreeCodeCamp } from "react-icons/fa";

function Button({ link, children, text }) {
  return (
    <a href={link} target="_blank" className="d-flex justify-content-center align-items-center gap-1 a-contact">
      {children}
      <span>{text}</span>
    </a>
  );
}

export default function Contact() {
  return (
    <Fragment>
      <div id="contact" style={{ minHeight: "87vh", backgroundColor: "#303841" }} className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center gap-3">
          <h2 id="h2-contact">Let's work together</h2>
          <h4 id="h4-contact">How do you take avena?</h4>
        </div>
        <div className="d-flex gap-4 flex-wrap mt-3 justify-content-center">
          <Button text={"Facebook"} link={"https://www.facebook.com/hcarazasm"}>
            <FaFacebookSquare />
          </Button>
          <Button text={"GitHub"} link={"https://github.com/harold2001"}>
            <AiFillGithub />
          </Button>
          <Button text={"Send a mail"} link={"#"}>
            <MdAlternateEmail />
          </Button>
          <Button text={"Call me"} link={"#"}>
            <MdOutlinePhoneIphone />
          </Button>
        </div>
      </div>
      <footer style={{minHeight:"13vh", backgroundColor: "#303841"}} className="d-flex col-12 justify-content-center align-items-center gap-2 gap-md-5" id="footer-contact">
        <p className="p-contact">** Este es mi primer portfolio, te reto que hagas uno mas bonito </p>
        <p className="p-contact">&copy; Inspirado en el portfolio de FreeCodeCamp <FaFreeCodeCamp/></p>
      </footer>
    </Fragment>
  )
}
