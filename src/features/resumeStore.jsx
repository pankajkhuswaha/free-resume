import { create } from "zustand";
import resumeTemplates from "../templates";

const id = localStorage.getItem("selectedResume") || 0;

const intialStates = {
  selectedResume: resumeTemplates[id],
  resumeFormat: resumeTemplates[id].template,
};

const resumeStore = create((set) => ({
  ...intialStates,
  selectResume: (id) => {
    localStorage.setItem("selectedResume", id);
    set({ selectedResume: resumeTemplates[id] });
  },
  changeResumeLayout: (data) => {
    localStorage.setItem("resumeFormat", JSON.stringify(data));
    set({ resumeFormat: data });
  },
}));

export default resumeStore;
