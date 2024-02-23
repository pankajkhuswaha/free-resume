import { StarIcon } from "lucide-react";
import SectionWrapper from "./Sections";
import resumeDetails from "./data";

const Strengths = () => {
  const { strengths } = resumeDetails;
  return (
    <SectionWrapper title={"Strength"}>
      <div className="flex flex-wrap gap-4 justify-between">
        {strengths.map((strength, i) => {
          return (
            <div key={i} className="w-[48%]">
              <h2 className="flex items-center gap-2">
                <StarIcon />
                {strength.title}
              </h2>
              <p>{strength.content}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Strengths;
