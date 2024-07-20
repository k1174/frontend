import JobListing from './JobListing';
import { useState, useEffect } from 'react';

const JobListings = ({ isHome = true }) => {
    const [isLoading, setLoading] = useState(true)
    const [recent, setRecent] = useState([])
    
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/jobs')
            const result = await response.json()
            const recentJobs = isHome ? result.slice(0, 3) : result;
            setRecent(recentJobs);
        } catch (error) {
            console.error(error)
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
                <div >Loading</div>
            ) : (
                <section className="bg-blue-50 px-4 py-10">
                    <div className="container-xl lg:container m-auto">
                        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                            {isHome ? "Recent Jobs" : "Browse Jobs"}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <>
                                {recent.map(job => (
                                    <JobListing key={job.id} job={job} />
                                ))}
                            </>

                        </div>
                    </div>
                </section>)}
        </>
    )
}

export default JobListings;