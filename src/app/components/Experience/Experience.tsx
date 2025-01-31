import React from "react";
import TrackVisibility from "react-on-screen";
import "../../styles/components/experience.css";
const Experience = () => {
  return (
    <section className="exp" id="exp">
      <div className="container-exp">
        {" "}
        <div className="row">
          <div className="col-12">
            <div className="exp-bx wow zoomIn">
              <h2>Experience</h2>
              <p>
                Throughout my journey as a developer, I have gained expertise in
                a diverse set of Experience that empower me to build scalable,
                high-performance applications. From the front-end to the
                back-end, I leverage modern tools and frameworks to craft
                seamless user experiences and robust infrastructures.
                <br />
                <br /> Below is a selection of the key Experience I’ve worked
                with to bring projects to life.
              </p>
              <TrackVisibility partialVisibility>
                {({ isVisible }) => (
                  <div
                    className={`exp-grid ${
                      isVisible ? "animate__animated animate__fadeInUp" : ""
                    }`}
                  >
                    <>Helow</>
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
