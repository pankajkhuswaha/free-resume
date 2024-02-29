const SectionWrapper = ({ children, title }) => {
  return (
    <section id={title} className="w-full mt-2">
      <div className="w-full font-semibold text-xl mb-1 uppercase border-b-[2px] border-gray-600 text-sky-600 pb-[2px]">
        {title}
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;
