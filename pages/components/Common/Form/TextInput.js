import React from "react";

function TextInput({ name, label, className = null, value, onChange }) {
  return (
    <>
      <label htmlFor={name} className="font-bold font-xl py-2 capitalize">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value || ""}
        onChange={onChange}
        className={className ?? "min-w-full py-1 px-2 border bg-slate-100 rounded-md"}
      />
    </>
  );
}

export default TextInput;
