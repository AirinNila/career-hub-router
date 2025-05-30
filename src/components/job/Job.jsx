import { Link } from "react-router-dom";

const Job = ({job}) => {
     
    const {logo ,job_title, company_name, location, remote_or_onsite, job_type, salary, id} = job;
    return (
        <div className='border-2 flex flex-col gap-4 border-gray-200 rounded-xl p-4 md:p-6  '>
            <div><img src={logo} alt="" /></div>
            <h2 className='title text-2xl font-extrabold'>{job_title}</h2>
            <p className='des text-xl'>{company_name}</p>
            <div className='flex items-center gap-2 '>
            <button className='btn border-2 border-[#7E90FE] text-[#9873FF]'>{remote_or_onsite}</button>
            <button className='btn border-2 border-[#7E90FE] text-[#9873FF]'>{job_type}</button>
            </div>
            <div className='flex items-center text-xl gap-2 des'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <div>
           <Link to={`/job/${id}`}> <button className='btn bg-linear-to-r from-[#7E90FE] to-[#9873FF] text-white'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Job;