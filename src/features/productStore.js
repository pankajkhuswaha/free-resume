import { create } from "zustand";
import resumeDetails from "../constants/resume";

const productStore = create((set) => ({
  projects: resumeDetails.projects,
  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),

  deleteProject: (title) =>
    set((state) => {
      state.projects = state.projects.filter(
        (project) => project.title !== title
      );
      return { projects: state.projects };
    }),

  editProject: (project) =>
    set((state) => {
      state.projects = state.projects.map((pro) =>
        pro.title === project.title ? project : pro
      );
      return { projects: state.projects };
    }),
}));
export default productStore;
