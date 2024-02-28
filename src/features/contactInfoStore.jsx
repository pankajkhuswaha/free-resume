import { Airplay, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { create } from "zustand";
import resumeDetails from "../constants/resume";
import { fetchData, saveData } from "../utils";

const contactStore = create((set) => ({
  contactDetails: resumeDetails.contactDetails,
  details: fetchData("details"),
  addDetails: (details) => {
    const contactDetails = {
      portfolio: details.portfolio && {
        label: "Portfolio",
        link: details.portfolio,
        icon: <Airplay size={15} />,
      },
      mobile: details.mobile && {
        label: `+91 ${details.mobile}`,
        link: `tel:${details.mobile}`,
        icon: <Phone size={15} />,
      },
      email: details.email && {
        label: details.email,
        link: `mailto:${details.email}`,
        icon: <Mail size={15} />,
      },
      address: details.address && {
        label: details.address,
        link: "#",
        icon: <MapPin size={15} />,
      },
      linkedin: details.linkedin && {
        label: `linkedin/${details.linkedin}`,
        link: `https://www.linkedin.com/in/${details.linkedin}/`,
        icon: <Linkedin size={15} />,
      },
    };
    saveData("details", details);
    set({ contactDetails, details });
  },
}));

export default contactStore;
