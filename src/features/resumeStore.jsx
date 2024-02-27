import { create } from "zustand";
import resumeTemplates from "../templates";

const intialStates = {
  selectedResume: resumeTemplates[0],
};

const resumeStore = create((set) => ({
  ...intialStates,
  selectResume: (id) => {
    set({ selectedResume: resumeTemplates[id] });
  },
}));

export default resumeStore;
