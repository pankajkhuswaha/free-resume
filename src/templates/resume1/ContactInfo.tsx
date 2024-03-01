import contactStore from "../../features/conatctStore";

const ContactDetails = () => {
  const { contactDetails } = contactStore();
  if (!contactDetails) return;
  return (
    <div className="address-container flex gap-2 flex-wrap">
      {Object.entries(contactDetails).map(([key, value]) => {
        if (value) {
          return (
            <p
              key={key}
              onClick={() => window.open(value.link)}
              className="mini-card"
            >
              <span className="svg-icon text-sm text-gray-600 size-8 bg-gray-100 rounded-full flex items-center justify-center ">
                {value.icon}
              </span>
              <span className="icon-txt">{value.label}</span>
            </p>
          );
        }
      })}
    </div>
  );
};

export default ContactDetails;
