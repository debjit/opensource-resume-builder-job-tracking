
import React from 'react'
import Nav from '../components/Layout/Nav'
import UserProfile from '../components/Resume/UserProfile';
import ContactSection from '../components/Resume/ContactSection';
import Summery from '../components/Resume/Summery';
import EmploymentInfo from '../components/Resume/EmploymentInfo';
import SkillsComponent from '../components/Resume/SkillsComponent';
import ProjectSection from '../components/Resume/ProjectSection';
import EducationSection from '../components/Resume/EducationSection';
import ActivitySection from '../components/Resume/ActivitySection';
import AwardsComponent from '../components/Resume/AwardsComponent';
import VolunteeringComponent from '../components/Resume/VolunteeringComponent';
import demoData from "@/demoData/_frontend";

function Frontend() {
  return (
    <>
      <Nav resume={demoData.resume} />
      <div className="main-content">
        <div className="w-3/12 px-8">
        <div className="sticky top-0">
          <UserProfile data={demoData} />
          <ContactSection contacts={demoData.resume.contacts} />
          
        </div>
        </div>
        <div className="w-9/12 px-8 pb-10">
          <Summery summery={demoData.resume.summery} /> 
          <EmploymentInfo employments={demoData.resume.employments} />
          <SkillsComponent skills={demoData.resume.skills} />
          <ProjectSection projects={demoData.resume.projects} />
          <EducationSection
            educationCertificates={demoData.resume.educationCertificates}
          />
          <ActivitySection activities={demoData.resume.activities} />
          <AwardsComponent awards={demoData.resume.awards} />
          <VolunteeringComponent volunteering={demoData.resume.volunteering} />          
        </div>
      </div>
    </>
  );
}
export default Frontend