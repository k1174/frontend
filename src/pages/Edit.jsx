import { Form, useLoaderData } from "react-router-dom";
import Tooltip from "../components/Tooltip";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect } from "react";

export default function Edit() {

    const job = useLoaderData();
    
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

    if (!creator && !isAdmin) {
        return (
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <h2 className="text-3xl text-center font-semibold mb-6">You do not have permission to edit this event</h2>
                </div>
            </div>
        )
    }


    const date = new Date(job.date);
    const adjusted = new Date(date.getTime() + (5 * 60 * 60 * 1000) + (30 * 60 * 1000));
    const formattedDate = adjusted.toISOString().slice(0, 16);

    

    return (
        <>  

            {<section className="bg-indigo-50">
                <div className="container m-auto max-w-2xl py-24">
                    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                        <Form method="post">
                            <h2 className="text-3xl text-center font-semibold mb-6">Edit Event</h2>

                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Event Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    defaultValue={job.name}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Location</label>
                                <input
                                    required
                                    type="text"
                                    name="location"
                                    id="location"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    defaultValue={job.location}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
                                <textarea
                                    name="description"
                                    id="description"
                                    cols="30"
                                    rows="4"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Add event details, activities, etc"
                                    defaultValue={job.description}
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Details </label>
                                <Tooltip />
                                <textarea
                                    name="details"
                                    id="details"
                                    cols="30"
                                    rows="10"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Add event details, activities, etc"
                                    defaultValue={job.details}
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Type</label>
                                <input
                                    required
                                    type="text"
                                    name="type"
                                    id="type"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    defaultValue={job.type}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="department" className="block text-gray-700 font-bold mb-2">Department</label>
                                <input
                                    required
                                    type="text"
                                    name="department"
                                    id="department"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    defaultValue={job.department}
                                />
                            </div>

                            <div className="mb-4 flex gap-2">
                                <div className="flex-1">
                                    <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
                                    <input
                                        required
                                        type="datetime-local"
                                        name="date"
                                        id="date"
                                        className="border rounded w-full py-2 px-3"
                                        defaultValue={formattedDate}
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
                                <input
                                    required
                                    type="number"
                                    name="price"
                                    id="price"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    defaultValue={job.price}
                                    min={0}
                                />
                            </div>

                            <hr className="my-6" />

                            <h3 className="text-2xl mb-5">Organiser Info</h3>

                            <div className="mb-4">
                                <label htmlFor="organiserName" className="block text-gray-700 font-bold mb-2">Organiser Name</label>
                                <input
                                    required
                                    type="text"
                                    name="organiserName"
                                    id="organiserName"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    defaultValue={job.organiserName}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="organiserEmail" className="block text-gray-700 font-bold mb-2">Organiser Email</label>
                                <input
                                    required
                                    type="email"
                                    name="organiserEmail"
                                    id="organiserEmail"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    defaultValue={job.organiserEmail}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="organiserDepartment" className="block text-gray-700 font-bold mb-2">Organiser Department</label>
                                <input
                                    required
                                    type="text"
                                    name="organiserDepartment"
                                    id="organiserDepartment"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    defaultValue={job.organiserDepartment}
                                />
                            </div>
                            {job.registrationStart &&
                                <>
                                    <div className="mb-4 flex gap-2">
                                        <div className="flex-1">
                                            <label htmlFor="registrationStart" className="block text-gray-700 font-bold mb-2">Registraion Start</label>
                                            <input
                                                required
                                                type="datetime-local"
                                                name="registrationStart"
                                                id="registrationStart"
                                                className="border rounded w-full py-2 px-3"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4 flex gap-2">
                                        <div className="flex-1">
                                            <label htmlFor="registrationEnd" className="block text-gray-700 font-bold mb-2">Registraion End</label>
                                            <input
                                                required
                                                type="datetime-local"
                                                name="registrationEnd"
                                                id="registrationEnd"
                                                className="border rounded w-full py-2 px-3"
                                            />
                                        </div>
                                    </div>
                                </>
                            }
                            <div>
                                <button
                                    type="submit"
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                >
                                    Submit
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>}
        </>
    )
}