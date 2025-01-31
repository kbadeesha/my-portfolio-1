import React from "react";
import TrackVisibility from "react-on-screen";
import "../../styles/components/projects.css";
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
                Throughout my journey as a developer, I have gained projertise in
                a diverse set of Projects that empower me to build scalable,
                high-performance applications. From the front-end to the
                back-end, I leverage modern tools and frameworks to craft
                seamless user Projectss and robust infrastructures.
                <br />
                <br /> Below is a selection of the key Projects I’ve worked
                with to bring projects to life.
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
