import React, { forwardRef, useState } from "react";
import InfoStore from "../features/infoStore";
import ContactDetails from "./ContactInfo";
import Educations from "./Educations";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Strengths from "./Strengths";
import Summary from "./Summary";

const Resume = forwardRef((props, ref) => {
  const { info } = InfoStore();
  const resumeData = {
    contact: <ContactDetails />,
    experience: <Experience />,
    projects: <Projects />,
    skills: <Skills />,
    strengths: <Strengths />,
    summary: <Summary />,
    educations: <Educations />,
  };
  const [isDraggging, setIsDraggging] = useState(false);
  return (
    <div ref={ref} className="p-4 ">
      <div className="intro">
        <h1>{info.name}</h1>
        <p className=" text-xl text-gray-500">{info.jobRole}</p>
      </div>
      {Object.entries(resumeData).map(([key, value]) => {
        return (
          <div
            draggable
            className={isDraggging && "border cursor-grabbing"}
            key={key}
          >
            {value}
          </div>
        );
      })}
      {/* <ContactDetails />
      <Experience />
      <Projects />
      <Skills />
      <Educations />
      <Strengths />
      <Summary /> */}
    </div>
  );
});

export default Resume;
