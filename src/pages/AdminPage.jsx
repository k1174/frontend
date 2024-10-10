import JobListings from "../components/JobListings";
import { Link } from "react-router-dom";

export default function AdminPage(){
    return (
        <>
        <section>
            <div className="container m-auto py-6 px-6">
                <Link
                    to="/date"
                    className="text-indigo-500 hover:text-indigo-600 flex items-center"
                >
                    <i className="fas fa-arrow-left mr-2"></i> Select date range
                </Link>
            </div>
        </section>
        <JobListings isHome={false} isAdmin={true}/>
        </>
    )
}