import React from "react";
import resumeTemplates from "../templates";
import resumeStore from "../features/resumeStore";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const { selectResume } = resumeStore();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Select your resume template</h1>
      <div className="flex gap-6">
        {resumeTemplates.map((template, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                selectResume(i);
                navigate("/app/");
              }}
              className="border rounded hover:shadow-xl  cursor-pointer w-[45%] md:w-60 overflow-hidden transition-all duration-300 hover:scale-110"
            >
              <img src={template.image} alt="resume-image" className="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
