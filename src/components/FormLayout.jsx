import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const FormLayout = ({
  children,
  title,
  length,
  prev,
  next,
  onSubmit,
  open,
}) => {
  return (
    <div className="border rounded-xl shadow-lg p-3">
      <h1 className="text-gray-600 mb-4">{title}</h1>

      {children}

      {length !== undefined && (
        <div className="flex justify-between mt-4">
          <Link to={prev} className="btn lg gray w-1/3 text-center">
            Back
          </Link>
          {!open && (
            <Link to={next} className="btn lg w-1/3 text-center">
              Continue
            </Link>
          )}
          {open && (
            <button
              className="btn lg w-1/3"
              onClick={() => {
                onSubmit && onSubmit();
              }}
            >
              Save
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FormLayout;
