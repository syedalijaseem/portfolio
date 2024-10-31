import {
  web,
  javascript,
  typescript,
  html,
  afiniti,
  USD,
  NUST,
  css,
  gaditek,
  ncil,
  reactjs,
  redux,
  tailwind,
  nodejs,
  linux,
  git,
  polars,
  python,
  sql,
  worldwise,
  shopper,
  dannosource,
  creator,
  mobile,
  fullstack,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    isDownload: true,
    url: "https://drive.google.com/uc?export=download&id=1MdhXZijQPHemJ7_TByXmEAoVYKIz5Wsf",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "AI Advocate",
    icon: mobile,
  },
  {
    title: "FullStack Developer",
    icon: fullstack,
  },
  {
    title: "Frontend Designer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "polars",
    icon: polars,
  },
];

const experiences = [
  {
    title: "AI Advocate I",
    company_name: "Afiniti",
    icon: afiniti,
    iconBg: "#383E56",
    date: "Mar 2024 - Jul 2024",
    points: [
      "Partnered with Data Science teams to tackle challenges with inaccurate or incomplete data inputs for a model deployment tool, driving a 5% boost in deployment efficiency.",
      "Harnessed in-depth expertise of the tool's codebase to pinpoint and rectify errors using data integrity checks, error reproduction, and data flow analysis, leading to a 7% uplift in error detection efficiency.",
      "Accelerated the resolution of complex errors, slashing resolution time by 10% through advanced troubleshooting methods.",
      "Provided high-impact recommendations to Data Scientists, expediting data-related issue resolution by 5%.",
      "Proposed and implemented new features, driving a 1% enhancement in the tool's functionality and user experience.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Gaditek",
    icon: gaditek,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Mar 2024",
    points: [
      "Engineered an admin panel for affiliate management using Tailwind CSS and React, driving a 5% improvement in UI consistency and maintainability.",
      "Optimized state management with Context API, elevating application responsiveness and enhancing user experience by 4%.",
      "Accelerated page load times by 2% and streamlined CRUD operations with Axios, reducing average response times by 4%.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Internet of Things (IOT) Lab, SEECS, NUST",
    icon: ncil,
    iconBg: "#383E56",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Constucted a responsive web application for tracking cattle vitals, improving accessibility by 5%.",
      "Created a REST API with MongoDB, Node.js, and Express, optimizing data management efficiency by 3%.",
    ],
  },
];

const studies = [
  {
    title: "Master's of Science in Computer Science",
    college_name: "University of South Dakota",
    icon: USD,
    iconBg: "#383E56",
    date: "Aug 2024 -  Dec 2025 (Expected)",
    points: [
      "Partnered with Data Science teams to tackle challenges with inaccurate or incomplete data inputs for a model deployment tool, driving a 5% boost in deployment efficiency.",
      "Harnessed in-depth expertise of the tool's codebase to pinpoint and rectify errors using data integrity checks, error reproduction, and data flow analysis, leading to a 7% uplift in error detection efficiency.",
      "Accelerated the resolution of complex errors, slashing resolution time by 10% through advanced troubleshooting methods.",
      "Provided high-impact recommendations to Data Scientists, expediting data-related issue resolution by 5%.",
      "Proposed and implemented new features, driving a 1% enhancement in the tool's functionality and user experience.",
    ],
  },
  {
    title: "Bachelor's of Engineering in Software Engineering",
    company_name: "National University of Sciences and Technology (NUST)",
    icon: NUST,
    iconBg: "#383E56",
    date: "Sep 2019 - June 2024",
    points: [
      "Engineered an admin panel for affiliate management using Tailwind CSS and React, driving a 5% improvement in UI consistency and maintainability.",
      "Optimized state management with Context API, elevating application responsiveness and enhancing user experience by 4%.",
      "Accelerated page load times by 2% and streamlined CRUD operations with Axios, reducing average response times by 4%.",
    ],
  },
  // {
  //   title: "Web Developer Intern",
  //   company_name: "Internet of Things (IOT) Lab, SEECS, NUST",
  //   icon: ncil,
  //   iconBg: "#383E56",
  //   date: "Jun 2022 - Aug 2022",
  //   points: [
  //     "Constucted a responsive web application for tracking cattle vitals, improving accessibility by 5%.",
  //     "Created a REST API with MongoDB, Node.js, and Express, optimizing data management efficiency by 3%.",
  //   ],
  // },
];

const projects = [
  {
    name: "World Wise",
    description:
      "A travel companion app built with React and TypeScript, integrating an interactive map and real-time city notes to boost user engagement and enrich the travel experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: worldwise,
    source_code_link: "https://github.com/syedalijaseem/worldwise",
  },
  {
    name: "Shopper",
    description:
      "A modern clothing platform built with React.js, delivering a sophisticated user interface and significantly enhancing the shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "contextapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: shopper,
    source_code_link: "https://github.com/syedalijaseem/shopper",
  },
  {
    name: "Dannosource",
    description:
      "A full-stack application with a React.js (frontend) and Firebase/Firestore (backend). Innovated an annotation tool with React-image-annotate, fast-tracking image labeling and optimizing ML model training by enabling seamless image uploads and annotation workflows for freelancers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dannosource,
    source_code_link: "https://github.com/syedalijaseem/Dannosource",
  },
];

export { services, technologies, experiences, studies, projects };
