import { useState } from "react";
import Upload from "./Upload"
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const AddImages = () => {
    const { jobId } = useParams();
    const [modal, setModal] = useState(false);
    const togle = () => {
        setModal(!modal);
    }

    const handelSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        const url = '/api/addImages/' + jobId;
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        })

        if (response.ok) {
            toast.success("Image added successfully")
        }
        else {
            toast.error('Unexpected error occurred');
        }

        togle();
    }

    return (
        <>
            <button onClick={togle}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
                Add Image
            </button>
            {/* <!-- Main modal --> */}
            <div id="default-modal" tabIndex="-1" aria-hidden="true" className={`${modal ? '' : 'hidden'} flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow ">
                        <form onSubmit={handelSubmit} encType="multipart/form-data">

                            {/* <!-- Modal header --> */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                                <h3 className="text-xl font-semibold text-gray-900 ">
                                    Upload Image
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
                                <Upload />
                            </div>


                            {/* <!-- Modal footer --> */}
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Upload</button>
                                <button onClick={togle} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Cancel</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AddImages;