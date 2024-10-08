import { NavLink } from 'react-router-dom';
import Pagination from './Pagination';
import JobListings from './JobListings';

export default function Test() {
    return (
        <>
            <nav className="border-gray-200 bg-white">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center whitespace-nowrap text-2xl font-semibold">Event</span>
                    </a>
                    <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"  >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>

                    </button>
                    <div className=" w-full md:block md:w-auto" id="navbar-default">
                        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 ">
                            <li>
                                <NavLink to="/" className="block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/eventsPage" className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Events</NavLink>
                            </li>
                            <li>
                                <NavLink to="/addjob" className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Add Events</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Register</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <JobListings isHome={false}/>
            <Pagination pages={5}/>

        </>
    )
}

