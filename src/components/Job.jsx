import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext"
import AdminManage from "./AdminManage";
import UserManage from "./UserManage";
import Carousel from "./Carousel";
import parseCustomSyntax from "../methods/parseCutomSyntax";
import PastEventManage from "./PastEventManage";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import BackLink from "./BackLink";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import { IoIosCreate } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import TotalRegistration from "./TotalRegistration";
import moment from "moment"
import { GoCopy } from "react-icons/go";
import { LuCheck } from "react-icons/lu";


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

    // const UrlbyOrg = job.details?.match(/(https?:\/\/[^\s]+)/g);



    const [showTooltip, setShowTooltip] = useState("copy"); // Initial state for tooltip
    const [copied, setCopied] = useState(false); // State to manage emoji

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true); // Change the emoji state to "copied"
                setShowTooltip("Copied!"); // Change tooltip text
                // Set a timeout to revert back to the original emoji and tooltip text
                setTimeout(() => {
                    setCopied(false);
                    setShowTooltip("copy"); // Reset tooltip to original
                }, 1000); // Change back after 1 second
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <>

            <section className="bg-indigo-50">
                {/* <div className=" w-full h-[450px] flex justify-center "> */}
                {/* this is for event banner image */}

                {/* <img className="object-fill   max-h-[450px]" src={`https://www.shutterstock.com/shutterstock/photos/2478322965/display_1500/stock-vector-abstract-blue-background-with-glowing-geometric-lines-modern-blue-gradient-square-shape-design-2478322965.jpg`} alt="" /> */}


                {/* <img className="object-fill w-full max-h-[450px]" src={`${job.images[0]}`} alt="" /> */}

                {/* </div> */}
                <BackLink />

                <div className="container m-auto py-2 px-6">
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


                                </div>
                            </div>






                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    Event Description
                                </h3>
                                <p className="mb-4">{job.description}</p>

                                {job.images.length > 0 &&
                                    <Carousel items={job.images} />

                                }



                                {/* <div style={{ whiteSpace: 'pre-wrap' }} className="mb-4">{job.details}</div> */}
                                {job.details &&
                                    <>
                                        <h3 className="text-indigo-800 text-lg font-bold mb-2">
                                            Event Details
                                        </h3>
                                        <div className="mb-6"
                                            dangerouslySetInnerHTML={{ __html: formattedText }}
                                            style={{ whiteSpace: 'pre-wrap' }} 
                                        />
                                    </>
                                }

                            </div>
                        </main>









                        {/* <!-- Sidebar --> */}
                        <aside>


                            {/* Event Link */}
                            {/* {
                                <div className="bg-white rounded-lg shadow-md ">
                                    <div className="p-6 mb-3">


                                        <p className="font-normal text-gray-500 ">Link Provided by Organiser</p>
                                        <a className="text-base font-normal" href={UrlbyOrg} > {UrlbyOrg} </a>
                                        <div>

                                        </div>
                                    </div>
                                </div>

                            } */}

                            {/* <!-- Company Info --> */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold mb-3 flex justify-center">Organiser Information</h3>

                                <div>
                                    <div>
                                        <p className="font-normal text-gray-500 ">Organiser Name</p>

                                        <p className="text-base font-bold">{job.organiserName}</p>
                                    </div>

                                </div>


                                <hr className="my-4" />

                                <div className="space-y-2">
                                    <div className="flex">
                                        {/* email styling */}
                                        <div className="flex w-10 items-center">
                                            {/* for icons */}
                                            <div className="bg-orange-100 p-2 rounded-full">

                                                <MdOutlineAlternateEmail className="text-orange-400 h-6 w-6" size={20} />
                                            </div>
                                        </div>
                                        <div className="flex-1 ml-3 flex items-center">
                                            {/* for text */}
                                            <div>

                                                <div className="flex">
                                                    <p className="font-normal text-gray-500">Organiser Email</p>
                                                    <div className="relative inline-block">
                                                        <button
                                                            className="ml-2 p-1 text-gray-500 hover:text-gray-700 border-none"
                                                            onMouseEnter={() => setShowTooltip(copied ? "Copied!" : "copy")}
                                                            onMouseLeave={() => setShowTooltip(copied ? "Copied!" : "copy")}
                                                            onClick={() => copyToClipboard(job.organiserEmail)} // Replace with your text
                                                        >
                                                            {copied ? <LuCheck className="transition duration-1000" /> : <GoCopy className="transition duration-1000" />}
                                                        </button>
                                                        {copied && <div className="absolute  bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-center text-sm rounded py-1 px-2">
                                                            {showTooltip === 'copy' && <>Copy</>}
                                                            {showTooltip === 'Copied!' && <>Copied!</>}
                                                        </div>
                                                        }
                                                    </div>
                                                </div>

                                                <p className="font-medium text-sm break-all">{job.organiserEmail}</p>
                                            </div>

                                            {/* Clipboard button */}

                                            {/* <LuCheck /> */}
                                        </div>
                                    </div>




                                    <div className="flex">
                                        {/* email styling */}
                                        <div className="flex w-10 items-center">
                                            {/* for icons */}
                                            <div className="bg-orange-100 p-2 rounded-full">

                                                <FcDepartment className="text-orange-400 h-6 w-6" size={20} />
                                            </div>
                                        </div>
                                        <div className="flex-1 ml-3">
                                            {/* for text */}
                                            <p className="font-normal text-gray-500 ">Organiser Department</p>
                                            <p className="font-medium ">{job.organiserDepartment}</p>
                                        </div>

                                    </div>

                                </div>

                            </div>




                            {/* Date and Venue */}
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                {/* Event Date */}
                                <div className="flex items-center mb-4">
                                    <div className="bg-blue-100 p-2 rounded-full">
                                        <FaCalendarAlt className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-600">Event Date</p>
                                        <p className="text-lg font-medium">{moment(job.date).format('ddd, MMM DD YYYY')}</p>

                                    </div>
                                </div>


                                {/* Venue */}
                                <div className="flex items-center">
                                    <div className="bg-purple-100 p-2 rounded-full">
                                        <FaMapMarkerAlt className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-600">Venue</p>
                                        <p className="text-lg font-medium">{job.location}</p>
                                    </div>
                                </div>
                            </div>


                            {/* Registred User and Fees */}
                            <div className="bg-white p-6 rounded-lg shadow-md  mt-6">


                                <div className="flex items-center mb-4">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        {/* <!-- Icon for Registrations --> */}
                                        <IoIosCreate className="text-green-400 h-6 w-6" />
                                    </div>
                                    <div className="ml-3">

                                        <p className="text-gray-600">Total Registrations</p>
                                        <p className="text-lg font-normal">{<TotalRegistration job={job} />}</p>

                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-orange-100 p-2 rounded-full">
                                        {/* <!-- Icon for Fee --> */}
                                        <FaIndianRupeeSign className="text-orange-600 h-6 w-6" />

                                    </div>
                                    <div className="ml-3">

                                        <p className="text-gray-600">Registration Fee</p>
                                        {job.price == 0 ? (<> <p className="text-lg  font-normal"> Free</p></>) : (<><p className="text-lg font-normal">{job.price}</p></>)}
                                    </div>
                                </div>
                            </div>


                            {/* <!-- Manage --> */}
                            {
                                isPast(job.date)
                                    ? <PastEventManage job={job} /> : !creator && !isAdmin && <UserManage job={job} />
                            }

                            {(isAdmin || creator) && <AdminManage job={job} />}
                        </aside>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Job