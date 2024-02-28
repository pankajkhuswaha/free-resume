import { create } from "zustand";
import resumeDetails from "../constants/resume";
import { fetchData, saveData } from "../utils";

const InfoStore = create((set) => ({
  info: fetchData("info") || resumeDetails.info,
  summary: fetchData("summary"),
  addInfo: (info) => {
    saveData("info", info);
    set({ info });
  },
  addSummary: (summary) => {
    saveData("summary", summary);
    set({ summary });
  },
}));
export default InfoStore;
