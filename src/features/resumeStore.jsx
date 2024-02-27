import { create } from "zustand";
import resumeTemplates from "../templates";

const id = localStorage.getItem("selectedResume") || 0;
const intialStates = {
  selectedResume: resumeTemplates[id],
};

const resumeStore = create((set) => ({
  ...intialStates,
  selectResume: (id) => {
    localStorage.setItem("selectedResume", id);
    set({ selectedResume: resumeTemplates[id] });
  },
}));

export default resumeStore;
