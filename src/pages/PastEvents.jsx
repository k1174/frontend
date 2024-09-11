import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import JobListing from '../components/JobListing';

const PastEvents = () => {
    // const { isAdmin } = useAuth();
    // const [loading, setLoading] = useState(true);
    // const [pastEvents, setPastEvents] = useState(null);

    // useEffect(() => {
    //     const fetchPastEvents = async () => {
    //         try {
    //             const response = await fetch('/api/past');
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch data');
    //             }
    //             const result = await response.json();
    //             console.log(result)
    //             setPastEvents(result);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Failed to fetch data: ', error);
    //         }
    //     };
    //     fetchPastEvents();
    // }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }


    return (

        <>
            {/* List of past events */}
            {/* {isAdmin &&
                <>
                    <section className="bg-blue-50 px-4 py-10">
                        <div className="container-xl lg:container m-auto">
                            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                                {"Past Events"}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {pastEvents && pastEvents.length > 0 ? (
                                    pastEvents.map((event) => (
                                        <JobListing key={event._id} job={event} isHome={false} isAdmin={true}/>
                                    ))
                                ) : (
                                    <p>No events found.</p>
                                )}
                            </div>
                        </div>
                    </section>

                </>
            } */}
            
        </>
    );
}

export default PastEvents;