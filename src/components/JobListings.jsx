import JobListing from './JobListing';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const JobListings = ({ isHome = true, isAdmin = false}) => {
    const [isLoading, setLoading] = useState(true)
    const [recent, setRecent] = useState([])
    const [error, setError] = useState(null);

    const fetchData = async () => {
        await delay(1000);
        try {

            const url = isAdmin ? '/pia' : '/api'
            console.log(url, isAdmin)
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            const result = await response.json()
            if (isHome) {
                setRecent(result.slice(0, 3)); 
              } else {
                setRecent(result); 
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
    }, [])

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : error ? (
                <>
                    <div className="text-red-500 text-center">{error}</div>;
                </>
            ) : (
                <section className="bg-blue-50 px-4 py-10">
                    <div className="container-xl lg:container m-auto">
                        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                            {isHome ? "Recent Events" : "Browse Events"}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <>
                                {recent.map(job => (
                                    <JobListing key={job._id} job={job} isHome={isHome} isAdmin={isAdmin} />
                                ))}
                            </>

                        </div>
                    </div>
                </section>)}
        </>
    )
}

export default JobListings;