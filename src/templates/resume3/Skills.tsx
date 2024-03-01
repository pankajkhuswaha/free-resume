import skillStore from "../../features/skillsStore";
import SectionWrapper from "./SectionWrapper";

const Skills = () => {
  const { skills } = skillStore();

  const groupedSkills = skills.reduce(
    (acc: { [key: string]: SkillProp[] }, skill) => {
      if (!acc[skill.type]) {
        acc[skill.type] = [];
      }
      acc[skill.type].push(skill);
      return acc;
    },
    {}
  );

  return (
    <SectionWrapper title={"Skills"}>
      <div className="mt-2">
        {Object.entries(groupedSkills).map(([type, typeSkills]) => (
          <div key={type} className="flex mt-[2px]">
            <h3 className="text-sm font-semibold text-gray-600 mr-2 whitespace-nowrap">
              {type} :{" "}
            </h3>
            <div className="flex gap-2 text-sm font-semibold flex-wrap text-gray-800">
              {typeSkills.map((skill) => skill.name).join(", ")}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
