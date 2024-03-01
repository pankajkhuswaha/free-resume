import { useForm } from "react-hook-form";
import FormLayout from "../../components/FormLayout";
import educationStore from "../../features/eductionsStore";
import { useState } from "react";
import AddBar from "../../components/AddBar";
import MonthYearInput from "../../components/MonthYearInput";
import Degree from "../../components/sections/Degree";
import ActionButtons from "../../components/ActionButtons";

const textInputs = [
  {
    name: "degree",
    placeholder: "Enter the course name",
  },
  {
    name: "college",
    placeholder: "Enter the college name",
  },
  {
    name: "location",
    placeholder: "Enter your college location",
  },
];

const AddEducation = () => {
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    reset,
  } = useForm<EducationProp>();
  const { educations, addEducation, editEducation, deleteEducation } =
    educationStore();
  const [open, setOpen] = useState(educations.length === 0 ? true : false);
  const [selecteddegree, setSelecteddegree] = useState("");

  return (
    <FormLayout
      title={"Education Summary"}
      prev="/app/skills"
      next="/app/strengths"
      length={educations.length}
      open={open}
      onSubmit={handleSubmit((data) => {
        selecteddegree !== "" ? editEducation(data) : addEducation(data);
        reset();
        setOpen(false);
      })}
    >
      {educations.map((education, i) => {
        return (
          <div key={i} className="w-full relative">
            <Degree education={education} />
            <ActionButtons
              onEditBtnClick={() => {
                setOpen(true);
                setSelecteddegree(education.degree);
                reset(education);
              }}
              onDelteBtnClick={() => {
                deleteEducation(i);
              }}
            />
          </div>
        );
      })}
      {open && (
        <form className="w-full space-y-4 mt-4">
          <div className="md:flex md:gap-4 max-md:space-y-4">
            {textInputs.map((input, i) => {
              const name = input.name as keyof EducationProp;
              return (
                <div key={i} className="w-full md:w-1/3">
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
          <div className="md:flex md:gap-4 max-md:space-y-4">
            <MonthYearInput
              className="w-full md:w-1/2"
              label={"Select Joining date in company"}
              error={errors?.startDate?.message}
              onChange={(date) => setValue("startDate", date)}
            />
            <MonthYearInput
              className="w-full md:w-1/2"
              label={"Select Leaving date in company"}
              error={errors?.endDate?.message}
              onChange={(date) => setValue("endDate", date)}
            />
          </div>
        </form>
      )}
      {!open && <AddBar title={"Educations"} onClick={() => setOpen(true)} />}
    </FormLayout>
  );
};

export default AddEducation;
