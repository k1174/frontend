import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const JobListing = ({ job, isHome, isAdmin }) => { // {job} -> Destructuring assignment
    const description = job.description.substring(0, 90) + '...';

    let url = isHome ? `/eventspage/${job._id}` : `${job._id}`
    if (isAdmin) {
        url = `/admin/${job._id}`
    }
    return (
        <>
            <div className="bg-white rounded-xl shadow-md relative  hover:shadow-lg hover:ring-1 hover:ring-gray-200  ">
                <div className="p-4 ">
                    <div className="mb-6">
                        <div className="text-gray-600 my-2">{job.type}</div>
                        <h3 className="text-xl font-bold"> {job.name} </h3>
                    </div>

                    <div className="mb-4 h-20 ">{description}</div>


                    <h3 className="text-indigo-500 mb-4">Price: {job.price}</h3>
                    <p className="mb-2"> {new Date(job.date).toLocaleDateString()}   {job.time} <span></span></p>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="text-orange-700 mb-3 flex items-start gap-x-1">
                            <FaMapMarkerAlt className=" text-lg " />
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
                {job.status !== 'pending' ?
                    <span className="absolute -translate-y-1/5 translate-x-1/9 left-auto top-2 right-2">
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full ">
                            <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                            Verified
                        </span>
                    </span>
                    :

                    <span className="absolute -translate-y-1/5 translate-x-1/9 left-auto top-1 right-2">

                        <span className=" inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full ">
                            <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                            Not verified
                        </span>
                    </span>
                }
            </div>
        </>
    )
}

export default JobListing