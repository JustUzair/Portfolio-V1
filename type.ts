import { IconType } from "react-icons";

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}
export interface ISkill {
  name: string;
  Icon: string;
}
export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string[]; //image at index 0 represents cover image
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

// export type Category = "react" | "node" | "express" | "django" | "mongo" | "firebase" | "firestore" - Edit List in ProjectsNavbar.tsx
export type Category =
  | "react"
  | "firebase"
  | "firestore"
  | "tailwind"
  | "next.js"
  | "node"
  | "mongo"
  | "express"
  | "pug"
  | "hardhat";
