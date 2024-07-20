import jobs from '../jobs.json'
import JobListing from './JobListing';


const JobListings = ({ isHome = true }) => {

    const recent = isHome ? jobs.slice(0, 3) : jobs;//showing just 3 jobs instead of all
    return (
        <>
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
            </section>
        </>
    )
}

export default JobListings;