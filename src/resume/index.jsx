import React from "react";
import resumeDetails from "./data";
import ContactDetails from "./ContactInfo";
import SectionHeading from "./ResumeHeading";

const Resume = () => {
  const { info } = resumeDetails;
  return (
    <div className="border rounded p-6">
      <div className="intro">
        <h1>{info.name}</h1>
        <p className=" text-xl text-gray-500">{info.jobRole}</p>
      </div>
      <ContactDetails />
      <SectionHeading/>
    </div>
  );
};

export default Resume;
