import React from "react";

const SectionWrapper = ({ children, title }) => {
  return (
    <section id={title} className="w-full mt-4">
      <div className="w-fit font-semibold text-xl mb-2 uppercase border-b-[3px] pb-1">
        {title}
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;
