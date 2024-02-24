import React from "react";
import resumeDetails from "./data";

const ContactDetails = () => {
  const { contactDetails } = resumeDetails;
  return (
    <div className="address-container mt-2 flex gap-2 flex-wrap">
      {Object.entries(contactDetails).map(([key, value]) => {
        return (
          <div key={key} onClick={()=>window.open(value.link)} className="mini-card">
            <span className="svg-icon text-sm text-gray-600 size-8 bg-gray-100 rounded-full flex items-center justify-center ">
              {value.icon}
            </span>
            <span className="icon-txt">{value.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
