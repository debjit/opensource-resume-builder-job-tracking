import React from 'react';
import Duration from '../Common/Duration';
import PrintTechnologyBadge from '../Common/PrintTechnologyBadge';

const ProjectSection = ({ projects }) => {
  if (!projects) {
    return <div></div>; // or return null if you want to render nothing
  }
  const renderProject = (project, index) => {
    const { name, description, projectLink, startMonth, startYear, current, endMonth, endYear, technologyUsed } = project;

    const renderTechnologies = () => {
      if (technologyUsed && technologyUsed.length > 0) {
        return (
          <PrintTechnologyBadge technologyUsed={technologyUsed} />
        );
      }
      return null;
    };

    return (
      <div key={name} className="my-1 border-b-2 p-2">
        <div className="flex justify-between mb-2">
          <h3 className="text-lg font-bold">
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {name}
            </a>
          </h3>
          <div>{Duration(project.duration)}</div>
        </div>
        {renderTechnologies()}
        <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className="my-2">
            <strong>Project Link:</strong><p><a href={projectLink}>{projectLink}</a></p>
          </div>
       
      </div>
    );
  };

  return (
    <div className='my-4'>
      <h2 className='h2-content'>Projects</h2>
      {projects.map((project, index) => renderProject(project, index))}
    </div>
  );
};

export default ProjectSection;
