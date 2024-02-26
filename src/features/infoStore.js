import { create } from "zustand";
import resumeDetails from "../constants/resume";

const InfoStore = create((set) => ({
  info: resumeDetails.info,
  summary: resumeDetails.summary,
  addInfo: (info) => set(() => ({ info })),
  addSummary: (summary) => set(() => ({ summary })),
}));
export default InfoStore;
