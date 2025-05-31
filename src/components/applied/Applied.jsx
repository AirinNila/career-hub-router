import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../utilities/localStorage';
import AppliedJob from '../appliedJob/AppliedJob';

const Applied = () => {
    const jobs = useLoaderData()
    const [getjobs, setGetjobs] = useState([])
    useEffect( () => {
        const storedJobId = getStoredJobApplication();
        if(jobs.length > 0){
            const jobApplied = jobs.filter(job => storedJobId.includes(job.id));
            console.log( jobApplied, storedJobId)
            setGetjobs(jobApplied)
        }
    } ,[])
    return (
        <div>
            <div className="flex justify-center mt-10 mb-10">
            <h2 className="text-2xl font-bold">Applied Job</h2>
             </div>
             
           
             <div className='flex flex-col gap-4'>
                  <div>
                <details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
             </div>
            {
                getjobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
            }
            </div>
        </div>
    );
};

export default Applied;