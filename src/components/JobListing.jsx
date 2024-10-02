import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const JobListing = ({ job, isHome, isAdmin }) => { // {job} -> Destructuring assignment
    const [daysLeft, setDaysLeft] = useState(0);
    const [hoursLeft, setHoursLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);

    const description = job.description.substring(0, 90) + '...';

    let url = isHome ? `/eventspage/${job._id}` : `${job._id}`
    if (isAdmin) {
        url = `/admin/${job._id}`
    }

    function calculateTimeLeft() {
        // Define your job date and time
        const jobDate = job.date; //'2024-09-20T00:00:00.000Z'; // job.date in ISO format
        const jobTime = job.time; // '06:00 PM'; // job.time in 12-hour format

        // Function to convert 12-hour time format to 24-hour time format
        function convertTo24Hour(time) {
            const [timePart, modifier] = time.split(' ');
            let [hours, minutes] = timePart.split(':').map(Number);

            if (modifier === 'PM' && hours < 12) {
                hours += 12;
            } else if (modifier === 'AM' && hours === 12) {
                hours = 0;
            }

            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        }

        // Combine job date and time into a single Date object
        const jobTime24Hour = convertTo24Hour(jobTime);
        const jobDateTime = new Date(`${jobDate.slice(0, 10)}T${jobTime24Hour}:00`);

        // Get the current date and time
        const now = new Date();

        // Calculate the difference in milliseconds
        const diffMs = jobDateTime - now;

        // Convert milliseconds to days and hours
        const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
        const msPerHour = 60 * 60 * 1000; // Number of milliseconds in an hour
        const msPerMinute = 60 * 1000; // Number of milliseconds in a minute

        const days = Math.floor(diffMs / msPerDay);
        const hours = Math.floor(diffMs / msPerHour);
        const minutes = Math.floor((diffMs % msPerHour) / msPerMinute);

        setDaysLeft(days);
        setHoursLeft(hours);
        setMinutesLeft(minutes);

        // if (daysLeft >= 1) {
        //     console.log(`Days left: ${daysLeft}`);

        // } else {
        //     // Calculate hours and minutes left

        //     console.log(`Time left: ${hoursLeft} hours ${minutesLeft} minutes`);
        //     // console.log(jobDateTime," - " , now);
        // }

        return { daysLeft, hoursLeft, minutesLeft };

    }

        // Effect to calculate time left and set interval
    useEffect(() => {
        calculateTimeLeft(); // Initial calculation

        // Set interval to update countdown every minute
        const interval = setInterval(calculateTimeLeft, 60000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [job]);

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
                        {daysLeft > 0 ?

                            <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2  border border-gray-500 ">
                                <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                </svg>
                                 {daysLeft} Days left
                            </span>
                            : hoursLeft >= 0 ?
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded  border border-blue-400">
                                <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                </svg>
                                {hoursLeft} hrs {minutesLeft} mins left
                            </span>
                            :
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded  border border-blue-400">
                                <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                </svg>
                                Completed
                            </span>
                        }

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