import educationStore from "../../features/eductionsStore";
import SectionWrapper from "./SectionWrapper";

const Educations = () => {
  const { educations } = educationStore();
  return (
    <SectionWrapper title={"Education"}>
      <div className="grid grid-cols-2 gap-4">
        {educations.map((education, index) => {
          const { degree, college,  startDate, endDate } = education;
          return (
            <div className="education" key={index}>
              <h3 className="text-md font-semibold">{degree}</h3>
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
