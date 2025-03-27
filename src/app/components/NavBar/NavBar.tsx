import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./navbar.css";

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
            src={"https://i.postimg.cc/ZYVcTYm0/Logo2.png"}
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
            src={"https://i.postimg.cc/d0vRP6nP/nav-icon1.png"}
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
            src={"https://i.postimg.cc/N046gXPy/nav-icon2.png"}
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
            src={"https://i.postimg.cc/76tSzk4w/nav-icon7.png"}
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
