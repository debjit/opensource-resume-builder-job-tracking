import React, { useEffect, useState } from "react";
import Nav from "../components/Layout/Nav";
import { CheckCircleIcon, LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Index({ jobs }) {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold py-4 capitalize">
          All jobs that You have visited so far
        </h2>
        {jobs.map((job) => {
          return (
            <div className="py-2" key={job.id}>
              <div className="border rounded-lg p-4 shadow-md flex justify-between items-start">
                <div className="flex items-start">
                  {job.company.logo && (
                    <img
                      className="h-12 w-12 rounded-full bg-gray-50"
                      src={job.company.logo}
                      alt="Company Logo"
                    />
                  )}
                  <div className="ml-4">
                    <div className="text-lg font-semibold">
                      {job.company.name} (Score: {job.score}) (Total applied:{" "}
                      {job.totalApplicants})
                    </div>
                    <div className="mt-2">
                      <p className="font-bold">{job.title}</p>
                      <p>
                        {job.experience
                          ? job.experience
                          : "No Experience provided"}
                      </p>
                      <p className="mt-2">
                        {job.salary.range
                          ? job.salary.range
                          : "No salary provided"}
                      </p>
                      <div className="flex items-center mt-2">
                        <span className="mr-2 text-gray-500">
                          <LinkIcon className="h-5 w-5" />
                        </span>
                        <a
                          href={job.applyUrl}
                          className="text-blue-500 hover:underline"
                        >
                          Direct Application Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right min-h-full">
                  {job.hasApplied ? (
                    <div className="flex flex-col items-center">
                      <dvi className="flex flex-row item-center">
                        <p className="mr-2 text-green-500">
                          <CheckCircleIcon className="h-5 w-5" />
                        </p>
                        <p>Applied</p>
                      </dvi>
                      <Link
                        className="mt-4 py-1 px-2 bg-blue-600 text-white rounded-md text-center mb-1"
                        href="/jobs/track"
                      >
                        Track Job
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 my-auto item-center justify-center">
                      <select
                        id="dropdown"
                        className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Resume</option>
                        <option value="option1">Base</option>
                        <option value="option2">Full Stack</option>
                        <option value="option3">Front End</option>
                        <option value="option3">Back End</option>
                        <option value="option3">Freelancer</option>
                      </select>
                      <Link
                        href="/jobs/apply"
                        id="applyButton"
                        class="bg-blue-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md disabled"
                      >
                        Evaluate and Apply
                        {/* <span class="tooltip text-xs ml-2">(Coming Soon)</span> */}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
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
  return { props: { jobs } };
};

export default Index;
