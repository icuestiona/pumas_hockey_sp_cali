import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationArrow,
  faCalendar,
  faHockeyPuck,
} from "@fortawesome/fontawesome-free-solid";

import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import clubLogo from "../Assets/club-logo.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container my-5">
      <footer className="bg-primary text-center text-lg-start text-white">
        <div className="container p-4">
          <div className="row my-4">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <div
                className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                style={{ width: "150px", height: "150px" }}
              >
                <img src={clubLogo} alt="Club Logo" />
              </div>
              <p className="text-center">
                Pumas Roller Hockey - {""}
                Cali, Colombia
              </p>
              <ul className="list-unstyled d-flex flex-row justify-content-center">
                <li>
                  <a className="text-white px-2" href="#!">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a className="text-white px-2" href="#!">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a className="text-white ps-2" href="#!">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Our Club</h5>
              <ul className="list-unstyled">
                <li>
                  <p>
                    <FontAwesomeIcon icon={faHockeyPuck} className="icon" />{" "}
                    {""}
                    Pumas Cali Hockey Club SP is a Colombian non-profit
                    organization. Since 2016 we have been promoting the roller
                    hockey focused on the integral formation of the children as
                    athletes and human beings.
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Join us</h5>
              <ul className="list-unstyled">
                <li>
                  <p>
                    <FontAwesomeIcon icon={faCalendar} className="icon" />{" "}
                    Training Schedule Monday, Wednesday and Friday: 7:00pm to
                    8:30pm Saturday: 3:30pm to 5:30pm
                  </p>
                </li>
              </ul>
              {/* Add content for "Join us" section here */}
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Contact</h5>
              <ul className="list-unstyled">
                <li>
                  <p>
                    <FontAwesomeIcon icon={faLocationArrow} className="icon" />{" "}
                    Escuela de Formación de Hockey Pumas - {""}Skating rink:
                    Calle 12C entre Carreras 29B y Carrera 31. {""}
                    Barrio: Colseguros.{""}Cali – Colombia. South America.{""}
                  </p>
                </li>
                <li>
                  <p>
                    <FontAwesomeIcon icon={faPhone} className="icon" /> Tel:
                    (+57 032) 318 400 32 {""}WhatsApp: (+57 032) 3148737113
                  </p>
                </li>
                <li>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    pumascalihockeyclubsp@gmail.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/sorayacarvajal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Soraya Carvajal
            </a>{" "}
            , open-sourced on{" "}
            <a
              href="https://github.com/icuestiona/pumas_hockey_sp_cali/tree/main"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://sage-queijadas.to/"
              target="_blank"
              rel=" noopener noreferrer"
            >
              Netlify
            </a>
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
