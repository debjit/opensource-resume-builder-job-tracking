import React from 'react'

function SkillBadge({title,level}) {
  if (!title || !level) {
    return <div></div>; // or return null if you want to render nothing
  }
  return (
    <>{title} <span className="text-xs font-semibold text-gray-700">{level}</span></>
  )
}

export default SkillBadge