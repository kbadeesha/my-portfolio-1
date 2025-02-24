import { Container, Row, Col } from "react-bootstrap";
import "../../../styles/components/footer.css";
import logo from "../../../../public/assets/img/Logo.png";
import navIcon1 from "../../../../public/assets/img/nav-icon1.svg";
import navIcon2 from "../../../../public/assets/img/nav-icon2.svg";
import navIcon3 from "../../../../public/assets/img/nav-icon7.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col
            xs={12}
            sm={6}
            className="d-flex align-items-center justify-content-center footer-logo-container"
          >
            <img src={logo.src} alt="Logo" className="footer-logo" />
          </Col>
          <Col
            xs={12}
            sm={6}
            className="d-flex align-items-center justify-content-center footer-social-container"
          >
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/adeesha-kristhorubaduge-579b46199/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={navIcon1.src}
                  alt="LinkedIn"
                  className="footer-social-icon"
                />
              </a>
              <a
                href="https://facebook.com/adeeshaxd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={navIcon2.src}
                  alt="Facebook"
                  className="footer-social-icon"
                />
              </a>
              <a
                href="https://github.com/kbadeesha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={navIcon3.src}
                  alt="GitHub"
                  className="footer-social-icon"
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="footer-text">Copyright 2024 All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
