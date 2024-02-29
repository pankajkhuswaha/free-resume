import skillStore from "../../features/skillsStore";
import SectionWrapper from "./SectionWrapper";

const Skills = () => {
  const { skills } = skillStore();

  // Group skills by type
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.type]) {
      acc[skill.type] = [];
    }
    acc[skill.type].push(skill);
    return acc;
  }, {});

  return (
    <SectionWrapper title={"Skills"}>
      {Object.entries(groupedSkills).map(([type, typeSkills]) => (
        <div key={type} className="flex mt-2">
          <h3 className="text-md font-semibold mr-2 whitespace-nowrap">
            {type} :{" "}
          </h3>
          <div className="flex gap-2 text-gray-600 font-semibold flex-wrap">
            {typeSkills.map((skill, i) => skill.name).join(", ")}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Skills;
