import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Job from "../components/Job"
import BackLink from "../components/BackLink"
// import DownloadEmailsButton from "../components/Email";
import { useAuth } from "../../context/AuthContext";
import TotalRegistration from "../components/TotalRegistration";
// import DownloadReportButton from "../components/Report";
// import Feedbacks from "../components/Feedbacks.jsx";
const JobPage = () => {
    const job = useLoaderData();
    const { isAdmin, isAuthenticated } = useAuth();
    const url = '/dashboard/' + job._id;
    
    const [creator, setCreator] = useState(false)
    


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


    
    }, [job])



    return (
        <>
            <Job job={job} />

        
        </>
    )
}

export default JobPage