import { PenIcon, Trash2Icon } from "lucide-react";

type Props = {
  onEditBtnClick?: () => void;
  onDelteBtnClick?: () => void;
};

const ActionButtons = ({ onEditBtnClick, onDelteBtnClick }: Props) => {
  return (
    <div className="absolute top-0 right-2 size-10 flex gap-2 w-fit">
      <div
        onClick={onEditBtnClick}
        className="cursor-pointer text-blue-600 size-10 rounded-full flex items-center justify-center p-1 duration-200 transition-all bg-blue-100 hover:bg-blue-300"
      >
        <PenIcon />
      </div>
      <div
        onClick={onDelteBtnClick}
        className="cursor-pointer text-red-600 size-10 rounded-full flex items-center justify-center p-1 duration-200 transition-all bg-red-100 hover:bg-red-300"
      >
        <Trash2Icon />
      </div>
    </div>
  );
};

export default ActionButtons;
