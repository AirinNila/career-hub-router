import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../utilities/localStorage';
import AppliedJob from '../appliedJob/AppliedJob';

const Applied = () => {
    const jobs = useLoaderData()
    const [getjobs, setGetjobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

            const handleFilter = filter => {
        if(filter === 'All'){
            setDisplayJobs(getjobs)
        }
        else if(filter === 'Remote'){
           const remoteJobs = getjobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
       
        }
        else{
            const outsideJobs = getjobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(outsideJobs)
        }
    }

    useEffect( () => {
        const storedJobId = getStoredJobApplication();
        if(jobs.length > 0){
            const jobApplied = jobs.filter(job => storedJobId.includes(job.id));
            console.log( jobApplied, storedJobId)
            setGetjobs(jobApplied)
            setDisplayJobs(jobApplied)
        }
    } ,[jobs])



    return (
        <div>
            <div className="flex justify-center mt-10 mb-10">
            <h2 className="text-2xl font-bold">Applied Job</h2>
             </div>
             
           
             <div className='flex flex-col items-end gap-4'>
                  <div className='mr-32'>
                <details className="dropdown">
  <summary className="btn m-1">Flter By</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={() => handleFilter('All')}><a>All</a></li>
    <li onClick={() => handleFilter('Remote')}><a>Remote</a></li>
    <li onClick={() => handleFilter('Onsite')}><a>Outside</a></li>
  </ul>
</details>
             </div>
            {
                displayJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
            }
            </div>
        </div>
    );
};

export default Applied;