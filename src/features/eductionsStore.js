import { create } from "zustand";
import resumeDetails from "../constants/resume";

const educationStore = create((set) => ({
  educations: resumeDetails.educations,
  addEducation: (education) =>
    set((state) => ({ educations: [...state.educations, education] })),

  deleteEducation: (title) =>
    set((state) => {
      state.educations = state.educations.filter(
        (education) => education.title !== title
      );
      return { educations: state.educations };
    }),

  editEducation: (education) =>
    set((state) => {
      state.educations = state.educations.map((pro) =>
        pro.title === education.title ? education : pro
      );
      return { educations: state.educations };
    }),
}));
export default educationStore;
