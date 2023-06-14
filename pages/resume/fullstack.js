import Nav from "../components/Layout/Nav";
import EmploymentInfo from "../components/Resume/EmploymentInfo";
import ContactSection from "../components/Resume/ContactSection";
import UserProfile from "../components/Resume/UserProfile";
import Summery from "../components/Resume/Summery";
import ProjectSection from "../components/Resume/ProjectSection";
import EducationSection from "../components/Resume/EducationSection";
import ActivitySection from "../components/Resume/ActivitySection";
import SkillsComponent from "../components/Resume/SkillsComponent";
import AwardsComponent from "../components/Resume/AwardsComponent";
import VolunteeringComponent from "../components/Resume/VolunteeringComponent";
import demoData from "@/demoData/_fullstack";



export default function Fullstack() {
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
