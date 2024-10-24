import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext"
import AdminManage from "./AdminManage";
import UserManage from "./UserManage";
import Carousel from "./Carousel";
import parseCustomSyntax from "../methods/parseCutomSyntax";
import PastEventManage from "./PastEventManage";
import TimeDisplay from "./TimeDisplay";
import { CalendarCheck, ReceiptIndianRupee } from "lucide-react";

const Job = ({ job }) => {
    const { isAdmin, isAuthenticated } = useAuth();
    const [creator, setCreator] = useState(false)


    useEffect(() => {

        const fetchData = async () => {
            //get user id from token
            const token = localStorage.getItem('token');
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
            fetchData();
        }
    }, [job, isAuthenticated])


    let formattedText = '';

    if (job.details) {
        formattedText = parseCustomSyntax(job.details);
    }

    function isPast(date) {
        const eventDate = new Date(date);
        const now = new Date();
        const diffMs = eventDate.getTime() - now.getTime();
        if (diffMs < 0) return true
    }

    return (
        <>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                            >
                                <div className="text-gray-500 mb-4">{job.type}</div>
                                <h1 className="text-3xl font-bold mb-4">
                                    {job.name}
                                </h1>
                                <div
                                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                >
                                    <i
                                        className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                                    ></i>
                                    <p className="text-orange-700">{job.location}</p>
                                </div>
                            </div>

                            {job.images.length > 0 &&
                                <Carousel items={job.images} />
                            }

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    Event Description
                                </h3>

                                <p className="mb-4">{job.description}</p>
                                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                                    Event Details
                                </h3>
                                {/* <div style={{ whiteSpace: 'pre-wrap' }} className="mb-4">{job.details}</div> */}
                                {job.details &&
                                    <div className="mb-6"
                                        dangerouslySetInnerHTML={{ __html: formattedText }}
                                        style={{ whiteSpace: 'pre-wrap' }}
                                    />}

                                <p className="mb-2 flex ">
                                    <span className="flex gap-1  mr-4">
                                        <CalendarCheck size={20} strokeWidth={1} />
                                        {new Date(job.date).toLocaleDateString()}
                                    </span>
                                    <TimeDisplay jobDate={job.date} />
                                </p>
                                <p className="mb-4 flex">Fees : {job.price < 1 ? "Free" : job.price}<ReceiptIndianRupee size={20} strokeWidth={1} /></p>
                               
                            </div>


                        </main>

                        {/* <!-- Sidebar --> */}
                        <aside>
                            {/* <!-- Company Info --> */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold mb-3">Organiser Info</h3>

                                <p className="text-base">{job.organiserName}</p>

                                {/* <p className="my-2">{job.company.description}</p> */}

                                <hr className="my-4" />

                                <h3 className="text-base rounded-lg my-2 p-2 bg-gray-100 "> Email :

                                    <span className="pl-1   font-semibold">
                                        {job.organiserEmail}
                                    </span>
                                </h3>


                                <h3 className="text-base rounded-lg my-2 p-2 bg-gray-100">Department :
                                    <span className="pl-1  font-semibold">
                                        {job.organiserDepartment}
                                    </span>
                                </h3>

                            </div>

                            {/* <!-- Manage --> */}
                            {
                                isPast(job.date)
                                    ? <PastEventManage job={job} /> : !creator && !isAdmin && <UserManage job={job} />
                            }

                            {(isAdmin || creator) && <AdminManage job={job}  />}
                        </aside>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Job