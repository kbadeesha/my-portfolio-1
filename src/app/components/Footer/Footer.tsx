import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image"; // Import Next.js Image component
import "./footer.css";
// import { ImageData } from "@/app/data/ImagesData";

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
            <Image
              src={"https://i.postimg.cc/ZYVcTYm0/Logo2.png"} // Path relative to public folder
              alt="Logo"
              width={200} // Set a width for the logo
              height={100} // Set a height for the logo
              className="footer-logo"
            />
          </Col>
          <p className="mt-0 mb-3">adeesha.kristhorubaduge@gmail.com</p>
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
                <Image
                  src={"ImageData.LINKEDIN_ICON.img"}
                  alt="LinkedIn"
                  width={24} // Set width for social icons
                  height={24} // Set height for social icons
                  className="footer-social-icon"
                />
              </a>
              <a
                href="https://facebook.com/adeeshaxd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"ImageData.FB_ICON.img"}
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="footer-social-icon"
                />
              </a>
              <a
                href="https://github.com/kbadeesha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"ImageData.GIT_ICON.img"}
                  alt="GitHub"
                  width={24}
                  height={24}
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
