import { create } from "zustand";
import resumeDetails from "../constants/resume";
import { fetchData, saveData } from "../utils";

interface StrengthStore {
  strengths: StrengthProp[];
  addStrength: (strength: StrengthProp) => void;
  deleteStrength: (index: number) => void;
  editStrength: (strength: StrengthProp) => void;
}

const strengthStore = create<StrengthStore>((set) => ({
  strengths: fetchData("strengths") || resumeDetails.strengths,
  addStrength: (strength) => {
    set((state) => {
      const newStrengths = [...state.strengths, strength];
      saveData("strengths", newStrengths);
      return { strengths: newStrengths };
    });
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
