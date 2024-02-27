import ContactDetails from "./ContactDetails";
import Educations from "../resume1/Educations";
import Experience from "../resume1/Experience";
import Info from "../resume1/Info";
import Projects from "../resume1/Projects";
import Skills from "../resume1/Skills";
import Strengths from "../resume1/Strengths";
import Summary from "../resume1/Summary";

const resume2 = {
  id: 2,
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
