import Nav from "@/pages/components/Layout/Nav";
import React from "react";

export default function TrackJobs({ appliedJobs, savedJobs }) {
  // console.log(jobs);
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto w-full text-center">
          <h2 className="text-2xl font-bold py-4 capitalize">
            Track Your Jobs
          </h2>
        </div>
        <div className="w-full min-h-full grid grid-cols-4 gap-3">
          {/* Visited */}
          <div className="bg-slate-200 w-full h-full rounded-md p-3">
            <h3 className="text-md font-bold">Saved</h3>
            <p className="pb-4">All your saved job will be listed here.</p>
            <div>
              {savedJobs.map((job) => {
                return (
                  <div key={job.id} className="mx-1 mb-2 p-1 bg-white rounded-md">
                    <div className="ml-4">
                      <div className="text-lg font-semibold">
                      <p>
                        {job.company.name}
                      </p>
                      <p>
                         (Total applied:{" "}{job.totalApplicants})
                      </p>

                      </div>
                      <div className="mt-2">
                        <p className="font-bold">{job.title}</p>
                        <p>
                          {job.experience
                            ? job.experience
                            : ""}
                        </p>
                        <p className="mt-2">
                          {job.salary.range ? job.salary.range : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Applied */}
          <div className="bg-slate-200 w-full h-full rounded-md p-3">
            <h3 className="text-md font-bold">Applied</h3>
            <p className="pb-4">All your applied job will be listed here.</p>
            <div>
            {appliedJobs.map((job) => {
                return (
                  <div key={job.id} className="mx-1 mb-2 p-1 bg-white rounded-md">
                    <div className="ml-4">
                      <div className="text-lg font-semibold">
                      <p>
                        {job.company.name}
                      </p>
                      <p>
                         (Total applied:{" "}{job.totalApplicants})
                      </p>

                      </div>
                      <div className="mt-2">
                        <p className="font-bold">{job.title}</p>
                        <p>
                          {job.experience
                            ? job.experience
                            : ""}
                        </p>
                        <p className="mt-2">
                          {job.salary.range ? job.salary.range : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-slate-200 w-full h-full rounded-md p-3">
            <h3 className="text-md font-bold">Interview</h3>
            <p>If you got an interview, move your job here.</p>
          </div>
          <div className="bg-slate-200 w-full h-full rounded-md p-3">
            <h3 className="text-md font-bold">Offer</h3>
            <p>Congratulation! Your search is almost done.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": process.env.SHOWWCASE_KEY,
    },
  };
  const res = await fetch("https://cache.showwcase.com/jobs/visited", options);
  const jobs = await res.json();
  const appliedJobs = jobs.filter((job) => job.hasApplied);
  const savedJobs = jobs.filter((job) => !job.hasApplied);

  return {
    props: {
      appliedJobs,
      savedJobs,
    },
  };
};
