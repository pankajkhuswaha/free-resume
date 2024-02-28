import { create } from "zustand";
import resumeDetails from "../constants/resume";
import { fetchData, saveData } from "../utils";

const skillStore = create((set) => ({
  skills: fetchData("skills") || resumeDetails.skills,

  reArrangeSkills: (skills) => {
    set({ skills });
    saveData("skills", skills);
  },

  addSkill: (skill) => {
    set((state) => {
      const newSkills = [...state.skills, skill];
      saveData("skills", newSkills);
      return { skills: newSkills };
    });
  },

  deleteSkill: (index) =>
    set((state) => {
      const newSkills = [...state.skills];
      newSkills.splice(index, 1);
      saveData("skills", newSkills);
      return { skills: newSkills };
    }),

  editSkill: (skill) =>
    set((state) => {
      const newSkills = state.skills.map((pro) =>
        pro.name === skill.name ? skill : pro
      );
      saveData("skills", newSkills);
      return { skills: newSkills };
    }),
}));
export default skillStore;
