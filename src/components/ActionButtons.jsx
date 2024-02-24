import { PenIcon, Trash2Icon } from "lucide-react";

const ActionButtons = ({ onEditBtnClick, onDelteBtnClick }) => {
  return (
    <div className="absolute top-0 right-2 size-10 flex gap-2 w-fit">
      <div
        onClick={onEditBtnClick}
        className="cursor-pointer text-blue-500 size-10 rounded-full flex items-center justify-center p-1 duration-200 transition-all hover:bg-blue-200"
      >
        <PenIcon />
      </div>
      <div
        onClick={onDelteBtnClick}
        className="cursor-pointer text-red-500 size-10 rounded-full flex items-center justify-center p-1 duration-200 transition-all hover:bg-red-200"
      >
        <Trash2Icon />
      </div>
    </div>
  );
};

export default ActionButtons;
