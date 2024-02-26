import React, { forwardRef, useEffect, useState } from "react";
import InfoStore from "../features/infoStore";
import ContactDetails from "./ContactInfo";
import Educations from "./Educations";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Strengths from "./Strengths";
import Summary from "./Summary";

const Resume = (props, ref) => {
  const { info } = InfoStore();
  const resumeData = [
    <ContactDetails />,
    <Experience />,
    <Projects />,
    <Skills />,
    <Educations />,
    <Strengths />,
    <Summary />,
  ];
  const [resumeFormat, setResumeFormat] = useState(resumeData);

  const [isDraggging, setIsDraggging] = useState(false);
  const [source, setSource] = useState();
  const [target, setTarget] = useState();
  useEffect(() => {
    const temp = resumeData[source];
    resumeData[source] = resumeData[target];
    resumeData[target] = temp;
    console.log(source, target);

    setResumeFormat(resumeData);
  }, [source]);

  return (
    <div className="p-4 ">
      <div className="intro">
        <h1>{info.name}</h1>
        <p className=" text-xl text-gray-500">{info.jobRole}</p>
      </div>
      {resumeFormat.map((ele, i) => {
        return (
          <div
            draggable
            onDragStart={() => setIsDraggging(true)}
            onDragOver={() => setTarget(i)}
            onDragEnd={() => setSource(i)}
            className={`border-2 px-3 rounded ${
              isDraggging && i === source
                ? "cursor-grabbing border-green-500"
                : "cursor-grab border-transparent"
            }`}
            key={i}
          >
            {ele}
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
};

export default Resume;
