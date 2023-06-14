import React from 'react';
import Duration from '../Common/Duration';

const EducationSection = ({ educationCertificates }) => {
  if (!educationCertificates) {
    return <div></div>; // or return null if you want to render nothing
  }
  return (
    <div className='my-4 py-4'>
      <h2 className='h2-content'>Education</h2>
      {educationCertificates.map((certificate) => (
        <div className="mb-4" key={certificate.institution}>
          <div className="flex justify-between mb-2">
            <h3 className="text-lg font-bold">{certificate.institution}</h3>
            <div>{Duration(certificate.duration)}</div>
          </div>
          <p>{certificate.course} {certificate.grade && `(Grade : ${certificate.grade})`}</p>
          <p>{certificate.typeOfCertificate}</p>
          <p>{certificate.description}</p>
          {certificate.link && <div className="mt-1">            
            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
            <strong>Certificate Link</strong>{' '}
            </a>
          </div>}
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
