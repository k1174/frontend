import { Form } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import Tooltip from '../components/Tooltip';
import Upload from '../components/Upload';
import FormComponet from '../components/FormComponet'
import { useState } from 'react';

const AddJob = () => {
    const { user } = useAuth();
    const [showRegistration, setShowRegistration] = useState(true);

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const currentDate = new Date();

        // Check if the selected date is in the past
        setShowRegistration(selectedDate >= currentDate);
    }

    return (
        <>
            <section className="bg-indigo-50">
                <div className="container m-auto max-w-2xl py-2">
                    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                        <Form method="post" encType="multipart/form-data">
                            <h2 className="text-3xl text-center font-semibold mb-6">Add Event</h2>

                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Event Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="border rounded w-full py-2 px-3 mb-2"
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
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
                                <textarea
                                    required
                                    name="description"
                                    id="description"
                                    cols="30"
                                    rows="4"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Add event Description"
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Details</label>
                                <Tooltip />
                                <textarea
                                    name="details"
                                    id="details"
                                    cols="30"
                                    rows="10"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Add event details, activities, etc"
                                ></textarea>
                            </div>

                            <Upload />

                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Type</label>
                                <input
                                    required
                                    type="text"
                                    name="type"
                                    id="type"
                                    className="border rounded w-full py-2 px-3 mb-2"
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
                                        onChange={handleDateChange}
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
                                />
                            </div>

                            {/* userId */}
                            <input
                                type="hidden"
                                name="userId"
                                value={user._id}
                            />


                            {/* Registraion  Section start*/}
                            {showRegistration &&
                                <>
                                <hr />
                                <h3 className="text-2xl my-5">Add Registraion Details</h3>

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

                                <div className="mb-4">Form Fields</div>
                                <FormComponet />
                            </>}

                            {/* Registraion  Section End*/}

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
            </section>
        </>
    )
}
export default AddJob;