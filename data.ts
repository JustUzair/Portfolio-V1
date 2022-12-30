import { RiComputerLine } from "react-icons/ri";
import {
  FaServer,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { AiOutlineApi, AiOutlineAntDesign, AiFillHtml5 } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { GrReactjs } from "react-icons/gr";
import { SiExpress, SiMysql, SiPhp, SiJavascript } from "react-icons/si";
import { IProject, IService, ISkill } from "./type";
import css from "./public/icons/css3-original.svg";
import html from "./public/icons/html5-original.svg";
import react from "./public/icons/react-original.svg";
import node from "./public/icons/nodejs-original.svg";
import java from "./public/icons/java-original.svg";
import mysql from "./public/icons/mysql-original-wordmark.svg";
import js from "./public/icons/javascript-original.svg";
import php from "./public/icons/php-original.svg";
import python from "./public/icons/python-original.svg";
// import express from "./public/icons/express-original-wordmark.svg"
import express from "./public/icons/express-js-png.png";
export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable websites using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about: "Handle database, server, api using <b>Express & Node </b> ",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust  REST API using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about:
      "a daily problem solver in <b>HackerRank</b>, <b>LeetCode</b> and <b>GeeksForGeeks</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "Design stunning user interfaces using various tools like <b>Figma</b> <b>Framer-Motion</b>! ",
  },
];

export const skills: ISkill[] = [
  { name: "html", Icon: html },
  { name: "css", Icon: css },
  { name: "javascript", Icon: js },
  { name: "python", Icon: python },
  { name: "java", Icon: java },
  { name: "react", Icon: react },
  { name: "node", Icon: node },
  { name: "express", Icon: express },
  { name: "mysql", Icon: mysql },
  { name: "php", Icon: php },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "To-Do List",
    description: "This is a basic to-do list app made using ReactJS",
    image_path: ["/images/ToDoList/1.JPG"],
    deployed_url: "https://uzair-react-todo-list.netlify.app/",
    github_url: "https://github.com/JustUzair/react-todo-list",
    category: ["react"],
    key_techs: ["React", "Netlify Hosting"],
  },
  {
    id: 2,
    name: "Beach Resorts",
    description:
      "Showcasing available rooms in the resort and providing info for the same. Technologies used:- ReactJS and Contentful (CMS/BYOF)",
    image_path: [
      "/images/BeachResorts/1.JPG",
      "/images/BeachResorts/2.JPG",
      "/images/BeachResorts/3.JPG",
    ],
    deployed_url: "https://react-beach-resorts-uzair.netlify.app/",
    github_url: "https://github.com/JustUzair/react-beach-resorts",
    category: ["react"],
    key_techs: [
      "React",
      "Contentful API",
      "Netlify",
      "Github CI/CD",
      "Netlify Hosting",
    ],
  },
  {
    id: 3,
    name: "Tech Store",
    description:
      "ReactJS based project called tech store, which is an online tech hardware store built using ReactJS, Bootstrap, Contentful (Headless CMS), and also includes PayPal sandbox payment. The website is pure ReactJS and is front-end only and it uses the static data from Contentful API. Test Credentials for paypal sandbox are:    Email:-abc@techstore.com Password:-abcdabcd",
    image_path: [
      "/images/TechStore/1.JPG",
      "/images/TechStore/2.JPG",
      "/images/TechStore/3.JPG",
    ],
    deployed_url: "https://react-tech-store-uzair.netlify.app/",
    github_url: "https://github.com/JustUzair/react-tech-store",
    category: ["react"],
    key_techs: [
      "React",
      "Contentful API",
      "Paypal SandBox API",
      "BootStrap",
      "Github CI/CD",
      "Netlify Hosting",
    ],
  },
  {
    id: 4,
    name: "Netflix-Clone",
    description:
      "A Netflix Clone, with firebase authentication. You can create an account with any random email and password and sign in using that credentials. The web app makes use of tMDb API(TheMovieDatabase API) to load movies and shows into the app. As there wasn't any database, I couldn't add the payment gateway and plans to the app, since there wouldn't be any way to check if user paid for the service, hence this project is front-end only. And also couldn't add any videos because of no- piracy policy 😅.And the project is made using ReactJS and Firebase(only for authentication).API:- tMDb.TEST CREDENTIALS Email: - abcabc@gmail.com Password: -abcabc",
    image_path: [
      "/images/NetflixClone/1.PNG",
      "/images/NetflixClone/2.PNG",
      "/images/NetflixClone/3.PNG",
      "/images/NetflixClone/4.PNG",
      "/images/NetflixClone/5.PNG",
      "/images/NetflixClone/6.PNG",
    ],
    deployed_url: "https://netflix-clone-54fd3.web.app/",
    github_url: "https://github.com/JustUzair/react-netflix-clone",
    category: ["react", "firebase"],
    key_techs: [
      "React",
      "Firebase Auth",
      "tMDB API",
      "Firebase Hosting",
      "Redux",
    ],
  },
  {
    id: 5,
    name: "Disney-Clone",
    description:
      "Disney Plus clone. It uses ReactJS, and Firebase auth along with FirestoreDB to store the data. You can log in with Google account too. Also do not forget to hover on the disney, marvel, etc, logos (Click in mobile devices). They have cool little effects",
    image_path: [
      "/images/DisneyClone/1.PNG",
      "/images/DisneyClone/2.PNG",
      "/images/DisneyClone/3.PNG",
      "/images/DisneyClone/4.PNG",
      "/images/DisneyClone/5.PNG",
      "/images/DisneyClone/6.PNG",
      "/images/DisneyClone/7.PNG",
    ],
    deployed_url: "https://disney-clone-91559.web.app/",
    github_url: "https://github.com/JustUzair/disney-plus-clone",
    category: ["react", "firebase", "firestore"],
    key_techs: [
      "React",
      "Firebase Auth",
      "FireStoreDB",
      "Firebase Hosting",
      "Redux",
    ],
  },
  {
    id: 6,
    name: "LinkedIn-Clone",
    description:
      "ReactJS, Firebase and Redux based LinkedIn Clone. It uses Firestore to store posts and uses Google Auth to provide login functionality. Logged In users can also post an article and attach an image or video link which will be stored in firebase in real-time. Also the Post description supports profanity filter upto some extent.",
    image_path: [
      "/images/LinkedInClone/1.JPG",
      "/images/LinkedInClone/2.JPG",
      "/images/LinkedInClone/3.JPG",
      "/images/LinkedInClone/4.JPG",
      "/images/LinkedInClone/5.JPG",
      "/images/LinkedInClone/6.JPG",
    ],
    deployed_url: "https://linkedin-clone-uzair.web.app/",
    github_url: "https://github.com/JustUzair/react-linkedin-clone",
    category: ["react", "firebase", "firestore"],
    key_techs: [
      "React",
      "Firebase Auth",
      "FireStoreDB",
      "Firebase Hosting",
      "Redux",
    ],
  },
  {
    id: 7,
    name: "Portfolio-Website",
    description:
      " A Portfolio Website, to showcase my personal projects, achievements and skills. The website is made using Next.JS, TypeScript, Tailwind CSS and Framer-Motion. The project supports various types of filters for projects, Dark and Light Themes, etc. In addition the website is also taken care of responsiveness, optimizations, deployment, etc. All the other projects are showcased within the portfolio website 🤞🤞. Website is deployed in CI/CD manner through github on Vercel.",
    image_path: [
      "/images/Portfolio-V1/1.JPG",
      "/images/Portfolio-V1/2.JPG",
      "/images/Portfolio-V1/3.JPG",
      "/images/Portfolio-V1/4.JPG",
      "/images/Portfolio-V1/5.JPG",
      "/images/Portfolio-V1/6.JPG",
    ],
    deployed_url: "https://portfolio-uzair-saiyed.vercel.app/",
    github_url: "https://github.com/JustUzair/Portfolio-V1",
    category: ["react", "tailwind", "next.js"],
    key_techs: ["React", "Framer Motion", "TypeScript", "Next.js", "Tailwind"],
  },
  {
    id: 8,
    name: "Natours",
    description:
      "A tours and travels website for trekking and exploring nature. The website includes functionalities like JWT Authentication, Sign Up, Login, Forgot Password, Reset Password, Upload Profile Photo, Pay and Book your tour, Submit, edit and remove their reviews, receive emails in real time, and much more. In addition to all this, the website is taken care of responsiveness, optimizations, security, etc.",
    deployed_url: "https://natours-uzair.herokuapp.com",
    image_path: [
      "/images/Natours/1.JPG",
      "/images/Natours/2.JPG",
      "/images/Natours/3.JPG",
      "/images/Natours/4.JPG",
      "/images/Natours/5.JPG",
      "/images/Natours/6.JPG",
      "/images/Natours/7.JPG",
      "/images/Natours/8.JPG",
    ],
    github_url: "https://github.com/JustUzair/Natours",
    category: ["pug", "node", "mongo", "express"],
    key_techs: [
      "NodeJs",
      "MongoDB",
      "Express",
      "Cloudinary API",
      "Pug Template",
      "SendGrid",
    ],
  },
  {
    id: 9,
    name: "Fund-Me",
    description:
      "This project demonstrates a basic Hardhat (Solidity) use case . It comes with a sample contract, a test for that contract, and a script that deploys that contract.",
    deployed_url: "https://uzair-fund-me.netlify.app/",
    image_path: [
      "/images/Hardhat-Fund-Me/1.JPG",
      "/images/Hardhat-Fund-Me/2.JPG",
      "/images/Hardhat-Fund-Me/3.JPG",
    ],
    github_url: "https://github.com/JustUzair/Full-Stack-Fund-Me",
    category: ["hardhat"],
    key_techs: ["React", "Hardhat", "Solidity", "Next.js", "Tailwind"],
  },
  {
    id: 10,
    name: "Raffle | Decentralized Lottery",
    description:
      "You can enter the raffle using a Goerli test net, or if you want you can spin a hardhat node locally and enter the raffle as well.",
    key_techs: ["React", "Hardhat", "Solidity", "Next.js", "Tailwind"],
    deployed_url: "https://next-js-raffle.vercel.app/",
    github_url: "https://github.com/JustUzair/NextJS-Raffle",
    category: ["hardhat", "react", "tailwind", "next.js"],
    image_path: ["/images/NextJS-Raffle/1.JPG", "/images/NextJS-Raffle/1.JPG"],
  },
];
