import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export default function Pagination({pages}) {
    return (
        <nav className="mx-auto max-w-md mb-4">

            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 ">

                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">

                    <div>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                            <button  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                <span className="sr-only">Previous</span>
                                <MdArrowBackIos />
                            </button>
                            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                            
                            {/*loop to  pages */}
                            {
                                Array.from({length: pages}, (_, i)=>(
                                    <button id={i+1} key={i} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        {i+1}
                                    </button>
                                ))
                            }
                            
                            
                            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                ...
                            </span>

                            {/* <button className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
                                8
                            </button>
                            <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                9
                            </button>
                            <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" >
                                10
                            </button> */}

                            <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                <span className="sr-only">Next</span>
                                <MdArrowForwardIos />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>

        </nav>
    )
}