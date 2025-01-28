import Link from "next/link";
import React from "react";
import Image from "next/image"; // Import Image component
import "../../styles/components/navbar.css";
import logo from "../../../../public/assets/img/Logo.png";
import navIcon1 from "../../../../public/assets/img/nav-icon1.svg";
import navIcon2 from "../../../../public/assets/img/nav-icon2.svg";
import navIcon3 from "../../../../public/assets/img/nav-icon7.svg";
import { Col, Row } from "react-bootstrap";

const NavBar = () => {
  return (
    <nav className="navbar">
     
      <span className="logo">
        <a
          href="https://www.linkedin.com/in/adeesha-kristhorubaduge-579b46199/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={logo} alt="Logo" className="navbar-logo" />
        </a>
      </span>
      <div className="socialLinks">
        <a
          href="https://www.linkedin.com/in/adeesha-kristhorubaduge-579b46199/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={navIcon1} alt="LinkedIn Icon" className="navbar-social-icon"/>
        </a>
        <a
          href="https://www.linkedin.com/in/adeesha-kristhorubaduge-579b46199/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={navIcon2} alt="LinkedIn Icon" className="navbar-social-icon"/>
        </a>
        <a
          href="https://www.linkedin.com/in/adeesha-kristhorubaduge-579b46199/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={navIcon3} alt="LinkedIn Icon" className="navbar-social-icon" style={{height:"33px" , width:"33px"}}/>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
