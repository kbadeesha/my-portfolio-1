import { EXPERIENCE_DATA } from "@/app/data/ExperienceData";
import { IExperience } from "@/app/shared/interfaces/technologies.interface";
import React from "react";

const ExperienceCard = () => {
  const experienceData: IExperience[] = EXPERIENCE_DATA;

  return (
    <div className="exp-card-container">
      {experienceData.map((experience, index) => {
        return <div key={index}>{experience.companyName}</div>;
      })}
    </div>
  );
};

export default ExperienceCard;
