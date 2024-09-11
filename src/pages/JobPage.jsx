import { useLoaderData } from "react-router-dom";
import Job from "../components/Job"
import BackLink from "../components/BackLink"
import DownloadEmailsButton from "../components/Email";
import { useAuth } from "../../context/AuthContext";
import TotalRegistration from "../components/TotalRegistration";
import DownloadReportButton from "../components/Report";
// import Feedbacks from "../components/Feedbacks.jsx";
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

            {isAdmin &&
                <>
                    <div className="flex justify-center">
                        <DownloadEmailsButton job={job} />
                        <DownloadReportButton job={job} />
                        {/* <Feedbacks job={job} /> */}
                    </div>

                </>

            }

        </>
    )
}

export default JobPage