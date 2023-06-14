import React, { useEffect } from "react";
import { useRouter } from "next/router";
import UserProfile from "@/pages/components/Print/UserProfile";
import ContactSection from "@/pages/components/Print/ContactSection";
import Summery from "@/pages/components/Print/Summery";
import EmploymentInfo from "@/pages/components/Print/EmploymentInfo";
import SkillsComponent from "@/pages/components/Print/SkillsComponent";
import ProjectSection from "@/pages/components/Print/ProjectSection";
import EducationSection from "@/pages/components/Print/EducationSection";
import ActivitySection from "@/pages/components/Print/ActivitySection";
import AwardsComponent from "@/pages/components/Print/AwardsComponent";
// import VolunteeringComponent from "@/pages/components/Common/VolunteeringComponent";
import demoData from "@/demoData/_base";

function Print() {
  const router = useRouter();
  const { type } = router.query;

  useEffect(() => {
    window.print();
  }, []);

  return (
    <div>
      <div className="main-content">
        <div className="w-3/12 px-4">
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
        </div>
      </div>
    </div>
  );
}

export default Print;
