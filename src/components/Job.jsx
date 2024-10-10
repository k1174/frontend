import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext"
import AdminManage from "./AdminManage";
import UserManage from "./UserManage";
import Carousel from "./Carousel";
import parseCustomSyntax from "../methods/parseCutomSyntax";

const Job = ({ job }) => {
    const { user, isAdmin, isAuthenticated } = useAuth();
    const [submit, setSubmit] = useState(false)
    const [creator, setCreator] = useState(false)

    //get user id from token
    const token = localStorage.getItem('token');

    useEffect(() => {

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
            if(result==true){
                setCreator(true)
            }
        }
        fetchData()
    }, [job])


    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target)
    //     const data = Object.fromEntries(formData.entries())
    //     data.eventId = job._id
    //     data.userId = user._id
    //     setSubmit(true)
    //     fetch(`/service/feedback`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     })
    // }

    let formattedText = '';

    if (job.details) {
        formattedText = parseCustomSyntax(job.details);
    }
    const fetchUrl = window.location.href
    let event = ""
    if(fetchUrl.includes('/past')) event = "past"

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
                                <p className="mb-4">{job.time}</p>
                                <p className="mb-4">{job.date.split('T')[0]}</p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Price</h3>

                                <p className="mb-4">{job.price}</p>
                            </div>

                              
                            {/* {isAuthenticated && !isAdmin && !submit && !creator && event === "past" &&

                                <div className="bg-white p-6 rounded-lg shadow-md mt-6">

                                    <form onSubmit={handleSubmit} >

                                        <label htmlFor="feedback" className="block mb-2 text-sm font-medium text-gray-900 ">Your Feedback</label>
                                        <textarea name="feedback" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-offset-1 focus:outline-indigo-600" placeholder="Write your thoughts here..." ></textarea>

                                        <label htmlFor="rating" className="inline-block my-2 text-sm font-medium text-gray-900 ">Rating : </label>
                                        <input name="rating" type="range" defaultValue="3" min="0" max="5" step="1" className=" h-2 bg-gray-200 rounded-lg  cursor-pointer " />

                                        <button type="submit" className="block p-2 text-gray-600 text-sm font-semibold py-2.5 hover:bg-gray-100 border border-gray-400 rounded ">Submit</button>

                                    </form>
                                </div>
                            } */}

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
                            {isAdmin ? <AdminManage /> : 
                            creator ? <AdminManage /> :
                            event === "past"   
                            ? "" : <UserManage job={job} /> }
                        </aside>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Job