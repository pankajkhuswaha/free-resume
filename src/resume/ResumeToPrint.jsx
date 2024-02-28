import { forwardRef } from "react";
import resumeStore from "../features/resumeStore";

const ResumeToPrint = forwardRef(({}, ref) => {
  const { resumeFormat, selectedResume } = resumeStore();

  return (
    <div key={JSON.stringify(selectedResume)} ref={ref} className="p-4">
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
