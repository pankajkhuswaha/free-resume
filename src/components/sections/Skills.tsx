import { Trash2 } from "lucide-react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import skillStore from "../../features/skillsStore";

const Skills = () => {
  const { skills, deleteSkill, reArrangeSkills } = skillStore();

  const onDragEnd = (res: unknown) => {
    const result = res as {
      destination: { index: number };
      source: { index: number };
    };
    if (!result.destination) return;
    const source = result.source.index;
    const target = result.destination.index;
    if (source === null || target === null || source === target) return;
    const newSkills = [...skills];
    const [removed] = newSkills.splice(source, 1);
    newSkills.splice(target, 0, removed);
    reArrangeSkills(newSkills);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="skills">
        {(provided) => (
          <div
            className="w-full md:w-1/2 space-y-2"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {skills.map((skill, index) => (
              <Draggable
                key={skill.name}
                draggableId={skill.name}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div
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
                        onClick={() => deleteSkill(index)}
                      />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Skills;
