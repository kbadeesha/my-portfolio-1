import React from "react";
import Image from "next/image"; // Import Image component
import "../../styles/components/navbar.css";
import logo from "../../../../public/assets/img/Logo.png";
import navIcon1 from "../../../../public/assets/img/nav-icon1.svg";
import navIcon2 from "../../../../public/assets/img/nav-icon2.svg";
import navIcon3 from "../../../../public/assets/img/nav-icon7.svg";


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
          href="https://facebook.com/adeeshaxd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={navIcon2} alt="Facebook Icon" className="navbar-social-icon"/>
        </a>
        <a
          href="https://github.com/kbadeesha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={navIcon3} alt="Git Icon" className="navbar-social-icon" style={{height:"33px" , width:"33px"}}/>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
