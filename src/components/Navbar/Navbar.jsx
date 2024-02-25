import React from "react";
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
  const styles = {
    icon: "icon",
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          <img src={clubLogo} alt="Club Logo" />
        </div>

        <ul className="navbar-nav">
          {navigation.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.path} className="nav-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="right-section">
        <div className="social-links">
          <a
            href="https://es-es.facebook.com/pumashockeysp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
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
            <FontAwesomeIcon icon={faSquareXTwitter} className={styles.icon} />
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
    </nav>
  );
};

export default Navbar;
