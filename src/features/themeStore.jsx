import { create } from "zustand";
import { fetchData, saveData } from "../utils";

const resumeThemeStore = create((set) => ({
  primaryColor: fetchData("theme") || "#0081cf",
  setPrimaryColor: (theme) => {
    saveData("theme", theme);
    set({ primaryColor:theme });
  },
}));
export default resumeThemeStore;
