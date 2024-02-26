import { StarIcon } from "lucide-react";
import strengthStore from "../features/strengthsStore";
import SectionWrapper from "./Sections";

const Strengths = () => {
  const { strengths } = strengthStore();
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
