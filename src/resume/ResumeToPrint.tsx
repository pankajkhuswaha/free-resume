import { forwardRef, useEffect, useState } from "react";
import resumeStore from "../features/resumeStore";

const ResumeToPrint = forwardRef<HTMLDivElement>((_props, ref) => {
  const { resumeFormat, selectedResume } = resumeStore();
  const [resume, setResume] = useState(selectedResume.template);

  useEffect(() => {
    setResume(selectedResume.template);
  }, [selectedResume]);

  useEffect(() => {
    setResume(resumeFormat);
  }, [resumeFormat]);

  return (
    <div id="selectedResume" ref={ref} className="px-4 py-2">
      {resume.map((item, index) => {
        return (
          <div key={index} className="mb-4 resume-section">
            {item.component}
          </div>
        );
      })}
    </div>
  );
});

export default ResumeToPrint;
