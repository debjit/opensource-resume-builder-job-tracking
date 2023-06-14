import React from "react";

const SummeryComponent = ({ summery, handleChange }) => {
  return (
    <div>
      <textarea name="summery" value={summery} onChange={handleChange} className="w-full h-16 bg-slate-100 border rounded-md"></textarea>
    </div>
  );
};

export default SummeryComponent;
