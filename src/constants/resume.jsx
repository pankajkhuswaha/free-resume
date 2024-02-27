import { Airplay, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const resumeDetails = {
  info: {
    name: "Pankaj Kumar",
    jobRole: "Full stack developer",
  },
  contactDetails: {
    portfolio: {
      label: "Portfolio",
      link: "https://pankajkushwaha.vercel.app/",
      icon: <Airplay size={15} />,
    },
    mobile: {
      label: `+91 999999999`,
      link: "tel:999999999",
      icon: <Phone size={15} />,
    },
    email: {
      label: "email@gmail.com",
      link: "mailto:email@gmail.com",
      icon: <Mail size={15} />,
    },
    address: {
      label: "Faridabad , Haryana , 121004",
      link: "#",
      icon: <MapPin size={15} />,
    },
    linkedin: {
      label: "linkedin/pankajkhushwaha",
      link: "https://www.linkedin.com/in/pankajkhushwaha/",
      icon: <Linkedin size={15} />,
    },
    // github: {
    //   label: "github/pankajkhuswaha",
    //   link: "https://github.com/pankajkhuswaha",
    //   icon: <Github size={15} />,
    // },
  },
  summary:
    "Passionate front-end developer who loves to create responsive, user-friendly websites. Skilled in HTML, CSS, and JavaScript as well as front-end frameworks like React js and Next js. Capable of building user interfaces with intuitive functioning and incorporating advanced functions. A fantastic problem-solver with a quick learning curve and a strong work ethic. I have a bachelor's in computer application, and I have experience working on a number of projects, so I am confident in my ability to contribute to your team and help your company grow.",
  experiences: [
    {
      company: "Deepnap softech",
      jobRole: "Full stack developer",
      location: "NIT 5, Faridabad, Haryana",
      startDate: "April 2023",
      endDate: "Present",
      description: [
        "Developed and maintained web applications using the MERN stack , demonstrating proficiency in both front-end and backend technologies.",
        "Proficient in both front-end and back-end technologies, resulting in a 20% improvement in overall web application performance.",
        "Utilized Node.js and Express.js to build robust and scalable server side APIs, enabling efficient data exchange between the front-end and back-end systems.",
        "Completed five full-stack projects by creating RESTful APIs that combined Firebase and MongoDB.",
      ],
    },
  ],
  projects: [
    {
      title: "JHEV Motors",
      link: "https://jhevmotors.com/",
      startDate: "08/2023",
      endDate: "09/2023",
      techStack: ["React", "MongoDB", "Express Js", "Node Js"],
      description: [
        "Designed and developed a responsive and user-friendly front-end UI to ensure a seamless experience across various devices.",
        "Comprehensive admin panel allowing administrators to manage various aspects of the website.",
        "To learn more about user behavior and website performance, integrate analytics tools.",
      ],
    },
    {
      title: "Gr Financial (A Client Management Software)",
      link: "https://grfinancial.in/",
      startDate: "09/2023",
      endDate: "10/2023",
      techStack: ["React", "MongoDB", "Express Js", "Node Js"],
      description: [
        "Implemented core features for client management, including client profiles, contact details, and other relevant information.",
        "Developed functionality for dynamic data handling, allowing for easy updates, additions, and modifications to client records.",
        "Implemented search and filtering features to facilitate quick and efficient retrieval of client information.",
        "Integrated task management and calendar features to help organize and schedule client-related activities.",
      ],
    },
  ],
  skills: [
    { name: "Next Js", level: "Intermediate" },
    { name: "React Js", level: "Advanced" },
    { name: "Express Js", level: "Intermediate" },
    { name: "Node Js", level: "Advanced" },
    { name: "React Js", level: "Advanced" },
    { name: "Angular Js (Framework)", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Tailwind css", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Redux js (State management)", level: "Advanced" },
    { name: "Javascript", level: "Advanced" },
    { name: "HTML", level: "Advanced" },
    { name: "css", level: "Intermediate" },
    { name: "Jquery", level: "Intermediate" },
    { name: "Rest API's", level: "Intermediate" },
  ],
  educations: [
    {
      degree: "Master's of Computer Application",
      college: "Indira Gandhi National Open University",
      location: "NIT 5, Faridabad, Haryana",
      startDate: "2017",
      endDate: "2021",
    },
    {
      degree: "Bachelor's of Computer Application",
      college: "Maharishi Dayanand Universities",
      location: "NIT 5, Faridabad, Haryana",
      startDate: "2017",
      endDate: "2021",
    },
  ],
  strengths: [
    {
      title: "Full Stack Development",
      content:
        "Proficient in both front-end and back-end technologies,specializing in MERN stack development.",
    },
    {
      title: "Responsive UI Design",
      content:
        "Skilled in designing and implementing responsive user interfaces using React.js for seamless user experiences.",
    },
    {
      title: "Collaboration",
      content:
        "Experience in collaborating with cross-functional teams to gather requirements and translate them into technical specifications..",
    },
    {
      title: "Database Management",
      content:
        "Extensive knowledge in database management using MongoDB for efficient data organization and retrieval.",
    },
  ],
};

export default resumeDetails;
