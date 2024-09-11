/* eslint-disable react-hooks/exhaustive-deps */
import JobListing from './JobListing';
import { useState, useEffect } from 'react';
import { Form, useSubmit } from "react-router-dom";
import Spinner from './Spinner';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const PAGE_SIZE_HOME = 3;
const PAGE_SIZE_DEFAULT = 12;

const JobListings = ({ isHome = true, isAdmin = false }) => {

    const [isLoading, setLoading] = useState(true)
    const [recent, setRecent] = useState([])
    const [error, setError] = useState(null);
    const [pages, setPages] = useState(1);
    const [page, setPage] = useState(1);
    // const [query, setQuery] = useState('');
    const submit = useSubmit();
    //get the query from url
    const params = new URL(window.location.href).searchParams;
    const q = params.get('q');
    // console.log(query, params.get('q'))
    //print url
    // console.log(window.location.href)
    const fetchUrl = window.location.href
    /*

    //debounce was implemente but need to learn usecallback
    const debounce = (form, isFirstSearch, delay) => {
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            submit(form, { replace: !isFirstSearch, })
        }, delay)
    }

    */

    const fetchData = async () => {
        setLoading(true)

        await delay(1000);
        try {

            let url = isAdmin ? '/pia' : '/api'
            if(fetchUrl.includes('/past')) url = '/api/past';
            if (q) {
                url = `${url}?q=${q}`
            }
            // console.log(url, isAdmin)
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            const result = await response.json()

            setPages(Math.ceil(result.length / 12))
            if (isHome) {
                setRecent(result.slice(0, PAGE_SIZE_HOME));
            } else {
                setRecent(result.slice(((page - 1) * PAGE_SIZE_DEFAULT), page * PAGE_SIZE_DEFAULT));
            }


        } catch (error) {
            console.error(error)
            setError('Failed to fetch data. Please try again later.')
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchData()
    }, [q, page])

    useEffect(() => {
        setPage(1)
    }, [q])


    if (error) return <div className="text-red-500 text-center">{error}</div>;


    return (
        <>

            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {isHome ? "Recent Events" : "Browse Events"}
                    </h2>

                    {!isHome &&
                        <Form className="mx-auto max-w-md mb-4" >
                            <label htmlFor="q" className="sr-only mb-2 text-sm font-medium text-gray-900">Search</label>

                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                    <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>

                                <input
                                    onChange={(e) => {
                                        const isFirstSearch = q == null;
                                        submit(e.currentTarget.form, {
                                            replace: !isFirstSearch, //
                                        });
                                    }}

                                    type="search" id="q" name="q" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-0" placeholder="Search Events..." required defaultValue={q} />
                            </div>
                        </Form>
                    }

                    {isLoading ? <Spinner /> :
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <>
                                {recent.map(job => (
                                    <JobListing key={job._id} job={job} isHome={isHome} isAdmin={isAdmin} />
                                ))}
                            </>

                        </div>}
                </div>
            </section>

            { !isHome &&
                pages > 1 && !isLoading &&
                <nav className="w-full flex justify-center ">

                    <div className="flex items-center justify-between border-t border-gray-200  px-4 py-3 sm:px-6 ">

                        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">

                            <div>
                                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                                    <button onClick={() => setPage(page - 1)} disabled={page == 1}
                                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        <span className="sr-only">Previous</span>
                                        <MdArrowBackIos />
                                    </button>
                                    {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}

                                    {/*loop to  pages */}
                                    {
                                        Array.from({ length: pages }, (_, i) => (
                                            <button id={i + 1} key={i} onClick={() => setPage(i + 1)}
                                                // className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-300 focus:z-20 focus:outline-offset-0"
                                                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-300 focus:z-20 focus:outline-offset-0 ${page == i + 1 ? 'bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'text-gray-900'}`}
                                                >
                                                {i + 1}
                                            </button>
                                        ))
                                    }


                                    {/* <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                                        ...
                                    </span> */}

                                    {/* <button className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
                                8
                            </button>
                            <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                9
                            </button>
                            <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" >
                                10
                            </button> */}

                                    <button onClick={() => setPage(page + 1)} disabled={page >= pages}
                                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                        <span className="sr-only">Next</span>
                                        <MdArrowForwardIos />
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>

                </nav>
            }
            { !isHome && pages > 1 && !isLoading &&
                <div className="w-full flex justify-center">
                    <div >
                        Showing Page : {page} of {pages}
                    </div>
                </div>}
        </>
    )
}

export default JobListings;