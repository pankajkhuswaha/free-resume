import { ArrowLeft, ArrowRight, Save } from "lucide-react";
import { Link } from "react-router-dom";
type FormLayoutProps = {
  children: React.ReactNode;
  title: string;
  length?: number;
  prev: string;
  next: string;
  onSubmit?: () => void;
  open: boolean;
};
const FormLayout = ({
  children,
  title,
  length,
  prev,
  next,
  onSubmit,
  open,
}: FormLayoutProps) => {
  return (
    <div className="border rounded-xl shadow-lg p-6 my-4">
      <h1 className="text-2xl text-gray-600 mb-4">{title}</h1>

      {children}

      {length !== undefined && (
        <div className="flex justify-between mt-4 items-center">
          <Link
            to={prev}
            className="btn gray text-center flex gap-2 text-gray-700 font-semibold"
          >
            <ArrowLeft />
            Back
          </Link>
          {!open && (
            <Link
              to={next}
              className="btn flex gap-2 text-gray-700 font-semibold"
            >
              Next <ArrowRight />
            </Link>
          )}
          {open && (
            <button
              className="btn flex gap-2 text-gray-700 font-semibold"
              onClick={() => {
                onSubmit && onSubmit();
              }}
            >
              <Save /> Save
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FormLayout;
