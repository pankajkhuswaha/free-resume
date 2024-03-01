import educationStore from "../../features/eductionsStore";
import SectionWrapper from "../resume1/Sections";

const Educations = () => {
  const { educations } = educationStore();
  return (
    <SectionWrapper title={"Education"}>
      <div className="flex flex-wrap justify-between">
        {educations.map((education, index) => {
          const { degree, college,  startDate, endDate } = education;
          return (
            <div className="education md:w-1/2" key={index}>
              <h3 className="h2">{degree}</h3>
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
