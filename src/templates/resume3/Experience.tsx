import { MapPin } from "lucide-react";
import useExperiences from "../../features/useExperiences";
import SectionWrapper from "./SectionWrapper";
import Divider from "./Divider";

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
            <div className="flex flex-wrap items-center justify-between md:gap-3 mb-2">
              <div className="">
                <p className="text-lg font-semibold">{jobRole}</p>
                <p className="text-gray-500 text-md font-[600]">{company}</p>
              </div>

              <div className="text-end">
                <p className="text-xs">
                  {startDate} - {endDate}
                </p>
                <p className="flex items-center gap-2 text-xs">
                  <MapPin size={15} /> {location}
                </p>
              </div>
            </div>

            <ul>
              {description.map((desc, i) => (
                <li className="text-[13px] ml-2" key={i}>
                  {desc}
                </li>
              ))}
            </ul>
            {experiences.length !== i + 1 && <Divider />}
          </div>
        );
      })}
    </SectionWrapper>
  );
};

export default Experience;
