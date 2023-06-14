import React from 'react';
import Duration from '../Common/Duration';

const ActivitySection = ({ activities }) => {
  if (!activities) {
    return <div></div>; // or return null if you want to render nothing
  }
  return (
    <div>
      <h2 className='h2-content'>Activities</h2>
      {activities.map((activity, index) => (
        <div key={index} className='border-gray-200 border-b-2 my-2'>
        <div className="flex justify-between mb-2">
            <h3 className="text-lg font-bold">{activity.title}</h3>
            <div>{Duration(activity.duration)}</div>
          </div>
          <p className='py-4'>{activity.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivitySection;
