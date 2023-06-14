import { getAllResume, createResume } from "@/appwrite/database";
import TextInput from "@/pages/components/Common/Form/TextInput";
import Loader from "@/pages/components/Common/Loader";
import Modal from "@/pages/components/Common/Modal/Modal";
import Nav from "@/pages/components/Layout/Nav";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Resume({ jobs }) {
  const router = useRouter();
  const [resumes, setResumes] = useState([]);
  const [loader, setLoader] = useState(false);
  const [createResumeModal, setCreateResumeModal] = useState(false);
  const [newResume, setNewResume] = useState("");

  function createNewResume() {
    // const createResumeDB = createResume({ name: newResume });
    // createResumeDB.then(
    //   function (response) {
    //     router.push(`/resume/editor/${response.$id}`);
    //   },
    //   function (error) {
    //     console.log(error);
    //   }
    // );
    alert("This is a demo! Creating Resume is disabled.");
  }
  useEffect(() => {
    setLoader(true);
    const getResumes = getAllResume();

    getResumes.then(
      function (response) {
        console.log(response.documents);
        setResumes(response.documents);
        setLoader(false);
      },
      function (error) {
        setLoader(false);
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <Nav />
      <Modal isOpen={createResumeModal} setIsOpen={setCreateResumeModal}>
        <TextInput
          name={"createResume"}
          label="Provide Resume Name"
          value={newResume}
          onChange={(e) => setNewResume(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            onClick={() => setCreateResumeModal(false)}
            className="py-1 px-3 bg-rose-600 text-white text-md rounded-md my-2"
          >
            Cancel
          </button>
          <button
            onClick={() => createNewResume()}
            className="py-1 px-3 bg-blue-600 text-white text-md rounded-md my-2"
          >
            Create Resume
          </button>
        </div>
      </Modal>

      <section className="max-w-7xl mx-auto">
        <div className="w-full justify-between flex flex-row my-4">
          <h1 className="uppercase text-4xl font-bold">List of all resume</h1>
          <button
            onClick={() => setCreateResumeModal(true)}
            className="py-1 px-3 bg-blue-600 text-white text-xl rounded-md"
          >
            Add Resume
          </button>
        </div>
      </section>
      <section className="max-w-7xl mx-auto">
        {loader && <Loader />}

        <div className="grid grid-cols-3 gap-4">
          {!loader &&
            resumes.map((resume) => {
              return (
                <div
                  key={resume.$id}
                  className="bg-slate-50 shadow-md border p-4 rounded-md"
                >
                  <h3 className="text-md font-bold ">{resume.name}</h3>
                  <p className="text-sm mb-4">
                    Status: {resume.status ? "Published" : "Draft"}
                  </p>
                  <div className="flex gap-2">
                    <button
                      className="py-1 px-3 bg-green-600 text-white rounded-md"
                      href={`/resume/editor/${resume.$id}`}
                    >
                      {resume.status ? "Print" : "Preview"}
                    </button>
                    <Link
                      className="py-1 px-3 bg-blue-600 text-white rounded-md"
                      href={`/resume/editor/${resume.$id}`}
                    >
                      Update
                    </Link>
                    <button
                      className="py-1 px-3 bg-rose-600 text-white rounded-md"
                      href={`/resume/editor/${resume.$id}`}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <ul></ul>
      </section>
    </>
  );
}

export default Resume;
