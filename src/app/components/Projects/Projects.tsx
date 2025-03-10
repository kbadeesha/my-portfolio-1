import React from "react";
import TrackVisibility from "react-on-screen";
import "./projects.css";
const Projects = () => {
  return (
    <section className="proj" id="proj">
      <div className="container-proj">
        {" "}
        <div className="row">
          <div className="col-12">
            <div className="proj-bx wow zoomIn">
              <h2>Projects</h2>
              <p>
                Throughout my career, I have worked on diverse projects that
                showcase my ability to design, develop, and deploy high-quality
                software solutions. Each project has allowed me to apply my
                technical expertise, problem-solving skills, and creativity to
                build functional and impactful applications. Whether it is a
                dynamic web platform, an e-commerce solution, or a feature-rich
                enterprise system, I strive to create seamless and scalable
                experiences.
                <br />
                <br /> Below are some of the key projects I have worked on,
                highlighting my contributions and the technologies used.+
              </p>
              <TrackVisibility partialVisibility>
                {({ isVisible }) => (
                  <div
                    className={`proj-grid ${
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

export default Projects;
