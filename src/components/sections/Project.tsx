import { ExternalLink } from "lucide-react";

const Project = ({ project }:{project:ProjectProp}) => {
  const { title, techStack, description, startDate, endDate, link } = project;
  return (
    <div className="project-card mb-2">
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
      <div className=" line-clamp-1">
        {description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </div>

      {/* <p>{project.technologies}</p> */}
      <p>
        <span className="text-md font-bold">Tech stack :</span>
        <span className="text-black ml-2">{techStack.join(" , ")}</span>
      </p>
    </div>
  );
};

export default Project;
