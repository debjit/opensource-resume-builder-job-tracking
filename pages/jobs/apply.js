import React from 'react'
import Nav from '../components/Layout/Nav'
import Progress from '../components/Common/Progress'

function Apply() {
  // Todo
  // Check word Matching 
  // Check for skills Matching.
  // Check For % of
  // 
  return (
    <>
      <Nav></Nav>
      <div className='mx-auto max-w-7xl'>
      {/* Left side for Jobs */}
        <div className='bg-slate-50 rounded-md shadow-md border border-slate-300 p-5 mt-5'>
        <h1 className='text-2xl '>Applying with FullStack Resume</h1>
        <h2 className='text-xl'>Jobs name</h2>
        <Progress label="Word Match" percentage={30} />
        <Progress label="Skills Match" percentage={60} />


        </div>
      </div>
    </>
  )
}

export default Apply