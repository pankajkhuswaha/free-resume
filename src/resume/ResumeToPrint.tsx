import { forwardRef } from "react";
import resumeStore from "../features/resumeStore";

const ResumeToPrint = forwardRef<HTMLDivElement>((_props, ref) => {
  const { resumeFormat, selectedResume } = resumeStore();

  return (
    <div key={JSON.stringify(selectedResume)} ref={ref} className="px-8 py-2">
      {resumeFormat.map((item, index) => {
        return (
          <div key={index} className="mb-4">
            {item.component}
          </div>
        );
      })}
    </div>
  );
});

export default ResumeToPrint;
