import React from 'react'

function Duration(duration) {
  return (
    <div className="flex flex-row gap-1">
      {" "}
      <div className="w-1/6 ml-1">        
        <input
          type="text"
          id={duration.startMonth}
          name={duration.startMonth}
          value={duration.startMonthValue}
          onChange={duration.handleChange}
          className="w-full p-2 border bg-slate-100 rounded-md"
          placeholder="Start Month"
        />
      </div>
      <div className="w-1/6">
        <input
          type="text"
          id={duration.startMonth}
          name={duration.startMonth}
          value={duration.startMonthValue}
          onChange={duration.handleChange}
          className="w-full p-2 border bg-slate-100 rounded-md"
          placeholder="Start Year"
        />
      </div>
      <div className="w-1/6 text-center my-auto">
        <label htmlFor={duration.startMonth} className="font-bold px-2">
          To
        </label>
      </div>
      <div className="w-1/6">
        <input
          type="text"
          id={duration.startMonth}
          name={duration.startMonth}
          value={duration.startMonthValue}
          onChange={duration.handleChange}
          className="w-full p-2 border bg-slate-100 rounded-md"
          placeholder="End Month"
        />
      </div>
      <div className="w-1/6">
        <input
          type="text"
          id={duration.startMonth}
          name={duration.startMonth}
          value={duration.startMonthValue}
          onChange={duration.handleChange}
          className="w-full p-2 border bg-slate-100 rounded-md"
          placeholder="End Year"
        />
      </div>
      <div className="w-1/6 text-center items-center my-auto">
        {/* //Create a select button name "current" */}
        <label htmlFor={duration.startMonth} className="font-bold px-2">
          Current:
        </label>
        {/* Create a checkbox here */}
        <input type="checkbox" name={duration.current} />
      </div>
    </div>
  );
}

export default Duration