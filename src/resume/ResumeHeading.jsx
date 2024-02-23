import React from "react";

const SectionHeading = ({ title }) => {
  return (
    <div className="w-fit mt-4 font-semibold text-xl uppercase border-b-[3px] pb-1">
      {title}
    </div>
  );
};

export default SectionHeading;
