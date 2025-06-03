
const AppliedJob = ({job}) => {
    
    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
    return (
        <div className="container mx-auto">
              
            <div className="flex flex-col md:flex-row items-center md:justify-between p-4 border-2 border-gray-300 rounded-md">
               <div className="flex gap-4 items-center">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className="flex flex-col gap-2 ">
                    <h3>{job_title}</h3>
                    <p>{company_name}</p>
                    <div className="flex gap-2 items-center">
                        <button className="btn border-2 border-[#7E90FE] text-[#9873FF]">{remote_or_onsite}</button>
                        <button className="btn border-2 border-[#7E90FE] text-[#9873FF]">{job_type}</button>
                    </div>
                    <div className="flex gap-2 items-center">
                        <p>{location}</p>
                        <p>{salary}</p>
                    </div>
                </div>
                </div>
                <div>
                    <button className="btn w-full bg-linear-to-r from-[#7E90FE] to-[#9873FF] text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;