import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Alfian Kafilah B",
  title: "Hi all, I Am Alfian",
  description:
    " As a skilled Software Engineer specializing in web development with Angular and Laravel, I have a solid foundation in building dynamic and efficient applications. Also, with certifications and experience in Data Science and Machine Learning.  I eager to contribute to team success through hard work, attention to detail, and excellent organizational skills. Skilled in working under pressure and adapting to new situations and challenges to best enchance the organizational brand",
  resumeLink: "https://drive.google.com/file/d/1O8MooCPBCxj4dqtLOQSld6blmm9cqS32/view?usp=sharing",
};

export const openSource = {
  githubUserName: "alfiannnas",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:alfian.baits@gmail.com",
  linkedin: "https://www.linkedin.com/in/alfiankafilah/",
  github: "https://github.com/alfiannnas",
  instagram: "https://www.instagram.com/alfiankafilah",
};

export const skillsSection: SkillsSectionType = {
  title: "Skills",
  subTitle: "Active Learner/Reasearcher",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building Responsive Website in Laravel, Angular, and React"),
        emoji("⚡ Building AI/Machine Learning Model"),
        emoji("⚡Designing Intuitive User Interfaces and Engaging User Experiences for Mobile/Web Platform"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "HTML",
          iconifyTag: "devicon:html5",
        },
        {
          skillName: "CSS",
          iconifyTag: "devicon:css3",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Laravel",
          iconifyTag: "logos:laravel",
        },
        {
          skillName: "TensorFlow",
          iconifyTag: "logos:tensorflow",
        },
        {
          skillName: "Figma",
          iconifyTag: "logos:figma",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design",
    progressPercentage: "85",
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "AI/Machine Learning",
    progressPercentage: "95",
  },
  {
    Stack: "Programming",
    progressPercentage: "85",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Institut Teknologi Sumatera",
    subHeader: "Bachelor of Informatics Engineering",
    duration: "Agustus 2020 - Juli 2024",
    desc: "IPK: 3.71 / 4.00",
    grade: "Grade A",
    descBullets: [],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Machine Learning Mentor",
    company: "Bangkit Academy",
    companyLogo: "/img/icons/common/bangkit.jpg",
    date: "Feb 2024 - Present",
    desc: "Allocated time of about ~20 hours/week to lead, assist, coach, and advise a cohort of 25 students to ensure they have the knowledge and skills necessary to graduate from the Machine learning path and Assessed mentees` Machine Learning capabilities and identified areas for improvement.",
  },
  {
    role: "Front End Developer",
    company: "PT Digital Forte Indonesia",
    companyLogo: "/img/icons/common/dfi.png",
    date: "Aug 2023 - Jul 2023",
    desc: "I Made low-fidelity and high-fidelity design and transform low-fidelity UI mockups to high-fidelity prototypes into functional code. Then, I collaborate with backend developers to ensure seamless integration between front end and back end. After that, I tested the system using black box testing ",
  },

  {
    role: "Laboratory Assistant of Database",
    company: "Institut Teknologi Sumatera",
    companyLogo: "/img/icons/common/itera.png",
    date: "Mar 2023 - May 2023",
    desc: "Guided and taught 52 students about basic into advance database learning materials, Create modules and powerpoints with relevant explanations, Objectively assess the practicum modules, and Facilitated interactive learning sessions to enhance student engagement and understanding.",
  },
  {
    role: "Machine Learning Cohort",
    company: "Bangkit Academy",
    companyLogo: "/img/icons/common/bangkit.jpg",
    date: "Feb 2023 - Jul 2023",
    desc: "Preprocess data and train the model. Then, evaluate model performance and make recommendations for improvements. Become a Project Manager and collaborate with cross-functional teams to identify business opportunities, and Become a Top 60 team capstone project out of 678 teams",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Sikap!",
    desc: "A web platform where users can easily make a presence based on location and camera. And users can make a permission for annual leave.",
    github: "https://github.com/alfiannnas/pti-sikap/tree/backend",
    link: "https://ressa-abadi.my.id/",
  },
  {
    name: "SkinCer-In",
    desc: "SkinCer-In is an application that can help people detect 8 different tumors that may form in their skin. This application also educate its user on how to prevent and treat the cancer",
    github: "https://github.com/alfiannnas/skincer-in",
  },
  {
    name: "Signature Forgery Detection",
    desc: "Machine Learning models use CNN algorithms to detect whether a signature is real or fake, which is useful for increasing document security.",
    github: "https://github.com/alfiannnas/Signature-Forgery-Detection",
  },
  {
    name: "Osis Website",
    desc: "A web platform that contain many information about student council. And there is also a complaint form which is useful for finding out constructive suggestions.",
    github: "https://github.com/alfiannnas/web-osis",
    link: "https://osimmasmuallimin.my.id/",
  },
  {
    name: "Pension Website",
    desc: "Develop website at BKPSDM Padang City that effectively manages and displays detailed employee data, including their retirement dates.",
    github: "https://github.com/alfiannnas/web-pensiun-laravel",
  },
];

export const seoData: SEODataType = {
  title: "Alfian Kafilah Ba'its",
  description: greetings.description,
  author: "Alfian",
  image: "https://avatars.githubusercontent.com/alfiannnas",
  url: "https://alfian-portfolio.vercel.app/",
  keywords: [
    "Alfian",
    "Alfian Kafilah",
    "Alfian Kafilah Ba'its",
    "Alfian Kafilah Baits",
    "Portfolio Alfian",
    "@alfiankafilah",
    "alfiankafilahbaits",
    "alfian kafilah",
    "alfian kafilah itera",
    "alfian kafilah informatika itera",
  ],
};
