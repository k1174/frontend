const Steps = () => {
    return (

        <>


            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Need to Schedule an Event?</h1>
                    <p className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 ">Start scheduling today and discover how simple it is to bring your event vision to life with just a few clicks.</p>

                    <div className="flex justify-center w-full mb-8">

                        <ol className="flex  items-center w-2/3 text-sm font-medium text-center text-gray-500  sm:text-base">
                            <li className="flex md:w-full items-center text-blue-600  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ">
                                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
                                <span className="me-2">1</span>
                                    Create <span className="hidden sm:inline-flex sm:ms-2">Event</span>
                                </span>
                            </li>
                            <li className="flex text-blue-600 md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 ">
                                <span className="flex  items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 ">
                                    <span className="me-2">2</span>
                                    Get <span className="hidden sm:inline-flex sm:ms-2">Verified</span>
                                </span>
                            </li>
                            <li className="flex text-blue-600 items-center">
                                
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                Published
                            </li>
                        </ol>


                    </div>

                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="/addjob" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                            Create Event
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="/register" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">
                            Register
                        </a>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Steps;