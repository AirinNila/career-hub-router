import { useEffect, useState } from "react";
import Job from "../job/Job";

const Featured = () => {
    const [jobs, setJobs] = useState([])
    const [jobLength, setJobLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="mb-10">
            <section className="flex flex-col gap-4 items-center font-bold mt-10">
                <h2 className="text-2xl md:text-4xl title">Featured Jobs</h2>
                <p className="des text-base text-center" >Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        jobs.slice(0, jobLength).map(job => <Job key={job.id} job={job}></Job>)
                    }
                </div>
                <div className= {jobLength === jobs.length && 'hidden'}>
                 <button
                 onClick={() => setJobLength(jobs.length)}
                 className='btn bg-linear-to-r from-[#7E90FE] to-[#9873FF] text-white'>View Details</button>
                 </div>
            </section>
        </div>
    );
};

export default Featured;