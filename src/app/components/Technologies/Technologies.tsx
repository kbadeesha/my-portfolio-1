import React from "react";
import TrackVisibility from "react-on-screen";
import { TechnologiesData } from "../../data/TechnologiesData";
import "../../../styles/components/technologies.css";
import DecryptedText from "../Shared/DecryptedText/DecryptedText";
const Technologies = () => {
  return (
    <section className="tech" id="tech">
      <div className="container-tech">
        {" "}
        <div className="row">
          <div className="col-12">
            <div className="tech-bx wow zoomIn">
              <h2>
                <DecryptedText
                  text="Technologies"
                  speed={60}
                  maxIterations={12}
                  characters="ABCD1234!?"
                  className="revealed"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                  sequential={true}
                />
              </h2>
              <p>
                Throughout my journey as a developer, I have gained expertise in
                a diverse set of technologies that empower me to build scalable,
                high-performance applications. From the front-end to the
                back-end, I leverage modern tools and frameworks to craft
                seamless user experiences and robust infrastructures.
                <br />
                <br /> Below is a selection of the key technologies I’ve worked
                with to bring projects to life.
              </p>
              <TrackVisibility partialVisibility>
                {({ isVisible }) => (
                  <div
                    className={`tech-grid ${
                      isVisible ? "animate__animated animate__fadeInUp" : ""
                    }`}
                  >
                    {TechnologiesData.map((tech, index) => (
                      <div key={index} className="tech-item">
                        <a href={tech.url}>
                          <img
                            src={tech.logo.src}
                            alt={`${tech.name} logo`}
                            className="tech-logo"
                          />
                        </a>
                        <p>{tech.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
