import { StarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ActionButtons from "../../components/ActionButtons";
import AddBar from "../../components/AddBar";
import FormLayout from "../../components/FormLayout";
import strengthStore from "../../features/strengthsStore";

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
  } = useForm<StrengthProp>();
  const { strengths, addStrength, editStrength, deleteStrength } =
    strengthStore();
  const [selectedStrength, setSelectedStrength] = useState<
    StrengthProp | undefined
  >();
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
        setSelectedStrength(undefined);
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
                setSelectedStrength(strength);
                reset(strength);
              }}
              onDelteBtnClick={() => {
                deleteStrength(i);
              }}
            />
          </div>
        );
      })}
      {open && (
        <div className="md:flex md:gap-4 max-md:space-y-4 my-4">
          {textInputs.map((input, i) => {
            const name = input.name as keyof StrengthProp;
            return (
              <div key={i} className="w-full md:w-1/2">
                <input
                  type="text"
                  placeholder={input.placeholder}
                  {...register(name)}
                  className={`form-input w-full ${
                    errors[name]?.message && "error"
                  }`}
                />
                <p className="text-red-500">{errors[name]?.message}</p>
              </div>
            );
          })}
        </div>
      )}
      {!open && <AddBar title={"Strength"} onClick={() => setOpen(true)} />}
    </FormLayout>
  );
};

export default AddStrength;
