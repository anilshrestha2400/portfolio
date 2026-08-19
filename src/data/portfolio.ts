import { Project, Experience, Skill, ContactInfo, PersonalInfo } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Anil Shrestha",
  title: "Full Stack Developer",
  bio: "Full Stack Developer with expertise in React.js, Next.js, Node.js, and TypeScript. I specialize in building responsive web applications and user-friendly interfaces.",
  avatar: "/profile.png",
  resume: "/resume.pdf",
};

export const contactInfo: ContactInfo = {
  email: "anilcrest2400@gmail.com",
  phone: "9845508943",
  location: "Naya-Thimi, Bhaktapur",
  linkedin: "https://www.linkedin.com/in/anil-shrestha-9077471a7/",
  github: "https://github.com/anilshrestha2400",
  website: "https://anilshrestha.dev",
};

export const skills: Skill[] = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Sass",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  },
  {
    name: "Redux",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  },

  // Database
  {
    name: "MySQL",
    category: "database",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "tools",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    category: "tools",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
  },
  {
    name: "Postman",
    category: "tools",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "Figma",
    category: "tools",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
  },

  // Other
  {
    name: "REST APIs",
    category: "other",
    icon: "https://www.vectorlogo.zone/logos/json/json-icon.svg",
  },
  {
    name: "Responsive Design",
    category: "other",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "Agile",
    category: "other",
    icon: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",
  },
];

export const experiences: Experience[] = [
  {
    id: "a5sync",
    company: "A5 SYNC",
    position: "Frontend Developer",
    duration: "March 2025 – Present",
    location: "United States · Remote",
    description: [
      "Working as a Frontend Developer specializing in React, Next.js, and TypeScript.",
      "Developing modern, responsive user interfaces for web applications.",
      "Collaborating with international teams in a remote work environment.",
      "Contributing to e-commerce and front-end design projects.",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "JavaScript", "CSS3"],
  },
  {
    id: "reflex-it",
    company: "Reflex IT Solution Pvt. Ltd.",
    position: "Frontend Developer",
    duration: "January 2023 – March 2025",
    location: "Kathmandu, Bagmati, Nepal · On-site",
    description: [
      "Engaged in full stack development tasks encompassing various technologies.",
      "Contributed to requirement engineering, ensuring alignment with project goals and client needs & attention to details.",
      "Collaborated with team members to meet project requirements and deadlines.",
      "Contributed to development and deployment activities.",
      "Specialized in e-commerce and front-end design projects.",
    ],
    technologies: ["React.js", "Node.js", "TypeScript", "MySQL", "Git"],
  },
  {
    id: "bisava-tech",
    company: "Bisava Technology",
    position: "Frontend Developer",
    duration: "Nov 2021 – December 2022",
    location: "Gairiddhara, Ktm",
    description: [
      "Gained practical experience in Javascript development within a professional environment.",
      "Participated in various aspects of software development lifecycle under mentorship.",
      "Worked in an Agile, collaborative environment to receive design requirements, peer program, and test applications",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery", "Bootstrap"],
  },
];

export const projects: Project[] = [
  {
    id: "esquire",
    title: "Esquire",
    description: "Modern e-commerce platform with advanced features",
    longDescription:
      "A comprehensive e-commerce solution built with modern web technologies, featuring user authentication, product management, shopping cart, and payment integration.",
    technologies: ["Next.js", "Pay Gateway"],
    image: "/images/projects/esquire.png",
    liveUrl: "https://www.esquire.co.za/",
    featured: true,
  },
  {
    id: "gahana-stores",
    title: "Gahana Stores",
    description: "Jewelry store management system",
    longDescription:
      "A complete jewelry store management system with inventory tracking, customer management, and sales reporting.",
    technologies: ["Next.js", "Node.js"],
    image: "/images/projects/gahana.png",
    liveUrl: "https://gahanastores.com/",
    featured: true,
  },
  // {
  //   id: "yamburi-it",
  //   title: "Yamburi IT",
  //   description: "IT consultancy website with modern design",
  //   longDescription:
  //     "Professional IT consultancy website showcasing services, portfolio, and client testimonials with responsive design.",
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  //   image: "/images/projects/yamburi-it.jpg",
  //   liveUrl: "https://yamburi-it.com",
  //   githubUrl: "https://github.com/anilshrestha2400/yamburi-it",
  //   featured: false,
  // },
  {
    id: "courier-direct",
    title: "Courier Direct",
    description: "Package tracking and delivery management system",
    longDescription:
      "Comprehensive courier service platform with real-time tracking, delivery management, and customer notifications.",
    technologies: ["Next.js", "Node.js"],
    image: "/images/projects/courier.png",
    liveUrl: "https://courierdirect.com/",
    featured: true,
  },
  // {
  //   id: "logic-infotech",
  //   title: "Logic Infotech",
  //   description: "Corporate website for IT services company",
  //   longDescription:
  //     "Professional corporate website showcasing IT services, team, and company portfolio with modern design.",
  //   technologies: ["WordPress", "PHP", "MySQL", "CSS3"],
  //   image: "/images/projects/logic-infotech.jpg",
  //   liveUrl: "https://logic-infotech.com",
  //   featured: false,
  // },
  {
    id: "suit-studio-nepal",
    title: "Suit Studio Nepal",
    description: "Fashion e-commerce platform",
    longDescription:
      "E-commerce platform for custom suits and fashion items with size customization and order management.",
    technologies: ["Next.js", "Node.js"],
    image: "/images/projects/suit.png",
    liveUrl: "https://suitstudionepal.com/",
    featured: true,
  },
];
