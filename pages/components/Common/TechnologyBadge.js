import React from 'react'
import SkillBadge from './SkillBadge'

function TechnologyBadge({technologyUsed}) {
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
              className="w-fit font-bold bg-blue-300 py-1 px-4 rounded-full"
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

export default TechnologyBadge