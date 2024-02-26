import { create } from "zustand";
import resumeDetails from "../constants/resume";

const strengthStore = create((set) => ({
  strengths: resumeDetails.strengths,
  addStrength: (strength) => {
    set((state) => ({ strengths: [...state.strengths, strength] }));
  },

  deleteStrength: (title) =>
    set((state) => {
      state.strengths = state.strengths.filter(
        (strength) => strength.title !== title
      );
      return { strengths: state.strengths };
    }),

  editStrength: (strength) =>
    set((state) => {
      state.strengths = state.strengths.map((pro) =>
        pro.title === strength.title ? strength : pro
      );
      return { strengths: state.strengths };
    }),
}));
export default strengthStore;
