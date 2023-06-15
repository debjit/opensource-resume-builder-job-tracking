import React from "react";
import Nav from "../components/Layout/Nav";
import Progress from "../components/Common/Progress";
import Link from "next/link";

function Apply({ job }) {
  // Todo
  // Check word Matching
  // Check for skills Matching.
  // Check For % of
  //
  console.log(job);
  return (
    <>
      <Nav></Nav>
      <div className="mx-auto max-w-7xl">
        {/* Left side for Jobs */}
        <div className="bg-slate-50 rounded-md shadow-md border border-slate-300 p-5 mt-5">
          <h1 className="text-2xl py-2">Applying with FullStack Resume</h1>
          <h2 className="text-xl py-2 mb-2">
            Job name:
            <Link
              href="{job.applyUrl}"
              className="underline underline-offset-1"
            >
              {job.title}
            </Link>
          </h2>
          <Progress label="Resume Word Match" percentage={30} />
          <Progress label="Skills Match" percentage={60} />
          <div className="flex justify-center gap-3 py-4">
            <button
              onClick={() => alert("Applied Successfully.")}
              className="py-1 px-2 bg-green-300 text-black rounded-sm text-center"
            >
              Apply Now
            </button>
            <button
              className="py-1 px-2 bg-blue-300 text-black rounded-sm text-center"
              onClick={() =>
                alert(
                  "AI will generate the Resume and CV now, edit for customisation."
                )
              }
            >
              Create New Resume + CV Using AI
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apply;

export async function getServerSideProps() {
  try {
    const response = await fetch("https://cache.showwcase.com/jobs/6814");
    const job = await response.json();

    return {
      props: {
        job,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        job: {},
      },
    };
  }
}
