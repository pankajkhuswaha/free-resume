import { ExternalLink } from "lucide-react";
import productStore from "../../features/productStore";
import SectionWrapper from "./SectionWrapper";
import Divider from "./Divider";

const Projects = () => {
  const { projects } = productStore();
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
                className="text-md font-semibold flex gap-2 cursor-pointer items-center"
              >
                {title} <ExternalLink size={20} />
              </a>
              <p className="text-xs">
                {startDate} - {endDate}
              </p>
            </div>
            {description.map((desc, i) => (
              <li className="text-[14px] ml-2" key={i}>
                {desc}
              </li>
            ))}
            <p>{project.technologies}</p>
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
