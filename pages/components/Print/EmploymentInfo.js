import React from "react";
import Duration from "../Common/Duration";

const EmploymentInfo = ({ employments }) => {
  if (!employments) {
    return <div></div>; // or return null if you want to render nothing
  }
  return (
    <div className="pt-4">
      <h2 className="text-bold text-xl border-b-4 border-slate-400 text-left font-bold py-0.5">
        Employment
      </h2>
      {employments.map((employment) => (
        <div
          key={employment.company}
          className="flex w-full py-1 justify-between font-semibold"
        >
          <div className="text-left">
            <h3 className="text-xl">{employment.company}</h3>
            {employment.role}
          </div>
          {Duration(employment.duration)}
        </div>
      ))}
    </div>
  );
};

export default EmploymentInfo;
