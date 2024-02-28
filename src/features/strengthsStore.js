import { create } from "zustand";
import resumeDetails from "../constants/resume";
import { fetchData, saveData } from "../utils";

const strengthStore = create((set) => ({
  strengths: fetchData("strengths") || resumeDetails.strengths,
  addStrength: (strength) => {
    const newStrengths = [...state.strengths, strength];
    saveData("strengths", newStrengths);
    set({ strengths: newStrengths });
  },

  deleteStrength: (index) =>
    set((state) => {
      const newStrengths = [...state.strengths];
      newStrengths.splice(index, 1);
      saveData("strengths", newStrengths);
      return { strengths: newStrengths };
    }),

  editStrength: (strength) =>
    set((state) => {
      const newStrengths = state.strengths.map((pro) =>
        pro.title === strength.title ? strength : pro
      );
      saveData("strengths", newStrengths);
      return { strengths: newStrengths };
    }),
}));
export default strengthStore;
