import { create } from "zustand";
import resumeDetails from "../constants/resume";
import { fetchData, saveData } from "../utils";

const useExperiences = create((set) => ({
  experiences: fetchData("experiences") || resumeDetails.experiences,
  addExperience: (experience) => {
     set((state) => {
       const newExperiences = [...state.experiences, experience];
       saveData("experiences", newExperiences);
       return { experiences: newExperiences };
     });
  },

  deleteExperience: (index) =>
    set((state) => {
      const newExperiences = [...state.experiences];
      newExperiences.splice(index, 1);
      saveData("experiences", newExperiences);
      return { experiences: newExperiences };
    }),

  editExperience: (experience) =>
    set((state) => {
      const newExperiences = state.experiences.map((pro) =>
        pro.title === experience.title ? experience : pro
      );
      saveData("experiences", newExperiences);
      return { experiences: newExperiences };
    }),
}));

export default useExperiences;

// deleteExperience: (company) =>
//     set((state) => {
//       state.experiences = state.experiences.filter(
//         (experience) => experience.company !== company
//       );
//       return { experiences: state.experiences };
//     }),
