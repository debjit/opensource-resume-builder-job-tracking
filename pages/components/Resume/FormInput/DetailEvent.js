import React, { useState } from 'react';
import Duration from "./Duration";
import Modal from "../../Common/Modal";

function DetailEvent({name,label,value,handleChange,...props}) {
  

  return (
    <div className="border rounded-md">
    
      <div className="w-full flex flex-row p-2 gap-2">
        <div className="w-1/3 flex flex-row content-center text-center">
          <label htmlFor={name} className="font-bold px-2 content-center my-auto">
            Title:
          </label>
          <input
            type="text"
            id={name}
            name={name}
            onChange={handleChange}
            className="w-full border rounded-md bg-slate-100 mx-2"
          />
        </div>
        <div className="w-1/3  flex flex-row">
          <label htmlFor={props.link} className="font-bold px-2">
            Link:
          </label>
          <input
            type="text"
            id={props.link}
            name={props.link}
            value={props.link}
            onChange={handleChange}
            className="w-full border rounded-md bg-slate-100 mx-2"
          />
        </div>
        <div className="w-1/3 flex flex-row">
            {/* <button onClick={handleOpenModal} className="py-0.5 px-4 text-white test-border bg-blue-600 rounded-full">Add</button> */}
        </div>
      </div>
      <div className="w-full">
        <Duration />
      </div>
      <div className="w-full flex flex-col py-2 px-1 ">
        <label htmlFor={name} className="font-bold px-2">
          Details:
        </label>
        <input
          type="textarea"
          id={name}
          name={name}        
          className="min-w-full h-12 border bg-slate-100 rounded-md"
        />
      </div>
    </div>
  );
}

export default DetailEvent;
