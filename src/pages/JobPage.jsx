import { useLoaderData } from "react-router-dom";
import Job from "../components/Job"
import BackLink from "../components/BackLink"
import AddToCal from "../components/AddToCal"

const JobPage = () => {
    const job = useLoaderData();
    return (
        <>
            <BackLink />
            <Job job={job} />
            <AddToCal job={job} />
        </>
    )
}

export default JobPage