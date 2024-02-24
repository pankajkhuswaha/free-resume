import { useForm } from "react-hook-form";
import { experienceSchema } from "../../schemas/experience";
import { zodResolver } from "@hookform/resolvers/zod";
import { months } from "../../constants";
import MonthYearInput from "../MonthYearInput";
import { useRef } from "react";
import { PlusCircleIcon } from "lucide-react";
import resumeDetails from "../../resume/data";
import useResume from "../../features/useResume";
const AddExperience = () => {
  const experiences = resumeDetails.experiences;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(experienceSchema) });
  const textInputs = [
    {
      name: "company",
      placeholder: "Enter your company name",
    },
    {
      name: "jobRole",
      placeholder: "Enter your job role in company",
    },
    {
      name: "location",
      placeholder: "Enter your company location",
    },
  ];
  const formRef = useRef(null);
  const { addExperience } = useResume();

  return (
    <div className="border rounded p-3">
      <h1 className="text-gray-600 mb-4">Experience summary</h1>

      <p>{JSON.stringify(experiences)}</p>

      {experiences.length > 0 && (
        <form ref={formRef} className="w-full space-y-4 mt-4">
          <div className="md:flex md:gap-4 max-md:space-y-4">
            {textInputs.map((input, i) => (
              <div key={i} className="w-full md:w-1/3">
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
          <div className="w-full">
            <textarea
              rows={5}
              className={`form-input w-full ${errors["description"]?.message && "error"}`}
              placeholder="Enter your job description"
              onChange={(e) =>
                setValue("description", e.target.value.split("&"))
              }
            ></textarea>
            <p className="text-red-500 mt-0">
              {errors["description"]?.message}
            </p>
          </div>
        </form>
      )}
      {experiences.length === 0 && (
        <div className="border-2 border-primary border-dotted p-3 rounded-xl flex items-center gap-4 justify-center cursor-pointer my-10">
          <PlusCircleIcon color="var(--primary-color)" size={30} />
          <h2>Add Experience</h2>
        </div>
      )}
      <div className="flex justify-between mt-2">
        <p className="btn lg gray w-1/3 text-center">Back</p>
        <button
          onClick={() => {
            if (experiences.length === 0) {
              alert("Please add experience");
              return;
            } else {
              handleSubmit((val) => {
                addExperience(val);
              })();
            }
          }}
          className="btn lg w-1/3"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddExperience;
