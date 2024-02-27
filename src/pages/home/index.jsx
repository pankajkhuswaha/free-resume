import React from "react";
import resumeTemplates from "../../templates";
import resumeStore from "../../features/resumeStore";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Guide from "./Guide";
import Info from "./Info";

const Homepage = () => {
  const { selectResume } = resumeStore();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50">
      <Hero />
      <Guide />

      <section id="templates" className=" container mx-auto p-3">
        <h1 className="text-sky-600 md:text-5xl w-full text-center">
          Choose your favorite template
        </h1>
        <p className="mb-10 text-xl text-muted mt-2 text-center max-w-xl mx-auto">
          Regardless of your background, there’s a lot's template in the Resume
          Builder that’s perfect for highlighting your experience & skill set.
        </p>
        <div className="flex flex-wrap gap-8 mb-10 md:justify-center">
          {resumeTemplates.map((template, i) => {
            return (
              <div
                key={i}
                className="w-[45%] md:w-80 shadow rounded-2xl hover:shadow-xl p-1 cursor-pointer border-2 overflow-hidden transition-all duration-300"
              >
                <img
                  onClick={() => {
                    selectResume(i);
                    navigate("/app/");
                  }}
                  src={template.image}
                  alt="resume-image h-[200px] md:h-[350px]"
                />
                <p className="text-lg font-semibold text-center mt-4">
                  {template.name}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <Info />
    </div>
  );
};

export default Homepage;
