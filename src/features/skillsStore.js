import { create } from "zustand";
import resumeDetails from "../constants/resume";

const skillStore = create((set) => ({
  skills: resumeDetails.skills,
  addSkill: (skill) => {
    set((state) => ({ skills: [...state.skills, skill] }));
  },

  deleteSkill: (name) =>
    set((state) => {
      state.skills = state.skills.filter((skill) => skill.name !== name);
      return { skills: state.skills };
    }),

  editSkill: (skill) =>
    set((state) => {
      state.skills = state.skills.map((pro) =>
        pro.name === skill.name ? skill : pro
      );
      return { skills: state.skills };
    }),
}));
export default skillStore;
