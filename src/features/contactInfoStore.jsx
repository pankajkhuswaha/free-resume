import { Airplay, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { create } from "zustand";

const contactStore = create((set, get) => ({
  details: {
    mobile: "",
    email: "",
    address: "",
    portfolio: "",
    linkedin: "",
  },
  contactDetails: {
    portfolio: {
      label: "Portfolio",
      link: get().details.portfolio,
      icon: <Airplay size={15} />,
    },
    mobile: {
      label: `+91 ${get().details.mobile}`,
      link: `tel:${get().details.mobile}`,
      icon: <Phone size={15} />,
    },
    email: {
      label: get().details.email,
      link: `mailto:${get().details.email}`,
      icon: <Mail size={15} />,
    },
    address: {
      label: get().details.address,
      link: "#",
      icon: <MapPin size={15} />,
    },
    linkedin: {
      label: `linkedin/${get().details.linkedin}`,
      link: `https://www.linkedin.com/in/${get().details.linkedin}/`,
      icon: <Linkedin size={15} />,
    },
  },
  addDetails: (details) => set(() => ({ details })),
}));
export default contactStore;
