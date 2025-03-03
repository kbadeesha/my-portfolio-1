import React from "react";
import Image from "next/image"; // Import Image component
import "../../../styles/components/navbar.css";
import { ImageData } from "@/app/data/ImagesData";

const NavBar = () => {
  return (
    <nav className="navbar">
      <span className="logo">
        <a
          href="https://www.linkedin.com/in/adeesha-kristhorubaduge-579b46199/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Adeesha's LinkedIn Profile"
        >
          <Image
            src={ImageData.NAVBAR_LOGO.img}
            alt="Logo"
            className="navbar-logo"
            height={33}
            width={33}
          />
        </a>
      </span>
      <div className="socialLinks">
        <a
          href="https://www.linkedin.com/in/adeesha-kristhorubaduge-579b46199/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Adeesha's LinkedIn Profile"
        >
          <Image
            src={ImageData.LINKEDIN_ICON.img}
            alt="LinkedIn Icon"
            className="navbar-social-icon"
            height={33}
            width={33}
          />
        </a>
        <a
          href="https://facebook.com/adeeshaxd/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Adeesha's Facebook Profile"
        >
          <Image
            src={ImageData.FB_ICON.img}
            alt="Facebook Icon"
            className="navbar-social-icon"
            height={33}
            width={33}
          />
        </a>
        <a
          href="https://github.com/kbadeesha"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Adeesha's GitHub Profile"
        >
          <Image
            src={ImageData.GIT_ICON.img}
            alt="GitHub Icon"
            className="navbar-social-icon"
            height={33}
            width={33}
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
