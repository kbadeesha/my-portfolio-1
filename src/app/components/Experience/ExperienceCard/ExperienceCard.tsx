import { EXPERIENCE_DATA } from "@/app/data/ExperienceData";
import { IExperience } from "@/app/shared/interfaces/technologies.interface";
import React from "react";
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
              <Image
                src={experience.companyLogo}
                alt="Header Img"
                width={60}
                height={60}
              />
              <div className="company-title-grid">
                <h3 className="mt-2">{experience.companyName}</h3>
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
                        <div className="proj-company">
                          {project.project_company} {"-   "}
                        </div>
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
                          <div key={tech_idx} className="tech-item">
                            <Tooltip title={tech.name}>
                              <a href="/">
                                <Image
                                  src={tech.logo}
                                  alt="Header Img"
                                  width={60}
                                  height={60}
                                  className="tech-item-logo"
                                />
                              </a>
                            </Tooltip>
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
