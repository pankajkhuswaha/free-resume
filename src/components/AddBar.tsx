import { PlusCircleIcon } from "lucide-react";
type Props = {
  onClick: () => void;
  title: string;
};

const AddBar = ({ onClick, title }: Props) => {
  return (
    <div
      onClick={onClick}
      className="border-2 border-primary border-dotted p-3 rounded-xl flex items-center gap-4 justify-center cursor-pointer my-10"
    >
      <PlusCircleIcon color="var(--primary-color)" size={30} />
      <h2>Add {title}</h2>
    </div>
  );
};

export default AddBar;
