import { useState } from "react";
import { useForm } from "react-hook-form";
import FormLayout from "../../components/FormLayout";
import InfoStore from "../../features/infoStore";

const AddBasic = () => {
  const { info, summary, addInfo, addSummary } = InfoStore();
  const { handleSubmit, register } = useForm({ defaultValues: info });
  const [open, setopen] = useState(false);
  return (
    <FormLayout
      title={"Basic Info's"}
      prev="/"
      next="/app/contact-details"
      length={0}
      open={open}
      onSubmit={handleSubmit((val) => {
        addInfo(val);
        setopen(false);
      })}
    >
      <form>
        <div className="grid gap-4 mb-4">
          <input
            type="text"
            {...register("name")}
            required
            onFocus={() => setopen(true)}
            className="form-input"
            placeholder="Name"
          />
          <input
            type="text"
            {...register("jobRole")}
            required
            className="form-input"
            onFocus={() => setopen(true)}
            placeholder="Job Title"
          />
        </div>
        <textarea
          defaultValue={summary}
          rows={10}
          onFocus={() => setopen(true)}
          onBlur={(e) => addSummary(e.target.value)}
          className="form-input w-full"
          placeholder="write a detailed summary"
        />
      </form>
    </FormLayout>
  );
};

export default AddBasic;
