import SectionWrapper from "./Sections";
import resumeDetails from "./data";

const Skills = () => {
  const { skills } = resumeDetails;
  return (
    <SectionWrapper title={"Skills"}>
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill, i) => (
          <div key={i} className="mini-card">
            {skill}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
