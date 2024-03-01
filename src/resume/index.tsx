import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import resumeStore from "../features/resumeStore";

const Resume = () => {
  const { selectedResume, changeResumeLayout } = resumeStore();
  const [resumeFormat, setResumeFormat] = useState(selectedResume.template);
  useEffect(() => {
    setResumeFormat(selectedResume.template);
  }, [selectedResume]);

  const onDragEnd = (res: unknown) => {
    const result = res as {
      destination: { index: number };
      source: { index: number };
    };
    if (!result.destination) return;

    const items = Array.from(resumeFormat);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setResumeFormat(items);
    changeResumeLayout(items);
  };

  return (
    <div key={JSON.stringify(selectedResume)}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="p-8">
          <Droppable droppableId="resume">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {resumeFormat.map(({ id, component }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="border-2 px-2 rounded cursor-grab border-transparent"
                      >
                        {component}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Resume;
