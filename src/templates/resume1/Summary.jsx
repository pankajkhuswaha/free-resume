import InfoStore from "../../features/infoStore";
import SectionWrapper from "./Sections";

const Summary = () => {
  const { summary } = InfoStore();
  if (!summary) return;
  return (
    <SectionWrapper title={"Professional Summary"}>
      <p>{summary}</p>
    </SectionWrapper>
  );
};

export default Summary;
