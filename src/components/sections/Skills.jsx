import { useEffect, useState } from "react";
import skillStore from "../../features/skillsStore";
import { Trash2 } from "lucide-react";

const Skills = () => {
  const skillsStore = skillStore();
  const { skills, deleteSkill } = skillsStore;
  const [source, setSource] = useState();
  const [target, setTarget] = useState();
  const handleDrop = () => {
    if (!source && !target) return;
    skillStore.setState((state) => {
      const newSkills = [...state.skills];
      const temp = skills[source];
      newSkills[source] = skills[target];
      newSkills[target] = temp;
      return { skills: newSkills };
    });
  };
  useEffect(() => {
    handleDrop();
  }, [source]);
  return (
    <div className="w-full md:w-1/2 p-3 space-y-2">
      {skills.map((skill, index) => {
        return (
          <div
            draggable
            onDragEnd={() => setSource(index)}
            onDragOver={() => setTarget(index)}
            key={index}
            className="flex gap-2 border p-2 rounded cursor-grab justify-between"
          >
            <div className="flex items-center gap-2">
              <p className="font-semibold border px-2 py-1 rounded bg-gray-100">
                {skill.name}
              </p>
              <p>{skill.level}</p>
            </div>
            <Trash2
              color="red"
              className=" cursor-pointer"
              onClick={() => deleteSkill(skill.name)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
