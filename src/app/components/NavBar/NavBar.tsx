import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../../../styles/components/navbar.css";
// import { ImageData } from "@/app/data/ImagesData";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Event listener to track scroll position
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust scroll positiond threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <span className="logo">
        <a
          href="https://www.linkedin.com/in/adeesha-kristhorubaduge-579b46199/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Adeesha's LinkedIn Profile"
        >
          <Image
            src={"ImageData.NAVBAR_LOGO.img"}
            alt="Logo"
            className="navbar-logo"
            height={33}
            width={33}
          />
        </a>
        <div className={`my-details-cont ${isScrolled ? "hidden" : ""}`}>
          <div className="name">Adeesha Kristhoru Baduge</div>
          <a href="mailto:adeesha.kristhorubaduge@gmail.com">
            <div className="email">adeesha.kristhorubaduge@gmail.com</div>
          </a>
        </div>
      </span>
      <div className="socialLinks">
        <a
          href="https://www.linkedin.com/in/adeesha-kristhorubaduge-579b46199/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Adeesha's LinkedIn Profile"
        >
          <Image
            src={"ImageData.LINKEDIN_ICON.img"}
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
            src={"ImageData.FB_ICON.img"}
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
            src={"ImageData.GIT_ICON.img"}
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
