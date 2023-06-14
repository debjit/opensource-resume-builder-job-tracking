import React from "react";

const BasicInfoComponent = ({ title, profession, experience, location, github, linkedin, handleChange }) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="w-full">
          <label  className="font-bold">Name:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            className="w-full bg-slate-100 border rounded-md"
          />
        </div>
        <div className="w-full">
          <label className="font-bold">Profession:</label>
          <input
            type="text"
            name="profession"
            value={profession}
            onChange={handleChange}
            className="w-full bg-slate-100 border rounded-md"
          />
        </div>
        <div className="w-full">
          <label className="font-bold">Experience:</label>
          <input
            type="text"
            name="experience"
            value={experience}
            onChange={handleChange}
            className="w-full bg-slate-100 border rounded-md"
          />
        </div>
        <div className="w-full">
          <label className="font-bold">Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
            className="w-full bg-slate-100 border rounded-md"
          />
        </div>
        <div className=" w-full">
          <label className="font-bold">Github:</label>
          <input
            type="text"
            name="github"
            value={github}
            onChange={handleChange}
            className="w-full bg-slate-100 border rounded-md"
          />
        </div>
        <div className="w-full">
          <label className="font-bold">LinkedIn:</label>
          <input
            type="text"
            name="linkedin"
            value={linkedin}
            onChange={handleChange}
            className="w-full bg-slate-100 border rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoComponent;
