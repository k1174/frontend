import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Spinner from "./Spinner";
import HomePagePastEvent from "./HomePagePastEvent";
const PAGE_SIZE_HOME = 3;

const HomePagePastEvents = () => {
    // State to hold the fetched data
    const [isLoading, setLoading] = useState(true)
    const [recent, setRecent] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {

                let url = '/api/past'

                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }

                const result = await response.json()
                setRecent(result.slice(0, PAGE_SIZE_HOME));

            } catch (error) {
                console.error(error)
                setError('Failed to fetch data. Please try again later.')
            } finally {
                setLoading(false)
            }

        }
        fetchData()
    }, [])

    if (isLoading) {
        return (
            <Spinner />
        )
    }
    else if (error) return <div className="text-red-500 text-center">{error}</div>;
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Past Events
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recent.map((event, i) => {
                        // Calculate days ago

                        return (
                            // <div
                            //     key={i}
                            //     className="bg-white rounded-lg shadow-lg "
                            //     // style={{ height: '400px' }} // Set a fixed height for the card
                            // >
                            //     <div className="p-6 flex flex-col h-full relative">
                            //         <h3 className="text-xl font-bold mb-2 text-gray-900">{event.name}</h3>
                            //         <div className="aspect-video relative mb-4" style={{ height: '200px' }}>
                            //             <img
                            //                 alt={event.name}
                            //                 className="object-cover rounded-lg w-full h-full"
                            //                 src={
                            //                     event.images[0] || 'https://res.cloudinary.com/dzdt11nsx/image/upload/v1728322526/cs1_pc5eza.jpg'
                            //                 } // Extract the first image from the details
                            //             />
                            //         </div>
                            //         <div className="flex justify-between items-center text-sm text-gray-500">
                            //             <div className="flex items-center space-x-2">
                            //                 <CalendarDays className="h-4 w-4" />
                            //                 <span > <span className="underline underline-offset-2">Completed</span> {`${daysAgo} days ago`}</span> {/* Display days ago */}
                            //             </div>
                            //             <div className="flex items-center space-x-2">
                            //                 <MapPin className="h-4 w-4" />
                            //                 <span>{event.location}</span>
                            //             </div>
                            //         </div>

                            //         <div className="px-6 py-4 flex justify-center  ">
                            //             <Link to={`/past/${event._id}`} className=" px-4 py-2 bg-white border text-blue-600 border border-blue-600 rounded hover:bg-gray-50 transition-colors">
                            //                 Learn More
                            //             </Link>
                            //         </div>
                            //     </div>

                            // </div>
                            <HomePagePastEvent job={event} key={i} />
                        );
                    })}
                </div>
                <section className="m-auto max-w-lg my-10 px-6">
                    <Link
                        to="past"
                        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
                    >View All Past Events</Link
                    >
                </section>
            </div>
        </section>
    );
}

export default HomePagePastEvents;