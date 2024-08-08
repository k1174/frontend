import { useAuth } from "../../context/AuthContext"
import AdminManage from "./AdminManage";
import UserManage from "./UserManage";

const Job = ({ job }) => {
    const { isAdmin } = useAuth();
    console.log(job)

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

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    Job Description
                                </h3>

                                <p className="mb-4">{job.description}</p>
                                <p className="mb-4">{job.time}</p>
                                <p className="mb-4">{job.date.split('T')[0]}</p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Price</h3>

                                <p className="mb-4">{job.price}</p>
                            </div>
                        </main>

                        {/* <!-- Sidebar --> */}
                        <aside>
                            {/* <!-- Company Info --> */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Organiser Info</h3>

                                <h2 className="text-2xl">{job.organiserName}</h2>

                                {/* <p className="my-2">{job.company.description}</p> */}

                                <hr className="my-4" />

                                <h3 className="text-xl">Contact Email:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {job.organiserEmail}
                                </p>

                                <h3 className="text-xl">Department :</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">{job.organiserDepartment} </p>
                            </div>

                            {/* <!-- Manage --> */}
                            {isAdmin ? <AdminManage /> : <UserManage job={job}/>}
                        </aside>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Job