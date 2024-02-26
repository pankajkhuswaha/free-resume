import React from "react";

const Degree = ({ education }) => {
  const { degree, college, location, startDate, endDate } = education;
  return (
    <div className="education mb-2">
      <h3 className="h2">{degree}</h3>
      <p>{college}</p>
      <p>
        {startDate} - {endDate}
      </p>
    </div>
  );
};

export default Degree;
