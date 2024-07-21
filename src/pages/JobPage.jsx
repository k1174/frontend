import { useLoaderData } from "react-router-dom";

const JobPage = () => {
    const job = useLoaderData();
    
    return (
        <>
            <div>
                <div>
                    <h2>{job.title}</h2>
                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Salary:</strong> {job.salary}</p>
                    <p><strong>Description:</strong> {job.description}</p>
                    <div>
                        <h3>Company Details</h3>
                        <p><strong>Name:</strong> {job.company?.name}</p>
                        <p><strong>Description:</strong> {job.company?.description}</p>
                        <p><strong>Contact Email:</strong> {job.company?.contactEmail}</p>
                        <p><strong>Contact Phone:</strong> {job.company?.contactPhone}</p>
                    </div>
                </div>
                <div>{job.salary}</div>
            </div>
        </>
    )
}

export default JobPage