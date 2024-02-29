import  { useEffect, useState } from "react";
import { months } from "../constants";

const MonthYearInput = ({ className, label, onChange, error }) => {
  const date = new Date();
  const presentMonth = date.getMonth();
  const presentYear = date.getFullYear();
  const [month, setMonth] = useState(months[presentMonth]);
  const [year, setYear] = useState(presentYear);
  const [value, setValue] = useState(`${month}-${year}`);

  useEffect(() => {
    onChange && onChange(value);
  }, [value]);

  useEffect(() => {
    setValue(`${month} ${year}`);
    onChange && onChange(value);
  }, [month, year]);

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-gray-500">{label}</label>
      <div className="flex gap-2">
        <select
          value={month}
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
          onChange={(e) => setYear(e.target.value)}
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
