import React from "react";
import resumeDetails from "./data";
import ContactDetails from "./ContactInfo";
import Summary from "./Summary";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Educations from "./Educations";
import Strengths from "./Strengths";

const Resume = () => {
  const { info } = resumeDetails;
  return (
    <>
      <button className="border-2 px-2 py-1 border-red-500">
        Download pdf
      </button>
      <div className="p-4">
        <div className="intro">
          <h1>{info.name}</h1>
          <p className=" text-xl text-gray-500">{info.jobRole}</p>
        </div>
        <ContactDetails />
        <Experience />
        <Projects />
        <Skills />
        <Educations />
        <Strengths />
        <Summary />
      </div>
    </>
  );
};

export default Resume;
