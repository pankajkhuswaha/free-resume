import { useEffect, useState } from "react";
import { months } from "../constants";

type MonthInputProp = {
  className?: string;
  label: string;
  defaultValue?: string;
  showPresent?: boolean;
  onChange?: (value: string) => void;
  error?: string;
};

const MonthYearInput = (prop: MonthInputProp) => {
  const { className, label, onChange, error, defaultValue, showPresent } = prop;
  const date = new Date();
  const presentMonth =
    months.indexOf(defaultValue?.split(" ")[0] || "January") || date.getMonth();
  const presentYear = date.getFullYear();
  const [month, setMonth] = useState(months[presentMonth]);
  const [year, setYear] = useState(defaultValue?.split(" ")[1] || presentYear);
  const [value, setValue] = useState(`${month}-${year}`);
  const [isPresent, setIsPresent] = useState(
    defaultValue == "Present" ? true : false
  );

  useEffect(() => {
    onChange && onChange(value);
  }, [onChange, value]);

  useEffect(() => {
    if (isPresent) {
      setValue("Present");
    } else {
      setValue(`${month} ${year}`);
    }
    onChange && onChange(value);
  }, [month, onChange, value, year, isPresent]);

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center">
        <label className="text-gray-500">{label}</label>{" "}
        {showPresent && (
          <div className="persent flex gap-4 items-center">
            <div className="checkbox">
              <input
                checked={isPresent}
                onChange={() => setIsPresent(!isPresent)}
                id="cbx"
                type="checkbox"
              />
              <label className="toggle" htmlFor="cbx">
                <span></span>
              </label>
            </div>
            Present
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <select
          value={month}
          disabled={isPresent}
          onChange={(e) => setMonth(e.target.value)}
          className={`form-input w-1/2 ${error && "error"}`}
        >
          <option disabled>Select Month</option>
          {months.map((month, i) => (
            <option key={i}>{month}</option>
          ))}
        </select>
        <select
          className={`form-input w-1/2 ${error && "error"}`}
          value={year}
          disabled={isPresent}
          onChange={(e) => setYear(+e.target.value)}
        >
          <option disabled>Select Year</option>
          {Array.from({ length: 20 }, (_, index) => {
            if (2010 + index <= presentYear) {
              return <option key={2010 + index}>{2010 + index}</option>;
            }
          })}
        </select>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default MonthYearInput;
