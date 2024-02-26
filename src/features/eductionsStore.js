import { create } from "zustand";
import resumeDetails from "../constants/resume";

const educationStore = create((set) => ({
  educations: resumeDetails.educations,
  addEducation: (education) =>
    set((state) => ({ educations: [...state.educations, education] })),

  deleteEducation: (degree) =>
    set((state) => {
      state.educations = state.educations.filter(
        (education) => education.degree !== degree
      );
      return { educations: state.educations };
    }),

  editEducation: (education) =>
    set((state) => {
      state.educations = state.educations.map((pro) =>
        pro.degree === education.degree ? education : pro
      );
      return { educations: state.educations };
    }),
}));
export default educationStore;
