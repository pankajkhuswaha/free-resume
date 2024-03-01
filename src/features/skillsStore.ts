import { create } from "zustand";
import resumeDetails from "../constants/resume";
import { fetchData, saveData } from "../utils";

interface SkillStore {
  skills: SkillProp[];
  reArrangeSkills: (skills: SkillProp[]) => void;
  addSkill: (skill: SkillProp) => void;
  deleteSkill: (index: number) => void;
  editSkill: (skill: SkillProp) => void;
}

const skillStore = create<SkillStore>((set) => ({
  skills: fetchData("skills") || resumeDetails.skills,

  reArrangeSkills: (skills: SkillProp[]) => {
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
