import { Link } from "react-router-dom";

const HomeCards = () => {
    return (
        <>
            <section className="py-4">
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                        <div className={`bg-gray-100 p-6 rounded-lg shadow-md`}>
                            <h2 className="text-2xl font-bold">For Creators</h2>
                            <p className="mt-2 mb-4">
                                Get ready to schedule your events
                            </p>
                            <Link   
                                to="/eventsPage"
                                className={`inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
                            >
                                Create Event
                            </Link>
                        </div>

                        <div className={`bg-indigo-100 p-6 rounded-lg shadow-md`}>
                            <h2 className="text-2xl font-bold">For Attenders</h2>
                            <p className="mt-2 mb-4">
                            Find the your favourite events here
                            </p>
                            <Link
                                to="/addjob"
                                className={`inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600`}
                            >
                                Browse Events
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeCards;