import { MapPin } from "lucide-react";
import React from "react";
import SectionWrapper from "./Sections";
import resumeDetails from "./data";

const Experience = () => {
  const { experiences } = resumeDetails;
  return (
    <SectionWrapper title={"Experience"}>
      {experiences.map((experience, i) => {
        const { jobRole, company, location, startDate, endDate, description } =
          experience;
        return (
          <div key={i} className="mt-2">
            <h2 className="uppercase">{jobRole}</h2>
            <div className="flex flex-wrap items-center md:gap-3">
              <h3 className="text-gray-500 text-md font-[600]">{company}</h3>
              <p className="flex items-center gap-2 text-sm">
                <MapPin size={15} /> {location}
              </p>
            </div>
            <p>
              {startDate} - {endDate}
            </p>
            <ul>
              {description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </SectionWrapper>
  );
};

export default Experience;
