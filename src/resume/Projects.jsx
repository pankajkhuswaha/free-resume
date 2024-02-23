import React from "react";
import SectionWrapper from "./Sections";
import resumeDetails from "./data";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const { projects } = resumeDetails;
  return (
    <SectionWrapper title={"Projects"}>
      {projects.map((project, index) => {
        const { title, techStack, description, startDate, endDate, link } =
          project;
        return (
          <div className="project-card mb-2" key={index}>
            <a
              href={link}
              target="_blank"
              className="h2 flex gap-2 cursor-pointer items-center"
            >
              {title} <ExternalLink size={20} />
            </a>
            <p>
              {startDate} - {endDate}
            </p>
            {description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
            <p>{project.technologies}</p>
            <p>
              <span className="h2">Tech stack :</span>
              <span className="text-black ml-2">{techStack.join(" , ")}</span>
            </p>
          </div>
        );
      })}
    </SectionWrapper>
  );
};

export default Projects;
