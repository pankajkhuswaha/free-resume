import { create } from "zustand";
import resumeDetails from "../resume/data";

const useResume = create((set) => ({
  experiences: resumeDetails.experiences,
  addExperience: (experience) =>
    set((state) => {
      state.experiences.push(experience);
      return { experiences: state.experiences };
    }),
}));

export default useResume;
