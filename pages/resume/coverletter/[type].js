import React from 'react';
import { useRouter } from "next/router";
import Nav from '@/pages/components/Layout/Nav';
import UserProfile from '@/pages/components/Resume/UserProfile';
import ContactSection from '@/pages/components/Resume/ContactSection';
import CoverLetterUserInfo from '@/pages/components/CoverLettter/CoverLetterUserInfo';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

function Index() {
  const router = useRouter();
  const { type } = router.query;
  
  function getTypeOfStack(params) {

    switch (params) {
      case 'frontend':
        return 'Front End Developer';
      case 'backend':
        return 'Back End Developer';
      case 'fullstack':
        return 'Full Stack Developer';
      case 'fullstack-mern':
        return 'MERN Full Stack Developer';
      case 'freelancer':
        return 'Freelancer Software Engineer';
      case 'data-science':
        return 'Data Science';
      case 'data-analysis':
        return 'Data Analysis';
      case 'machine-learning':
        return 'Machine Learning';
      case 'data-visualization':
        return 'Data Visualization';
      case 'game-dev':
        return 'Game Dev';
      case 'ui-ux':
        return 'UI/UX';
      case 'data-entry':
        return 'Data Entry';
      case 'data-management':
        return 'Data Management';
      case 'data-scientist':
        return 'Data Scientist';
      case 'data-engineer':
        return 'Data Engineer';
      case 'data-analyst':
        return 'Data Analyst';
      case 'data-analyst-2':
        return 'Data Analyst 2'; 
    
      default:
        return "Software Engineer";
        break;
    }
  }


  return (
    <>
      <Nav />
      <div className="max-w-7xl mx-auto">
        {/* <div className="w-full mx-auto text-center">
          <h1 className="border-b-2 border-gray-400 ">
            Cover Letter for {type}
          </h1>
        </div> */}

        {/* Main Cover letter content */}
        <div className="main-content">
          <div className="w-3/12 px-8 bg-slate-200 py-4">
            <div className="sticky top-0">
              <CoverLetterUserInfo data={demoData} />
              <ContactSection contacts={demoData.contacts} />
            </div>
          </div>
          <div className="w-9/12 px-8 pb-10 border-l-4 border-gray-400">
            {/* Cover Letter Headline */}
            <div className="flex gap-4 my-auto">
              <DocumentTextIcon className="w-12 h-12" />
              <h2 className="text-2xl font-bold border-b-2 border-gray-400 w-full">
                Cover Letter
              </h2>
            </div>
            {/* Main Area for Cover Letter Content  */}
            <div className='py-16'>
            <div className='text-xl flex font-bold gap-2'>
              Job Ref:{" "}<p>{getTypeOfStack(type ?? null)}</p>
            </div>
            <p className='text-xl flex font-bold'>Dated : {new Date().toDateString()}</p>
            <p className='pt-16  font-semibold text-base'>Dear sir,</p>
            <div className='pt-4 font-semibold text-base' dangerouslySetInnerHTML={{ __html: demoData.coverLetterContent }}></div>
            <p className='text-xl flex font-bold pt-16'>Yours  Sincerely</p>
            <p className='text-xl flex font-bold pt-4'>{`${demoData.userInfo.title} ${demoData.userInfo.firstName} ${demoData.userInfo.lsatName}`}</p>
            <p className='text-xl flex font-bold pt-4'>{getContact('address')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index

const getContact = (type) => {
  const addressContact = demoData.contacts.find(contact => contact.type === type);
  return addressContact ? addressContact.value : '';
};

const demoData = {
  id: "uuida1",
  userId: 1,
  resumeType: "fullstack",
  jobTitle:"Front End Developer",
  userInfo: {
    title: "Mr",
    firstName: "Debjit",
    lsatName: "Biswas",
  },
  contacts: [
    {
      type: "phone",
      value: "9999999999",
    },
    {
      type: "email",
      value: "debjit012@gmail.com",
    },
    {
      type: "address",
      value: "Murshidabad, West Bengal, India",
    },
    {
      type: "website",
      value: "https://debjit.in",
    },
    {
      type: "github",
      value: "debjit",
    },
    {
      type: "twitter",
      value: "debjit012",
    },
    {
      type: "linkedin",
      value: "in/debjitwb",
    },
  ],
  coverLetterContent:`<p>Highly skilled and versatile web developer with a strong passion for creating user-friendly and innovative web applications. With 5 years of experience in both frontend and backend development, I possess a comprehensive understanding of the full software development lifecycle. I am adept at utilizing cutting-edge technologies, such as HTML, CSS, JavaScript, React, NextJS, VueJS, PHP, Laravel, and Livewire, to deliver robust and efficient solutions.</p><p>Throughout my career, I have demonstrated a track record of delivering high-quality projects that meet client requirements and exceed expectations. I excel at collaborating with cross-functional teams to ensure seamless integration between frontend and backend systems, while prioritizing performance, functionality, and user experience. Additionally, my expertise extends to mobile app development using React-Native and proficient server management using GitHub Actions, cPanel, Vercel, Heroku, and Digital Ocean.</p><p>With a strong attention to detail and a commitment to continuous learning, I thrive in dynamic and fast-paced environments. I am eager to leverage my skills and experience to contribute to the success of Bitfumes, while further expanding my technical expertise.</p><p>Please note that this introduction can be customized to align with your specific skills, experience, and career goals. It should serve as a concise and compelling summary that captures the attention of potential employers and highlights your unique value proposition.</p>`
};