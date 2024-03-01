import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ActionButtons from "../../components/ActionButtons";
import AddBar from "../../components/AddBar";
import FormLayout from "../../components/FormLayout";
import MonthYearInput from "../../components/MonthYearInput";
import Project from "../../components/sections/Project";
import projectStore from "../../features/projectStore";
import { projectSchema } from "../../schemas/project";

const AddProject = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<ProjectProp>({
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
  const { addProject, projects, deleteProject, editProject } = projectStore();
  const [showForm, setShowForm] = useState(
    projects.length === 0 ? true : false
  );
  const [selectedDescription, setSelectedDescription] = useState("");
  const [skill, setSkill] = useState("");

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
                deleteProject(i);
              }}
            />
          </div>
        );
      })}

      {showForm && (
        <form className="w-full space-y-4 mt-4">
          <div className="md:flex md:gap-4 max-md:space-y-4">
            {textInputs.map((input, i) => {
              const name = input.name as keyof ProjectProp;
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
              className={`form-input w-full ${
                errors["description"]?.message && "error"
              }`}
              placeholder="Enter your project description"
              defaultValue={selectedDescription}
              onChange={(e) =>
                setValue("description", e.target.value.split("&"))
              }
            ></textarea>
            <p className="text-red-500 mt-0">
              {errors["description"]?.message}
            </p>
            <p>
              Note :{" "}
              <span className="text-blue-500">
                {" "}
                Include <b>'&'</b> symbol to create bullet points
              </span>{" "}
            </p>
          </div>
          <div className="w-full flex gap-4">
            <input
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="form-input w-full"
              placeholder="Enter your project tech stack"
            />
            <p
              onClick={() => {
                setValue("techStack", [...watch("techStack"), skill]);
                setSkill("");
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
