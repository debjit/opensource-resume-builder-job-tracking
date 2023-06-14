import React from 'react'
import SkillBadge from './SkillBadge'

function PrintTechnologyBadge({technologyUsed}) {
  if (!technologyUsed) {
    return <div></div>; // or return null if you want to render nothing
  }
  return (
    <>
      <strong>Technologies used:</strong>
      <div className="mt-1 pb-2 flex flex-wrap gap-2">
        {technologyUsed.map((item, index) => {
          return (
            <div
              className="w-fit font-bold bg-blue-300 py-0.5 px-2 rounded-full"
              key={index}
            >
              <SkillBadge title={item.title} level={item.level} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PrintTechnologyBadge