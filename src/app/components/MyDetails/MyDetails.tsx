"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import Image from "next/image"; // Import the Image component
import "../../../styles/components/my-details.css";
import { ImageData } from "@/app/data/ImagesData";

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
  }, [text, delta]);

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
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
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
                      src={ImageData.HEADER.img}
                      alt="Header Img"
                      width={500}
                      height={500}
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
                    <span className="txt-rotate">
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
