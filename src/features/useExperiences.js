import { create } from "zustand";
import resumeDetails from "../constants/resume";

const useExperiences = create((set) => ({
  experiences: resumeDetails.experiences,
  addExperience: (experience) =>
    set((state) => ({ experiences: [...state.experiences, experience] })),

  deleteExperience: (company) =>
    set((state) => {
      state.experiences = state.experiences.filter(
        (experience) => experience.company !== company
      );
      return { experiences: state.experiences };
    }),

  editExperience: (experience) =>
    set((state) => {
      state.experiences = state.experiences.map((exp) =>
        exp.company === experience.company ? experience : exp
      );
      return { experiences: state.experiences };
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
