import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Job from "../components/Job"
import BackLink from "../components/BackLink"
// import DownloadEmailsButton from "../components/Email";
import { useAuth } from "../../context/AuthContext";
import TotalRegistration from "../components/TotalRegistration";
// import DownloadReportButton from "../components/Report";
// import Feedbacks from "../components/Feedbacks.jsx";
import PopupModal from "../components/PopupModal"
const JobPage = () => {
    const job = useLoaderData();
    const { isAdmin, isAuthenticated } = useAuth();
    const url = '/dashboard/' + job._id;

    const [creator, setCreator] = useState(false)

    
    const [showPopupModal, setShowPopupModal] = useState(false);
// 




    useEffect(() => {
        //get user id from token
        const token = localStorage.getItem('token');
        const fetchData = async () => {
            const response = await fetch('/auth/checkEvent',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ eventId: job._id, token: token }),
                }
            )
            if (!response.ok) {
                console.error('Failed to fetch data')
                return
            }
            const result = await response.json()
            if (result == true) {
                setCreator(true)
            }
        }
        if (isAuthenticated) {
            fetchData()
        }

        if (showPopupModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [job, showPopupModal])

    return (
        <>
            <Job job={job} />

         

            {(isAdmin || creator) &&
                <>
                    <div className="flex justify-center">
                        {/* <DownloadEmailsButton job={job} /> */}
                        {/* <DownloadReportButton job={job} /> */}
                        {/* <a href={url} className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >DashBoard</a> */}
                        <a  className="hover:cursor-pointer" onClick={() => { setShowPopupModal(true) }} >Dashboard</a>
                        {showPopupModal && <PopupModal onClose={() => setShowPopupModal(false)} />}

                        {/* <Feedbacks job={job} /> */}
                    </div>

                </>

            }

        </>
    )
}

export default JobPage