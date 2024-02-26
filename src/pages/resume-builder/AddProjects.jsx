import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ActionButtons from "../../components/ActionButtons";
import AddBar from "../../components/AddBar";
import FormLayout from "../../components/FormLayout";
import MonthYearInput from "../../components/MonthYearInput";
import { projectSchema } from "../../schemas/project";
import Project from "../../components/sections/Project";
import productStore from "../../features/productStore";
import { Trash2 } from "lucide-react";

const AddProject = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: { techStack: [] },
  });
  const textInputs = [
    {
      name: "title",
      placeholder: "Enter the title for your project",
    },
    {
      name: "link",
      placeholder: "Enter live url of the project",
    },
  ];
  const { addProject, projects, deleteProject, editProject } = productStore();
  const [showForm, setShowForm] = useState(
    projects.length === 0 ? true : false
  );
  const [selectedDescription, setSelectedDescription] = useState("");
  const skillInputRef = useRef(null);

  return (
    <FormLayout
      title={"Project summary"}
      prev={"/app/contact-details"}
      next={"/app/skills"}
      length={projects.length}
      open={showForm}
      onSubmit={handleSubmit((data) => {
        selectedDescription !== "" ? editProject(data) : addProject(data);
        reset();
        setShowForm(false);
      })}
    >
      {projects.map((project, i) => {
        const description = project?.description.join(" & ");
        return (
          <div key={i} className="w-full relative">
            <Project project={project} />
            <ActionButtons
              onEditBtnClick={() => {
                setShowForm(true);
                setSelectedDescription(description);
                reset(project);
              }}
              onDelteBtnClick={() => {
                deleteProject(project.company);
              }}
            />
          </div>
        );
      })}

      {showForm && (
        <form className="w-full space-y-4 mt-4">
          <div className="md:flex md:gap-4 max-md:space-y-4">
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
          <div className="md:flex md:gap-4 max-md:space-y-4">
            <MonthYearInput
              className="w-full md:w-1/2"
              label={"Select the starting date of your project"}
              error={errors?.startDate?.message}
              onChange={(date) => setValue("startDate", date)}
            />
            <MonthYearInput
              className="w-full md:w-1/2"
              label={"Select the completion date of your project"}
              error={errors?.endDate?.message}
              onChange={(date) => setValue("endDate", date)}
            />
          </div>
          <div className="w-full">
            <textarea
              rows={5}
              className={`form-input w-full ${errors["description"]?.message && "error"}`}
              placeholder="Enter your project description"
              defaultValue={selectedDescription}
              onChange={(e) =>
                setValue("description", e.target.value.split("&"))
              }
            ></textarea>
            <p className="text-red-500 mt-0">
              {errors["description"]?.message}
            </p>
          </div>
          <div className="w-full flex gap-4">
            <input
              type="text"
              ref={skillInputRef}
              className="form-input w-full"
              placeholder="Enter your project tech stack"
            />
            <p
              onClick={() => {
                setValue("techStack", [
                  ...watch("techStack"),
                  skillInputRef.current.value,
                ]);
                skillInputRef.current.value = "";
              }}
              className="btn whitespace-nowrap"
            >
              Add Tools
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {watch("techStack").map((tech, i) => (
              <div
                key={i}
                className="w-[48%] flex items-center justify-between"
              >
                {tech}
                <Trash2
                  color="red"
                  onClick={() => {
                    const updatedTools = [...watch("techStack")];
                    updatedTools.splice(i, 1);
                    setValue("techStack", updatedTools);
                  }}
                  className=" cursor-pointer"
                />
              </div>
            ))}
            <div className="w-[48%]"></div>
          </div>
        </form>
      )}
      {!showForm && (
        <AddBar title={"Project"} onClick={() => setShowForm(true)} />
      )}
    </FormLayout>
  );
};

export default AddProject;
