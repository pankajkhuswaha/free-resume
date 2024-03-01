import { create } from "zustand";
import resumeDetails from "../constants/resume";
import { fetchData, saveData } from "../utils";

interface InfoStore {
  info: InfoProp;
  summary: string;
  addInfo: (info: InfoProp) => void;
  addSummary: (summary: string) => void;
}

const infoStore = create<InfoStore>((set) => ({
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
export default infoStore;
