import SectionWrapper from "./Sections";
import resumeDetails from "./data";

const Summary = () => {
  const { summary } = resumeDetails;
  return (
    <SectionWrapper title={"Professional Summary"}>
      <p>{summary}</p>
    </SectionWrapper>
  );
};

export default Summary;
