import { StarIcon } from "lucide-react";
import strengthStore from "../../features/strengthsStore";
import SectionWrapper from "./SectionWrapper";

const Strengths = () => {
  const { strengths } = strengthStore();
  if (strengths && strengths?.length === 0) return;
  return (
    <SectionWrapper title={"Strengths"}>
      <div className="flex flex-wrap gap-4 justify-between">
        {strengths.map((strength, i) => {
          return (
            <div key={i} className="w-full md:w-[48%]">
              <p className="flex items-center gap-2 text-lg font-semibold">
                <StarIcon />
                {strength.title}
              </p>
              <p>{strength.content}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Strengths;
