import React from "react";

function Summery({summery}) {
  if (!summery) {
    return <div></div>; // or return null if you want to render nothing
  }
  return (
    <div className="">
      <div className="text-left">
        <h2 className="text-bold text-2xl border-b-4 border-slate-400 text-left font-bold py-0.5 mb-4">
          Summery
        </h2>
        <div dangerouslySetInnerHTML={{ __html: summery }} />
      </div>
    </div>
  );
}

export default Summery;
