import { create } from "zustand";
import resumeTemplates from "../templates";
import { saveData } from "../utils";

const id = Number(localStorage.getItem("selectedResume") || "0");

type State = {
  selectedResume: ResumeTemplateProps;
  resumeFormat: TemplateProps[];
};

type Action = {
  selectResume: (id: number) => void;
  changeResumeLayout: (data: TemplateProps[]) => void;
};

const intialStates: State = {
  selectedResume: resumeTemplates[id],
  resumeFormat: resumeTemplates[id].template,
};

const resumeStore = create<State & Action>((set) => ({
  ...intialStates,
  selectResume: (id) => {
    saveData("selectedResume", id);
    set({ selectedResume: resumeTemplates[+id] });
  },
  changeResumeLayout: (data) => {
    saveData("resumeFormat", data);
    set({ resumeFormat: data });
  },
}));

export default resumeStore;
