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
  { name: "ReactJS", logo: react_logo, url: "https://react.dev/" },
  { name: "Angular", logo: angular_logo, url: "https://angular.dev/" },
  { name: "NEXT.JS", logo: nextJs_logo, url: "https://nextjs.org/" },
  { name: "TypeScript", logo: TS_logo, url: "https://www.typescriptlang.org/" },
  {
    name: "JavaScript",
    logo: js_logo,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "HTML5",
    logo: html_logo,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    logo: css_logo,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { name: "NestJS", logo: nest_logo, url: "https://nestjs.com/" },
  { name: "Node", logo: node_logo, url: "https://nodejs.org/" },
  { name: "SASS", logo: sass_logo, url: "https://sass-lang.com/" },
  { name: "Material UI", logo: mui_logo, url: "https://mui.com/" },
  { name: "BootStrap", logo: bootstrap_logo, url: "https://getbootstrap.com/" },
  { name: "Kore.AI", logo: kore_logo, url: "https://kore.ai/" },
];

export const TECHNOLOGIES = {
  REACT: { name: "ReactJS", logo: react_logo, url: "https://react.dev/" },
  ANGULAR: { name: "Angular", logo: angular_logo, url: "https://angular.dev/" },
  NEXT: { name: "NEXT.JS", logo: nextJs_logo, url: "https://nextjs.org/" },
  TYPESCRIPT: {
    name: "TypeScript",
    logo: TS_logo,
    url: "https://www.typescriptlang.org/",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    logo: js_logo,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  HTML5: {
    name: "HTML5",
    logo: html_logo,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  CSS3: {
    name: "CSS3",
    logo: css_logo,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  NESTJS: { name: "NestJS", logo: nest_logo, url: "https://nestjs.com/" },
  NODE: { name: "Node", logo: node_logo, url: "https://nodejs.org/" },
  SASS: { name: "SASS", logo: sass_logo, url: "https://sass-lang.com/" },
  MUI: { name: "Material UI", logo: mui_logo, url: "https://mui.com/" },
  BOOTSTRAP: {
    name: "BootStrap",
    logo: bootstrap_logo,
    url: "https://getbootstrap.com/",
  },
  KOREAI: { name: "Kore.AI", logo: kore_logo, url: "https://kore.ai/" },
};
