import React from 'react';

const VolunteeringComponent = ({ volunteering }) => {
  if (!volunteering) {
    return <div></div>; // or return null if you want to render nothing
  }
  return (
    <div className='py-4'>
      <h2 className='h2-content'>Volunteering</h2>
      {volunteering.map((volunteer, index) => (
        <div key={index} className='border-gray-200 border-b-2 py-2'>
          <h3 className='h3-content'>{volunteer.name}</h3>
          <p>{volunteer.description}</p>
          <p>Date: {volunteer.date}</p>
          <p>Organization: {volunteer.organisation}</p>
          <p>Position: {volunteer.position}</p>
          <p>
            Link: <a href={volunteer.link}>{volunteer.link}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default VolunteeringComponent;
