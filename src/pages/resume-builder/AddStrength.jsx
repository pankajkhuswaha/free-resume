import React, { useState } from "react";
import FormLayout from "../../components/FormLayout";
import { useForm } from "react-hook-form";
import AddBar from "../../components/AddBar";
import strengthStore from "../../features/strengthsStore";
import ActionButtons from "../../components/ActionButtons";
import { StarIcon } from "lucide-react";

const textInputs = [
  {
    name: "title",
    placeholder: "Enter the title of strength",
  },
  {
    name: "content",
    placeholder: "Describe your strength",
  },
];

const AddStrength = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { strengths, addStrength, editStrength, deleteStrength } =
    strengthStore();
  const [selectedStrength, setSelectedStrength] = useState();
  const [open, setOpen] = useState(strengths.length === 0 ? true : false);

  return (
    <FormLayout
      title={"Showcase your Strength's"}
      prev="/app/educations"
      next="/app/"
      length={0}
      open={open}
      onSubmit={handleSubmit((data) => {
        selectedStrength ? editStrength(data) : addStrength(data);
        reset();
        setOpen(false);
        setSelectedStrength();
      })}
    >
      {strengths.map((strength, i) => {
        return (
          <div key={i} className="w-full relative mb-2">
            <div key={i} className="md:w-[48%]">
              <h2 className="flex items-center gap-2">
                <StarIcon />
                {strength.title}
              </h2>
              <p>{strength.content}</p>
            </div>
            <ActionButtons
              onEditBtnClick={() => {
                setOpen(true);
                selectedStrength(strength);
                reset(strength);
              }}
              onDelteBtnClick={() => {
                deleteStrength(strength.title);
              }}
            />
          </div>
        );
      })}
      {open && (
        <div className="md:flex md:gap-4 max-md:space-y-4 my-4">
          {textInputs.map((input, i) => (
            <div key={i} className="w-full md:w-1/2">
              <input
                type="text"
                placeholder={input.placeholder}
                {...register(input.name)}
                className={`form-input w-full ${errors[input.name]?.message && "error"}`}
              />
              <p className="text-red-500">{errors[input.name]?.message}</p>
            </div>
          ))}
        </div>
      )}
      {!open && <AddBar title={"Strength"} onClick={() => setOpen(true)} />}
    </FormLayout>
  );
};

export default AddStrength;
