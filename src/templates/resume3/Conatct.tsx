import contactStore from "../../features/conatctStore";

const Contact = () => {
  const { contactDetails } = contactStore();
  if (!contactDetails) return;

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {Object.entries(contactDetails).map(([key, value]) => {
        if (value) {
          return (
            <a key={key} href={value.link} target="_blank" className="flex items-center gap-2 ">
              <span className="">{value.icon}</span>
              <span className="icon-txt text-xs -mb-1">{value.label}</span>
            </a>
          );
        }
      })}
    </div>
  );
};

export default Contact;
