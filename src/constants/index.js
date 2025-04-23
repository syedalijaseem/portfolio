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
  nextjs,
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
    url: "https://drive.google.com/uc?export=download&id=1miiPyMIXayqqcHlP404k8XPaM0rnUebC",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "FullStack Developer",
    icon: fullstack,
  },
  {
    title: "Frontend Designer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
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
    name: "Next JS",
    icon: nextjs,
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
    name: "MySQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
      "Improved model deployment efficiency by 5% and cut error resolution time by 10% through data fixes and advanced troubleshooting.",
      "Boosted error detection by 7% using codebase expertise and error reproduction techniques.",
      "Helped Data Scientists resolve data issues 5% faster with targeted recommendations.",
      "Implemented new features, improving tool functionality by 1%.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Gaditek",
    icon: gaditek,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Mar 2024",
    points: [
      "Built an affiliate admin panel with React and Tailwind, improving UI consistency by 5%.",
      "Optimized state with Context API, boosting responsiveness and UX by 4%.",
      "Improved page loads by 2% and cut response times by 4% using Axios for CRUD operations.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Internet of Things (IOT) Lab, SEECS, NUST",
    icon: ncil,
    iconBg: "#383E56",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Built a responsive cattle vitals tracker, improving accessibility by 5%.",
      "Developed a REST API with MongoDB, Node.js, and Express, boosting data efficiency by 3%.",
    ],
  },
];

const studies = [
  {
    title: "Master's of Science in Computer Science",
    college_name: "University of South Dakota",
    icon: USD,
    iconBg: "#383E56",
    date: "Aug 2024 -  May 2026 (Expected)",
    points: [
      "Machine Learning, Pattern Recognition, LLMs, Computer Vision, DSA",
    ],
  },
  {
    title: "Bachelor's of Engineering in Software Engineering",
    company_name: "National University of Sciences and Technology (NUST)",
    icon: NUST,
    iconBg: "#383E56",
    date: "Sep 2019 - June 2024",
    points: ["Software Engineering, DSA, OOP, IOT, SDA"],
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
