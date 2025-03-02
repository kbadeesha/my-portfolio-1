import react_logo from "../../../public/assets/img/tech_Logo/reactJs_logo.png";
import TS_logo from "../../../public/assets/img/tech_Logo/TS_logo.png";
import css_logo from "../../../public/assets/img/tech_Logo/css_logo.png";
import html_logo from "../../../public/assets/img/tech_Logo/html_logo.png";
import js_logo from "../../../public/assets/img/tech_Logo/js_logo.png";
import sass_logo from "../../../public/assets/img/tech_Logo/sass_logo.png";
import nest_logo from "../../../public/assets/img/tech_Logo/nest_logo.png";
import nextJs_logo from "../../../public/assets/img/tech_Logo/nextJs3.png";
import node_logo from "../../../public/assets/img/tech_Logo/node_icon.png";
import bootstrap_logo from "../../../public/assets/img/tech_Logo/mui_logo.png";
import mui_logo from "../../../public/assets/img/tech_Logo/bootstrap_logo.png";
import kore_logo from "../../../public/assets/img/tech_Logo/korelogo.png";
import angular_logo from "../../../public/assets/img/tech_Logo/angular_logo.png";
import { ITechnologyData } from "../shared/interfaces/technologies.interface";

export const TechnologiesData: ITechnologyData[] = [
  { name: "ReactJS", logo: react_logo },
  { name: "Angular", logo: angular_logo },
  { name: "NEXT.JS", logo: nextJs_logo },
  { name: "TypeScript", logo: TS_logo },
  { name: "JavaScript", logo: js_logo },
  { name: "HTML5", logo: html_logo },
  { name: "CSS3", logo: css_logo },
  { name: "NestJS", logo: nest_logo },
  { name: "Node", logo: node_logo },
  { name: "SASS", logo: sass_logo },
  { name: "Material UI", logo: mui_logo },
  { name: "BootStrap", logo: bootstrap_logo },
  { name: "Kore.AI", logo: kore_logo },
];
export const TECHNOLOGIES = {
  REACT: { name: "ReactJS", logo: react_logo },
  ANGULAR: { name: "Angular", logo: angular_logo },
  NEXT: { name: "NEXT.JS", logo: nextJs_logo },
  TYPESCRIPT: { name: "TypeScript", logo: TS_logo },
  JAVASCRIPT: { name: "JavaScript", logo: js_logo },
  HTML5: { name: "HTML5", logo: html_logo },
  CSS3: { name: "CSS3", logo: css_logo },
  NESTJS: { name: "NestJS", logo: nest_logo },
  NODE: { name: "Node", logo: node_logo },
  SASS: { name: "SASS", logo: sass_logo },
  MUI: { name: "Material UI", logo: mui_logo },
  BOOTSTRAP: { name: "BootStrap", logo: bootstrap_logo },
  KOREAI: { name: "Kore.AI", logo: kore_logo },
};
