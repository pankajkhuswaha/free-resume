import React from "react";
import resumeDetails from "./data";

const ContactDetails = () => {
  const { contactDetails } = resumeDetails;
  return (
    <div className="address-container mt-2 flex gap-2 flex-wrap">
      {Object.entries(contactDetails).map(([key, value]) => {
        return (
          <div
            key={key}
            class="border cursor-pointer rounded bg-gray-200 flex items-center justify-center w-fit p-2 gap-2"
          >
            <span class="svg-icon size-8 ">
              <svg viewBox="0 0 18 18" fill="gray">
                <circle
                  cx="9"
                  cy="9"
                  r="9"
                  fill="white"
                  fill-opacity="0.7"
                ></circle>
                <path d="M5.37293 6.26408L6.4069 5.23107C6.47983 5.15781 6.56652 5.09968 6.66199 5.06003C6.75746 5.02038 6.85982 4.99998 6.9632 5C7.17387 5 7.37193 5.08252 7.52047 5.23107L8.63307 6.34369C8.70633 6.41663 8.76446 6.50332 8.80411 6.59879C8.84376 6.69426 8.86416 6.79662 8.86414 6.9C8.86414 7.11068 8.78162 7.30874 8.63307 7.45728L7.8195 8.27087C8.00994 8.69064 8.27471 9.07251 8.60104 9.39806C8.92655 9.72518 9.30838 9.99092 9.7282 10.1825L10.5418 9.36893C10.6147 9.29567 10.7014 9.23755 10.7969 9.19789C10.8923 9.15824 10.9947 9.13784 11.0981 9.13786C11.3088 9.13786 11.5068 9.22039 11.6554 9.36893L12.7689 10.4806C12.8423 10.5537 12.9005 10.6405 12.9401 10.7362C12.9798 10.8318 13.0001 10.9343 13 11.0379C13 11.2485 12.9175 11.4466 12.7689 11.5951L11.7369 12.6272C11.5 12.865 11.1728 13 10.8369 13C10.7661 13 10.6981 12.9942 10.6311 12.9825C9.32238 12.767 8.02435 12.0709 6.97679 11.0243C5.9302 9.97864 5.23507 8.68155 5.01662 7.36893C4.95061 6.96796 5.08361 6.55534 5.37293 6.26408Z"></path>
              </svg>
            </span>
            <span class="icon-txt">{value.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
