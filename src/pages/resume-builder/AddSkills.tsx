import { useForm } from "react-hook-form";
import FormLayout from "../../components/FormLayout";
import Skills from "../../components/sections/Skills";
import skillStore from "../../features/skillsStore";

const AddSkills = () => {
  const { addSkill } = skillStore();
  const { register, handleSubmit, reset } = useForm<SkillProp>();
  return (
    <FormLayout
      title={"Showcase Skills"}
      prev="/app/projects"
      next="/app/educations"
      length={0}
      open
    >
      <div className="w-full max-md:flex-wrap flex gap-4">
        <Skills />
        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit((val) => {
              addSkill(val);
              reset();
            })}
            className=" space-y-4"
          >
            <input
              type="text"
              className="form-input w-full"
              placeholder="Skill Name"
              {...register("name")}
            />

            <select {...register("level")} className="form-input w-full">
              <option selected disabled>
                Select skill level
              </option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <select {...register("type")} className="form-input w-full">
              <option selected disabled>
                Select skill type
              </option>
              <option>Soft Skill</option>
              <option>Technical Skill</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Database</option>
              <option>General</option>
              <option>Programming Language</option>
            </select>

            <button className="btn">Add Skill</button>
          </form>
        </div>
      </div>
    </FormLayout>
  );
};

export default AddSkills;
