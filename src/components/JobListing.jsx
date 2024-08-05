import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const JobListing = ({ job, isHome, isAdmin }) => { // {job} -> Destructuring assignment
    const description = job.description.substring(0, 90) + '...';
    const [showFullDesc, setShowFullDesc] = useState(false)
    let url = isHome ? `/eventspage/${job._id}`: `${job._id}`
    if(isAdmin){
        url = isHome ? `/admin/${job._id}` : `${job._id}`
    }
    return (
        <>
            <div className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                    <div className="mb-6">
                        <div className="text-gray-600 my-2">{job.type}</div>
                        <h3 className="text-xl font-bold"> {job.name} </h3>
                    </div>

                    <div className="mb-4">{showFullDesc ? job.description : description}</div>
                    
                    <button onClick={() => (setShowFullDesc( prevState => (!prevState)))}
                        className="mb-7 text-indigo-600">{showFullDesc ? "Less" : "More"}</button>
                    <p className="mb-1">{job.time}</p>
                    <p className="mb-4">{job.date.split('T')[0]}</p>

                    <h3 className="text-indigo-500 mb-2">Price: {job.price}</h3>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="text-orange-700 mb-3 flex items-start gap-x-1">
                            <FaMapMarkerAlt className=" text-lg "/>
                            {job.location}
                        </div>
                        <Link
                            to={url}
                            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobListing