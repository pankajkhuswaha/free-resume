import SectionWrapper from "./Sections";
import resumeDetails from "./data";

const Educations = () => {
  const { educations } = resumeDetails;
  return (
    <SectionWrapper title={"Education"}>
      {educations.map((education, index) => {
        const { degree, college, location, startDate, endDate } = education;
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
