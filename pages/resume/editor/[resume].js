import { useState } from 'react';
import Nav from "../../components/Layout/Nav";
import DetailEvent from "../../components/Resume/FormInput/DetailEvent";
import BasicInfoComponent from "../../components/Resume/FormInput/BasicInfoComponent";
import SummeryComponent from "../../components/Resume/FormInput/SummeryComponent";
import Modal from '../../components/Common/Modal';
import { PlusIcon } from '@heroicons/react/24/outline';

function Editor() {
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = 'debjit';

  const handleClick = async () => {
    try {
      const response = await fetch(`https://cache.showwcase.com/user/debjit`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function submitForm() {}
  
  return (
    <>
      <Nav />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        Test
      </Modal>
      <div className="max-w-7xl mx-auto mt-4">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold mx-auto">Add/Update Resume (Demo Page)</h1>
            <button
              onClick={handleClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize my-2"
            >
              Get User Information from Showwcase
            </button>
            <button
              onClick={()=>alert("Demo App: Successful.")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold mx-3 py-2 px-4 rounded capitalize my-2"
            >
              Update Resume
            </button>
            <button
              onClick={()=>alert("Demo App: Successful.")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded capitalize my-2"
            >
              Publish Resume
            </button>
          </div>
          <h2 className="text-2xl font-bold pb-2 pt-6">Basic Information</h2>
          <BasicInfoComponent title={userData && userData.displayName} />
          <h2 className="text-2xl font-bold pb-2 pt-6">Summary</h2>
          <SummeryComponent summery={userData && userData.about} />
          <div className="mt-6 mb-2 border p-4 rounded">
            <div class="flex items-center justify-between">
              <h2 class="text-2xl font-bold">Education</h2>
              <button
                onClick={handleOpenModal}
                class="ml-4 py-0.5 px-4 text-md text-white test-border bg-blue-600 rounded-full"
              >
                Add
              </button>
            </div>
              <p className='text-base py-4'>Please add your educational details here.</p>
            <div>
            </div>
          </div>
          {/* <DetailEvent
            name={"test"}
            label={"test"}
            value={"test"}
            handleChange={submitForm}
          /> */}
          <h2 className="text-2xl font-bold pb-2 pt-6">Employment</h2>
          <DetailEvent
            name={"test2"}
            label={"test"}
            value={"test"}
            handleChange={submitForm}
          />
          <h2 className="text-2xl font-bold pb-2 pt-6">Skills</h2>
          <DetailEvent
            name={"test2"}
            label={"test"}
            value={"test"}
            handleChange={submitForm}
          />
          <h2 className="text-2xl font-bold pb-2 pt-6">Projects</h2>
          <DetailEvent
            name={"test2"}
            label={"test"}
            value={"test"}
            handleChange={submitForm}
          />
          <h2 className="text-2xl font-bold pb-2 pt-6">Awards</h2>
          <DetailEvent
            name={"test"}
            label={"test"}
            value={"test"}
            handleChange={submitForm}
          />
          <h2 className="text-2xl font-bold pb-2 pt-6">Activities</h2>
          <DetailEvent
            name={"test"}
            label={"test"}
            value={"test"}
            handleChange={submitForm}
          />
          <h2 className="text-2xl font-bold pb-2 pt-6">Volunteering</h2>
          <DetailEvent
            name={"test"}
            label={"test"}
            value={"test"}
            handleChange={submitForm}
          />
          <h2 className="text-2xl font-bold pb-2 pt-6">Others</h2>
          <DetailEvent
            name={"test"}
            label={"test"}
            value={"test"}
            handleChange={submitForm}
          />
        </div>
      </div>
    </>
  );
}

export default Editor;
