import React from 'react';
import SkillBadge from '../Common/SkillBadge';

const SkillsComponent = ({ skills }) => {
  if (!skills) {
    return <div></div>; // or return null if you want to render nothing
  }
  function capitalizeWords(section) {
    return section.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  
  return (
    <div className='my-4'>
    <h2 className='h2-content'>Skills</h2>
      {Object.entries(skills).map(([section, items]) => (
        <div key={section} className='w-full '>
        <h3 className='text-2xl font-bold py-2'>{capitalizeWords(section)}</h3>
          <ul className='flex gap-2 flex-wrap'>
            {items.map((item, index) => (
              <li key={index} className='w-fit font-bold bg-blue-300 py-1 px-4 rounded-full'>
                <p className='w-fit'>                
                <SkillBadge title={item.title} level={item.level} />
                </p>
                    
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsComponent;
