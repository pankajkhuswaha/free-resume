import { useState } from "react";
import { guideSteps } from "../../constants/guideSteps";
import { MoveRight } from "lucide-react";

const StepCard = ({ step, index }) => {
  const { icon, title, buttonText, description, gradientClass, color } = step;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="sm:w-[calc(50%-20px)] lg:w-72 relative mt-20">
      <h1
        className={`text-8xl transition-all duration-300 absolute left-[30%] z-[1] ${isHovered ? `-top-24 ${color}` : "text-gray-300 -top-12"}`}
      >
        0{index + 1}
      </h1>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="border relative transition-all duration-200 p-8 rounded-3xl shadow-xl hover:shadow cursor-pointer text-start space-y-3 bg-white z-10"
      >
        <div className={`size-16 ${color} flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold font-inter text-[#404245]">
          {title}
        </h3>
        <p className=" font-inter">{description}</p>
        <button
          className={`${gradientClass} px-6 py-2 rounded-full text-start flex mt-4`}
        >
          <p className="text-white w-[80%]">{buttonText}</p>
          <div className="ml-2 size-10 bg-white rounded-full flex items-center justify-center">
            <MoveRight className={color} />
          </div>
        </button>
      </div>
    </div>
  );
};
const Guide = () => {
  return (
    <section className="text-center container mx-auto p-3 mb-10">
      <p className="text-gray-500 bg-sky-100 w-fit mx-auto px-3 py-1 rounded mb-2">
        LEVEL UP YOUR JOB HUNT
      </p>
      <h1 className="text-sky-600">
        Build an resume that gets more job offers
      </h1>
      <p className="max-w-prose max-sm:text-justify text-gray-500 md:text-lg mx-auto my-4">
        Landing more interviews and earning better job offers is only a few
        steps away, and it all starts with your resume. Here's how to make your
        application stand out today:
      </p>

      <div className="flex flex-wrap gap-[20px] lg:gap-8 lg:justify-center">
        {guideSteps.map((step, i) => (
          <StepCard key={i} index={i} step={step} />
        ))}
      </div>
    </section>
  );
};

export default Guide;
