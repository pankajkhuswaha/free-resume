import { create } from "zustand";
import resumeDetails from "../constants/resume";
import { fetchData, saveData } from "../utils";

const educationStore = create((set) => ({
  educations: fetchData("educations") || resumeDetails.educations,
  addEducation: (education) => {
    set((state) => {
      const newEducations = [...state.educations, education];
      saveData("educations", newEducations);
      return { educations: newEducations };
    });
  },

  deleteEducation: (index) =>
    set((state) => {
      const newEducations = [...state.educations];
      newEducations.splice(index, 1);
      saveData("educations", newEducations);
      return { educations: newEducations };
    }),

  editEducation: (education) =>
    set((state) => {
      const newEducations = state.educations.map((pro) =>
        pro.degree === education.degree ? education : pro
      );
      saveData("educations", newEducations);
      return { educations: newEducations };
    }),
}));
export default educationStore;
