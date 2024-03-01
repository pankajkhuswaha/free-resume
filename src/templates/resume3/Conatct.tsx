import contactStore from "../../features/conatctStore";

const Contact = () => {
  const { contactDetails } = contactStore();
  if (!contactDetails) return;

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {Object.entries(contactDetails).map(([key, value]) => {
        if (value) {
          return (
            <p
              key={key}
              onClick={() => window.open(value.link)}
              className="flex items-center gap-2 "
            >
              <span className="">{value.icon}</span>
              <span className="icon-txt text-xs -mb-1">{value.label}</span>
            </p>
          );
        }
      })}
    </div>
  );
};

export default Contact;
