import { useState } from 'react';
import { useAuth } from "../../context/AuthContext";
import { toast } from 'react-toastify';

const RegisterForm = ({ job }) => {
    const { isAuthenticated, user } = useAuth();

    const [modal, setModal] = useState(false);
    const togle = () => {
        if (!isAuthenticated) {
            // alert('Please login to register for the event')
            toast('Please login to register for the event');
        }
        else{
            setModal(!modal);
        }
    }

    const handelSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())

        const response = await fetch(`/service/registerEvent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: user._id, eventId: job._id, additionalDetails: data })  // Add the user id and event id
        })

        if (response.ok) {
            const data = await response.json();
            toast.success(data.message);
        } 
        else {
            console.log(response)
            toast.error('Unexpected error occurred');
        }

        togle();
    }

    return (
        <>
            {/* <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                    Form Fields
                </h3>
                {job.formData.map((item, index) => (
                    <div key={index} className="mb-4">
                        <label htmlFor={item.value} className="block text-gray-700 font-bold mb-2">{item.value}</label>
                        <input
                            required
                            type={item.field}
                            name={item.value}
                            id={item.value}
                            className="border rounded w-full py-2 px-3 mb-2"
                        />
                    </div>
                ))}
            </div> */}

            {   !isAuthenticated ?

                <a href="/login"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                    Login
                </a>

                :
                <button onClick={togle}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                    Register
                </button>
            }

            {/* <!-- Main modal --> */}
            <div id="default-modal" tabIndex="-1" aria-hidden="true" className={`${modal ? '' : 'hidden'} flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow ">
                        <form onSubmit={handelSubmit}>

                            {/* <!-- Modal header --> */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                                <h3 className="text-xl font-semibold text-gray-900 ">
                                    Form Fields
                                </h3>
                                <button type="button" onClick={togle} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>


                            {/* <!-- Modal body --> */}
                            <div className="p-4 md:p-5 space-y-4">
                                {job.formData.map((item, index) => (
                                    <div key={index} className="mb-4">
                                        <label htmlFor={item.value} className="block text-gray-700 font-bold mb-2">{item.value}</label>
                                        <input
                                            required
                                            type={item.field}
                                            name={item.value}
                                            id={item.value}
                                            className="border rounded w-full py-2 px-3 mb-2"
                                        />
                                    </div>
                                ))}
                            </div>


                            {/* <!-- Modal footer --> */}
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">I accept</button>
                                <button onClick={togle} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Decline</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}
export default RegisterForm;