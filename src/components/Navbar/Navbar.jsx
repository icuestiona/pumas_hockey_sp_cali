import React, { useState } from "react";
import "./Navbar.css";
import { navigation } from "../../constants/navigation";
import clubLogo from "../Assets/club-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope } from "@fortawesome/fontawesome-free-solid";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const styles = {
    icon: "icon",
  };

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav
      className={`custom-navbar navbar-expand-lg navbar-light p-2  ${
        isNavOpen ? "open" : ""
      }`}
    >
      <div className="container">
        <div className="navbar-header  d-flex justify-content-between w-100">
          <div className="left-section d-flex align-items-center">
            <div className="logo">
              <img src={clubLogo} alt="Club Logo" />
            </div>

            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNav}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className={`navbar-collapse ${isNavOpen ? "show" : ""}`}>
            <ul className="navbar-nav ml-auto">
              {navigation.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    href={item.path}
                    className="nav-link"
                    onClick={() => setNavOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="right-section">
            <div className={`social-links ${isNavOpen ? "open" : ""}`}>
              <a
                href="https://es-es.facebook.com/pumashockeysp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </a>
              <a
                href="https://www.instagram.com/pumascalihockeyclubsp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCZIn_-lL7yx4y1GRQ-UGpEQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faSquareXTwitter}
                  className={styles.icon}
                />
              </a>
              <a href="tel:+1234567890">
                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              </a>
              <a
                href="Pumascalihockeyclubsp@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
