import { Airplay, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const saveData = (token: string, data: unknown) => {
  localStorage.setItem(token, JSON.stringify(data));
};

export const fetchData = (token: string) => {
  return JSON.parse(localStorage.getItem(token) || "null");
};

export const getFormatedData = (detailInfos?: DetailsProps) => {
  const details = detailInfos || fetchData("details");
  if (!details) return null;

  const contactDetails: ContactDetailProp = {
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
  return contactDetails;
};
