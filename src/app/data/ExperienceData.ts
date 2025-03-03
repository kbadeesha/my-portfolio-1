import { IExperience } from "../shared/interfaces/technologies.interface";
import { TECHNOLOGIES } from "./TechnologiesData";
import softcodeit_logo from "../../../public/assets/img/company_logos/softcodeit_solutions_pvt_ltd_logo.jpeg";
import itx_logo from "../../../public/assets/img/company_logos/1641293756236.jpeg";

export const EXPERIENCE_DATA: IExperience[] = [
  {
    companyName: "SoftcodeIT Solutions Pvt Ltd",
    companyLogo: softcodeit_logo,
    company_url: "https://www.softcodeit.com/",
    location: "Colombo, Sri Lanka",
    duration: "April 2022 - Present",
    designation: "Software Engineer",
    projects: [
      {
        project_company: "ZeroRisk",
        project_company_url: "https://www.zerorisk.io/",
        project_name: "UI Integration",
        project_technologies: [
          TECHNOLOGIES.ANGULAR,
          TECHNOLOGIES.SASS,
          TECHNOLOGIES.CSS3,
        ],
        project_company_location: "U.S.A / Ireland",
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
        project_company_url: "https://www.selftv.video/",
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
      {
        project_company: "BroadWalk",
        project_name: "Chatbot development",
        project_company_url: "https://www.bwalk.com/en-ca/",
        project_technologies: [TECHNOLOGIES.KOREAI, TECHNOLOGIES.JAVASCRIPT],
        project_company_location: "Canada",
        project_points: [
          {
            id: 1,
            point:
              " Developed and deployed a customer support chatbot for BroadWalk Canada’s apartment listing platform, using Kore.AI and JavaScript. The chatbot was designed to help users find available apartments, answer questions about properties, and assist with the rental process in an automated, efficient manner. ",
          },
          {
            id: 2,
            point:
              "Created an Interactive Voice Response (IVR) bot that enabled registered users to call the hotline for emergencies, maintenance requests, and other customer service needs, enhancing the overall user experience by providing real-time assistance via voice. ",
          },
          {
            id: 3,
            point:
              "Increased customer query resolution speed by 25% across both text and voice interactions",
          },
          {
            id: 4,
            point:
              "Enhanced the bot's multilingual capabilities, allowing it to handle interactions in different languages ex:French , thus improving accessibility for a wider customer base.",
          },
          {
            id: 4,
            point:
              "Worked with QA teams to perform thorough testing of the bot flows. Voice and Digital Both",
          },
        ],
      },
      {
        project_company: "Citi Bank",
        project_name: "Chatbot development",
        project_company_url: "https://www.citi.com/",
        project_technologies: [TECHNOLOGIES.KOREAI, TECHNOLOGIES.JAVASCRIPT],
        project_company_location: "U.S.A",
        project_points: [
          {
            id: 1,
            point:
              " Developed and deployed both voice-based IVR and text-based chatbot for Citizens Bank International using the Kore.AI platform to handle a wide range of credit card-related customer service tasks, including checking balance, retrieving card details, and reporting stolen cards. The system was designed to automate interactions that were traditionally handled by customer service agents, streamlining the process for both users and the bank. ",
          },
          {
            id: 2,
            point:
              "Optimized chatbot capabilities by integrating language understanding enhancements, such as adding synonyms and alternative phrases. This helped the bot better understand diverse user inputs, improving its accuracy in responding to queries and making the overall experience more natural and user-friendly.",
          },
          {
            id: 3,
            point:
              "Streamlined user interaction by designing a smooth conversational flow, enabling customers to perform actions such as querying credit card balances, retrieving transaction histories, and reporting fraudulent activities with minimal steps.",
          },
          {
            id: 4,
            point:
              "Worked with QA teams to perform thorough testing of the bot flows. Both Digital and Voice Flows. ",
          },
        ],
      },
      {
        project_company: "Rocket Lister",
        project_name: "Real Estate Listing Web App.",
        project_company_url: "https://www.rocketlister.com/",
        project_technologies: [
          TECHNOLOGIES.REACT,
          TECHNOLOGIES.JAVASCRIPT,
          TECHNOLOGIES.TYPESCRIPT,
          TECHNOLOGIES.HTML5,
          TECHNOLOGIES.SASS,
          TECHNOLOGIES.NESTJS,
        ],
        project_company_location: "U.S.A",
        project_points: [
          {
            id: 1,
            point:
              "Engineered the front end of Rocket Lister, a real estate listing web application offering services related to real estate such as virtual twilight, video walkthroughs, MLS entries, and sign rentals and much more using React.js, Typescript and Redux for state management. ",
          },
          {
            id: 2,
            point:
              "Developed reusable React components that improved efficiency, saving over 20 hours of development per month. ",
          },
          {
            id: 3,
            point:
              "Built and maintained a comprehensive admin panel for managing users, admins, services, packages, advertisements, and more, streamlining administrative workflows and improving content management. ",
          },
          {
            id: 4,
            point:
              " Collaborated with backend developers to integrate the front end with a NestJS backend and MySQL database, ensuring seamless data flow and performance. ",
          },
          {
            id: 5,
            point:
              "Conducted client demos, presenting the platform’s features and functionalities, gathering feedback, and ensuring alignment with client needs and expectations. ",
          },
          {
            id: 6,
            point:
              "Worked within an Agile Scrum environment, participating in sprints, standups, and retrospectives to ensure timely and efficient delivery of features and improvements.",
          },
        ],
      },
    ],
  },
  {
    companyName: "ITX360, Expo Lanka (Pvt) Ltd ",
    companyLogo: itx_logo,
    company_url: "https://www.itx360.com/",
    location: "Colombo, Sri Lanka",
    duration: "October 2021 - April 2022",
    designation: "Intern Software Engineer",
    projects: [
      {
        project_company: "Shangri-La",
        project_company_url: "https://www.shangri-la.com/colombo/shangrila/",
        project_name: "E-Approval System and Petty Cash System",
        project_technologies: [
          TECHNOLOGIES.REACT,
          TECHNOLOGIES.SASS,
          TECHNOLOGIES.CSS3,
        ],
        project_company_location: "Sri Lanka",
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
