import SectionWrapper from "./Sections";
import educationStore from "../../features/eductionsStore";
const Educations = () => {
  const { educations } = educationStore();
  return (
    <SectionWrapper title={"Education"}>
      {educations.map((education, index) => {
        const { degree, college,  startDate, endDate } = education;
        return (
          <div className="education mb-2" key={index}>
            <h3 className="h2">{degree}</h3>
            <p>{college}</p>
            <p>
              {startDate} - {endDate}
            </p>
          </div>
        );
      })}
    </SectionWrapper>
  );
};

export default Educations;
