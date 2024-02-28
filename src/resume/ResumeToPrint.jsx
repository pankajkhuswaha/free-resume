import { forwardRef } from "react";
import resumeStore from "../features/resumeStore";

const ResumeToPrint = forwardRef(({  }, ref) => {
  const { resumeFormat } = resumeStore();
  console.log(resumeFormat)

  return (
    <div ref={ref} className="p-4">
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
