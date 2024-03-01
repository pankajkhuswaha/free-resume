import { create } from "zustand";
import { fetchData, getFormatedData, saveData } from "../utils";

type ConatctStore = {
  contactDetails: ContactDetailProp | null;
  details: DetailsProps | null;
  addDetails: (details: DetailsProps) => void;
};

const contactStore = create<ConatctStore>((set) => ({
  contactDetails: getFormatedData(),
  details: fetchData("details"),
  addDetails: (details) => {
    const contactDetails = getFormatedData(details);
    saveData("details", details);
    set({ contactDetails, details });
  },
}));

export default contactStore;
