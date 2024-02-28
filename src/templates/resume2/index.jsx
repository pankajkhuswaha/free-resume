import ContactDetails from "./ContactDetails";
import Experience from "../resume1/Experience";
import Projects from "../resume1/Projects";
import Skills from "../resume1/Skills";
import Strengths from "../resume1/Strengths";
import Summary from "../resume1/Summary";
import Educations from "./Eductions";
import Info from "./Info";

const resume2 = {
  name: "Classic",
  image: "/resumes/2.png",
  template: [
    { id: "info", component: <Info /> },
    { id: "contact", component: <ContactDetails /> },
    { id: "experience", component: <Experience /> },
    { id: "projects", component: <Projects /> },
    { id: "skills", component: <Skills /> },
    { id: "educations", component: <Educations /> },
    { id: "strengths", component: <Strengths /> },
    { id: "summary", component: <Summary /> },
  ],
};

export default resume2;
