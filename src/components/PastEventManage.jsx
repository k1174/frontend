const PastEventManage = ({ job }) => {

    return (
        <>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6 ">

                <h3 className="text-xl font-bold mb-6">Explore</h3>

                {job.brochure && job.brochure.length > 0 ?
                    <a href={`${job.brochure}`}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    >
                        Brochure
                    </a>
                    :
                    <p className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block" >
                        Brochure not available
                    </p>
                }
                {job.ActivityReport && job.ActivityReport.length > 0 ?
                    <a href={`${job.ActivityReport}`}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    >
                        Activity Report
                    </a>
                    :
                    <p className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block" >
                        Activity Report not available
                    </p>
                }

            </div>

        </>
    )
}

export default PastEventManage;