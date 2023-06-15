import React from 'react';

const Progress = ({ label, percentage }) => {
  let barColor = 'bg-red-500';
  if (percentage > 50) {
    barColor = 'bg-green-500';
  }

  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="w-1/4">
          <span className="text-gray-600">{label} :</span>
        </div>
        <div className="w-3/4">
          <div className="relative h-4 bg-gray-200 border border-gray-300">
            <div
              className={`absolute top-0 left-0 h-full ${barColor}`}
              style={{ width: `${percentage}%` }}
            />
            <div className="absolute top-0 right-0 h-full flex items-center pr-2">
              <span className="text-gray-600">{percentage}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
