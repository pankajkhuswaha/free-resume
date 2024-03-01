import ContactDetails from "./ContactInfo";
import Educations from "./Educations";
import Experience from "./Experience";
import Info from "./Info";
import Projects from "./Projects";
import Skills from "./Skills";
import Strengths from "./Strengths";
import Summary from "./Summary";

const resume1 = {
  name: "Basic",
  image: "/resumes/1.png",
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

export default resume1;
