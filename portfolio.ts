import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
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
    "I'm a passionate Full Stack web developer. And, i have Certified and experienced in the fields of data science and machine learning, I possess a strong foundation in analyzing data, developing statistical models, and creating algorithms. I eager to contribute to team success through hard work, attention to detail, and excellent organizational skills. ",
  resumeLink: "https://drive.google.com/file/d/1zQHnbzS1MXWOI-SOAk0PoIAFfj4WSadg/view?usp=sharing",
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
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "Skills",
  subTitle: "Active Learner/Reasearcher",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building Responsive Website in Laravel/React.js"),
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
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
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
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Front End Developer",
    company: "PT Digital Forte Indonesia",
    companyLogo: "/img/icons/common/dfi.png",
    date: "Aug 2023 - Jul 2023",
    desc: "I Made low-fidelity and high-fidelity design and transform low-fidelity UI mockups to high-fidelity prototypes into functional code. Then, I collaborate with backend developers to ensure seamless integration between front end and back end. After that, I tested the system using black box testing ",
  },
  {
    role: "Machine Learning Mentor",
    company: "Bangkit Academy",
    companyLogo: "/img/icons/common/bangkit.jpg",
    date: "Feb 2023 - Present",
    desc: "Allocated time of about ~20 hours/week to lead, assist, coach, and advise a cohort of 25 students to ensure they have the knowledge and skills necessary to graduate from the Machine learning path and Assessed mentees` Machine Learning capabilities and identified areas for improvement.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Presensiku",
    desc: "A web platform where users can easily make a presence based on location and camera. And users can make a permission for annual leave.",
    github: "https://github.com/alfiannnas/pti-sikap/tree/backend",
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
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
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
  ],
};
