import React from 'react';

const AwardsComponent = ({ awards }) => {
  if (!awards) {
    return <div></div>; // or return null if you want to render nothing
  }
  return (
    <div className='py-4'>
      <h2  className='h2-content'>Awards</h2>
      {awards.map((award, index) => (
        <div key={index} className='border-gray-200 border-b-2'>
          <h3 className='h3-content'>{award.name}</h3>
          <p>{award.description}</p>
          <p>Date: {award.date}</p>
          <p>Organization: {award.organisation}</p>
          <p>
            <a href={award.link}>{award.link}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default AwardsComponent;
