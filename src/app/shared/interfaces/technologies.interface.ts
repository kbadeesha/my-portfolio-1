import { StaticImageData } from "next/image";

export interface IExperience {
  companyName: string;
  location: string;
  duration: string;
  designation: string;
  projects: IProject[];
}

export interface IProject {
  project_company: string;
  project_name: string;
  project_technologies: ITechnologyData[];
  project_company_location: string;
  project_points: IProjectPoint[];
}

export interface ITechnologyData {
  name: string;
  logo: StaticImageData;
}

export interface IProjectPoint {
  id: number;
  point: string;
}
