import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Page() {
  const [allJobs, setAllJobs] = useState([]);
  const [jobs, setJobs] = useState([])

    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'X-API-KEY': '8dd1f147ebfc002cd10e2b57392e4176f1298e36d54696446f'
            },
          };

          const response = await fetch(`https://cache.showwcase.com/jobs/visited`, options);
          const data = await response.json();
          setAllJobs(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchJobs();
    }, []);
  const router = useRouter();
  const { type } = router.query;
  return (
    <div className="p-8">
      {allJobs.map((job) => {
        return (
          <div className="py-2" key={job.id}>
          <div>
          {job.company.name} ( Score: {job.score}) (Total applied : {job.totalApplicants})
          </div>
            {job.title}/{job.experience ? job.experience : "No Experience provided"}/
            <p>{job.salary.range ? job.salary.range : "No salary provided"}</p>
            <p>
              <a href={job.applyUrl}>Link</a>
            </p>
            <p>{job.hasApplied ?  "Applied" : "Not applied"}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Page;