import contactStore from "../../features/contactInfoStore";

const ContactDetails = () => {
  const { contactDetails } = contactStore();
  return (
    <div className="address-container mt-2 flex gap-2 flex-wrap">
      {Object.entries(contactDetails).map(([key, value]) => {
        return (
          <p
            key={key}
            onClick={() => window.open(value.link)}
            className="mini-card"
            // className="flex gap-4 items-center cursor-pointer"
          >
            <span className="svg-icon text-sm text-gray-600 size-8 bg-gray-100 rounded-full flex items-center justify-center ">
              {value.icon}
            </span>
            <span className="icon-txt">{value.label}</span>
          </p>
        );
      })}
    </div>
  );
};

export default ContactDetails;
