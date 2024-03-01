const SectionWrapper = ({ children, title }:SectionProps) => {
  return (
    <section id={title} className="w-full mt-2">
      <div className="w-full font-semibold text-xl mb-2 uppercase border-b-[2px] border-gray-600 text-sky-600">
        {title}
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;
