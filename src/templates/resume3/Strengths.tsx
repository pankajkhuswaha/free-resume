import strengthStore from "../../features/strengthsStore";
import SectionWrapper from "./SectionWrapper";

const Strengths = () => {
  const { strengths } = strengthStore();
  if (strengths && strengths?.length === 0) return;
  return (
    <SectionWrapper title={"Strengths"}>
      <div className="grid grid-cols-2 gap-4">
        {strengths.map((strength, i) => {
          return (
            <div key={i} className="">
              <p className="flex text-gray-800 items-center gap-2 text-md font-semibold">
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
