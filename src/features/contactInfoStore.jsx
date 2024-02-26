import { Airplay, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { create } from "zustand";
import resumeDetails from "../constants/resume";

const contactStore = create((set) => ({
  contactDetails: resumeDetails.contactDetails,
  addDetails: (details) => {
    const contactDetails = {
      portfolio: {
        label: "Portfolio",
        link: details.portfolio,
        icon: <Airplay size={15} />,
      },
      mobile: {
        label: `+91 ${details.mobile}`,
        link: `tel:${details.mobile}`,
        icon: <Phone size={15} />,
      },
      email: {
        label: details.email,
        link: `mailto:${details.email}`,
        icon: <Mail size={15} />,
      },
      address: {
        label: details.address,
        link: "#",
        icon: <MapPin size={15} />,
      },
      linkedin: {
        label: `linkedin/${details.linkedin}`,
        link: `https://www.linkedin.com/in/${details.linkedin}/`,
        icon: <Linkedin size={15} />,
      },
    };
    set({ contactDetails });
  },
}));
export default contactStore;
