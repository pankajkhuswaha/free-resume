import { useState } from "react";
import FormLayout from "../../components/FormLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../schemas/contact";
import contactStore from "../../features/conatctStore";

const AddContactInfo = () => {
  const [open, setopen] = useState(false);
  const { details, addDetails } = contactStore();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: details ? details : undefined,
  });
  const textInputs = [
    {
      name: "mobile",
      placeholder: "Enter your mobile number",
    },
    {
      name: "email",
      placeholder: "Enter your email",
    },
    {
      name: "linkedin",
      placeholder: "Enter your linkedin username",
    },
    {
      name: "portfolio",
      placeholder: "Enter the live link of your portfolio",
    },
    {
      name: "address",
      placeholder: "Enter your address",
    },
  ];
  return (
    <FormLayout
      title={"Contact Informations"}
      prev="/app/basic-info"
      next="/app/experiences"
      length={0}
      open={open}
      onSubmit={handleSubmit((val) => {
        addDetails(val);
        setopen(false);
      })}
    >
      <form className="flex flex-wrap gap-4">
        {textInputs.map((input, i) => {
          const name = input.name as keyof DetailsProps;
          return (
            <div key={i} className="w-full md:w-[48.5%]">
              <input
                type="text"
                placeholder={input.placeholder}
                {...register(name)}
                onFocus={() => setopen(true)}
                className={`form-input w-full ${
                  errors[name]?.message && "error"
                }`}
              />
              <p className="text-red-500">{errors[name]?.message}</p>
            </div>
          );
        })}
      </form>
    </FormLayout>
  );
};

export default AddContactInfo;
