import { create } from "zustand";
import { fetchData, getFormatedData, saveData } from "../utils";

const contactStore = create((set) => ({
  contactDetails: getFormatedData(),
  details: fetchData("details"),
  addDetails: (details) => {
    const contactDetails = getFormatedData(details);
    saveData("details", details);
    set({ contactDetails, details });
  },
}));

export default contactStore;
