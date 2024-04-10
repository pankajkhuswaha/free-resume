import { ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import projectStore from "../../features/projectStore";

const Projects = () => {
  const { projects } = projectStore();
  if (projects && projects?.length === 0) return;

  return (
    <SectionWrapper title={"Projects"}>
      {projects.map((project, index) => {
        const { title, techStack, description, startDate, endDate, link } =
          project;
        return (
          <div className="project-card mb-2" key={index}>
            <div className="flex justify-between items-center">
              <a
                href={link}
                target="blank"
                className="text-sm mb-1 font-semibold flex gap-2 cursor-pointer items-center"
              >
                {title} <ExternalLink size={20} />
              </a>
              <p className="text-xs">
                {startDate} - {endDate}
              </p>
            </div>
            <ul>
              {description.map((desc, i) => (
                <li className="text-[13px]" key={i}>
                  {desc}
                </li>
              ))}
            </ul>
            <p className="mt-1">
              <span className="text-md font-bold">Tech stack :</span>
              <span className="text-black ml-2">{techStack.join(" , ")}</span>
            </p>
            {/* {projects.length !== index + 1 && <Divider />} */}
          </div>
        );
      })}
    </SectionWrapper>
  );
};

export default Projects;
