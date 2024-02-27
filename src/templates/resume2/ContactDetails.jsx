import React from "react";
import contactStore from "../../features/contactInfoStore";

const ContactDetails = () => {
  const { contactDetails } = contactStore();
  return (
    <div className="address-container mt-2 flex gap-2 flex-wrap">
      {Object.entries(contactDetails).map(([key, value]) => {
        return (
          <a
            key={key}
            href={value.link}
            target="_blank"
            // className="mini-card"
            className="flex items-center gap-1"
          >
            <span className="svg-icon text-sm text-gray-600 size-5 flex items-center justify-center ">
              {value.icon}
            </span>
            <span className="icon-txt text-xs">{value.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default ContactDetails;
