import skillStore from "../features/skillsStore";
import SectionWrapper from "./Sections";
import resumeDetails from "./data";

const Skills = () => {
  const { skills } = skillStore();
  return (
    <SectionWrapper title={"Skills"}>
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill, i) => (
          <p key={i} className="mini-card">
            {skill.name}
          </p>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
