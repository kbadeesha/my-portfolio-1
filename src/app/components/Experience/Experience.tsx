import React from "react";
import TrackVisibility from "react-on-screen";
import "../../../styles/components/experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import DecryptedText from "../Shared/DecryptedText/DecryptedText";
const Experience = () => {
  return (
    <section className="exp" id="exp">
      <div className="container-exp">
        {" "}
        <div className="row">
          <div className="col-12">
            <div className="exp-bx wow zoomIn">
              <h2>
                <DecryptedText
                  text="Experience"
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
                Over the years, I have worked on a variety of projects that have
                honed my skills as a software engineer and web developer. From
                designing intuitive user interfaces to architecting scalable
                backend systems, each experience has contributed to my growth
                and expertise. I have collaborated with teams, tackled complex
                challenges, and delivered solutions that drive efficiency and
                innovation.
                <br />
                <br /> Below is a glimpse into the roles and projects that have
                shaped my journey in the tech industry.
              </p>
              <TrackVisibility partialVisibility>
                {({ isVisible }) => (
                  <div
                    className={`exp-grid ${
                      isVisible ? "animate__animated animate__fadeInUp" : ""
                    }`}
                  >
                    <ExperienceCard />
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

export default Experience;
