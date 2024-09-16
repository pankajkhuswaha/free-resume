import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ActionButtons from "../../components/ActionButtons";
import AddBar from "../../components/AddBar";
import FormLayout from "../../components/FormLayout";
import MonthYearInput from "../../components/MonthYearInput";
import Experience from "../../components/sections/Experience";
import useExperiences from "../../features/useExperiences";
import { experienceSchema } from "../../schemas/experience";

const AddExperience = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    setError,
    formState: { errors },
  } = useForm<ExperienceProp>({ resolver: zodResolver(experienceSchema) });
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
  const { addExperience, experiences, deleteExperience, editExperience } =
    useExperiences();
  const [showForm, setShowForm] = useState(
    experiences.length === 0 ? true : false
  );
  const [selectedDescription, setSelectedDescription] = useState("");
  console.log(errors);

  return (
    <FormLayout
      title={"Experience summary"}
      prev={"/app/contact-details"}
      next={"/app/projects"}
      length={experiences.length}
      open={showForm}
      onSubmit={handleSubmit((data) => {
        const startDate = new Date(data.startDate);
        const endDate =
          data.endDate == "Present" ? new Date() : new Date(data.endDate);
        if (startDate > endDate) {
          setError("startDate", {
            message: "Joining date should not greater than leaving date",
          });
          return;
        }
        selectedDescription !== "" ? editExperience(data) : addExperience(data);
        reset();
        setShowForm(false);
      })}
    >
      {experiences.map((experience, i) => {
        const description = experience?.description.join(" & ");
        return (
          <div key={i} className="w-full relative">
            <Experience experience={experience} />
            <ActionButtons
              onEditBtnClick={() => {
                setShowForm(true);
                setSelectedDescription(description);
                reset(experience);
              }}
              onDelteBtnClick={() => {
                deleteExperience(i);
              }}
            />
          </div>
        );
      })}

      {showForm && (
        <form className="w-full space-y-4 mt-4">
          <div className="md:flex md:gap-4 max-md:space-y-4">
            {textInputs.map((input, i) => {
              const name = input.name as keyof ExperienceProp;
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
              defaultValue={getValues("startDate")}
              label={"Select Joining date in company"}
              error={errors?.startDate?.message}
              onChange={(date) => setValue("startDate", date)}
            />
            <MonthYearInput
              showPresent
              className="w-full md:w-1/2"
              label={"Select Leaving date in company"}
              defaultValue={getValues("endDate")}
              error={errors?.endDate?.message}
              onChange={(date) => setValue("endDate", date)}
            />
          </div>
          <div className="w-full">
            <textarea
              rows={5}
              className={`form-input w-full ${
                errors["description"] && "error"
              }`}
              placeholder="Enter your job description"
              defaultValue={selectedDescription}
              onChange={(e) =>
                setValue("description", e.target.value.split("&"))
              }
            ></textarea>
            <p className="text-red-500 mt-0">
              {errors["description"] && errors["description"][0]?.message}
            </p>
            <p>
              Note :{" "}
              <span className="text-blue-500">
                {" "}
                Include <b>'&'</b> symbol to create bullet points
              </span>{" "}
            </p>
          </div>
        </form>
      )}
      {!showForm && (
        <AddBar title={"Experience"} onClick={() => setShowForm(true)} />
      )}
    </FormLayout>
  );
};

export default AddExperience;
