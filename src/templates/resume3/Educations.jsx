import educationStore from "../../features/eductionsStore";
import SectionWrapper from "./SectionWrapper";

const Educations = () => {
  const { educations } = educationStore();
  return (
    <SectionWrapper title={"Education"}>
      <div className="flex flex-wrap justify-between">
        {educations.map((education, index) => {
          const { degree, college, location, startDate, endDate } = education;
          return (
            <div className="education md:w-1/2" key={index}>
              <h3 className="text-lg font-semibold">{degree}</h3>
              <p>{college}</p>
              <p>
                {startDate} - {endDate}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Educations;
