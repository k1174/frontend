import { useState } from "react";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
//ActivityReport
const AddActivityReport = ({ job }) => {
    const { jobId } = useParams();
    const [modal, setModal] = useState(false);
    const togle = () => {
        setModal(!modal);
    }
    const [fileName, setFileName] = useState('');


    const handelSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        const url = '/api/AddActivityReport/' + jobId;
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        })

        if (response.ok) {
            toast.success("ActivityReport added successfully")
        }
        else {
            toast.error('Unexpected error occurred');
        }

        togle();
    }
    console.log(job.ActivityReport)
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const files = fileName + ', ' + file.name
            setFileName(files);
        }
    };

    return (
        <>

            <button onClick={togle}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
                {job.ActivityReport && job.ActivityReport.length > 0 ? "Update Activity Report" : "Add Activity Report"}
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
                                    Upload Activity Report
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
                                <div className="flex items-center justify-center w-full mb-4">

                                    <label htmlFor="ActivityReport"
                                        className={`flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ${fileName ? 'border-green-500' : ''}`}
                                    >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500">
                                                <span className="font-semibold">Click to upload</span>
                                            </p>
                                            <p className="text-xs text-gray-500">PDF (MAX. 5MB)</p> :
                                            {fileName && <p className="mt-2 text-sm text-gray-700">Selected file: {fileName}</p>}
                                        </div>
                                        <input
                                            id="ActivityReport"
                                            type="file"
                                            className="hidden"
                                            onChange={handleFileChange}

                                            accept='.pdf'
                                            name="ActivityReport"
                                        />
                                    </label>
                                </div>
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

export default AddActivityReport;