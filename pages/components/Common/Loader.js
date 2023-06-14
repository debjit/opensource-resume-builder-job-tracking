import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce-1"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce-2"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce-3"></div>
      </div>
    </div>
  );
};

export default Loader;
