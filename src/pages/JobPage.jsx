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
    const url = '/table/' + job._id;

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
                        <a href={url} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >DashBoard</a>
                        {/* <Feedbacks job={job} /> */}
                    </div>

                </>

            }

        </>
    )
}

export default JobPage