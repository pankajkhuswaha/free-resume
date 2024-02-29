import { StarIcon } from "lucide-react";
import strengthStore from "../../features/strengthsStore";
import SectionWrapper from "./SectionWrapper";

const Strengths = () => {
  const { strengths } = strengthStore();
  if (strengths && strengths?.length === 0) return;
  return (
    <SectionWrapper title={"Strengths"}>
      <div className="flex flex-wrap gap-4 justify-between mt-2">
        {strengths.map((strength, i) => {
          return (
            <div key={i} className="max-sm:w-full w-[48%]">
              <p className="flex text-gray-800 items-center gap-2 text-md font-semibold">
                <StarIcon />
                {strength.title}
              </p>
              <p className="text-xs">{strength.content}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Strengths;
