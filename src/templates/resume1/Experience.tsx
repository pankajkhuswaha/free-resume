import { MapPin } from "lucide-react";
import useExperiences from "../../features/useExperiences";
import SectionWrapper from "./Sections";

const Experience = () => {
  const { experiences } = useExperiences();
  if (experiences && experiences?.length === 0) return;

  return (
    <SectionWrapper title={"Experience"}>
      {experiences.map((experience, i) => {
        const { jobRole, company, location, startDate, endDate, description } =
          experience;
        return (
          <div key={i} className="mt-2">
            <h2 className="uppercase">{jobRole}</h2>
            <div className="flex flex-wrap items-center md:gap-3">
              <p className="text-gray-500 text-md font-[600]">{company}</p>
              <p className="flex items-center gap-2 text-xs">
                <MapPin size={15} /> {location}
              </p>
            </div>
            <p className="text-xs">
              {startDate} - {endDate}
            </p>
            <ul>
              {description.map((desc, i) => (
                <li className="text-[12px]" key={i}>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </SectionWrapper>
  );
};

export default Experience;
