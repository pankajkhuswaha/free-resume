import { create } from "zustand";
import { fetchData, saveData } from "../utils";

type ThemeStore = {
  primaryColor: string;
  setPrimaryColor: (theme: string) => void;
};

const resumeThemeStore = create<ThemeStore>((set) => ({
  primaryColor: fetchData("theme") || "#0081cf",
  setPrimaryColor: (theme) => {
    saveData("theme", theme);
    set({ primaryColor: theme });
  },
}));

export default resumeThemeStore;
