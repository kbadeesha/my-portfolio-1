import { IExperience } from "../shared/interfaces/technologies.interface";
import { TECHNOLOGIES } from "./TechnologiesData";
import softcodeit_logo from "../../../public/assets/img/company_logos/softcodeit_solutions_pvt_ltd_logo.jpeg";
import itx_logo from "../../../public/assets/img/company_logos/1641293756236.jpeg";

export const EXPERIENCE_DATA: IExperience[] = [
  {
    companyName: "SoftcodeIT Solutions Pvt Ltd",
    companyLogo: softcodeit_logo,
    location: "Colombo, Sri Lanka",
    duration: "April 2022 - Present",
    designation: "Software Engineer",
    projects: [
      {
        project_company: "ZeroRisk",
        project_name: "UI Integration",
        project_technologies: [
          TECHNOLOGIES.ANGULAR,
          TECHNOLOGIES.SASS,
          TECHNOLOGIES.CSS3,
        ],
        project_company_location: "USA / Ireland",
        project_points: [
          {
            id: 1,
            point:
              "Integrated pixel-perfect UI designs from Figma into the web application of ZeroRisk, a Merchant Management Platform, ensuring an optimized and seamless user experience across desktop and mobile platforms using SASS and Angular, JavaScript. ",
          },
          {
            id: 2,
            point:
              "Utilized Angular framework to implement dynamic, responsive components, following best practices for clean, maintainable code.",
          },
        ],
      },
      {
        project_company: "SelfTV",
        project_name: "Report Generating Module",
        project_technologies: [
          TECHNOLOGIES.ANGULAR,
          TECHNOLOGIES.SASS,
          TECHNOLOGIES.CSS3,
        ],
        project_company_location: "Italy",
        project_points: [
          {
            id: 1,
            point:
              "Developed and implemented a report generating component in the SelfTV (Streaming Service) admin panel using Angular, JavaScript, and CSS.",
          },
          {
            id: 2,
            point:
              "Binding backend data to dynamically generate and download reports, allowing administrators to efficiently access and analyze performance data.",
          },
        ],
      },
    ],
  },
  {
    companyName: "ITX360, Expo Lanka (Pvt) Ltd ",
    companyLogo: itx_logo,
    location: "Colombo, Sri Lanka",
    duration: "October 2021 - April 2022",
    designation: "Intern Software Engineer",
    projects: [
      {
        project_company: "Shangri-La",
        project_name: "E-Approval System and Petty Cash System",
        project_technologies: [
          TECHNOLOGIES.REACT,
          TECHNOLOGIES.SASS,
          TECHNOLOGIES.CSS3,
        ],
        project_company_location: "USA",
        project_points: [
          {
            id: 1,
            point:
              "Spearheaded the front-end development of Hotel Shangri-La's E-approval System and Petty Cash System using ReactJS, CSS, and Redux, capable of supporting over +500 concurrent users.  ",
          },
          {
            id: 2,
            point:
              "Maintained and expanded knowledge of programming languages, contributing to the creation of high-quality, object-oriented code. ",
          },
          {
            id: 3,
            point:
              "Fostered collaboration across teams to overcome both technical and non-technical challenges, deploying the Initial Scoped Application in 8 months.",
          },
        ],
      },
    ],
  },
];
