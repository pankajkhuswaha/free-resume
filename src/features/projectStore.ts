import { create } from "zustand";
import resumeDetails from "../constants/resume";
import { fetchData, saveData } from "../utils";

interface ProjectStore {
  projects: ProjectProp[];
  addProject: (project: ProjectProp) => void;
  deleteProject: (index: number) => void;
  editProject: (project: ProjectProp) => void;
}

const projectStore = create<ProjectStore>((set) => ({
  projects: fetchData("projects") || resumeDetails.projects,
  addProject: (project) => {
    set((state) => {
      const newProjects = [...state.projects, project];
      saveData("projects", newProjects);
      return { projects: newProjects };
    });
  },

  deleteProject: (index) =>
    set((state) => {
      const newProjects = [...state.projects];
      newProjects.splice(index, 1);
      saveData("projects", newProjects);
      return { projects: newProjects };
    }),

  editProject: (project) =>
    set((state) => {
      const newProjects = state.projects.map((pro) =>
        pro.title === project.title ? project : pro
      );
      saveData("projects", newProjects);
      return { projects: newProjects };
    }),
}));
export default projectStore;
