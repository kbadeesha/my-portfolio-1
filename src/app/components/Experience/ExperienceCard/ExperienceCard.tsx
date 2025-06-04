import { EXPERIENCE_DATA } from "@/app/data/ExperienceData";
import { IExperience } from "@/app/shared/interfaces/technologies.interface";
import Image from "next/image";
import { Tooltip } from "react-bootstrap";

const ExperienceCard = () => {
  const experienceData: IExperience[] = EXPERIENCE_DATA;

  return (
    <div className="exp-main-card">
      {experienceData.map((experience, index) => {
        return (
          <div key={index} className="exp-container">
            <div className="exp-company-details">
              <a className="exp-comp-image" href={experience.company_url}>
                <Image
                  src={experience.companyLogo}
                  alt="Header Img"
                  width={60}
                  height={60}
                />
              </a>
              <div className="company-title-grid">
                <a href={experience.company_url}>
                  <h3 className="mt-2">{experience.companyName}</h3>
                </a>
                <div className="exp-location">{experience.location}</div>
              </div>
              <div className="mt-4  exp-duration">{experience.duration}</div>
            </div>

            <div className="exp-designation">{experience.designation}</div>

            <div className="exp-project-section">
              {experience.projects.map((project, poj_idx) => {
                return (
                  <div key={poj_idx} className="proj-item">
                    <div className="proj-details">
                      <div className="proj-detail-title">
                        <a href={project.project_company_url}>
                          <div className="proj-company">
                            {project.project_company} {"-   "}
                          </div>
                        </a>
                        <div className="proj-name">
                          {" " + project.project_name}
                        </div>
                      </div>
                      <div className="proj-company-location">
                        {project.project_company_location}
                      </div>
                    </div>
                    <div className="proj-technologies">
                      {project.project_technologies.map((tech, tech_idx) => {
                        return (
                          <div key={tech_idx} className="tech-item" style={{ animationDelay: `${tech_idx * 400}ms` }}>
                            <a target="_blank" href={tech.url}>
                              <Tooltip title={tech.name}>
                                <Image
                                  src={tech.logo}
                                  alt="Header Img"
                                  width={60}
                                  height={60}
                                  className="tech-item-logo"
                                />
                              </Tooltip>
                            </a>
                          </div>
                        );
                      })}
                    </div>

                    <div className="project-points">
                      {project.project_points.map((point, point_idx) => {
                        return (
                          <div key={point_idx} className="point-item" style={{ animationDelay: `${point_idx * 400}ms` }}>
                            <ul>
                              <li key={point.id}>{point.point}</li>
                            </ul>
                            <br />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceCard;
