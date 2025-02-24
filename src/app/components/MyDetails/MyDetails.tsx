"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import Header1 from "../../../../public/assets/img/Header1.png";
import Image from "next/image"; // Import the Image component
import "../../styles/components/my-details.css";

const MyDetails = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "Software Engineer", "Software Engineer"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta]); // Add delta as a dependency

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setLoopNum(loopNum + 1); // Adjusted loopNum increment logic
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setDelta(500);
    }
  };

  return (
    <section className="my-details" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="logoImage">
                  <div
                    className={
                      isVisible ? " animate__animated animate__zoomIn " : ""
                    }
                  >
                    <Image
                      src={Header1.src}
                      alt="Header Img"
                      width={500} // Set the appropriate width
                      height={500} // Set the appropriate height
                    />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Universe</span>
                  <h1>
                    {`Hi! I'm Adeesha`} <br />
                    <span
                      className="txt-rotate"
                      data-rotate='[ "Web Application Developer", "Front End Developer", "Front End Engineer","Web Applications Engineer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Your friendly neighborhood frontend developer and JavaScript
                    engineer. I spend my days (and often nights) painting the
                    Internet canvas with PROJECTS and lines of code, turning
                    zeroes and ones into immersive, interactive experiences.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyDetails;
