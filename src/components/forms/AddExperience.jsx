import { useForm } from "react-hook-form";
import { experienceSchema } from "../../schemas/experience";
import { zodResolver } from "@hookform/resolvers/zod";
import { months } from "../../constants";
const AddExperience = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(experienceSchema) });
  console.log(errors);
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

  return (
    <div className="border rounded p-3">
      <h1 className="text-center">Add Experiences</h1>
      <form
        onSubmit={handleSubmit((val) => {
          console.log(val);
        })}
        className="w-full space-y-4 mt-4"
      >
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
          <div className="w-full md:w-1/2 space-y-2">
            <label>Select Joining date in company</label>
            <div className="flex gap-2">
              <select className="form-input w-1/2">
                <option value="">Select Month</option>
                {months.map((month, i) => (
                  <option key={i}>{month}</option>
                ))}
              </select>
              <select className="form-input w-1/2">
                <option value="">Select Year</option>
                {Array.from({ length: 100 }, (_, index) => (
                  <option key={2010 + index}>{2010 + index}</option>
                ))}
              </select>
            </div>
          </div>
          <input
            type="date"
            {...register("endDate")}
            className="form-input w-full md:w-1/2"
          />
        </div>
        <textarea
          className="form-input w-full"
          rows={5}
          onChange={(e) => setValue("description", e.target.value.split("&"))}
        ></textarea>
        <button className="btn">Add Experience</button>
      </form>
    </div>
  );
};

export default AddExperience;
