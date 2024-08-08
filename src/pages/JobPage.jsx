import { useLoaderData } from "react-router-dom";
import Job from "../components/Job"
import BackLink from "../components/BackLink"
import DownloadEmailsButton from "../components/Email";
import { useAuth } from "../../context/AuthContext";
import TotalRegistration from "../components/TotalRegistration";

const JobPage = () => {
    const job = useLoaderData();
    const { isAdmin } = useAuth();
    return (
        <>
            <BackLink />
            <Job job={job} />

            <div className="flex justify-center items-baseline">
                {<TotalRegistration job={job} />}
            </div>

            <div className="flex justify-center">
                {isAdmin && <DownloadEmailsButton job={job} />}
               
            </div>

        </>
    )
}

export default JobPage