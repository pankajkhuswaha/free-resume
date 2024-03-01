import Educations from "./Educations";
import Experience from "./Experience";
import Info from "./Info";
import Projects from "./Projects";
import Skills from "./Skills";
import Strengths from "./Strengths";
import Summary from "./Summary";

const resume3 = {
  name: "ATS Friendly",
  image: "/resumes/3.png",
  template: [
    { id: "info", component: <Info /> },
    // { id: "contact", component: <Contact /> },
    { id: "experience", component: <Experience /> },
    { id: "projects", component: <Projects /> },
    { id: "skills", component: <Skills /> },
    { id: "educations", component: <Educations /> },
    { id: "strengths", component: <Strengths /> },
    { id: "summary", component: <Summary /> },
  ],
};

export default resume3;
