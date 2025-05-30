import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const prsId = parseInt(id)
    const job = jobs.find(job => job.id === prsId)

    return (
        <div className="mb-10">
        <div className="flex justify-center mt-10 mb-10">
            <h2 className="text-2xl font-bold">Job Details</h2>
        </div>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="md:col-span-3 gap-4">
                    <div className="flex flex-col gap-4">
                    <h2 className="des text-base"><span className="text-xl title font-bold">job_description: </span>{job.job_description}</h2>
                    <h2 className="des text-base"><span className="text-xl font-bold title">Job Responsibility: </span>{job.job_responsibility}</h2>
                    <h2 className="text-xl font-bold">Educational Requirements: </h2>
                    <p className="des text-base">{job.educational_requirements}</p>
                    <h2 className="text-xl font-bold">Experiences: </h2>
                    <p className="des text-base">{job.experiences}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:col-span-2">
                    <div className="bg-linear-to-r from-[#7E90FE1A] to-[#9873FF1A] flex flex-col gap-4 p-6 rounded-xl">
                        <h2 className="text-xl title font-bold">Job details</h2>
                        <div className="flex flex-col gap-2">
                            <h3 className="des text-xl"><span className="text-xl title font-bold">Salary: </span>{job.salary}</h3>
                            <h3 className="des text-xl"><span className="text-xl title font-bold">Job title: </span>{job.job_title}</h3>
                        </div>
                        <h2 className="text-xl title font-bold">Contact Information</h2>
                        <div className="flex flex-col gap-2">
                            <h3 className="des text-xl"><span className="text-xl title font-bold">Phone: </span>{job.contact_information.phone}</h3>
                            <h3 className="des text-xl"><span className="text-xl title font-bold">Email: </span>{job.contact_information.email}</h3>
                            <h3 className="des text-xl"><span className="text-xl title font-bold">Address: </span>{job.contact_information.address}</h3>
                        </div>
                    </div>
                    <button className="btn bg-linear-to-r from-[#7E90FE] to-[#9873FF] text-white">Apply Now</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default JobDetails;